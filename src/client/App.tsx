import { useState, useEffect } from 'react';
import { useCounter } from './hooks/useCounter';
import { GamePage } from './GamePage';
import { SpeedChallengePage } from './SpeedChallengePage';
import { LeaderboardEntry } from '../shared/types/api';

// Complete drum kits with ALL available sounds
const drumKits = [
  {
    name: 'kick',
    displayName: 'Kick',
    key: 'Q',
    sounds: [
      { name: 'kick-808', path: '/drum-kits/Kick/kick-808.wav', displayName: '808' },
      { name: 'kick-acoustic01', path: '/drum-kits/Kick/kick-acoustic01.wav', displayName: 'Acoustic 1' },
      { name: 'kick-acoustic02', path: '/drum-kits/Kick/kick-acoustic02.wav', displayName: 'Acoustic 2' },
      { name: 'kick-big', path: '/drum-kits/Kick/kick-big.wav', displayName: 'Big' },
      { name: 'kick-classic', path: '/drum-kits/Kick/kick-classic.wav', displayName: 'Classic' },
      { name: 'kick-cultivator', path: '/drum-kits/Kick/kick-cultivator.wav', displayName: 'Cultivator' },
      { name: 'kick-deep', path: '/drum-kits/Kick/kick-deep.wav', displayName: 'Deep' },
      { name: 'kick-dry', path: '/drum-kits/Kick/kick-dry.wav', displayName: 'Dry' },
      { name: 'kick-electro01', path: '/drum-kits/Kick/kick-electro01.wav', displayName: 'Electro 1' },
      { name: 'kick-electro02', path: '/drum-kits/Kick/kick-electro02.wav', displayName: 'Electro 2' },
      { name: 'kick-floppy', path: '/drum-kits/Kick/kick-floppy.wav', displayName: 'Floppy' },
      { name: 'kick-gritty', path: '/drum-kits/Kick/kick-gritty.wav', displayName: 'Gritty' },
      { name: 'kick-heavy', path: '/drum-kits/Kick/kick-heavy.wav', displayName: 'Heavy' },
      { name: 'kick-newwave', path: '/drum-kits/Kick/kick-newwave.wav', displayName: 'New Wave' },
      { name: 'kick-oldschool', path: '/drum-kits/Kick/kick-oldschool.wav', displayName: 'Old School' },
      { name: 'kick-plain', path: '/drum-kits/Kick/kick-plain.wav', displayName: 'Plain' },
      { name: 'kick-slapback', path: '/drum-kits/Kick/kick-slapback.wav', displayName: 'Slapback' },
      { name: 'kick-softy', path: '/drum-kits/Kick/kick-softy.wav', displayName: 'Softy' },
      { name: 'kick-stomp', path: '/drum-kits/Kick/kick-stomp.wav', displayName: 'Stomp' },
      { name: 'kick-tape', path: '/drum-kits/Kick/kick-tape.wav', displayName: 'Tape' },
      { name: 'kick-thump', path: '/drum-kits/Kick/kick-thump.wav', displayName: 'Thump' },
      { name: 'kick-tight', path: '/drum-kits/Kick/kick-tight.wav', displayName: 'Tight' },
      { name: 'kick-tron', path: '/drum-kits/Kick/kick-tron.wav', displayName: 'Tron' },
      { name: 'kick-vinyl01', path: '/drum-kits/Kick/kick-vinyl01.wav', displayName: 'Vinyl 1' },
      { name: 'kick-vinyl02', path: '/drum-kits/Kick/kick-vinyl02.wav', displayName: 'Vinyl 2' },
      { name: 'kick-zapper', path: '/drum-kits/Kick/kick-zapper.wav', displayName: 'Zapper' }
    ]
  },
  {
    name: 'snare',
    displayName: 'Snare',
    key: 'W',
    sounds: [
      { name: 'snare-808', path: '/drum-kits/Snare/snare-808.wav', displayName: '808' },
      { name: 'snare-acoustic01', path: '/drum-kits/Snare/snare-acoustic01.wav', displayName: 'Acoustic 1' },
      { name: 'snare-acoustic02', path: '/drum-kits/Snare/snare-acoustic02.wav', displayName: 'Acoustic 2' },
      { name: 'snare-analog', path: '/drum-kits/Snare/snare-analog.wav', displayName: 'Analog' },
      { name: 'snare-big', path: '/drum-kits/Snare/snare-big.wav', displayName: 'Big' },
      { name: 'snare-block', path: '/drum-kits/Snare/snare-block.wav', displayName: 'Block' },
      { name: 'snare-brute', path: '/drum-kits/Snare/snare-brute.wav', displayName: 'Brute' },
      { name: 'snare-dist01', path: '/drum-kits/Snare/snare-dist01.wav', displayName: 'Distorted 1' },
      { name: 'snare-dist02', path: '/drum-kits/Snare/snare-dist02.wav', displayName: 'Distorted 2' },
      { name: 'snare-dist03', path: '/drum-kits/Snare/snare-dist03.wav', displayName: 'Distorted 3' },
      { name: 'snare-electro', path: '/drum-kits/Snare/snare-electro.wav', displayName: 'Electro' },
      { name: 'snare-lofi01', path: '/drum-kits/Snare/snare-lofi01.wav', displayName: 'Lo-Fi 1' },
      { name: 'snare-lofi02', path: '/drum-kits/Snare/snare-lofi02.wav', displayName: 'Lo-Fi 2' },
      { name: 'snare-modular', path: '/drum-kits/Snare/snare-modular.wav', displayName: 'Modular' },
      { name: 'snare-noise', path: '/drum-kits/Snare/snare-noise.wav', displayName: 'Noise' },
      { name: 'snare-pinch', path: '/drum-kits/Snare/snare-pinch.wav', displayName: 'Pinch' },
      { name: 'snare-punch', path: '/drum-kits/Snare/snare-punch.wav', displayName: 'Punch' },
      { name: 'snare-smasher', path: '/drum-kits/Snare/snare-smasher.wav', displayName: 'Smasher' },
      { name: 'snare-sumo', path: '/drum-kits/Snare/snare-sumo.wav', displayName: 'Sumo' },
      { name: 'snare-tape', path: '/drum-kits/Snare/snare-tape.wav', displayName: 'Tape' },
      { name: 'snare-vinyl01', path: '/drum-kits/Snare/snare-vinyl01.wav', displayName: 'Vinyl 1' },
      { name: 'snare-vinyl02', path: '/drum-kits/Snare/snare-vinyl02.wav', displayName: 'Vinyl 2' }
    ]
  },
  {
    name: 'hihat',
    displayName: 'Hi-Hat',
    key: 'E',
    sounds: [
      { name: 'hihat-808', path: '/drum-kits/HiHat/hihat-808.wav', displayName: '808' },
      { name: 'hihat-acoustic01', path: '/drum-kits/HiHat/hihat-acoustic01.wav', displayName: 'Acoustic 1' },
      { name: 'hihat-acoustic02', path: '/drum-kits/HiHat/hihat-acoustic02.wav', displayName: 'Acoustic 2' },
      { name: 'hihat-analog', path: '/drum-kits/HiHat/hihat-analog.wav', displayName: 'Analog' },
      { name: 'hihat-digital', path: '/drum-kits/HiHat/hihat-digital.wav', displayName: 'Digital' },
      { name: 'hihat-dist01', path: '/drum-kits/HiHat/hihat-dist01.wav', displayName: 'Distorted 1' },
      { name: 'hihat-dist02', path: '/drum-kits/HiHat/hihat-dist02.wav', displayName: 'Distorted 2' },
      { name: 'hihat-electro', path: '/drum-kits/HiHat/hihat-electro.wav', displayName: 'Electro' },
      { name: 'hihat-plain', path: '/drum-kits/HiHat/hihat-plain.wav', displayName: 'Plain' },
      { name: 'hihat-reso', path: '/drum-kits/HiHat/hihat-reso.wav', displayName: 'Resonant' },
      { name: 'hihat-ring', path: '/drum-kits/HiHat/hihat-ring.wav', displayName: 'Ring' }
    ]
  },
  {
    name: 'openhat',
    displayName: 'Open Hat',
    key: 'R',
    sounds: [
      { name: 'openhat-808', path: '/drum-kits/OpenHat/openhat-808.wav', displayName: '808' },
      { name: 'openhat-acoustic01', path: '/drum-kits/OpenHat/openhat-acoustic01.wav', displayName: 'Acoustic' },
      { name: 'openhat-analog', path: '/drum-kits/OpenHat/openhat-analog.wav', displayName: 'Analog' },
      { name: 'openhat-slick', path: '/drum-kits/OpenHat/openhat-slick.wav', displayName: 'Slick' },
      { name: 'openhat-tight', path: '/drum-kits/OpenHat/openhat-tight.wav', displayName: 'Tight' }
    ]
  },
  {
    name: 'crash',
    displayName: 'Crash',
    key: 'T',
    sounds: [
      { name: 'crash-808', path: '/drum-kits/Crash/crash-808.wav', displayName: '808' },
      { name: 'crash-acoustic', path: '/drum-kits/Crash/crash-acoustic.wav', displayName: 'Acoustic' },
      { name: 'crash-noise', path: '/drum-kits/Crash/crash-noise.wav', displayName: 'Noise' },
      { name: 'crash-tape', path: '/drum-kits/Crash/crash-tape.wav', displayName: 'Tape' }
    ]
  },
  {
    name: 'ride',
    displayName: 'Ride',
    key: 'Y',
    sounds: [
      { name: 'ride-acoustic01', path: '/drum-kits/Ride/ride-acoustic01.wav', displayName: 'Acoustic 1' },
      { name: 'ride-acoustic02', path: '/drum-kits/Ride/ride-acoustic02.wav', displayName: 'Acoustic 2' }
    ]
  },
  {
    name: 'tom',
    displayName: 'Tom',
    key: 'U',
    sounds: [
      { name: 'tom-808', path: '/drum-kits/Tom/tom-808.wav', displayName: '808' },
      { name: 'tom-acoustic01', path: '/drum-kits/Tom/tom-acoustic01.wav', displayName: 'Acoustic 1' },
      { name: 'tom-acoustic02', path: '/drum-kits/Tom/tom-acoustic02.wav', displayName: 'Acoustic 2' },
      { name: 'tom-analog', path: '/drum-kits/Tom/tom-analog.wav', displayName: 'Analog' },
      { name: 'tom-chiptune', path: '/drum-kits/Tom/tom-chiptune.wav', displayName: 'Chiptune' },
      { name: 'tom-fm', path: '/drum-kits/Tom/tom-fm.wav', displayName: 'FM' },
      { name: 'tom-lofi', path: '/drum-kits/Tom/tom-lofi.wav', displayName: 'Lo-Fi' },
      { name: 'tom-rototom', path: '/drum-kits/Tom/tom-rototom.wav', displayName: 'Rototom' },
      { name: 'tom-short', path: '/drum-kits/Tom/tom-short.wav', displayName: 'Short' }
    ]
  },
  {
    name: 'clap',
    displayName: 'Clap',
    key: 'I',
    sounds: [
      { name: 'clap-808', path: '/drum-kits/Clap/clap-808.wav', displayName: '808' },
      { name: 'clap-analog', path: '/drum-kits/Clap/clap-analog.wav', displayName: 'Analog' },
      { name: 'clap-crushed', path: '/drum-kits/Clap/clap-crushed.wav', displayName: 'Crushed' },
      { name: 'clap-fat', path: '/drum-kits/Clap/clap-fat.wav', displayName: 'Fat' },
      { name: 'clap-slapper', path: '/drum-kits/Clap/clap-slapper.wav', displayName: 'Slapper' },
      { name: 'clap-tape', path: '/drum-kits/Clap/clap-tape.wav', displayName: 'Tape' }
    ]
  },
  {
    name: 'cowbell',
    displayName: 'Cowbell',
    key: 'O',
    sounds: [
      { name: 'cowbell-808', path: '/drum-kits/Cowbell/cowbell-808.wav', displayName: '808' }
    ]
  },
  {
    name: 'shaker',
    displayName: 'Shaker',
    key: 'P',
    sounds: [
      { name: 'shaker-analog', path: '/drum-kits/Shaker/shaker-analog.wav', displayName: 'Analog' },
      { name: 'shaker-shuffle', path: '/drum-kits/Shaker/shaker-shuffle.wav', displayName: 'Shuffle' },
      { name: 'shaker-suckup', path: '/drum-kits/Shaker/shaker-suckup.wav', displayName: 'Suck Up' }
    ]
  },
  {
    name: 'percussion',
    displayName: 'Percussion',
    key: '[',
    sounds: [
      { name: 'perc-808', path: '/drum-kits/Percussion/perc-808.wav', displayName: '808' },
      { name: 'perc-chirpy', path: '/drum-kits/Percussion/perc-chirpy.wav', displayName: 'Chirpy' },
      { name: 'perc-hollow', path: '/drum-kits/Percussion/perc-hollow.wav', displayName: 'Hollow' },
      { name: 'perc-laser', path: '/drum-kits/Percussion/perc-laser.wav', displayName: 'Laser' },
      { name: 'perc-metal', path: '/drum-kits/Percussion/perc-metal.wav', displayName: 'Metal' },
      { name: 'perc-nasty', path: '/drum-kits/Percussion/perc-nasty.wav', displayName: 'Nasty' },
      { name: 'perc-short', path: '/drum-kits/Percussion/perc-short.wav', displayName: 'Short' },
      { name: 'perc-tambo', path: '/drum-kits/Percussion/perc-tambo.wav', displayName: 'Tambo' },
      { name: 'perc-tribal', path: '/drum-kits/Percussion/perc-tribal.wav', displayName: 'Tribal' },
      { name: 'perc-weirdo', path: '/drum-kits/Percussion/perc-weirdo.wav', displayName: 'Weirdo' }
    ]
  }
];

type TabType = 'home' | 'leaderboard' | 'tutorial';
type PageType = 'tabs' | 'game' | 'customize';

const LeaderboardTab = () => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');

  useEffect(() => {
    fetchLeaderboard();
  }, [selectedDifficulty]);

  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      const endpoint = selectedDifficulty === 'all'
        ? '/api/leaderboard'
        : `/api/leaderboard/${selectedDifficulty}`;

      // console.log('Fetching leaderboard from:', endpoint);

      const response = await fetch(endpoint);
      // console.log('Leaderboard response status:', response.status);

      const result = await response.json();
      // console.log('Leaderboard result:', result);

      if (result.status === 'success') {
        setLeaderboard(result.leaderboard || []);
        // console.log('Set leaderboard with', result.leaderboard?.length || 0, 'entries');
      } else {
        console.error('Failed to fetch leaderboard:', result.message);
        setLeaderboard([]);
      }
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
      setLeaderboard([]);
    } finally {
      setLoading(false);
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-lime-500';
      case 'medium': return 'text-cyan-400';
      case 'hard': return 'text-purple-400';
      default: return 'text-slate-400';
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-white">🏆 Drum Hero Leaderboard</h2>

      {/* Difficulty Filter */}
      <div className="flex gap-2 mb-4">
        {['all', 'easy', 'medium', 'hard'].map((diff) => (
          <button
            key={diff}
            className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${selectedDifficulty === diff
                ? 'bg-purple-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
              }`}
            onClick={() => setSelectedDifficulty(diff as any)}
          >
            {diff.charAt(0).toUpperCase() + diff.slice(1)}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="bg-slate-800 p-6 rounded-lg w-full text-center">
          <p className="text-slate-300">Loading leaderboard...</p>
        </div>
      ) : leaderboard.length === 0 ? (
        <div className="bg-slate-800 p-6 rounded-lg w-full text-center">
          <p className="text-slate-300">No scores yet. Be the first to play!</p>
        </div>
      ) : (
        <div className="bg-slate-800 rounded-lg shadow-lg border border-slate-700 w-full overflow-hidden">
          <div className="bg-slate-700 px-4 py-2 border-b border-slate-600">
            <div className="grid grid-cols-5 gap-4 text-sm font-medium text-slate-300">
              <div>Rank</div>
              <div>Player</div>
              <div>Score</div>
              <div>Pattern</div>
              <div>Difficulty</div>
            </div>
          </div>
          <div className="divide-y divide-slate-700">
            {leaderboard.map((entry) => (
              <div key={`${entry.rank}-${entry.username}-${entry.timestamp}`} className="px-4 py-3">
                <div className="grid grid-cols-5 gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <span className={`font-bold ${entry.rank === 1 ? 'text-yellow-400' :
                        entry.rank === 2 ? 'text-slate-300' :
                          entry.rank === 3 ? 'text-amber-500' :
                            'text-slate-400'
                      }`}>
                      #{entry.rank}
                    </span>
                    {entry.rank <= 3 && (
                      <span className="text-lg">
                        {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : '🥉'}
                      </span>
                    )}
                  </div>
                  <div className="font-medium text-white truncate">
                    {entry.username}
                  </div>
                  <div className="font-bold text-cyan-400">
                    {entry.score.toLocaleString()}
                  </div>
                  <div className="font-medium text-lime-400">
                    {entry.patternAccuracy ? `${entry.patternAccuracy.toFixed(1)}%` : 'N/A'}
                  </div>
                  <div className={`text-sm font-medium capitalize ${getDifficultyColor(entry.difficulty)}`}>
                    {entry.difficulty}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={fetchLeaderboard}
        className="bg-slate-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-500 transition-colors"
      >
        🔄 Refresh
      </button>
    </div>
  );
};

export const App = () => {
  const { username, postData, loading } = useCounter();
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [currentPage, setCurrentPage] = useState<PageType>('tabs');
  
  // Game settings state (moved from GamePage)
  const [selectedDifficulty, setSelectedDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [volume, setVolume] = useState<number>(0.7);
  const [selectedSounds, setSelectedSounds] = useState<{[key: string]: string}>(() => {
    const initial: {[key: string]: string} = {};
    drumKits.forEach((kit) => {
      if (kit.sounds[0]) {
        initial[kit.name] = kit.sounds[0].path;
      }
    });
    return initial;
  });

  // Check if this is a speed challenge post
  const isSpeedChallengePost = postData?.gameState === 'speed-challenge';

  // console.log('App loaded - Post data:', postData);
  // console.log('Is speed challenge post:', isSpeedChallengePost);
  // console.log('Loading state:', loading);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
            <img className="object-contain w-1/3 max-w-[150px] mx-auto" src="/snoo.png" alt="Snoo" />
            <h1 className="text-2xl font-bold text-center text-white">
              Welcome {username || 'Player'}
            </h1>
            
            {/* Difficulty Selection */}
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 w-full">
              <h2 className="text-xl font-bold text-white mb-4 text-center">Choose Your Challenge</h2>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { key: 'easy', label: 'Easy', duration: '45s', color: 'bg-lime-600 hover:bg-lime-500' },
                  { key: 'medium', label: 'Medium', duration: '1:15', color: 'bg-cyan-600 hover:bg-cyan-500' },
                  { key: 'hard', label: 'Hard', duration: '1:45', color: 'bg-purple-600 hover:bg-purple-500' }
                ].map((diff) => (
                  <button
                    key={diff.key}
                    className={`px-3 py-2 rounded-lg text-white font-medium text-sm transition-all ${
                      selectedDifficulty === diff.key 
                        ? `${diff.color} ring-2 ring-cyan-400` 
                        : `${diff.color} opacity-80 hover:opacity-100`
                    }`}
                    onClick={() => setSelectedDifficulty(diff.key as any)}
                  >
                    <div className="font-semibold">{diff.label}</div>
                    <div className="text-xs opacity-90">{diff.duration}</div>
                  </button>
                ))}
              </div>
            </div>



            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button
                className="flex-1 bg-purple-600 text-white px-6 py-3 rounded-lg font-bold text-base hover:bg-purple-500 transition-colors shadow-lg"
                onClick={() => setCurrentPage('game')}
              >
                Start {selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)} Game
              </button>
              <button
                className="flex-1 bg-cyan-600 text-white px-6 py-3 rounded-lg font-bold text-base hover:bg-cyan-500 transition-colors shadow-lg"
                onClick={() => setCurrentPage('customize')}
              >
                Customize Instruments
              </button>
            </div>
          </div>
        );
      case 'leaderboard':
        return <LeaderboardTab />;
      case 'tutorial':
        return (
          <div className="flex flex-col items-center gap-6 max-w-2xl">
            <h2 className="text-2xl font-bold text-white">🥁 How to Play Drum Dancer</h2>
            
            {/* Basic Gameplay */}
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 w-full">
              <h3 className="font-bold text-white mb-4 text-lg">🎮 Basic Gameplay</h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <p className="text-sm">Choose your difficulty: Easy (45s), Medium (1:15), or Hard (1:45)</p>
                </div>
                <div className="flex gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <p className="text-sm">Watch colored beat markers fall from the top of the screen</p>
                </div>
                <div className="flex gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <p className="text-sm">Hit the matching drum button when the marker reaches the lime hit zone</p>
                </div>
                <div className="flex gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <p className="text-sm">Score points for accurate timing - perfect hits give more points!</p>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 w-full">
              <h3 className="font-bold text-white mb-4 text-lg">🎹 Controls</h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex gap-3">
                  <span className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <p className="text-sm"><strong>Keyboard:</strong> Use keys Q-W-E-R-T-Y-U-I-O-P-[ to hit drums</p>
                </div>
                <div className="flex gap-3">
                  <span className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <p className="text-sm"><strong>Touch/Mouse:</strong> Click or tap the colored drum buttons at the bottom</p>
                </div>
                <div className="flex gap-3">
                  <span className="bg-cyan-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <p className="text-sm">Each drum has a unique color and keyboard key for easy identification</p>
                </div>
              </div>
            </div>

            {/* Customizing Instruments */}
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 w-full">
              <h3 className="font-bold text-white mb-4 text-lg">🎵 Customizing Instruments</h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex gap-3">
                  <span className="bg-lime-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <p className="text-sm">Before starting a game, visit the "Select Sounds" section</p>
                </div>
                <div className="flex gap-3">
                  <span className="bg-lime-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <p className="text-sm">Each drum type has multiple sound options (808, acoustic, electronic, etc.)</p>
                </div>
                <div className="flex gap-3">
                  <span className="bg-lime-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <p className="text-sm">Click different sounds to preview them, then select your favorites</p>
                </div>
                <div className="flex gap-3">
                  <span className="bg-lime-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <p className="text-sm">Adjust the volume slider to find your perfect sound level</p>
                </div>
              </div>
            </div>

            {/* Speed Challenges */}
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 w-full">
              <h3 className="font-bold text-white mb-4 text-lg">⚡ Speed Challenge Games</h3>
              <div className="space-y-3 text-slate-300">
                <div className="flex gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <p className="text-sm">Achieve 90%+ accuracy in any game to create a Speed Challenge post</p>
                </div>
                <div className="flex gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <p className="text-sm">Speed Challenges use your exact beat pattern but at 1.5x speed</p>
                </div>
                <div className="flex gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <p className="text-sm">Other players can attempt your challenge - if they succeed, it creates a 2.0x challenge</p>
                </div>
                <div className="flex gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <p className="text-sm">Challenges keep getting faster (2.5x, 3.0x...) until no one can beat them!</p>
                </div>
                <div className="flex gap-3">
                  <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">5</span>
                  <p className="text-sm">Become the ultimate Speed King by conquering the highest multiplier</p>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-r from-purple-900 to-cyan-900 p-6 rounded-lg border border-purple-600 w-full">
              <h3 className="font-bold text-white mb-4 text-lg">💡 Pro Tips</h3>
              <div className="space-y-2 text-slate-300 text-sm">
                <p>• <strong>Start with Easy:</strong> Learn the rhythm patterns before advancing</p>
                <p>• <strong>Watch the patterns:</strong> Each game uses authentic drum beats (Rock, Funk, Jazz, etc.)</p>
                <p>• <strong>Timing is key:</strong> Hit slightly before the marker reaches the line for perfect timing</p>
                <p>• <strong>Use both hands:</strong> Keyboard players can use multiple fingers for complex patterns</p>
                <p>• <strong>Practice makes perfect:</strong> Each difficulty has 3 different musical patterns to master</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (currentPage === 'game') {
    return (
      <GamePage 
        onCancel={() => setCurrentPage('tabs')}
        initialDifficulty={selectedDifficulty}
        initialVolume={volume}
        initialSounds={selectedSounds}
      />
    );
  }

  if (currentPage === 'customize') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Customize Your Drum Kit</h1>
            <p className="text-slate-300">Choose your favorite sounds for each drum</p>
          </div>

          {/* Drum Kit Customization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {drumKits.map((kit) => (
              <div key={kit.name} className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{kit.displayName}</h3>
                  <div className="bg-purple-600 text-white px-3 py-1 rounded font-bold">
                    {kit.key}
                  </div>
                </div>
                
                <div className="max-h-64 overflow-y-auto space-y-2">
                  {kit.sounds.map((sound) => (
                    <div key={sound.name} className="flex items-center gap-2 p-2 hover:bg-slate-700 rounded">
                      <input
                        type="radio"
                        id={sound.name}
                        name={kit.name}
                        checked={selectedSounds[kit.name] === sound.path}
                        onChange={() => {
                          setSelectedSounds(prev => ({
                            ...prev,
                            [kit.name]: sound.path
                          }));
                        }}
                        className="w-4 h-4 text-purple-600"
                      />
                      <label 
                        htmlFor={sound.name}
                        className="flex-1 text-slate-300 font-medium cursor-pointer text-sm"
                      >
                        {sound.displayName}
                      </label>
                      <button
                        className="bg-cyan-600 hover:bg-cyan-500 text-white px-2 py-1 rounded text-xs font-medium transition-colors"
                        onClick={() => {
                          const audio = new Audio(sound.path);
                          audio.volume = volume;
                          audio.play().catch(console.error);
                        }}
                      >
                        ▶
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-xs text-slate-400">
                  {kit.sounds.length} sounds available
                </div>
              </div>
            ))}
          </div>

          {/* Volume Control */}
          <div className="bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-700 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Master Volume</h3>
            <div className="flex items-center gap-4">
              <span className="text-slate-400 text-sm">Low</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="flex-1 h-3 bg-slate-600 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-slate-400 text-sm">High</span>
              <span className="text-white font-bold min-w-[50px]">{Math.round(volume * 100)}%</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="flex-1 bg-slate-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-500 transition-colors"
              onClick={() => setCurrentPage('tabs')}
            >
              ← Back to Home
            </button>
            <button
              className="flex-1 bg-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-500 transition-all transform hover:scale-105 shadow-lg"
              onClick={() => setCurrentPage('game')}
            >
              Start Game with Custom Kit
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show loading screen while post data is being fetched
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white mb-2">Loading Drum Dancer</h2>
          <p className="text-slate-300">Preparing your musical experience...</p>
        </div>
      </div>
    );
  }

  // Show speed challenge interface for speed challenge posts
  if (isSpeedChallengePost) {
    return <SpeedChallengePage postData={postData} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-900 to-purple-900">
      {/* Tab Navigation */}
      <div className="flex border-b border-slate-700 bg-slate-800">
        <button
          className={`flex-1 py-3 px-4 text-sm font-medium text-center border-b-2 transition-colors ${activeTab === 'home'
            ? 'border-purple-500 text-purple-400'
            : 'border-transparent text-slate-400 hover:text-slate-300'
            }`}
          onClick={() => setActiveTab('home')}
        >
          Home
        </button>
        <button
          className={`flex-1 py-3 px-4 text-sm font-medium text-center border-b-2 transition-colors ${activeTab === 'leaderboard'
            ? 'border-purple-500 text-purple-400'
            : 'border-transparent text-slate-400 hover:text-slate-300'
            }`}
          onClick={() => setActiveTab('leaderboard')}
        >
          Leaderboard
        </button>
        <button
          className={`flex-1 py-3 px-4 text-sm font-medium text-center border-b-2 transition-colors ${activeTab === 'tutorial'
            ? 'border-purple-500 text-purple-400'
            : 'border-transparent text-slate-400 hover:text-slate-300'
            }`}
          onClick={() => setActiveTab('tutorial')}
        >
          Tutorial
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};