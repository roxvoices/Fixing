import { Problem } from './types';

export const EXTRA_PROBLEMS_18: Problem[] = [
  // --- Phone: Software & OS ---
  {
    id: 'p410001',
    title: 'Phone Stuck on Logo (Boot Loop)',
    slug: 'phone-stuck-on-logo-boot-loop',
    shortDescription: 'The phone turns on, shows the manufacturer logo, then restarts or stays frozen.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Infinite logo', 'Random restarts', 'Cannot reach home screen'],
    causes: ['Failed update', 'Full storage', 'Hardware failure (NAND)'],
    steps: [
      { id: 's1', title: 'Force Restart', description: 'Use the specific button combo for your model (e.g., Vol Up, Vol Down, Hold Power).' },
      { id: 's2', title: 'Enter Recovery Mode', description: 'Connect to a computer and use iTunes/Finder or ADB to "Update" the system without wiping data.' },
      { id: 's3', title: 'Factory Reset', description: 'If "Update" fails, you must "Restore" or "Wipe", which deletes all data.' }
    ],
    technicianAdvice: 'If the phone is 100% full, it can crash during boot because it has no space for temporary system files.',
    relatedProblemIds: ['p410002', 'p410003'],
    createdAt: '2025-10-11T08:00:00Z'
  },
  {
    id: 'p410002',
    title: 'Phone "System UI has stopped" Error',
    slug: 'phone-system-ui-stopped',
    shortDescription: 'A recurring error message pops up saying the system interface has crashed, making the phone unusable.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Error popup', 'Black wallpaper', 'Missing status bar'],
    causes: ['Incompatible theme', 'Corrupt Google Play Services', 'Low RAM'],
    steps: [
      { id: 's1', title: 'Restart in Safe Mode', description: 'Disables all 3rd party apps to see if one is causing the crash.' },
      { id: 's2', title: 'Clear Cache for System UI', description: 'Settings > Apps > Show System > System UI > Storage > Clear Cache.' },
      { id: 's3', title: 'Reset App Preferences', description: 'Settings > Apps > Menu > Reset app preferences.' }
    ],
    technicianAdvice: 'Custom launchers and icon packs are a common cause of System UI crashes on Android.',
    relatedProblemIds: ['p410001', 'p410004'],
    createdAt: '2025-10-11T09:00:00Z'
  },
  // --- Laptop: Keyboard & Input ---
  {
    id: 'p420001',
    title: 'Laptop Keyboard Keys "Sticky" or Not Working',
    slug: 'laptop-keyboard-keys-sticky',
    shortDescription: 'Specific keys require a hard press or don\'t respond at all.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Unresponsive keys', 'Repeating characters', 'Physical resistance'],
    causes: ['Liquid spill', 'Dust/Crumbs', 'Worn membrane'],
    steps: [
      { id: 's1', title: 'Clean with Compressed Air', description: 'Tilt the laptop and blow air under the keys to dislodge debris.' },
      { id: 's2', title: 'Use Isopropyl Alcohol', description: 'Dampen a Q-tip and clean around the edges of the sticky key.' },
      { id: 's3', title: 'Use External Keyboard', description: 'A quick workaround if you need to finish work before a repair.' }
    ],
    technicianAdvice: 'Modern "butterfly" or low-profile keyboards are very easily damaged by even a single crumb.',
    relatedProblemIds: ['p420002', 'p420003'],
    createdAt: '2025-10-12T08:00:00Z'
  },
  {
    id: 'p420002',
    title: 'Laptop Trackpad "Jumping" or Erratic',
    slug: 'laptop-trackpad-jumping-erratic',
    shortDescription: 'The cursor moves on its own or jumps across the screen while you are typing.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Ghost clicks', 'Jumping cursor', 'Multi-touch not working'],
    causes: ['Dirty surface', 'Static buildup', 'Swollen battery pushing up'],
    steps: [
      { id: 's1', title: 'Clean the Surface', description: 'Oils from your skin can build up and cause false touches.' },
      { id: 's2', title: 'Disable "Tap to Click"', description: 'Reduces accidental clicks if the sensor is over-sensitive.' },
      { id: 's3', title: 'Check for Battery Swelling', description: 'If the trackpad is physically lifting, the battery underneath is likely failing.' }
    ],
    technicianAdvice: 'Using the laptop while it\'s plugged into a cheap, ungrounded charger can cause trackpad interference.',
    relatedProblemIds: ['p420001', 'p420004'],
    createdAt: '2025-10-12T09:00:00Z'
  },
  // --- Internet: Router & Settings ---
  {
    id: 'p430001',
    title: 'Router "Double NAT" Error for Gaming',
    slug: 'router-double-nat-error',
    shortDescription: 'You have two routers connected in a row, causing connection issues for games and servers.',
    category: 'internet',
    subcategory: 'Router',
    symptoms: ['Strict NAT', 'Cannot host games', 'Slow port forwarding'],
    causes: ['ISP modem-router combo + personal router'],
    steps: [
      { id: 's1', title: 'Enable Bridge Mode', description: 'Set your ISP modem to "Bridge Mode" so your personal router handles all traffic.' },
      { id: 's2', title: 'Use AP Mode', description: 'Set your personal router to "Access Point" mode instead of "Router" mode.' },
      { id: 's3', title: 'Connect to One Device', description: 'Ensure all gaming devices are plugged into the same router.' }
    ],
    technicianAdvice: 'Double NAT is like having two front doors to your house; it confuses the delivery person (data).',
    relatedProblemIds: ['p430002', 'p430003'],
    createdAt: '2025-10-13T08:00:00Z'
  },
  {
    id: 'p430002',
    title: 'WiFi "Dead Zones" in Large House',
    slug: 'wifi-dead-zones-large-house',
    shortDescription: 'The internet is fast in the living room but disappears in the bedroom or upstairs.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['No signal in some rooms', 'Slow speed far from router', 'Frequent disconnects'],
    causes: ['Thick walls', 'Distance', 'Interference from appliances'],
    steps: [
      { id: 's1', title: 'Centralize the Router', description: 'Move the router to the middle of the house, not in a corner or closet.' },
      { id: 's2', title: 'Install a Mesh System', description: 'Use multiple nodes (like Eero or Nest WiFi) to blanket the house in signal.' },
      { id: 's3', title: 'Use Powerline Adapters', description: 'Send internet through your home\'s electrical wiring to reach far rooms.' }
    ],
    technicianAdvice: 'Mirrors and fish tanks are surprisingly good at blocking WiFi signals.',
    relatedProblemIds: ['p430001', 'p430004'],
    createdAt: '2025-10-13T09:00:00Z'
  },
  // --- App: Security & Login ---
  {
    id: 'p440001',
    title: 'App "Too Many Redirects" Error',
    slug: 'app-too-many-redirects-error',
    shortDescription: 'The app or website gets stuck in a loop and fails to load with a "Redirect" error.',
    category: 'app',
    subcategory: 'Launch',
    symptoms: ['Error message', 'Infinite loading', 'Login loop'],
    causes: ['Corrupt cookies', 'Server misconfiguration', 'Date/Time mismatch'],
    steps: [
      { id: 's1', title: 'Clear Cookies and Site Data', description: 'The most common fix for redirect loops.' },
      { id: 's2', title: 'Check Date & Time', description: 'If your clock is wrong, security tokens will fail and trigger a redirect.' },
      { id: 's3', title: 'Try a Different Browser', description: 'Rules out browser-specific extension issues.' }
    ],
    technicianAdvice: 'Redirect loops often happen when a site tries to force HTTPS but the server isn\'t configured for it.',
    relatedProblemIds: ['p440002', 'p440003'],
    createdAt: '2025-10-14T08:00:00Z'
  },
  {
    id: 'p440002',
    title: 'App "Session Expired" Recurring Error',
    slug: 'app-session-expired-recurring',
    shortDescription: 'The app logs you out every few minutes, even while you are actively using it.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Frequent logouts', 'Login required popup', 'Lost progress'],
    causes: ['IP address changing (VPN)', 'Multiple devices on one account', 'App bug'],
    steps: [
      { id: 's1', title: 'Disable VPN', description: 'If your IP changes frequently, the server might kill your session for security.' },
      { id: 's2', title: 'Log Out of Other Devices', description: 'Ensure you aren\'t hitting a "max sessions" limit.' },
      { id: 's3', title: 'Update the App', description: 'Developers often fix session management bugs in newer versions.' }
    ],
    technicianAdvice: 'Banking apps have very short session timers by design for security.',
    relatedProblemIds: ['p440001', 'p440004'],
    createdAt: '2025-10-14T09:00:00Z'
  },
  // --- Gaming: Storage & Updates ---
  {
    id: 'p450001',
    title: 'Gaming Console "Database Corrupt" Error',
    slug: 'gaming-console-database-corrupt',
    shortDescription: 'The console asks you to "Rebuild Database" or says it cannot access storage.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['Error message', 'Missing games', 'Slow menus'],
    causes: ['Sudden power loss', 'Failing internal drive', 'Interrupted update'],
    steps: [
      { id: 's1', title: 'Rebuild Database', description: 'Use Safe Mode to run the "Rebuild Database" utility (standard on PlayStation).' },
      { id: 's2', title: 'Check External Drive', description: 'If using a USB drive, unplug it to see if the error persists.' },
      { id: 's3', title: 'Factory Reset', description: 'The last resort if the system software is fundamentally broken.' }
    ],
    technicianAdvice: 'Always shut down your console properly; pulling the plug is the #1 cause of database corruption.',
    relatedProblemIds: ['p450002', 'p450003'],
    createdAt: '2025-10-15T08:00:00Z'
  },
  {
    id: 'p450002',
    title: 'Game Update Stuck at 99%',
    slug: 'game-update-stuck-99-percent',
    shortDescription: 'The download is finished, but the "Installing" or "Copying" phase never ends.',
    category: 'gaming',
    subcategory: 'Software',
    symptoms: ['Stuck progress', 'Disk usage at 0%', 'Cannot launch game'],
    causes: ['Insufficient space for unpacking', 'Disk write error', 'Antivirus blocking files'],
    steps: [
      { id: 's1', title: 'Check Free Space', description: 'Updates often need 2x the game size to "copy" files during installation.' },
      { id: 's2', title: 'Pause and Resume', description: 'Sometimes triggers the final file verification.' },
      { id: 's3', title: 'Restart Console/PC', description: 'Clears any file locks that might be preventing the update from finishing.' }
    ],
    technicianAdvice: 'Modern games "copy" the entire game file during an update to prevent corruption, which takes a long time on HDDs.',
    relatedProblemIds: ['p450001', 'p450004'],
    createdAt: '2025-10-15T09:00:00Z'
  }
];
