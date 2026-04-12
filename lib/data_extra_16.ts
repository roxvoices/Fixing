import { Problem } from './types';

export const EXTRA_PROBLEMS_16: Problem[] = [
  // --- Phone: Sensors & Biometrics ---
  {
    id: 'p310001',
    title: 'Face ID "Move iPhone Lower/Higher" Loop',
    slug: 'face-id-move-iphone-loop',
    shortDescription: 'Face ID fails to scan your face and keeps asking you to move the device.',
    category: 'phone',
    subcategory: 'Sensors',
    symptoms: ['Scan failed', 'Positioning loop', 'Biometrics disabled'],
    causes: ['Dirty TrueDepth camera', 'Hardware failure (Dot Projector)', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Clean the Notch', description: 'Wipe the top area of the screen with a clean microfiber cloth.' },
      { id: 's2', title: 'Reset Face ID', description: 'Settings > Face ID & Passcode > Reset Face ID and set it up again.' },
      { id: 's3', title: 'Check for Water Damage', description: 'The TrueDepth camera is very sensitive to moisture; check the SIM tray for red indicator.' }
    ],
    technicianAdvice: 'If "Face ID has been disabled" appears, the hardware is likely permanently damaged.',
    relatedProblemIds: ['p310002', 'p310003'],
    createdAt: '2025-10-01T08:00:00Z'
  },
  {
    id: 'p310002',
    title: 'In-Display Fingerprint Sensor Not Working',
    slug: 'in-display-fingerprint-not-working',
    shortDescription: 'The optical or ultrasonic sensor under the screen fails to recognize your thumb.',
    category: 'phone',
    subcategory: 'Sensors',
    symptoms: ['"No match"', 'Sensor not lighting up', 'Slow recognition'],
    causes: ['Thick screen protector', 'Dry skin', 'Software calibration'],
    steps: [
      { id: 's1', title: 'Use Compatible Protector', description: 'Ensure your screen protector is certified for in-display sensors.' },
      { id: 's2', title: 'Moisturize Your Finger', description: 'Ultrasonic sensors struggle with very dry skin; a little moisture helps.' },
      { id: 's3', title: 'Re-register Fingerprint', description: 'Delete and re-add your thumb, pressing firmly during the scan.' }
    ],
    technicianAdvice: 'Optical sensors (like on OnePlus) need a clean screen; Ultrasonic (like on Samsung) need a tight bond with the protector.',
    relatedProblemIds: ['p310001', 'p310004'],
    createdAt: '2025-10-01T09:00:00Z'
  },
  // --- Laptop: Connectivity & Ports ---
  {
    id: 'p320001',
    title: 'Laptop USB Port Not Recognizing Devices',
    slug: 'laptop-usb-port-not-recognizing',
    shortDescription: 'You plug in a mouse or drive, but the computer doesn\'t react at all.',
    category: 'laptop',
    subcategory: 'Connectivity',
    symptoms: ['No "ding" sound', 'Device not in Explorer', 'No power to device'],
    causes: ['Dirty port', 'Disabled in BIOS', 'Driver conflict'],
    steps: [
      { id: 's1', title: 'Check for Physical Debris', description: 'Use a non-conductive pick to remove lint from the USB port.' },
      { id: 's2', title: 'Update USB Root Hub Driver', description: 'Device Manager > Universal Serial Bus controllers > Update Driver.' },
      { id: 's3', title: 'Power Cycle Laptop', description: 'Shut down, unplug everything, and hold power for 30 seconds to clear static.' }
    ],
    technicianAdvice: 'If one port works and another doesn\'t, it\'s likely a physical hardware failure on the motherboard.',
    relatedProblemIds: ['p320002', 'p320003'],
    createdAt: '2025-10-02T08:00:00Z'
  },
  {
    id: 'p320002',
    title: 'Laptop HDMI Port No Signal to TV',
    slug: 'laptop-hdmi-no-signal',
    shortDescription: 'You connect your laptop to a TV or monitor, but the screen says "No Signal".',
    category: 'laptop',
    subcategory: 'Connectivity',
    symptoms: ['Black TV screen', 'No signal message', 'Flickering'],
    causes: ['Wrong input on TV', 'Bad HDMI cable', 'Project settings (Win+P)'],
    steps: [
      { id: 's1', title: 'Press Win+P', description: 'Ensure you have "Duplicate" or "Extend" selected in the projection menu.' },
      { id: 's2', title: 'Check TV Input', description: 'Cycle through HDMI 1, 2, 3 on your TV remote.' },
      { id: 's3', title: 'Lower Resolution', description: 'Sometimes the laptop tries to send a signal the TV can\'t handle (e.g., 4K 60Hz on old TV).' }
    ],
    technicianAdvice: 'HDMI ports are fragile; ensure the cable isn\'t putting physical strain on the port.',
    relatedProblemIds: ['p320001', 'p320004'],
    createdAt: '2025-10-02T09:00:00Z'
  },
  // --- Internet: Mobile Data & Signal ---
  {
    id: 'p330001',
    title: 'Phone Stuck on "E" or "3G" (No 4G/5G)',
    slug: 'phone-stuck-on-edge-3g',
    shortDescription: 'You are in a known 5G area but your phone only shows the slow "E" or "3G" icon.',
    category: 'internet',
    subcategory: 'Mobile Data',
    symptoms: ['Very slow internet', 'Old network icon', 'Calls dropping'],
    causes: ['Network congestion', 'Incorrect APN settings', 'SIM card aging'],
    steps: [
      { id: 's1', title: 'Toggle Airplane Mode', description: 'Forces the phone to re-scan for the strongest available tower.' },
      { id: 's2', title: 'Reset Network Settings', description: 'Settings > General > Transfer or Reset > Reset Network Settings.' },
      { id: 's3', title: 'Check Preferred Network Type', description: 'Ensure "5G On" or "LTE" is selected in Cellular settings.' }
    ],
    technicianAdvice: 'Old SIM cards (5+ years) often lack the keys needed to connect to modern 5G networks.',
    relatedProblemIds: ['p330002', 'p330003'],
    createdAt: '2025-10-03T08:00:00Z'
  },
  {
    id: 'p330002',
    title: 'Mobile Hotspot Not Working for Other Devices',
    slug: 'mobile-hotspot-not-working',
    shortDescription: 'You turn on your hotspot, but other devices cannot find it or cannot connect.',
    category: 'internet',
    subcategory: 'Mobile Data',
    symptoms: ['SSID not visible', 'Connection timed out', 'No internet on laptop'],
    causes: ['Carrier restriction', 'Max devices reached', 'Wrong frequency (5GHz vs 2.4GHz)'],
    steps: [
      { id: 's1', title: 'Enable "Maximize Compatibility"', description: 'On iPhone, this switches the hotspot to 2.4GHz which older devices need.' },
      { id: 's2', title: 'Check Data Plan', description: 'Ensure your carrier allows tethering and you haven\'t hit your hotspot cap.' },
      { id: 's3', title: 'Change Hotspot Password', description: 'Sometimes special characters in the password cause connection issues.' }
    ],
    technicianAdvice: 'Hotspots consume massive amounts of battery and can cause the phone to overheat.',
    relatedProblemIds: ['p330001', 'p330004'],
    createdAt: '2025-10-03T09:00:00Z'
  },
  // --- App: Performance & Storage ---
  {
    id: 'p340001',
    title: 'App Using Too Much Background Battery',
    slug: 'app-background-battery-drain',
    shortDescription: 'An app you haven\'t opened all day is at the top of your battery usage list.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Fast drain', 'Warm phone', 'High background activity'],
    causes: ['Location tracking', 'Frequent syncing', 'App bug'],
    steps: [
      { id: 's1', title: 'Disable Background App Refresh', description: 'Settings > General > Background App Refresh > Turn OFF for that app.' },
      { id: 's2', title: 'Change Location Access', description: 'Set location to "While Using" instead of "Always".' },
      { id: 's3', title: 'Force Close App', description: 'Swipe up to kill the app and stop its background processes.' }
    ],
    technicianAdvice: 'Social media and navigation apps are the biggest offenders for background drain.',
    relatedProblemIds: ['p340002', 'p340003'],
    createdAt: '2025-10-04T08:00:00Z'
  },
  {
    id: 'p340002',
    title: 'App "Documents & Data" Taking Too Much Space',
    slug: 'app-documents-data-large-size',
    shortDescription: 'The app itself is small, but its "Documents & Data" is using gigabytes of storage.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['"Storage Almost Full"', 'Large app size', 'Slow performance'],
    causes: ['Cached videos/images', 'Downloaded offline content', 'Database bloat'],
    steps: [
      { id: 's1', title: 'Clear Cache in App Settings', description: 'Many apps (like Telegram/Spotify) have their own "Clear Cache" button.' },
      { id: 's2', title: 'Offload the App', description: 'Deletes the app but keeps your data, then reinstall to clear temp files.' },
      { id: 's3', title: 'Delete and Reinstall', description: 'The only way to truly "reset" an app\'s storage usage on iOS.' }
    ],
    technicianAdvice: 'Streaming apps often cache everything you watch, leading to massive storage growth.',
    relatedProblemIds: ['p340001', 'p340004'],
    createdAt: '2025-10-04T09:00:00Z'
  },
  // --- Gaming: Display & Graphics ---
  {
    id: 'p350001',
    title: 'Gaming Monitor "Screen Tearing"',
    slug: 'gaming-monitor-screen-tearing',
    shortDescription: 'The image looks like it is split or shifted horizontally during fast movement.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Horizontal lines', 'Split image', 'Visual glitches'],
    causes: ['FPS mismatch with refresh rate', 'V-Sync disabled', 'Bad DisplayPort cable'],
    steps: [
      { id: 's1', title: 'Enable V-Sync', description: 'In game settings, turn on Vertical Sync to match FPS to monitor Hz.' },
      { id: 's2', title: 'Use G-Sync or FreeSync', description: 'Enable variable refresh rate in your GPU control panel.' },
      { id: 's3', title: 'Cap Frame Rate', description: 'Set a max FPS slightly below your monitor\'s refresh rate (e.g., 141 FPS for 144Hz).' }
    ],
    technicianAdvice: 'Screen tearing happens when the GPU sends a new frame while the monitor is still drawing the old one.',
    relatedProblemIds: ['p350002', 'p350003'],
    createdAt: '2025-10-05T08:00:00Z'
  },
  {
    id: 'p350002',
    title: 'Gaming Monitor "Ghosting" (Motion Blur)',
    slug: 'gaming-monitor-ghosting',
    shortDescription: 'Fast-moving objects leave a trail or "ghost" behind them on the screen.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Blurry movement', 'Trailing images', 'Smearing'],
    causes: ['Slow pixel response time', 'Incorrect Overdrive setting', 'VA panel limitation'],
    steps: [
      { id: 's1', title: 'Adjust Overdrive/Response Time', description: 'In the monitor\'s OSD menu, set Response Time to "Fast" or "Normal" (avoid "Fastest" as it causes overshoot).' },
      { id: 's2', title: 'Check Refresh Rate', description: 'Ensure your monitor is actually running at its rated speed (e.g., 144Hz) in Windows settings.' },
      { id: 's3', title: 'Lower Brightness', description: 'Sometimes high brightness can exaggerate smearing on certain panels.' }
    ],
    technicianAdvice: 'Ghosting is very common on cheaper VA panels; IPS and TN panels are generally better for motion clarity.',
    relatedProblemIds: ['p350001', 'p350004'],
    createdAt: '2025-10-05T09:00:00Z'
  }
];
