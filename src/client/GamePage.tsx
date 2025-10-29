import { useState, useRef, useEffect } from 'react';
import { useCounter } from './hooks/useCounter';
import { drumPatterns, patternNames } from './drumPatterns';

interface GamePageProps {
  onCancel: () => void;
  speedChallenge?: {
    speed: number;
    beatSequence: any;
    challengeId: string;
    originalSequenceId: string;
    challengeLevel: number;
  };
  initialDifficulty?: 'easy' | 'medium' | 'hard';
  initialVolume?: number;
  initialSounds?: { [key: string]: string };
}

type GameSection = 'menu' | 'select' | 'game' | 'results';
type Difficulty = 'easy' | 'medium' | 'hard';

interface DrumKit {
  name: string;
  displayName: string;
  key: string;
  sounds: { name: string; path: string; displayName: string }[];
}

interface SelectedSounds {
  [key: string]: string;
}

interface BeatMarker {
  id: string;
  time: number; // When to hit (in seconds)
  drum: string; // Which drum to hit
  lane: number; // Visual lane (0-10)
  hit: boolean;
  missed: boolean;
  accuracy?: number; // 0-1 timing accuracy
}

interface GameState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  score: number;
  totalBeats: number;
  hitBeats: number;
  difficulty: Difficulty;
}

const drumKits: DrumKit[] = [
  {
    name: 'kick',
    displayName: 'Kick',
    key: 'Q',
    sounds: [
      { name: '808', path: '/drum-kits/Kick/kick-808.wav', displayName: '808' },
      { name: 'acoustic01', path: '/drum-kits/Kick/kick-acoustic01.wav', displayName: 'Acoustic 1' },
      { name: 'big', path: '/drum-kits/Kick/kick-big.wav', displayName: 'Big' },
      { name: 'classic', path: '/drum-kits/Kick/kick-classic.wav', displayName: 'Classic' },
      { name: 'deep', path: '/drum-kits/Kick/kick-deep.wav', displayName: 'Deep' },
      { name: 'heavy', path: '/drum-kits/Kick/kick-heavy.wav', displayName: 'Heavy' },
    ],
  },
  {
    name: 'snare',
    displayName: 'Snare',
    key: 'W',
    sounds: [
      { name: '808', path: '/drum-kits/Snare/snare-808.wav', displayName: '808' },
      { name: 'acoustic01', path: '/drum-kits/Snare/snare-acoustic01.wav', displayName: 'Acoustic 1' },
      { name: 'analog', path: '/drum-kits/Snare/snare-analog.wav', displayName: 'Analog' },
      { name: 'big', path: '/drum-kits/Snare/snare-big.wav', displayName: 'Big' },
      { name: 'electro', path: '/drum-kits/Snare/snare-electro.wav', displayName: 'Electro' },
      { name: 'punch', path: '/drum-kits/Snare/snare-punch.wav', displayName: 'Punch' },
    ],
  },
  {
    name: 'hihat',
    displayName: 'Hi-Hat',
    key: 'E',
    sounds: [
      { name: '808', path: '/drum-kits/HiHat/hihat-808.wav', displayName: '808' },
      { name: 'acoustic01', path: '/drum-kits/HiHat/hihat-acoustic01.wav', displayName: 'Acoustic 1' },
      { name: 'analog', path: '/drum-kits/HiHat/hihat-analog.wav', displayName: 'Analog' },
      { name: 'digital', path: '/drum-kits/HiHat/hihat-digital.wav', displayName: 'Digital' },
      { name: 'electro', path: '/drum-kits/HiHat/hihat-electro.wav', displayName: 'Electro' },
    ],
  },
  {
    name: 'openhat',
    displayName: 'Open Hat',
    key: 'R',
    sounds: [
      { name: '808', path: '/drum-kits/OpenHat/openhat-808.wav', displayName: '808' },
      { name: 'acoustic01', path: '/drum-kits/OpenHat/openhat-acoustic01.wav', displayName: 'Acoustic' },
      { name: 'analog', path: '/drum-kits/OpenHat/openhat-analog.wav', displayName: 'Analog' },
      { name: 'slick', path: '/drum-kits/OpenHat/openhat-slick.wav', displayName: 'Slick' },
    ],
  },
  {
    name: 'crash',
    displayName: 'Crash',
    key: 'T',
    sounds: [
      { name: '808', path: '/drum-kits/Crash/crash-808.wav', displayName: '808' },
      { name: 'acoustic', path: '/drum-kits/Crash/crash-acoustic.wav', displayName: 'Acoustic' },
      { name: 'noise', path: '/drum-kits/Crash/crash-noise.wav', displayName: 'Noise' },
    ],
  },
  {
    name: 'ride',
    displayName: 'Ride',
    key: 'Y',
    sounds: [
      { name: 'acoustic01', path: '/drum-kits/Ride/ride-acoustic01.wav', displayName: 'Acoustic 1' },
      { name: 'acoustic02', path: '/drum-kits/Ride/ride-acoustic02.wav', displayName: 'Acoustic 2' },
    ],
  },
  {
    name: 'tom',
    displayName: 'Tom',
    key: 'U',
    sounds: [
      { name: '808', path: '/drum-kits/Tom/tom-808.wav', displayName: '808' },
      { name: 'acoustic01', path: '/drum-kits/Tom/tom-acoustic01.wav', displayName: 'Acoustic 1' },
      { name: 'analog', path: '/drum-kits/Tom/tom-analog.wav', displayName: 'Analog' },
      { name: 'fm', path: '/drum-kits/Tom/tom-fm.wav', displayName: 'FM' },
    ],
  },
  {
    name: 'clap',
    displayName: 'Clap',
    key: 'I',
    sounds: [
      { name: '808', path: '/drum-kits/Clap/clap-808.wav', displayName: '808' },
      { name: 'analog', path: '/drum-kits/Clap/clap-analog.wav', displayName: 'Analog' },
      { name: 'fat', path: '/drum-kits/Clap/clap-fat.wav', displayName: 'Fat' },
    ],
  },
  {
    name: 'cowbell',
    displayName: 'Cowbell',
    key: 'O',
    sounds: [
      { name: '808', path: '/drum-kits/Cowbell/cowbell-808.wav', displayName: '808' },
    ],
  },
  {
    name: 'shaker',
    displayName: 'Shaker',
    key: 'P',
    sounds: [
      { name: 'analog', path: '/drum-kits/Shaker/shaker-analog.wav', displayName: 'Analog' },
      { name: 'shuffle', path: '/drum-kits/Shaker/shaker-shuffle.wav', displayName: 'Shuffle' },
    ],
  },
  {
    name: 'percussion',
    displayName: 'Percussion',
    key: '[',
    sounds: [
      { name: '808', path: '/drum-kits/Percussion/perc-808.wav', displayName: '808' },
      { name: 'chirpy', path: '/drum-kits/Percussion/perc-chirpy.wav', displayName: 'Chirpy' },
      { name: 'metal', path: '/drum-kits/Percussion/perc-metal.wav', displayName: 'Metal' },
    ],
  },
];

// Drum key mappings
const drumKeys: { [key: string]: string } = {
  'q': 'kick', 'w': 'snare', 'e': 'hihat', 'r': 'openhat', 't': 'crash',
  'y': 'ride', 'u': 'tom', 'i': 'clap', 'o': 'cowbell', 'p': 'shaker', '[': 'percussion'
};

// Difficulty settings
const difficultySettings = {
  easy: { duration: 45, name: 'Easy (45s)' },
  medium: { duration: 75, name: 'Medium (1:15)' },
  hard: { duration: 105, name: 'Hard (1:45)' }
};

export const GamePage = ({
  onCancel,
  speedChallenge,
  initialDifficulty = 'easy',
  initialVolume = 0.7,
  initialSounds
}: GamePageProps) => {
  const { username } = useCounter();

  // Skip menu and select if we have initial settings from App.tsx or it's a speed challenge
  const shouldSkipToGame = speedChallenge || (initialDifficulty || initialVolume || initialSounds);
  const [currentSection, setCurrentSection] = useState<GameSection>(
    shouldSkipToGame ? 'game' : 'menu'
  );

  const [volume, setVolume] = useState<number>(initialVolume);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>(initialDifficulty);
  const [selectedSounds, setSelectedSounds] = useState<SelectedSounds>(() => {
    if (initialSounds) return initialSounds;

    const initial: SelectedSounds = {};
    drumKits.forEach((kit) => {
      if (kit.sounds[0]) {
        initial[kit.name] = kit.sounds[0].path;
      }
    });
    return initial;
  });

  // Game state
  const [gameState, setGameState] = useState<GameState>({
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    score: 0,
    totalBeats: 0,
    hitBeats: 0,
    difficulty: 'easy'
  });

  const [countdown, setCountdown] = useState<number>(0);

  const [beatMarkers, setBeatMarkers] = useState<BeatMarker[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const gameLoopRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number>(0);
  const currentScoreRef = useRef<number>(0);
  const currentHitBeatsRef = useRef<number>(0);
  const beatRecordsRef = useRef<Array<{ time: number, drum: string, hit: boolean, accuracy?: number }>>([]);
  const processedMarkersRef = useRef<Set<string>>(new Set());

  // Generate beat pattern for 4/4 time at 120 BPM
  const generateBeatPattern = (duration: number, difficulty: Difficulty): BeatMarker[] => {
    const markers: BeatMarker[] = [];
    const bpm = 120;
    const beatInterval = 60 / bpm; // 0.5 seconds per beat
    const usedTimes = new Set<string>(); // Prevent duplicate beats at same time

    // Drum patterns are now imported from drumPatterns.ts

    // Randomly select one of the 3 patterns for the chosen difficulty
    const availablePatterns = drumPatterns[difficulty];
    const patternIndex = Math.floor(Math.random() * availablePatterns.length);
    const basePattern = availablePatterns[patternIndex];

    // Pattern names are now imported from drumPatterns.ts

    // console.log(`🎵 Selected ${difficulty} pattern: "${patternNames[difficulty][patternIndex]}" (${patternIndex + 1}/${availablePatterns.length})`);
    let measureCount = 0;

    // Generate beats for each measure (4 beats)
    for (let measureStart = 2; measureStart < duration - 2; measureStart += beatInterval * 4) {
      measureCount++;

      // Gradually add more complexity
      const includeChance = Math.min(0.4 + (measureCount * 0.1), 0.9);
      if (Math.random() > includeChance) continue; // Skip some measures for variety

      basePattern?.forEach(patternBeat => {
        const beatTime = measureStart + (patternBeat.time * beatInterval);
        const timeKey = beatTime.toFixed(3); // Prevent exact duplicates

        if (beatTime < duration - 1 && !usedTimes.has(timeKey)) {
          usedTimes.add(timeKey);

          const laneIndex = drumKits.findIndex(kit => kit.name === patternBeat.drum);
          if (laneIndex >= 0) {
            markers.push({
              id: `beat-${beatTime.toFixed(3)}-${patternBeat.drum}`,
              time: beatTime,
              drum: patternBeat.drum,
              lane: laneIndex,
              hit: false,
              missed: false
            });
          }
        }
      });
    }

    // Sort by time
    markers.sort((a, b) => a.time - b.time);
    // console.log(`Generated ${markers.length} beat markers for ${difficulty} mode (${measureCount} measures)`);

    // Debug: show first few markers
    // markers.slice(0, 8).forEach(marker => {
    //   console.log(`  Beat: ${marker.drum} at ${marker.time.toFixed(2)}s`);
    // });

    return markers;
  };

  // Play drum sound
  const playDrumSound = (drumType: string) => {
    try {
      const kit = drumKits.find(k => k.name === drumType);
      const soundPath = selectedSounds[drumType] || kit?.sounds[0]?.path;
      if (soundPath) {
        const audio = new Audio(soundPath);
        audio.volume = volume;
        audio.play().catch(console.error);
      }
    } catch (error) {
      console.error('Error playing drum sound:', error);
    }
  };

  // Handle drum hit
  const hitDrum = (drumType: string) => {
    playDrumSound(drumType);

    if (!gameState.isPlaying) {
      // console.log('Game not playing, ignoring hit');
      return;
    }

    // Use current time from the most recent game loop
    const currentTime = (Date.now() - startTimeRef.current) / 1000;
    const hitWindow = 0.4; // Increased to 400ms for easier hits

    // console.log(`Hit attempt: ${drumType}, currentTime: ${currentTime.toFixed(2)}s`);

    // Find eligible markers that haven't been hit yet and haven't been processed
    const eligibleMarkers = beatMarkers.filter(marker =>
      !marker.hit && !marker.missed &&
      marker.drum === drumType &&
      Math.abs(marker.time - currentTime) <= hitWindow &&
      !processedMarkersRef.current.has(marker.id)
    );

    // console.log(`Found ${eligibleMarkers.length} eligible markers for ${drumType}`);

    if (eligibleMarkers.length > 0) {
      // Find the closest marker
      const closestMarker = eligibleMarkers.reduce((closest, marker) =>
        Math.abs(marker.time - currentTime) < Math.abs(closest.time - currentTime) ? marker : closest
      );

      // Mark this marker as processed to prevent double-hits
      processedMarkersRef.current.add(closestMarker.id);

      const timingDiff = Math.abs(closestMarker.time - currentTime);
      const accuracy = 1 - (timingDiff / hitWindow);
      const points = Math.floor(accuracy * 100);

      // Update marker immediately
      setBeatMarkers(prev => prev.map(m =>
        m.id === closestMarker.id ? { ...m, hit: true, accuracy } : m
      ));

      // Update the existing beat record
      const recordIndex = beatRecordsRef.current.findIndex(record =>
        Math.abs(record.time - closestMarker.time) < 0.01 && record.drum === drumType
      );
      if (recordIndex >= 0) {
        const record = beatRecordsRef.current[recordIndex];
        if (record) {
          record.hit = true;
          record.accuracy = accuracy;
        }
      }

      // Update score immediately - but don't double count!
      setGameState(prev => {
        const newScore = prev.score + points;
        const newHitBeats = prev.hitBeats + 1;

        // Update refs with current values
        currentScoreRef.current = newScore;
        currentHitBeatsRef.current = newHitBeats;

        return {
          ...prev,
          score: newScore,
          hitBeats: newHitBeats
        };
      });

      // console.log(`HIT SUCCESS! Accuracy: ${(accuracy * 100).toFixed(1)}%, Points: ${points}`);
    } else {
      // console.log('No eligible markers found - showing all current markers:');
      // beatMarkers.slice(0, 3).forEach(marker => {
      //   const diff = Math.abs(marker.time - currentTime);
      //   console.log(`  ${marker.drum} at ${marker.time.toFixed(2)}s (diff: ${diff.toFixed(3)}s, hit: ${marker.hit}, missed: ${marker.missed})`);
      // });
    }
  };

  // Start game with countdown
  const startGame = async () => {
    try {
      let duration: number;
      let markers: BeatMarker[];

      if (speedChallenge) {
        // Speed challenge mode - use provided beat sequence
        const difficultySettings = {
          easy: { duration: 45 },
          medium: { duration: 75 },
          hard: { duration: 105 }
        };

        const originalDuration = difficultySettings[speedChallenge.beatSequence.difficulty as keyof typeof difficultySettings]?.duration || 45;
        duration = originalDuration; // Keep original duration, don't adjust here
        // console.log('Speed challenge duration:', duration, 'seconds');

        // Convert beat sequence to markers with speed adjustment
        const hitBeats = speedChallenge.beatSequence.beats.filter((beat: any) => beat.hit);
        // console.log('Speed challenge - Original beats:', hitBeats.length);
        // console.log('Speed multiplier:', speedChallenge.speed);

        markers = hitBeats.map((beat: any) => {
          // Find the correct lane for this drum type
          const drumIndex = drumKits.findIndex(kit => kit.name === beat.drum);
          const lane = drumIndex >= 0 ? drumIndex : 0;

          const adjustedTime = beat.time / speedChallenge.speed;
          // console.log(`Beat ${beat.drum}: ${beat.time}s -> ${adjustedTime.toFixed(2)}s (lane ${lane})`);

          return {
            id: `${beat.time}-${beat.drum}`,
            time: adjustedTime,
            drum: beat.drum,
            lane: lane,
            y: 0,
            hit: false,
            missed: false
          };
        });

        // console.log('Generated markers:', markers.length);
      } else {
        // Normal mode - generate new pattern
        duration = difficultySettings[selectedDifficulty].duration;
        markers = generateBeatPattern(duration, selectedDifficulty);
      }

      setBeatMarkers(markers);

      // Store the original beat sequence for potential choreography
      beatRecordsRef.current = markers.map(marker => ({
        time: marker.time,
        drum: marker.drum,
        hit: false // Will be updated when player hits
      }));

      setCurrentSection('game');

      // Countdown before starting
      setCountdown(3);
      const countdownInterval = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            // Actually start the game
            startGamePlay(duration, markers);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

    } catch (error) {
      console.error('Error starting game:', error);
    }
  };

  // Actually start gameplay
  const startGamePlay = async (duration: number, markers: BeatMarker[]) => {
    try {
      // Adjust duration for speed challenge
      const adjustedDuration = speedChallenge ? duration / speedChallenge.speed : duration;

      setGameState({
        isPlaying: true,
        currentTime: 0,
        duration: adjustedDuration,
        score: 0,
        totalBeats: markers.length,
        hitBeats: 0,
        difficulty: speedChallenge ? speedChallenge.beatSequence.difficulty : selectedDifficulty
      });

      // Initialize refs
      currentScoreRef.current = 0;
      currentHitBeatsRef.current = 0;
      processedMarkersRef.current.clear();

      // Setup background music
      const audio = new Audio('/bg.mp3');
      audio.volume = volume * 0.3; // Lower volume for background
      audio.loop = true;

      // Set playback rate for speed challenge
      if (speedChallenge) {
        audio.playbackRate = speedChallenge.speed;
      }

      audioRef.current = audio;

      startTimeRef.current = Date.now();
      await audio.play();

      gameLoop();
    } catch (error) {
      console.error('Error starting gameplay:', error);
    }
  };

  // Game loop
  const gameLoop = (): void => {
    if (!gameState.isPlaying) {
      return;
    }

    const elapsed = (Date.now() - startTimeRef.current) / 1000;

    // Update game state with current time
    setGameState(prev => ({ ...prev, currentTime: elapsed }));

    // Check for missed beats
    setBeatMarkers(prev => prev.map(marker => {
      if (!marker.hit && !marker.missed && elapsed > marker.time + 0.2) {
        return { ...marker, missed: true };
      }
      return marker;
    }));

    // End game when duration reached
    if (elapsed >= gameState.duration) {
      endGame();
      return;
    }

    gameLoopRef.current = requestAnimationFrame(gameLoop);
  };

  // Submit score to leaderboard
  const submitScore = async (finalScore: number, difficulty: string) => {
    try {
      const payload = {
        username: username || 'Anonymous',
        score: finalScore,
        difficulty: difficulty
      };

      // console.log('Submitting score:', payload);

      const response = await fetch('/api/leaderboard/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // console.log('Response status:', response.status);
      const result = await response.json();
      // console.log('Response result:', result);

      if (result.status === 'success') {
        // console.log('Score submitted successfully!');
      } else {
        console.error('Failed to submit score:', result.message);
      }
    } catch (error) {
      console.error('Error submitting score:', error);
    }
  };

  // Create beat sequence for 98%+ performances
  const createBeatSequence = async (accuracy: number, finalScore: number, difficulty: string, totalBeats: number, hitBeats: number) => {
    try {
      const payload = {
        player: username || 'Anonymous',
        accuracy: accuracy,
        difficulty: difficulty,
        score: finalScore,
        beats: beatRecordsRef.current,
        totalBeats: totalBeats,
        hitBeats: hitBeats
      };

      // console.log('Creating beat sequence for 90%+ performance:', payload);
      // console.log('Beat records to submit:', beatRecordsRef.current.length, 'beats');

      const response = await fetch('/api/beat-sequence/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      // console.log('Beat sequence creation result:', result);

      if (result.status === 'success') {
        // console.log('🎉 Beat sequence created successfully!');
        // console.log('Sequence ID:', result.sequenceId);
        if (result.postUrl) {
          // console.log('Reddit post created:', result.postUrl);
        }
        return result;
      } else {
        console.error('Failed to create beat sequence:', result.message);
        return null;
      }
    } catch (error) {
      console.error('Error creating beat sequence:', error);
      return null;
    }
  };

  // Create speed challenge for conquered challenges
  const createSpeedChallenge = async (_accuracy: number, finalScore: number) => {
    if (!speedChallenge) return;

    try {
      const payload = {
        originalSequenceId: speedChallenge.originalSequenceId,
        currentSpeed: speedChallenge.speed,
        challengeLevel: speedChallenge.challengeLevel,
        lastChallengerPlayer: username || 'Anonymous',
        lastChallengerScore: finalScore
      };

      // console.log('Creating next speed challenge:', payload);

      const response = await fetch('/api/speed-challenge/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      // console.log('Speed challenge creation result:', result);

      if (result.status === 'success') {
        // console.log('🎉 Next speed challenge created successfully!');
        // console.log('Challenge ID:', result.challengeId);
        if (result.postUrl) {
          // console.log('Reddit post created:', result.postUrl);
        }
        return result;
      } else {
        console.error('Failed to create speed challenge:', result.message);
        return null;
      }
    } catch (error) {
      console.error('Error creating speed challenge:', error);
      return null;
    }
  };

  // End game
  const endGame = () => {
    // Use ref values which are always current
    const scoreToSubmit = currentScoreRef.current;
    const hitBeatsToSubmit = currentHitBeatsRef.current;
    const difficultyToSubmit = gameState.difficulty;
    const totalBeatsToSubmit = gameState.totalBeats;

    // Calculate final accuracy
    const finalAccuracy = totalBeatsToSubmit > 0 ? (hitBeatsToSubmit / totalBeatsToSubmit) * 100 : 0;

    // console.log('Game ending - Final score from ref:', scoreToSubmit, 'Difficulty:', difficultyToSubmit);
    // console.log('Final accuracy:', finalAccuracy.toFixed(1) + '%');
    // console.log('Beat records collected:', beatRecordsRef.current.length);

    setGameState(prev => ({ ...prev, isPlaying: false }));
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
    }

    // Submit score to leaderboard
    if (scoreToSubmit > 0) {
      // console.log('Submitting score to leaderboard...');
      submitScore(scoreToSubmit, difficultyToSubmit);
    } else {
      // console.log('Score is 0, not submitting to leaderboard');
    }

    // Check for 90%+ accuracy - create beat sequence! (temporarily lowered for testing)
    // console.log('Checking elite performance criteria:');
    // console.log('- Final accuracy:', finalAccuracy);
    // console.log('- Score to submit:', scoreToSubmit);
    // console.log('- Meets accuracy threshold (>=90):', finalAccuracy >= 90);
    // console.log('- Has score (>0):', scoreToSubmit > 0);

    if (finalAccuracy >= 90 && scoreToSubmit > 0) {
      if (speedChallenge) {
        // console.log('🎉 SPEED CHALLENGE CONQUERED! Creating next level...');
        createSpeedChallenge(finalAccuracy, scoreToSubmit);
      } else {
        // console.log('🎉 AMAZING! 90%+ accuracy achieved! Creating beat sequence...');
        createBeatSequence(finalAccuracy, scoreToSubmit, difficultyToSubmit, totalBeatsToSubmit, hitBeatsToSubmit);
      }
    } else {
      // console.log('❌ Elite performance criteria not met');
      // if (finalAccuracy < 90) {
      //   console.log(`   - Accuracy too low: ${finalAccuracy.toFixed(1)}% (need 90%+)`);
      // }
      // if (scoreToSubmit <= 0) {
      //   console.log(`   - Score too low: ${scoreToSubmit} (need >0)`);
      // }
    }

    setCurrentSection('results');
  };

  // Start game loop when playing
  useEffect(() => {
    if (gameState.isPlaying && currentSection === 'game') {
      gameLoop();
    } else if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
    }
  }, [gameState.isPlaying, currentSection]);

  // Keyboard handler
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const drumType = drumKeys[event.key.toLowerCase()];
      if (drumType) {
        event.preventDefault();
        hitDrum(drumType);
      }
    };

    if (currentSection === 'game' || currentSection === 'select') {
      window.addEventListener('keydown', handleKeyPress);
      return () => window.removeEventListener('keydown', handleKeyPress);
    }
  }, [currentSection, gameState.isPlaying]);

  // Auto-start game when skipping to game section
  useEffect(() => {
    if (shouldSkipToGame && currentSection === 'game') {
      if (speedChallenge) {
        // Set difficulty based on speed challenge
        setSelectedDifficulty(speedChallenge.beatSequence.difficulty);

        // Auto-start speed challenge after short delay
        setTimeout(() => {
          startGame();
        }, 1000);
      } else {
        // Auto-start regular game from streamlined home immediately
        startGame();
      }
    }
  }, [speedChallenge, currentSection, shouldSkipToGame]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, []);

  const renderMenu = () => (
    <div className="flex flex-col items-center gap-6 p-6 min-h-screen justify-center bg-gradient-to-b from-slate-900 to-purple-900">
      <img className="object-contain w-1/3 max-w-[150px] mx-auto" src="/snoo.png" alt="Snoo" />
      <h1 className="text-4xl font-bold text-center text-white mb-2">
        Drum Hero
      </h1>
      <p className="text-lg text-center text-slate-300 mb-8">
        Welcome {username || 'Player'}! Hit the drums to the beat!
      </p>

      {/* Difficulty Selection */}
      <div className="w-full max-w-md space-y-4">
        <h3 className="text-xl font-semibold text-white text-center">Choose Difficulty</h3>
        {Object.entries(difficultySettings).map(([key, settings]) => (
          <button
            key={key}
            className={`w-full px-6 py-4 rounded-lg font-semibold text-lg transition-all ${selectedDifficulty === key
              ? 'bg-purple-600 text-white shadow-lg transform scale-105'
              : 'bg-slate-700 text-slate-200 hover:bg-slate-600'
              }`}
            onClick={() => setSelectedDifficulty(key as Difficulty)}
          >
            {settings.name}
          </button>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <button
          className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-cyan-500 transition-colors"
          onClick={() => setCurrentSection('select')}
        >
          Customize Sounds
        </button>
        <button
          className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-purple-500 transition-colors"
          onClick={startGame}
        >
          Start Game
        </button>
      </div>

      <button
        className="bg-slate-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-500 transition-colors mt-4"
        onClick={onCancel}
      >
        Back to Menu
      </button>
    </div>
  );
  const renderSelect = () => (
    <div className="flex flex-col items-center gap-6 p-6 min-h-screen justify-center bg-gradient-to-b from-slate-900 to-purple-900">
      <h1 className="text-3xl font-bold text-center text-white mb-4">
        Customize Your Drum Kit
      </h1>

      {/* Sound Selection */}
      <div className="w-full max-w-2xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {drumKits.map((kit) => (
            <div key={kit.name} className="bg-slate-800 p-4 rounded-lg border border-slate-700">
              <div className="flex items-center justify-between mb-2">
                <label className="text-lg font-medium text-white flex items-center gap-2">
                  <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm font-bold">
                    {kit.key}
                  </span>
                  {kit.displayName}
                </label>
                <button
                  className="bg-cyan-600 text-white px-3 py-1 rounded text-sm hover:bg-cyan-500 transition-colors"
                  onClick={() => playDrumSound(kit.name)}
                >
                  Test
                </button>
              </div>
              {kit.sounds.length > 1 ? (
                <select
                  value={selectedSounds[kit.name]}
                  onChange={(e) =>
                    setSelectedSounds((prev) => ({
                      ...prev,
                      [kit.name]: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {kit.sounds.map((sound) => (
                    <option key={sound.name} value={sound.path}>
                      {sound.displayName}
                    </option>
                  ))}
                </select>
              ) : (
                <div className="px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-sm text-slate-400">
                  {kit.sounds[0]?.displayName || 'No sound'} (Only option)
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Volume Control */}
      <div className="flex flex-col items-center gap-2 w-full max-w-md">
        <label className="text-lg font-medium text-white">Volume</label>
        <div className="flex items-center gap-3 w-full">
          <span className="text-white">🔈</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="flex-1 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-white">🔊</span>
        </div>
        <span className="text-sm text-slate-300">{Math.round(volume * 100)}%</span>
      </div>

      <div className="flex gap-4 mt-6">
        <button
          className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-purple-500 transition-colors"
          onClick={startGame}
        >
          Start Game
        </button>
        <button
          className="bg-slate-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-500 transition-colors"
          onClick={() => setCurrentSection('menu')}
        >
          Back
        </button>
      </div>
    </div>
  );

  const renderGame = () => {
    const progress = (gameState.currentTime / gameState.duration) * 100;
    const accuracy = gameState.totalBeats > 0 ? (gameState.hitBeats / gameState.totalBeats) * 100 : 0;

    // Get unique drums used in current beat markers (max 5 for mobile)
    const usedDrums = new Set(beatMarkers.map(marker => marker.drum));
    const activeDrumKits = drumKits.filter(kit => usedDrums.has(kit.name)).slice(0, 5);

    // Debug: Show active instruments
    // if (activeDrumKits.length > 0) {
    //   console.log(`🥁 Using ${activeDrumKits.length}/5 instruments:`, activeDrumKits.map(kit => kit.name).join(', '));
    // }

    // Debug info
    const visibleMarkers = beatMarkers.filter(marker => {
      const timeUntilHit = marker.time - gameState.currentTime;
      return timeUntilHit > -1 && timeUntilHit < 4;
    });

    const hittableMarkers = beatMarkers.filter(marker => {
      const timeUntilHit = marker.time - gameState.currentTime;
      return !marker.hit && !marker.missed && Math.abs(timeUntilHit) <= 0.3;
    });

    return (
      <div className="flex flex-col h-screen w-full bg-slate-900 overflow-hidden">
        {/* Countdown Overlay */}
        {countdown > 0 && (
          <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="text-center">
              <div className="text-8xl font-bold text-white mb-4 animate-pulse">
                {countdown}
              </div>
              <div className="text-2xl text-gray-300">
                Get Ready!
              </div>
            </div>
          </div>
        )}

        {/* Game HUD */}
        <div className="bg-slate-800 border-b border-slate-600 p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex gap-6 text-white">
              <div>Score: <span className="font-bold text-lime-400">{gameState.score}</span></div>
              <div>Hits: <span className="font-bold text-cyan-400">{gameState.hitBeats}/{gameState.totalBeats}</span></div>
              <div>Accuracy: <span className="font-bold text-purple-400">{accuracy.toFixed(1)}%</span></div>
              <div>Visible: <span className="font-bold text-slate-400">{visibleMarkers.length}</span></div>
              <div>Time: <span className="font-bold text-cyan-300">{gameState.currentTime.toFixed(1)}s</span></div>
              <div>Playing: <span className="font-bold text-lime-300">{gameState.isPlaying ? 'YES' : 'NO'}</span></div>
              <div>Hittable: <span className="font-bold text-purple-300">{hittableMarkers.length}</span></div>
            </div>
            <div className="text-sm text-slate-400">
              {Math.floor(gameState.currentTime)}s / {Math.floor(gameState.duration)}s
            </div>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div
              className="bg-lime-500 h-2 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Beat Track - Maximum Height with Compact Buttons */}
        <div className="bg-slate-800 border-b border-slate-600 relative overflow-hidden" style={{ height: '550px' }}>
          {/* Track Lanes - Vertical */}
          <div className="absolute inset-0 flex flex-col">
            {/* Hit Zone - Bottom */}
            <div className="absolute bottom-4 left-0 right-0 h-1 bg-lime-500 shadow-lg z-10">
              <div className="absolute left-4 -top-6 text-white text-sm font-bold bg-lime-500 px-2 py-1 rounded">
                HIT ZONE!
              </div>
            </div>

            {/* Time Grid Lines - Horizontal */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute border-t border-slate-600 opacity-20 w-full"
                style={{
                  top: `${20 * i}%`
                }}
              />
            ))}

            {/* Beat Markers - Moving Top to Bottom */}
            {beatMarkers
              .filter(marker => {
                const timeUntilHit = marker.time - gameState.currentTime;
                return timeUntilHit > -0.5 && timeUntilHit < 3; // Show markers 3 seconds ahead
              })
              .map(marker => {
                const timeUntilHit = marker.time - gameState.currentTime;
                // Move from top (0%) to bottom hit zone (85%)
                const yPosition = ((3 - timeUntilHit) / 3) * 85;
                // Find position in active drums only
                const activeLaneIndex = activeDrumKits.findIndex(kit => kit.name === marker.drum);
                if (activeLaneIndex === -1) return null; // Skip if drum not in active set

                const laneWidth = 100 / activeDrumKits.length;
                const xPosition = activeLaneIndex * laneWidth + (laneWidth / 2);
                const drumKit = activeDrumKits[activeLaneIndex];

                return (
                  <div
                    key={marker.id}
                    className={`absolute flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${marker.hit
                      ? 'bg-lime-500 text-white scale-125 shadow-xl'
                      : marker.missed
                        ? 'bg-red-500 text-white opacity-60'
                        : timeUntilHit < 0.3
                          ? 'bg-cyan-400 text-black shadow-xl scale-110'
                          : 'bg-purple-500 text-white shadow-lg'
                      }`}
                    style={{
                      left: `${xPosition}%`,
                      top: `${Math.max(2, Math.min(83, yPosition))}%`,
                      transform: 'translateX(-50%)',
                      zIndex: 20,
                      transition: 'none' // Remove CSS transitions for smoother animation
                    }}
                  >
                    {drumKit?.key}
                  </div>
                );
              })
            }

            {/* Lane Labels - Top (Only Active Drums) */}
            <div className="absolute top-2 left-0 right-0 flex justify-between px-1">
              {activeDrumKits.map((kit) => (
                <div key={kit.name} className="flex flex-col items-center text-xs" style={{ width: `${100 / activeDrumKits.length}%` }}>
                  <div className="bg-slate-700 px-2 py-1 rounded text-white font-bold text-sm">
                    {kit.key}
                  </div>
                  <div className="text-white text-xs mt-1">{kit.displayName}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
            <div className="bg-black bg-opacity-70 px-3 py-1 rounded-lg text-white text-sm">
              <div className="font-bold">Beats fall down ↓</div>
              <div className="text-xs">Hit when they reach the orange line!</div>
            </div>
          </div>
        </div>

        {/* Drum Controls - Responsive Grid */}
        <div className="flex-1 bg-slate-800 p-2 sm:p-4">
          <div className="flex flex-col items-center gap-4 h-full justify-center max-w-4xl mx-auto">
            {/* Dynamic Drum Grid - Max 5 Instruments */}
            <div className={`grid gap-2 sm:gap-3 w-full max-w-3xl ${activeDrumKits.length <= 3 ? 'grid-cols-3' :
              activeDrumKits.length <= 4 ? 'grid-cols-4' :
                'grid-cols-5'
              }`}>
              {activeDrumKits.map((kit) => (
                <button
                  key={kit.name}
                  className={`px-1 py-2 sm:px-2 sm:py-3 rounded-md font-bold text-xs transition-all transform active:scale-95 hover:scale-105 shadow-md flex flex-col items-center gap-1 ${kit.name === 'kick' ? 'bg-purple-700 hover:bg-purple-600' :
                    kit.name === 'snare' ? 'bg-cyan-600 hover:bg-cyan-500' :
                      kit.name === 'hihat' ? 'bg-lime-600 hover:bg-lime-500' :
                        kit.name === 'openhat' ? 'bg-cyan-500 hover:bg-cyan-400' :
                          kit.name === 'crash' ? 'bg-purple-600 hover:bg-purple-500' :
                            kit.name === 'ride' ? 'bg-teal-600 hover:bg-teal-500' :
                              kit.name === 'tom' ? 'bg-amber-600 hover:bg-amber-500' :
                                kit.name === 'clap' ? 'bg-fuchsia-600 hover:bg-fuchsia-500' :
                                  kit.name === 'cowbell' ? 'bg-yellow-600 hover:bg-yellow-500' :
                                    kit.name === 'shaker' ? 'bg-violet-600 hover:bg-violet-500' :
                                      'bg-emerald-600 hover:bg-emerald-500'
                    } text-white w-full aspect-square max-w-[70px] max-h-[70px] sm:max-w-[90px] sm:max-h-[90px]`}
                  onClick={() => hitDrum(kit.name)}
                >
                  <div className="bg-black bg-opacity-50 px-1 py-0.5 rounded text-xs font-bold">
                    {kit.key}
                  </div>
                  <span className="text-xs leading-tight text-center font-medium truncate w-full">{kit.displayName}</span>
                </button>
              ))}
            </div>

            {/* Control Buttons */}
            <div className="flex gap-2 sm:gap-4 mt-2 sm:mt-4">
              <button
                className="bg-red-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-medium hover:bg-red-700 transition-colors text-sm"
                onClick={endGame}
              >
                End Game
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const accuracy = gameState.totalBeats > 0 ? (gameState.hitBeats / gameState.totalBeats) * 100 : 0;
    const grade = accuracy >= 90 ? 'S' : accuracy >= 80 ? 'A' : accuracy >= 70 ? 'B' : accuracy >= 60 ? 'C' : 'D';
    const isElitePerformance = accuracy >= 90; // Temporarily lowered for testing

    return (
      <div className="flex flex-col items-center gap-6 p-6 min-h-screen justify-center bg-gradient-to-b from-indigo-900 to-purple-900">
        {isElitePerformance && (
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-lg shadow-xl mb-4 animate-pulse">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">🎉 ELITE PERFORMANCE! 🎉</div>
              <div className="text-lg text-white">Your beats have been saved for choreography!</div>
              <div className="text-sm text-yellow-100 mt-1">A Reddit post has been created featuring your amazing performance!</div>
              <div className="text-xs text-yellow-200 mt-1">(Threshold temporarily set to 90% for testing)</div>
            </div>
          </div>
        )}

        <h1 className="text-4xl font-bold text-center text-white mb-4">
          Game Complete!
        </h1>

        <div className="bg-slate-800 p-8 rounded-lg shadow-xl max-w-md w-full">
          <div className="text-center space-y-4">
            <div className="text-6xl font-bold text-yellow-400 mb-4">{grade}</div>

            <div className="space-y-2 text-white">
              <div className="flex justify-between">
                <span>Final Score:</span>
                <span className="font-bold text-yellow-400">{gameState.score}</span>
              </div>
              <div className="flex justify-between">
                <span>Hits:</span>
                <span className="font-bold text-green-400">{gameState.hitBeats}/{gameState.totalBeats}</span>
              </div>
              <div className="flex justify-between">
                <span>Accuracy:</span>
                <span className="font-bold text-blue-400">{accuracy.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>Difficulty:</span>
                <span className="font-bold text-orange-400 capitalize">{gameState.difficulty}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            onClick={() => {
              setCurrentSection('menu');
              setBeatMarkers([]);
              setGameState({
                isPlaying: false,
                currentTime: 0,
                duration: 0,
                score: 0,
                totalBeats: 0,
                hitBeats: 0,
                difficulty: selectedDifficulty
              });
            }}
          >
            Play Again
          </button>
          <button
            className="bg-gray-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors"
            onClick={onCancel}
          >
            Main Menu
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full">
      {currentSection === 'menu' && renderMenu()}
      {currentSection === 'select' && renderSelect()}
      {currentSection === 'game' && renderGame()}
      {currentSection === 'results' && renderResults()}
    </div>
  );
};