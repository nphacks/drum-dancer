import { useState, useEffect } from 'react';
import { GamePage } from './GamePage';

interface SpeedChallengePageProps {
    postData: any;
}

export const SpeedChallengePage = ({ postData }: SpeedChallengePageProps) => {
    const challengeId = postData?.challengeId;
    const originalSequenceId = postData?.originalSequenceId;
    const originalPlayer = postData?.originalPlayer;
    const currentSpeed = postData?.currentSpeed || 1.5;
    const challengeLevel = postData?.challengeLevel || 1;
    const difficulty = postData?.difficulty;
    const lastChallengerPlayer = postData?.lastChallengerPlayer;
    const lastChallengerScore = postData?.lastChallengerScore;

    const [beatSequence, setBeatSequence] = useState<any>(null);
    const [showGame, setShowGame] = useState(false);

    // Fetch the beat sequence data
    useEffect(() => {
        const fetchBeatSequence = async () => {
            if (!originalSequenceId) return;

            try {
                const response = await fetch(`/api/beat-sequence/${originalSequenceId}`);
                const result = await response.json();

                if (result.status === 'success') {
                    setBeatSequence(result.sequence);
                }
            } catch (error) {
                console.error('Error fetching beat sequence:', error);
            }
        };

        fetchBeatSequence();
    }, [originalSequenceId]);



    const speedEmojis = '⚡'.repeat(challengeLevel);

    if (showGame && beatSequence) {
        return (
            <GamePage
                onCancel={() => setShowGame(false)}
                speedChallenge={{
                    speed: currentSpeed,
                    beatSequence: beatSequence,
                    challengeId: challengeId,
                    originalSequenceId: originalSequenceId,
                    challengeLevel: challengeLevel
                }}
            />
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-purple-900 text-white">
            {/* Challenge Header */}
            <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="text-2xl mb-1">{speedEmojis}</div>
                    <h1 className="text-xl font-bold mb-1">
                        Speed Challenge Level {challengeLevel}
                    </h1>
                    <div className="text-lg mb-2">
                        {currentSpeed}x Speed Challenge
                    </div>
                    <div className="text-sm opacity-90">
                        Original by {originalPlayer} • {difficulty?.charAt(0).toUpperCase()}{difficulty?.slice(1)}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-2xl mx-auto p-4 space-y-4">
                {/* Previous Challenger Info */}
                {lastChallengerPlayer && challengeLevel > 1 && (
                    <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                        <h3 className="text-lg font-bold mb-2 text-center">Previous Speed King</h3>
                        <div className="text-center">
                            <div className="text-base">
                                <span className="text-cyan-400 font-bold">{lastChallengerPlayer}</span> conquered {currentSpeed - 0.5}x speed
                            </div>
                            <div className="text-slate-400 text-sm">
                                Score: {lastChallengerScore?.toLocaleString() || 'N/A'}
                            </div>
                        </div>
                    </div>
                )}

                {/* Action Button */}
                <div className="text-center">
                    <button
                        onClick={() => setShowGame(true)}
                        disabled={!beatSequence}
                        className={`px-8 py-3 rounded-lg font-bold text-lg transition-colors shadow-lg ${!beatSequence
                            ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white'
                            }`}
                    >
                        {!beatSequence ? 'Loading Challenge...' : `Accept ${currentSpeed}x Challenge`}
                    </button>
                </div>

                {/* Warning */}
                <div className="text-center text-slate-300 text-sm bg-slate-800 rounded-lg p-3 border border-slate-700">
                    This challenge uses the same beat pattern at {currentSpeed}x speed. Get 90%+ accuracy to win!
                </div>
            </div>
        </div>
    );
};