import { Problem } from './types';

export const EXTRA_PROBLEMS_46: Problem[] = [
  // --- Phone: Software & System ---
  {
    id: 'p1810001',
    title: 'Phone "Auto-Brightness" is Too Dark',
    slug: 'phone-auto-brightness-too-dark',
    shortDescription: 'The screen keeps dimming too much, making it hard to see even in a bright room.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Dim screen', 'Hard to read', 'Frequent adjustments'],
    causes: ['Dirty ambient light sensor', 'Software calibration', 'Case blocking sensor'],
    steps: [
      { id: 's1', title: 'Clean the Top of the Phone', description: 'Wipe the area near the earpiece where the light sensor is located.' },
      { id: 's2', title: 'Reset Auto-Brightness', description: 'Settings > Accessibility > Display > Toggle Auto-Brightness OFF and ON.' },
      { id: 's3', title: 'Train the Sensor', description: 'When it dims too much, manually slide it up. The phone will "learn" your preference over time.' }
    ],
    technicianAdvice: 'Modern phones use machine learning for brightness; if you keep correcting it, it will eventually stop dimming so aggressively.',
    relatedProblemIds: ['p1810002', 'p1510002'],
    createdAt: '2026-02-28T08:00:00Z'
  },
  {
    id: 'p1810002',
    title: 'Phone "Flashlight" Won\'t Turn On',
    slug: 'phone-flashlight-wont-turn-on',
    shortDescription: 'The flashlight icon is grayed out or simply doesn\'t do anything when tapped.',
    category: 'phone',
    subcategory: 'Hardware',
    symptoms: ['No light', 'Grayed out icon', 'Camera error'],
    causes: ['Camera in use by another app', 'Low battery', 'Overheating'],
    steps: [
      { id: 's1', title: 'Close Camera Apps', description: 'The flashlight and camera share the same hardware; if an app is using the camera, the light is locked.' },
      { id: 's2', title: 'Charge the Phone', description: 'Many phones disable the flashlight if the battery is below 5%.' },
      { id: 's3', title: 'Let the Phone Cool Down', description: 'If the phone is too hot, it will disable the LED to prevent damage.' }
    ],
    technicianAdvice: 'If the flashlight icon is active but no light comes out, the LED itself or its ribbon cable is likely broken.',
    relatedProblemIds: ['p1810001', 'p560002'],
    createdAt: '2026-02-28T09:00:00Z'
  },
  // --- Laptop: Hardware & Cooling ---
  {
    id: 'p1820001',
    title: 'Laptop "Fan" is Making a Grinding Noise',
    slug: 'laptop-fan-grinding-noise',
    shortDescription: 'The laptop fan sounds like it\'s hitting something or has a "growling" noise.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Grinding sound', 'Vibration', 'Overheating'],
    causes: ['Worn out bearing', 'Dust buildup', 'Bent fan blade'],
    steps: [
      { id: 's1', title: 'Clean with Compressed Air', description: 'Blow air through the vents to dislodge any large dust bunnies.' },
      { id: 's2', title: 'Check for Obstructions', description: 'Ensure no small labels or wires have fallen into the fan housing.' },
      { id: 's3', title: 'Replace the Fan', description: 'If the bearing is gone, the fan will eventually stop spinning. Replace it immediately.' }
    ],
    technicianAdvice: 'A grinding fan is a ticking time bomb; if it stops, your laptop will overheat and potentially damage the CPU.',
    relatedProblemIds: ['p1820002', 'p230001'],
    createdAt: '2026-03-01T08:00:00Z'
  },
  {
    id: 'p1820002',
    title: 'Laptop "Chassis" is Giving Electric Shocks',
    slug: 'laptop-chassis-electric-shocks',
    shortDescription: 'You feel a tingle or a small shock when you touch the metal parts of your laptop.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Electric tingle', 'Static shocks', 'Vibrating sensation'],
    causes: ['Ungrounded power outlet', 'Cheap 3rd party charger', 'Static buildup'],
    steps: [
      { id: 's1', title: 'Use a Grounded Outlet', description: 'Ensure you are using a 3-prong plug and a properly grounded wall socket.' },
      { id: 's2', title: 'Try a Different Charger', description: 'Cheap chargers often lack proper isolation, leading to "leakage" current on the case.' },
      { id: 's3', title: 'Use on a Non-Static Surface', description: 'Avoid using the laptop on carpets or with wool clothing.' }
    ],
    technicianAdvice: 'This is usually "parasitic" current; it\'s not usually dangerous, but it indicates a poor electrical ground.',
    relatedProblemIds: ['p1820001', 'p570002'],
    createdAt: '2026-03-01T09:00:00Z'
  },
  // --- Internet: WiFi & Range ---
  {
    id: 'p1830001',
    title: 'WiFi "Signal" is Strong but No Internet',
    slug: 'wifi-signal-strong-no-internet',
    shortDescription: 'Your device shows full bars of WiFi, but you can\'t load any websites.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Full bars', 'No internet', '"Connected, no internet"'],
    causes: ['Modem disconnected from ISP', 'Router DNS error', 'Account suspended'],
    steps: [
      { id: 's1', title: 'Check the Modem Lights', description: 'Ensure the "Online" or "Internet" light is solid green/blue.' },
      { id: 's2', title: 'Restart Both Modem and Router', description: 'Unplug both, wait 60 seconds, then plug in the modem first.' },
      { id: 's3', title: 'Check ISP Outage Map', description: 'Use your mobile data to see if there is a local outage.' }
    ],
    technicianAdvice: 'Full bars only mean you are connected to the ROUTER; it doesn\'t mean the router is connected to the WORLD.',
    relatedProblemIds: ['p1830002', 'p1430002'],
    createdAt: '2026-03-02T08:00:00Z'
  },
  {
    id: 'p1830002',
    title: 'WiFi "Password" is Correct but Won\'t Connect',
    slug: 'wifi-password-correct-wont-connect',
    shortDescription: 'You are 100% sure the password is right, but the device says "Incorrect Password" or "Failed to Connect".',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Authentication error', 'Connection failed', 'Looping'],
    causes: ['Special characters in SSID/Password', 'WPA3/WPA2 mismatch', 'IP address conflict'],
    steps: [
      { id: 's1', title: 'Forget the Network', description: 'Delete the saved network from your device and try again from scratch.' },
      { id: 's2', title: 'Check Caps Lock', description: 'WiFi passwords are case-sensitive.' },
      { id: 's3', title: 'Restart the Device', description: 'Sometimes the WiFi chip gets into a "bad state" and needs a reboot.' }
    ],
    technicianAdvice: 'If you have a very long password with symbols, some older devices might struggle to process it correctly.',
    relatedProblemIds: ['p1830001', 'p1730001'],
    createdAt: '2026-03-02T09:00:00Z'
  },
  // --- App: Functionality & UI ---
  {
    id: 'p1840001',
    title: 'App "Icons" are Missing from Home Screen',
    slug: 'app-icons-missing-home-screen',
    shortDescription: 'You know the app is installed, but you can\'t find the icon anywhere.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Missing icons', 'Cannot find app', 'Search works but no icon'],
    causes: ['App hidden in settings', 'Launcher glitch', 'App moved to "App Library"'],
    steps: [
      { id: 's1', title: 'Search the App Library', description: 'Swipe all the way to the right (iOS) or up (Android) to find the full list.' },
      { id: 's2', title: 'Check "Hidden Apps"', description: 'Look in your launcher settings for a "Hide Apps" folder.' },
      { id: 's3', title: 'Reset Home Screen Layout', description: 'Settings > Home Screen > Reset. (Warning: will remove your folders).' }
    ],
    technicianAdvice: 'On modern iPhones, new apps often go straight to the App Library instead of the Home Screen.',
    relatedProblemIds: ['p1840002', 'p1410001'],
    createdAt: '2026-03-03T08:00:00Z'
  },
  {
    id: 'p1840002',
    title: 'App "Text" is Overlapping',
    slug: 'app-text-overlapping',
    shortDescription: 'The words in the app are jumbled together or cut off, making it impossible to read.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['UI glitch', 'Text overlap', 'Broken layout'],
    causes: ['System font size too large', 'App doesn\'t support scaling', 'Resolution mismatch'],
    steps: [
      { id: 's1', title: 'Reduce System Font Size', description: 'Settings > Display > Font Size. Set it back to "Default".' },
      { id: 's2', title: 'Check "Display Scaling"', description: 'Ensure your phone isn\'t set to "Zoomed" mode.' },
      { id: 's3', title: 'Update the App', description: 'Developers often fix layout bugs for different screen sizes.' }
    ],
    technicianAdvice: 'If you use "Extra Large" text for accessibility, many apps will break because their UI isn\'t flexible enough.',
    relatedProblemIds: ['p1840001', 'p1540001'],
    createdAt: '2026-03-03T09:00:00Z'
  },
  // --- Gaming: Performance & Software ---
  {
    id: 'p1850001',
    title: 'Game "Lag" Only When Moving Mouse',
    slug: 'game-lag-moving-mouse',
    shortDescription: 'The game is smooth when you stand still, but the FPS drops to zero when you move the mouse.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['FPS drop on movement', 'Stuttering', 'Unplayable aim'],
    causes: ['High mouse polling rate (8000Hz)', 'CPU bottleneck', 'Overlay conflict'],
    steps: [
      { id: 's1', title: 'Lower Polling Rate', description: 'Open your mouse software and set it to 500Hz or 1000Hz.' },
      { id: 's2', title: 'Disable Discord Overlay', description: 'The overlay can conflict with high-frequency mouse inputs.' },
      { id: 's3', title: 'Update Mouse Drivers', description: 'Ensure your gaming mouse has the latest firmware.' }
    ],
    technicianAdvice: 'Modern "8K" mice send so much data that they can actually choke a mid-range CPU.',
    relatedProblemIds: ['p1850002', 'p1750001'],
    createdAt: '2026-03-04T08:00:00Z'
  },
  {
    id: 'p1850002',
    title: 'Game "Audio" is Reversed (Left is Right)',
    slug: 'game-audio-reversed',
    shortDescription: 'You hear footsteps on the left, but the enemy is actually on the right.',
    category: 'gaming',
    subcategory: 'Software',
    symptoms: ['Swapped stereo', 'Confusing audio', 'Directional errors'],
    causes: ['Headphones on backwards', 'Virtual Surround Sound glitch', 'Audio driver error'],
    steps: [
      { id: 's1', title: 'Check Headphone Orientation', description: 'Look for the "L" and "R" marks on your headset.' },
      { id: 's2', title: 'Disable "Spatial Sound"', description: 'Turn off Windows Sonic or Dolby Atmos to see if it fixes the swap.' },
      { id: 's3', title: 'Reverse in Software', description: 'Some audio apps (like EqualizerAPO) allow you to manually swap channels.' }
    ],
    technicianAdvice: 'It sounds silly, but 90% of "reversed audio" cases are just headphones worn backwards.',
    relatedProblemIds: ['p1850001', 'p850002'],
    createdAt: '2026-03-04T09:00:00Z'
  }
];
