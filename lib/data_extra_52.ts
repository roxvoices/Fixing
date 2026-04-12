import { Problem } from './types';

export const EXTRA_PROBLEMS_52: Problem[] = [
  // --- Phone: Hardware & Charging ---
  {
    id: 'p2110001',
    title: 'Phone "Wireless Charging" is Very Slow',
    slug: 'phone-wireless-charging-slow',
    shortDescription: 'Your phone takes 5 hours to charge wirelessly, but only 1 hour with a cable.',
    category: 'phone',
    subcategory: 'Hardware',
    symptoms: ['Slow charging', 'Phone gets hot', 'Frequent disconnects'],
    causes: ['Thick case', 'Misalignment', 'Low-wattage wall brick'],
    steps: [
      { id: 's1', title: 'Remove the Case', description: 'Cases thicker than 3mm or those with metal plates block the induction coils.' },
      { id: 's2', title: 'Check the Wall Adapter', description: 'Ensure the wireless pad is plugged into a 18W+ "Fast Charge" brick.' },
      { id: 's3', title: 'Center the Phone', description: 'Even a 1cm misalignment can drop charging efficiency by 50%.' }
    ],
    technicianAdvice: 'Wireless charging is inherently less efficient than wired; heat is the enemy of speed here.',
    relatedProblemIds: ['p2110002', 'p100002'],
    createdAt: '2026-03-30T08:00:00Z'
  },
  {
    id: 'p2110002',
    title: 'Phone "Battery" Percentage Jumps Around',
    slug: 'phone-battery-percentage-jumps',
    shortDescription: 'Your phone says 40%, then suddenly drops to 10%, or jumps up when you plug it in.',
    category: 'phone',
    subcategory: 'Hardware',
    symptoms: ['Unstable percentage', 'Sudden shutdown', 'Fast drain'],
    causes: ['Calibration error', 'Failing battery cell', 'Cold weather'],
    steps: [
      { id: 's1', title: 'Calibrate the Battery', description: 'Drain to 0% until it turns off, then charge to 100% without interruption.' },
      { id: 's2', title: 'Check Battery Health', description: 'Settings > Battery > Battery Health. If below 80%, it needs replacement.' },
      { id: 's3', title: 'Avoid Extreme Cold', description: 'Batteries struggle to report voltage correctly in freezing temperatures.' }
    ],
    technicianAdvice: 'If the percentage jumps by more than 10% instantly, a physical cell inside the battery is likely failing.',
    relatedProblemIds: ['p2110001', 'p230002'],
    createdAt: '2026-03-30T09:00:00Z'
  },
  // --- Laptop: Hardware & Maintenance ---
  {
    id: 'p2120001',
    title: 'Laptop "Keyboard" Backlight Won\'t Turn On',
    slug: 'laptop-keyboard-backlight-off',
    shortDescription: 'The keys don\'t light up in the dark, even though your laptop has the feature.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Dark keys', 'Function key doesn\'t work', 'Settings missing'],
    causes: ['Disabled in BIOS', 'Control software missing', 'Loose ribbon cable'],
    steps: [
      { id: 's1', title: 'Check the Function Key', description: 'Look for a "Sun" or "Keyboard" icon on the F-keys (e.g., Fn + F5).' },
      { id: 's2', title: 'Check Ambient Light Sensor', description: 'Some laptops only turn on the backlight if the room is dark.' },
      { id: 's3', title: 'Update Manufacturer Software', description: 'Apps like "Armoury Crate" or "Alienware Command Center" control the lighting.' }
    ],
    technicianAdvice: 'If the backlight flashes once during boot but stays off in Windows, it\'s a software/driver issue.',
    relatedProblemIds: ['p2120002', 'p1870002'],
    createdAt: '2026-03-31T08:00:00Z'
  },
  {
    id: 'p2120002',
    title: 'Laptop "Screen" has a Single Bright Pixel',
    slug: 'laptop-screen-stuck-pixel',
    shortDescription: 'There is a tiny, glowing dot (usually red, green, or blue) that never goes away.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Bright dot', 'Stuck color', 'Distracting'],
    causes: ['Stuck transistor in the LCD'],
    steps: [
      { id: 's1', title: 'The "Massage" Method', description: 'Gently rub the pixel with a soft cloth and a blunt object (like a pen cap) while the screen is off.' },
      { id: 's2', title: 'Use a Pixel Fixer Website', description: 'Run a site that flashes colors rapidly in that area to "wake up" the pixel.' },
      { id: 's3', title: 'Check Warranty', description: 'Most manufacturers only replace screens if there are 3-5+ dead pixels.' }
    ],
    technicianAdvice: 'A "stuck" pixel (colored) can often be fixed; a "dead" pixel (black) is usually permanent.',
    relatedProblemIds: ['p2120001', 'p1670002'],
    createdAt: '2026-03-31T09:00:00Z'
  },
  // --- Internet: WiFi & Range ---
  {
    id: 'p2130001',
    title: 'WiFi "Signal" is Blocked by Aquarium',
    slug: 'wifi-signal-blocked-aquarium',
    shortDescription: 'You have a large fish tank between your router and your office, and the signal is terrible.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Weak signal', 'Dead zone behind tank', 'Slow speed'],
    causes: ['Water absorbs WiFi signals (2.4GHz)'],
    steps: [
      { id: 's1', title: 'Move the Router High', description: 'Get the router above the water level of the tank.' },
      { id: 's2', title: 'Use a Mesh Node', description: 'Place a node on the same side of the tank as your devices.' },
      { id: 's3', title: 'Switch to 5GHz', description: 'While water still absorbs it, 5GHz might find other paths (reflections) better.' }
    ],
    technicianAdvice: 'Water is the ultimate WiFi killer. A large tank is essentially a wall of lead for wireless signals.',
    relatedProblemIds: ['p2130002', 'p1780001'],
    createdAt: '2026-04-01T08:00:00Z'
  },
  {
    id: 'p2130002',
    title: 'WiFi "Signal" is Weak in the Basement',
    slug: 'wifi-signal-weak-basement',
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
    relatedProblemIds: ['p2130001', 'p430002'],
    createdAt: '2026-04-01T09:00:00Z'
  },
  // --- App: Functionality & UI ---
  {
    id: 'p2140001',
    title: 'App "Camera" is Upside Down',
    slug: 'app-camera-upside-down',
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
    relatedProblemIds: ['p2140002', 'p1540001'],
    createdAt: '2026-04-02T08:00:00Z'
  },
  {
    id: 'p2140002',
    title: 'App "Sound" Only Plays Through Earpiece',
    slug: 'app-sound-earpiece-only',
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
    relatedProblemIds: ['p2140001', 'p1760001'],
    createdAt: '2026-04-02T09:00:00Z'
  },
  // --- Gaming: Performance & Graphics ---
  {
    id: 'p2150001',
    title: 'Game "Graphics" are Blurry (DLSS/FSR)',
    slug: 'game-graphics-blurry-upscaling',
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
    relatedProblemIds: ['p2150002', 'p2000002'],
    createdAt: '2026-04-03T08:00:00Z'
  },
  {
    id: 'p2150002',
    title: 'Game "Shadows" are Flickering',
    slug: 'game-shadows-flickering',
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
    relatedProblemIds: ['p2150001', 'p1450002'],
    createdAt: '2026-04-03T09:00:00Z'
  }
];
