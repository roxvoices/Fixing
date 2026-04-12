import { Problem } from './types';

export const EXTRA_PROBLEMS_35: Problem[] = [
  // --- Phone: Hardware & Audio ---
  {
    id: 'p1260001',
    title: 'Smartphone "Earpiece" Volume Too Low',
    slug: 'smartphone-earpiece-volume-too-low',
    shortDescription: 'You can barely hear the person on the other end during a call, even at max volume.',
    category: 'phone',
    subcategory: 'Hardware',
    symptoms: ['Quiet calls', 'Muffled sound', 'Hard to hear'],
    causes: ['Dirty earpiece grill', 'Software bug', 'Hardware failure'],
    steps: [
      { id: 's1', title: 'Clean the Grill', description: 'Use a soft toothbrush or Blu-Tack to pull out earwax and skin oils.' },
      { id: 's2', title: 'Check Case/Protector', description: 'Ensure your screen protector isn\'t covering the tiny speaker slit.' },
      { id: 's3', title: 'Disable "Phone Noise Cancellation"', description: 'In Accessibility settings, try turning this off to see if volume increases.' }
    ],
    technicianAdvice: '90% of quiet earpieces are caused by earwax buildup in the fine mesh grill.',
    relatedProblemIds: ['p1260002', 'p240001'],
    createdAt: '2026-01-04T08:00:00Z'
  },
  {
    id: 'p1260002',
    title: 'Smartphone "Microphone" Sounds Muffled',
    slug: 'smartphone-microphone-sounds-muffled',
    shortDescription: 'People say you sound like you are underwater or far away during calls.',
    category: 'phone',
    subcategory: 'Hardware',
    symptoms: ['Muffled voice', 'Quiet mic', 'Complaints from callers'],
    causes: ['Dust in mic hole', 'Case blocking mic', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Clean the Mic Hole', description: 'Look for the tiny hole at the bottom of the phone and gently clear it.' },
      { id: 's2', title: 'Remove the Case', description: 'Test a call without the case to see if it improves.' },
      { id: 's3', title: 'Test with Voice Recorder', description: 'If the recording sounds clear, the issue is with your cellular connection, not the mic.' }
    ],
    technicianAdvice: 'If you have multiple mics (for noise cancellation), one being blocked can make you sound "echoey" or muffled.',
    relatedProblemIds: ['p1260001', 'p200001'],
    createdAt: '2026-01-04T09:00:00Z'
  },
  // --- Laptop: Hardware & Cooling ---
  {
    id: 'p1270001',
    title: 'Laptop "Fan" Making Grinding Noise',
    slug: 'laptop-fan-grinding-noise',
    shortDescription: 'The laptop fan sounds like it\'s hitting something or has a "rattle".',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Grinding sound', 'Rattling', 'Vibration'],
    causes: ['Dust buildup', 'Worn out bearing', 'Broken fan blade'],
    steps: [
      { id: 's1', title: 'Clean with Compressed Air', description: 'Blow air through the vents to clear any large dust clumps.' },
      { id: 's2', title: 'Check for Obstructions', description: 'Ensure no small object (like a hair) is stuck in the fan.' },
      { id: 's3', title: 'Replace the Fan', description: 'If the bearing is gone, the noise will only get worse until the fan stops.' }
    ],
    technicianAdvice: 'A grinding fan is a mechanical failure; cleaning might help temporarily, but replacement is the only permanent fix.',
    relatedProblemIds: ['p1270002', 'p230001'],
    createdAt: '2026-01-05T08:00:00Z'
  },
  {
    id: 'p1270002',
    title: 'Laptop "Thermal Throttling" (Slows down when hot)',
    slug: 'laptop-thermal-throttling',
    shortDescription: 'The laptop starts fast but becomes very slow after 10-20 minutes of use.',
    category: 'laptop',
    subcategory: 'Performance',
    symptoms: ['Sudden slowdown', 'High fan speed', 'Hot chassis'],
    causes: ['Dried thermal paste', 'Clogged heatsink', 'High ambient temp'],
    steps: [
      { id: 's1', title: 'Use on a Hard Surface', description: 'Never use a laptop on a bed or carpet; it blocks the intake vents.' },
      { id: 's2', title: 'Clean the Heatsink', description: 'Remove the back cover and blow dust out of the copper fins.' },
      { id: 's3', title: 'Repaste the CPU', description: 'Advanced: Replace the old thermal paste with high-quality compound (e.g., Arctic MX-4).' }
    ],
    technicianAdvice: 'Thermal throttling is a safety feature to prevent the CPU from melting itself.',
    relatedProblemIds: ['p1270001', 'p230001'],
    createdAt: '2026-01-05T09:00:00Z'
  },
  // --- Internet: WiFi & Range ---
  {
    id: 'p1280001',
    title: 'WiFi "Dead Zones" in Large House',
    slug: 'wifi-dead-zones-large-house',
    shortDescription: 'The internet works great in the living room but disappears in the bedrooms or upstairs.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['No signal in some rooms', 'Frequent drops', 'Slow speed far from router'],
    causes: ['Thick walls', 'Distance', 'Interference'],
    steps: [
      { id: 's1', title: 'Move the Router', description: 'Place the router in the center of the house, away from walls and metal.' },
      { id: 's2', title: 'Use a Mesh WiFi System', description: 'Replace your single router with a mesh system (like Eero or Nest WiFi).' },
      { id: 's3', title: 'Use Powerline Adapters', description: 'Send internet through your home\'s electrical wiring to reach far rooms.' }
    ],
    technicianAdvice: 'WiFi signals (especially 5GHz) struggle to pass through brick, concrete, or large mirrors.',
    relatedProblemIds: ['p1280002', 'p430002'],
    createdAt: '2026-01-06T08:00:00Z'
  },
  {
    id: 'p1280002',
    title: 'WiFi "Interference" from Microwave or Phone',
    slug: 'wifi-interference-microwave-phone',
    shortDescription: 'The internet drops or slows down every time someone uses the microwave or a cordless phone.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Drops during cooking', 'Static on phone', 'Slow speed'],
    causes: ['2.4GHz frequency overlap'],
    steps: [
      { id: 's1', title: 'Switch to 5GHz WiFi', description: '5GHz is not affected by microwaves or older cordless phones.' },
      { id: 's2', title: 'Change WiFi Channel', description: 'Try channels 1, 6, or 11 to find one with less interference.' },
      { id: 's3', title: 'Move the Microwave', description: 'Ensure the router and microwave aren\'t right next to each other.' }
    ],
    technicianAdvice: 'Microwaves operate on the exact same 2.4GHz frequency as older WiFi standards.',
    relatedProblemIds: ['p1280001', 'p160002'],
    createdAt: '2026-01-06T09:00:00Z'
  },
  // --- App: Functionality & Permissions ---
  {
    id: 'p1290001',
    title: 'App "Camera" Permission Denied',
    slug: 'app-camera-permission-denied',
    shortDescription: 'The app says "Camera not available" even though your camera works in other apps.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Black screen in app', 'Error message', 'Cannot take photos'],
    causes: ['Permission revoked', 'System-wide camera kill switch', 'App bug'],
    steps: [
      { id: 's1', title: 'Check App Permissions', description: 'Settings > Apps > [App Name] > Permissions > Enable Camera.' },
      { id: 's2', title: 'Check Privacy Toggles', description: 'On Android 12+, ensure "Camera Access" is toggled ON in the quick settings.' },
      { id: 's3', title: 'Restart the App', description: 'Sometimes the app needs a refresh to recognize the new permission.' }
    ],
    technicianAdvice: 'If the camera works in the "Camera" app but not in Instagram/WhatsApp, it is 100% a permission issue.',
    relatedProblemIds: ['p1290002', 'p500001'],
    createdAt: '2026-01-07T08:00:00Z'
  },
  {
    id: 'p1290002',
    title: 'App "Location" is Inaccurate',
    slug: 'app-location-inaccurate',
    shortDescription: 'The app shows you are several blocks away from where you actually are.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Wrong map position', 'Navigation errors', 'GPS jumping'],
    causes: ['"Precise Location" disabled', 'GPS signal blocked', 'Battery saver mode'],
    steps: [
      { id: 's1', title: 'Enable "Precise Location"', description: 'Settings > Privacy > Location > [App Name] > Toggle "Precise Location" ON.' },
      { id: 's2', title: 'Calibrate Compass', description: 'Open Google Maps and move your phone in a "Figure 8" motion.' },
      { id: 's3', title: 'Turn Off Battery Saver', description: 'Battery saving modes often reduce GPS polling frequency.' }
    ],
    technicianAdvice: 'Indoor environments and tall buildings can "bounce" GPS signals, causing inaccuracy.',
    relatedProblemIds: ['p1290001', 'p340001'],
    createdAt: '2026-01-07T09:00:00Z'
  },
  // --- Gaming: Software & Accounts ---
  {
    id: 'p1300001',
    title: 'Game "Save File" Corrupted',
    slug: 'game-save-file-corrupted',
    shortDescription: 'You try to load your game but it says "Save data is corrupted" and you have to start over.',
    category: 'gaming',
    subcategory: 'Software',
    symptoms: ['Cannot load game', 'Error message', 'Lost progress'],
    causes: ['Power cut during saving', 'Storage failure', 'Mod conflict'],
    steps: [
      { id: 's1', title: 'Check Cloud Backups', description: 'Check PS Plus, Xbox Live, or Steam Cloud for an older version of the save.' },
      { id: 's2', title: 'Verify Game Files', description: 'In Steam/Epic, use the "Verify Integrity" tool to fix any broken game data.' },
      { id: 's3', title: 'Delete Local Save', description: 'Sometimes deleting the local save forces the system to download a clean one from the cloud.' }
    ],
    technicianAdvice: 'Never turn off your console or PC while the "Saving" icon is on the screen.',
    relatedProblemIds: ['p1300002', 'p530002'],
    createdAt: '2026-01-08T08:00:00Z'
  },
  {
    id: 'p1300002',
    title: 'Gaming Account "Two-Factor" (2FA) Locked Out',
    slug: 'gaming-account-2fa-locked-out',
    shortDescription: 'You lost your phone or deleted the authenticator app and can\'t log into your gaming account.',
    category: 'gaming',
    subcategory: 'Software',
    symptoms: ['Cannot log in', 'No 2FA code', 'Locked account'],
    causes: ['Lost device', 'No backup codes'],
    steps: [
      { id: 's1', title: 'Use Backup Codes', description: 'Check your email or printed notes for the 8-digit backup codes you got when setting up 2FA.' },
      { id: 's2', title: 'Contact Support', description: 'You will need to provide proof of identity (ID, purchase history) to have 2FA removed.' },
      { id: 's3', title: 'Check Other Logged-in Devices', description: 'You might be able to disable 2FA from a console or PC that is already logged in.' }
    ],
    technicianAdvice: 'Always save your backup codes in a safe place (like a password manager) when enabling 2FA.',
    relatedProblemIds: ['p1300001', 'p250001'],
    createdAt: '2026-01-08T09:00:00Z'
  }
];
