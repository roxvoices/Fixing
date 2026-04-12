import { Problem } from './types';

export const EXTRA_PROBLEMS_47: Problem[] = [
  // --- Phone: Hardware & Display ---
  {
    id: 'p1860001',
    title: 'Phone "Screen" is Lifting Off the Frame',
    slug: 'phone-screen-lifting',
    shortDescription: 'The glass display is physically peeling away from the phone body, often showing a light leak.',
    category: 'phone',
    subcategory: 'Hardware',
    symptoms: ['Gaps in frame', 'Light leaking from sides', 'Screen feels "spongy"'],
    causes: ['Swollen battery', 'Adhesive failure', 'Frame damage'],
    steps: [
      { id: 's1', title: 'Stop Charging Immediately', description: 'If the screen is lifting, the battery inside is likely expanding (swelling).' },
      { id: 's2', title: 'Do Not Press Down', description: 'Trying to "push" the screen back can puncture the swollen battery, causing a fire.' },
      { id: 's3', title: 'Take to a Professional', description: 'The battery must be replaced safely and the screen re-glued.' }
    ],
    technicianAdvice: 'A lifting screen is a major safety warning; a swollen battery is a "spicy pillow" and can be dangerous.',
    relatedProblemIds: ['p1860002', 'p230002'],
    createdAt: '2026-03-05T08:00:00Z'
  },
  {
    id: 'p1860002',
    title: 'Phone "Charging Port" Smells Like Burning',
    slug: 'phone-charging-port-burning-smell',
    shortDescription: 'You plug in your phone and notice a faint smell of smoke or burnt plastic.',
    category: 'phone',
    subcategory: 'Hardware',
    symptoms: ['Burning smell', 'Port is hot', 'Melting plastic'],
    causes: ['Liquid in port', 'Faulty cable', 'Internal short circuit'],
    steps: [
      { id: 's1', title: 'Unplug Immediately', description: 'Disconnect the power to prevent a fire.' },
      { id: 's2', title: 'Inspect for Debris', description: 'Look for any metal or wet lint inside the port that might be shorting the pins.' },
      { id: 's3', title: 'Do Not Use Again', description: 'The port is likely charred and unsafe. It must be replaced.' }
    ],
    technicianAdvice: 'Charging a phone with a wet port is the most common cause of "port melt".',
    relatedProblemIds: ['p1860001', 'p660001'],
    createdAt: '2026-03-05T09:00:00Z'
  },
  // --- Laptop: Hardware & Input ---
  {
    id: 'p1870001',
    title: 'Laptop "Touchpad" Click is Stuck',
    slug: 'laptop-touchpad-click-stuck',
    shortDescription: 'The touchpad doesn\'t "click" anymore, or it feels like it\'s permanently pressed down.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['No physical click', 'Ghost clicks', 'Stiff touchpad'],
    causes: ['Dirt under the pad', 'Swollen battery', 'Worn out click mechanism'],
    steps: [
      { id: 's1', title: 'Clean the Edges', description: 'Use a thin piece of paper to slide around the gap of the touchpad to remove crumbs.' },
      { id: 's2', title: 'Check for Battery Swelling', description: 'Look at the bottom of the laptop. If it\'s bulging, the battery is pushing up the touchpad.' },
      { id: 's3', title: 'Enable "Tap to Click"', description: 'A software workaround if the physical click is dead.' }
    ],
    technicianAdvice: 'On many laptops, the battery sits directly under the touchpad; swelling is a common cause of "stiff" clicks.',
    relatedProblemIds: ['p1870002', 'p420002'],
    createdAt: '2026-03-06T08:00:00Z'
  },
  {
    id: 'p1870002',
    title: 'Laptop "Keyboard" Typing Multiple Letters',
    slug: 'laptop-keyboard-double-typing',
    shortDescription: 'You press a key once, but it types the letter twice (e.g., "Hhello").',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Double letters', 'Chattering', 'Repeating keys'],
    causes: ['Dust under keycap', 'Software "Filter Keys" setting', 'Failing switch'],
    steps: [
      { id: 's1', title: 'Clean with Compressed Air', description: 'Blow air under the affected key while holding the laptop at an angle.' },
      { id: 's2', title: 'Disable "Filter Keys"', description: 'Settings > Accessibility > Keyboard > Ensure "Filter Keys" is OFF.' },
      { id: 's3', title: 'Use "Keyboard Chattering Fix" Software', description: 'A small app that ignores rapid duplicate keypresses.' }
    ],
    technicianAdvice: 'This is common on "Butterfly" keyboards; a single speck of dust can cause the switch to bounce twice.',
    relatedProblemIds: ['p1870001', 'p420001'],
    createdAt: '2026-03-06T09:00:00Z'
  },
  // --- Internet: WiFi & Speed ---
  {
    id: 'p1880001',
    title: 'WiFi "Speed" Drops When Using Bluetooth',
    slug: 'wifi-speed-drops-bluetooth-interference',
    shortDescription: 'Your internet gets slow or disconnects as soon as you connect your Bluetooth headphones.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Slow speed', 'Lag spikes', 'Bluetooth stutter'],
    causes: ['2.4GHz frequency interference', 'Shared antenna'],
    steps: [
      { id: 's1', title: 'Switch to 5GHz WiFi', description: 'Bluetooth only uses 2.4GHz; moving your WiFi to 5GHz eliminates the conflict.' },
      { id: 's2', title: 'Change WiFi Channel', description: 'In router settings, try channel 1 or 11 to move away from the Bluetooth range.' },
      { id: 's3', title: 'Update WiFi/BT Drivers', description: 'Ensure the "coexistence" software is working correctly.' }
    ],
    technicianAdvice: 'WiFi and Bluetooth both live in the 2.4GHz "neighborhood"; it can get very crowded.',
    relatedProblemIds: ['p1880002', 'p580001'],
    createdAt: '2026-03-07T08:00:00Z'
  },
  {
    id: 'p1880002',
    title: 'WiFi "Connected" but "No Internet" (DNS Probe Finished)',
    slug: 'wifi-dns-probe-finished',
    shortDescription: 'Your browser says "DNS_PROBE_FINISHED_NO_INTERNET" even though you have signal.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Browser error', 'No internet', 'Signal bars present'],
    causes: ['DNS server failure', 'Corrupt DNS cache', 'Router hang'],
    steps: [
      { id: 's1', title: 'Flush DNS Cache', description: 'Command Prompt (Admin) > "ipconfig /flushdns".' },
      { id: 's2', title: 'Change DNS to 8.8.8.8', description: 'Manually set your DNS to Google or Cloudflare in network settings.' },
      { id: 's3', title: 'Restart the Modem', description: 'Forces a fresh connection to your ISP\'s DNS servers.' }
    ],
    technicianAdvice: 'DNS is the "phonebook" of the internet; if it\'s broken, your computer can\'t find any websites.',
    relatedProblemIds: ['p1880001', 'p1430002'],
    createdAt: '2026-03-07T09:00:00Z'
  },
  // --- App: Functionality & UI ---
  {
    id: 'p1890001',
    title: 'App "Permissions" Resetting Automatically',
    slug: 'app-permissions-resetting',
    shortDescription: 'You grant an app access to your camera or location, but it asks again a few days later.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Repeated prompts', 'Permissions lost', 'Frustrating UX'],
    causes: ['Android "Auto-reset" feature', 'App update', 'System security policy'],
    steps: [
      { id: 's1', title: 'Disable "Remove permissions if app is unused"', description: 'Settings > Apps > [App Name] > Toggle OFF "Remove permissions if app is unused".' },
      { id: 's2', title: 'Set to "Allow All the Time"', description: 'For location, ensure it isn\'t set to "Ask Every Time".' },
      { id: 's3', title: 'Check for System Updates', description: 'Sometimes this is a bug in the OS permission manager.' }
    ],
    technicianAdvice: 'Modern Android versions automatically revoke permissions for apps you haven\'t opened in a while to protect your privacy.',
    relatedProblemIds: ['p1890002', 'p540001'],
    createdAt: '2026-03-08T08:00:00Z'
  },
  {
    id: 'p1890002',
    title: 'App "Video" is Stuttering (Hardware Acceleration)',
    slug: 'app-video-stuttering-hardware-accel',
    shortDescription: 'Videos in apps like YouTube or Netflix are choppy, but the audio is fine.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Choppy video', 'Dropped frames', 'Audio/Video out of sync'],
    causes: ['Hardware acceleration glitch', 'Low system resources', 'Incompatible codec'],
    steps: [
      { id: 's1', title: 'Disable Hardware Acceleration', description: 'In the app settings (if available), try turning off "Hardware Acceleration".' },
      { id: 's2', title: 'Clear App Cache', description: 'Removes temporary video buffer files.' },
      { id: 's3', title: 'Update Graphics Drivers', description: 'Ensure your phone/laptop has the latest video decoding software.' }
    ],
    technicianAdvice: 'If your GPU is struggling, turning off hardware acceleration forces the CPU to do the work, which can sometimes be smoother.',
    relatedProblemIds: ['p1890001', 'p1440002'],
    createdAt: '2026-03-08T09:00:00Z'
  },
  // --- Gaming: Performance & Software ---
  {
    id: 'p1900001',
    title: 'Game "FPS" Drops When Laptop is Unplugged',
    slug: 'game-fps-drops-unplugged',
    shortDescription: 'The game runs perfectly at 100 FPS when plugged in, but drops to 30 FPS on battery.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Low FPS on battery', 'Stuttering', 'Slow gameplay'],
    causes: ['Power saving mode', 'Battery cannot provide enough wattage', 'NVIDIA Battery Boost'],
    steps: [
      { id: 's1', title: 'Set Power Plan to "Best Performance"', description: 'Click the battery icon and move the slider to the right.' },
      { id: 's2', title: 'Disable NVIDIA Battery Boost', description: 'In GeForce Experience, turn off the setting that caps FPS on battery.' },
      { id: 's3', title: 'Play While Plugged In', description: 'Gaming laptops are designed to run at full speed only when connected to AC power.' }
    ],
    technicianAdvice: 'A laptop battery physically cannot discharge fast enough to power a high-end GPU at full speed.',
    relatedProblemIds: ['p1900002', 'p230001'],
    createdAt: '2026-03-09T08:00:00Z'
  },
  {
    id: 'p1900002',
    title: 'Game "Overlay" Causing Crashes',
    slug: 'game-overlay-causing-crashes',
    shortDescription: 'The game crashes as soon as you press Shift+Tab or try to record a clip.',
    category: 'gaming',
    subcategory: 'Software',
    symptoms: ['Crash on overlay', 'Black screen', 'UI freeze'],
    causes: ['Conflicting overlays (Steam + Discord + NVIDIA)', 'DirectX version mismatch'],
    steps: [
      { id: 's1', title: 'Disable Multiple Overlays', description: 'Pick one (e.g., Steam) and turn off Discord and NVIDIA overlays.' },
      { id: 's2', title: 'Update Graphics Drivers', description: 'Overlays rely heavily on stable GPU drivers.' },
      { id: 's3', title: 'Run Game in "Borderless Windowed"', description: 'Full-screen mode is more prone to overlay crashes.' }
    ],
    technicianAdvice: 'Having three different apps trying to "draw" on top of your game at the same time is a recipe for a crash.',
    relatedProblemIds: ['p1900001', 'p1550001'],
    createdAt: '2026-03-09T09:00:00Z'
  }
];
