import { Problem } from './types';

export const EXTRA_PROBLEMS_17: Problem[] = [
  // --- Wearables: Health & Tracking ---
  {
    id: 'p360001',
    title: 'Smartwatch Sleep Tracking Not Recording',
    slug: 'smartwatch-sleep-tracking-not-recording',
    shortDescription: 'You wear your watch to bed, but the app shows "No Data" for the night.',
    category: 'wearable',
    subcategory: 'Software',
    symptoms: ['Missing sleep data', 'Incorrect sleep times', 'No heart rate at night'],
    causes: ['Sleep mode not enabled', 'Watch too loose', 'Low battery at night'],
    steps: [
      { id: 's1', title: 'Enable Sleep/Bedtime Mode', description: 'Ensure the watch knows you are sleeping so it can switch to high-sensitivity tracking.' },
      { id: 's2', title: 'Check Battery Level', description: 'Most watches disable tracking if the battery is below 10-15%.' },
      { id: 's3', title: 'Verify App Permissions', description: 'Ensure the health app has permission to read sleep data from the watch.' }
    ],
    technicianAdvice: 'If you move a lot in your sleep, the watch might think you are awake and stop recording.',
    relatedProblemIds: ['p360002', 'p360003'],
    createdAt: '2025-10-06T08:00:00Z'
  },
  {
    id: 'p360002',
    title: 'Smartwatch GPS Signal Not Found',
    slug: 'smartwatch-gps-signal-not-found',
    shortDescription: 'When starting an outdoor run, the watch stays on "Connecting to GPS" indefinitely.',
    category: 'wearable',
    subcategory: 'Hardware',
    symptoms: ['No GPS lock', 'Inaccurate distance', 'Map missing after run'],
    causes: ['Tall buildings/Trees', 'Outdated A-GPS data', 'Hardware antenna failure'],
    steps: [
      { id: 's1', title: 'Sync with Phone', description: 'Syncing with the app downloads "Assisted GPS" (A-GPS) data which speeds up satellite locking.' },
      { id: 's2', title: 'Move to Open Area', description: 'Go away from tall buildings or dense tree cover.' },
      { id: 's3', title: 'Wait for "Green" Lock', description: 'Don\'t start the workout until the GPS icon stops flashing.' }
    ],
    technicianAdvice: 'Cold starts (after not using GPS for days) can take up to 2-3 minutes to get a lock.',
    relatedProblemIds: ['p360001', 'p360004'],
    createdAt: '2025-10-06T09:00:00Z'
  },
  // --- Audio: Smart Speakers ---
  {
    id: 'p370001',
    title: 'Smart Speaker Not Responding to Voice Command',
    slug: 'smart-speaker-not-responding-voice',
    shortDescription: 'You say the wake word, but the speaker doesn\'t light up or respond.',
    category: 'audio',
    subcategory: 'Functionality',
    symptoms: ['No response', 'Wake word ignored', 'Red light on device'],
    causes: ['Microphone muted', 'Background noise', 'Internet disconnected'],
    steps: [
      { id: 's1', title: 'Check Mute Switch', description: 'Ensure the physical privacy switch isn\'t turned on (usually shows a red light).' },
      { id: 's2', title: 'Reduce Background Noise', description: 'Move the speaker away from TVs, fans, or other loud appliances.' },
      { id: 's3', title: 'Check Voice History', description: 'Use the app to see if the speaker heard you but didn\'t understand.' }
    ],
    technicianAdvice: 'If the speaker is near a wall, reflections can make it harder for the mics to hear the wake word.',
    relatedProblemIds: ['p370002', 'p370003'],
    createdAt: '2025-10-07T08:00:00Z'
  },
  {
    id: 'p370002',
    title: 'Smart Speaker Playing Music on Wrong Device',
    slug: 'smart-speaker-wrong-device-music',
    shortDescription: 'You ask one speaker to play music, but it starts playing in another room.',
    category: 'audio',
    subcategory: 'Functionality',
    symptoms: ['Music in wrong room', 'Group playback issues', 'App confusion'],
    causes: ['Incorrect default speaker setting', 'Group naming conflict', 'Account sync error'],
    steps: [
      { id: 's1', title: 'Check Default Speaker', description: 'In the app, ensure the "Default Audio Output" is set to the correct device.' },
      { id: 's2', title: 'Rename Devices', description: 'Avoid similar names like "Kitchen" and "Kitchen 2".' },
      { id: 's3', title: 'Re-create Speaker Groups', description: 'Delete and rebuild your multi-room groups in the app.' }
    ],
    technicianAdvice: 'Voice assistants often default to the last used speaker or group.',
    relatedProblemIds: ['p370001', 'p370004'],
    createdAt: '2025-10-07T09:00:00Z'
  },
  // --- Printers: Scanning & Faxing ---
  {
    id: 'p380001',
    title: 'Printer Scanner "Communication Error"',
    slug: 'printer-scanner-communication-error',
    shortDescription: 'The printer prints fine, but the computer cannot find the scanner.',
    category: 'printer',
    subcategory: 'Connectivity',
    symptoms: ['Scanner not found', 'WIA error', 'TWAIN error'],
    causes: ['Firewall blocking port', 'WIA service stopped', 'Incomplete driver install'],
    steps: [
      { id: 's1', title: 'Restart WIA Service', description: 'Services.msc > Windows Image Acquisition (WIA) > Restart.' },
      { id: 's2', title: 'Disable Firewall Temporarily', description: 'See if the scanner works with the firewall off; if so, add an exception for the printer app.' },
      { id: 's3', title: 'Use "Scan to USB"', description: 'If network scanning fails, use a USB drive directly on the printer.' }
    ],
    technicianAdvice: 'Scanning often uses different network ports than printing, which is why one can work while the other fails.',
    relatedProblemIds: ['p380002', 'p380003'],
    createdAt: '2025-10-08T08:00:00Z'
  },
  {
    id: 'p380002',
    title: 'ADF (Auto Document Feeder) Not Picking Up Paper',
    slug: 'printer-adf-not-picking-up',
    shortDescription: 'The scanner doesn\'t pull the paper from the top tray, forcing you to scan one by one on the glass.',
    category: 'printer',
    subcategory: 'Hardware',
    symptoms: ['Paper not feeding', 'Grinding noise', 'Multiple sheets pulled'],
    causes: ['Dirty rollers', 'Worn separation pad', 'Paper too thin/thick'],
    steps: [
      { id: 's1', title: 'Clean ADF Rollers', description: 'Wipe the small rubber rollers with alcohol to remove paper dust.' },
      { id: 's2', title: 'Fan the Paper', description: 'Ensure the sheets aren\'t stuck together with static.' },
      { id: 's3', title: 'Check for Small Scraps', description: 'A tiny piece of paper stuck in the ADF sensor can stop it from starting.' }
    ],
    technicianAdvice: 'ADF rollers are a "wear item" and usually need replacement after 10,000-20,000 pages.',
    relatedProblemIds: ['p380001', 'p380004'],
    createdAt: '2025-10-08T09:00:00Z'
  },
  // --- Smart Home: Security & Privacy ---
  {
    id: 'p390001',
    title: 'Smart Lock "Jam" Error',
    slug: 'smart-lock-jam-error',
    shortDescription: 'The lock tries to turn but stops and beeps, saying it is jammed.',
    category: 'smart-home',
    subcategory: 'Hardware',
    symptoms: ['Beeping lock', 'Motor struggling', 'Door won\'t lock'],
    causes: ['Misaligned strike plate', 'Door sagging', 'Weather stripping too thick'],
    steps: [
      { id: 's1', title: 'Check Alignment', description: 'Ensure the deadbolt can slide into the hole without touching the sides.' },
      { id: 's2', title: 'Lift the Door', description: 'If the door has sagged, you may need to lift it slightly while locking.' },
      { id: 's3', title: 'Adjust Strike Plate', description: 'Move the metal plate on the door frame so the bolt has more clearance.' }
    ],
    technicianAdvice: 'Smart locks have much less torque than a human hand; alignment must be perfect.',
    relatedProblemIds: ['p390002', 'p390003'],
    createdAt: '2025-10-09T08:00:00Z'
  },
  {
    id: 'p390002',
    title: 'Smart Camera "False" Motion Alerts (Wind/Trees)',
    slug: 'smart-camera-false-motion-alerts',
    shortDescription: 'You get dozens of notifications for "motion" that is just trees blowing in the wind.',
    category: 'smart-home',
    subcategory: 'Software',
    symptoms: ['Constant alerts', 'Empty videos', 'Battery drain'],
    causes: ['Sensitivity too high', 'No activity zones', 'PIR sensor picking up heat'],
    steps: [
      { id: 's1', title: 'Set Activity Zones', description: 'Draw boxes in the app to only monitor the driveway or porch, ignoring the trees.' },
      { id: 's2', title: 'Enable "Person Detection"', description: 'Use AI filtering to only alert you if a human is detected.' },
      { id: 's3', title: 'Lower Sensitivity', description: 'Reduce the motion threshold so small movements are ignored.' }
    ],
    technicianAdvice: 'Spiders building webs in front of the lens are a common cause of night-time false alerts.',
    relatedProblemIds: ['p390001', 'p390004'],
    createdAt: '2025-10-09T09:00:00Z'
  },
  // --- Laptop: Audio & Mic ---
  {
    id: 'p400001',
    title: 'Laptop Speakers Crackling at High Volume',
    slug: 'laptop-speakers-crackling-high-volume',
    shortDescription: 'The sound is clear at 50% but starts buzzing or crackling at 100%.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Buzzing sound', 'Distorted audio', 'Vibrating chassis'],
    causes: ['Blown speaker cone', 'Loose internal screw', 'Software clipping'],
    steps: [
      { id: 's1', title: 'Disable Audio Enhancements', description: 'Sound Settings > Properties > Enhancements > Disable all.' },
      { id: 's2', title: 'Check for Loose Screws', description: 'Sometimes a loose screw near the speaker vibrates against the case.' },
      { id: 's3', title: 'Lower the Pre-amp', description: 'If using an equalizer, ensure the "Pre-amp" isn\'t boosting the signal into distortion.' }
    ],
    technicianAdvice: 'Laptop speakers are tiny and fragile; playing bass-heavy music at 100% can easily tear the paper cone.',
    relatedProblemIds: ['p400002', 'p400003'],
    createdAt: '2025-10-10T08:00:00Z'
  },
  {
    id: 'p400002',
    title: 'Laptop Microphone Picking Up Fan Noise',
    slug: 'laptop-mic-picking-up-fan',
    shortDescription: 'People on calls can hear your laptop fan spinning loudly, making it hard to hear you.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Background whirring', 'Static on calls', 'Muffled voice'],
    causes: ['Mic located near fan vent', 'High CPU usage', 'No noise cancellation'],
    steps: [
      { id: 's1', title: 'Use External Headset', description: 'Moving the mic away from the laptop body is the best fix.' },
      { id: 's2', title: 'Enable AI Noise Removal', description: 'Use apps like Krisp or built-in "Voice Focus" in Zoom/Teams.' },
      { id: 's3', title: 'Clean the Fans', description: 'If the fan is loud, it might be clogged with dust and working harder than it should.' }
    ],
    technicianAdvice: 'Thin laptops often have the mic right next to the CPU heatsink, which is a poor design choice.',
    relatedProblemIds: ['p400001', 'p400004'],
    createdAt: '2025-10-10T09:00:00Z'
  }
];
