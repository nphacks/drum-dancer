import { context, reddit } from '@devvit/web/server';

export const createPost = async () => {
  const { subredditName } = context;
  if (!subredditName) {
    throw new Error('subredditName is required');
  }

  return await reddit.submitCustomPost({
    splash: {
      // Splash Screen Configuration
      appDisplayName: 'drum-dancer',
      backgroundUri: 'drum-bg.png',
      buttonLabel: 'Open the Game',
      description: 'Jam and make people dance!',
      heading: 'Drum Dancer',
      appIconUri: 'drum-kit.png',
    },
    postData: {
      gameState: 'initial',
      score: 0,
    },
    subredditName: subredditName,
    title: 'Drum it out!',
  });
};

export const createBeatSequencePost = async (beatSequence: {
  id: string;
  originalPlayer: string;
  accuracy: number;
  difficulty: string;
  score: number;
  totalBeats: number;
  hitBeats: number;
}) => {
  const { subredditName } = context;
  if (!subredditName) {
    throw new Error('subredditName is required');
  }

  const difficultyEmojiMap = {
    easy: '🟢',
    medium: '🟡',
    hard: '🔴'
  };

  const difficultyEmoji = difficultyEmojiMap[beatSequence.difficulty as keyof typeof difficultyEmojiMap] || '⚪';

  return await reddit.submitCustomPost({
    splash: {
      // Special splash for elite performances
      appDisplayName: 'drum-dancer',
      backgroundUri: 'drum-bg-2.png',
      buttonLabel: 'Accept Speed Challenge',
      description: `${beatSequence.originalPlayer} achieved ${beatSequence.accuracy.toFixed(1)}% accuracy! Can you beat it at 1.5x speed?`,
      heading: `⚡ Speed Challenge`,
      appIconUri: 'drum-kit.png',
    },
    postData: {
      gameState: 'speed-challenge',
      challengeId: beatSequence.id, // Will be the challenge ID
      originalSequenceId: beatSequence.id,
      originalPlayer: beatSequence.originalPlayer,
      currentSpeed: 1.5, // First challenge is always 1.5x
      challengeLevel: 1,
      difficulty: beatSequence.difficulty,
    },
    subredditName: subredditName,
    title: `⚡ Speed Challenge: Can you beat ${beatSequence.originalPlayer}'s ${difficultyEmoji} ${beatSequence.difficulty} performance at 1.5x speed?`,
  });
};

export const createSpeedChallengePost = async (speedChallenge: {
  id: string;
  originalPlayer: string;
  currentSpeed: number;
  challengeLevel: number;
  difficulty: string;
  lastChallengerPlayer: string;
  lastChallengerScore: number;
}) => {
  const { subredditName } = context;
  if (!subredditName) {
    throw new Error('subredditName is required');
  }

  const difficultyEmojiMap = {
    easy: '🟢',
    medium: '🟡',
    hard: '🔴'
  };

  const difficultyEmoji = difficultyEmojiMap[speedChallenge.difficulty as keyof typeof difficultyEmojiMap] || '⚪';
  const nextSpeed = speedChallenge.currentSpeed + 0.5;
  const speedEmojis = '⚡'.repeat(speedChallenge.challengeLevel + 1);

  return await reddit.submitCustomPost({
    splash: {
      appDisplayName: 'drum-dancer',
      backgroundUri: 'drum-bg-2.png',
      buttonLabel: `Accept ${nextSpeed}x Challenge`,
      description: `${speedChallenge.lastChallengerPlayer} conquered ${speedChallenge.currentSpeed}x speed! Can you handle ${nextSpeed}x?`,
      heading: `${speedEmojis} Speed King Challenge`,
      appIconUri: 'drum-kit.png',
    },
    postData: {
      gameState: 'speed-challenge',
      challengeId: speedChallenge.id,
      originalSequenceId: speedChallenge.id,
      originalPlayer: speedChallenge.originalPlayer,
      currentSpeed: nextSpeed,
      challengeLevel: speedChallenge.challengeLevel + 1,
      difficulty: speedChallenge.difficulty,
      lastChallengerPlayer: speedChallenge.lastChallengerPlayer,
      lastChallengerScore: speedChallenge.lastChallengerScore,
    },
    subredditName: subredditName,
    title: `${speedEmojis} ${speedChallenge.lastChallengerPlayer} beat ${speedChallenge.currentSpeed}x speed! Who can conquer ${nextSpeed}x on ${difficultyEmoji} ${speedChallenge.difficulty}?`,
  });
};
