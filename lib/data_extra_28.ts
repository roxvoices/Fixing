import { Problem } from './types';

export const EXTRA_PROBLEMS_28: Problem[] = [
  // --- Phone: Sensors & Hardware ---
  {
    id: 'p910001',
    title: 'Phone Screen "Auto-Brightness" Too Dark',
    slug: 'phone-auto-brightness-too-dark',
    shortDescription: 'The screen is hard to see because it keeps dimming too much, even in bright rooms.',
    category: 'phone',
    subcategory: 'Sensors',
    symptoms: ['Dim screen', 'Hard to read', 'Constant adjustments'],
    causes: ['Dirty ambient light sensor', 'Software calibration', 'Case blocking sensor'],
    steps: [
      { id: 's1', title: 'Clean the Top Bezel', description: 'The light sensor is near the earpiece; wipe it with a clean cloth.' },
      { id: 's2', title: 'Reset Auto-Brightness', description: 'Turn it OFF, go into a dark room, set brightness to min, then turn it ON again.' },
      { id: 's3', title: 'Check for Screen Protector Issues', description: 'Some cheap protectors don\'t have a cutout for the light sensor.' }
    ],
    technicianAdvice: 'The phone "learns" your preferences; if you manually adjust it while auto-brightness is on, it will adapt over time.',
    relatedProblemIds: ['p910002', 'p310001'],
    createdAt: '2025-11-30T08:00:00Z'
  },
  {
    id: 'p910002',
    title: 'Phone "Proximity Sensor" Not Turning Off Screen During Calls',
    slug: 'phone-proximity-sensor-not-working',
    shortDescription: 'Your face accidentally presses buttons (like Mute or Hang Up) during a call because the screen stays on.',
    category: 'phone',
    subcategory: 'Sensors',
    symptoms: ['Screen stays on during calls', 'Accidental button presses', 'Face-dialing'],
    causes: ['Dirty sensor', 'Software glitch', 'Hardware failure'],
    steps: [
      { id: 's1', title: 'Test in Voice Memos', description: 'Record a memo and hold the phone to your ear. The screen should turn off.' },
      { id: 's2', title: 'Remove Thick Case', description: 'Some cases have a lip that reflects the infrared light back into the sensor.' },
      { id: 's3', title: 'Calibrate with App', description: 'On Android, use "Proximity Sensor Reset" apps to recalibrate the hardware.' }
    ],
    technicianAdvice: 'The proximity sensor uses infrared light; if the glass is scratched or dirty, the light can\'t "see" your face.',
    relatedProblemIds: ['p910001', 'p240002'],
    createdAt: '2025-11-30T09:00:00Z'
  },
  // --- Laptop: Display & Video ---
  {
    id: 'p920001',
    title: 'Laptop Screen "Backlight Bleed" (Bright edges)',
    slug: 'laptop-backlight-bleed',
    shortDescription: 'In a dark room, the edges of the screen look bright or yellowish, especially on black backgrounds.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Bright edges', 'Uneven blacks', 'Yellowish glow'],
    causes: ['Tight bezel', 'LCD panel pressure', 'Manufacturing variance'],
    steps: [
      { id: 's1', title: 'Lower Brightness', description: 'Bleed is much more noticeable at 100% brightness.' },
      { id: 's2', title: 'Gently Massage the Bezel', description: 'Use a microfiber cloth to very lightly press the edges of the screen to relieve pressure.' },
      { id: 's3', title: 'Check Warranty', description: 'If it\'s severe (visible during normal use), it may be considered a defect.' }
    ],
    technicianAdvice: 'Backlight bleed is a physical characteristic of IPS panels; almost every screen has some, but the amount varies.',
    relatedProblemIds: ['p920002', 'p520002'],
    createdAt: '2025-12-01T08:00:00Z'
  },
  {
    id: 'p920002',
    title: 'Laptop External Monitor "Flickering" (Blacking out)',
    slug: 'laptop-external-monitor-flickering',
    shortDescription: 'The second monitor randomly goes black for a second and then comes back.',
    category: 'laptop',
    subcategory: 'Connectivity',
    symptoms: ['Intermittent blackout', 'Flickering', 'Static'],
    causes: ['Bad HDMI/DP cable', 'Insufficient power to dock', 'Refresh rate mismatch'],
    steps: [
      { id: 's1', title: 'Try a Different Cable', description: '90% of flickering issues are caused by a low-quality or damaged cable.' },
      { id: 's2', title: 'Lower Refresh Rate', description: 'If running 4K at 60Hz, try 30Hz to see if the flickering stops.' },
      { id: 's3', title: 'Plug Dock into Power', description: 'If using a USB-C dock, ensure it has its own power supply connected.' }
    ],
    technicianAdvice: 'High-resolution signals are very sensitive to cable quality and electrical interference.',
    relatedProblemIds: ['p920001', 'p320002'],
    createdAt: '2025-12-01T09:00:00Z'
  },
  // --- Internet: Speed & Stability ---
  {
    id: 'p930001',
    title: 'Internet "Slow at Night" (ISP Congestion)',
    slug: 'internet-slow-at-night-congestion',
    shortDescription: 'The internet is fast during the day but slows down significantly between 7 PM and 11 PM.',
    category: 'internet',
    subcategory: 'Speed',
    symptoms: ['Evening slowdown', 'Buffering', 'High latency'],
    causes: ['Neighborhood congestion', 'ISP overselling bandwidth'],
    steps: [
      { id: 's1', title: 'Run Speed Test at Different Times', description: 'Document the difference between 10 AM and 8 PM to show your ISP.' },
      { id: 's2', title: 'Switch to 5GHz WiFi', description: 'Avoid local interference from neighbors\' routers which also peaks at night.' },
      { id: 's3', title: 'Contact ISP', description: 'They may need to "split the node" in your area if it is overloaded.' }
    ],
    technicianAdvice: 'Cable internet is a shared medium; if everyone in your block is watching Netflix, your speed will drop.',
    relatedProblemIds: ['p930002', 'p160001'],
    createdAt: '2025-12-02T08:00:00Z'
  },
  {
    id: 'p930002',
    title: 'WiFi "Authentication Error" (Correct Password)',
    slug: 'wifi-authentication-error-correct-password',
    shortDescription: 'You are 100% sure the password is correct, but the device says "Authentication Error".',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Cannot connect', 'Error message', 'Looping'],
    causes: ['WPA3 vs WPA2 mismatch', 'Special characters in SSID', 'Router glitch'],
    steps: [
      { id: 's1', title: 'Forget the Network', description: 'Delete the saved profile and try connecting from scratch.' },
      { id: 's2', title: 'Change Security to WPA2', description: 'Some older devices cannot handle WPA3 encryption.' },
      { id: 's3', title: 'Restart Both Devices', description: 'Clears any temporary handshake errors.' }
    ],
    technicianAdvice: 'If your password has symbols like "#" or "$", some devices might struggle to parse it correctly.',
    relatedProblemIds: ['p930001', 'p580002'],
    createdAt: '2025-12-02T09:00:00Z'
  },
  // --- App: Functionality & Storage ---
  {
    id: 'p940001',
    title: 'App "SD Card" Not Recognized for Storage',
    slug: 'app-sd-card-not-recognized',
    shortDescription: 'You want to move an app to the SD card, but the option is missing or grayed out.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Cannot move app', 'SD card missing', 'Storage error'],
    causes: ['App developer disabled SD support', 'SD card not "Adoptable"', 'Slow SD card'],
    steps: [
      { id: 's1', title: 'Check App Info', description: 'Not all apps (like WhatsApp or Facebook) allow being moved to SD cards.' },
      { id: 's2', title: 'Format as Internal Storage', description: 'Settings > Storage > SD Card > Format as internal (Warning: wipes SD card).' },
      { id: 's3', title: 'Use a Class 10/U3 Card', description: 'If the card is too slow, the system won\'t let you run apps from it.' }
    ],
    technicianAdvice: 'Running apps from an SD card is much slower and less reliable than internal storage.',
    relatedProblemIds: ['p940002', 'p340002'],
    createdAt: '2025-12-03T08:00:00Z'
  },
  {
    id: 'p940002',
    title: 'App "Download Pending" (Play Store)',
    slug: 'app-download-pending-play-store',
    shortDescription: 'You click install, but it stays on "Pending" forever and never starts the download.',
    category: 'app',
    subcategory: 'Installation',
    symptoms: ['Stuck download', '"Pending" status', 'No progress'],
    causes: ['Other apps updating', 'Play Store background task hang', 'Data limit reached'],
    steps: [
      { id: 's1', title: 'Stop All Other Updates', description: 'The Play Store only downloads one app at a time.' },
      { id: 's2', title: 'Clear Play Store Cache', description: 'Settings > Apps > Google Play Store > Storage > Clear Cache.' },
      { id: 's3', title: 'Check WiFi vs Data Settings', description: 'Ensure you haven\'t set it to "Over WiFi only" while on mobile data.' }
    ],
    technicianAdvice: 'This is usually caused by Google Play Services updating itself in the background.',
    relatedProblemIds: ['p940001', 'p260001'],
    createdAt: '2025-12-03T09:00:00Z'
  },
  // --- Gaming: Performance & Software ---
  {
    id: 'p950001',
    title: 'Game "Micro-Stuttering" (Smooth FPS but feels laggy)',
    slug: 'game-micro-stuttering',
    shortDescription: 'The FPS counter says 60, but the game feels "hitchy" and not smooth.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Hitchy movement', 'Frame time spikes', 'Unsmooth feel'],
    causes: ['Unstable frame times', 'Background CPU spikes', 'Shader compilation'],
    steps: [
      { id: 's1', title: 'Cap FPS at 60', description: 'Use RivaTuner or GPU settings to force a perfectly consistent 16.6ms frame time.' },
      { id: 's2', title: 'Disable "Full Screen Optimizations"', description: 'Right-click Game.exe > Properties > Compatibility > Disable full screen optimizations.' },
      { id: 's3', title: 'Turn Off Overlays', description: 'Discord and Steam overlays are famous for causing micro-stutter.' }
    ],
    technicianAdvice: 'Consistent 60 FPS is much better than "90 FPS with drops to 40".',
    relatedProblemIds: ['p950002', 'p180001'],
    createdAt: '2025-12-04T08:00:00Z'
  },
  {
    id: 'p950002',
    title: 'Game "Shader Compilation" Lag',
    slug: 'game-shader-compilation-lag',
    shortDescription: 'The game stutters every time you enter a new area or see a new effect for the first time.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Stutter in new areas', 'Lag during combat', 'Smooth after 10 mins'],
    causes: ['DX12 shader building', 'Slow CPU'],
    steps: [
      { id: 's1', title: 'Wait at Main Menu', description: 'Some games compile shaders in the background; let it sit for 5-10 minutes.' },
      { id: 's2', title: 'Update GPU Drivers', description: 'New drivers often come with pre-compiled shader caches for popular games.' },
      { id: 's3', title: 'Switch to DX11', description: 'If the game supports it, DX11 often has less shader stutter than DX12.' }
    ],
    technicianAdvice: 'This is a common issue in modern PC games; the stutter usually goes away once all shaders are cached.',
    relatedProblemIds: ['p950001', 'p180002'],
    createdAt: '2025-12-04T09:00:00Z'
  }
];
