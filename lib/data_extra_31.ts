import { Problem } from './types';

export const EXTRA_PROBLEMS_31: Problem[] = [
  // --- Phone: Software & System ---
  {
    id: 'p1060001',
    title: 'Phone "System UI" Not Responding (Black Screen)',
    slug: 'phone-system-ui-not-responding-black',
    shortDescription: 'The phone is on, but the screen is black and you can only see the status bar or nothing at all.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Black screen', 'Status bar only', 'Unresponsive buttons'],
    causes: ['System UI crash', 'Low memory', 'Incompatible theme'],
    steps: [
      { id: 's1', title: 'Force Restart', description: 'Hold Power + Volume Down for 10 seconds.' },
      { id: 's2', title: 'Safe Mode', description: 'Boot into safe mode to see if a 3rd party app is causing the crash.' },
      { id: 's3', title: 'Reset App Preferences', description: 'If you can reach settings, reset app preferences.' }
    ],
    technicianAdvice: 'This is often caused by a custom launcher or icon pack that isn\'t compatible with the latest OS update.',
    relatedProblemIds: ['p1060002', 'p410002'],
    createdAt: '2025-12-15T08:00:00Z'
  },
  {
    id: 'p1060002',
    title: 'Phone "Ghost Touching" (Screen clicking on its own)',
    slug: 'phone-ghost-touching',
    shortDescription: 'The screen acts as if someone is tapping it, opening apps and typing random letters.',
    category: 'phone',
    subcategory: 'Hardware',
    symptoms: ['Random taps', 'Apps opening', 'Typing on its own'],
    causes: ['Static electricity', 'Dirty screen', 'Damaged digitizer'],
    steps: [
      { id: 's1', title: 'Clean the Screen', description: 'Wipe the screen thoroughly with a microfiber cloth.' },
      { id: 's2', title: 'Remove Screen Protector', description: 'A cracked or poor-quality protector can cause false touches.' },
      { id: 's3', title: 'Check for Water Damage', description: 'Moisture inside the screen can cause ghost touches.' }
    ],
    technicianAdvice: 'If cleaning doesn\'t help, the digitizer layer of the screen is likely failing and needs replacement.',
    relatedProblemIds: ['p1060001', 'p460002'],
    createdAt: '2025-12-15T09:00:00Z'
  },
  // --- Laptop: Power & Battery ---
  {
    id: 'p1070001',
    title: 'Laptop "Plugged in, Not Charging" (Battery stuck at 0%)',
    slug: 'laptop-plugged-in-not-charging-zero-percent',
    shortDescription: 'The laptop works on the charger, but the battery stays at 0% and dies instantly if unplugged.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['0% battery', 'Instant shutdown', 'Charging light flashing'],
    causes: ['Dead battery cells', 'Faulty charging circuit', 'BIOS error'],
    steps: [
      { id: 's1', title: 'Uninstall Battery Driver', description: 'Device Manager > Batteries > Uninstall "Microsoft ACPI-Compliant Control Method Battery" > Restart.' },
      { id: 's2', title: 'Perform a Static Discharge', description: 'Unplug, remove battery (if possible), hold power for 30s, then reconnect.' },
      { id: 's3', title: 'Check Battery Health in BIOS', description: 'Most laptops have a diagnostic tool in the BIOS menu.' }
    ],
    technicianAdvice: 'If the battery is at 0% and won\'t budge, it has likely reached its end of life or a safety fuse has blown.',
    relatedProblemIds: ['p1070002', 'p230002'],
    createdAt: '2025-12-16T08:00:00Z'
  },
  {
    id: 'p1070002',
    title: 'Laptop "Power Button" Not Responding',
    slug: 'laptop-power-button-not-responding',
    shortDescription: 'You press the power button and nothing happens; no lights, no fans, no screen.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['No power', 'No lights', 'Silent'],
    causes: ['Dead motherboard', 'Broken power button', 'Total power failure'],
    steps: [
      { id: 's1', title: 'Check the Charger', description: 'Ensure the charger light is on and it\'s providing voltage.' },
      { id: 's2', title: 'Try a Hard Reset', description: 'Unplug everything and hold the power button for 60 seconds.' },
      { id: 's3', title: 'Check for CMOS Battery Issue', description: 'Sometimes a dead CMOS battery can prevent a laptop from starting.' }
    ],
    technicianAdvice: 'If there are no lights at all, it\'s usually a motherboard or power input (DC jack) failure.',
    relatedProblemIds: ['p1070001', 'p650002'],
    createdAt: '2025-12-16T09:00:00Z'
  },
  // --- Internet: WiFi & Speed ---
  {
    id: 'p1080001',
    title: 'WiFi "Connected, No Internet" (ISP Outage)',
    slug: 'wifi-connected-no-internet-isp-outage',
    shortDescription: 'Your devices are connected to the router, but there is no internet access across the whole house.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['No internet', 'Red light on modem', 'All devices affected'],
    causes: ['ISP service outage', 'Cut fiber/coax line', 'Modem failure'],
    steps: [
      { id: 's1', title: 'Check ISP Status Page', description: 'Use your phone\'s mobile data to check for outages in your area.' },
      { id: 's2', title: 'Reboot Modem and Router', description: 'Unplug for 60 seconds and plug back in.' },
      { id: 's3', title: 'Check Cable Connections', description: 'Ensure the line coming from the wall is tight.' }
    ],
    technicianAdvice: 'If the "Internet" or "Online" light on your modem is red or off, the issue is outside your home.',
    relatedProblemIds: ['p1080002', 'p160002'],
    createdAt: '2025-12-17T08:00:00Z'
  },
  {
    id: 'p1080002',
    title: 'WiFi "Signal Strength" High but Internet is Slow',
    slug: 'wifi-signal-high-internet-slow',
    shortDescription: 'You have full bars of WiFi, but websites load very slowly or not at all.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Full bars', 'Slow speed', 'Buffering'],
    causes: ['Network congestion', 'DNS issues', 'ISP throttling'],
    steps: [
      { id: 's1', title: 'Run a Speed Test', description: 'Check if the speed is slow on all devices or just one.' },
      { id: 's2', title: 'Change DNS Settings', description: 'Try using Google DNS (8.8.8.8) or Cloudflare (1.1.1.1).' },
      { id: 's3', title: 'Check for Background Downloads', description: 'Ensure no other device is hogging the bandwidth.' }
    ],
    technicianAdvice: 'Signal strength only shows the connection to the router, not the speed of the internet itself.',
    relatedProblemIds: ['p1080001', 'p160001'],
    createdAt: '2025-12-17T09:00:00Z'
  },
  // --- App: Functionality & UI ---
  {
    id: 'p1090001',
    title: 'App "Crashing" on Startup',
    slug: 'app-crashing-on-startup',
    shortDescription: 'The app opens for a split second and then closes immediately.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Instant crash', 'Error message', 'Cannot open app'],
    causes: ['Corrupt app data', 'Incompatible OS version', 'Missing permissions'],
    steps: [
      { id: 's1', title: 'Clear App Cache and Data', description: 'Settings > Apps > [App Name] > Storage > Clear Cache/Data.' },
      { id: 's2', title: 'Check for Updates', description: 'Ensure you are running the latest version of the app.' },
      { id: 's3', title: 'Reinstall the App', description: 'Delete and download it again from the store.' }
    ],
    technicianAdvice: 'If an app crashes after an OS update, the developer likely needs to release a compatibility patch.',
    relatedProblemIds: ['p1090002', 'p170001'],
    createdAt: '2025-12-18T08:00:00Z'
  },
  {
    id: 'p1090002',
    title: 'App "Notifications" Not Showing Up',
    slug: 'app-notifications-not-showing',
    shortDescription: 'You are missing important alerts and messages because the app isn\'t sending notifications.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['No alerts', 'Missed messages', 'Silent phone'],
    causes: ['Notifications disabled', 'Battery optimization', 'Do Not Disturb mode'],
    steps: [
      { id: 's1', title: 'Check Notification Settings', description: 'Settings > Notifications > [App Name] > Allow Notifications.' },
      { id: 's2', title: 'Disable Battery Optimization', description: 'Settings > Battery > Optimization > [App Name] > Don\'t optimize.' },
      { id: 's3', title: 'Check "Do Not Disturb"', description: 'Ensure your phone isn\'t in a mode that silences alerts.' }
    ],
    technicianAdvice: 'Many apps need "Background Data" enabled to send notifications when they aren\'t open.',
    relatedProblemIds: ['p1090001', 'p590001'],
    createdAt: '2025-12-18T09:00:00Z'
  },
  // --- Gaming: Performance & Graphics ---
  {
    id: 'p1100001',
    title: 'Game "Lag" (High Ping)',
    slug: 'game-lag-high-ping',
    shortDescription: 'Your character jumps around and actions are delayed because of a slow network connection.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Rubber-banding', 'Delayed actions', 'High ping'],
    causes: ['Slow internet', 'WiFi interference', 'Distance from server'],
    steps: [
      { id: 's1', title: 'Use a Wired Connection', description: 'Connect your console or PC directly to the router with an Ethernet cable.' },
      { id: 's2', title: 'Close Background Apps', description: 'Ensure no other apps are using the internet while you play.' },
      { id: 's3', title: 'Choose a Closer Server', description: 'Select a game server that is geographically closer to you.' }
    ],
    technicianAdvice: 'WiFi is prone to interference which causes "lag spikes" even if your average speed is high.',
    relatedProblemIds: ['p1100002', 'p530001'],
    createdAt: '2025-12-19T08:00:00Z'
  },
  {
    id: 'p1100002',
    title: 'Game "Low FPS" (Choppy Gameplay)',
    slug: 'game-low-fps-choppy',
    shortDescription: 'The game feels like a slideshow because your hardware can\'t keep up with the graphics.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Choppy movement', 'Low frame rate', 'Input lag'],
    causes: ['Weak hardware', 'High graphics settings', 'Overheating'],
    steps: [
      { id: 's1', title: 'Lower Graphics Settings', description: 'Reduce resolution, shadows, and texture quality.' },
      { id: 's2', title: 'Update Graphics Drivers', description: 'Ensure you have the latest drivers for your GPU.' },
      { id: 's3', title: 'Check for Overheating', description: 'Ensure your fans are clean and the device has good airflow.' }
    ],
    technicianAdvice: 'Lowering the resolution is the most effective way to boost FPS on older hardware.',
    relatedProblemIds: ['p1100001', 'p180001'],
    createdAt: '2025-12-19T09:00:00Z'
  }
];
