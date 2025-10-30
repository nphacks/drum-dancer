export type InitResponse = {
  type: 'init';
  postId: string;
  count: number;
  username: string;
  postData?: any;
};

export type IncrementResponse = {
  type: 'increment';
  postId: string;
  count: number;
};

export type DecrementResponse = {
  type: 'decrement';
  postId: string;
  count: number;
};

export type LeaderboardEntry = {
  rank: number;
  username: string;
  score: number;
  difficulty: string;
  timestamp: number;
  patternAccuracy?: number;
};

export type LeaderboardResponse = {
  status: 'success' | 'error';
  leaderboard?: LeaderboardEntry[];
  message?: string;
};

export type SubmitScoreRequest = {
  username: string;
  score: number;
  difficulty: string;
  patternAccuracy?: number;
};

export type SubmitScoreResponse = {
  status: 'success' | 'error';
  message: string;
};

export type BeatRecord = {
  time: number;
  drum: string;
  hit: boolean;
  accuracy?: number;
};

export type BeatSequence = {
  id: string;
  originalPlayer: string;
  accuracy: number;
  difficulty: string;
  score: number;
  beats: BeatRecord[];
  bgMusic: string;
  createdAt: number;
  totalBeats: number;
  hitBeats: number;
};

export type SpeedChallenge = {
  id: string;
  originalSequenceId: string;
  originalPlayer: string;
  currentSpeed: number; // 1.0, 1.5, 2.0, 2.5...
  challengeLevel: number; // 1, 2, 3...
  difficulty: string;
  beats: BeatRecord[];
  createdAt: number;
  lastChallengerPlayer?: string;
  lastChallengerScore?: number;
};

export type CreateBeatSequenceRequest = {
  player: string;
  accuracy: number;
  difficulty: string;
  score: number;
  beats: BeatRecord[];
  totalBeats: number;
  hitBeats: number;
};

export type CreateBeatSequenceResponse = {
  status: 'success' | 'error';
  message: string;
  sequenceId?: string;
  postUrl?: string;
};

export type CreateSpeedChallengeRequest = {
  originalSequenceId: string;
  currentSpeed: number;
  challengeLevel: number;
  lastChallengerPlayer: string;
  lastChallengerScore: number;
};

export type CreateSpeedChallengeResponse = {
  status: 'success' | 'error';
  message: string;
  challengeId?: string;
  postUrl?: string;
};
