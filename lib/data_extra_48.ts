import { Problem } from './types';

export const EXTRA_PROBLEMS_48: Problem[] = [
  // --- Phone: Software & System ---
  {
    id: 'p1910001',
    title: 'Phone "Screen" Won\'t Turn Off During Calls',
    slug: 'phone-screen-wont-turn-off-calls',
    shortDescription: 'When you hold the phone to your ear, the screen stays on, causing accidental button presses with your face.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Accidental mutes', 'Face-dialing', 'Screen stays bright'],
    causes: ['Proximity sensor blocked', 'Case interference', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Clean the Top Front', description: 'Wipe the area near the earpiece to clear the proximity sensor.' },
      { id: 's2', title: 'Remove Screen Protector', description: 'Some thick or poorly aligned protectors block the sensor.' },
      { id: 's3', title: 'Test in Safe Mode', description: 'See if a 3rd party app is interfering with the sensor service.' }
    ],
    technicianAdvice: 'The proximity sensor uses infrared light to detect your face; if it\'s blocked, it thinks the phone is still in open air.',
    relatedProblemIds: ['p1910002', 'p910002'],
    createdAt: '2026-03-10T08:00:00Z'
  },
  {
    id: 'p1910002',
    title: 'Phone "Recent Apps" Button Not Working',
    slug: 'phone-recent-apps-button-not-working',
    shortDescription: 'You tap the square button or swipe up to switch apps, but nothing happens.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Cannot switch apps', 'Button unresponsive', 'Gesture failure'],
    causes: ['Launcher crash', 'System UI hang', 'Accessibility service conflict'],
    steps: [
      { id: 's1', title: 'Restart the Launcher', description: 'Settings > Apps > [Your Launcher] > Force Stop.' },
      { id: 's2', title: 'Switch Navigation Mode', description: 'Try switching from "Gestures" to "3-Button Navigation" and back.' },
      { id: 's3', title: 'Disable Accessibility Apps', description: 'Some apps that "draw over" the screen can break system gestures.' }
    ],
    technicianAdvice: 'The "Recent Apps" menu is part of the launcher app; if the launcher is buggy, app switching will break.',
    relatedProblemIds: ['p1910001', 'p410002'],
    createdAt: '2026-03-10T09:00:00Z'
  },
  // --- Laptop: Hardware & Cooling ---
  {
    id: 'p1920001',
    title: 'Laptop "Fan" Always at 100% Speed',
    slug: 'laptop-fan-always-max-speed',
    shortDescription: 'The fan is extremely loud and never slows down, even when you aren\'t doing anything.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Loud fan', 'Constant noise', 'Cool air blowing'],
    causes: ['Stuck background process', 'Corrupt BIOS/EC', 'Failing thermal sensor'],
    steps: [
      { id: 's1', title: 'Check Task Manager', description: 'Look for any app using 20-50% CPU while idle.' },
      { id: 's2', title: 'Reset the EC (Embedded Controller)', description: 'Usually involves a specific power button hold combo (check manufacturer).' },
      { id: 's3', title: 'Update BIOS', description: 'Manufacturers often fix "fan curves" in BIOS updates.' }
    ],
    technicianAdvice: 'If the air blowing out is COLD but the fan is MAX, it\'s a sensor or software issue, not an overheating issue.',
    relatedProblemIds: ['p1920002', 'p230001'],
    createdAt: '2026-03-11T08:00:00Z'
  },
  {
    id: 'p1920002',
    title: 'Laptop "Coil Whine" (High-pitched noise)',
    slug: 'laptop-coil-whine',
    shortDescription: 'You hear a very faint, high-pitched "screeching" or "buzzing" coming from inside the laptop.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['High-pitched noise', 'Buzzing', 'Noise changes with load'],
    causes: ['Vibrating inductors (coils)', 'High power draw'],
    steps: [
      { id: 's1', title: 'Disable C-States in BIOS', description: 'Can sometimes stop the noise by preventing the CPU from entering low-power modes.' },
      { id: 's2', title: 'Cap Frame Rate in Games', description: 'Coil whine is often loudest when the GPU is pushing hundreds of FPS.' },
      { id: 's3', title: 'Use a Different Power Outlet', description: 'Dirty power can sometimes exacerbate electrical noise.' }
    ],
    technicianAdvice: 'Coil whine is not a defect and won\'t damage your laptop, but it can be very annoying in a quiet room.',
    relatedProblemIds: ['p1920001', 'p550002'],
    createdAt: '2026-03-11T09:00:00Z'
  },
  // --- Internet: WiFi & Connectivity ---
  {
    id: 'p1930001',
    title: 'WiFi "Authentication Error" on Android',
    slug: 'wifi-authentication-error-android',
    shortDescription: 'You enter the correct password, but Android keeps saying "Authentication Error occurred".',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Cannot connect', 'Looping', 'Error message'],
    causes: ['WPA3/WPA2 transition mode bug', 'Incorrect date/time', 'MAC randomization'],
    steps: [
      { id: 's1', title: 'Change "MAC Address Type"', description: 'In the WiFi network settings, switch from "Randomized MAC" to "Phone MAC".' },
      { id: 's2', title: 'Check System Time', description: 'If your clock is off by a few minutes, the security handshake will fail.' },
      { id: 's3', title: 'Reset WiFi & Bluetooth', description: 'Settings > System > Reset > Reset WiFi, Mobile & Bluetooth.' }
    ],
    technicianAdvice: 'Android\'s "Randomized MAC" feature can confuse some older routers, leading to authentication failures.',
    relatedProblemIds: ['p1930002', 'p1830002'],
    createdAt: '2026-03-12T08:00:00Z'
  },
  {
    id: 'p1930002',
    title: 'WiFi "Speed" is 0.5Mbps (Extremely Slow)',
    slug: 'wifi-speed-extremely-slow',
    shortDescription: 'The internet is technically connected, but it takes minutes to load a single image.',
    category: 'internet',
    subcategory: 'Speed',
    symptoms: ['Near-zero speed', 'Timeouts', 'Unusable web'],
    causes: ['Severe interference', 'Failing router hardware', 'ISP throttling/limit reached'],
    steps: [
      { id: 's1', title: 'Test with Ethernet', description: 'If Ethernet is fast, your WiFi environment is the problem (interference).' },
      { id: 's2', title: 'Change WiFi Channel', description: 'Use a "WiFi Analyzer" app to find a channel that isn\'t crowded by neighbors.' },
      { id: 's3', title: 'Check Data Cap', description: 'Ensure your ISP hasn\'t throttled you for exceeding a monthly limit.' }
    ],
    technicianAdvice: 'Speeds this low usually indicate a "hardware bottleneck" or a massive amount of packet loss.',
    relatedProblemIds: ['p1930001', 'p1430001'],
    createdAt: '2026-03-12T09:00:00Z'
  },
  // --- App: Functionality & UI ---
  {
    id: 'p1940001',
    title: 'App "Keyboard" Won\'t Pop Up',
    slug: 'app-keyboard-wont-pop-up',
    shortDescription: 'You tap on a text box, but the keyboard never appears, so you can\'t type.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['No keyboard', 'Cannot type', 'UI unresponsive'],
    causes: ['Keyboard app crashed', 'Bluetooth keyboard connected', 'System UI hang'],
    steps: [
      { id: 's1', title: 'Turn Off Bluetooth', description: 'If your phone thinks a physical keyboard is connected, it won\'t show the on-screen one.' },
      { id: 's2', title: 'Switch Keyboard Apps', description: 'If using Gboard, try switching to the system default keyboard.' },
      { id: 's3', title: 'Restart the Phone', description: 'The fastest way to reset the input method service.' }
    ],
    technicianAdvice: 'Sometimes a "ghost" Bluetooth connection to a car or speaker makes the phone think it has a hardware keyboard.',
    relatedProblemIds: ['p1940002', 'p1510001'],
    createdAt: '2026-03-13T08:00:00Z'
  },
  {
    id: 'p1940002',
    title: 'App "Status Bar" is Overlapping Content',
    slug: 'app-status-bar-overlapping',
    shortDescription: 'The clock and battery icons are covering up the buttons at the top of the app.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['UI overlap', 'Cannot click buttons', 'Messy layout'],
    causes: ['App not updated for "Notch"', 'Display scaling issue', 'System UI bug'],
    steps: [
      { id: 's1', title: 'Toggle Full Screen Mode', description: 'In settings, check if the app is set to "Hide Notch" or "Full Screen".' },
      { id: 's2', title: 'Update the App', description: 'Developers must manually update apps to avoid the camera cutout/notch.' },
      { id: 's3', title: 'Change Display Resolution', description: 'On some phones, changing resolution can fix layout scaling issues.' }
    ],
    technicianAdvice: 'This is common in older apps that weren\'t designed for phones with "hole-punch" or "notch" displays.',
    relatedProblemIds: ['p1940001', 'p1840002'],
    createdAt: '2026-03-13T09:00:00Z'
  },
  // --- Gaming: Performance & Graphics ---
  {
    id: 'p1950001',
    title: 'Game "Colors" Look Gray (HDR Conflict)',
    slug: 'game-colors-gray-hdr',
    shortDescription: 'The game looks washed out and gray, even though you have an HDR monitor.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Gray colors', 'Low contrast', 'Washed out image'],
    causes: ['Windows HDR is ON but game HDR is OFF', 'Monitor not in HDR mode'],
    steps: [
      { id: 's1', title: 'Match HDR Settings', description: 'Ensure BOTH Windows and the Game have HDR enabled (or both disabled).' },
      { id: 's2', title: 'Check Cable Bandwidth', description: 'HDR requires a high-quality HDMI 2.0+ or DisplayPort 1.4 cable.' },
      { id: 's3', title: 'Run HDR Calibration', description: 'Use the "Windows HDR Calibration" app to set correct black levels.' }
    ],
    technicianAdvice: 'If you enable HDR in Windows but the game doesn\'t support it, the colors will often look "flat" and gray.',
    relatedProblemIds: ['p1950002', 'p1450002'],
    createdAt: '2026-03-14T08:00:00Z'
  },
  {
    id: 'p1950002',
    title: 'Game "Brightness" Changes Randomly',
    slug: 'game-brightness-changes-randomly',
    shortDescription: 'The screen gets brighter and darker as you move around in the game, which is distracting.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Flickering brightness', 'Auto-dimming', 'Unstable contrast'],
    causes: ['Dynamic Contrast on monitor', 'Windows "Auto-Brightness"', 'Local Dimming'],
    steps: [
      { id: 's1', title: 'Disable "Dynamic Contrast"', description: 'In your monitor\'s physical menu, turn off "DCR" or "Dynamic Contrast".' },
      { id: 's2', title: 'Disable "Content Adaptive Brightness"', description: 'Windows Settings > Display > Brightness > Uncheck "Help improve battery by optimizing content".' },
      { id: 's3', title: 'Turn Off "Local Dimming"', description: 'If your monitor has zones, they can "pop" in and out, causing flickering.' }
    ],
    technicianAdvice: 'Monitor "Eco" modes are the biggest culprit for annoying brightness shifts during gaming.',
    relatedProblemIds: ['p1950001', 'p1810001'],
    createdAt: '2026-03-14T09:00:00Z'
  }
];
