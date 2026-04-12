import { Problem } from './types';

export const EXTRA_PROBLEMS_20: Problem[] = [
  // --- Phone: Connectivity & Network ---
  {
    id: 'p510001',
    title: 'Phone "No SIM Card" Error (Intermittent)',
    slug: 'phone-no-sim-card-error',
    shortDescription: 'The phone suddenly says "No SIM" even though the card is inside.',
    category: 'phone',
    subcategory: 'Network',
    symptoms: ['"No SIM" alert', 'Signal drops', 'Emergency calls only'],
    causes: ['Loose SIM tray', 'Dirty SIM contacts', 'Failing SIM card'],
    steps: [
      { id: 's1', title: 'Reseat the SIM Card', description: 'Eject the tray and ensure the card is perfectly flat and aligned.' },
      { id: 's2', title: 'Clean the Gold Contacts', description: 'Wipe the card with a dry cloth to remove oils or oxidation.' },
      { id: 's3', title: 'Request eSIM', description: 'If your phone supports it, switch to an eSIM to eliminate physical card issues.' }
    ],
    technicianAdvice: 'SIM cards can wear out or become slightly warped over time due to heat.',
    relatedProblemIds: ['p510002', 'p510003'],
    createdAt: '2025-10-21T08:00:00Z'
  },
  {
    id: 'p510002',
    title: 'Phone "Searching..." for Signal Forever',
    slug: 'phone-searching-signal-forever',
    shortDescription: 'The signal bars are replaced by "Searching..." and never connect to a network.',
    category: 'phone',
    subcategory: 'Network',
    symptoms: ['"Searching..." status', 'No service', 'Fast battery drain'],
    causes: ['Baseband chip failure', 'Antenna damage', 'Carrier outage'],
    steps: [
      { id: 's1', title: 'Check for Carrier Update', description: 'Settings > General > About. If an update is available, a popup will appear.' },
      { id: 's2', title: 'Reset Network Settings', description: 'Clears all saved WiFi and cellular configurations.' },
      { id: 's3', title: 'Check IMEI Status', description: 'Dial *#06#. If the IMEI is blank, the baseband hardware is dead.' }
    ],
    technicianAdvice: 'If the IMEI is missing, the phone needs a motherboard repair.',
    relatedProblemIds: ['p510001', 'p510004'],
    createdAt: '2025-10-21T09:00:00Z'
  },
  // --- Laptop: Display & Video ---
  {
    id: 'p520001',
    title: 'Laptop Screen "Ghosting" After Image',
    slug: 'laptop-screen-ghosting-after-image',
    shortDescription: 'A faint image of a previous window stays on the screen for several minutes.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Ghost images', 'Retention', 'Faint shadows'],
    causes: ['IPS image retention', 'Overheating panel', 'Bad display cable'],
    steps: [
      { id: 's1', title: 'Run a "Screen Fix" Video', description: 'Play a video with rapidly changing colors to "reset" the liquid crystals.' },
      { id: 's2', title: 'Lower Screen Brightness', description: 'Reduces the heat and voltage that causes retention.' },
      { id: 's3', title: 'Set a Shorter Screen Timeout', description: 'Ensure the screen turns off when not in use.' }
    ],
    technicianAdvice: 'Unlike OLED burn-in, IPS retention is usually temporary and disappears after a few hours of being off.',
    relatedProblemIds: ['p520002', 'p520003'],
    createdAt: '2025-10-22T08:00:00Z'
  },
  {
    id: 'p520002',
    title: 'Laptop Screen "White Spots" (Pressure Marks)',
    slug: 'laptop-screen-white-spots-pressure',
    shortDescription: 'Bright, glowing white spots appear on the screen, most visible on white backgrounds.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Bright spots', 'Uneven backlight', 'Pressure marks'],
    causes: ['Physical pressure on lid', 'Carrying in tight bag', 'Manufacturing defect'],
    steps: [
      { id: 's1', title: 'Avoid Pressure', description: 'Don\'t put heavy objects on your laptop lid when it\'s closed.' },
      { id: 's2', title: 'Use a Protective Sleeve', description: 'Ensure your bag isn\'t squeezing the laptop too tightly.' },
      { id: 's3', title: 'Replace LCD Panel', description: 'Pressure marks are physical damage to the diffuser layers and cannot be fixed with software.' }
    ],
    technicianAdvice: 'These spots are caused by the layers of the screen being pressed together permanently.',
    relatedProblemIds: ['p520001', 'p520004'],
    createdAt: '2025-10-22T09:00:00Z'
  },
  // --- Internet: Speed & Latency ---
  {
    id: 'p530001',
    title: 'High "Ping" or Latency in Online Games',
    slug: 'high-ping-latency-gaming',
    shortDescription: 'Your internet speed is fast, but your games are laggy and "rubber-banding".',
    category: 'internet',
    subcategory: 'Speed',
    symptoms: ['Rubber-banding', 'Delayed actions', 'High ms count'],
    causes: ['WiFi interference', 'Bufferbloat', 'Routing issues'],
    steps: [
      { id: 's1', title: 'Use Ethernet', description: 'WiFi adds significant jitter and latency; a cable is essential for gaming.' },
      { id: 's2', title: 'Enable QoS on Router', description: 'Quality of Service (QoS) prioritizes gaming traffic over Netflix or downloads.' },
      { id: 's3', title: 'Select Closer Game Server', description: 'Ensure you are playing on a server in your own region (e.g., US-East vs Europe).' }
    ],
    technicianAdvice: 'Ping is about the "distance" and "quality" of the connection, not the "width" (speed).',
    relatedProblemIds: ['p530002', 'p530003'],
    createdAt: '2025-10-23T08:00:00Z'
  },
  {
    id: 'p530002',
    title: 'Internet "Bufferbloat" (Lag when others use web)',
    slug: 'internet-bufferbloat-lag',
    shortDescription: 'Your internet is fine until someone else in the house starts a download or video call.',
    category: 'internet',
    subcategory: 'Speed',
    symptoms: ['Lag spikes', 'Unstable speed', 'Congestion'],
    causes: ['Router buffer filling up', 'Maxed out upload speed'],
    steps: [
      { id: 's1', title: 'Limit Upload Speed', description: 'Set a cap in your router (e.g., 90% of max) to prevent the buffer from filling.' },
      { id: 's2', title: 'Upgrade Router', description: 'Modern routers have better "Smart Queue Management" (SQM) to handle multiple users.' },
      { id: 's3', title: 'Check for Background Backups', description: 'Cloud backups (iCloud/Google Photos) can saturate your upload and cause lag.' }
    ],
    technicianAdvice: 'Bufferbloat is the #1 cause of "unexplained" lag in modern households.',
    relatedProblemIds: ['p530001', 'p530004'],
    createdAt: '2025-10-23T09:00:00Z'
  },
  // --- App: Functionality & Errors ---
  {
    id: 'p540001',
    title: 'App "Screen Overlay Detected" Error',
    slug: 'app-screen-overlay-detected',
    shortDescription: 'You cannot grant permissions to an app because another app is "drawing over" the screen.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Permission blocked', 'Error popup', 'Cannot click "Allow"'],
    causes: ['Blue light filters (Twilight)', 'Messenger bubbles', 'Edge panels'],
    steps: [
      { id: 's1', title: 'Disable Blue Light Filters', description: 'Apps like Twilight or Night Shift can interfere with the touch layer.' },
      { id: 's2', title: 'Close Chat Bubbles', description: 'Dismiss Facebook Messenger or other floating icons.' },
      { id: 's3', title: 'Turn Off "Draw Over Other Apps"', description: 'Settings > Apps > Special Access > Draw over other apps > Disable for all.' }
    ],
    technicianAdvice: 'This is a security feature to prevent "tap-jacking" where an app tricks you into clicking a hidden button.',
    relatedProblemIds: ['p540002', 'p540003'],
    createdAt: '2025-10-24T08:00:00Z'
  },
  {
    id: 'p540002',
    title: 'App "Package File is Invalid" (Play Store)',
    slug: 'app-package-file-invalid',
    shortDescription: 'You try to install an app from the Play Store but it fails with a "Package invalid" error.',
    category: 'app',
    subcategory: 'Installation',
    symptoms: ['Installation failed', 'Error message', 'Download restarts'],
    causes: ['Corrupt Play Store cache', 'Incomplete download', 'SD card error'],
    steps: [
      { id: 's1', title: 'Clear Play Store Data', description: 'Settings > Apps > Play Store > Storage > Clear Data (not just cache).' },
      { id: 's2', title: 'Remove SD Card', description: 'If you have "Adoptable Storage", the SD card might be failing.' },
      { id: 's3', title: 'Check Date & Time', description: 'Incorrect time can cause security certificate mismatches during download.' }
    ],
    technicianAdvice: 'This error usually means the file downloaded didn\'t match the expected "hash" or signature.',
    relatedProblemIds: ['p540001', 'p540004'],
    createdAt: '2025-10-24T09:00:00Z'
  },
  // --- Gaming: Audio & Social ---
  {
    id: 'p550001',
    title: 'Gaming Headset "Mic Monitoring" (Sidetone) Too Loud',
    slug: 'gaming-headset-mic-monitoring-loud',
    shortDescription: 'You can hear your own voice (and breathing) very loudly in your own ears.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['Hearing own voice', 'Echo', 'Distraction'],
    causes: ['Sidetone enabled in software', 'Windows "Listen to this device" on'],
    steps: [
      { id: 's1', title: 'Adjust Sidetone in App', description: 'Use the headset software (iCUE, G-Hub, etc.) to lower the sidetone slider.' },
      { id: 's2', title: 'Check Windows Sound Control', description: 'Sound Control Panel > Recording > Properties > Listen > Ensure "Listen to this device" is OFF.' },
      { id: 's3', title: 'Update Headset Firmware', description: 'Sometimes firmware bugs cause sidetone to reset to 100%.' }
    ],
    technicianAdvice: 'Sidetone is meant to help you not shout, but it shouldn\'t be loud enough to hear your breathing.',
    relatedProblemIds: ['p550002', 'p550003'],
    createdAt: '2025-10-25T08:00:00Z'
  },
  {
    id: 'p550002',
    title: 'Game Audio "Static" When Using Front Panel Jack',
    slug: 'game-audio-static-front-panel',
    shortDescription: 'You hear a buzzing or static sound that changes when you move the mouse or the GPU is under load.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['Buzzing sound', 'Electrical noise', 'Static'],
    causes: ['EMI (Electromagnetic Interference)', 'Poorly shielded cable', 'Ground loop'],
    steps: [
      { id: 's1', title: 'Use Rear Motherboard Jack', description: 'The rear ports are directly on the board and have much better shielding.' },
      { id: 's2', title: 'Use a USB DAC/Amp', description: 'Moving the audio processing outside the PC case eliminates EMI.' },
      { id: 's3', title: 'Reroute Internal Audio Cable', description: 'Ensure the front panel audio cable isn\'t touching the power supply or GPU.' }
    ],
    technicianAdvice: 'Front panel audio cables are often unshielded and act like antennas for electrical noise inside the PC.',
    relatedProblemIds: ['p550001', 'p550004'],
    createdAt: '2025-10-25T09:00:00Z'
  }
];
