import { Problem } from './types';

export const EXTRA_PROBLEMS_55: Problem[] = [
  // --- Phone: Software & Security ---
  {
    id: 'p2260001',
    title: 'Phone "SIM Card" Not Detected (No Service)',
    slug: 'phone-sim-card-not-detected',
    shortDescription: 'Your phone says "No SIM" or "Invalid SIM" even though the card is inside.',
    category: 'phone',
    subcategory: 'Security',
    symptoms: ['No service', 'Emergency calls only', 'SIM error'],
    causes: ['Dirty SIM contacts', 'Damaged SIM tray', 'Carrier lock'],
    steps: [
      { id: 's1', title: 'Clean the SIM Card', description: 'Remove the card and wipe the gold contacts with a dry cloth.' },
      { id: 's2', title: 'Try a Different SIM', description: 'Test another card to see if the problem is the card or the phone\'s reader.' },
      { id: 's3', title: 'Check for Carrier Lock', description: 'Ensure the phone isn\'t locked to a different network.' }
    ],
    technicianAdvice: 'SIM cards can fail over time due to heat and friction. A replacement from your carrier is usually free.',
    relatedProblemIds: ['p2260002', 'p100001'],
    createdAt: '2026-04-14T08:00:00Z'
  },
  {
    id: 'p2260002',
    title: 'Phone "Find My" Won\'t Turn Off',
    slug: 'phone-find-my-wont-turn-off',
    shortDescription: 'You are trying to sell your phone, but it won\'t let you disable the tracking feature.',
    category: 'phone',
    subcategory: 'Security',
    symptoms: ['Cannot disable tracking', 'Password error', 'Activation lock'],
    causes: ['Incorrect Apple ID/Google password', 'No internet connection', 'System glitch'],
    steps: [
      { id: 's1', title: 'Reset Password', description: 'Ensure you are using the correct credentials for the account logged into the phone.' },
      { id: 's2', title: 'Disable via Web', description: 'Log into iCloud.com or Google.com/android/find and remove the device from your account.' },
      { id: 's3', title: 'Connect to Stable WiFi', description: 'Disabling "Find My" requires a secure handshake with the server.' }
    ],
    technicianAdvice: 'This is a security feature to prevent thieves from wiping stolen phones. You must have the account password.',
    relatedProblemIds: ['p2260001', 'p100001'],
    createdAt: '2026-04-14T09:00:00Z'
  },
  // --- Laptop: Hardware & Ports ---
  {
    id: 'p2270001',
    title: 'Laptop "HDMI" Port Not Working',
    slug: 'laptop-hdmi-port-not-working',
    shortDescription: 'You plug in a monitor or TV, but the laptop doesn\'t detect it.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['No signal', 'Monitor black', 'HDMI not detected'],
    causes: ['Bad cable', 'Wrong input on TV', 'Graphics driver error'],
    steps: [
      { id: 's1', title: 'The "Win + P" Shortcut', description: 'Press Windows + P and select "Extend" or "Duplicate".' },
      { id: 's2', title: 'Try a Different Cable', description: 'HDMI cables are prone to internal wire breaks.' },
      { id: 's3', title: 'Update Graphics Drivers', description: 'The HDMI port is controlled directly by the GPU.' }
    ],
    technicianAdvice: 'If the port is physically wobbly, the internal pins might be broken, requiring a motherboard repair.',
    relatedProblemIds: ['p2270002', 'p320002'],
    createdAt: '2026-04-15T08:00:00Z'
  },
  {
    id: 'p2270002',
    title: 'Laptop "Headphone Jack" is Broken',
    slug: 'laptop-headphone-jack-broken',
    shortDescription: 'Sound only comes out of one ear, or the laptop doesn\'t switch to headphones when plugged in.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['One-sided audio', 'No detection', 'Static noise'],
    causes: ['Lint in jack', 'Bent internal pin', 'Software routing error'],
    steps: [
      { id: 's1', title: 'Clean the Jack', description: 'Use a toothpick to gently remove any lint or debris.' },
      { id: 's2', title: 'Check Default Playback Device', description: 'Right-click Speaker icon > Sounds > Ensure "Headphones" is default.' },
      { id: 's3', title: 'Use a USB-to-3.5mm Adapter', description: 'A cheap way to bypass a physically broken internal jack.' }
    ],
    technicianAdvice: 'Headphone jacks are high-wear components; if you trip over the cord, you can easily bend the internal contacts.',
    relatedProblemIds: ['p2270001', 'p850002'],
    createdAt: '2026-04-15T09:00:00Z'
  },
  // --- Internet: WiFi & Connectivity ---
  {
    id: 'p2280001',
    title: 'WiFi "Signal" is Weak Near Large Mirrors',
    slug: 'wifi-signal-weak-mirrors-2',
    shortDescription: 'Your WiFi signal drops significantly when you are standing near a large mirror.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Signal drop', 'Slow speed', 'Disconnects'],
    causes: ['Metal backing on mirrors reflects signals'],
    steps: [
      { id: 's1', title: 'Move the Router', description: 'Ensure the router isn\'t "aiming" directly at a large mirror.' },
      { id: 's2', title: 'Use a Mesh Node', description: 'Place a node where it has a clear path around the mirror.' },
      { id: 's3', title: 'Switch to 5GHz', description: 'While water still absorbs it, 5GHz might find other paths (reflections) better.' }
    ],
    technicianAdvice: 'Mirrors are essentially thin sheets of metal. They reflect WiFi signals just like they reflect light.',
    relatedProblemIds: ['p2280002', 'p1780001'],
    createdAt: '2026-04-16T08:00:00Z'
  },
  {
    id: 'p2280002',
    title: 'WiFi "Signal" is Weak in the Basement',
    slug: 'wifi-signal-weak-basement-2',
    shortDescription: 'The router is on the top floor, and the basement gets almost no internet.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Dead zone', 'Frequent drops', 'Slow speed'],
    causes: ['Concrete floors', 'Distance', 'HVAC ducting'],
    steps: [
      { id: 's1', title: 'Use Powerline Adapters', description: 'Send the internet through your home\'s electrical wiring to the basement.' },
      { id: 's2', title: 'Install a Wired Access Point', description: 'Run an Ethernet cable down to the basement for a dedicated WiFi node.' },
      { id: 's3', title: 'Tilt Router Antennas', description: 'Position antennas horizontally to push the signal more vertically.' }
    ],
    technicianAdvice: 'Concrete and metal ducting in floors are very effective at blocking WiFi signals from traveling vertically.',
    relatedProblemIds: ['p2280001', 'p430002'],
    createdAt: '2026-04-16T09:00:00Z'
  },
  // --- App: Functionality & UI ---
  {
    id: 'p2290001',
    title: 'App "Camera" is Upside Down',
    slug: 'app-camera-upside-down-2',
    shortDescription: 'When you open the camera in a specific app (like Instagram), the image is flipped or inverted.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Inverted image', 'Upside down video', 'UI glitch'],
    causes: ['App bug', 'Orientation sensor glitch', 'System rotation lock'],
    steps: [
      { id: 's1', title: 'Toggle Rotation Lock', description: 'Turn it off and rotate the phone 360 degrees to reset the sensor.' },
      { id: 's2', title: 'Clear App Data', description: 'Resets the app\'s internal camera configuration.' },
      { id: 's3', title: 'Check for App Update', description: 'This is almost always a coding bug in how the app handles the camera API.' }
    ],
    technicianAdvice: 'If the main camera app is fine, the hardware is okay; the specific app is just confused about the phone\'s orientation.',
    relatedProblemIds: ['p2290002', 'p1540001'],
    createdAt: '2026-04-17T08:00:00Z'
  },
  {
    id: 'p2290002',
    title: 'App "Sound" Only Plays Through Earpiece',
    slug: 'app-sound-earpiece-only-2',
    shortDescription: 'Music or videos are coming out of the tiny speaker at the top instead of the loud bottom speakers.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Quiet sound', 'Wrong speaker', 'Muffled audio'],
    causes: ['Proximity sensor glitch', 'App thinks you are on a call', 'Software bug'],
    steps: [
      { id: 's1', title: 'Clean the Proximity Sensor', description: 'If the phone thinks it\'s against your ear, it will switch to the earpiece.' },
      { id: 's2', title: 'Force Close Communication Apps', description: 'Apps like WhatsApp or Skype can "hang" the audio in call mode.' },
      { id: 's3', title: 'Restart the Phone', description: 'Resets the system audio routing service.' }
    ],
    technicianAdvice: 'This is common in voice-messaging apps; they switch to the earpiece for privacy when they detect something near the sensor.',
    relatedProblemIds: ['p2290001', 'p1760001'],
    createdAt: '2026-04-17T09:00:00Z'
  },
  // --- Gaming: Performance & Graphics ---
  {
    id: 'p2300001',
    title: 'Game "Graphics" are Blurry (DLSS/FSR)',
    slug: 'game-graphics-blurry-upscaling-2',
    shortDescription: 'The game runs fast, but everything looks a bit "soft" or "smeary", especially when moving.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Blurry image', 'Ghosting', 'Soft edges'],
    causes: ['Aggressive upscaling (Ultra Performance mode)', 'Low internal resolution'],
    steps: [
      { id: 's1', title: 'Change Upscaling to "Quality"', description: 'Avoid "Performance" or "Ultra Performance" unless you have no choice.' },
      { id: 's2', title: 'Increase "Sharpening"', description: 'Most upscalers have a slider to add artificial detail back in.' },
      { id: 's3', title: 'Disable Motion Blur', description: 'Upscaling + Motion Blur often results in a very messy image.' }
    ],
    technicianAdvice: 'Upscaling works by rendering at a lower resolution and "guessing" the missing pixels; "Quality" mode is usually indistinguishable from native.',
    relatedProblemIds: ['p2300002', 'p2000002'],
    createdAt: '2026-04-18T08:00:00Z'
  },
  {
    id: 'p2300002',
    title: 'Game "Shadows" are Flickering',
    slug: 'game-shadows-flickering-2',
    shortDescription: 'Shadows on walls or ground seem to "dance" or strobe, which is very distracting.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Flickering shadows', 'Strobe effect', 'Visual artifacts'],
    causes: ['Ambient Occlusion bug', 'Low shadow resolution', 'Driver conflict'],
    steps: [
      { id: 's1', title: 'Increase Shadow Quality', description: 'Low-resolution shadow maps often flicker at the edges.' },
      { id: 's2', title: 'Change Ambient Occlusion Type', description: 'Switch from SSAO to HBAO+ or disable it entirely.' },
      { id: 's3', title: 'Update GPU Drivers', description: 'Shadow rendering bugs are frequently fixed in driver updates.' }
    ],
    technicianAdvice: 'Shadow flickering is often a "z-fighting" issue where two surfaces are too close together and the GPU can\'t decide which is in front.',
    relatedProblemIds: ['p2300001', 'p1450002'],
    createdAt: '2026-04-18T09:00:00Z'
  }
];
