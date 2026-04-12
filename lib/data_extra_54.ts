import { Problem } from './types';

export const EXTRA_PROBLEMS_54: Problem[] = [
  // --- Phone: Hardware & Audio ---
  {
    id: 'p2210001',
    title: 'Phone "Microphone" Sounds Like You are Underwater',
    slug: 'phone-microphone-underwater-sound',
    shortDescription: 'People tell you that you sound muffled or like you are speaking from a distance.',
    category: 'phone',
    subcategory: 'Audio',
    symptoms: ['Muffled voice', 'Quiet audio', 'Distant sound'],
    causes: ['Dirt in mic hole', 'Case blocking mic', 'Water damage'],
    steps: [
      { id: 's1', title: 'Clean the Mic Hole', description: 'Use a soft brush to gently clean the tiny holes at the bottom of the phone.' },
      { id: 's2', title: 'Remove the Case', description: 'Ensure your case isn\'t covering the secondary mic (usually near the camera).' },
      { id: 's3', title: 'Dry the Phone', description: 'If you recently got it wet, use a "Clear Wave" app to vibrate water out of the speaker/mic.' }
    ],
    technicianAdvice: 'Phones have multiple mics for noise cancellation; if one is blocked, your voice will sound "processed" and muffled.',
    relatedProblemIds: ['p2210002', 'p1760001'],
    createdAt: '2026-04-09T08:00:00Z'
  },
  {
    id: 'p2210002',
    title: 'Phone "Speaker" is Crackling After Water Exposure',
    slug: 'phone-speaker-crackling-water',
    shortDescription: 'You dropped your phone in water, and now the music sounds fuzzy and distorted.',
    category: 'phone',
    subcategory: 'Audio',
    symptoms: ['Distorted sound', 'Low volume', 'Buzzing'],
    causes: ['Water trapped in speaker mesh', 'Corrosion'],
    steps: [
      { id: 's1', title: 'Play "Water Eject" Sound', description: 'Play a high-frequency tone (165Hz) to physically push water out of the speaker.' },
      { id: 's2', title: 'Dry with Gravity', description: 'Prop the phone up with the speaker facing down on a towel.' },
      { id: 's3', title: 'Do Not Use a Hairdryer', description: 'Heat can damage the screen and push water deeper into the phone.' }
    ],
    technicianAdvice: 'Water in the speaker isn\'t always a death sentence; it just needs to be vibrated out before it dries and leaves mineral deposits.',
    relatedProblemIds: ['p2210001', 'p1760001'],
    createdAt: '2026-04-09T09:00:00Z'
  },
  // --- Laptop: Hardware & Maintenance ---
  {
    id: 'p2220001',
    title: 'Laptop "Screen" has a Vertical Line',
    slug: 'laptop-screen-vertical-line',
    shortDescription: 'A single, thin line of a solid color (red, green, or blue) runs from the top to the bottom of your screen.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Vertical line', 'Stuck color', 'Permanent mark'],
    causes: ['Damaged display ribbon (TAB bond)', 'Physical impact', 'Failing LCD controller'],
    steps: [
      { id: 's1', title: 'Press the Bezel', description: 'Gently squeeze the frame at the top or bottom of the line; if it disappears, it\'s a loose connection.' },
      { id: 's2', title: 'Connect to External Monitor', description: 'If the line isn\'t on the external monitor, your laptop screen is physically broken.' },
      { id: 's3', title: 'Replace the LCD Panel', description: 'Vertical lines are almost never fixable via software.' }
    ],
    technicianAdvice: 'A vertical line means a specific column of pixels has lost its connection to the controller. It usually requires a screen replacement.',
    relatedProblemIds: ['p2220002', 'p1670002'],
    createdAt: '2026-04-10T08:00:00Z'
  },
  {
    id: 'p2220002',
    title: 'Laptop "Keyboard" is Missing a Keycap',
    slug: 'laptop-keyboard-missing-keycap',
    shortDescription: 'A key has popped off and you can see the white "scissors" mechanism underneath.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Missing key', 'Exposed mechanism', 'Hard to type'],
    causes: ['Physical damage', 'Aggressive typing', 'Cleaning accident'],
    steps: [
      { id: 's1', title: 'Inspect the Retainer Clips', description: 'Look for tiny plastic hooks on the bottom of the keycap. If they are broken, it won\'t snap back.' },
      { id: 's2', title: 'Snap it Back On', description: 'Align the key perfectly and press down firmly until you hear a click.' },
      { id: 's3', title: 'Order a Single Key Replacement', description: 'Websites like ReplacementLaptopKeys.com sell individual keys so you don\'t need a whole keyboard.' }
    ],
    technicianAdvice: 'Don\'t use super glue! It will ruin the mechanism and make the key permanently stuck.',
    relatedProblemIds: ['p2220001', 'p420001'],
    createdAt: '2026-04-10T09:00:00Z'
  },
  // --- Internet: WiFi & Speed ---
  {
    id: 'p2230001',
    title: 'WiFi "Speed" is Slow on 2.4GHz but Fast on 5GHz',
    slug: 'wifi-slow-2-4ghz-fast-5ghz',
    shortDescription: 'Your old laptop is slow, but your new phone is fast on the same WiFi network.',
    category: 'internet',
    subcategory: 'Speed',
    symptoms: ['Slow legacy devices', 'Fast modern devices', 'Interference'],
    causes: ['2.4GHz congestion', 'Bluetooth interference', 'Older WiFi standards (802.11n)'],
    steps: [
      { id: 's1', title: 'Change 2.4GHz Channel Width', description: 'Set it to 20MHz instead of 40MHz to reduce interference.' },
      { id: 's2', title: 'Disable Bluetooth', description: 'Bluetooth and 2.4GHz WiFi fight for the same airwaves.' },
      { id: 's3', title: 'Upgrade the Device', description: 'If a device doesn\'t support 5GHz, it will always be slower in a crowded area.' }
    ],
    technicianAdvice: '2.4GHz is like a single-lane road with lots of traffic; 5GHz is a multi-lane highway.',
    relatedProblemIds: ['p2230002', 'p1880001'],
    createdAt: '2026-04-11T08:00:00Z'
  },
  {
    id: 'p2230002',
    title: 'WiFi "Signal" is Weak Near Large Mirrors',
    slug: 'wifi-signal-weak-mirrors',
    shortDescription: 'You have a mirrored wardrobe, and the WiFi in that room is significantly worse than others.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Dead zone', 'Signal reflection', 'Drops'],
    causes: ['Metal backing on mirrors acts as a shield'],
    steps: [
      { id: 's1', title: 'Move the Router', description: 'Ensure the router isn\'t "aiming" directly at a large mirror.' },
      { id: 's2', title: 'Use a Mesh Node', description: 'Place a node where it has a clear path around the mirror.' },
      { id: 's3', title: 'Check for Other Metal', description: 'Metal studs in walls or foil insulation also block signals.' }
    ],
    technicianAdvice: 'Mirrors are essentially thin sheets of metal. They reflect WiFi signals just like they reflect light.',
    relatedProblemIds: ['p2230001', 'p1780001'],
    createdAt: '2026-04-11T09:00:00Z'
  },
  // --- App: Functionality & UI ---
  {
    id: 'p2240001',
    title: 'App "Icons" are All the Same (Generic)',
    slug: 'app-icons-generic',
    shortDescription: 'All your apps show a generic Android or Apple icon instead of their real logos.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Generic icons', 'Cannot distinguish apps', 'UI mess'],
    causes: ['Icon cache corruption', 'Launcher bug', 'Storage error'],
    steps: [
      { id: 's1', title: 'Clear Launcher Cache', description: 'Settings > Apps > [Launcher] > Clear Cache.' },
      { id: 's2', title: 'Change Icon Pack', description: 'If using a custom theme, switch back to "Default".' },
      { id: 's3', title: 'Restart the Phone', description: 'Forces the system to re-scan the app manifest files.' }
    ],
    technicianAdvice: 'The system stores a "shortcut" of the icon to save power; if that shortcut file is corrupted, it shows a placeholder.',
    relatedProblemIds: ['p2240002', 'p1840001'],
    createdAt: '2026-04-12T08:00:00Z'
  },
  {
    id: 'p2240002',
    title: 'App "Search" Not Finding Local Content',
    slug: 'app-search-not-finding-content',
    shortDescription: 'You search for a contact or a message inside an app, but it says "No Results" even though you know it exists.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Search failure', 'Missing results', 'Slow indexing'],
    causes: ['Indexing paused', 'Database corruption', 'Permissions revoked'],
    steps: [
      { id: 's1', title: 'Re-index the App', description: 'Some apps have a "Rebuild Index" button in their settings.' },
      { id: 's2', title: 'Check "Contacts" Permission', description: 'If the app can\'t see your contacts, it can\'t search them.' },
      { id: 's3', title: 'Clear App Data', description: 'Forces the app to rebuild its local database from the server.' }
    ],
    technicianAdvice: 'Search relies on a "map" of your data; if that map is out of date, search will fail.',
    relatedProblemIds: ['p2240001', 'p1410001'],
    createdAt: '2026-04-12T09:00:00Z'
  },
  // --- Gaming: Performance & Graphics ---
  {
    id: 'p2250001',
    title: 'Game "Graphics" Look "Deep Fried" (Over-sharpened)',
    slug: 'game-graphics-over-sharpened',
    shortDescription: 'The game looks harsh, with white outlines around objects and a "grainy" texture.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Harsh edges', 'Grainy image', 'Visual noise'],
    causes: ['Sharpening filter too high', 'Monitor "Sharpness" setting', 'Upscaling artifacts'],
    steps: [
      { id: 's1', title: 'Lower In-Game Sharpening', description: 'Look for "Sharpening" or "CAS" sliders and reduce them.' },
      { id: 's2', title: 'Lower Monitor Sharpness', description: 'Most monitors should have sharpness set to 0 or 50 (neutral).' },
      { id: 's3', title: 'Disable NVIDIA Image Scaling', description: 'If enabled in the GPU panel, it adds a global sharpening pass.' }
    ],
    technicianAdvice: 'Sharpening is meant to fix blur, but too much of it creates "halos" and makes the game look low-quality.',
    relatedProblemIds: ['p2250002', 'p2150001'],
    createdAt: '2026-04-13T08:00:00Z'
  },
  {
    id: 'p2250002',
    title: 'Game "UI" is Too Small on 4K Screen',
    slug: 'game-ui-too-small-4k',
    shortDescription: 'The game looks great, but the health bar and map are so tiny you can barely see them.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Tiny text', 'Hard to read UI', 'Squinting'],
    causes: ['App doesn\'t support UI scaling', 'Resolution mismatch'],
    steps: [
      { id: 's1', title: 'Increase "HUD Scale"', description: 'Look in the "Interface" or "Video" settings for a scaling slider.' },
      { id: 's2', title: 'Lower Resolution to 1440p', description: 'A temporary fix if the game is too old to handle 4K UI.' },
      { id: 's3', title: 'Use Windows "DPI Override"', description: 'Right-click .exe > Compatibility > Change high DPI settings.' }
    ],
    technicianAdvice: 'Older games (pre-2015) often have "fixed pixel" UIs that don\'t grow with your resolution.',
    relatedProblemIds: ['p2250001', 'p2200001'],
    createdAt: '2026-04-13T09:00:00Z'
  }
];
