import { Problem } from './types';

export const EXTRA_PROBLEMS_38: Problem[] = [
  // --- Phone: Software & System ---
  {
    id: 'p1410001',
    title: 'Phone "App Icons" Disappeared',
    slug: 'phone-app-icons-disappeared',
    shortDescription: 'You know the app is installed, but the icon is missing from your home screen and app drawer.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Missing icons', 'Cannot find app', 'Search works but no icon'],
    causes: ['Launcher glitch', 'App hidden in settings', 'Corrupt icon cache'],
    steps: [
      { id: 's1', title: 'Restart the Launcher', description: 'On Android, force stop your launcher app (e.g., Pixel Launcher).' },
      { id: 's2', title: 'Check "Hidden Apps"', description: 'Look in your launcher settings for a "Hide Apps" folder.' },
      { id: 's3', title: 'Reset Home Screen Layout', description: 'Settings > Home Screen > Reset (Warning: will remove your folders).' }
    ],
    technicianAdvice: 'Sometimes an app update fails to refresh the icon, leaving it "invisible" to the system.',
    relatedProblemIds: ['p1410002', 'p1090001'],
    createdAt: '2026-01-19T08:00:00Z'
  },
  {
    id: 'p1410002',
    title: 'Phone "Screen" Won\'t Rotate',
    slug: 'phone-screen-wont-rotate',
    shortDescription: 'You turn the phone sideways to watch a video, but the screen stays in portrait mode.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['No rotation', 'Stuck in portrait', 'Accelerometer failed'],
    causes: ['Rotation lock enabled', 'Accelerometer hang', 'App-specific restriction'],
    steps: [
      { id: 's1', title: 'Check Rotation Lock', description: 'Swipe down for quick settings and ensure "Auto-rotate" is ON.' },
      { id: 's2', title: 'Calibrate Sensors', description: 'Use a "Sensor Test" app to see if the accelerometer is responding.' },
      { id: 's3', title: 'Restart the Phone', description: 'The fastest way to reset the sensor drivers.' }
    ],
    technicianAdvice: 'If the screen won\'t rotate in any app (including the calculator), the physical accelerometer might be broken.',
    relatedProblemIds: ['p1410001', 'p910002'],
    createdAt: '2026-01-19T09:00:00Z'
  },
  // --- Laptop: Hardware & Ports ---
  {
    id: 'p1420001',
    title: 'Laptop "Headphone Jack" Broken (Tip stuck inside)',
    slug: 'laptop-headphone-jack-tip-stuck',
    shortDescription: 'The metal tip of a headphone plug snapped off and is now stuck deep inside the laptop jack.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Jack blocked', 'No internal sound', 'Broken plug'],
    causes: ['Physical force', 'Cheap headphone plug'],
    steps: [
      { id: 's1', title: 'Use the "GripStick" Tool', description: 'A specialized professional tool designed to pull out broken tips.' },
      { id: 's2', title: 'The "Ink Tube" Trick', description: 'Advanced: Use a tiny drop of superglue on the end of an empty pen ink tube (be extremely careful).' },
      { id: 's3', title: 'Replace the Audio Board', description: 'If you can\'t pull it out, the entire jack component must be replaced.' }
    ],
    technicianAdvice: 'If a tip is stuck, the laptop thinks headphones are plugged in and will silence the internal speakers.',
    relatedProblemIds: ['p1420002', 'p400001'],
    createdAt: '2026-01-20T08:00:00Z'
  },
  {
    id: 'p1420002',
    title: 'Laptop "Ethernet Port" Not Working',
    slug: 'laptop-ethernet-port-not-working',
    shortDescription: 'You plug in a network cable, but the laptop stays on WiFi or says "Cable Unplugged".',
    category: 'laptop',
    subcategory: 'Connectivity',
    symptoms: ['No wired internet', 'No lights on port', 'Cable not detected'],
    causes: ['Bent pins in port', 'Disabled in BIOS', 'Driver missing'],
    steps: [
      { id: 's1', title: 'Check for Bent Pins', description: 'Look inside the port with a flashlight. If the 8 gold pins are tangled, it won\'t work.' },
      { id: 's2', title: 'Update LAN Driver', description: 'Download the Realtek or Intel Ethernet driver from the manufacturer.' },
      { id: 's3', title: 'Try a Different Cable', description: 'Rule out a broken RJ45 connector.' }
    ],
    technicianAdvice: 'Ethernet ports are very sturdy, but the tiny pins inside can be easily bent if a cable is forced in upside down.',
    relatedProblemIds: ['p1420001', 'p770001'],
    createdAt: '2026-01-20T09:00:00Z'
  },
  // --- Internet: WiFi & Speed ---
  {
    id: 'p1430001',
    title: 'WiFi "Slow" Only on One Floor',
    slug: 'wifi-slow-one-floor',
    shortDescription: 'The internet is 200Mbps downstairs but only 5Mbps upstairs, even with signal bars.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Speed drop', 'Buffering upstairs', 'High latency'],
    causes: ['Floor material (Concrete/Metal)', 'Distance from router', 'Interference'],
    steps: [
      { id: 's1', title: 'Angle the Antennas', description: 'If your router has antennas, point one horizontally to send signal vertically.' },
      { id: 's2', title: 'Install a WiFi Extender', description: 'Plug it in halfway between the router and the slow floor.' },
      { id: 's3', title: 'Switch to 2.4GHz', description: '2.4GHz has better "penetration" through floors than 5GHz.' }
    ],
    technicianAdvice: 'Modern "underfloor heating" uses metal foil which acts as a perfect shield against WiFi signals.',
    relatedProblemIds: ['p1430002', 'p1280001'],
    createdAt: '2026-01-21T08:00:00Z'
  },
  {
    id: 'p1430002',
    title: 'WiFi "Connected" but No Internet (DNS Error)',
    slug: 'wifi-connected-no-internet-dns',
    shortDescription: 'Your device says it\'s connected to WiFi, but you can\'t open any websites.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['No internet', 'DNS error', 'Apps won\'t load'],
    causes: ['ISP DNS failure', 'Wrong DNS settings', 'Router hang'],
    steps: [
      { id: 's1', title: 'Change DNS to 1.1.1.1', description: 'Manually set your DNS to Cloudflare (1.1.1.1) or Google (8.8.8.8).' },
      { id: 's2', title: 'Restart the Modem', description: 'Forces the modem to get a new IP and DNS list from the ISP.' },
      { id: 's3', title: 'Flush DNS Cache', description: 'On PC, use "ipconfig /flushdns" in the command prompt.' }
    ],
    technicianAdvice: 'DNS is like a phonebook; if it\'s broken, your computer knows the name of the site but not its "number".',
    relatedProblemIds: ['p1430001', 'p1030002'],
    createdAt: '2026-01-21T09:00:00Z'
  },
  // --- App: Functionality & UI ---
  {
    id: 'p1440001',
    title: 'App "Keyboard" Covering Text Input',
    slug: 'app-keyboard-covering-input',
    shortDescription: 'When you try to type, the keyboard pops up and hides the box you are typing into.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Cannot see what I type', 'UI overlap', 'Frustrating input'],
    causes: ['App design bug', 'Large font size settings', 'Third-party keyboard'],
    steps: [
      { id: 's1', title: 'Reduce System Font Size', description: 'If your text is set to "Extra Large", it can break app layouts.' },
      { id: 's2', title: 'Switch to Default Keyboard', description: 'Try the stock Apple or Google keyboard instead of a custom one.' },
      { id: 's3', title: 'Update the App', description: 'This is usually a bug that developers fix in layout updates.' }
    ],
    technicianAdvice: 'This happens when an app doesn\'t correctly "listen" for the keyboard height event from the OS.',
    relatedProblemIds: ['p1440002', 'p1040002'],
    createdAt: '2026-01-22T08:00:00Z'
  },
  {
    id: 'p1440002',
    title: 'App "Video" Has No Sound',
    slug: 'app-video-no-sound',
    shortDescription: 'The video plays fine, but there is no audio, even though other apps have sound.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Silent video', 'No audio', 'Volume bar works'],
    causes: ['App-specific mute', 'Silent mode switch (iOS)', 'Incompatible audio codec'],
    steps: [
      { id: 's1', title: 'Check Silent Switch', description: 'On iPhone, the side switch can mute some apps but not others.' },
      { id: 's2', title: 'Check App Mute Button', description: 'Look for a speaker icon with an "X" inside the video player.' },
      { id: 's3', title: 'Force Quit the App', description: 'Resets the app\'s audio engine.' }
    ],
    technicianAdvice: 'Instagram and TikTok often default to "Mute" until you press the volume button once.',
    relatedProblemIds: ['p1440001', 'p240001'],
    createdAt: '2026-01-22T09:00:00Z'
  },
  // --- Gaming: Performance & Graphics ---
  {
    id: 'p1450001',
    title: 'Game "Screen Tearing" (Horizontal lines)',
    slug: 'game-screen-tearing',
    shortDescription: 'The image looks like it\'s being "cut" in half when you move the camera quickly.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Horizontal lines', 'Split image', 'Visual glitches'],
    causes: ['FPS not matching refresh rate', 'V-Sync disabled'],
    steps: [
      { id: 's1', title: 'Enable V-Sync', description: 'Forces the game to wait for the monitor to finish drawing.' },
      { id: 's2', title: 'Use G-Sync or FreeSync', description: 'The best way to fix tearing without adding input lag.' },
      { id: 's3', title: 'Cap Frame Rate', description: 'Set a limit (e.g., 60 FPS) in the game settings.' }
    ],
    technicianAdvice: 'Screen tearing happens when your GPU sends a new frame while the monitor is halfway through drawing the old one.',
    relatedProblemIds: ['p1450002', 'p350001'],
    createdAt: '2026-01-23T08:00:00Z'
  },
  {
    id: 'p1450002',
    title: 'Game "HDR" Looks Washed Out',
    slug: 'game-hdr-washed-out',
    shortDescription: 'When you turn on HDR, the colors look gray and faded instead of vibrant.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Gray colors', 'Faded image', 'Low contrast'],
    causes: ['Windows HDR settings', 'Low peak brightness monitor', 'Bad HDMI cable'],
    steps: [
      { id: 's1', title: 'Run Windows HDR Calibration', description: 'Download the official Microsoft tool from the Store.' },
      { id: 's2', title: 'Check Monitor Settings', description: 'Ensure "HDR" is enabled in the monitor\'s physical OSD menu.' },
      { id: 's3', title: 'Use a High-Speed HDMI Cable', description: 'HDR requires a lot of bandwidth (HDMI 2.0 or 2.1).' }
    ],
    technicianAdvice: 'Cheap "HDR400" monitors often look worse with HDR enabled because they aren\'t bright enough.',
    relatedProblemIds: ['p1450001', 'p1050001'],
    createdAt: '2026-01-23T09:00:00Z'
  }
];
