import { Problem } from './types';

export const EXTRA_PROBLEMS_21: Problem[] = [
  // --- Phone: Camera & Photos ---
  {
    id: 'p560001',
    title: 'Smartphone Camera "Focus Hunting" (Blurry Photos)',
    slug: 'smartphone-camera-focus-hunting',
    shortDescription: 'The camera keeps trying to focus but never locks on, resulting in blurry images.',
    category: 'phone',
    subcategory: 'Camera',
    symptoms: ['Blurry photos', 'Focus motor noise', 'Constant refocusing'],
    causes: ['Dirty lens', 'Laser AF blocked', 'OIS hardware failure'],
    steps: [
      { id: 's1', title: 'Clean the Lens', description: 'Wipe the camera glass with a microfiber cloth to remove fingerprints.' },
      { id: 's2', title: 'Remove Case', description: 'Some cases block the Laser Auto Focus sensor (the small black dot near the lens).' },
      { id: 's3', title: 'Tap to Focus', description: 'Manually tap the subject on the screen to force the camera to lock focus.' }
    ],
    technicianAdvice: 'If you hear a buzzing sound from the camera, the Optical Image Stabilization (OIS) is likely broken.',
    relatedProblemIds: ['p560002', 'p560003'],
    createdAt: '2025-10-26T08:00:00Z'
  },
  {
    id: 'p560002',
    title: 'Smartphone Camera App "Black Screen"',
    slug: 'smartphone-camera-black-screen',
    shortDescription: 'The camera app opens, but the viewfinder is completely black.',
    category: 'phone',
    subcategory: 'Camera',
    symptoms: ['Black viewfinder', 'App crash', 'Flashlight unavailable'],
    causes: ['Software conflict', 'Camera module disconnected', 'Privacy setting'],
    steps: [
      { id: 's1', title: 'Force Close Camera App', description: 'Swipe up to kill the app and restart it.' },
      { id: 's2', title: 'Test Front vs Rear', description: 'Switch to the selfie camera. If it works, only the rear module is faulty.' },
      { id: 's3', title: 'Restart Phone', description: 'Clears any system-level camera service hangs.' }
    ],
    technicianAdvice: 'If the flashlight icon is grayed out, the system cannot communicate with the camera hardware at all.',
    relatedProblemIds: ['p560001', 'p560004'],
    createdAt: '2025-10-26T09:00:00Z'
  },
  // --- Laptop: Power & Battery ---
  {
    id: 'p570001',
    title: 'Laptop Shutting Down at 20-30% Battery',
    slug: 'laptop-shutting-down-early-battery',
    shortDescription: 'The laptop dies suddenly even though the battery indicator says it has charge left.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Sudden shutdown', 'Inaccurate percentage', 'Fast drain'],
    causes: ['Unbalanced battery cells', 'Calibration error', 'Old battery'],
    steps: [
      { id: 's1', title: 'Calibrate the Battery', description: 'Charge to 100%, leave it for 2 hours, drain to 0%, then charge back to 100%.' },
      { id: 's2', title: 'Check Battery Report', description: 'In Windows, run "powercfg /batteryreport" to see the "Design Capacity" vs "Full Charge Capacity".' },
      { id: 's3', title: 'Update BIOS', description: 'Manufacturers often release updates to improve battery management accuracy.' }
    ],
    technicianAdvice: 'If your "Full Charge Capacity" is less than 50% of "Design Capacity", the battery is worn out.',
    relatedProblemIds: ['p570002', 'p570003'],
    createdAt: '2025-10-27T08:00:00Z'
  },
  {
    id: 'p570002',
    title: 'Laptop AC Adapter Getting Extremely Hot',
    slug: 'laptop-ac-adapter-hot',
    shortDescription: 'The power brick is too hot to touch while charging the laptop.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Hot power brick', 'Smell of burning plastic', 'Charging stops'],
    causes: ['Undersized adapter', 'Poor ventilation', 'Internal short'],
    steps: [
      { id: 's1', title: 'Improve Ventilation', description: 'Don\'t leave the power brick on a bed or carpet; keep it on a hard surface.' },
      { id: 's2', title: 'Check Wattage', description: 'Ensure you are using the original charger or one with the correct wattage (e.g., 65W, 90W).' },
      { id: 's3', title: 'Inspect Cable', description: 'Look for frays or kinks that might be causing electrical resistance.' }
    ],
    technicianAdvice: 'A warm adapter is normal; an adapter that burns your skin is a fire hazard.',
    relatedProblemIds: ['p570001', 'p570004'],
    createdAt: '2025-10-27T09:00:00Z'
  },
  // --- Internet: WiFi & Range ---
  {
    id: 'p580001',
    title: 'WiFi Signal Dropping When Microwave is On',
    slug: 'wifi-dropping-microwave-interference',
    shortDescription: 'The internet disconnects or slows down every time someone uses the microwave oven.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Connection drops', 'Slow speed', 'Interference'],
    causes: ['2.4GHz frequency overlap', 'Poorly shielded microwave'],
    steps: [
      { id: 's1', title: 'Switch to 5GHz WiFi', description: '5GHz is not affected by microwave interference.' },
      { id: 's2', title: 'Move Router Away', description: 'Ensure the router is at least 10 feet away from the kitchen.' },
      { id: 's3', title: 'Change 2.4GHz Channel', description: 'Try channel 1, 6, or 11 to find one with less interference.' }
    ],
    technicianAdvice: 'Microwaves operate at 2.45GHz, which is exactly the same frequency as standard WiFi.',
    relatedProblemIds: ['p580002', 'p580003'],
    createdAt: '2025-10-28T08:00:00Z'
  },
  {
    id: 'p580002',
    title: 'WiFi "Hidden Network" Not Connecting',
    slug: 'wifi-hidden-network-not-connecting',
    shortDescription: 'You manually enter the SSID and password for a hidden network, but it fails to connect.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Connection failed', 'Network not found', 'Authentication error'],
    causes: ['Typo in SSID', 'Wrong security type (WPA2 vs WPA3)', 'MAC filtering'],
    steps: [
      { id: 's1', title: 'Check SSID Spelling', description: 'Hidden networks are case-sensitive and must be exact.' },
      { id: 's2', title: 'Unhide Network Temporarily', description: 'Make the SSID visible in router settings, connect, then hide it again.' },
      { id: 's3', title: 'Check Security Protocol', description: 'Ensure you selected the correct encryption (e.g., WPA2-Personal).' }
    ],
    technicianAdvice: 'Hiding your SSID provides almost zero security and often causes connection headaches.',
    relatedProblemIds: ['p580001', 'p580004'],
    createdAt: '2025-10-28T09:00:00Z'
  },
  // --- App: Notifications & Alerts ---
  {
    id: 'p590001',
    title: 'App Notifications Delayed by Hours',
    slug: 'app-notifications-delayed',
    shortDescription: 'You receive a message or alert, but the notification only appears on your phone much later.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Late alerts', 'Out of order messages', 'Missed calls'],
    causes: ['Battery optimization (Doze)', 'Slow data connection', 'App server delay'],
    steps: [
      { id: 's1', title: 'Disable Battery Optimization', description: 'Settings > Apps > [App Name] > Battery > Unrestricted.' },
      { id: 's2', title: 'Check "Do Not Disturb" Schedule', description: 'Ensure your phone isn\'t silencing alerts during specific hours.' },
      { id: 's3', title: 'Enable Background Data', description: 'Ensure the app is allowed to use data even when not in use.' }
    ],
    technicianAdvice: 'Android\'s "Doze" mode is the most common cause of delayed notifications.',
    relatedProblemIds: ['p590002', 'p590003'],
    createdAt: '2025-10-29T08:00:00Z'
  },
  {
    id: 'p590002',
    title: 'App Notification Sound Not Working (Vibrate Only)',
    slug: 'app-notification-sound-not-working',
    shortDescription: 'The phone vibrates for a notification, but no sound is played even if the volume is up.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Silent alerts', 'Vibration only', 'Missed notifications'],
    causes: ['App-specific sound setting', 'Focus mode active', 'Bluetooth headset connected'],
    steps: [
      { id: 's1', title: 'Check App Notification Settings', description: 'Settings > Notifications > [App Name] > Ensure "Sound" is toggled ON.' },
      { id: 's2', title: 'Check Mute Switch', description: 'Ensure the physical silent switch (on iPhone) or "Do Not Disturb" is OFF.' },
      { id: 's3', title: 'Disconnect Bluetooth', description: 'The sound might be playing through a forgotten Bluetooth speaker in another room.' }
    ],
    technicianAdvice: 'Many apps have their own internal notification settings that override system settings.',
    relatedProblemIds: ['p590001', 'p590004'],
    createdAt: '2025-10-29T09:00:00Z'
  },
  // --- Gaming: Controllers & Input ---
  {
    id: 'p600001',
    title: 'Game Controller "Ghost Clicks" (Buttons Pressing Themselves)',
    slug: 'game-controller-ghost-clicks',
    shortDescription: 'The controller acts as if buttons are being pressed even when you aren\'t touching it.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['Random inputs', 'Menu jumping', 'Character attacking'],
    causes: ['Liquid damage', 'Worn conductive pads', 'Bluetooth interference'],
    steps: [
      { id: 's1', title: 'Clean with Contact Cleaner', description: 'Spray a little electronic contact cleaner into the button gaps.' },
      { id: 's2', title: 'Check for Sticky Buttons', description: 'Ensure no buttons are physically stuck in the "down" position.' },
      { id: 's3', title: 'Update Controller Firmware', description: 'Manufacturers often fix input glitches via software updates.' }
    ],
    technicianAdvice: 'If you spilled soda on the controller, the sugar creates a bridge that causes ghost clicks.',
    relatedProblemIds: ['p600002', 'p600003'],
    createdAt: '2025-10-30T08:00:00Z'
  },
  {
    id: 'p600002',
    title: 'Game Controller Vibration (Rumble) Not Working',
    slug: 'game-controller-vibration-not-working',
    shortDescription: 'The controller doesn\'t shake or rumble during gameplay events.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['No rumble', 'Weak vibration', 'Rattle sound'],
    causes: ['Disabled in game settings', 'Low battery mode', 'Broken rumble motor'],
    steps: [
      { id: 's1', title: 'Check Game Settings', description: 'Ensure "Vibration" or "Haptic Feedback" is enabled in the game\'s menu.' },
      { id: 's2', title: 'Charge the Controller', description: 'Many controllers disable rumble when the battery is below 10%.' },
      { id: 's3', title: 'Test in System Menu', description: 'Use the console\'s controller test tool to see if the motors spin at all.' }
    ],
    technicianAdvice: 'If you hear a rattle but no vibration, the weight has likely fallen off the motor shaft.',
    relatedProblemIds: ['p600001', 'p600004'],
    createdAt: '2025-10-30T09:00:00Z'
  }
];
