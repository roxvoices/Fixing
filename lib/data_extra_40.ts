import { Problem } from './types';

export const EXTRA_PROBLEMS_40: Problem[] = [
  // --- Phone: Software & System ---
  {
    id: 'p1510001',
    title: 'Phone "Keyboard" is Laggy',
    slug: 'phone-keyboard-laggy',
    shortDescription: 'You type a word, and the letters appear on the screen a second later.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Typing delay', 'Stuttering', 'Missed letters'],
    causes: ['Low system memory', 'Dictionary/Autocorrect bloat', 'App conflict'],
    steps: [
      { id: 's1', title: 'Clear Keyboard Cache', description: 'Settings > Apps > [Keyboard Name] > Storage > Clear Cache.' },
      { id: 's2', title: 'Reset Dictionary', description: 'Remove all learned words that might be slowing down the prediction engine.' },
      { id: 's3', title: 'Disable Haptic Feedback', description: 'Turning off vibration for every keypress can reduce lag on older phones.' }
    ],
    technicianAdvice: 'If you use a third-party keyboard like Gboard or SwiftKey, try switching back to the system default to see if it\'s faster.',
    relatedProblemIds: ['p1510002', 'p1040002'],
    createdAt: '2026-01-29T08:00:00Z'
  },
  {
    id: 'p1510002',
    title: 'Phone "Screen" is Yellowish (Night Shift)',
    slug: 'phone-screen-yellowish',
    shortDescription: 'The screen looks warm or yellow instead of crisp white.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Yellow tint', 'Warm colors', 'Dim screen'],
    causes: ['Night Shift / Blue Light Filter enabled', 'True Tone (iOS)', 'Damaged backlight'],
    steps: [
      { id: 's1', title: 'Disable Blue Light Filter', description: 'Check your quick settings for "Night Shift", "Eye Comfort", or "Blue Light Filter".' },
      { id: 's2', title: 'Turn Off "True Tone"', description: 'On iPhone, go to Display & Brightness and toggle True Tone OFF.' },
      { id: 's3', title: 'Check Color Correction', description: 'Settings > Accessibility > Visibility > Color Correction > Ensure it is OFF.' }
    ],
    technicianAdvice: 'If the yellow tint is only in one corner, it might be a hardware issue with the adhesive or backlight.',
    relatedProblemIds: ['p1510001', 'p460001'],
    createdAt: '2026-01-29T09:00:00Z'
  },
  // --- Laptop: Hardware & Cooling ---
  {
    id: 'p1520001',
    title: 'Laptop "Shutting Down" Randomly',
    slug: 'laptop-shutting-down-randomly',
    shortDescription: 'The laptop just turns off instantly, like the power was cut, without any warning.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Instant shutdown', 'No error message', 'Heat'],
    causes: ['Overheating', 'Failing battery', 'Motherboard short'],
    steps: [
      { id: 's1', title: 'Check Temperatures', description: 'Use a tool like HWMonitor to see if the CPU is hitting 90-100°C.' },
      { id: 's2', title: 'Test Without Battery', description: 'If the laptop stays on while plugged in but dies with the battery, the battery is faulty.' },
      { id: 's3', title: 'Clean the Fans', description: 'Ensure the cooling system isn\'t blocked by dust.' }
    ],
    technicianAdvice: 'Sudden shutdowns are almost always a safety feature triggered by extreme heat.',
    relatedProblemIds: ['p1520002', 'p230001'],
    createdAt: '2026-01-30T08:00:00Z'
  },
  {
    id: 'p1520002',
    title: 'Laptop "Keyboard" Backlight Not Working',
    slug: 'laptop-keyboard-backlight-not-working',
    shortDescription: 'The keys don\'t light up in the dark, making it hard to type.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['No lights', 'Keys dark', 'Toggle doesn\'t work'],
    causes: ['Disabled via Fn key', 'Ambient light sensor', 'Loose ribbon cable'],
    steps: [
      { id: 's1', title: 'Check the Function Key', description: 'Look for a sun or keyboard icon on the F-keys (e.g., Fn + F5).' },
      { id: 's2', title: 'Check Control Center', description: 'In Windows, check the manufacturer\'s app (e.g., Alienware Command Center).' },
      { id: 's3', title: 'Check in Dark Room', description: 'Some laptops only turn on the backlight if the room is dark.' }
    ],
    technicianAdvice: 'If you recently spilled liquid, the backlight circuit is often the first thing to short out.',
    relatedProblemIds: ['p1520001', 'p420001'],
    createdAt: '2026-01-30T09:00:00Z'
  },
  // --- Internet: WiFi & Speed ---
  {
    id: 'p1530001',
    title: 'WiFi "Slow" Only on One Device',
    slug: 'wifi-slow-single-device',
    shortDescription: 'Your phone is fast, but your laptop is extremely slow on the same WiFi network.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Slow speed', 'Buffering', 'Single device affected'],
    causes: ['Old WiFi hardware (802.11n)', 'Driver issue', 'VPN active'],
    steps: [
      { id: 's1', title: 'Disable VPN', description: 'A slow VPN server will bottleneck your entire connection.' },
      { id: 's2', title: 'Update WiFi Drivers', description: 'Ensure your laptop has the latest network card software.' },
      { id: 's3', title: 'Check for "Metered Connection"', description: 'Windows might be limiting bandwidth if it thinks you are on a data cap.' }
    ],
    technicianAdvice: 'If the device is old, it might only support 2.4GHz, which is much slower than modern 5GHz or 6GHz WiFi.',
    relatedProblemIds: ['p1530002', 'p160001'],
    createdAt: '2026-01-31T08:00:00Z'
  },
  {
    id: 'p1530002',
    title: 'WiFi "IP Address" Conflict',
    slug: 'wifi-ip-address-conflict',
    shortDescription: 'An error says "Another device on this network has the same IP address".',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['No internet', 'Error message', 'Disconnects'],
    causes: ['Static IP mismatch', 'Router DHCP error'],
    steps: [
      { id: 's1', title: 'Restart the Router', description: 'Forces the router to re-assign IP addresses to all devices.' },
      { id: 's2', title: 'Set to "Obtain IP Automatically"', description: 'Ensure your device isn\'t trying to use a specific manual IP.' },
      { id: 's3', title: 'Renew IP Lease', description: 'On PC: "ipconfig /release" then "ipconfig /renew".' }
    ],
    technicianAdvice: 'This usually happens when a device with a "Static IP" joins a network where that "number" is already taken.',
    relatedProblemIds: ['p1530001', 'p580002'],
    createdAt: '2026-01-31T09:00:00Z'
  },
  // --- App: Functionality & UI ---
  {
    id: 'p1540001',
    title: 'App "Text" is Too Small to Read',
    slug: 'app-text-too-small',
    shortDescription: 'The writing in the app is tiny and there is no setting to change it.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Small text', 'Eye strain', 'Hard to read'],
    causes: ['System DPI settings', 'App doesn\'t support dynamic type'],
    steps: [
      { id: 's1', title: 'Increase System Font Size', description: 'Settings > Display > Font Size / Display Size.' },
      { id: 's2', title: 'Use "Magnification" Gesture', description: 'Enable accessibility shortcuts to zoom in on any part of the screen.' },
      { id: 's3', title: 'Check App Accessibility', description: 'Some apps have their own "Text Size" slider in their settings.' }
    ],
    technicianAdvice: 'Many older apps use "fixed" pixel sizes for text, which looks tiny on modern high-resolution screens.',
    relatedProblemIds: ['p1540002', 'p1440001'],
    createdAt: '2026-02-01T08:00:00Z'
  },
  {
    id: 'p1540002',
    title: 'App "Ads" are Intrusive',
    slug: 'app-ads-intrusive',
    shortDescription: 'The app is full of pop-ups and video ads that make it impossible to use.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Pop-up ads', 'Video ads', 'Slow app'],
    causes: ['Free version of app', 'Adware infection'],
    steps: [
      { id: 's1', title: 'Purchase "Pro" Version', description: 'Most apps offer a one-time payment to remove ads.' },
      { id: 's2', title: 'Use a DNS Ad-Blocker', description: 'Set your phone\'s Private DNS to "dns.adguard.com".' },
      { id: 's3', title: 'Check for Malware', description: 'If you see ads on your home screen, you have a malicious app installed.' }
    ],
    technicianAdvice: 'If an app is free, you are the product; ads are how the developer pays for the servers.',
    relatedProblemIds: ['p1540001', 'p440001'],
    createdAt: '2026-02-01T09:00:00Z'
  },
  // --- Gaming: Performance & Software ---
  {
    id: 'p1550001',
    title: 'Game "Crashing" to Desktop (No Error)',
    slug: 'game-crashing-to-desktop-no-error',
    shortDescription: 'You are playing and suddenly you are back at your desktop with the game closed.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Instant close', 'No error message', 'Back to desktop'],
    causes: ['VRAM limit reached', 'Unstable overclock', 'Background app conflict'],
    steps: [
      { id: 's1', title: 'Disable Overclocks', description: 'Reset your GPU and CPU to factory speeds.' },
      { id: 's2', title: 'Check Event Viewer', description: 'Windows > Event Viewer > Windows Logs > Application. Look for "Error" at the time of crash.' },
      { id: 's3', title: 'Increase Page File Size', description: 'Ensure Windows has enough virtual memory for large games.' }
    ],
    technicianAdvice: 'Crashing without an error is often a "silent" driver crash where the GPU driver resets itself.',
    relatedProblemIds: ['p1550002', 'p180002'],
    createdAt: '2026-02-02T08:00:00Z'
  },
  {
    id: 'p1550002',
    title: 'Game "Controller" Not Working on PC',
    slug: 'game-controller-not-working-pc',
    shortDescription: 'You plug in your Xbox or PS5 controller, but the game doesn\'t respond to it.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['No input', 'Wrong buttons', 'Controller not found'],
    causes: ['Steam Input conflict', 'Missing drivers', 'Game doesn\'t support controller'],
    steps: [
      { id: 's1', title: 'Enable Steam Input', description: 'Steam > Settings > Controller > Enable support for your specific controller.' },
      { id: 's2', title: 'Use "DS4Windows"', description: 'If using a PlayStation controller on a non-Steam game, you may need this emulator.' },
      { id: 's3', title: 'Try a Different USB Port', description: 'Ensure the port is providing enough power.' }
    ],
    technicianAdvice: 'Many older PC games only support "XInput" (Xbox controllers); PlayStation controllers need software to "pretend" to be Xbox ones.',
    relatedProblemIds: ['p1550001', 'p270002'],
    createdAt: '2026-02-02T09:00:00Z'
  }
];
