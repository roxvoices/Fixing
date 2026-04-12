import { Problem } from './types';

export const EXTRA_PROBLEMS_30: Problem[] = [
  // --- Phone: Software & System ---
  {
    id: 'p1010001',
    title: 'Phone "System Storage" Taking Up 50GB+',
    slug: 'phone-system-storage-large-size',
    shortDescription: 'The "System" or "Other" category in your storage settings is using a massive amount of space.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Storage full', 'Large "System" size', 'Slow phone'],
    causes: ['Corrupt logs', 'Cached updates', 'Database bloat'],
    steps: [
      { id: 's1', title: 'Clear App Caches', description: 'System often includes app caches in its total; clear them all.' },
      { id: 's2', title: 'Update the OS', description: 'Sometimes an update will clean up old temporary system files.' },
      { id: 's3', title: 'Factory Reset', description: 'The only way to truly "shrink" the system storage back to its original size.' }
    ],
    technicianAdvice: 'On Android, "System" often includes the "Trash" folder of your gallery and file manager.',
    relatedProblemIds: ['p1010002', 'p340002'],
    createdAt: '2025-12-10T08:00:00Z'
  },
  {
    id: 'p1010002',
    title: 'Phone "Emergency Calls Only" (With Signal Bars)',
    slug: 'phone-emergency-calls-only-signal',
    shortDescription: 'You have signal bars, but you can\'t make calls or use data; it only says "Emergency calls only".',
    category: 'phone',
    subcategory: 'Network',
    symptoms: ['No service', 'Emergency only', 'Signal bars visible'],
    causes: ['SIM card deactivated', 'IMEI blacklisted', 'Network registration error'],
    steps: [
      { id: 's1', title: 'Check with Carrier', description: 'Ensure your plan is active and your SIM hasn\'t been reported stolen.' },
      { id: 's2', title: 'Toggle Airplane Mode', description: 'Forces a fresh registration attempt with the tower.' },
      { id: 's3', title: 'Try SIM in Another Phone', description: 'If it works there, your phone\'s antenna or IMEI is the problem.' }
    ],
    technicianAdvice: 'If you bought the phone used, it might have been blacklisted by the original owner.',
    relatedProblemIds: ['p1010001', 'p510002'],
    createdAt: '2025-12-10T09:00:00Z'
  },
  // --- Laptop: Connectivity & Ports ---
  {
    id: 'p1020001',
    title: 'Laptop "USB Device Descriptor Request Failed"',
    slug: 'laptop-usb-device-descriptor-failed',
    shortDescription: 'You plug in a USB device and Windows shows an error saying it doesn\'t recognize it.',
    category: 'laptop',
    subcategory: 'Connectivity',
    symptoms: ['Error message', 'Device not working', 'Yellow triangle in Device Manager'],
    causes: ['Bad cable', 'Insufficient power', 'Driver glitch'],
    steps: [
      { id: 's1', title: 'Disable "USB Selective Suspend"', description: 'Power Options > Change plan settings > Advanced > USB settings > Disable.' },
      { id: 's2', title: 'Uninstall USB Root Hub', description: 'Device Manager > Uninstall the hub > Restart to let Windows reinstall it.' },
      { id: 's3', title: 'Try a Powered USB Hub', description: 'If the device needs more power than the laptop can give, a powered hub will fix it.' }
    ],
    technicianAdvice: 'This error often means the device is "talking" but the computer can\'t understand its "introduction".',
    relatedProblemIds: ['p1020002', 'p320001'],
    createdAt: '2025-12-11T08:00:00Z'
  },
  {
    id: 'p1020002',
    title: 'Laptop "SD Card Slot" Not Working',
    slug: 'laptop-sd-card-slot-not-working',
    shortDescription: 'You insert an SD card into the built-in slot, but nothing happens.',
    category: 'laptop',
    subcategory: 'Connectivity',
    symptoms: ['SD card not detected', 'No drive letter', 'Silent insertion'],
    causes: ['Missing Realtek/Genesys driver', 'Dirty slot', 'Locked SD card'],
    steps: [
      { id: 's1', title: 'Check the Lock Switch', description: 'Ensure the tiny slider on the side of the SD card is NOT in the "Lock" position.' },
      { id: 's2', title: 'Clean the Slot', description: 'Use compressed air to blow out any dust from the deep slot.' },
      { id: 's3', title: 'Update Card Reader Driver', description: 'Go to the laptop manufacturer\'s site and download the specific "Card Reader" driver.' }
    ],
    technicianAdvice: 'SD card slots are often the first thing to fail on a laptop due to their open design collecting dust.',
    relatedProblemIds: ['p1020001', 'p940001'],
    createdAt: '2025-12-11T09:00:00Z'
  },
  // --- Internet: WiFi & Security ---
  {
    id: 'p1030001',
    title: 'WiFi "Privacy Warning" (Private WiFi Address)',
    slug: 'wifi-privacy-warning-mac-randomization',
    shortDescription: 'Your iPhone or Android shows a "Privacy Warning" next to your home WiFi name.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Warning icon', '"Privacy Warning"', 'Connection issues'],
    causes: ['MAC Address Randomization disabled'],
    steps: [
      { id: 's1', title: 'Enable "Private WiFi Address"', description: 'WiFi Settings > [Your Network] > Toggle "Private WiFi Address" to ON.' },
      { id: 's2', title: 'Ignore for Home WiFi', description: 'If you have MAC filtering on your router, you might NEED to keep this off.' },
      { id: 's3', title: 'Restart WiFi', description: 'After toggling, turn WiFi off and on to apply the new virtual MAC.' }
    ],
    technicianAdvice: 'This warning just means your phone is using its "real" hardware ID, which makes it easier to track across different networks.',
    relatedProblemIds: ['p1030002', 'p250002'],
    createdAt: '2025-12-12T08:00:00Z'
  },
  {
    id: 'p1030002',
    title: 'WiFi "Connected, No Internet" (DNS Probe Finished)',
    slug: 'wifi-connected-no-internet-dns-probe',
    shortDescription: 'You are connected to WiFi, but websites won\'t load and you see a "DNS_PROBE_FINISHED" error.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['No internet', 'DNS error', 'Apps not working'],
    causes: ['ISP DNS outage', 'Wrong DNS settings', 'Firewall block'],
    steps: [
      { id: 's1', title: 'Change DNS to 8.8.8.8', description: 'Manually set your DNS to Google (8.8.8.8) or Cloudflare (1.1.1.1).' },
      { id: 's2', title: 'Flush DNS Cache', description: 'Command Prompt > "ipconfig /flushdns".' },
      { id: 's3', title: 'Restart Modem', description: 'Forces a fresh connection to your ISP\'s DNS servers.' }
    ],
    technicianAdvice: 'DNS is the "phonebook" of the internet; if it\'s broken, your computer knows the name but not the "number" of the site.',
    relatedProblemIds: ['p1030001', 'p770001'],
    createdAt: '2025-12-12T09:00:00Z'
  },
  // --- App: Functionality & UI ---
  {
    id: 'p1040001',
    title: 'App "Dark Mode" Not Working',
    slug: 'app-dark-mode-not-working',
    shortDescription: 'Your system is in dark mode, but the app stays bright white.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Bright UI', 'Settings ignored', 'Eye strain'],
    causes: ['App doesn\'t support dark mode', 'Internal app setting overrides system', 'Old app version'],
    steps: [
      { id: 's1', title: 'Check App-Specific Settings', description: 'Look for "Theme" or "Appearance" inside the app\'s own settings menu.' },
      { id: 's2', title: 'Force Dark Mode (Android)', description: 'Developer Options > Override force-dark (Warning: can make some apps look weird).' },
      { id: 's3', title: 'Update the App', description: 'Many older apps only added dark mode support recently.' }
    ],
    technicianAdvice: 'Not all apps follow the system-wide dark mode toggle; some require manual activation.',
    relatedProblemIds: ['p1040002', 'p170001'],
    createdAt: '2025-12-13T08:00:00Z'
  },
  {
    id: 'p1040002',
    title: 'App "Keyboard" Not Appearing',
    slug: 'app-keyboard-not-appearing',
    shortDescription: 'You tap on a text field, but the on-screen keyboard doesn\'t pop up.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Cannot type', 'No keyboard', 'Frozen input'],
    causes: ['System UI hang', 'Third-party keyboard crash (Gboard/SwiftKey)', 'Bluetooth keyboard connected'],
    steps: [
      { id: 's1', title: 'Disconnect Bluetooth', description: 'If a Bluetooth keyboard is connected, the on-screen one is disabled.' },
      { id: 's2', title: 'Switch to Default Keyboard', description: 'If using Gboard, try switching back to the "Samsung" or "Apple" default.' },
      { id: 's3', title: 'Restart the Phone', description: 'The fastest way to reset the keyboard service.' }
    ],
    technicianAdvice: 'Sometimes the "Keyboard" process crashes in the background and needs a restart.',
    relatedProblemIds: ['p1040001', 'p410002'],
    createdAt: '2025-12-13T09:00:00Z'
  },
  // --- Gaming: Performance & Graphics ---
  {
    id: 'p1050001',
    title: 'Game "Resolution" Stuck (Cannot change)',
    slug: 'game-resolution-stuck',
    shortDescription: 'The game is locked at a low resolution and the dropdown menu is grayed out.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Blurry graphics', 'Grayed out settings', 'Wrong aspect ratio'],
    causes: ['"Windowed Borderless" mode', 'Windows Scaling (DPI)', 'Incompatible monitor'],
    steps: [
      { id: 's1', title: 'Switch to "Fullscreen"', description: 'Many games only allow resolution changes in "Exclusive Fullscreen" mode.' },
      { id: 's2', title: 'Disable DPI Scaling', description: 'Right-click Game.exe > Compatibility > Change high DPI settings > Override.' },
      { id: 's3', title: 'Edit Config File', description: 'Go to the game\'s "Settings.ini" file and manually type in your resolution.' }
    ],
    technicianAdvice: 'Windows "Display Scaling" (e.g., 150%) often confuses older games.',
    relatedProblemIds: ['p1050002', 'p350001'],
    createdAt: '2025-12-14T08:00:00Z'
  },
  {
    id: 'p1050002',
    title: 'Game "Input Lag" (Delay between click and action)',
    slug: 'game-input-lag-delay',
    shortDescription: 'You move the mouse or press a key, but the game reacts a fraction of a second later.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Floaty mouse', 'Delayed actions', 'Hard to aim'],
    causes: ['V-Sync enabled', 'Bluetooth latency', 'TV "Cinema" mode'],
    steps: [
      { id: 's1', title: 'Disable V-Sync', description: 'V-Sync adds significant input lag; use G-Sync or FreeSync instead.' },
      { id: 's2', title: 'Use Wired Mouse/Controller', description: 'Eliminates Bluetooth wireless latency.' },
      { id: 's3', title: 'Enable "Game Mode" on TV', description: 'Turns off all TV post-processing to reduce lag.' }
    ],
    technicianAdvice: 'Input lag is the "time" it takes for your action to reach the screen; it\'s different from "Network Lag" (Ping).',
    relatedProblemIds: ['p1050001', 'p180001'],
    createdAt: '2025-12-14T09:00:00Z'
  }
];
