import { Problem } from './types';

export const EXTRA_PROBLEMS_22: Problem[] = [
  // --- Wearables: Connectivity & Bluetooth ---
  {
    id: 'p610001',
    title: 'Smartwatch Disconnecting When Phone is in Pocket',
    slug: 'smartwatch-disconnecting-pocket',
    shortDescription: 'The watch loses connection to the phone even though they are only a few feet apart.',
    category: 'wearable',
    subcategory: 'Connectivity',
    symptoms: ['"Disconnected" icon', 'No notifications', 'Sync failed'],
    causes: ['Body blocking signal', 'Low power mode on phone', 'Bluetooth interference'],
    steps: [
      { id: 's1', title: 'Check Phone Battery Settings', description: 'Ensure the watch app is not being "killed" to save power.' },
      { id: 's2', title: 'Update Watch Firmware', description: 'Manufacturers often improve Bluetooth stability in updates.' },
      { id: 's3', title: 'Reset Bluetooth Pairing', description: 'Unpair the watch, restart both devices, and pair again.' }
    ],
    technicianAdvice: 'The human body is mostly water, which is excellent at absorbing 2.4GHz Bluetooth signals.',
    relatedProblemIds: ['p610002', 'p610003'],
    createdAt: '2025-10-31T08:00:00Z'
  },
  {
    id: 'p610002',
    title: 'Smartwatch "Emergency SOS" Triggering Accidentally',
    slug: 'smartwatch-emergency-sos-accidental',
    shortDescription: 'The watch starts calling emergency services or contacts while you are just moving your wrist.',
    category: 'wearable',
    subcategory: 'Software',
    symptoms: ['Siren sounding', 'Countdown on screen', 'Emergency call started'],
    causes: ['Button being pressed by wrist', 'Fall detection false positive', 'Software bug'],
    steps: [
      { id: 's1', title: 'Adjust Button Orientation', description: 'Flip the watch so the buttons face away from your hand.' },
      { id: 's2', title: 'Disable "Hold to Call"', description: 'Change settings so a long press doesn\'t trigger SOS.' },
      { id: 's3', title: 'Lower Fall Detection Sensitivity', description: 'If you do high-impact sports, you might need to turn this off.' }
    ],
    technicianAdvice: 'If you wear the watch low on your wrist, bending your hand back can easily press the crown/buttons.',
    relatedProblemIds: ['p610001', 'p610004'],
    createdAt: '2025-10-31T09:00:00Z'
  },
  // --- Audio: Quality & Latency ---
  {
    id: 'p620001',
    title: 'Bluetooth Audio "Lip Sync" Delay on TV',
    slug: 'bluetooth-audio-lip-sync-delay-tv',
    shortDescription: 'When watching movies on your TV with Bluetooth headphones, the sound is behind the picture.',
    category: 'audio',
    subcategory: 'Connectivity',
    symptoms: ['Delayed audio', 'Lip sync issues', 'Frustrating experience'],
    causes: ['High latency codec', 'TV processing delay', 'Interference'],
    steps: [
      { id: 's1', title: 'Use "Game Mode" on TV', description: 'Reduces video processing time to better match the audio.' },
      { id: 's2', title: 'Adjust Audio Delay in TV Settings', description: 'Many TVs have a "Lip Sync" or "Audio Delay" slider (set to negative if possible).' },
      { id: 's3', title: 'Use a Low-Latency Adapter', description: 'Plug a dedicated aptX-LL transmitter into the TV\'s optical port.' }
    ],
    technicianAdvice: 'Standard Bluetooth has ~200ms of lag; aptX Low Latency reduces it to ~40ms, which is imperceptible.',
    relatedProblemIds: ['p620002', 'p620003'],
    createdAt: '2025-11-01T08:00:00Z'
  },
  {
    id: 'p620002',
    title: 'Headphones "Hissing" Sound When No Music is Playing',
    slug: 'headphones-hissing-sound',
    shortDescription: 'A faint white noise or "hiss" is audible whenever the headphones are turned on.',
    category: 'audio',
    subcategory: 'Hardware',
    symptoms: ['White noise', 'Hissing', 'Static'],
    causes: ['High noise floor in amp', 'Active Noise Cancelling (ANC) artifacts', 'Bad cable shielding'],
    steps: [
      { id: 's1', title: 'Turn Off ANC', description: 'See if the hiss disappears when noise cancelling is disabled.' },
      { id: 's2', title: 'Lower Device Volume, Raise Headphone Volume', description: 'If using a wired connection, this can sometimes improve the signal-to-noise ratio.' },
      { id: 's3', title: 'Use a Different Source', description: 'Test with a phone vs a laptop to see if the source is noisy.' }
    ],
    technicianAdvice: 'Sensitive "In-Ear Monitors" (IEMs) often pick up the electrical noise floor of cheap amplifiers.',
    relatedProblemIds: ['p620001', 'p620004'],
    createdAt: '2025-11-01T09:00:00Z'
  },
  // --- Printers: Scanning & Copying ---
  {
    id: 'p630001',
    title: 'Printer Scanner "Vertical Line" on Every Page',
    slug: 'printer-scanner-vertical-line',
    shortDescription: 'When using the document feeder, every scan has a thin vertical line in the same spot.',
    category: 'printer',
    subcategory: 'Hardware',
    symptoms: ['Vertical line', 'Ruined scans', 'Consistent mark'],
    causes: ['Speck of dust on the small scanner glass'],
    steps: [
      { id: 's1', title: 'Clean the Small Glass Strip', description: 'Don\'t clean the big flatbed; clean the tiny 1-inch strip of glass to the left.' },
      { id: 's2', title: 'Use a Flashlight', description: 'Look for a tiny speck of white-out or ink on that glass strip.' },
      { id: 's3', title: 'Use Microfiber and Alcohol', description: 'Gently scrub the spot until it is perfectly clear.' }
    ],
    technicianAdvice: 'A single speck of dust on the feeder glass becomes a line as the paper is pulled over it.',
    relatedProblemIds: ['p630002', 'p630003'],
    createdAt: '2025-11-02T08:00:00Z'
  },
  {
    id: 'p630002',
    title: 'Printer "Scanner Error 22" (HP Printers)',
    slug: 'printer-scanner-error-22',
    shortDescription: 'The scanner mechanism is stuck or fails to initialize, showing Error 22.',
    category: 'printer',
    subcategory: 'Hardware',
    symptoms: ['Error 22', 'Grinding noise', 'Scanner bar won\'t move'],
    causes: ['Stuck scanner bar', 'Motor failure', 'Power surge'],
    steps: [
      { id: 's1', title: 'Hard Reset', description: 'Unplug the power cord while the printer is ON, wait 60 seconds, and plug back in.' },
      { id: 's2', title: 'Check for Obstructions', description: 'Ensure nothing is pressing down on the scanner glass.' },
      { id: 's3', title: 'Gently Tap the Glass', description: 'Sometimes the scanner bar gets stuck at the end of its track; a light tap can dislodge it.' }
    ],
    technicianAdvice: 'If the scanner bar doesn\'t move after a reset, the motor or belt is likely broken.',
    relatedProblemIds: ['p630001', 'p630004'],
    createdAt: '2025-11-02T09:00:00Z'
  },
  // --- Smart Home: Hubs & Setup ---
  {
    id: 'p640001',
    title: 'Smart Home "Account Linking" Failed',
    slug: 'smart-home-account-linking-failed',
    shortDescription: 'You try to connect your smart device to Google Home or Alexa, but it fails after logging in.',
    category: 'smart-home',
    subcategory: 'Software',
    symptoms: ['Login loop', '"Could not reach [Brand]" error', 'Device not appearing'],
    causes: ['Server-side API issue', 'Browser cache on phone', 'Region mismatch'],
    steps: [
      { id: 's1', title: 'Clear Default Browser Cache', description: 'The linking process happens in your phone\'s browser; clear its data.' },
      { id: 's2', title: 'Unlink and Re-link', description: 'Remove the service from the Home app and try the process again.' },
      { id: 's3', title: 'Check Region Settings', description: 'Ensure your smart device account and Home app are set to the same country.' }
    ],
    technicianAdvice: 'Linking often fails if you have a "Pop-up Blocker" enabled in your mobile browser.',
    relatedProblemIds: ['p640002', 'p640003'],
    createdAt: '2025-11-03T08:00:00Z'
  },
  {
    id: 'p640002',
    title: 'Smart Doorbell "Mechanical Chime" Not Ringing',
    slug: 'smart-doorbell-mechanical-chime-not-ringing',
    shortDescription: 'The doorbell works on your phone, but the old physical bell in your house is silent.',
    category: 'smart-home',
    subcategory: 'Hardware',
    symptoms: ['No indoor chime', 'Phone notification works', 'Quiet house'],
    causes: ['Insufficient voltage', 'Chime kit not installed', 'Software setting'],
    steps: [
      { id: 's1', title: 'Enable "Mechanical Chime" in App', description: 'Check the doorbell settings to ensure it\'s set to trigger the physical bell.' },
      { id: 's2', title: 'Upgrade Transformer', description: 'Most smart doorbells need a 16V-24V transformer; old ones are often only 10V.' },
      { id: 's3', title: 'Check Chime Kit Wiring', description: 'Ensure the small "power kit" that came with the doorbell is correctly wired to the chime box.' }
    ],
    technicianAdvice: 'If the doorbell reboots every time you press the button, your transformer is too weak.',
    relatedProblemIds: ['p640001', 'p640004'],
    createdAt: '2025-11-03T09:00:00Z'
  },
  // --- Laptop: Software & OS ---
  {
    id: 'p650001',
    title: 'Laptop "Blue Screen of Death" (BSOD) - WHEA_UNCORRECTABLE_ERROR',
    slug: 'laptop-bsod-whea-uncorrectable',
    shortDescription: 'The laptop crashes to a blue screen with a hardware-related error code.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Blue screen', 'Sudden crash', 'System restart'],
    causes: ['Overheating', 'Unstable overclock', 'Failing CPU/SSD'],
    steps: [
      { id: 's1', title: 'Reset BIOS to Defaults', description: 'Removes any accidental overclocking or voltage changes.' },
      { id: 's2', title: 'Check Temperatures', description: 'Use a tool like HWMonitor to see if the CPU is hitting 95C+.' },
      { id: 's3', title: 'Test SSD Health', description: 'Use CrystalDiskInfo to check for "Critical Warning" on your drive.' }
    ],
    technicianAdvice: 'WHEA errors are almost always hardware-related, not software.',
    relatedProblemIds: ['p650002', 'p650003'],
    createdAt: '2025-11-04T08:00:00Z'
  },
  {
    id: 'p650002',
    title: 'Laptop "No Bootable Device" Error',
    slug: 'laptop-no-bootable-device',
    shortDescription: 'The laptop turns on but shows a black screen saying it cannot find a disk to boot from.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Black screen', 'Error message', 'Cannot start OS'],
    causes: ['Disconnected SSD/HDD', 'Corrupt bootloader', 'Dead drive'],
    steps: [
      { id: 's1', title: 'Check BIOS Boot Order', description: 'Ensure your hard drive is at the top of the list.' },
      { id: 's2', title: 'Reseat the Drive', description: 'Open the laptop and ensure the SSD is firmly in its slot.' },
      { id: 's3', title: 'Run Startup Repair', description: 'Use a Windows USB installer to "Repair your computer" > "Startup Repair".' }
    ],
    technicianAdvice: 'If the drive isn\'t showing up in the BIOS at all, it has likely suffered a total hardware failure.',
    relatedProblemIds: ['p650001', 'p650004'],
    createdAt: '2025-11-04T09:00:00Z'
  }
];
