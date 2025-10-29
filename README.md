## Drum Dancer

A comprehensive rhythm-based drum game built on Reddit's Devvit platform that runs directly within Reddit posts. Players test their timing skills by hitting drum beats in sync with falling markers, competing for high scores on global leaderboards and creating viral speed challenges for the community.

### What This Game Is

Drum Dancer is an interactive rhythm game that runs natively within Reddit posts, featuring a comprehensive drum kit with 11 different instruments and over 100 unique sound variations. Players choose from three difficulty levels (Easy, Medium, Hard) and play through authentic drum patterns inspired by real musical genres like Rock, Funk, Jazz, Hip-Hop, and Metal. The game features a falling-note gameplay mechanic similar to Guitar Hero, where colored beat markers fall from the top of the screen and players must hit the corresponding drum buttons with precise timing.

**Core Game Features:**
- **11 Drum Instruments**: Kick, Snare, Hi-Hat, Open Hat, Crash, Ride, Tom, Clap, Cowbell, Shaker, and Percussion
- **100+ Sound Variations**: Each instrument offers multiple sound options (808, Acoustic, Analog, Electronic, Vintage, etc.)
- **Three Difficulty Levels**: Easy (45s), Medium (1:15), Hard (1:45) with progressively complex patterns
- **Authentic Musical Patterns**: 9 total patterns across genres (3 per difficulty level)
- **Real-Time Scoring**: Points based on timing accuracy with visual feedback
- **Global Leaderboards**: Persistent score tracking across all difficulty levels
- **Speed Challenge System**: Elite performances create viral community challenges

### What Makes This Game Innovative

**Revolutionary Social Rhythm Gaming:**
- **Reddit-Native Integration**: First rhythm game to run directly within Reddit posts with zero downloads required
- **Viral Speed Challenge System**: Elite performances (90%+ accuracy) automatically create speed challenge posts that escalate in difficulty (1.5x, 2.0x, 2.5x speed) until no one can beat them
- **Community-Driven Competition**: Speed challenges create viral content where players compete to become the ultimate "Speed King"
- **Seamless Social Features**: Integrated with Reddit's authentication, usernames, and social sharing

**Authentic Musical Experience:**
- **Real Drum Patterns**: Features authentic patterns from Rock, Funk, Jazz, Hip-Hop, Metal, Latin, and Progressive genres
- **Professional Sound Library**: 100+ professionally curated drum samples across all major drum types
- **Musical Education**: Players learn real drumming patterns used in popular music
- **Genre Progression**: Difficulty levels introduce players to increasingly complex musical styles

**Advanced Customization & Accessibility:**
- **Extensive Sound Customization**: 11 drum types with multiple sound variations (808s, acoustic, analog, electronic, vintage)
- **Cross-Platform Controls**: Full keyboard support (Q-W-E-R-T-Y-U-I-O-P-[) plus optimized touch/mouse controls
- **Mobile-First Design**: Responsive interface optimized for both desktop and mobile Reddit users
- **Accessibility Features**: Visual feedback, adjustable volume, and generous timing windows

**Technical Innovation:**
- **Real-Time Leaderboards**: Instant score submission with persistent Redis storage and live ranking updates
- **Dynamic Post Creation**: Automatic Reddit post generation for speed challenges with custom splash screens
- **Progressive Difficulty Engine**: Intelligent beat pattern generation that scales complexity appropriately
- **Performance Analytics**: Detailed accuracy tracking and beat sequence recording for challenge creation
- **Professional Dark Theme**: Carefully designed slate-gray interface with purple accents for optimal gaming experience

**Visual Design & User Experience:**
- **Modern Dark Theme**: Professional slate-gray color scheme with purple accents reduces eye strain
- **Intuitive Navigation**: Clean three-tab interface (Home 🏠, Leaderboard 🏆, Tutorial 📖) with clear visual hierarchy
- **Responsive Grid Layouts**: Optimized instrument customization panels that work seamlessly on all screen sizes
- **Visual Feedback Systems**: Color-coded difficulty indicators, medal systems, and real-time accuracy displays
- **Reddit Integration**: Native Snoo mascot integration and seamless username display for authentic Reddit experience
- **Smooth Animations**: 60fps falling beat markers with smooth transitions and visual effects
- **Real-Time HUD**: Live score counter, accuracy percentage, hits/total beats ratio, and countdown timer

### Technology Stack

- **[Devvit](https://developers.reddit.com/)**: Reddit's developer platform for building immersive apps that run natively in posts
- **[React 19](https://react.dev/)**: Modern UI framework with hooks, StrictMode, and TypeScript integration
- **[Express 5](https://expressjs.com/)**: Backend API server with RESTful endpoints and middleware support
- **[Redis](https://redis.io/)**: Fast data persistence for leaderboards, beat sequences, and speed challenges (via Devvit)
- **[Tailwind CSS 4](https://tailwindcss.com/)**: Utility-first styling framework with dark theme support
- **[TypeScript 5.8](https://www.typescriptlang.org/)**: Type-safe development across client, server, and shared modules
- **[Vite 6](https://vite.dev/)**: Fast build tool with hot module replacement and optimized production builds
- **Web Audio API**: Browser-native audio processing for drum sound playback and timing

**Key Technical Features:**
- **Real-Time Game Loop**: 60fps animation system using `requestAnimationFrame` for smooth falling beat markers
- **Precision Timing Engine**: 400ms hit window with accuracy calculations and anti-double-hit protection
- **Dynamic Audio Loading**: On-demand loading of 100+ drum samples with volume control and playback rate adjustment
- **Persistent State Management**: Redis-backed storage for leaderboards, beat sequences, and challenge progression
- **Automatic Post Generation**: Dynamic Reddit post creation with custom splash screens and game state data

## How to Play

### Getting Started

1. **Launch the Game**: Click the "Open the Game" button on the Reddit post splash screen to launch Drum Dancer in full-screen mode
2. **Main Interface**: Navigate using three tabs at the top of the screen:
   - **🏠 Home**: Game setup, difficulty selection, and quick start options
   - **🏆 Leaderboard**: View top scores across all difficulties with filtering options
   - **📖 Tutorial**: Complete gameplay instructions, controls guide, and pro tips

### Complete Step-by-Step Gameplay Guide

#### 1. Setting Up Your Game Session
**Home Tab Overview:**
- **Personalized Welcome**: See your Reddit username displayed prominently with Snoo mascot
- **Difficulty Selection**: Choose from three challenge levels with clear duration indicators:
  - **🟢 Easy (45s)**: Simple rock beats, perfect for beginners learning basic rhythm
  - **🟡 Medium (1:15)**: Funk and reggae grooves with syncopation and ghost notes
  - **🔴 Hard (1:45)**: Complex jazz, metal, and progressive patterns with multiple simultaneous instruments

**Quick Start Options:**
- **"Start [Difficulty] Game"**: Begin immediately with your selected difficulty using default drum sounds
- **"Customize Instruments"**: Access the full sound customization interface before playing

#### 2. Customizing Your Drum Kit (Recommended for Best Experience)
**Dark Theme Sound Customization Interface:**
- **Professional Dark UI**: Sleek slate-gray interface with purple accents optimized for extended play sessions
- **11 Instrument Categories**: Each with dedicated dark-themed customization panels featuring:
  - **Kick (Q)**: 26 variations including 808, Acoustic, Big, Classic, Deep, Heavy, Vintage
  - **Snare (W)**: 22 variations including 808, Acoustic, Analog, Electro, Punch, Tape
  - **Hi-Hat (E)**: 11 variations including 808, Acoustic, Digital, Electro, Ring
  - **Open Hat (R)**: 5 variations including 808, Acoustic, Analog, Slick, Tight
  - **Crash (T)**: 4 variations including 808, Acoustic, Noise, Tape
  - **Ride (Y)**: 2 acoustic variations for authentic cymbal sounds
  - **Tom (U)**: 9 variations including 808, Acoustic, Analog, FM, Chiptune
  - **Clap (I)**: 6 variations including 808, Analog, Fat, Crushed, Slapper
  - **Cowbell (O)**: Classic 808 cowbell sound
  - **Shaker (P)**: 3 variations including Analog, Shuffle, Suck Up
  - **Percussion ([)**: 10 variations including 808, Chirpy, Metal, Laser, Tribal

**Customization Features:**
- **Sound Preview**: Click the "▶" button next to each sound to test it before selection
- **Radio Button Selection**: Choose one sound per instrument category with clear visual feedback
- **Purple Key Indicators**: Each instrument panel shows its keyboard key in a prominent purple badge
- **Volume Control**: Master volume slider affects all drum sounds and background music
- **Real-Time Testing**: Play sounds at your selected volume level during customization
- **Automatic Saving**: Your selections are preserved for future game sessions
- **Dark Theme Benefits**: Reduced eye strain during extended customization sessions
- **Comprehensive Library**: Over 100 total sounds across all instruments organized in an intuitive grid layout

#### 3. Core Rhythm Gameplay Mechanics
**Game Flow & States:**
- **Menu State**: Initial game setup with difficulty selection and customization options
- **Select State**: Sound customization interface (can be skipped with quick start)
- **Game State**: Active rhythm gameplay with falling markers and real-time scoring
- **Results State**: Final score display, accuracy calculation, and leaderboard submission

**Visual Game Elements:**
- **Falling Beat Markers**: Colored circles fall from the top of the screen, each color representing a different drum
- **Hit Zone**: Lime-green horizontal line at the bottom where you must time your hits for perfect accuracy
- **Drum Button Interface**: 11 colored buttons at the bottom corresponding to each instrument with clear labels
- **Real-Time HUD**: Live score counter, accuracy percentage, hits/total beats ratio, and countdown timer
- **3-Second Countdown**: Large numerical countdown (3-2-1) before each game begins
- **Background Music**: Synchronized audio track that matches the beat patterns at 120 BPM
- **Dark Gaming Interface**: Professional dark theme reduces eye strain during intense gameplay sessions
- **Speed Challenge Indicators**: Lightning bolt emojis (⚡) show challenge level and speed multiplier

**Core Gameplay Loop:**
1. **Game Initialization**: Select difficulty and customize sounds (or use quick start)
2. **Pattern Loading**: Game generates authentic drum patterns based on selected difficulty
3. **Countdown Phase**: 3-second countdown with visual and audio cues
4. **Active Gameplay**: Beat markers fall from top, player hits corresponding drums when markers reach hit zone
5. **Real-Time Scoring**: Points awarded based on timing accuracy (0-100 points per beat)
6. **Game Completion**: After time expires, final score and accuracy are calculated
7. **Results & Progression**: Score submitted to leaderboards, elite performances (90%+) create speed challenges

**Control Schemes:**
- **Keyboard Controls** (Recommended for Desktop):
  - **Q**: Kick drum (typically red/orange colored)
  - **W**: Snare drum (typically blue colored)
  - **E**: Hi-Hat (typically yellow colored)
  - **R**: Open Hat (typically green colored)
  - **T**: Crash cymbal (typically purple colored)
  - **Y**: Ride cymbal (typically cyan colored)
  - **U**: Tom drum (typically pink colored)
  - **I**: Clap (typically orange colored)
  - **O**: Cowbell (typically brown colored)
  - **P**: Shaker (typically light blue colored)
  - **[**: Percussion (typically gray colored)

- **Touch/Mouse Controls** (Mobile & Desktop):
  - Tap or click the colored drum buttons at the bottom of the screen
  - Each button is clearly labeled with the drum name and keyboard key
  - Responsive design optimized for finger tapping on mobile devices

**Scoring System:**
- **Hit Window**: 400ms timing window for successful hits (generous for accessibility)
- **Accuracy-Based Points**: 0-100 points per beat based on timing precision
- **Perfect Timing**: 100 points for hits exactly on the beat marker
- **Good Timing**: Scaled points based on timing accuracy within the hit window
- **Missed Beats**: 0 points, marked visually as red missed markers after 200ms delay
- **Accuracy Calculation**: (Hits / Total Beats) × 100%
- **Final Score**: Sum of all timing-based points earned during the session
- **Elite Performance**: 90%+ accuracy unlocks Speed Challenge creation

#### 4. Understanding Musical Patterns and Difficulty Progression
**Intelligent Pattern Generation System:**
- **Random Pattern Selection**: Each game randomly selects one of 3 authentic patterns per difficulty level
- **Dynamic Complexity Scaling**: Patterns gradually increase in complexity as the game progresses
- **Authentic Musical Structure**: All patterns based on real drumming techniques used in popular music
- **120 BPM Foundation**: All patterns synchronized to a consistent 120 beats per minute tempo

**Easy Difficulty Patterns (45 seconds):**
1. **Classic Rock Beat**: Standard 4/4 time with kick on 1&3, snare on 2&4, steady hi-hat
2. **Pop Beat with Open Hi-Hat**: Similar to rock but with open hi-hat accents for variety
3. **Simple Disco Beat**: Four-on-the-floor kick pattern with consistent snare backbeat

**Medium Difficulty Patterns (1:15):**
1. **Funk Groove**: Syncopated kick patterns, ghost snares, and complex hi-hat work
2. **Reggae One Drop**: Distinctive reggae rhythm with kick on 3, snare on 2&4, no kick on 1
3. **Hip-Hop Groove**: Modern urban rhythm with ghost kicks, claps, and syncopated patterns

**Hard Difficulty Patterns (1:45):**
1. **Progressive Rock**: Complex polyrhythms using 5+ instruments simultaneously (kick, snare, hi-hat, tom, crash)
2. **Latin Jazz**: Sophisticated patterns with cowbell, shaker, ride cymbal, and intricate percussion
3. **Metal/Double Bass**: Fast double-kick patterns, crash accents, and aggressive snare work

**Pattern Learning Tips:**
- **Listen First**: Each pattern plays background music to help you feel the rhythm
- **Visual Cues**: Watch for recurring color patterns in the falling markers
- **Muscle Memory**: Practice the same difficulty multiple times to build familiarity
- **Genre Recognition**: Learn to identify musical styles to anticipate pattern changes

#### 5. Leaderboard Competition and Social Features
**Advanced Leaderboard System:**
- **Global Rankings**: Combined leaderboard showing top scores across all difficulties with "All" filter
- **Difficulty-Specific Filtering**: Dedicated filter buttons for Easy, Medium, Hard, and All difficulties
- **Color-Coded Difficulties**: Easy (🟢 lime), Medium (🟡 cyan), Hard (🟣 purple) for easy identification
- **Real-Time Updates**: Scores submit automatically and appear immediately after game completion
- **Professional Ranking Display**: Clean table format showing rank, username, score, and difficulty
- **Medal System**: Gold 🥇, Silver 🥈, Bronze 🥉 medals for top 3 positions with special highlighting
- **Dark Theme Leaderboard**: Elegant slate-gray interface with clear typography and visual hierarchy
- **Refresh Function**: Manual refresh button (🔄) to check for new scores and updates
- **Empty State Handling**: Encouraging messages when no scores exist yet ("Be the first to play!")

**Score Submission:**
- **Automatic Process**: All completed games automatically submit to leaderboards
- **Username Integration**: Uses your Reddit username for leaderboard entries
- **Persistent Storage**: Scores are permanently stored and ranked against all players
- **No Minimum Score**: Even practice runs contribute to your personal statistics

#### 6. Speed Challenge System (Advanced Feature)
**Creating Speed Challenges:**
- **Elite Performance Requirement**: Achieve 90%+ accuracy in any difficulty level to unlock challenge creation
- **Automatic Reddit Post Creation**: System automatically creates a new Reddit post with custom splash screen
- **1.5x Speed**: Your exact beat pattern becomes playable at 1.5x speed for other players
- **Viral Social Integration**: Successful challenges can be shared and attempted by the entire Reddit community

**Participating in Speed Challenges:**
- **Challenge Posts**: Look for posts titled "⚡ Speed Challenge" with lightning bolt emojis in the subreddit
- **Challenge Information Display**: See original player, difficulty level, current speed multiplier, and previous challenger
- **Escalating Difficulty**: Successfully completed challenges create even faster versions (2.0x, 2.5x, 3.0x...)
- **Speed King Status**: Become the ultimate champion by conquering the highest speed multiplier
- **Challenge Level Indicators**: Multiple lightning bolts (⚡⚡⚡) show the current challenge level

**Speed Challenge Mechanics:**
- **Identical Beat Patterns**: Uses the exact beat sequence from the original elite performance
- **Accelerated Playback**: Background music and beat timing accelerated by the speed multiplier
- **90% Accuracy Requirement**: Must maintain 90%+ accuracy to successfully complete the challenge
- **Automatic Next Level Creation**: Successful completions automatically generate the next speed level
- **Community Viral Loop**: Creates ongoing viral content as players attempt increasingly difficult speeds
- **Previous Challenger Recognition**: Shows who conquered the previous speed level and their score
- **Automatic Reddit Post Creation**: System creates new Reddit posts with custom splash screens for each challenge level
- **Progressive Speed Scaling**: Challenges increase by 0.5x increments (1.5x → 2.0x → 2.5x → 3.0x...)

### Advanced Tips for Mastery

**Timing and Technique:**
- **Anticipation**: Hit slightly before the marker reaches the line for perfect timing
- **Visual Focus**: Watch the falling markers, not your hands or the buttons
- **Rhythm Feel**: Use the background music to maintain steady timing
- **Multi-Finger Technique**: Use multiple fingers on keyboard for complex patterns

**Practice Strategies:**
- **Start Easy**: Master Easy difficulty before progressing to Medium or Hard
- **Pattern Recognition**: Learn to identify recurring drum combinations
- **Consistency Over Speed**: Focus on accuracy before attempting faster difficulties
- **Regular Practice**: Short, frequent sessions build muscle memory better than long sessions

**Mobile Optimization:**
- **Thumb Positioning**: Use both thumbs for faster response on mobile devices
- **Screen Orientation**: Portrait mode recommended for optimal button spacing
- **Audio Quality**: Use headphones or good speakers for better rhythm perception
- **Stable Connection**: Ensure good internet connection for smooth gameplay and leaderboard updates

### Core Game Features

**Advanced Rhythm Game Engine:**
- **Falling Note Gameplay**: Guitar Hero-style rhythm mechanics adapted specifically for authentic drum patterns
- **Precision Timing System**: 400ms hit window with accuracy-based scoring (0-100 points per beat)
- **Visual Feedback**: Real-time hit/miss indicators with lime-green hit zones and color-coded success states
- **Background Music Integration**: Synchronized 120 BPM audio tracks that match the beat patterns perfectly
- **Dark Theme Gaming Interface**: Professional slate-gray UI reduces eye strain during extended play sessions
- **60fps Game Loop**: Smooth animation using `requestAnimationFrame` for precise timing and visual feedback

**Authentic Musical Content:**
- **9 Real Drum Patterns**: Authentic patterns across Rock, Funk, Jazz, Hip-Hop, Metal, Latin, and Progressive genres
- **Progressive Complexity**: Easy (simple 4/4 rock), Medium (syncopated funk/reggae), Hard (polyrhythmic with 5+ instruments)
- **Professional Sound Library**: 100+ high-quality drum samples including 808s, acoustic, analog, and electronic variations
- **Musical Education**: Learn real drumming techniques used in popular music with pattern names displayed
- **Genre Recognition**: Each difficulty features 3 different musical styles for variety and learning
- **Dynamic Pattern Generation**: Intelligent beat sequence creation with gradual complexity scaling

**Extensive Customization & Accessibility:**
- **Complete Drum Kit Customization**: Choose from multiple sound variations for each of 11 instruments with preview functionality
- **Cross-Platform Controls**: Optimized keyboard (Q-W-E-R-T-Y-U-I-O-P-[) and responsive touch/mouse controls
- **Master Volume Control**: Adjustable volume slider affects all drum sounds and background music
- **Mobile-First Responsive Design**: Optimized interface for both desktop and mobile Reddit users
- **Purple Key Indicators**: Clear visual keyboard key mappings on each drum button
- **Anti-Double-Hit Protection**: Prevents accidental multiple hits on the same beat marker

**Advanced Social & Competitive Features:**
- **Real-Time Leaderboards**: Instant score submission with persistent global and difficulty-specific rankings
- **Medal System**: Gold, silver, bronze medals for top 3 positions with special visual highlighting
- **Reddit Integration**: Seamless authentication using Reddit usernames with Snoo mascot integration
- **Viral Speed Challenge System**: Elite performances (90%+ accuracy) automatically create community challenge posts
- **Progressive Speed Multipliers**: Challenges escalate from 1.5x to unlimited speed with lightning bolt indicators
- **Community Viral Loop**: Speed challenges create ongoing viral Reddit content for sustained engagement
- **Automatic Post Creation**: Dynamic Reddit post generation with custom splash screens for challenges

### Technical Requirements

**Platform Requirements:**
- **Reddit Account**: Automatic authentication through Devvit platform (no separate login required)
- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge with HTML5 audio support
- **JavaScript Enabled**: Required for React 19 application and API communication
- **Internet Connection**: Stable connection needed for leaderboards, score submission, and challenge creation
- **Audio Support**: Web Audio API support for drum sound playback and timing

**Optimal Experience:**
- **Audio Output**: Speakers or headphones recommended for rhythm timing and musical feedback
- **Screen Size**: Minimum 320px width (mobile-optimized), desktop recommended for keyboard play
- **Input Methods**: Physical keyboard for best precision, touch screen for mobile play
- **Performance**: Modern device capable of smooth 60fps animation for falling beat markers
- **Memory**: Sufficient RAM for loading 100+ audio samples and React application state

**Browser Compatibility:**
- **Desktop**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+, Samsung Internet 13+
- **Audio Latency**: Lower latency audio systems provide better rhythm gaming experience
- **Network**: Minimum connection for API calls, no streaming audio (all sounds load locally)
- **Viewport**: Responsive design supports portrait and landscape orientations

## Development Setup

> Make sure you have Node.js 22.2.0+ installed before running!

### Prerequisites
- **Node.js 22.2.0+**: Required for Devvit platform compatibility
- **Reddit Developer Account**: Sign up at [developers.reddit.com](https://developers.reddit.com)
- **Devvit CLI**: Installed automatically with the project

### Quick Start
1. **Clone or create the project**: This is a complete Devvit React application
2. **Install dependencies**: `npm install`
3. **Login to Reddit**: `npm run login` (authenticate with your Reddit developer account)
4. **Start development**: `npm run dev` (launches client, server, and Devvit playtest environment)
5. **Open playtest URL**: Visit the provided URL (e.g., `https://www.reddit.com/r/drum_dancer_dev?playtest=drum-dancer`)

### Development Environment
- **Test Subreddit**: Automatically creates `r/drum_dancer_dev` for testing
- **Live Reload**: Client and server rebuild automatically on file changes
- **Reddit Integration**: Full Reddit API access and user authentication in development
- **Local Testing**: All game features work in the development environment

## Development Commands

- `npm run dev`: Starts development server with live Reddit integration testing
- `npm run build`: Builds optimized client and server bundles
- `npm run deploy`: Uploads new version to Reddit's platform
- `npm run launch`: Publishes app for Reddit's review process
- `npm run login`: Authenticates CLI with Reddit developers account
- `npm run check`: Runs TypeScript checks, linting, and code formatting

## Architecture Overview

### Client (`src/client/`)
- **React 19 Application**: Modern hooks-based rhythm game UI with TypeScript and Tailwind CSS 4
- **Entry Point**: `main.tsx` renders the main `App` component with React StrictMode
- **Main Components**: 
  - `App.tsx`: Main application with tabbed interface (Home, Leaderboard, Tutorial) and comprehensive drum kit definitions (686 lines)
  - `GamePage.tsx`: Core rhythm game engine with falling note mechanics, beat pattern generation, and audio management (1340+ lines)
  - `SpeedChallengePage.tsx`: Specialized interface for speed challenge posts with challenge progression
- **Game Engine**: Real-time beat detection, scoring system, and audio management with 400ms hit windows
- **Responsive Design**: Mobile-first approach optimized for both keyboard and touch controls
- **Audio System**: Dynamic drum sound loading with 100+ samples organized by instrument type
- **Build System**: Vite 6 with hot module replacement and optimized production builds

### Server (`src/server/`)
- **Express 5 API**: RESTful endpoints for game operations:
  - `/api/init`: Game initialization with Reddit user context
  - `/api/leaderboard/*`: Score submission and retrieval with Redis persistence
  - `/api/beat-sequence/*`: Elite performance tracking and speed challenge creation
  - `/api/speed-challenge/*`: Viral challenge post generation
- **Reddit Integration**: Automatic post creation for speed challenges with custom splash screens via `core/post.ts`
- **Redis Storage**: Persistent leaderboards, beat sequences, and challenge data using Devvit's Redis client
- **Post Management**: Dynamic Reddit post creation with game state data and splash screen configuration
- **Build System**: Vite SSR build targeting CommonJS for Devvit compatibility

### Shared (`src/shared/`)
- **Type Definitions**: Comprehensive TypeScript interfaces in `types/api.ts`:
  - `LeaderboardEntry`, `BeatSequence`, `SpeedChallenge`
  - API request/response types for all game endpoints
  - Beat recording and accuracy tracking structures
- **Type Safety**: Ensures consistency between client rhythm engine and server data persistence
- **Cross-Platform Types**: Shared interfaces used by both React client and Express server

## Cursor Integration

This project includes pre-configured Cursor IDE support. [Download Cursor](https://www.cursor.com/downloads) and enable the `devvit-mcp` extension when prompted for enhanced development experience.
