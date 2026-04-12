import { Problem } from './types';

export const EXTRA_PROBLEMS_29: Problem[] = [
  // --- Wearables: Software & Sync ---
  {
    id: 'p960001',
    title: 'Smartwatch "Time" is Incorrect',
    slug: 'smartwatch-time-incorrect',
    shortDescription: 'The watch shows the wrong time or is off by several minutes/hours.',
    category: 'wearable',
    subcategory: 'Software',
    symptoms: ['Wrong time', 'Wrong date', 'Sync error'],
    causes: ['Not synced with phone', 'Wrong time zone in app', 'Dead CMOS/Internal battery'],
    steps: [
      { id: 's1', title: 'Open the Watch App', description: 'Opening the companion app on your phone usually forces a time sync.' },
      { id: 's2', title: 'Check Phone Time Settings', description: 'Ensure your phone is set to "Set Automatically".' },
      { id: 's3', title: 'Restart Both Devices', description: 'Clears any stuck sync processes.' }
    ],
    technicianAdvice: 'Smartwatches don\'t have their own clocks; they rely entirely on the phone for the correct time.',
    relatedProblemIds: ['p960002', 'p610001'],
    createdAt: '2025-12-05T08:00:00Z'
  },
  {
    id: 'p960002',
    title: 'Smartwatch "Music Controls" Not Working',
    slug: 'smartwatch-music-controls-not-working',
    shortDescription: 'You play music on your phone, but the watch doesn\'t show the "Now Playing" screen or let you skip tracks.',
    category: 'wearable',
    subcategory: 'Software',
    symptoms: ['No music controls', 'Play/Pause doesn\'t work', 'Blank screen'],
    causes: ['App permissions', 'Bluetooth lag', 'Multiple music apps open'],
    steps: [
      { id: 's1', title: 'Check Notification Access', description: 'The watch needs permission to "see" what the phone is playing.' },
      { id: 's2', title: 'Set Default Music App', description: 'In the watch app, ensure your preferred player (Spotify/Apple Music) is selected.' },
      { id: 's3', title: 'Restart the Music App', description: 'Close and reopen the app on your phone.' }
    ],
    technicianAdvice: 'If you have two music apps open (e.g., YouTube and Spotify), the watch can get confused about which one to control.',
    relatedProblemIds: ['p960001', 'p170002'],
    createdAt: '2025-12-05T09:00:00Z'
  },
  // --- Audio: Quality & Connectivity ---
  {
    id: 'p970001',
    title: 'Bluetooth Headphones "Cutting Out" While Walking',
    slug: 'bluetooth-headphones-cutting-out-walking',
    shortDescription: 'The audio skips or drops for a split second every time you move or turn your head.',
    category: 'audio',
    subcategory: 'Connectivity',
    symptoms: ['Audio skipping', 'Stuttering', 'Connection drops'],
    causes: ['Interference from other devices', 'Weak Bluetooth antenna', 'Phone in back pocket'],
    steps: [
      { id: 's1', title: 'Move Phone to Front Pocket', description: 'Your body is a shield; moving the phone closer to the headphones helps.' },
      { id: 's2', title: 'Turn Off WiFi', description: 'WiFi and Bluetooth both use 2.4GHz; turning off WiFi can reduce interference.' },
      { id: 's3', title: 'Update Headphone Firmware', description: 'Manufacturers often release patches for connection stability.' }
    ],
    technicianAdvice: 'Outdoor environments have no walls for the signal to bounce off, making connection drops more common than indoors.',
    relatedProblemIds: ['p970002', 'p610001'],
    createdAt: '2025-12-06T08:00:00Z'
  },
  {
    id: 'p970002',
    title: 'Headphones "One Side Quieter" Than the Other',
    slug: 'headphones-one-side-quieter',
    shortDescription: 'The left earbud is significantly louder than the right, or vice-versa.',
    category: 'audio',
    subcategory: 'Hardware',
    symptoms: ['Imbalanced sound', 'Muffled side', 'Quiet earbud'],
    causes: ['Earwax buildup', 'Balance setting in OS', 'Moisture damage'],
    steps: [
      { id: 's1', title: 'Clean the Mesh', description: 'Use a soft brush or Blu-Tack to remove earwax from the speaker grill.' },
      { id: 's2', title: 'Check Audio Balance', description: 'Settings > Accessibility > Audio/Visual > Ensure the slider is in the center.' },
      { id: 's3', title: 'Reset the Earbuds', description: 'Follow the manufacturer\'s guide to factory reset the buds.' }
    ],
    technicianAdvice: 'Earwax is the #1 cause of quiet earbuds; even a tiny amount can block the sound waves.',
    relatedProblemIds: ['p970001', 'p240001'],
    createdAt: '2025-12-06T09:00:00Z'
  },
  // --- Printers: Hardware & Paper ---
  {
    id: 'p980001',
    title: 'Printer "Paper Jam" (No Paper Visible)',
    slug: 'printer-paper-jam-no-paper-visible',
    shortDescription: 'The printer says there is a paper jam, but you\'ve checked everywhere and can\'t find any paper.',
    category: 'printer',
    subcategory: 'Hardware',
    symptoms: ['"Paper Jam" error', 'Printer won\'t start', 'Beeping'],
    causes: ['Tiny scrap of paper', 'Stuck sensor', 'Dirty rollers'],
    steps: [
      { id: 's1', title: 'Check the Rear Access Door', description: 'Most jams happen in the back; open the duplexer or rear panel.' },
      { id: 's2', title: 'Use a Flashlight', description: 'Look for a tiny 1-inch scrap of paper stuck in the rollers.' },
      { id: 's3', title: 'Clean the Sensors', description: 'Use compressed air to blow out any dust from the paper path sensors.' }
    ],
    technicianAdvice: 'If you pull a jammed paper too hard, it can tear and leave a tiny piece behind that keeps the sensor triggered.',
    relatedProblemIds: ['p980002', 'p380002'],
    createdAt: '2025-12-07T08:00:00Z'
  },
  {
    id: 'p980002',
    title: 'Printer "Multiple Sheets" Being Pulled At Once',
    slug: 'printer-multiple-sheets-pulled',
    shortDescription: 'The printer tries to take one page but grabs 3-4, causing a jam or overlapping prints.',
    category: 'printer',
    subcategory: 'Hardware',
    symptoms: ['Paper jam', 'Overlapping text', 'Wasted paper'],
    causes: ['Humid paper', 'Worn separation pad', 'Static electricity'],
    steps: [
      { id: 's1', title: 'Fan the Paper', description: 'Take the stack out and fan it to break any static or moisture bonds.' },
      { id: 's2', title: 'Use Fresh Paper', description: 'If the paper is damp from humidity, it will stick together.' },
      { id: 's3', title: 'Clean the Separation Pad', description: 'The rubber pad that stops extra sheets might be dirty or worn smooth.' }
    ],
    technicianAdvice: 'Cheap, thin paper is much more likely to stick together than high-quality 80gsm+ paper.',
    relatedProblemIds: ['p980001', 'p210002'],
    createdAt: '2025-12-07T09:00:00Z'
  },
  // --- Smart Home: Lighting & Automation ---
  {
    id: 'p990001',
    title: 'Smart Bulb "Flickering" When Dimmed',
    slug: 'smart-bulb-flickering-dimmed',
    shortDescription: 'The bulb works fine at 100% but starts flickering or strobing at 10-20% brightness.',
    category: 'smart-home',
    subcategory: 'Hardware',
    symptoms: ['Strobing light', 'Flickering', 'Buzzing'],
    causes: ['Incompatible wall dimmer', 'Low quality LED driver', 'Voltage fluctuations'],
    steps: [
      { id: 's1', title: 'Remove Wall Dimmer', description: 'Smart bulbs MUST have 100% power from the wall; use a standard switch.' },
      { id: 's2', title: 'Update Bulb Firmware', description: 'Manufacturers often fix dimming curves in software.' },
      { id: 's3', title: 'Check for "Power On" Behavior', description: 'Ensure the bulb isn\'t resetting due to a loose connection.' }
    ],
    technicianAdvice: 'Smart bulbs use PWM (Pulse Width Modulation) to dim; if the incoming power isn\'t steady, they will flicker.',
    relatedProblemIds: ['p990002', 'p490001'],
    createdAt: '2025-12-08T08:00:00Z'
  },
  {
    id: 'p990002',
    title: 'Smart Lights "Turning On" by Themselves at Night',
    slug: 'smart-lights-turning-on-randomly',
    shortDescription: 'You wake up and the lights are on, even though you turned them off before bed.',
    category: 'smart-home',
    subcategory: 'Software',
    symptoms: ['Lights on unexpectedly', 'Wasted energy', 'Annoyance'],
    causes: ['Power flicker (Power-on behavior)', 'Ghost automation', 'Hacked account'],
    steps: [
      { id: 's1', title: 'Change "Power-on Behavior"', description: 'Set the bulb to "Stay Off" or "Last State" after a power outage.' },
      { id: 's2', title: 'Check All Apps', description: 'Ensure you don\'t have a forgotten routine in Alexa, Google, or IFTTT.' },
      { id: 's3', title: 'Change Password', description: 'If you see "External Command" in the logs, someone else might have access.' }
    ],
    technicianAdvice: 'Most smart bulbs default to "100% Brightness" after a power cut so you aren\'t left in the dark.',
    relatedProblemIds: ['p990001', 'p220002'],
    createdAt: '2025-12-08T09:00:00Z'
  },
  // --- Laptop: Hardware & Maintenance ---
  {
    id: 'p1000001',
    title: 'Laptop "Hinge" is Loose or Wobbly',
    slug: 'laptop-hinge-loose-wobbly',
    shortDescription: 'The screen doesn\'t stay at the angle you set it; it falls back or forward.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Wobbly screen', 'Creaking sound', 'Screen won\'t stay open'],
    causes: ['Loose screws', 'Broken plastic mount', 'Worn friction plates'],
    steps: [
      { id: 's1', title: 'Tighten Hinge Screws', description: 'Open the back and tighten the screws that hold the hinge to the chassis.' },
      { id: 's2', title: 'Avoid Opening from One Corner', description: 'Always open the laptop from the center to distribute pressure evenly.' },
      { id: 's3', title: 'Replace Hinge Assembly', description: 'If the metal has snapped, the entire hinge must be replaced.' }
    ],
    technicianAdvice: 'Loose hinges can eventually snap and tear the display cable, causing a much more expensive repair.',
    relatedProblemIds: ['p1000002', 'p670001'],
    createdAt: '2025-12-09T08:00:00Z'
  },
  {
    id: 'p1000002',
    title: 'Laptop "Coil Whine" (High-pitched buzzing)',
    slug: 'laptop-coil-whine-buzzing',
    shortDescription: 'A very faint, high-pitched whistling or buzzing sound comes from the laptop when it\'s under load.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['High-pitched noise', 'Whistling', 'Changes with CPU load'],
    causes: ['Vibrating inductors (coils)', 'High voltage switching'],
    steps: [
      { id: 's1', title: 'Limit Frame Rate', description: 'If it happens during games, capping the FPS can reduce the electrical load.' },
      { id: 's2', title: 'Change Power Plan', description: 'Sometimes "Balanced" mode reduces the voltage switching that causes the noise.' },
      { id: 's3', title: 'Ignore It', description: 'Coil whine is not a sign of failure; it is just a physical characteristic of some electronics.' }
    ],
    technicianAdvice: 'Coil whine is caused by the physical vibration of the copper coils as electricity passes through them.',
    relatedProblemIds: ['p1000001', 'p700001'],
    createdAt: '2025-12-09T09:00:00Z'
  }
];
