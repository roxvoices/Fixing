import { Problem } from './types';

export const EXTRA_PROBLEMS_53: Problem[] = [
  // --- Phone: Software & System ---
  {
    id: 'p2160001',
    title: 'Phone "Clock" is Showing Wrong Time',
    slug: 'phone-clock-wrong-time',
    shortDescription: 'Your phone time is off by several minutes or hours, causing alarms to fail.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Incorrect time', 'Alarms not going off', 'SSL errors in browser'],
    causes: ['Network time sync failure', 'Wrong time zone', 'Manual override'],
    steps: [
      { id: 's1', title: 'Enable "Set Automatically"', description: 'Settings > General > Date & Time > Toggle ON "Set Automatically".' },
      { id: 's2', title: 'Check Time Zone', description: 'Ensure the phone hasn\'t detected the wrong city or region.' },
      { id: 's3', title: 'Restart with SIM Card', description: 'Phones often get their time from the cellular network towers.' }
    ],
    technicianAdvice: 'If your clock is wrong, many websites won\'t load because their security certificates will appear "expired" or "not yet valid".',
    relatedProblemIds: ['p2160002', 'p1930001'],
    createdAt: '2026-04-04T08:00:00Z'
  },
  {
    id: 'p2160002',
    title: 'Phone "Emergency SOS" Keeps Triggering',
    slug: 'phone-emergency-sos-triggering',
    shortDescription: 'Your phone starts a loud countdown to call emergency services while it\'s just sitting in your pocket.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Accidental SOS calls', 'Loud sirens', 'Pocket dialing'],
    causes: ['Stuck power button', 'Tight case', '"Call with 5 Presses" enabled'],
    steps: [
      { id: 's1', title: 'Disable "Call with 5 Presses"', description: 'Settings > Emergency SOS > Turn off the shortcut triggers.' },
      { id: 's2', title: 'Check Power Button', description: 'Ensure the button isn\'t sticky or being pressed by a tight case.' },
      { id: 's3', title: 'Disable "Crash Detection" (if biking)', description: 'Extreme vibrations can sometimes trigger false crash alerts.' }
    ],
    technicianAdvice: 'Accidental SOS calls are a major issue for emergency dispatchers; it\'s best to use the "Hold" method instead of the "5 Press" method.',
    relatedProblemIds: ['p2160001', 'p100001'],
    createdAt: '2026-04-04T09:00:00Z'
  },
  // --- Laptop: Hardware & Maintenance ---
  {
    id: 'p2170001',
    title: 'Laptop "Screen" has a Yellow Tint',
    slug: 'laptop-screen-yellow-tint',
    shortDescription: 'The display looks warm or yellowish, like a piece of old paper.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Yellow hue', 'Warm colors', 'Not true white'],
    causes: ['Night Light / Blue Light filter', 'True Tone (Mac)', 'Failing backlight'],
    steps: [
      { id: 's1', title: 'Disable "Night Light"', description: 'Windows Settings > Display > Toggle OFF Night Light.' },
      { id: 's2', title: 'Disable "True Tone"', description: 'Mac: System Settings > Displays > Uncheck True Tone.' },
      { id: 's3', title: 'Check Color Profile', description: 'Ensure your display isn\'t set to a "Warm" or "Reading" profile.' }
    ],
    technicianAdvice: 'If software filters are off and it\'s still yellow, the LED backlight might be aging, which is common in older laptops.',
    relatedProblemIds: ['p2170002', 'p2070001'],
    createdAt: '2026-04-05T08:00:00Z'
  },
  {
    id: 'p2170002',
    title: 'Laptop "Speakers" are Crackling at High Volume',
    slug: 'laptop-speakers-crackling',
    shortDescription: 'When you turn the volume up, you hear a distorted, "fuzzy" or crackling sound.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Distorted audio', 'Crackling', 'Buzzing'],
    causes: ['Blown speaker cone', 'Loose internal screw', 'Software "Enhancements"'],
    steps: [
      { id: 's1', title: 'Disable Audio Enhancements', description: 'Sound Settings > Properties > Disable all enhancements.' },
      { id: 's2', title: 'Lower the Volume', description: 'If it only happens at 100%, the speakers are likely physically reaching their limit.' },
      { id: 's3', title: 'Check for Debris', description: 'Sometimes a tiny piece of metal or dirt gets stuck to the speaker magnet.' }
    ],
    technicianAdvice: 'Laptop speakers are tiny and fragile; playing bass-heavy music at max volume can easily tear the paper cone.',
    relatedProblemIds: ['p2170001', 'p850002'],
    createdAt: '2026-04-05T09:00:00Z'
  },
  // --- Internet: WiFi & Connectivity ---
  {
    id: 'p2180001',
    title: 'WiFi "Signal" is Strong but "Ping" is High',
    slug: 'wifi-high-ping-strong-signal',
    shortDescription: 'You have full bars, but games are laggy and video calls keep freezing.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['High latency', 'Lag spikes', 'Rubber-banding'],
    causes: ['Bufferbloat', 'Network congestion', 'Interference'],
    steps: [
      { id: 's1', title: 'Test with Ethernet', description: 'If ping is low on Ethernet, the WiFi airwaves are congested.' },
      { id: 's2', title: 'Enable "SQM" or "QoS"', description: 'In router settings, prioritize gaming/voice traffic over downloads.' },
      { id: 's3', title: 'Change WiFi Channel', description: 'Move to a less crowded channel to avoid "waiting" for other routers.' }
    ],
    technicianAdvice: 'Ping is about "speed of light" and congestion, not signal strength. You can have a strong signal that is "noisy".',
    relatedProblemIds: ['p2180002', 'p1800001'],
    createdAt: '2026-04-06T08:00:00Z'
  },
  {
    id: 'p2180002',
    title: 'WiFi "Extender" Keeps Disconnecting',
    slug: 'wifi-extender-disconnecting',
    shortDescription: 'Your WiFi booster works for an hour, then needs to be unplugged and replugged to work again.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Intermittent failure', 'Needs reboot', 'Drops signal'],
    causes: ['Overheating', 'IP conflict with router', 'Weak source signal'],
    steps: [
      { id: 's1', title: 'Move Closer to Router', description: 'If the extender loses its "source" signal, it will hang.' },
      { id: 's2', title: 'Assign a Static IP', description: 'Prevent the extender from fighting with other devices for an address.' },
      { id: 's3', title: 'Check for Firmware Update', description: 'Extenders are notoriously buggy; updates often fix stability.' }
    ],
    technicianAdvice: 'Extenders are often cheap hardware that overheats easily. Mesh systems are much more reliable.',
    relatedProblemIds: ['p2180001', 'p1780002'],
    createdAt: '2026-04-06T09:00:00Z'
  },
  // --- App: Functionality & UI ---
  {
    id: 'p2190001',
    title: 'App "Store" Won\'t Open (White Screen)',
    slug: 'app-store-white-screen',
    shortDescription: 'You tap the App Store or Play Store, and it just shows a blank white screen forever.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Blank screen', 'Infinite loading', 'Cannot browse apps'],
    causes: ['Date/Time mismatch', 'Corrupt cache', 'Account sync error'],
    steps: [
      { id: 's1', title: 'Check Date & Time', description: 'If your clock is wrong, the store\'s security certificates will fail.' },
      { id: 's2', title: 'Clear Store Cache (Android)', description: 'Settings > Apps > Play Store > Storage > Clear Cache & Data.' },
      { id: 's3', title: 'Restart the Phone', description: 'Simple but effective for clearing system service hangs.' }
    ],
    technicianAdvice: 'The App Store is just a web-view; if your internet or security certificates are blocked, it shows nothing.',
    relatedProblemIds: ['p2190002', 'p2160001'],
    createdAt: '2026-04-07T08:00:00Z'
  },
  {
    id: 'p2190002',
    title: 'App "Notifications" are Delayed by Hours',
    slug: 'app-notifications-delayed',
    shortDescription: 'You get a WhatsApp message at 2 PM, but the notification only pops up at 5 PM.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Late alerts', 'Batch notifications', 'Sync lag'],
    causes: ['Aggressive battery saving', '"Doze" mode (Android)', 'Unstable background data'],
    steps: [
      { id: 's1', title: 'Disable Battery Optimization', description: 'Settings > Apps > [App] > Battery > Set to "Unrestricted".' },
      { id: 's2', title: 'Enable "Background Data"', description: 'Ensure the app can use data even when you aren\'t looking at it.' },
      { id: 's3', title: 'Disable "Adaptive Battery"', description: 'System-wide setting that can delay low-priority notifications.' }
    ],
    technicianAdvice: 'Modern phones "kill" background apps to save battery; if an app is killed, it can\'t tell you about new messages.',
    relatedProblemIds: ['p2190001', 'p9'],
    createdAt: '2026-04-07T09:00:00Z'
  },
  // --- Gaming: Performance & Graphics ---
  {
    id: 'p2200001',
    title: 'Game "Resolution" is Blurry on 4K Monitor',
    slug: 'game-resolution-blurry-4k',
    shortDescription: 'You have a 4K screen, but the game looks like it\'s 720p even when set to 4K.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Blurry image', 'Pixelated UI', 'Low detail'],
    causes: ['Windows Display Scaling', 'Internal Render Scale', 'FSR/DLSS set to "Performance"'],
    steps: [
      { id: 's1', title: 'Check "Render Scale"', description: 'Ensure the in-game "Render Scale" or "Resolution Scale" is at 100%.' },
      { id: 's2', title: 'Disable "High DPI Scaling"', description: 'Right-click Game.exe > Properties > Compatibility > Change high DPI settings > Override.' },
      { id: 's3', title: 'Set Upscaling to "Quality"', description: 'If using DLSS/FSR, "Performance" mode renders at a very low resolution.' }
    ],
    technicianAdvice: 'Many games use "Dynamic Resolution" to maintain FPS; if your GPU is weak, it will blur the image to keep things smooth.',
    relatedProblemIds: ['p2200002', 'p2150001'],
    createdAt: '2026-04-08T08:00:00Z'
  },
  {
    id: 'p2200002',
    title: 'Game "Brightness" is Locked in Fullscreen',
    slug: 'game-brightness-locked-fullscreen',
    shortDescription: 'The brightness slider in the game does nothing when you are in Fullscreen mode.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Slider doesn\'t work', 'Stuck brightness', 'Cannot adjust'],
    causes: ['Windows "Auto-HDR"', 'Monitor OSD override', 'DirectX 12 limitation'],
    steps: [
      { id: 's1', title: 'Switch to "Borderless Windowed"', description: 'Allows Windows to handle the brightness instead of the game.' },
      { id: 's2', title: 'Disable "Auto-HDR"', description: 'Windows Settings > Display > HDR > Turn off Auto-HDR.' },
      { id: 's3', title: 'Adjust via GPU Control Panel', description: 'Use NVIDIA/AMD settings to force a brightness/gamma change.' }
    ],
    technicianAdvice: 'In DX12, many traditional "gamma" controls are disabled in favor of system-level HDR management.',
    relatedProblemIds: ['p2200001', 'p1950001'],
    createdAt: '2026-04-08T09:00:00Z'
  }
];
