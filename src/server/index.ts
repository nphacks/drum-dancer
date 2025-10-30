import express from 'express';
import { InitResponse, IncrementResponse, DecrementResponse } from '../shared/types/api';
import { redis, reddit, createServer, context, getServerPort } from '@devvit/web/server';
import { createPost, createBeatSequencePost, createSpeedChallengePost } from './core/post';


const app = express();

// Middleware for JSON body parsing
app.use(express.json());
// Middleware for URL-encoded body parsing
app.use(express.urlencoded({ extended: true }));
// Middleware for plain text body parsing
app.use(express.text());



const router = express.Router();

router.get<{ postId: string }, InitResponse | { status: string; message: string }>(
  '/api/init',
  async (_req, res): Promise<void> => {
    const { postId } = context;

    if (!postId) {
      console.error('API Init Error: postId not found in devvit context');
      res.status(400).json({
        status: 'error',
        message: 'postId is required but missing from context',
      });
      return;
    }

    try {
      const [count, username] = await Promise.all([
        redis.get('count'),
        reddit.getCurrentUsername(),
      ]);

      // Try to get post data from multiple sources
      let postData = null;
      
      // First try Redis backup
      try {
        const postDataKey = `post_data:${postId}`;
        const redisPostData = await redis.get(postDataKey);
        if (redisPostData) {
          postData = JSON.parse(redisPostData);
          // console.log('Found post data in Redis:', postData);
        }
      } catch (redisError) {
        console.error('Error getting post data from Redis:', redisError);
      }
      
      // If not in Redis, try Reddit API
      if (!postData) {
        try {
          const post = await reddit.getPostById(postId);
          // console.log('Retrieved post object from Reddit API');
          
          // Try different ways to access the custom data
          if (post) {
            // console.log('Post keys:', Object.keys(post));
            postData = (post as any).customData || (post as any).postData || null;
            // console.log('Post data from Reddit API:', postData);
          }
        } catch (postError) {
          console.error('Error getting post data from Reddit API:', postError);
        }
      }

      // console.log('Final post data to send:', postData);

      res.json({
        type: 'init',
        postId: postId,
        count: count ? parseInt(count) : 0,
        username: username ?? 'anonymous',
        postData: postData,
      });
    } catch (error) {
      console.error(`API Init Error for post ${postId}:`, error);
      let errorMessage = 'Unknown error during initialization';
      if (error instanceof Error) {
        errorMessage = `Initialization failed: ${error.message}`;
      }
      res.status(400).json({ status: 'error', message: errorMessage });
    }
  }
);

router.post<{ postId: string }, IncrementResponse | { status: string; message: string }, unknown>(
  '/api/increment',
  async (_req, res): Promise<void> => {
    const { postId } = context;
    if (!postId) {
      res.status(400).json({
        status: 'error',
        message: 'postId is required',
      });
      return;
    }

    res.json({
      count: await redis.incrBy('count', 1),
      postId,
      type: 'increment',
    });
  }
);

router.post<{ postId: string }, DecrementResponse | { status: string; message: string }, unknown>(
  '/api/decrement',
  async (_req, res): Promise<void> => {
    const { postId } = context;
    if (!postId) {
      res.status(400).json({
        status: 'error',
        message: 'postId is required',
      });
      return;
    }

    res.json({
      count: await redis.incrBy('count', -1),
      postId,
      type: 'decrement',
    });
  }
);

router.post('/internal/on-app-install', async (_req, res): Promise<void> => {
  try {
    const post = await createPost();

    res.json({
      status: 'success',
      message: `Post created in subreddit ${context.subredditName} with id ${post.id}`,
    });
  } catch (error) {
    console.error(`Error creating post: ${error}`);
    res.status(400).json({
      status: 'error',
      message: 'Failed to create post',
    });
  }
});

router.post('/internal/menu/post-create', async (_req, res): Promise<void> => {
  try {
    const post = await createPost();

    res.json({
      navigateTo: `https://reddit.com/r/${context.subredditName}/comments/${post.id}`,
    });
  } catch (error) {
    console.error(`Error creating post: ${error}`);
    res.status(400).json({
      status: 'error',
      message: 'Failed to create post',
    });
  }
});

// Leaderboard API endpoints
router.post('/api/leaderboard/submit', async (req, res): Promise<void> => {
  try {
    // console.log('Received score submission:', req.body);
    const { username, score, difficulty, patternAccuracy } = req.body;
    
    if (!username || typeof score !== 'number' || !difficulty) {
      // console.log('Missing fields - username:', username, 'score:', score, 'difficulty:', difficulty);
      res.status(400).json({
        status: 'error',
        message: 'Missing required fields: username, score, difficulty'
      });
      return;
    }

    // Validate difficulty
    if (!['easy', 'medium', 'hard'].includes(difficulty)) {
      // console.log('Invalid difficulty:', difficulty);
      res.status(400).json({
        status: 'error',
        message: 'Invalid difficulty. Must be easy, medium, or hard'
      });
      return;
    }

    // Create leaderboard entry
    const entry = {
      username: String(username),
      score: Number(score),
      difficulty: String(difficulty),
      patternAccuracy: Number(patternAccuracy) || 0,
      timestamp: Date.now()
    };

    // console.log('Creating entry:', entry);

    // Store in Redis sorted set (higher scores first)
    const leaderboardKey = `leaderboard:${difficulty}`;
    // console.log('Storing in Redis key:', leaderboardKey);
    
    try {
      // Devvit Redis API uses different method signatures
      // console.log('Available Redis methods:', Object.getOwnPropertyNames(redis).filter(name => name.startsWith('z')));
      
      await redis.zAdd(leaderboardKey, { score: score, member: JSON.stringify(entry) });
      // console.log('Successfully stored in Redis');

      // Keep only top 100 entries per difficulty - try different method names
      try {
        await redis.zRemRangeByRank(leaderboardKey, 0, -101);
      } catch (rankError) {
        // console.log('zRemRangeByRank failed:', (rankError as Error).message);
        // Note: zremrangebyrank doesn't exist in the Redis client, only zRemRangeByRank
      }

      // Verify it was stored
      try {
        const count = await redis.zCard(leaderboardKey);
        console.log(`Leaderboard ${difficulty} now has ${count} entries`);
      } catch (cardError) {
        console.log('zCard failed:', (cardError as Error).message);
      }

      res.json({
        status: 'success',
        message: 'Score submitted successfully'
      });
    } catch (redisError) {
      console.error('Redis error:', redisError);
      res.status(500).json({
        status: 'error',
        message: `Redis operation failed: ${(redisError as Error).message}`
      });
    }
  } catch (error) {
    console.error('Error submitting score:', error);
    res.status(500).json({
      status: 'error',
      message: `Failed to submit score: ${(error as Error).message}`
    });
  }
});

router.get('/api/leaderboard/:difficulty', async (req, res): Promise<void> => {
  try {
    const { difficulty } = req.params;
    const leaderboardKey = `leaderboard:${difficulty}`;
    
    // console.log('Fetching leaderboard for difficulty:', difficulty);
    // console.log('Redis key:', leaderboardKey);
    // console.log('Available Redis methods:', Object.getOwnPropertyNames(redis).filter(name => name.startsWith('z')));

    // Check if key exists first
    const exists = await redis.exists(leaderboardKey);
    if (!exists) {
      console.log(`Key ${leaderboardKey} does not exist, returning empty leaderboard`);
      res.json({
        status: 'success',
        leaderboard: []
      });
      return;
    }

    // Get top 10 scores (highest first)
    let entries: Array<{ member: string; score: number }> = [];
    try {
      // Get top 10 members with highest scores
      const rangeResult = await redis.zRange(leaderboardKey, -10, -1);
      console.log('Basic zRange result:', rangeResult);
      console.log('Type of first element:', typeof rangeResult[0]);
      
      // Handle the result based on what Redis actually returns
      if (Array.isArray(rangeResult) && rangeResult.length > 0) {
        // If it's an array of strings (member names)
        if (typeof rangeResult[0] === 'string') {
          const memberNames = rangeResult as unknown as string[];
          const reversedMemberNames = [...memberNames].reverse();
          for (const memberName of reversedMemberNames) {
            const score = await redis.zScore(leaderboardKey, memberName);
            if (score !== null && score !== undefined) {
              entries.push({ member: memberName, score });
            }
          }
        } else {
          // If it's already an array of objects with member and score
          entries = (rangeResult as any[]).reverse();
        }
      }
    } catch (e1) {
      console.log('zRange failed:', (e1 as Error).message);
      entries = [];
    }
    console.log('Raw Redis entries:', entries);
    
    if (!entries || entries.length === 0) {
      // console.log('No entries found, returning empty leaderboard');
      res.json({
        status: 'success',
        leaderboard: []
      });
      return;
    }
    
    const leaderboard = [];
    for (let i = 0; i < entries.length; i++) {
      try {
        const entry = entries[i];
        if (entry && entry.member && typeof entry.score === 'number') {
          const entryData = JSON.parse(entry.member);
          leaderboard.push({
            rank: i + 1,
            username: entryData.username,
            score: entry.score,
            difficulty: entryData.difficulty,
            timestamp: entryData.timestamp
          });
        }
      } catch (parseError) {
        console.error('Error parsing entry:', entries[i], parseError);
      }
    }

    console.log('Processed leaderboard:', leaderboard);

    res.json({
      status: 'success',
      leaderboard
    });
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({
      status: 'error',
      message: `Failed to fetch leaderboard: ${(error as Error).message}`
    });
  }
});

router.get('/api/leaderboard', async (_req, res): Promise<void> => {
  try {
    // console.log('Fetching combined leaderboard');
    // Get combined leaderboard from all difficulties
    const difficulties = ['easy', 'medium', 'hard'];
    const allEntries = [];

    for (const difficulty of difficulties) {
      try {
        const leaderboardKey = `leaderboard:${difficulty}`;
        console.log(`Checking ${leaderboardKey}`);
        
        // Check if key exists first
        const exists = await redis.exists(leaderboardKey);
        if (!exists) {
          console.log(`Key ${leaderboardKey} does not exist, skipping`);
          continue;
        }
        
        // Get top 10 scores for this difficulty
        let entries: Array<{ member: string; score: number }> = [];
        try {
          // Get top 10 members with highest scores
          const rangeResult = await redis.zRange(leaderboardKey, -10, -1);
          console.log('Basic zRange result:', rangeResult);
          console.log('Type of first element:', typeof rangeResult[0]);
          
          // Handle the result based on what Redis actually returns
          if (Array.isArray(rangeResult) && rangeResult.length > 0) {
            // If it's an array of strings (member names)
            if (typeof rangeResult[0] === 'string') {
              const memberNames = rangeResult as unknown as string[];
              const reversedMemberNames = [...memberNames].reverse();
              for (const memberName of reversedMemberNames) {
                const score = await redis.zScore(leaderboardKey, memberName);
                if (score !== null && score !== undefined) {
                  entries.push({ member: memberName, score });
                }
              }
            } else {
              // If it's already an array of objects with member and score
              entries = (rangeResult as any[]).reverse();
            }
          }
        } catch (e1) {
          console.log('zRange failed:', (e1 as Error).message);
          entries = [];
        }
        // console.log(`Raw entries for ${difficulty}:`, entries);
        // console.log(`Found ${entries.length / 2} entries for ${difficulty}`);
        
        if (!entries || entries.length === 0) {
          console.log(`No entries found for ${difficulty}`);
          continue;
        }
        
        for (const entry of entries) {
          try {
            if (entry && entry.member && typeof entry.score === 'number') {
              const entryData = JSON.parse(entry.member);
              allEntries.push({
                username: entryData.username,
                score: entry.score,
                difficulty: entryData.difficulty,
                timestamp: entryData.timestamp
              });
            }
          } catch (parseError) {
            console.error('Error parsing combined entry:', entry, parseError);
          }
        }
      } catch (difficultyError) {
        console.error(`Error processing difficulty ${difficulty}:`, difficultyError);
        // Continue with other difficulties
      }
    }

    // console.log(`Total entries found: ${allEntries.length}`);

    // Sort by score descending
    allEntries.sort((a, b) => b.score - a.score);
    
    // Add ranks
    const leaderboard = allEntries.slice(0, 10).map((entry, index) => ({
      rank: index + 1,
      ...entry
    }));

    console.log('Final combined leaderboard:', leaderboard);

    res.json({
      status: 'success',
      leaderboard
    });
  } catch (error) {
    console.error('Error fetching combined leaderboard:', error);
    res.status(500).json({
      status: 'error',
      message: `Failed to fetch leaderboard: ${(error as Error).message}`
    });
  }
});



// Beat Sequence API endpoints for 90%+ performances (now creates speed challenges)
router.post('/api/beat-sequence/create', async (req, res): Promise<void> => {
  try {
    // console.log('Received beat sequence creation request:', req.body);
    const { player, accuracy, difficulty, score, beats, totalBeats, hitBeats } = req.body;
    
    if (!player || typeof accuracy !== 'number' || !difficulty || !beats || !Array.isArray(beats)) {
      res.status(400).json({
        status: 'error',
        message: 'Missing required fields for beat sequence creation'
      });
      return;
    }

    // Verify accuracy is 90% or higher (temporarily lowered for testing)
    if (accuracy < 90) {
      res.status(400).json({
        status: 'error',
        message: 'Beat sequences can only be created for performances with 90%+ accuracy'
      });
      return;
    }

    // Create unique sequence ID
    const sequenceId = `seq_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
    
    // Create beat sequence object
    const beatSequence = {
      id: sequenceId,
      originalPlayer: player,
      accuracy: accuracy,
      difficulty: difficulty,
      score: score,
      beats: beats,
      bgMusic: '/bg.mp3',
      createdAt: Date.now(),
      totalBeats: totalBeats,
      hitBeats: hitBeats
    };

    console.log('Creating beat sequence:', sequenceId);

    // Store in Redis
    const sequenceKey = `beat_sequence:${sequenceId}`;
    await redis.set(sequenceKey, JSON.stringify(beatSequence));

    // Add to featured sequences list (sorted by accuracy)
    const featuredKey = 'featured_sequences';
    await redis.zAdd(featuredKey, { score: accuracy, member: sequenceId });

    // Keep only top 50 featured sequences
    try {
      await redis.zRemRangeByRank(featuredKey, 0, -51);
    } catch (rankError) {
      console.log('Rank removal failed:', (rankError as Error).message);
    }

    console.log('Beat sequence stored successfully');

    // Create Reddit post for speed challenge
    let postUrl = '';
    try {
      const post = await createBeatSequencePost(beatSequence);
      postUrl = `https://reddit.com/r/${context.subredditName}/comments/${post.id}`;
      console.log('Created speed challenge Reddit post:', postUrl);
      
      // Store post data in Redis as backup
      const postDataKey = `post_data:${post.id}`;
      const postDataToStore = {
        gameState: 'speed-challenge',
        challengeId: beatSequence.id,
        originalSequenceId: beatSequence.id,
        originalPlayer: beatSequence.originalPlayer,
        currentSpeed: 1.5,
        challengeLevel: 1,
        difficulty: beatSequence.difficulty,
      };
      await redis.set(postDataKey, JSON.stringify(postDataToStore));
      console.log('Stored post data in Redis for post:', post.id);
      
    } catch (postError) {
      console.error('Failed to create Reddit post:', postError);
      // Don't fail the whole request if post creation fails
    }

    res.json({
      status: 'success',
      message: 'Beat sequence created successfully!',
      sequenceId: sequenceId,
      postUrl: postUrl
    });

  } catch (error) {
    console.error('Error creating beat sequence:', error);
    res.status(500).json({
      status: 'error',
      message: `Failed to create beat sequence: ${(error as Error).message}`
    });
  }
});

// Get featured beat sequences
router.get('/api/beat-sequences/featured', async (_req, res): Promise<void> => {
  try {
    // console.log('Fetching featured beat sequences');
    
    const featuredKey = 'featured_sequences';
    
    // Check if key exists
    const exists = await redis.exists(featuredKey);
    if (!exists) {
      res.json({
        status: 'success',
        sequences: []
      });
      return;
    }

    // Get top 10 sequences (highest accuracy first)
    let sequenceIds: string[] = [];
    try {
      // Get top 10 sequences with highest accuracy
      const ids = await redis.zRange(featuredKey, -10, -1);
      sequenceIds = (ids as unknown as string[]).reverse(); // Reverse for highest first
    } catch (rangeError) {
      console.log('zRange failed:', (rangeError as Error).message);
      sequenceIds = [];
    }

    // console.log('Found sequence IDs:', sequenceIds);

    const sequences = [];
    for (const sequenceId of sequenceIds) {
      try {
        const sequenceKey = `beat_sequence:${sequenceId}`;
        const sequenceData = await redis.get(sequenceKey);
        if (sequenceData) {
          sequences.push(JSON.parse(sequenceData));
        }
      } catch (parseError) {
        console.error('Error parsing sequence:', sequenceId, parseError);
      }
    }

    console.log(`Returning ${sequences.length} featured sequences`);

    res.json({
      status: 'success',
      sequences: sequences
    });

  } catch (error) {
    console.error('Error fetching featured sequences:', error);
    res.status(500).json({
      status: 'error',
      message: `Failed to fetch featured sequences: ${(error as Error).message}`
    });
  }
});

// Get individual beat sequence by ID
router.get('/api/beat-sequence/:sequenceId', async (req, res): Promise<void> => {
  try {
    const { sequenceId } = req.params;
    // console.log('Fetching beat sequence:', sequenceId);
    
    const sequenceKey = `beat_sequence:${sequenceId}`;
    const sequenceData = await redis.get(sequenceKey);
    
    if (!sequenceData) {
      res.status(404).json({
        status: 'error',
        message: 'Beat sequence not found'
      });
      return;
    }

    const sequence = JSON.parse(sequenceData);
    // console.log('Found beat sequence:', sequence.id);

    res.json({
      status: 'success',
      sequence: sequence
    });

  } catch (error) {
    console.error('Error fetching beat sequence:', error);
    res.status(500).json({
      status: 'error',
      message: `Failed to fetch beat sequence: ${(error as Error).message}`
    });
  }
});

// Create new speed challenge (when someone beats a speed challenge)
router.post('/api/speed-challenge/create', async (req, res): Promise<void> => {
  try {
    // console.log('Received speed challenge creation request:', req.body);
    const { originalSequenceId, currentSpeed, challengeLevel, lastChallengerPlayer, lastChallengerScore } = req.body;
    
    if (!originalSequenceId || !currentSpeed || !challengeLevel || !lastChallengerPlayer || typeof lastChallengerScore !== 'number') {
      res.status(400).json({
        status: 'error',
        message: 'Missing required fields for speed challenge creation'
      });
      return;
    }

    // Get the original beat sequence
    const originalSequenceKey = `beat_sequence:${originalSequenceId}`;
    const originalSequenceData = await redis.get(originalSequenceKey);
    
    if (!originalSequenceData) {
      res.status(404).json({
        status: 'error',
        message: 'Original beat sequence not found'
      });
      return;
    }

    const originalSequence = JSON.parse(originalSequenceData);
    
    // Create new speed challenge
    const challengeId = `challenge_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
    
    const speedChallenge = {
      id: challengeId,
      originalSequenceId: originalSequenceId,
      originalPlayer: originalSequence.originalPlayer,
      currentSpeed: currentSpeed,
      challengeLevel: challengeLevel,
      difficulty: originalSequence.difficulty,
      beats: originalSequence.beats, // Same beats, different speed
      createdAt: Date.now(),
      lastChallengerPlayer: lastChallengerPlayer,
      lastChallengerScore: lastChallengerScore
    };

    // console.log('Creating speed challenge:', challengeId);

    // Store in Redis
    const challengeKey = `speed_challenge:${challengeId}`;
    await redis.set(challengeKey, JSON.stringify(speedChallenge));

    console.log('Speed challenge stored successfully');

    // Create Reddit post for this new challenge
    let postUrl = '';
    try {
      const post = await createSpeedChallengePost(speedChallenge);
      postUrl = `https://reddit.com/r/${context.subredditName}/comments/${post.id}`;
      console.log('Created speed challenge Reddit post:', postUrl);
      
      // Store post data in Redis as backup
      const postDataKey = `post_data:${post.id}`;
      const postDataToStore = {
        gameState: 'speed-challenge',
        challengeId: speedChallenge.id,
        originalSequenceId: speedChallenge.originalSequenceId,
        originalPlayer: speedChallenge.originalPlayer,
        currentSpeed: currentSpeed + 0.5, // Next speed level
        challengeLevel: challengeLevel + 1,
        difficulty: speedChallenge.difficulty,
        lastChallengerPlayer: lastChallengerPlayer,
        lastChallengerScore: lastChallengerScore,
      };
      await redis.set(postDataKey, JSON.stringify(postDataToStore));
      console.log('Stored post data in Redis for post:', post.id);
      
    } catch (postError) {
      console.error('Failed to create Reddit post:', postError);
      // Don't fail the whole request if post creation fails
    }

    res.json({
      status: 'success',
      message: 'Speed challenge created successfully!',
      challengeId: challengeId,
      postUrl: postUrl
    });

  } catch (error) {
    console.error('Error creating speed challenge:', error);
    res.status(500).json({
      status: 'error',
      message: `Failed to create speed challenge: ${(error as Error).message}`
    });
  }
});

// Use router middleware
app.use(router);

// Get port from environment variable with fallback
const port = getServerPort();

const server = createServer(app);
server.on('error', (err) => console.error(`server error; ${err.stack}`));
server.listen(port);
