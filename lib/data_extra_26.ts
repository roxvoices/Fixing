import { Problem } from './types';

export const EXTRA_PROBLEMS_26: Problem[] = [
  // --- Phone: Hardware & Display ---
  {
    id: 'p810001',
    title: 'Smartphone Screen "Lifting" or Peeling',
    slug: 'smartphone-screen-lifting-peeling',
    shortDescription: 'The screen is physically separating from the phone frame, often showing a gap or light bleed.',
    category: 'phone',
    subcategory: 'Hardware',
    symptoms: ['Visible gap', 'Light bleed', 'Clicking sound when pressed'],
    causes: ['Swollen battery', 'Adhesive failure', 'Bent frame'],
    steps: [
      { id: 's1', title: 'Check for Battery Swelling', description: 'Look at the side of the phone. If it looks "pregnant", the battery is dangerous. Stop using it.' },
      { id: 's2', title: 'Avoid Pressing Down', description: 'Don\'t try to "snap" it back in; you might crack the LCD or puncture the battery.' },
      { id: 's3', title: 'Professional Re-sealing', description: 'A technician needs to remove the old adhesive and apply a new waterproof gasket.' }
    ],
    technicianAdvice: 'Screen lifting is almost always caused by a battery expanding and pushing the screen out from the inside.',
    relatedProblemIds: ['p810002', 'p810003'],
    createdAt: '2025-11-20T08:00:00Z'
  },
  {
    id: 'p810002',
    title: 'Smartphone "Green Line" on Screen',
    slug: 'smartphone-green-line-screen',
    shortDescription: 'A thin, bright green vertical line appears on the screen and stays there permanently.',
    category: 'phone',
    subcategory: 'Hardware',
    symptoms: ['Vertical green line', 'Flickering', 'Permanent mark'],
    causes: ['Hardware defect (OLED)', 'Physical impact', 'Water damage'],
    steps: [
      { id: 's1', title: 'Check for Physical Damage', description: 'Look for tiny cracks near the top or bottom of the line.' },
      { id: 's2', title: 'Update Software', description: 'Rarely, a software glitch causes this, but it is almost always hardware.' },
      { id: 's3', title: 'Check Warranty/Recall', description: 'Some models (like Samsung S20/S21) had known defects and might be repaired for free.' }
    ],
    technicianAdvice: 'The green line is a sign of a failed connection in the OLED panel\'s flexible circuit.',
    relatedProblemIds: ['p810001', 'p460001'],
    createdAt: '2025-11-20T09:00:00Z'
  },
  // --- Laptop: Keyboard & Touchpad ---
  {
    id: 'p820001',
    title: 'Laptop Keyboard "Ghosting" (Multiple keys at once)',
    slug: 'laptop-keyboard-ghosting',
    shortDescription: 'When you press one key, several other characters appear on the screen.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Multiple characters', 'Wrong keys typing', 'Beeping'],
    causes: ['Liquid damage', 'Short circuit in keyboard matrix', 'Driver error'],
    steps: [
      { id: 's1', title: 'Test in BIOS/Safe Mode', description: 'If it happens in BIOS, it is a hardware failure.' },
      { id: 's2', title: 'Dry the Keyboard', description: 'If you spilled liquid, turn it off and leave it upside down for 24 hours.' },
      { id: 's3', title: 'Replace Keyboard Module', description: 'Keyboard matrices are not repairable; the whole unit must be swapped.' }
    ],
    technicianAdvice: 'A single drop of water can bridge two lines in the keyboard matrix, causing "ghost" presses.',
    relatedProblemIds: ['p820002', 'p420001'],
    createdAt: '2025-11-21T08:00:00Z'
  },
  {
    id: 'p820002',
    title: 'Laptop Touchpad "Palm Rejection" Not Working',
    slug: 'laptop-touchpad-palm-rejection-not-working',
    shortDescription: 'The cursor jumps around while you are typing because your palm touches the trackpad.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Jumping cursor', 'Accidental clicks', 'Frustrating typing'],
    causes: ['Driver settings', 'Touchpad too large', 'Static electricity'],
    steps: [
      { id: 's1', title: 'Adjust Sensitivity', description: 'Settings > Devices > Touchpad > Change sensitivity to "Low".' },
      { id: 's2', title: 'Update Precision Drivers', description: 'Ensure you are using official Windows Precision drivers if supported.' },
      { id: 's3', title: 'Disable Touchpad While Typing', description: 'Some laptops have a setting to delay touch input for 1 second after a keypress.' }
    ],
    technicianAdvice: 'Large modern trackpads are great, but they require very smart software to ignore your palms.',
    relatedProblemIds: ['p820001', 'p420002'],
    createdAt: '2025-11-21T09:00:00Z'
  },
  // --- Internet: Smart Home Connectivity ---
  {
    id: 'p830001',
    title: 'Smart Device "Only Works on 2.4GHz" Setup Issue',
    slug: 'smart-device-2-4ghz-setup-issue',
    shortDescription: 'You cannot set up your smart bulb or plug because your phone is on 5GHz and the device needs 2.4GHz.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Setup failed', 'Device not found', 'WiFi mismatch'],
    causes: ['Router merging 2.4/5GHz (Smart Connect)', 'Phone on wrong band'],
    steps: [
      { id: 's1', title: 'Split WiFi Bands', description: 'In router settings, give the 2.4GHz and 5GHz networks different names (SSIDs).' },
      { id: 's2', title: 'Move Far Away', description: 'Walk to the edge of your WiFi range; 5GHz drops off first, forcing your phone onto 2.4GHz.' },
      { id: 's3', title: 'Disable 5GHz Temporarily', description: 'Turn off the 5GHz radio in your router until setup is complete.' }
    ],
    technicianAdvice: 'Most cheap smart devices use old WiFi chips that literally cannot "see" 5GHz networks.',
    relatedProblemIds: ['p830002', 'p580001'],
    createdAt: '2025-11-22T08:00:00Z'
  },
  {
    id: 'p830002',
    title: 'Smart Device "Cloud Offline" (Local works)',
    slug: 'smart-device-cloud-offline-local-works',
    shortDescription: 'You can control the lights when at home, but they don\'t work when you are on mobile data.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['No remote access', 'Works on WiFi only', 'Cloud error'],
    causes: ['DNS blocking', 'Firewall/UPnP issue', 'Server outage'],
    steps: [
      { id: 's1', title: 'Check App Login', description: 'Ensure you are logged into the manufacturer\'s cloud account in the app.' },
      { id: 's2', title: 'Enable Remote Access', description: 'Some apps have a specific toggle to allow control from outside the home.' },
      { id: 's3', title: 'Check Router Firewall', description: 'Ensure the device is allowed to "call home" to the manufacturer\'s servers.' }
    ],
    technicianAdvice: 'If local control works, the device is fine; the issue is the "bridge" to the internet.',
    relatedProblemIds: ['p830001', 'p220001'],
    createdAt: '2025-11-22T09:00:00Z'
  },
  // --- App: Privacy & Permissions ---
  {
    id: 'p840001',
    title: 'App "Microphone" Always Active (Green Dot)',
    slug: 'app-microphone-always-active',
    shortDescription: 'A green or orange dot stays at the top of your screen, indicating an app is listening.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Privacy indicator on', 'Battery drain', 'Paranoia'],
    causes: ['Background recording', 'Voice assistant active', 'App bug'],
    steps: [
      { id: 's1', title: 'Check Privacy Dashboard', description: 'Settings > Privacy > See which app is currently using the microphone.' },
      { id: 's2', title: 'Disable "Hey Siri/Google"', description: 'The system listener for wake words will trigger the indicator on some OS versions.' },
      { id: 's3', title: 'Revoke Mic Permission', description: 'If an app doesn\'t need the mic, take it away in Settings > Apps > Permissions.' }
    ],
    technicianAdvice: 'The indicator is a hardware-level or OS-level security feature that apps cannot hide.',
    relatedProblemIds: ['p840002', 'p500001'],
    createdAt: '2025-11-23T08:00:00Z'
  },
  {
    id: 'p840002',
    title: 'App "Clipboard" Access Notification',
    slug: 'app-clipboard-access-notification',
    shortDescription: 'A popup says "[App] pasted from your clipboard" every time you open it.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Privacy popup', 'Unexpected behavior'],
    causes: ['App checking for links', 'Malicious data scraping'],
    steps: [
      { id: 's1', title: 'Disable Clipboard Access', description: 'In Android 12+, you can toggle "Show clipboard access" to see which apps are doing it.' },
      { id: 's2', title: 'Update the App', description: 'Many developers removed this behavior after OS updates started exposing it.' },
      { id: 's3', title: 'Clear Clipboard', description: 'Copy a blank space to ensure no sensitive data (like passwords) is being read.' }
    ],
    technicianAdvice: 'Many apps "peek" at the clipboard to see if you have a URL copied to offer a quick "Open Link" feature.',
    relatedProblemIds: ['p840001', 'p440001'],
    createdAt: '2025-11-23T09:00:00Z'
  },
  // --- Gaming: Audio & Mic ---
  {
    id: 'p850001',
    title: 'Game Audio "Tunnels" or Sounds Hollow',
    slug: 'game-audio-tunnels-hollow',
    shortDescription: 'The game sounds like it is being played in a large empty hall or through a pipe.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['Hollow sound', 'Echo', 'Missing bass'],
    causes: ['Virtual Surround Sound (7.1) glitch', 'Windows Sonic/Dolby Atmos conflict', 'Bad EQ'],
    steps: [
      { id: 's1', title: 'Disable Virtual Surround', description: 'Turn off 7.1 surround in your headset software; stereo is often clearer.' },
      { id: 's2', title: 'Check Spatial Sound', description: 'Right-click Volume > Spatial Sound > Set to "Off".' },
      { id: 's3', title: 'Check Sample Rate', description: 'Sound Control Panel > Properties > Advanced > Set to "24-bit, 48000Hz (Studio Quality)".' }
    ],
    technicianAdvice: 'Cheap "7.1 Virtual Surround" often just adds a lot of reverb, which ruins directional audio in games.',
    relatedProblemIds: ['p850002', 'p550001'],
    createdAt: '2025-11-24T08:00:00Z'
  },
  {
    id: 'p850002',
    title: 'Gaming Mic "Echo" (Friends hear themselves)',
    slug: 'gaming-mic-echo-friends',
    shortDescription: 'Your friends in party chat complain that they can hear their own voices coming from your mic.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['Echo in chat', 'Feedback', 'Angry teammates'],
    causes: ['Open-back headphones', 'Volume too high', 'Mic sensitivity'],
    steps: [
      { id: 's1', title: 'Lower Headset Volume', description: 'The sound is leaking from the earcups into the microphone.' },
      { id: 's2', title: 'Increase Noise Gate', description: 'In Discord/Console settings, raise the "Input Sensitivity" so it only triggers when you speak.' },
      { id: 's3', title: 'Use Push-to-Talk', description: 'The ultimate fix for noisy environments or leaky headsets.' }
    ],
    technicianAdvice: 'If you use a desktop mic and speakers, you MUST use echo cancellation software or a headset.',
    relatedProblemIds: ['p850001', 'p200001'],
    createdAt: '2025-11-24T09:00:00Z'
  }
];
