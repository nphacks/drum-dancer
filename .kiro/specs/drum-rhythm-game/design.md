# Design Document

## Overview

The Drum Rhythm Game is a React-based web application built on Reddit's Devvit platform. It combines rhythm gaming mechanics with social features, allowing players to compete through leaderboards and speed challenges while enjoying authentic drum patterns across multiple difficulty levels.

## Architecture

### Client-Side Architecture
- **React.js** frontend with TypeScript for type safety
- **Component-based structure** with clear separation of concerns
- **State management** using React hooks for game state, settings, and UI
- **Real-time game loop** using requestAnimationFrame for smooth 60fps gameplay
- **Responsive design** with Tailwind CSS for mobile and desktop compatibility

### Server-Side Architecture
- **Express.js** server handling API endpoints
- **Redis** for persistent data storage (leaderboards, beat sequences, challenges)
- **Reddit API integration** through Devvit for user authentication and post creation
- **RESTful API design** with `/api/` prefix for all endpoints

### Data Flow
1. Client authenticates through Reddit/Devvit automatically
2. Game state managed locally with periodic server sync for scores
3. Beat sequences stored server-side for speed challenges
4. Leaderboards updated in real-time via API calls

## Components and Interfaces

### Core Components

#### App.tsx
- **Main application container** with tab navigation (Home, Leaderboard, Tutorial)
- **Loading state management** to prevent UI flashing
- **Game settings state** (difficulty, volume, sound selection)
- **Routing logic** between main app and speed challenges

#### GamePage.tsx
- **Game engine** with beat generation, hit detection, and scoring
- **Audio management** for drum sounds and background music
- **Visual game area** with falling beat markers and hit zone
- **Responsive drum controls** with dynamic instrument layout

#### SpeedChallengePage.tsx
- **Challenge interface** for accepting and playing speed challenges
- **Challenge metadata display** (original player, speed multiplier, difficulty)
- **Integration with GamePage** for actual gameplay

#### drumPatterns.ts
- **Pattern library** with 30 authentic drum patterns (10 per difficulty)
- **Musical styles** including Rock, Funk, Jazz, Metal, Latin, Electronic
- **Structured data** with timing and drum type information

### Key Interfaces

```typescript
interface DrumBeat {
  time: number;    // Beat timing in seconds
  drum: string;    // Drum type identifier
}

interface BeatMarker {
  id: string;
  time: number;
  drum: string;
  lane: number;
  hit: boolean;
  missed: boolean;
  accuracy?: number;
}

interface GameState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  score: number;
  totalBeats: number;
  hitBeats: number;
  difficulty: 'easy' | 'medium' | 'hard';
}
```

## Data Models

### Leaderboard Entry
```typescript
{
  username: string;
  score: number;
  difficulty: string;
  timestamp: number;
  rank: number;
}
```

### Beat Sequence
```typescript
{
  id: string;
  originalPlayer: string;
  accuracy: number;
  difficulty: string;
  score: number;
  beats: DrumBeat[];
  createdAt: number;
  totalBeats: number;
  hitBeats: number;
}
```

### Speed Challenge
```typescript
{
  id: string;
  originalSequenceId: string;
  originalPlayer: string;
  currentSpeed: number;
  challengeLevel: number;
  difficulty: string;
  lastChallengerPlayer: string;
  lastChallengerScore: number;
}
```

## Error Handling

### Client-Side Error Handling
- **Network failures**: Graceful degradation with retry mechanisms
- **Audio loading errors**: Fallback to default sounds
- **Game state corruption**: Reset to safe defaults
- **Input validation**: Sanitize all user inputs

### Server-Side Error Handling
- **Redis connection failures**: Return appropriate error responses
- **Reddit API failures**: Log errors but don't break core functionality
- **Invalid requests**: Validate all inputs with proper error messages
- **Rate limiting**: Prevent spam and abuse

## Testing Strategy

### Unit Testing Focus Areas
- **Beat pattern generation** accuracy and timing
- **Hit detection logic** with various timing scenarios
- **Score calculation** algorithms
- **Audio system** loading and playback
- **API endpoint** request/response handling

### Integration Testing
- **Client-server communication** for all API endpoints
- **Redis data persistence** and retrieval
- **Reddit post creation** and data storage
- **Cross-browser compatibility** testing

### Performance Testing
- **Game loop performance** at 60fps with multiple beat markers
- **Memory usage** during extended gameplay sessions
- **Audio latency** and synchronization
- **Mobile device performance** optimization

### User Experience Testing
- **Responsive design** across device sizes
- **Touch vs keyboard input** accuracy and responsiveness
- **Loading times** and perceived performance
- **Accessibility** compliance for inclusive design

## Security Considerations

### Authentication
- **Reddit OAuth** handled entirely by Devvit platform
- **No custom authentication** required or implemented
- **User context** automatically provided by Devvit middleware

### Data Validation
- **Input sanitization** for all user-provided data
- **Score validation** to prevent impossible scores
- **Rate limiting** on API endpoints to prevent abuse
- **SQL injection prevention** (not applicable - using Redis)

### Privacy
- **Minimal data collection** - only usernames and scores
- **No personal information** stored beyond Reddit username
- **Public leaderboards** with user consent implied by gameplay