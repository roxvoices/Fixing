import { Problem } from './types';

export const EXTRA_PROBLEMS_15: Problem[] = [
  // --- App: Installation & Updates ---
  {
    id: 'p260001',
    title: 'App Store "Unable to Download App" Error',
    slug: 'app-store-unable-to-download',
    shortDescription: 'You try to download an app but it gets stuck on "Waiting" or shows an error message.',
    category: 'app',
    subcategory: 'Installation',
    symptoms: ['Download failed', 'Stuck circle', 'Error 0x800...'],
    causes: ['Insufficient storage', 'Payment method issue', 'Server outage'],
    steps: [
      { id: 's1', title: 'Check Storage Space', description: 'Ensure you have at least 2x the app\'s size available for installation.' },
      { id: 's2', title: 'Update Payment Info', description: 'Even free apps require a valid (though not necessarily funded) payment method.' },
      { id: 's3', title: 'Restart App Store', description: 'Force close the store app and try again.' }
    ],
    technicianAdvice: 'Sometimes a simple sign-out and sign-in of your store account fixes stuck downloads.',
    relatedProblemIds: ['p260002', 'p260003'],
    createdAt: '2025-09-25T08:00:00Z'
  },
  {
    id: 'p260002',
    title: 'App "Update Required" Loop',
    slug: 'app-update-required-loop',
    shortDescription: 'The app tells you to update, but the store says it\'s already up to date.',
    category: 'app',
    subcategory: 'Launch',
    symptoms: ['Update loop', 'Cannot open app', 'Version mismatch'],
    causes: ['Cached store data', 'Staged rollout delay', 'OS incompatibility'],
    steps: [
      { id: 's1', title: 'Clear Store Cache', description: 'On Android, clear cache for Play Store. On iOS, pull down to refresh the Updates tab.' },
      { id: 's2', title: 'Check OS Version', description: 'Ensure your phone OS is compatible with the latest app version.' },
      { id: 's3', title: 'Delete and Reinstall', description: 'Forces the latest version to be downloaded from the server.' }
    ],
    technicianAdvice: 'This often happens when a developer releases a "forced update" before the store has fully propagated the files.',
    relatedProblemIds: ['p260001', 'p260004'],
    createdAt: '2025-09-25T09:00:00Z'
  },
  // --- Gaming: Connectivity & Social ---
  {
    id: 'p270001',
    title: 'Gaming Console "NAT Type: Strict" Error',
    slug: 'gaming-console-nat-type-strict',
    shortDescription: 'You cannot join multiplayer lobbies or hear friends in voice chat.',
    category: 'gaming',
    subcategory: 'Connectivity',
    symptoms: ['Cannot join friends', 'Voice chat failed', 'High matchmaking time'],
    causes: ['Router firewall', 'Double NAT', 'UPnP disabled'],
    steps: [
      { id: 's1', title: 'Enable UPnP', description: 'Log into your router and turn on Universal Plug and Play.' },
      { id: 's2', title: 'Set Static IP & DMZ', description: 'Assign your console a static IP and place it in the DMZ (use with caution).' },
      { id: 's3', title: 'Port Forwarding', description: 'Manually open the specific ports required for your console (e.g., 3074 for Xbox).' }
    ],
    technicianAdvice: 'Strict NAT is the #1 enemy of online console gaming.',
    relatedProblemIds: ['p270002', 'p270003'],
    createdAt: '2025-09-26T08:00:00Z'
  },
  {
    id: 'p270002',
    title: 'Game Controller Not Pairing with Console',
    slug: 'game-controller-not-pairing',
    shortDescription: 'The controller flashes but won\'t connect to the console wirelessly.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['Flashing lights', 'No connection', 'Input lag'],
    causes: ['Bluetooth interference', 'Sync button failure', 'Battery too low'],
    steps: [
      { id: 's1', title: 'Connect via USB', description: 'Plug the controller in with a data-capable USB cable to force a sync.' },
      { id: 's2', title: 'Reset Controller', description: 'Use a pin to press the tiny reset button on the back of the controller.' },
      { id: 's3', title: 'Check for Interference', description: 'Move other Bluetooth devices away from the console.' }
    ],
    technicianAdvice: 'If the controller works wired but not wireless, the internal Bluetooth chip might be dead.',
    relatedProblemIds: ['p270001', 'p270004'],
    createdAt: '2025-09-26T09:00:00Z'
  },
  // --- Wearables: Software & Features ---
  {
    id: 'p280001',
    title: 'Smartwatch "Always-On Display" Not Working',
    slug: 'smartwatch-always-on-display-not-working',
    shortDescription: 'The screen turns off completely even though always-on mode is enabled.',
    category: 'wearable',
    subcategory: 'Software',
    symptoms: ['Black screen', 'Wrist raise required', 'Settings ignored'],
    causes: ['"Do Not Disturb" active', 'Low Power Mode', 'Theater Mode enabled'],
    steps: [
      { id: 's1', title: 'Disable Theater Mode', description: 'Ensure the "mask" icon in the control center is NOT highlighted.' },
      { id: 's2', title: 'Turn Off Low Power Mode', description: 'Always-on display is the first thing disabled to save battery.' },
      { id: 's3', title: 'Check Wrist Detection', description: 'If the watch thinks it\'s not on your wrist, it will turn off the screen.' }
    ],
    technicianAdvice: 'Tattoos on the wrist can sometimes trick the "on-wrist" sensor.',
    relatedProblemIds: ['p280002', 'p280003'],
    createdAt: '2025-09-27T08:00:00Z'
  },
  {
    id: 'p280002',
    title: 'Smartwatch Notifications Not Vibrating',
    slug: 'smartwatch-notifications-not-vibrating',
    shortDescription: 'You see the notification on the screen but didn\'t feel the vibration.',
    category: 'wearable',
    subcategory: 'Software',
    symptoms: ['Silent alerts', 'Missed calls', 'No haptic feedback'],
    causes: ['Haptics turned off', 'Silent mode enabled', 'Vibration motor failure'],
    steps: [
      { id: 's1', title: 'Check Haptic Strength', description: 'Go to Settings > Sounds & Haptics and ensure it is set to "Prominent".' },
      { id: 's2', title: 'Disable "Focus" Modes', description: 'Ensure "Sleep" or "Work" modes aren\'t silencing haptics.' },
      { id: 's3', title: 'Test Vibration', description: 'Set an alarm to see if the watch vibrates at all.' }
    ],
    technicianAdvice: 'If the watch doesn\'t vibrate for an alarm, the physical motor is likely broken.',
    relatedProblemIds: ['p280001', 'p280004'],
    createdAt: '2025-09-27T09:00:00Z'
  },
  // --- Audio: Software & Settings ---
  {
    id: 'p290001',
    title: 'Audio "Volume Limit" Stuck',
    slug: 'audio-volume-limit-stuck',
    shortDescription: 'The volume won\'t go above a certain level, even if you press the buttons.',
    category: 'audio',
    subcategory: 'Software',
    symptoms: ['Low max volume', 'Volume bar restricted', 'Safety warning'],
    causes: ['EU volume limit', 'Parental controls', 'Headphone safety settings'],
    steps: [
      { id: 's1', title: 'Check "Headphone Safety"', description: 'Settings > Sounds & Haptics > Headphone Safety > Reduce Loud Sounds.' },
      { id: 's2', title: 'Check Screen Time', description: 'Ensure "Volume Limit" isn\'t restricted under Content & Privacy.' },
      { id: 's3', title: 'Reset Audio Settings', description: 'Sometimes a glitch locks the software gain at a low level.' }
    ],
    technicianAdvice: 'Many devices have built-in limits to prevent hearing damage, especially in Europe.',
    relatedProblemIds: ['p290002', 'p290003'],
    createdAt: '2025-09-28T08:00:00Z'
  },
  {
    id: 'p290002',
    title: 'Bluetooth Audio Quality "SBC" instead of "LDAC/aptX"',
    slug: 'bluetooth-audio-quality-low-codec',
    shortDescription: 'Your high-end headphones sound like a radio because they are using a low-quality codec.',
    category: 'audio',
    subcategory: 'Connectivity',
    symptoms: ['Flat sound', 'Hissing', 'Low detail'],
    causes: ['Developer settings mismatch', 'Interference', 'Incompatible source'],
    steps: [
      { id: 's1', title: 'Enable High Quality in App', description: 'Use the Sony/Bose/Sennheiser app to toggle "Priority on Sound Quality".' },
      { id: 's2', title: 'Check Developer Options', description: 'On Android, go to Developer Options > Bluetooth Audio Codec.' },
      { id: 's3', title: 'Unpair and Re-pair', description: 'Forces a new handshake which might negotiate a better codec.' }
    ],
    technicianAdvice: 'SBC is the "fallback" codec and sounds significantly worse than modern alternatives.',
    relatedProblemIds: ['p290001', 'p290004'],
    createdAt: '2025-09-28T09:00:00Z'
  },
  // --- Printers: Software & Drivers ---
  {
    id: 'p300001',
    title: 'Printer "Driver Unavailable" Error',
    slug: 'printer-driver-unavailable',
    shortDescription: 'The computer sees the printer but cannot communicate with it due to missing software.',
    category: 'printer',
    subcategory: 'Connectivity',
    symptoms: ['"Driver unavailable"', 'Cannot print', 'Generic icon'],
    causes: ['Windows Update error', 'Corrupt driver files', 'New OS version'],
    steps: [
      { id: 's1', title: 'Download from Manufacturer', description: 'Don\'t rely on Windows Update; go to HP/Epson/Canon site directly.' },
      { id: 's2', title: 'Remove and Re-add', description: 'Delete the printer from "Devices and Printers" and add it again.' },
      { id: 's3', title: 'Use AirPrint/Mopria', description: 'If drivers fail, try generic "driverless" printing protocols.' }
    ],
    technicianAdvice: 'Always download the "Full Software Package" rather than just the "Basic Driver".',
    relatedProblemIds: ['p300002', 'p300003'],
    createdAt: '2025-09-29T08:00:00Z'
  },
  {
    id: 'p300002',
    title: 'Printer Printing Gibberish (Random Characters)',
    slug: 'printer-printing-gibberish',
    shortDescription: 'The printer spits out dozens of pages with random symbols and code.',
    category: 'printer',
    subcategory: 'Software',
    symptoms: ['Random symbols', 'Infinite printing', 'Wasted paper'],
    causes: ['Wrong driver (PCL vs PS)', 'Corrupt print job', 'Bad cable'],
    steps: [
      { id: 's1', title: 'Cancel All Jobs', description: 'Clear the print queue immediately to stop wasting paper.' },
      { id: 's2', title: 'Check Driver Type', description: 'Ensure you aren\'t using a PostScript (PS) driver on a PCL-only printer.' },
      { id: 's3', title: 'Replace USB Cable', description: 'A faulty cable can corrupt the data being sent to the printer.' }
    ],
    technicianAdvice: 'Gibberish is usually the printer trying to "print" the raw code of the document because it doesn\'t understand the format.',
    relatedProblemIds: ['p300001', 'p300004'],
    createdAt: '2025-09-29T09:00:00Z'
  }
];
