## Drum Dancer

A comprehensive rhythm-based drum game built on Reddit's Devvit platform that runs directly within Reddit posts. Players test their timing skills by hitting drum beats in sync with falling markers, competing for high scores on global leaderboards and creating viral speed challenges for the community.

### What This Game Is

Drum Dancer is an interactive rhythm game that runs natively within Reddit posts, featuring a comprehensive drum kit with 11 different instruments and over 100 unique sound variations. Players choose from three difficulty levels (Easy, Medium, Hard) and play through authentic drum patterns inspired by real musical genres like Rock, Funk, Jazz, Hip-Hop, and Metal. The game features a falling-note gameplay mechanic similar to Guitar Hero, where colored beat markers fall from the top of the screen and players must hit the corresponding drum buttons with precise timing.

**How It Works:**
1. **Launch from Reddit**: Click "Open the Game" on any Drum Dancer post to start playing immediately in full-screen mode
2. **Choose Your Challenge**: Select Easy (45s), Medium (75s), or Hard (105s) difficulty with progressively complex drum patterns
3. **Customize Your Kit**: Pick from 100+ drum sounds across 11 instruments (Kick, Snare, Hi-Hat, Crash, etc.) with preview functionality
4. **Play the Rhythm**: Watch colored beat markers fall down the screen and hit the matching drum buttons when they reach the lime-green hit zone
5. **Score Points**: Earn 0-100 points per beat based on timing accuracy, with bonus points for following authentic musical patterns
6. **Compete Globally**: Your scores automatically submit to real-time leaderboards with difficulty filtering and medal rankings
7. **Create Viral Challenges**: Elite performances (90%+ accuracy) automatically generate Reddit posts for speed challenges that escalate in difficulty

The game intelligently displays only the 5 most active drums for each pattern in a flexible wrap layout, optimizing the mobile experience while maintaining musical authenticity. Each session features real-time scoring based on timing accuracy, with a sophisticated penalty system for wrong drum hits and comprehensive pattern accuracy tracking.

**Core Game Features:**
- **11 Drum Instruments**: Kick (Q), Snare (W), Hi-Hat (E), Open Hat (R), Crash (T), Ride (Y), Tom (U), Clap (I), Cowbell (O), Shaker (P), and Percussion ([)
- **100+ Sound Variations**: Each instrument offers multiple sound options (808, Acoustic, Analog, Electronic, Vintage, etc.) with preview functionality
- **Three Difficulty Levels**: Easy (45s), Medium (75s), Hard (105s) with progressively complex patterns and authentic musical genres
- **30 Authentic Musical Patterns**: Real drum patterns from Rock, Funk, Jazz, Hip-Hop, Metal, Latin, Progressive, and more (10 per difficulty)
- **Precision Timing System**: 300ms hit window with accuracy-based scoring (0-100 points per beat) and visual feedback
- **Global Leaderboards**: Real-time score submission with persistent Redis storage and difficulty-specific filtering
- **Viral Speed Challenge System**: Elite performances (90%+ accuracy) automatically create Reddit posts for community challenges
- **Advanced Penalty System**: -10 point penalties for hitting wrong drums during active beats, with anti-double-hit protection
- **Intelligent Mobile Interface**: Dynamically shows only the 5 most active drums per pattern in a flexible wrap layout for optimal mobile experience
- **Professional Dark Theme**: Slate-gray interface with purple/cyan/lime accents designed for extended gaming sessions

### How to Play Drum Dancer

#### Getting Started
1. **Launch the Game**: Click the "Open the Game" button on the Reddit post splash screen to launch Drum Dancer in full-screen mode
2. **Navigate the Interface**: Use the three tabs at the top of the screen:
   - **Home**: Game setup, difficulty selection, and customization options
   - **Leaderboard**: View global rankings with difficulty filtering (All, Easy, Medium, Hard)
   - **Tutorial**: Complete gameplay instructions, controls guide, and pro tips

#### Step-by-Step Gameplay

**1. Home Tab - Setup Your Game**
- See your Reddit username displayed with the Snoo mascot
- Choose from three difficulty levels:
  - **🟢 Easy (45s)**: Simple rock and pop beats with 2-3 drums, perfect for beginners
  - **🟡 Medium (75s)**: Funk, reggae, and country grooves with syncopation and 4-5 drums
  - **🔴 Hard (105s)**: Complex progressive, metal, and jazz patterns with 5+ drums
- Select "Start [Difficulty] Game" for immediate play or "Customize Instruments" to personalize your drum kit

**2. Customize Your Drum Kit (Optional)**
- Choose from 100+ drum sounds across 11 instruments:
  - **Kick (Q)**: 26 variations including 808, Acoustic, Big, Classic, Deep, Heavy
  - **Snare (W)**: 22 variations including 808, Acoustic, Analog, Electro, Punch
  - **Hi-Hat (E)**: 11 variations including 808, Acoustic, Digital, Electro
  - **Open Hat (R)**: 5 variations including 808, Acoustic, Analog, Slick
  - **Crash (T)**: 4 variations including 808, Acoustic, Noise, Tape
  - **Ride (Y)**: 2 acoustic variations for authentic cymbal sounds
  - **Tom (U)**: 9 variations including 808, Acoustic, Analog, FM, Chiptune
  - **Clap (I)**: 6 variations including 808, Analog, Fat, Crushed
  - **Cowbell (O)**: Classic 808 cowbell sound
  - **Shaker (P)**: 3 variations including Analog, Shuffle, Suck Up
  - **Percussion ([)**: 10 variations including 808, Chirpy, Metal, Laser
- Preview sounds by clicking the "▶" button next to each option
- Adjust master volume (0-100%) to your preference
- Your selections are automatically saved for future games

**3. Core Rhythm Gameplay**
- **3-Second Countdown**: Game begins with a large visual countdown (3-2-1) and "Get Ready!" message
- **Falling Beat Markers**: Colored circles with keyboard letters fall from top to bottom in vertical lanes
- **Hit Zone**: Lime-green horizontal line at the bottom labeled "HIT ZONE!" where precise timing is required
- **Dynamic Interface**: Game intelligently shows only the 5 most active drums for the current pattern (optimized for mobile)
- **Real-Time Scoring**: Earn 0-100 points per beat based on timing accuracy within a 300ms window
- **Visual Feedback**: Beat markers change color - purple (approaching) → cyan (hittable) → lime (hit) → red (missed)
- **Live Game HUD**: Real-time display of score, hits/total beats, accuracy percentage, and countdown timer with progress bar

**4. Controls**
- **Keyboard** (Desktop): Q-W-E-R-T-Y-U-I-O-P-[ keys correspond to different drums
  - **Q**: Kick (purple), **W**: Snare (cyan), **E**: Hi-Hat (lime), **R**: Open Hat (light cyan)
  - **T**: Crash (purple), **Y**: Ride (teal), **U**: Tom (amber), **I**: Clap (fuchsia)
  - **O**: Cowbell (yellow), **P**: Shaker (violet), **[**: Percussion (emerald)
- **Touch/Mouse** (Mobile & Desktop): Tap or click the colored drum buttons at the bottom of the screen
- **Timing Window**: 300ms window for successful hits (requires skill and practice)
- **Penalty System**: -10 points for hitting wrong drums during active beats with anti-double-hit protection

**5. Game Completion & Results**
- **Letter Grades**: Large letter grade display - S (90%+), A (80-89%), B (70-79%), C (60-69%), D (<60%)
- **Elite Performance Banner**: Special animated "🎉 ELITE PERFORMANCE! 🎉" banner for 90%+ accuracy
- **Detailed Statistics**: Final score, hits/total beats, accuracy percentage, pattern accuracy, and difficulty level
- **Automatic Leaderboard**: Your score is automatically submitted to global and difficulty-specific rankings
- **Speed Challenge Creation**: Elite performances (90%+ accuracy) automatically create Reddit posts for viral community challenges
- **Action Options**: "Play Again" to restart with same settings or "Main Menu" to return to home interface

#### Speed Challenge System (Advanced)
- **Creating Challenges**: Achieve 90%+ accuracy to automatically create a Reddit post
- **Challenge Mechanics**: Your exact beat pattern becomes playable at 1.5x speed
- **Community Competition**: Other players can attempt your challenge
- **Escalating Difficulty**: Successful completions create faster versions (2.0x, 2.5x, 3.0x...)
- **Speed King Status**: Become champion by conquering the highest speed multiplier

### What Makes This Game Innovative

**Revolutionary Social Rhythm Gaming:**
- **Reddit-Native Integration**: First comprehensive rhythm game to run directly within Reddit posts with zero downloads required
- **Viral Speed Challenge System**: Elite performances (90%+ accuracy) automatically create speed challenge posts that escalate in difficulty (1.5x, 2.0x, 2.5x speed) until no one can beat them
- **Community-Driven Competition**: Speed challenges create viral Reddit content where players compete to become the ultimate "Speed King" with lightning bolt indicators (⚡⚡⚡)
- **Seamless Social Features**: Integrated with Reddit's authentication, usernames, and automatic post creation with custom splash screens
- **Adaptive Mobile Interface**: Intelligent 5-drum display with flexible wrap layout ensures optimal spacing and accessibility across all screen sizes

**Authentic Musical Experience:**
- **30 Real Drum Patterns**: Authentic patterns from Rock, Pop, Disco, Funk, Reggae, Country, Latin, Progressive Metal, and more (10 per difficulty level)
- **Professional Sound Library**: 100+ professionally curated drum samples including 808s, acoustic, analog, electronic, and vintage variations
- **Musical Education**: Players learn real drumming techniques used in popular music across multiple genres
- **Progressive Genre Complexity**: Easy (simple rock/pop beats), Medium (funk/reggae/country), Hard (progressive/metal/jazz with complex polyrhythms)
- **Pattern Accuracy Tracking**: Advanced system tracks how well players follow authentic musical patterns vs. just hitting beats
- **Random Pattern Selection**: Each game randomly selects one of 10 patterns per difficulty for maximum replayability

**Advanced Customization & Mobile Optimization:**
- **Comprehensive Sound Customization**: 11 drum types with multiple variations, preview functionality, and persistent settings
- **Intelligent Mobile Interface**: Dynamically shows only the 5 most active drums per pattern in a flexible wrap layout for optimal mobile experience
- **Cross-Platform Controls**: Full keyboard support (Q-W-E-R-T-Y-U-I-O-P-[) plus responsive touch/mouse controls optimized for mobile
- **Professional Dark Theme**: Carefully designed slate-gray interface with purple/cyan/lime accents reduces eye strain during extended play
- **Responsive Design**: Seamless experience across desktop and mobile with optimized button sizes and layouts
- **Three-Tab Interface**: Clean navigation between Home (game setup), Leaderboard (global rankings), and Tutorial (comprehensive guide)

**Technical Innovation & Fair Play:**
- **Real-Time Leaderboards**: Instant score submission with persistent Redis storage, difficulty filtering, and medal system (🥇🥈🥉)
- **Advanced Anti-Cheat System**: Wrong drum penalties (-10 points), anti-double-hit protection, and pattern validation ensure fair gameplay
- **Dynamic Post Creation**: Automatic Reddit post generation for speed challenges with custom splash screens and game state data
- **60fps Game Engine**: Smooth falling beat markers using requestAnimationFrame with precise 300ms timing windows
- **Performance Analytics**: Detailed accuracy tracking, beat sequence recording, and pattern accuracy calculation for challenge creation
- **Progressive Speed Multipliers**: Challenges automatically escalate (1.5x → 2.0x → 2.5x → 3.0x...) with community viral loop mechanics

**Visual Design & User Experience:**
- **Real-Time Game HUD**: Live score counter, accuracy percentage, hits/total ratio, countdown timer, and progress bar
- **Visual Feedback Systems**: Color-coded beat markers (purple → cyan when hittable → lime when hit → red when missed)
- **Elite Performance Recognition**: Special animated banners and automatic Reddit post creation for 90%+ accuracy performances
- **Reddit Integration**: Native Snoo mascot, seamless username display, and authentic Reddit post splash screens
- **Grade System**: Letter grades (S, A, B, C, D) based on accuracy with detailed performance statistics
- **Loading States**: Smooth transitions and loading screens prevent interface flashing

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
- **Real-Time Game Loop**: 60fps animation system using `requestAnimationFrame` for smooth falling beat markers with precise timing calculations
- **Precision Timing Engine**: 300ms hit window with accuracy calculations and anti-double-hit protection for competitive gameplay
- **Dynamic Audio Loading**: On-demand loading of 100+ drum samples with volume control and playback rate adjustment for speed challenges
- **Persistent State Management**: Redis-backed storage for leaderboards, beat sequences, and challenge progression with automatic ranking
- **Automatic Post Generation**: Dynamic Reddit post creation with custom splash screens and game state data for viral speed challenges
- **Intelligent Mobile Interface**: Dynamic 5-drum display system that shows only the most active instruments per pattern for optimal mobile experience
- **Advanced Anti-Cheat**: Wrong drum penalties (-10 points), pattern validation, and processed marker tracking prevent button mashing and ensure fair play

## How to Play

### Getting Started

1. **Launch the Game**: Click the "Open the Game" button on the Reddit post splash screen to launch Drum Dancer in full-screen mode
2. **Main Interface**: Navigate using three tabs at the top of the screen:
   - **Home**: Game setup, difficulty selection, and quick start options
   - **Leaderboard**: View top scores across all difficulties with filtering options (All, Easy, Medium, Hard)
   - **Tutorial**: Complete gameplay instructions, controls guide, and pro tips

### Step-by-Step Gameplay Guide

#### 1. Home Tab - Game Setup
**Welcome Screen:**
- See your Reddit username displayed with the Snoo mascot
- Choose your difficulty level with clear duration indicators:
  - **🟢 Easy (45s)**: Simple rock beats perfect for beginners
  - **🟡 Medium (75s)**: Funk and reggae grooves with syncopation
  - **🔴 Hard (105s)**: Complex jazz, metal, and progressive patterns

**Quick Start Options:**
- **"Start [Difficulty] Game"**: Begin immediately with default drum sounds
- **"Customize Instruments"**: Access full sound customization before playing

#### 2. Customize Instruments (Optional but Recommended)
**Sound Customization Interface:**
- **11 Instrument Categories**: Each with multiple sound variations
  - **Kick (Q)**: 26 variations including 808, Acoustic, Big, Classic, Deep, Heavy
  - **Snare (W)**: 22 variations including 808, Acoustic, Analog, Electro, Punch
  - **Hi-Hat (E)**: 11 variations including 808, Acoustic, Digital, Electro
  - **Open Hat (R)**: 5 variations including 808, Acoustic, Analog, Slick
  - **Crash (T)**: 4 variations including 808, Acoustic, Noise, Tape
  - **Ride (Y)**: 2 acoustic variations for authentic cymbal sounds
  - **Tom (U)**: 9 variations including 808, Acoustic, Analog, FM, Chiptune
  - **Clap (I)**: 6 variations including 808, Analog, Fat, Crushed
  - **Cowbell (O)**: Classic 808 cowbell sound
  - **Shaker (P)**: 3 variations including Analog, Shuffle, Suck Up
  - **Percussion ([)**: 10 variations including 808, Chirpy, Metal, Laser

**Customization Features:**
- **Sound Preview**: Click "▶" button to preview sounds before selection
- **Radio Button Selection**: Choose from multiple variations with clear labels
- **Purple Key Indicators**: Each instrument shows its keyboard key
- **Master Volume Control**: Adjust volume slider (0-100%) for all sounds
- **Automatic Saving**: Your selections are preserved for future sessions

#### 3. Core Rhythm Gameplay

**Game Flow:**
1. **3-Second Countdown**: Large numerical countdown (3-2-1) with "Get Ready!" message
2. **Active Gameplay**: Beat markers fall from top to bottom in colored lanes
3. **Hit Zone**: Lime-green horizontal line at bottom where precise timing is required
4. **Real-Time Scoring**: Points awarded based on timing accuracy (0-100 per beat)
5. **Game Completion**: After time expires, view results and automatic leaderboard submission

**Visual Elements:**
- **Falling Beat Markers**: Colored circles with keyboard letters fall down the screen
- **Dynamic Drum Interface**: Shows only the 5 most active drums for current pattern
- **Real-Time HUD**: Live score, accuracy percentage, hits/total ratio, timer, progress bar
- **Color-Coded Feedback**: Purple (approaching) → Cyan (hittable) → Lime (hit) → Red (missed)
- **Lane Labels**: Clear instrument identification with keyboard key indicators

**Control Schemes:**
- **Keyboard Controls** (Desktop):
  - **Q**: Kick drum, **W**: Snare, **E**: Hi-Hat, **R**: Open Hat
  - **T**: Crash, **Y**: Ride, **U**: Tom, **I**: Clap
  - **O**: Cowbell, **P**: Shaker, **[**: Percussion
- **Touch/Mouse Controls** (Mobile & Desktop):
  - Tap or click colored drum buttons at bottom of screen
  - Responsive design optimized for finger tapping

**Scoring System:**
- **Precision Timing**: 300ms hit window for successful hits
- **Accuracy-Based Points**: 0-100 points per beat based on timing precision
- **Pattern Accuracy Bonus**: Extra points for hitting correct drums in sequence
- **Wrong Drum Penalty**: -10 points for hitting incorrect drums during active beats
- **Anti-Double-Hit Protection**: Prevents accidental multiple hits on same beat

#### 4. Understanding Musical Patterns

**Easy Difficulty Patterns (10 total):**
- Classic Rock Beat, Pop Beat, Simple Disco, Simple Country
- Basic Ballad, Simple Blues, Simple Folk, Simple Rock with Tom
- Simple Motown, Indie Pop

**Medium Difficulty Patterns (10 total):**
- Standard Rock Beat, Pop Beat with Extra Kick, Disco Beat, Shuffle Beat, Reggae Style
- Funk Groove, Country Beat, Latin Beat, Rock with Tom, Ballad Beat

**Hard Difficulty Patterns (10 total):**
- Progressive Rock, Latin Jazz, Metal/Double Bass, Fusion Jazz
- Polyrhythmic African, Technical Death Metal, Complex Jazz Waltz
- Odd Time Signature Feel, Blast Beat Variation, Mathcore/Djent

#### 5. Results and Progression

**Game Results Screen:**
- **Letter Grade**: S (90%+), A (80-89%), B (70-79%), C (60-69%), D (<60%)
- **Elite Performance Banner**: Special animation for 90%+ accuracy
- **Detailed Statistics**: Final score, hits/total, accuracy, pattern accuracy, difficulty
- **Automatic Leaderboard Submission**: Scores automatically saved to global rankings
- **Speed Challenge Creation**: Elite performances create Reddit posts for community challenges

#### 6. Leaderboard Competition

**Leaderboard Features:**
- **Global Rankings**: Combined leaderboard across all difficulties
- **Difficulty Filtering**: Separate rankings for Easy, Medium, Hard
- **Medal System**: Gold 🥇, Silver 🥈, Bronze 🥉 for top 3 positions
- **Real-Time Updates**: Scores appear immediately after game completion
- **Player Information**: Username, score, pattern accuracy, difficulty, rank

#### 7. Speed Challenge System (Advanced)

**Creating Speed Challenges:**
- **Elite Performance Requirement**: Achieve 90%+ accuracy in any difficulty
- **Automatic Reddit Post**: System creates new post with custom splash screen
- **1.5x Speed**: Your exact beat pattern becomes playable at increased speed
- **Community Sharing**: Challenges can be attempted by entire Reddit community

**Participating in Speed Challenges:**
- **Challenge Posts**: Look for "⚡ Speed Challenge" posts with lightning emojis
- **Escalating Difficulty**: Successful completions create faster versions (2.0x, 2.5x, 3.0x...)
- **Speed King Status**: Become champion by conquering highest speed multiplier
- **Previous Challenger Recognition**: See who conquered previous speed levels

### Pro Tips for Mastery

**Timing and Technique:**
- **Visual Cues**: Watch for beat markers to turn cyan when hittable
- **Anticipation**: Hit slightly before marker reaches hit zone for perfect timing
- **Rhythm Feel**: Use 120 BPM background music to maintain steady timing
- **Multi-Finger Technique**: Use multiple fingers for complex Hard patterns

**Practice Strategies:**
- **Progressive Difficulty**: Master Easy before attempting Medium or Hard
- **Pattern Recognition**: Learn recurring drum combinations for bonus points
- **Accuracy Focus**: Aim for 90%+ accuracy threshold for elite recognition
- **Genre Familiarity**: Study different musical patterns across genres

**Mobile Optimization:**
- **Dynamic Interface**: Take advantage of intelligent 5-drum display
- **Thumb Positioning**: Use both thumbs for faster touch response
- **Audio Quality**: Use headphones for better rhythm perception
- **Stable Connection**: Ensure good internet for smooth gameplay

### Complete Step-by-Step Gameplay Guide

#### 1. Setting Up Your Game Session
**Home Tab Overview:**
- **Personalized Welcome**: See your Reddit username displayed prominently with Snoo mascot
- **Difficulty Selection**: Choose from three challenge levels with clear duration indicators:
  - **🟢 Easy (45s)**: Simple rock beats, perfect for beginners learning basic rhythm
  - **🟡 Medium (75s)**: Funk and reggae grooves with syncopation and ghost notes
  - **🔴 Hard (105s)**: Complex jazz, metal, and progressive patterns with multiple simultaneous instruments

**Quick Start Options:**
- **"Start [Difficulty] Game"**: Begin immediately with your selected difficulty using default drum sounds
- **"Customize Instruments"**: Access the full sound customization interface before playing

#### 2. Customizing Your Drum Kit (Recommended for Best Experience)
**Dark Theme Sound Customization Interface:**
- **Professional Dark UI**: Sleek slate-gray interface with purple and cyan accents optimized for extended play sessions
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
- **Sound Preview**: Click the "▶" button next to each instrument to preview sounds before selection
- **Radio Button Selection**: Choose from multiple sound variations for each instrument with clear labels
- **Purple Key Indicators**: Each instrument panel shows its keyboard key in a prominent purple badge
- **Volume Control**: Master volume slider (0-100%) affects all drum sounds and background music
- **Real-Time Testing**: Play sounds at your selected volume level during customization
- **Automatic Saving**: Your selections are preserved for future game sessions
- **Dark Theme Benefits**: Reduced eye strain during extended customization sessions
- **Comprehensive Library**: Over 100 total sounds across all instruments organized in an intuitive grid layout

#### 3. Core Rhythm Gameplay Mechanics
**Game Flow & States:**
- **Home Tab**: Initial game setup with difficulty selection and customization options, featuring personalized welcome with Reddit username
- **Customization Page**: Comprehensive sound customization interface with 100+ drum samples organized by instrument type
- **3-Second Countdown**: Large numerical countdown (3-2-1) with "Get Ready!" message before each game begins
- **Active Gameplay**: Real-time rhythm gameplay with falling markers, dynamic drum interface, and live scoring
- **Results State**: Final score display with letter grades (S-A-B-C-D), detailed statistics, and automatic leaderboard submission

**Visual Game Elements:**
- **Falling Beat Markers**: Colored circles with keyboard letters fall from top to bottom, each representing a different drum instrument
- **Hit Zone**: Lime-green horizontal line at the bottom labeled "HIT ZONE!" where precise timing is required for maximum points
- **Dynamic Drum Interface**: Intelligently shows only the 5 most active drums for the current pattern (flexible wrap layout optimized for mobile)
- **Real-Time HUD**: Live score counter, accuracy percentage, hits/total beats ratio, countdown timer, and progress bar
- **Background Music**: Synchronized 120 BPM audio track that matches the beat patterns with speed adjustment for challenges
- **Professional Dark Gaming Interface**: Slate-gray theme with purple/cyan/lime accents reduces eye strain during extended sessions
- **Speed Challenge Indicators**: Multiple lightning bolt emojis (⚡⚡⚡) show challenge level and speed multiplier
- **Advanced Visual Feedback**: Beat markers change color based on timing - purple (approaching) → cyan (hittable) → lime (hit) → red (missed)
- **Lane Labels**: Clear instrument identification at the top of each falling beat lane with keyboard key indicators

**Core Gameplay Loop:**
1. **Game Initialization**: Select difficulty (Easy/Medium/Hard) and optionally customize drum sounds from 100+ samples
2. **Pattern Loading**: Game randomly selects one of 10 authentic drum patterns for the chosen difficulty level
3. **3-Second Countdown**: Large visual countdown (3-2-1) with "Get Ready!" message and audio preparation
4. **Active Gameplay**: Beat markers fall from top to hit zone, player hits corresponding drums with precise timing
5. **Real-Time Scoring**: Points awarded based on timing accuracy (0-100 points per beat) with pattern accuracy bonuses
6. **Advanced Penalty System**: Wrong drum hits during active beats result in -10 point penalties with anti-double-hit protection
7. **Game Completion**: After time expires (45s/75s/105s), final score, accuracy, and pattern accuracy are calculated
8. **Results & Progression**: Automatic leaderboard submission, letter grade assignment, and elite performance recognition (90%+ creates speed challenges)

**Game Results Screen:**
- **Letter Grade Display**: Large letter grade (S≥90%, A≥80%, B≥70%, C≥60%, D<60%) based on accuracy percentage
- **Elite Performance Banner**: Special animated "🎉 ELITE PERFORMANCE! 🎉" banner for 90%+ accuracy with Reddit post notification
- **Comprehensive Statistics**: Final score, hits/total beats, accuracy percentage, pattern accuracy percentage, and difficulty level
- **Action Buttons**: "Play Again" to restart with same settings, "Main Menu" to return to home interface
- **Automatic Score Submission**: Results automatically submitted to global and difficulty-specific leaderboards
- **Speed Challenge Creation**: Elite performances automatically create Reddit posts for viral community challenges

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

**Drum Button Color Scheme:**
- **Kick (Q)**: Purple background with keyboard key indicator
- **Snare (W)**: Cyan background for easy identification
- **Hi-Hat (E)**: Lime-green background for closed hi-hat
- **Open Hat (R)**: Light cyan background for open hi-hat
- **Crash (T)**: Purple background for crash cymbal
- **Ride (Y)**: Teal background for ride cymbal
- **Tom (U)**: Amber background for tom drums
- **Clap (I)**: Fuchsia background for hand claps
- **Cowbell (O)**: Yellow background for cowbell
- **Shaker (P)**: Violet background for shaker
- **Percussion ([)**: Emerald background for percussion elements

**Advanced Scoring System:**
- **Precision Hit Window**: 300ms timing window for successful hits (precise skill requirement for competitive play)
- **Accuracy-Based Points**: 0-100 points per beat based on timing precision within the hit window
- **Perfect Timing**: 100 points for hits exactly on the beat marker with visual lime-green feedback
- **Good Timing**: Scaled points based on timing accuracy within the 300ms window
- **Pattern Accuracy Bonus**: Additional 50% bonus points for hitting drums that match the authentic musical pattern
- **Missed Beats**: 0 points, marked visually as red missed markers after 200ms delay
- **Wrong Drum Penalty**: -10 points for hitting incorrect drums during active beats (prevents button mashing)
- **Anti-Double-Hit Protection**: Prevents accidental multiple hits on the same beat marker for fair scoring
- **Dual Accuracy Tracking**: Overall accuracy (hits/total beats) and pattern accuracy (correct pattern hits/expected pattern hits)
- **Final Score**: Sum of all timing-based points plus pattern bonuses earned during the session (minimum 0)
- **Elite Performance Threshold**: 90%+ accuracy unlocks automatic Speed Challenge creation with Reddit post
- **Letter Grade System**: S (90%+), A (80-89%), B (70-79%), C (60-69%), D (<60%) with large visual display

#### 4. Understanding Musical Patterns and Difficulty Progression
**Intelligent Pattern Generation System:**
- **Random Pattern Selection**: Each game randomly selects one of 10 authentic patterns per difficulty level
- **Dynamic Complexity Scaling**: Patterns gradually increase in complexity as the game progresses
- **Authentic Musical Structure**: All patterns based on real drumming techniques used in popular music
- **120 BPM Foundation**: All patterns synchronized to a consistent 120 beats per minute tempo

**Easy Difficulty Patterns (45 seconds) - 10 Patterns:**
1. **Very Simple Rock Beat**: Basic kick-snare alternation (kick on 1&3, snare on 2&4)
2. **Simple Hi-Hat Beat**: Basic pattern with hi-hat and kick-snare foundation
3. **Basic Kick-Snare**: Minimal pattern focusing on fundamental kick and snare timing
4. **Slow Beat**: Relaxed timing perfect for learning rhythm basics
5. **Basic Ballad**: Spacious pattern ideal for beginners
6. **Simple Blues**: Classic blues feel with straightforward timing
7. **Simple Folk**: Sparse folk pattern with varied kick placement
8. **Simple Rock with Tom**: Basic rock pattern featuring tom accents
9. **Simple Motown**: Classic soul rhythm with simple kick patterns
10. **Simple Pop**: Modern pop pattern with clap accents

**Medium Difficulty Patterns (75s) - 10 Patterns:**
1. **Standard Rock Beat**: Classic rock pattern with kick, snare, and hi-hat foundation
2. **Pop Beat with Extra Kick**: Modern pop rhythm with additional kick drum accents
3. **Disco Beat**: Four-on-the-floor disco pattern with steady kick and hi-hat work
4. **Shuffle Beat**: Swing-influenced pattern with syncopated kick and hi-hat accents
5. **Reggae Style**: One-drop reggae feel with emphasis on beats 2 and 4
6. **Funk Groove**: Syncopated funk pattern with kick, snare, and hi-hat interplay
7. **Country Beat**: Country music rhythm with characteristic kick and snare placement
8. **Latin Beat**: Latin-influenced pattern featuring claps and syncopated rhythms
9. **Rock with Tom**: Rock pattern enhanced with tom drum accents and fills
10. **Ballad Beat**: Slower ballad rhythm with spacious kick and snare placement

**Hard Difficulty Patterns (105s) - 10 Patterns:**
1. **Progressive Rock**: Complex polyrhythms using crash, kick, snare, hi-hat, tom, and ride simultaneously
2. **Latin Jazz**: Sophisticated patterns with cowbell, shaker, ride cymbal, kick, snare, and percussion
3. **Metal/Double Bass**: Fast double-kick patterns, crash accents, hi-hat work, and aggressive snare
4. **Fusion Jazz**: Complex jazz-rock fusion with rapid tom fills, ride patterns, and syncopated kicks
5. **Polyrhythmic African**: Traditional African polyrhythms with cowbell, shaker, percussion, kick, and snare
6. **Technical Death Metal**: Extreme metal patterns with blast beats, double kicks, crash, and hi-hat
7. **Complex Jazz Waltz**: 3/4 feel adapted to 4/4 time with ride, kick, snare, and tom work
8. **Odd Time Signature Feel**: 7/8 feel patterns with kick, snare, hi-hat, tom, and crash accents
9. **Blast Beat Variation**: Extreme metal technique with rapid snare-kick alternation and crash accents
10. **Mathcore/Djent**: Modern progressive metal with complex polyrhythmic structures using all instruments

**Pattern Learning Tips:**
- **Listen First**: Each pattern plays background music to help you feel the rhythm
- **Visual Cues**: Watch for recurring color patterns in the falling markers
- **Muscle Memory**: Practice the same difficulty multiple times to build familiarity
- **Genre Recognition**: Learn to identify musical styles to anticipate pattern changes
- **Random Selection**: Each game randomly selects one of 10 patterns per difficulty for variety and replayability

#### 5. Leaderboard Competition and Social Features
**Advanced Leaderboard System:**
- **Global Rankings**: Combined leaderboard showing top scores across all difficulties with "All" filter button
- **Difficulty-Specific Filtering**: Dedicated filter buttons for Easy (🟢), Medium (🟡), Hard (🔴), and All difficulties
- **Color-Coded Difficulty Indicators**: Easy (lime), Medium (cyan), Hard (purple) for easy visual identification
- **Real-Time Updates**: Scores submit automatically via Redis and appear immediately after game completion
- **Professional Ranking Display**: Clean table format showing rank, username, score, pattern accuracy, and difficulty
- **Medal System**: Gold 🥇, Silver 🥈, Bronze 🥉 medals for top 3 positions with special color highlighting
- **Dark Theme Leaderboard**: Elegant slate-gray interface with clear typography and visual hierarchy optimized for readability
- **Manual Refresh Function**: Refresh button (🔄) to check for new scores and updates from other players
- **Empty State Handling**: Encouraging messages when no scores exist yet ("No scores yet. Be the first to play!")

**Score Submission:**
- **Automatic Process**: All completed games automatically submit to leaderboards (scores > 0)
- **Username Integration**: Uses your Reddit username for leaderboard entries
- **Persistent Storage**: Scores are permanently stored and ranked against all players using Redis
- **Top 100 Tracking**: Maintains top 100 scores per difficulty level for optimal performance

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
- **Identical Beat Patterns**: Uses the exact beat sequence from the original elite performance with same drum combinations
- **Accelerated Playback**: Background music and beat timing accelerated by the speed multiplier with synchronized audio
- **90% Accuracy Requirement**: Must maintain 90%+ accuracy to successfully complete the challenge and create the next level
- **Automatic Next Level Creation**: Successful completions automatically generate the next speed level with Reddit post
- **Community Viral Loop**: Creates ongoing viral Reddit content as players attempt increasingly difficult speeds
- **Previous Challenger Recognition**: Shows who conquered the previous speed level, their score, and challenge progression
- **Dynamic Reddit Post Creation**: System automatically creates new Reddit posts with custom splash screens and lightning bolt indicators
- **Progressive Speed Scaling**: Challenges increase by 0.5x increments (1.5x → 2.0x → 2.5x → 3.0x...) with no upper limit
- **Challenge Level Indicators**: Multiple lightning bolts (⚡⚡⚡) show the current challenge level and difficulty progression

### Advanced Tips for Mastery

**Timing and Technique:**
- **Visual Timing Cues**: Watch for beat markers to turn cyan when they enter the 300ms hit window
- **Anticipation**: Hit slightly before the marker reaches the lime hit zone line for perfect 100-point timing
- **Visual Focus**: Watch the falling markers and color changes, not your hands or the drum buttons
- **Rhythm Feel**: Use the synchronized 120 BPM background music to maintain steady timing
- **Multi-Finger Technique**: Use multiple fingers on keyboard for complex Hard difficulty patterns with 5+ instruments
- **Penalty Avoidance**: Only hit drums when markers are present to avoid -10 point wrong drum penalties

**Practice Strategies:**
- **Progressive Difficulty**: Master Easy (simple rock) before attempting Medium (funk/reggae) or Hard (jazz/metal)
- **Pattern Recognition**: Learn to identify recurring drum combinations and authentic musical patterns for bonus points
- **Accuracy Over Speed**: Focus on the 90%+ accuracy threshold for elite performance recognition before attempting speed challenges
- **Genre Familiarity**: Study the 30 different musical patterns across Rock, Funk, Jazz, Hip-Hop, Metal, and Progressive genres
- **Regular Practice**: Short, frequent sessions build muscle memory better than long sessions
- **Pattern Accuracy Focus**: Aim for high pattern accuracy percentage to maximize bonus points (50% extra for correct pattern hits)

**Mobile Optimization:**
- **Dynamic Interface**: Take advantage of the intelligent 5-drum display with flexible wrap layout that shows only the most active instruments
- **Thumb Positioning**: Use both thumbs for faster response on the responsive touch controls with optimized button spacing
- **Screen Orientation**: Portrait mode recommended for optimal drum button spacing and falling marker visibility
- **Audio Quality**: Use headphones or good speakers for better rhythm perception and timing accuracy
- **Stable Connection**: Ensure good internet connection for smooth gameplay, real-time leaderboard updates, and speed challenge creation
- **Touch Responsiveness**: The game is optimized for touch with appropriately sized buttons, flexible positioning, and visual feedback

### Core Game Features

**Advanced Rhythm Game Engine:**
- **Falling Note Gameplay**: Guitar Hero-style rhythm mechanics adapted specifically for authentic drum patterns with vertical falling markers
- **Precision Timing System**: 300ms hit window with accuracy-based scoring (0-100 points per beat) and visual color feedback
- **Advanced Penalty System**: -10 point penalties for hitting incorrect drums during active beats with anti-button-mashing protection
- **Anti-Double-Hit Protection**: Prevents accidental multiple hits on the same beat marker using processed marker tracking
- **Dynamic Visual Feedback**: Real-time color changes - purple (approaching) → cyan (hittable) → lime (hit) → red (missed)
- **Synchronized Audio Integration**: 120 BPM background music with speed adjustment for challenges and perfect beat alignment
- **Professional Dark Gaming Interface**: Slate-gray UI with purple/cyan/lime accents reduces eye strain during extended sessions
- **60fps Game Loop**: Smooth animation using `requestAnimationFrame` with precise timing calculations and marker cleanup

**Authentic Musical Content:**
- **30 Real Drum Patterns**: Authentic patterns from Rock, Funk, Jazz, Hip-Hop, Metal, Latin, Progressive, Afrobeat, Bossa Nova, and more (10 per difficulty)
- **Progressive Genre Complexity**: Easy (Classic Rock, Pop, Disco), Medium (Funk, Reggae, Hip-Hop, Jazz Swing), Hard (Progressive Rock, Latin Jazz, Metal, Fusion)
- **Professional Sound Library**: 100+ high-quality drum samples including 808s, acoustic, analog, electronic, vintage, and specialty variations
- **Musical Education**: Learn authentic drumming techniques from real musical genres with pattern names and style recognition
- **Random Pattern Selection**: Each game randomly selects one of 10 patterns per difficulty for maximum replayability and variety
- **Intelligent Pattern Generation**: Dynamic beat sequence creation with gradual complexity scaling and measure-based structure

**Extensive Customization & Mobile Optimization:**
- **Comprehensive Drum Kit Customization**: Choose from 100+ sound variations across 11 instruments with preview functionality and persistent settings
- **Intelligent Mobile Interface**: Dynamically shows only the 5 most active drums per pattern in a flexible wrap layout for optimal mobile screen utilization
- **Cross-Platform Controls**: Full keyboard support (Q-W-E-R-T-Y-U-I-O-P-[) plus responsive touch/mouse controls optimized for mobile
- **Master Volume Control**: Adjustable volume slider (0-100%) affects all drum sounds and background music with real-time preview
- **Professional Dark Theme**: Slate-gray interface with purple/cyan/lime accents and clear visual hierarchy for extended gaming sessions
- **Responsive Flexible Layouts**: Adaptive drum button layouts with flexible wrap positioning that work seamlessly across desktop and mobile screen sizes

**Advanced Social & Competitive Features:**
- **Real-Time Leaderboards**: Instant Redis-based score submission with persistent global and difficulty-specific rankings
- **Medal System**: Gold 🥇, Silver 🥈, Bronze 🥉 medals for top 3 positions with special color highlighting and rank indicators
- **Seamless Reddit Integration**: Automatic authentication using Reddit usernames with native Snoo mascot and personalized welcome
- **Viral Speed Challenge System**: Elite performances (90%+ accuracy) automatically create Reddit posts with custom splash screens
- **Progressive Speed Multipliers**: Challenges escalate from 1.5x to unlimited speed with multiple lightning bolt indicators (⚡⚡⚡)
- **Community Viral Loop**: Speed challenges create ongoing viral Reddit content with previous challenger recognition and score tracking
- **Dynamic Post Creation**: Automatic Reddit post generation with custom splash screens, game state data, and challenge progression

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
  - `App.tsx`: Main application with three-tab interface (Home, Leaderboard, Tutorial) and comprehensive drum kit definitions with 100+ sounds (690 lines)
  - `GamePage.tsx`: Core rhythm game engine with falling note mechanics, beat pattern generation, audio management, and dynamic 5-drum interface (1298 lines)
  - `SpeedChallengePage.tsx`: Specialized interface for speed challenge posts with challenge progression and lightning bolt indicators
  - `drumPatterns.ts`: 30 authentic drum patterns across 3 difficulties organized by musical genres (Easy: rock/pop, Medium: funk/reggae/country, Hard: progressive/metal/jazz)
- **Game Engine**: Real-time beat detection with 60fps animation, precision scoring system, and audio management with 300ms hit windows
- **Responsive Design**: Mobile-first approach with intelligent 5-drum display and optimized touch/keyboard controls
- **Audio System**: Dynamic drum sound loading with 100+ samples organized by instrument type with preview functionality
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
