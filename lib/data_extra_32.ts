import { Problem } from './types';

export const EXTRA_PROBLEMS_32: Problem[] = [
  // --- Phone: Hardware & Charging ---
  {
    id: 'p1110001',
    title: 'Smartphone "Charging Port" Loose',
    slug: 'smartphone-charging-port-loose',
    shortDescription: 'The charging cable feels wobbly and you have to hold it at a certain angle to charge.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['Wobbly cable', 'Intermittent charging', 'No connection'],
    causes: ['Pocket lint buildup', 'Worn out pins', 'Physical damage'],
    steps: [
      { id: 's1', title: 'Clean the Port', description: 'Use a non-conductive pick (like a toothpick) to gently remove lint.' },
      { id: 's2', title: 'Try a Different Cable', description: 'Rule out a worn-out cable plug.' },
      { id: 's3', title: 'Professional Repair', description: 'If cleaning doesn\'t work, the port itself may need to be replaced.' }
    ],
    technicianAdvice: 'Lint is the #1 cause of "loose" ports; it prevents the cable from clicking in fully.',
    relatedProblemIds: ['p1110002', 'p660001'],
    createdAt: '2025-12-20T08:00:00Z'
  },
  {
    id: 'p1110002',
    title: 'Smartphone "Battery Percentage" Jumps',
    slug: 'smartphone-battery-percentage-jumps',
    shortDescription: 'The battery drops from 40% to 10% in a minute, or increases suddenly when plugged in.',
    category: 'phone',
    subcategory: 'Battery',
    symptoms: ['Inaccurate percentage', 'Sudden drops', 'Fast charging/draining'],
    causes: ['Calibration error', 'Old battery', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Calibrate the Battery', description: 'Drain to 0% until it shuts off, then charge to 100% without interruption.' },
      { id: 's2', title: 'Check Battery Health', description: 'Settings > Battery > Battery Health (on iPhone) or use an app like AccuBattery.' },
      { id: 's3', title: 'Update Software', description: 'Ensure the OS has the latest battery management algorithms.' }
    ],
    technicianAdvice: 'If the battery is more than 2-3 years old, it likely has "voltage sag" which confuses the sensor.',
    relatedProblemIds: ['p1110001', 'p570001'],
    createdAt: '2025-12-20T09:00:00Z'
  },
  // --- Laptop: Hardware & Display ---
  {
    id: 'p1120001',
    title: 'Laptop Screen "Lines" (Horizontal or Vertical)',
    slug: 'laptop-screen-lines',
    shortDescription: 'Permanent colored lines appear across the screen, regardless of what is being displayed.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Colored lines', 'Flickering', 'Distorted image'],
    causes: ['Damaged LCD panel', 'Loose display cable', 'Failing GPU'],
    steps: [
      { id: 's1', title: 'Test with External Monitor', description: 'If the lines don\'t appear on the external screen, your laptop screen is broken.' },
      { id: 's2', title: 'Apply Gentle Pressure', description: 'Lightly press the bezel near the lines to see if they change; this indicates a loose connection.' },
      { id: 's3', title: 'Update Graphics Drivers', description: 'Rule out software glitches before assuming hardware failure.' }
    ],
    technicianAdvice: 'Vertical lines are usually a sign of a failed "gate driver" on the LCD panel itself.',
    relatedProblemIds: ['p1120002', 'p670001'],
    createdAt: '2025-12-21T08:00:00Z'
  },
  {
    id: 'p1120002',
    title: 'Laptop "Webcam" Not Working',
    slug: 'laptop-webcam-not-working',
    shortDescription: 'The camera app says "No camera found" or shows a black screen during calls.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['No camera found', 'Black screen', 'Error message'],
    causes: ['Privacy shutter closed', 'Disabled in BIOS', 'Driver missing'],
    steps: [
      { id: 's1', title: 'Check Physical Shutter', description: 'Ensure the tiny plastic slider over the lens is open.' },
      { id: 's2', title: 'Check Privacy Settings', description: 'Settings > Privacy > Camera > Allow apps to access your camera.' },
      { id: 's3', title: 'Reinstall Driver', description: 'Device Manager > Cameras > Uninstall > Restart.' }
    ],
    technicianAdvice: 'Many modern laptops have a "Kill Switch" or a function key (F8/F10) to disable the camera.',
    relatedProblemIds: ['p1120001', 'p500001'],
    createdAt: '2025-12-21T09:00:00Z'
  },
  // --- Internet: WiFi & Connectivity ---
  {
    id: 'p1130001',
    title: 'WiFi "Frequent Disconnects" (Single Device)',
    slug: 'wifi-frequent-disconnects-single-device',
    shortDescription: 'Only one phone or laptop keeps losing WiFi, while all other devices stay connected.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Random disconnects', 'WiFi turns off', 'Slow reconnection'],
    causes: ['Network card driver', 'Power saving mode', 'IP conflict'],
    steps: [
      { id: 's1', title: 'Update Network Drivers', description: 'Download the latest WiFi driver from the manufacturer\'s site.' },
      { id: 's2', title: 'Disable Power Saving', description: 'Device Manager > Network Adapters > [WiFi] > Power Management > Uncheck "Allow computer to turn off this device".' },
      { id: 's3', title: 'Forget and Reconnect', description: 'Reset the connection profile on the device.' }
    ],
    technicianAdvice: 'If only one device is failing, the problem is almost certainly with that device\'s hardware or drivers.',
    relatedProblemIds: ['p1130002', 'p160002'],
    createdAt: '2025-12-22T08:00:00Z'
  },
  {
    id: 'p1130002',
    title: 'WiFi "Password" Not Working (Correct Password)',
    slug: 'wifi-password-not-working-correct',
    shortDescription: 'You are typing the right password, but the device says "Incorrect password" or "Authentication failed".',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Cannot connect', 'Error message', 'Looping'],
    causes: ['Special characters', 'WPA3 vs WPA2', 'Router glitch'],
    steps: [
      { id: 's1', title: 'Check Caps Lock', description: 'WiFi passwords are case-sensitive.' },
      { id: 's2', title: 'Restart the Router', description: 'Clears any temporary authentication hangs.' },
      { id: 's3', title: 'Change Security Type', description: 'Try switching the router from WPA3 to WPA2/WPA3 Mixed.' }
    ],
    technicianAdvice: 'Some older devices cannot handle WPA3 or very long passwords with special symbols.',
    relatedProblemIds: ['p1130001', 'p580002'],
    createdAt: '2025-12-22T09:00:00Z'
  },
  // --- App: Functionality & Performance ---
  {
    id: 'p1140001',
    title: 'App "Freezing" Randomly',
    slug: 'app-freezing-randomly',
    shortDescription: 'The app stays open but becomes completely unresponsive to touch or clicks.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Frozen UI', 'No response', 'Force quit required'],
    causes: ['Memory leak', 'Conflict with other app', 'Background process hang'],
    steps: [
      { id: 's1', title: 'Force Stop the App', description: 'Kill the process and restart it.' },
      { id: 's2', title: 'Check for System Updates', description: 'Ensure the OS is compatible with the app version.' },
      { id: 's3', title: 'Clear App Cache', description: 'Removes temporary files that might be causing the hang.' }
    ],
    technicianAdvice: 'Apps often freeze when they are waiting for a network response that never arrives.',
    relatedProblemIds: ['p1140002', 'p170001'],
    createdAt: '2025-12-23T08:00:00Z'
  },
  {
    id: 'p1140002',
    title: 'App "Battery Drain" (High Usage)',
    slug: 'app-battery-drain-high',
    shortDescription: 'One specific app is using 30-50% of your battery even when you aren\'t using it much.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Fast drain', 'Warm phone', 'High background activity'],
    causes: ['Location tracking', 'Frequent syncing', 'App bug'],
    steps: [
      { id: 's1', title: 'Restrict Background Usage', description: 'Settings > Apps > [App Name] > Battery > Restricted.' },
      { id: 's2', title: 'Change Location Permissions', description: 'Set to "Only while using the app".' },
      { id: 's3', title: 'Check for Updates', description: 'Developers often fix battery drain bugs in newer versions.' }
    ],
    technicianAdvice: 'Social media apps are the most common culprits for background battery drain.',
    relatedProblemIds: ['p1140001', 'p340001'],
    createdAt: '2025-12-23T09:00:00Z'
  },
  // --- Gaming: Hardware & Connectivity ---
  {
    id: 'p1150001',
    title: 'Game Controller "Drift" (Joystick moves on its own)',
    slug: 'game-controller-drift',
    shortDescription: 'Your character or camera moves slowly even when you aren\'t touching the joystick.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['Unwanted movement', 'Hard to aim', 'Ghost inputs'],
    causes: ['Worn out sensors', 'Dust inside joystick', 'Physical damage'],
    steps: [
      { id: 's1', title: 'Clean with Isopropyl Alcohol', description: 'Use a Q-tip to clean around the base of the joystick.' },
      { id: 's2', title: 'Increase "Deadzone" in Settings', description: 'Tells the game to ignore small movements from the center.' },
      { id: 's3', title: 'Replace Joystick Module', description: 'If cleaning doesn\'t help, the physical sensor is worn out.' }
    ],
    technicianAdvice: 'Joystick drift is a common hardware wear-and-tear issue on almost all modern controllers.',
    relatedProblemIds: ['p1150002', 'p270002'],
    createdAt: '2025-12-24T08:00:00Z'
  },
  {
    id: 'p1150002',
    title: 'Gaming Console "Disc Read Error"',
    slug: 'gaming-console-disc-read-error',
    shortDescription: 'The console makes a clicking sound or says "Unrecognized Disc" when you insert a game.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['Disc not recognized', 'Clicking sound', 'Ejecting automatically'],
    causes: ['Dirty disc', 'Scratched laser lens', 'Failing drive motor'],
    steps: [
      { id: 's1', title: 'Clean the Disc', description: 'Wipe from the center out with a soft cloth.' },
      { id: 's2', title: 'Try a Different Disc', description: 'Rule out a single bad game disc.' },
      { id: 's3', title: 'Use a Lens Cleaning Disc', description: 'Clears dust from the internal laser lens.' }
    ],
    technicianAdvice: 'If the console won\'t read any discs, the internal laser assembly likely needs replacement.',
    relatedProblemIds: ['p1150001', 'p450001'],
    createdAt: '2025-12-24T09:00:00Z'
  }
];
