// Drum patterns for different difficulty levels
// Each pattern represents one measure (4 beats) of drums

export interface DrumBeat {
  time: number;
  drum: string;
}

export interface DrumPatterns {
  easy: DrumBeat[][];
  medium: DrumBeat[][];
  hard: DrumBeat[][];
}

export const drumPatterns: DrumPatterns = {
  easy: [
    // Pattern 1: Classic Rock Beat
    [
      { time: 0, drum: 'kick' },    // Beat 1
      { time: 0.5, drum: 'hihat' },
      { time: 1, drum: 'snare' },   // Beat 2
      { time: 1.5, drum: 'hihat' },
      { time: 2, drum: 'kick' },    // Beat 3
      { time: 2.5, drum: 'hihat' },
      { time: 3, drum: 'snare' },   // Beat 4
      { time: 3.5, drum: 'hihat' }
    ],
    // Pattern 2: Pop Beat with Open Hi-Hat
    [
      { time: 0, drum: 'kick' },
      { time: 0.5, drum: 'hihat' },
      { time: 1, drum: 'snare' },
      { time: 1.5, drum: 'openhat' }, // Open hi-hat accent
      { time: 2, drum: 'kick' },
      { time: 2.5, drum: 'hihat' },
      { time: 3, drum: 'snare' },
      { time: 3.5, drum: 'hihat' }
    ],
    // Pattern 3: Simple Disco Beat
    [
      { time: 0, drum: 'kick' },
      { time: 0.5, drum: 'kick' },    // Four-on-floor
      { time: 1, drum: 'snare' },
      { time: 1.5, drum: 'hihat' },
      { time: 2, drum: 'kick' },
      { time: 2.5, drum: 'kick' },
      { time: 3, drum: 'snare' },
      { time: 3.5, drum: 'hihat' }
    ],
    // Pattern 4: Country Shuffle
    [
      { time: 0, drum: 'kick' },
      { time: 0.75, drum: 'hihat' },   // Shuffle feel
      { time: 1, drum: 'snare' },
      { time: 1.75, drum: 'hihat' },
      { time: 2, drum: 'kick' },
      { time: 2.75, drum: 'hihat' },
      { time: 3, drum: 'snare' },
      { time: 3.5, drum: 'kick' }      // Extra kick
    ],
    // Pattern 5: Basic Ballad
    [
      { time: 0, drum: 'kick' },
      { time: 1, drum: 'snare' },
      { time: 1.5, drum: 'hihat' },
      { time: 2, drum: 'kick' },
      { time: 2.5, drum: 'hihat' },
      { time: 3, drum: 'snare' },
      { time: 3.5, drum: 'hihat' }
    ],
    // Pattern 6: Simple Blues
    [
      { time: 0, drum: 'kick' },
      { time: 0.5, drum: 'hihat' },
      { time: 1, drum: 'snare' },
      { time: 2, drum: 'kick' },
      { time: 2.5, drum: 'hihat' },
      { time: 3, drum: 'snare' },
      { time: 3.25, drum: 'kick' },    // Swing feel
      { time: 3.75, drum: 'hihat' }
    ],
    // Pattern 7: Folk Rock
    [
      { time: 0, drum: 'kick' },
      { time: 0.5, drum: 'hihat' },
      { time: 1, drum: 'snare' },
      { time: 1.5, drum: 'kick' },
      { time: 2, drum: 'hihat' },
      { time: 2.5, drum: 'kick' },
      { time: 3, drum: 'snare' },
      { time: 3.5, drum: 'hihat' }
    ],
    // Pattern 8: Surf Rock
    [
      { time: 0, drum: 'kick' },
      { time: 0.25, drum: 'tom' },     // Tom accent
      { time: 0.5, drum: 'hihat' },
      { time: 1, drum: 'snare' },
      { time: 1.5, drum: 'hihat' },
      { time: 2, drum: 'kick' },
      { time: 2.5, drum: 'hihat' },
      { time: 3, drum: 'snare' },
      { time: 3.75, drum: 'tom' }
    ],
    // Pattern 9: Motown
    [
      { time: 0, drum: 'kick' },
      { time: 0.5, drum: 'hihat' },
      { time: 1, drum: 'snare' },
      { time: 1.5, drum: 'hihat' },
      { time: 2, drum: 'kick' },
      { time: 2.25, drum: 'kick' },    // Extra kick
      { time: 2.5, drum: 'hihat' },
      { time: 3, drum: 'snare' },
      { time: 3.5, drum: 'hihat' }
    ],
    // Pattern 10: Indie Pop
    [
      { time: 0, drum: 'kick' },
      { time: 0.5, drum: 'hihat' },
      { time: 1, drum: 'snare' },
      { time: 1.5, drum: 'openhat' },
      { time: 2, drum: 'kick' },
      { time: 2.5, drum: 'hihat' },
      { time: 3, drum: 'snare' },
      { time: 3.25, drum: 'clap' },    // Clap accent
      { time: 3.5, drum: 'hihat' }
    ]
  ],
  medium: [
    // Pattern 1: Funk Groove
    [
      { time: 0, drum: 'kick' },
      { time: 0.25, drum: 'hihat' },
      { time: 0.5, drum: 'hihat' },
      { time: 1, drum: 'snare' },
      { time: 1.5, drum: 'kick' },    // Syncopated kick
      { time: 1.75, drum: 'hihat' },
      { time: 2, drum: 'hihat' },
      { time: 2.5, drum: 'openhat' },
      { time: 3, drum: 'snare' },
      { time: 3.5, drum: 'hihat' }
    ],
    // Pattern 2: Reggae One Drop
    [
      { time: 0, drum: 'hihat' },     // No kick on 1
      { time: 0.5, drum: 'hihat' },
      { time: 1, drum: 'snare' },     // Snare on 2
      { time: 1.5, drum: 'hihat' },
      { time: 2, drum: 'kick' },      // Kick on 3
      { time: 2.5, drum: 'hihat' },
      { time: 3, drum: 'snare' },     // Snare on 4
      { time: 3.5, drum: 'hihat' }
    ],
    // Pattern 3: Hip-Hop Groove
    [
      { time: 0, drum: 'kick' },
      { time: 0.5, drum: 'hihat' },
      { time: 1, drum: 'snare' },
      { time: 1.25, drum: 'kick' },   // Ghost kick
      { time: 1.5, drum: 'hihat' },
      { time: 2, drum: 'kick' },
      { time: 2.5, drum: 'clap' },    // Clap instead of snare
      { time: 3, drum: 'snare' },
      { time: 3.75, drum: 'kick' }    // Syncopated ending
    ],
    // Pattern 4: Jazz Swing
    [
      { time: 0, drum: 'kick' },
      { time: 0.33, drum: 'ride' },   // Swing triplets
      { time: 0.67, drum: 'ride' },
      { time: 1, drum: 'snare' },
      { time: 1.33, drum: 'ride' },
      { time: 1.67, drum: 'ride' },
      { time: 2, drum: 'kick' },
      { time: 2.33, drum: 'ride' },
      { time: 2.67, drum: 'ride' },
      { time: 3, drum: 'snare' },
      { time: 3.5, drum: 'kick' }
    ],
    // Pattern 5: Afrobeat
    [
      { time: 0, drum: 'kick' },
      { time: 0.25, drum: 'shaker' },
      { time: 0.5, drum: 'hihat' },
      { time: 0.75, drum: 'shaker' },
      { time: 1, drum: 'snare' },
      { time: 1.25, drum: 'shaker' },
      { time: 1.5, drum: 'kick' },
      { time: 1.75, drum: 'shaker' },
      { time: 2, drum: 'hihat' },
      { time: 2.5, drum: 'kick' },
      { time: 3, drum: 'snare' },
      { time: 3.75, drum: 'shaker' }
    ],
    // Pattern 6: Bossa Nova
    [
      { time: 0, drum: 'kick' },
      { time: 0.5, drum: 'shaker' },
      { time: 1, drum: 'snare' },
      { time: 1.25, drum: 'shaker' },
      { time: 1.5, drum: 'kick' },
      { time: 1.75, drum: 'shaker' },
      { time: 2, drum: 'kick' },
      { time: 2.5, drum: 'shaker' },
      { time: 3, drum: 'snare' },
      { time: 3.25, drum: 'kick' },
      { time: 3.75, drum: 'shaker' }
    ],
    // Pattern 7: Trap
    [
      { time: 0, drum: 'kick' },
      { time: 0.25, drum: 'hihat' },
      { time: 0.5, drum: 'hihat' },
      { time: 0.75, drum: 'hihat' },
      { time: 1, drum: 'snare' },
      { time: 1.25, drum: 'hihat' },
      { time: 1.5, drum: 'kick' },
      { time: 1.75, drum: 'hihat' },
      { time: 2, drum: 'hihat' },
      { time: 2.25, drum: 'hihat' },
      { time: 2.5, drum: 'kick' },
      { time: 2.75, drum: 'hihat' },
      { time: 3, drum: 'snare' },
      { time: 3.5, drum: 'hihat' }
    ],
    // Pattern 8: Samba
    [
      { time: 0, drum: 'kick' },
      { time: 0.25, drum: 'shaker' },
      { time: 0.5, drum: 'snare' },
      { time: 0.75, drum: 'shaker' },
      { time: 1, drum: 'kick' },
      { time: 1.25, drum: 'shaker' },
      { time: 1.5, drum: 'snare' },
      { time: 1.75, drum: 'shaker' },
      { time: 2, drum: 'kick' },
      { time: 2.5, drum: 'snare' },
      { time: 3, drum: 'kick' },
      { time: 3.5, drum: 'snare' }
    ],
    // Pattern 9: Drum & Bass
    [
      { time: 0, drum: 'kick' },
      { time: 0.125, drum: 'hihat' },
      { time: 0.25, drum: 'hihat' },
      { time: 0.5, drum: 'kick' },
      { time: 0.75, drum: 'hihat' },
      { time: 1, drum: 'snare' },
      { time: 1.25, drum: 'hihat' },
      { time: 1.5, drum: 'kick' },
      { time: 2, drum: 'kick' },
      { time: 2.25, drum: 'hihat' },
      { time: 2.5, drum: 'kick' },
      { time: 3, drum: 'snare' },
      { time: 3.75, drum: 'kick' }
    ],
    // Pattern 10: Alternative Rock
    [
      { time: 0, drum: 'kick' },
      { time: 0.5, drum: 'hihat' },
      { time: 1, drum: 'snare' },
      { time: 1.25, drum: 'kick' },
      { time: 1.5, drum: 'hihat' },
      { time: 1.75, drum: 'kick' },
      { time: 2, drum: 'kick' },
      { time: 2.5, drum: 'openhat' },
      { time: 3, drum: 'snare' },
      { time: 3.25, drum: 'tom' },
      { time: 3.5, drum: 'kick' },
      { time: 3.75, drum: 'hihat' }
    ]
  ],
  hard: [
    // Pattern 1: Progressive Rock
    [
      { time: 0, drum: 'crash' },
      { time: 0, drum: 'kick' },
      { time: 0.25, drum: 'hihat' },
      { time: 0.5, drum: 'tom' },     // Tom fill
      { time: 0.75, drum: 'kick' },
      { time: 1, drum: 'snare' },
      { time: 1.25, drum: 'hihat' },
      { time: 1.5, drum: 'kick' },
      { time: 1.75, drum: 'hihat' },
      { time: 2, drum: 'kick' },
      { time: 2.25, drum: 'tom' },
      { time: 2.5, drum: 'hihat' },
      { time: 2.75, drum: 'snare' },
      { time: 3, drum: 'snare' },
      { time: 3.25, drum: 'tom' },
      { time: 3.5, drum: 'crash' },
      { time: 3.75, drum: 'kick' }
    ],
    // Pattern 2: Latin Jazz
    [
      { time: 0, drum: 'kick' },
      { time: 0.25, drum: 'cowbell' },
      { time: 0.5, drum: 'ride' },
      { time: 0.75, drum: 'shaker' },
      { time: 1, drum: 'snare' },
      { time: 1.25, drum: 'cowbell' },
      { time: 1.5, drum: 'kick' },
      { time: 1.75, drum: 'ride' },
      { time: 2, drum: 'kick' },
      { time: 2.25, drum: 'shaker' },
      { time: 2.5, drum: 'ride' },
      { time: 2.75, drum: 'cowbell' },
      { time: 3, drum: 'snare' },
      { time: 3.25, drum: 'shaker' },
      { time: 3.5, drum: 'ride' },
      { time: 3.75, drum: 'shaker' }
    ],
    // Pattern 3: Metal/Double Bass
    [
      { time: 0, drum: 'crash' },
      { time: 0, drum: 'kick' },
      { time: 0.25, drum: 'kick' },   // Double bass
      { time: 0.5, drum: 'hihat' },
      { time: 0.75, drum: 'kick' },
      { time: 1, drum: 'snare' },
      { time: 1.25, drum: 'kick' },
      { time: 1.5, drum: 'kick' },
      { time: 1.75, drum: 'hihat' },
      { time: 2, drum: 'kick' },
      { time: 2.25, drum: 'kick' },
      { time: 2.5, drum: 'ride' },
      { time: 2.75, drum: 'kick' },
      { time: 3, drum: 'snare' },
      { time: 3.25, drum: 'kick' },
      { time: 3.5, drum: 'crash' },
      { time: 3.75, drum: 'kick' }
    ],
    // Pattern 4: Fusion Jazz
    [
      { time: 0, drum: 'kick' },
      { time: 0.125, drum: 'ride' },
      { time: 0.25, drum: 'hihat' },
      { time: 0.375, drum: 'ride' },
      { time: 0.5, drum: 'tom' },
      { time: 0.75, drum: 'kick' },
      { time: 1, drum: 'snare' },
      { time: 1.125, drum: 'ride' },
      { time: 1.25, drum: 'hihat' },
      { time: 1.5, drum: 'kick' },
      { time: 1.75, drum: 'tom' },
      { time: 2, drum: 'kick' },
      { time: 2.25, drum: 'ride' },
      { time: 2.5, drum: 'crash' },
      { time: 2.75, drum: 'kick' },
      { time: 3, drum: 'snare' },
      { time: 3.375, drum: 'tom' },
      { time: 3.5, drum: 'ride' }
    ],
    // Pattern 5: Polyrhythmic African
    [
      { time: 0, drum: 'kick' },
      { time: 0.167, drum: 'shaker' },  // Triplet feel
      { time: 0.333, drum: 'percussion' },
      { time: 0.5, drum: 'cowbell' },
      { time: 0.667, drum: 'shaker' },
      { time: 0.833, drum: 'kick' },
      { time: 1, drum: 'snare' },
      { time: 1.167, drum: 'shaker' },
      { time: 1.333, drum: 'percussion' },
      { time: 1.5, drum: 'cowbell' },
      { time: 1.833, drum: 'kick' },
      { time: 2, drum: 'kick' },
      { time: 2.333, drum: 'percussion' },
      { time: 2.5, drum: 'cowbell' },
      { time: 2.667, drum: 'shaker' },
      { time: 3, drum: 'snare' },
      { time: 3.5, drum: 'kick' },
      { time: 3.833, drum: 'shaker' }
    ],
    // Pattern 6: Technical Death Metal
    [
      { time: 0, drum: 'crash' },
      { time: 0, drum: 'kick' },
      { time: 0.125, drum: 'kick' },
      { time: 0.25, drum: 'kick' },
      { time: 0.375, drum: 'hihat' },
      { time: 0.5, drum: 'kick' },
      { time: 0.625, drum: 'kick' },
      { time: 0.75, drum: 'tom' },
      { time: 1, drum: 'snare' },
      { time: 1.125, drum: 'kick' },
      { time: 1.25, drum: 'kick' },
      { time: 1.5, drum: 'kick' },
      { time: 1.75, drum: 'hihat' },
      { time: 2, drum: 'kick' },
      { time: 2.125, drum: 'kick' },
      { time: 2.25, drum: 'tom' },
      { time: 2.5, drum: 'crash' },
      { time: 2.75, drum: 'kick' },
      { time: 3, drum: 'snare' },
      { time: 3.25, drum: 'kick' },
      { time: 3.5, drum: 'kick' },
      { time: 3.75, drum: 'kick' }
    ],
    // Pattern 7: Complex Jazz Waltz (in 4/4 but with 3-feel)
    [
      { time: 0, drum: 'kick' },
      { time: 0.33, drum: 'ride' },
      { time: 0.67, drum: 'ride' },
      { time: 1, drum: 'snare' },
      { time: 1.33, drum: 'ride' },
      { time: 1.67, drum: 'kick' },
      { time: 2, drum: 'kick' },
      { time: 2.33, drum: 'ride' },
      { time: 2.67, drum: 'tom' },
      { time: 3, drum: 'snare' },
      { time: 3.25, drum: 'crash' },
      { time: 3.33, drum: 'ride' },
      { time: 3.67, drum: 'kick' }
    ],
    // Pattern 8: Odd Time Signature Feel (7/8 in 4/4)
    [
      { time: 0, drum: 'kick' },
      { time: 0.25, drum: 'hihat' },
      { time: 0.5, drum: 'snare' },
      { time: 0.875, drum: 'kick' },    // 7/8 feel
      { time: 1.125, drum: 'hihat' },
      { time: 1.375, drum: 'tom' },
      { time: 1.75, drum: 'kick' },
      { time: 2, drum: 'snare' },
      { time: 2.25, drum: 'hihat' },
      { time: 2.625, drum: 'kick' },
      { time: 2.875, drum: 'crash' },
      { time: 3.125, drum: 'tom' },
      { time: 3.5, drum: 'snare' },
      { time: 3.75, drum: 'kick' }
    ],
    // Pattern 9: Blast Beat Variation
    [
      { time: 0, drum: 'crash' },
      { time: 0, drum: 'kick' },
      { time: 0.125, drum: 'snare' },
      { time: 0.25, drum: 'kick' },
      { time: 0.375, drum: 'snare' },
      { time: 0.5, drum: 'kick' },
      { time: 0.625, drum: 'snare' },
      { time: 0.75, drum: 'kick' },
      { time: 0.875, drum: 'snare' },
      { time: 1, drum: 'kick' },
      { time: 1.125, drum: 'snare' },
      { time: 1.25, drum: 'kick' },
      { time: 1.375, drum: 'snare' },
      { time: 1.5, drum: 'kick' },
      { time: 1.625, drum: 'snare' },
      { time: 1.75, drum: 'kick' },
      { time: 1.875, drum: 'snare' },
      { time: 2, drum: 'kick' },
      { time: 2.25, drum: 'tom' },
      { time: 2.5, drum: 'crash' },
      { time: 2.75, drum: 'kick' },
      { time: 3, drum: 'snare' },
      { time: 3.5, drum: 'kick' }
    ],
    // Pattern 10: Mathcore/Djent
    [
      { time: 0, drum: 'kick' },
      { time: 0.1875, drum: 'hihat' },  // 16th note triplets
      { time: 0.375, drum: 'kick' },
      { time: 0.5625, drum: 'tom' },
      { time: 0.75, drum: 'snare' },
      { time: 0.9375, drum: 'kick' },
      { time: 1.125, drum: 'hihat' },
      { time: 1.3125, drum: 'kick' },
      { time: 1.5, drum: 'crash' },
      { time: 1.6875, drum: 'tom' },
      { time: 1.875, drum: 'kick' },
      { time: 2.0625, drum: 'snare' },
      { time: 2.25, drum: 'kick' },
      { time: 2.4375, drum: 'hihat' },
      { time: 2.625, drum: 'tom' },
      { time: 2.8125, drum: 'kick' },
      { time: 3, drum: 'snare' },
      { time: 3.1875, drum: 'crash' },
      { time: 3.375, drum: 'kick' },
      { time: 3.75, drum: 'kick' }
    ]
  ]
};

export const patternNames = {
  easy: [
    'Classic Rock', 'Pop Beat', 'Simple Disco', 'Country Shuffle', 'Basic Ballad',
    'Simple Blues', 'Folk Rock', 'Surf Rock', 'Motown', 'Indie Pop'
  ],
  medium: [
    'Funk Groove', 'Reggae One Drop', 'Hip-Hop', 'Jazz Swing', 'Afrobeat',
    'Bossa Nova', 'Trap', 'Samba', 'Drum & Bass', 'Alternative Rock'
  ],
  hard: [
    'Progressive Rock', 'Latin Jazz', 'Metal/Double Bass', 'Fusion Jazz', 'Polyrhythmic African',
    'Technical Death Metal', 'Complex Jazz Waltz', 'Odd Time Feel', 'Blast Beat Variation', 'Mathcore/Djent'
  ]
};