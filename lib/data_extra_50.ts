import { Problem } from './types';

export const EXTRA_PROBLEMS_50: Problem[] = [
  // --- Phone: Hardware & Security ---
  {
    id: 'p2010001',
    title: 'Phone "Face ID" Not Working with Sunglasses',
    slug: 'phone-face-id-sunglasses',
    shortDescription: 'Your phone fails to unlock when you are wearing sunglasses, even though it works fine without them.',
    category: 'phone',
    subcategory: 'Security',
    symptoms: ['Unlock failed', 'Passcode required', 'Infrared blocked'],
    causes: ['Polarized lenses', 'IR-blocking coating', '"Require Attention" enabled'],
    steps: [
      { id: 's1', title: 'Disable "Require Attention"', description: 'Settings > Face ID & Passcode > Toggle OFF "Require Attention for Face ID". (Note: slightly less secure).' },
      { id: 's2', title: 'Set Up an "Alternative Appearance"', description: 'Scan your face while wearing the sunglasses.' },
      { id: 's3', title: 'Try Non-Polarized Glasses', description: 'Some polarized coatings are opaque to the infrared sensors used for Face ID.' }
    ],
    technicianAdvice: 'Face ID uses infrared dots; if your sunglasses block IR light, the phone can\'t see your eyes to "verify attention".',
    relatedProblemIds: ['p2010002', 'p100001'],
    createdAt: '2026-03-20T08:00:00Z'
  },
  {
    id: 'p2010002',
    title: 'Phone "Fingerprint" Sensor is Too Slow',
    slug: 'phone-fingerprint-sensor-slow',
    shortDescription: 'It takes several seconds or multiple tries for the fingerprint sensor to recognize your finger.',
    category: 'phone',
    subcategory: 'Security',
    symptoms: ['Delayed unlock', 'Multiple attempts', 'Failed recognition'],
    causes: ['Dry skin', 'Dirty sensor', 'Thick screen protector'],
    steps: [
      { id: 's1', title: 'Re-register Fingerprints', description: 'Delete your old prints and register them again, pressing firmly.' },
      { id: 's2', title: 'Register the Same Finger Twice', description: 'Adds more data points for the same finger, increasing speed and accuracy.' },
      { id: 's3', title: 'Moisturize Your Hands', description: 'Extremely dry skin doesn\'t have clear ridges for the sensor to read.' }
    ],
    technicianAdvice: 'Optical sensors (under-screen) are slower than physical ones; keeping the screen clean is vital for speed.',
    relatedProblemIds: ['p2010001', 'p100002'],
    createdAt: '2026-03-20T09:00:00Z'
  },
  // --- Laptop: Hardware & Ports ---
  {
    id: 'p2020001',
    title: 'Laptop "USB-C" Port is Loose',
    slug: 'laptop-usb-c-port-loose',
    shortDescription: 'The charging cable wiggles or falls out easily, and you have to hold it at an angle to charge.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Wobbly connection', 'Intermittent charging', 'Cable falls out'],
    causes: ['Lint in port', 'Bent internal pins', 'Worn out retention springs'],
    steps: [
      { id: 's1', title: 'Clean with a Non-Metal Pick', description: 'Use a plastic toothpick to gently scrape out lint from the bottom of the port.' },
      { id: 's2', title: 'Try a Different Cable', description: 'Sometimes the "teeth" on the cable are worn, not the port.' },
      { id: 's3', title: 'Avoid Using While Charging', description: 'Strain from moving the laptop while plugged in is what kills ports.' }
    ],
    technicianAdvice: 'If the port is physically loose on the motherboard, it requires a difficult soldering repair or a board replacement.',
    relatedProblemIds: ['p2020002', 'p1670001'],
    createdAt: '2026-03-21T08:00:00Z'
  },
  {
    id: 'p2020002',
    title: 'Laptop "SD Card" Not Detected',
    slug: 'laptop-sd-card-not-detected',
    shortDescription: 'You insert an SD card into the slot, but nothing happens and it doesn\'t show up in Explorer.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['No drive found', 'Silent insertion', 'Read error'],
    causes: ['Dirty contacts', 'Locked write-protect switch', 'Driver missing'],
    steps: [
      { id: 's1', title: 'Check the Lock Switch', description: 'Ensure the tiny slider on the side of the SD card is in the "Up" position.' },
      { id: 's2', title: 'Clean the Contacts', description: 'Wipe the gold pins on the card with a dry cloth.' },
      { id: 's3', title: 'Update Card Reader Driver', description: 'Check Device Manager > Memory technology devices.' }
    ],
    technicianAdvice: 'SD card slots are dust magnets; blowing air into the slot can sometimes fix detection issues.',
    relatedProblemIds: ['p2020001', 'p500002'],
    createdAt: '2026-03-21T09:00:00Z'
  },
  // --- Internet: WiFi & Security ---
  {
    id: 'p2030001',
    title: 'WiFi "Hidden" SSID Won\'t Connect',
    slug: 'wifi-hidden-ssid-wont-connect',
    shortDescription: 'You hid your WiFi name for security, but now your devices can\'t find it even when you type the name manually.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Network not found', 'Manual connection fails', 'Drops frequently'],
    causes: ['Device power saving', 'SSID broadcast required for handshake'],
    steps: [
      { id: 's1', title: 'Unhide the SSID', description: 'Hiding SSID provides zero real security and causes many connection issues.' },
      { id: 's2', title: 'Check "Connect even if not broadcasting"', description: 'In Windows/Android settings, ensure this box is checked for the network.' },
      { id: 's3', title: 'Use a Simpler Name', description: 'Avoid spaces or symbols in a hidden SSID.' }
    ],
    technicianAdvice: 'Hiding your SSID is "security by obscurity" and is easily bypassed by hackers; it\'s better to use a strong WPA3 password.',
    relatedProblemIds: ['p2030002', 'p1830002'],
    createdAt: '2026-03-22T08:00:00Z'
  },
  {
    id: 'p2030002',
    title: 'WiFi "Guest Network" Can\'t Access Printer',
    slug: 'wifi-guest-network-printer-access',
    shortDescription: 'You are on the Guest WiFi, but you can\'t see the printer that is on the main WiFi.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Printer offline', 'No devices found', 'Scanning fails'],
    causes: ['Client Isolation', 'VLAN separation'],
    steps: [
      { id: 's1', title: 'Disable "Client Isolation"', description: 'In router settings, allow guest clients to talk to each other (less secure).' },
      { id: 's2', title: 'Use "WiFi Direct"', description: 'Connect directly to the printer\'s own WiFi signal instead of the router.' },
      { id: 's3', title: 'Move Printer to Guest Network', description: 'If guests need to print, the printer must be on the same network as them.' }
    ],
    technicianAdvice: 'The whole point of a Guest Network is to block access to your local devices (like printers and NAS).',
    relatedProblemIds: ['p2030001', 'p1480001'],
    createdAt: '2026-03-22T09:00:00Z'
  },
  // --- App: Functionality & UI ---
  {
    id: 'p2040001',
    title: 'App "Notifications" Have No Sound',
    slug: 'app-notifications-no-sound',
    shortDescription: 'You get the visual alert on your screen, but the phone doesn\'t make a sound or vibrate.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Silent alerts', 'Missed messages', 'Visual only'],
    causes: ['"Deliver Quietly" enabled', 'App-specific mute', 'Focus Mode'],
    steps: [
      { id: 's1', title: 'Check "Deliver Quietly"', description: 'Swipe left on the notification > Manage > Ensure it\'s set to "Deliver Prominently".' },
      { id: 's2', title: 'Check In-App Sound Settings', description: 'Some apps have their own volume sliders or mute toggles.' },
      { id: 's3', title: 'Disable "Do Not Disturb"', description: 'Ensure no Focus Mode is filtering out the sound.' }
    ],
    technicianAdvice: 'If the phone is on "Silent" or "Vibrate", apps generally won\'t override that unless they are "Critical Alerts".',
    relatedProblemIds: ['p2040002', 'p9'],
    createdAt: '2026-03-23T08:00:00Z'
  },
  {
    id: 'p2040002',
    title: 'App "Badge" Count is Wrong',
    slug: 'app-badge-count-wrong',
    shortDescription: 'The little red number on the app icon says "5", but you have no unread messages.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Ghost notifications', 'Incorrect count', 'Persistent badge'],
    causes: ['Sync error', 'Hidden unread items (e.g., archived)', 'Launcher glitch'],
    steps: [
      { id: 's1', title: 'Mark All as Read', description: 'Look for a "Read All" button in the app settings.' },
      { id: 's2', title: 'Clear Launcher Cache', description: 'Settings > Apps > [Your Launcher] > Clear Cache.' },
      { id: 's3', title: 'Reinstall the App', description: 'Forces a fresh sync with the notification server.' }
    ],
    technicianAdvice: 'Badge counts are often "pushed" from a server; if the server thinks you have unread mail, the badge stays.',
    relatedProblemIds: ['p2040001', 'p1410001'],
    createdAt: '2026-03-23T09:00:00Z'
  },
  // --- Gaming: Performance & Graphics ---
  {
    id: 'p2050001',
    title: 'Game "Textures" Loading Slowly (Pop-in)',
    slug: 'game-textures-loading-slowly',
    shortDescription: 'You enter a new area and everything looks blurry for a few seconds before the detail "pops" in.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Texture pop-in', 'Blurry graphics', 'Delayed detail'],
    causes: ['Slow HDD', 'VRAM bottleneck', 'Shaders compiling'],
    steps: [
      { id: 's1', title: 'Move Game to SSD', description: 'Modern games require the high read speeds of an NVMe SSD to load textures instantly.' },
      { id: 's2', title: 'Lower Texture Quality', description: 'Reduces the amount of data that needs to be streamed into VRAM.' },
      { id: 's3', title: 'Increase "Texture Streaming Pool"', description: 'In some game engines (Unreal), you can increase the memory allocated to textures.' }
    ],
    technicianAdvice: 'If you are still gaming on a mechanical hard drive (HDD), texture pop-in is unavoidable in modern open-world games.',
    relatedProblemIds: ['p2050002', 'p1450001'],
    createdAt: '2026-03-24T08:00:00Z'
  },
  {
    id: 'p2050002',
    title: 'Game "Screen Tearing" (Horizontal lines)',
    slug: 'game-screen-tearing',
    shortDescription: 'The image seems to "split" horizontally when you move the camera quickly.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Horizontal splits', 'Jittery movement', 'Visual artifacts'],
    causes: ['GPU/Monitor desync', 'V-Sync disabled'],
    steps: [
      { id: 's1', title: 'Enable G-Sync or FreeSync', description: 'The best way to fix tearing without adding input lag.' },
      { id: 's2', title: 'Enable V-Sync', description: 'Forces the GPU to wait for the monitor. (Warning: adds input lag).' },
      { id: 's3', title: 'Cap FPS to Monitor Refresh Rate', description: 'Use RivaTuner or GPU software to limit FPS to 60, 144, etc.' }
    ],
    technicianAdvice: 'Tearing happens when the GPU sends a new frame while the monitor is still halfway through drawing the old one.',
    relatedProblemIds: ['p2050001', 'p1800001'],
    createdAt: '2026-03-24T09:00:00Z'
  }
];
