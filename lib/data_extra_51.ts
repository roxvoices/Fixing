import { Problem } from './types';

export const EXTRA_PROBLEMS_51: Problem[] = [
  // --- Phone: Hardware & Sensors ---
  {
    id: 'p2060001',
    title: 'Phone "Compass" is Inaccurate',
    slug: 'phone-compass-inaccurate',
    shortDescription: 'Google Maps shows you facing the wrong direction, or the "blue beam" is very wide.',
    category: 'phone',
    subcategory: 'Hardware',
    symptoms: ['Wrong direction', 'Spinning map', 'Calibration required'],
    causes: ['Magnetic interference (case)', 'Nearby metal objects', 'Sensor calibration lost'],
    steps: [
      { id: 's1', title: 'The "Figure 8" Motion', description: 'Move your phone in a large figure-8 pattern in the air for 30 seconds.' },
      { id: 's2', title: 'Remove Magnetic Case', description: 'Cases with magnets (for car mounts or wallets) will completely break the compass.' },
      { id: 's3', title: 'Calibrate in Google Maps', description: 'Tap the blue dot > Calibrate > Use Live View (AR) to fix orientation.' }
    ],
    technicianAdvice: 'The magnetometer is extremely sensitive; even a small magnet in a flip-cover case will make it useless.',
    relatedProblemIds: ['p2060002', 'p100001'],
    createdAt: '2026-03-25T08:00:00Z'
  },
  {
    id: 'p2060002',
    title: 'Phone "Step Counter" is Not Counting',
    slug: 'phone-step-counter-not-counting',
    shortDescription: 'Your health app shows zero steps even after a long walk.',
    category: 'phone',
    subcategory: 'Hardware',
    symptoms: ['Zero steps', 'Inaccurate distance', 'Activity not tracked'],
    causes: ['Motion permissions disabled', 'Power saving mode', 'Accelerometer glitch'],
    steps: [
      { id: 's1', title: 'Enable "Motion & Fitness"', description: 'Settings > Privacy > Motion & Fitness > Ensure "Fitness Tracking" is ON.' },
      { id: 's2', title: 'Disable Battery Saver', description: 'Low power modes often disable the low-power motion co-processor.' },
      { id: 's3', title: 'Check "Physical Activity" Permission (Android)', description: 'Settings > Apps > [Health App] > Permissions > Physical Activity.' }
    ],
    technicianAdvice: 'Phones use a dedicated low-power chip for steps; if this chip hangs, a simple restart usually fixes it.',
    relatedProblemIds: ['p2060001', 'p1410001'],
    createdAt: '2026-03-25T09:00:00Z'
  },
  // --- Laptop: Hardware & Maintenance ---
  {
    id: 'p2070001',
    title: 'Laptop "Screen" has a Pink/Purple Tint',
    slug: 'laptop-screen-pink-purple-tint',
    shortDescription: 'The entire display looks pinkish or purple, especially on white backgrounds.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Discolored screen', 'Pink hue', 'Flickering colors'],
    causes: ['Loose display cable (EDP)', 'Failing GPU', 'Damaged LCD panel'],
    steps: [
      { id: 's1', title: 'Wiggle the Lid', description: 'If the color changes when you move the screen, the internal ribbon cable is loose or frayed.' },
      { id: 's2', title: 'Connect to External Monitor', description: 'If the external monitor looks fine, your laptop screen or cable is the problem.' },
      { id: 's3', title: 'Disable "Night Light"', description: 'Ensure a software filter isn\'t causing the warm/pink tint.' }
    ],
    technicianAdvice: 'A pink tint often means the "Green" signal in the RGB cable is missing or weak.',
    relatedProblemIds: ['p2070002', 'p1670002'],
    createdAt: '2026-03-26T08:00:00Z'
  },
  {
    id: 'p2070002',
    title: 'Laptop "Webcam" Light is Always On',
    slug: 'laptop-webcam-light-always-on',
    shortDescription: 'The small LED next to your camera is glowing, even when you aren\'t using any video apps.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['LED stays on', 'Privacy concern', 'Camera in use'],
    causes: ['Background app (e.g., browser tab)', 'Malware', 'Driver glitch'],
    steps: [
      { id: 's1', title: 'Check Browser Permissions', description: 'Ensure no open website has active permission to use the camera.' },
      { id: 's2', title: 'Check Privacy Settings', description: 'Settings > Privacy > Camera. See which apps have "Recently Accessed" the camera.' },
      { id: 's3', title: 'Disable Camera in Device Manager', description: 'A temporary fix to ensure privacy until you find the culprit.' }
    ],
    technicianAdvice: 'If the light is on, the camera is receiving power. This is a hardware-wired safety feature in most laptops.',
    relatedProblemIds: ['p2070001', 'p1770002'],
    createdAt: '2026-03-26T09:00:00Z'
  },
  // --- Internet: WiFi & Connectivity ---
  {
    id: 'p2080001',
    title: 'WiFi "Connected" but "No Internet" on One Device',
    slug: 'wifi-connected-no-internet-single-device',
    shortDescription: 'Your phone and TV work fine, but your laptop says "No Internet" on the same WiFi.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Single device failure', 'Signal present', 'No web access'],
    causes: ['IP address conflict', 'Static IP set incorrectly', 'Parental controls'],
    steps: [
      { id: 's1', title: 'Forget and Reconnect', description: 'Clears any bad DHCP (IP) assignments.' },
      { id: 's2', title: 'Set to "Obtain IP Automatically"', description: 'Ensure your network adapter isn\'t trying to use a hardcoded IP address.' },
      { id: 's3', title: 'Check Router Access List', description: 'Ensure that specific device hasn\'t been "paused" or blocked in the router app.' }
    ],
    technicianAdvice: 'If other devices work, the router and modem are fine; the issue is 100% on the failing device.',
    relatedProblemIds: ['p2080002', 'p1830001'],
    createdAt: '2026-03-27T08:00:00Z'
  },
  {
    id: 'p2080002',
    title: 'WiFi "Signal" Drops When Microwave is On',
    slug: 'wifi-drops-microwave-interference',
    shortDescription: 'Every time you heat up food, the internet in the kitchen cuts out completely.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Intermittent drops', 'Microwave-dependent', '2.4GHz only'],
    causes: ['Leaky microwave shielding', 'Frequency overlap (2.4GHz)'],
    steps: [
      { id: 's1', title: 'Switch to 5GHz WiFi', description: 'Microwaves only interfere with 2.4GHz signals.' },
      { id: 's2', title: 'Move the Router', description: 'Ensure the router isn\'t sitting directly next to or behind the microwave.' },
      { id: 's3', title: 'Replace the Microwave', description: 'If it\'s leaking enough radiation to kill WiFi, it might have a faulty door seal.' }
    ],
    technicianAdvice: 'Microwaves operate at 2.45GHz, which is exactly where most WiFi lives. A "leaky" microwave is a massive jammer.',
    relatedProblemIds: ['p2080001', 'p1880001'],
    createdAt: '2026-03-27T09:00:00Z'
  },
  // --- App: Functionality & UI ---
  {
    id: 'p2090001',
    title: 'App "Store" Stuck on "Waiting..."',
    slug: 'app-store-stuck-waiting',
    shortDescription: 'You try to download an app, but the icon just sits there saying "Waiting" or "Pending" forever.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Download stuck', 'No progress', 'Grayed out icon'],
    causes: ['App Store server lag', 'Storage full', 'Network switch glitch'],
    steps: [
      { id: 's1', title: 'Pause and Resume', description: 'Tap the icon to stop, then tap again to restart the download.' },
      { id: 's2', title: 'Sign Out of App Store', description: 'Settings > [Name] > Media & Purchases > Sign Out, then sign back in.' },
      { id: 's3', title: 'Check Storage Space', description: 'If you have less than 1GB free, the store might refuse to start the download.' }
    ],
    technicianAdvice: 'Sometimes the "download queue" gets stuck; restarting the phone usually clears the blockage.',
    relatedProblemIds: ['p2090002', 'p1410002'],
    createdAt: '2026-03-28T08:00:00Z'
  },
  {
    id: 'p2090002',
    title: 'App "Links" Opening in Browser Instead of App',
    slug: 'app-links-opening-in-browser',
    shortDescription: 'You click a YouTube or Instagram link, but it opens in Safari/Chrome instead of the app.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Wrong app opening', 'Browser redirect', 'Deep linking failure'],
    causes: ['"Open by default" disabled', 'Browser setting', 'App not installed'],
    steps: [
      { id: 's1', title: 'Long Press the Link', description: 'On some phones, long-pressing gives you the option to "Open in App".' },
      { id: 's2', title: 'Check "Open Supported Links" (Android)', description: 'Settings > Apps > [App Name] > Set as default > Open supported links.' },
      { id: 's3', title: 'Reinstall the App', description: 'Forces the system to re-register the "Deep Link" protocols.' }
    ],
    technicianAdvice: 'This is often caused by accidentally tapping "Always open in browser" once in the past.',
    relatedProblemIds: ['p2090001', 'p1410001'],
    createdAt: '2026-03-28T09:00:00Z'
  },
  // --- Gaming: Performance & Software ---
  {
    id: 'p2100001',
    title: 'Game "Controller" Detected as Mouse',
    slug: 'game-controller-detected-as-mouse',
    shortDescription: 'Your Xbox/PS5 controller moves the mouse cursor instead of controlling the character.',
    category: 'gaming',
    subcategory: 'Software',
    symptoms: ['Cursor moving', 'Buttons doing weird things', 'Game doesn\'t see controller'],
    causes: ['Steam "Desktop Configuration"', 'Overlay conflict'],
    steps: [
      { id: 's1', title: 'Disable Steam Desktop Layout', description: 'Steam > Settings > Controller > Desktop Layout > Edit > Disable.' },
      { id: 's2', title: 'Close Background Remappers', description: 'Ensure apps like DS4Windows or JoyToKey aren\'t running.' },
      { id: 's3', title: 'Unplug Other USB Devices', description: 'Sometimes a flight stick or racing wheel can conflict with the gamepad.' }
    ],
    technicianAdvice: 'Steam has a feature that lets you use a controller to browse the web; it often stays active even when a game is running.',
    relatedProblemIds: ['p2100002', 'p1850001'],
    createdAt: '2026-03-29T08:00:00Z'
  },
  {
    id: 'p2100002',
    title: 'Game "Resolution" is Locked (Grayed out)',
    slug: 'game-resolution-locked',
    shortDescription: 'You want to change the game to 1080p, but the setting is grayed out and stuck on something else.',
    category: 'gaming',
    subcategory: 'Software',
    symptoms: ['Cannot change resolution', 'Grayed out menu', 'Wrong aspect ratio'],
    causes: ['Windowed mode limitation', 'Windows "Display Scaling"', 'GPU driver lock'],
    steps: [
      { id: 's1', title: 'Switch to "Fullscreen"', description: 'Many games only allow resolution changes in exclusive Fullscreen mode.' },
      { id: 's2', title: 'Disable "DSR" or "VSR"', description: 'In NVIDIA/AMD settings, turn off "Super Resolution" features.' },
      { id: 's3', title: 'Edit Config File', description: 'Advanced: Find the game\'s .ini or .cfg file and manually type the resolution.' }
    ],
    technicianAdvice: 'If your Windows scaling is set to 150%, some games get confused and lock the resolution to match.',
    relatedProblemIds: ['p2100001', 'p2000002'],
    createdAt: '2026-03-29T09:00:00Z'
  }
];
