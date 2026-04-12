import { Problem } from './types';

export const EXTRA_PROBLEMS_37: Problem[] = [
  // --- Wearables: Battery & Performance ---
  {
    id: 'p1360001',
    title: 'Smartwatch "Battery" Drains Overnight',
    slug: 'smartwatch-battery-drains-overnight',
    shortDescription: 'You go to sleep with 80% battery and wake up with the watch dead or at 5%.',
    category: 'wearable',
    subcategory: 'Battery',
    symptoms: ['Fast drain', 'Dead watch in morning', 'Warm watch'],
    causes: ['Sleep tracking bug', 'Constant heart rate monitoring', 'Background sync'],
    steps: [
      { id: 's1', title: 'Check Battery Usage', description: 'In the watch app, see which feature is using the most power.' },
      { id: 's2', title: 'Disable "Always-On Display"', description: 'Saves significant power during the night.' },
      { id: 's3', title: 'Enable "Theater Mode" or "Sleep Mode"', description: 'Prevents the screen from turning on when you move in your sleep.' }
    ],
    technicianAdvice: 'If the battery is old, it may lose its charge much faster when the temperature drops at night.',
    relatedProblemIds: ['p1360002', 'p190001'],
    createdAt: '2026-01-14T08:00:00Z'
  },
  {
    id: 'p1360002',
    title: 'Smartwatch "Heart Rate" Sensor Inaccurate',
    slug: 'smartwatch-heart-rate-inaccurate',
    shortDescription: 'The watch shows a very high or very low heart rate that doesn\'t match how you feel.',
    category: 'wearable',
    subcategory: 'Sensors',
    symptoms: ['Erratic readings', 'No reading', 'Wrong heart rate'],
    causes: ['Loose fit', 'Dirty sensor', 'Tattoos on wrist'],
    steps: [
      { id: 's1', title: 'Tighten the Band', description: 'The sensor must be snug against your skin to work correctly.' },
      { id: 's2', title: 'Clean the Back of the Watch', description: 'Wipe away sweat and skin oils from the green/red lights.' },
      { id: 's3', title: 'Move to Other Wrist', description: 'Tattoos or thick hair can block the optical sensor.' }
    ],
    technicianAdvice: 'Optical heart rate sensors use light to "see" blood flow; anything that blocks that light will cause errors.',
    relatedProblemIds: ['p1360001', 'p620001'],
    createdAt: '2026-01-14T09:00:00Z'
  },
  // --- Audio: Quality & Software ---
  {
    id: 'p1370001',
    title: 'Headphones "Noise Cancellation" (ANC) Hissing',
    slug: 'headphones-anc-hissing',
    shortDescription: 'When ANC is on, you hear a faint "white noise" or hissing sound in the background.',
    category: 'audio',
    subcategory: 'Software',
    symptoms: ['Hissing sound', 'White noise', 'Pressure feeling'],
    causes: ['Normal ANC floor noise', 'Microphone feedback', 'Software bug'],
    steps: [
      { id: 's1', title: 'Adjust ANC Level', description: 'If your app allows it, lower the ANC intensity.' },
      { id: 's2', title: 'Check for Wind', description: 'ANC mics can struggle with wind, causing a "whooshing" or hissing sound.' },
      { id: 's3', title: 'Update Firmware', description: 'Manufacturers often tune the ANC algorithms to reduce hiss.' }
    ],
    technicianAdvice: 'All ANC headphones have some level of "floor noise"; it\'s the sound of the anti-noise being generated.',
    relatedProblemIds: ['p1370002', 'p290001'],
    createdAt: '2026-01-15T08:00:00Z'
  },
  {
    id: 'p1370002',
    title: 'Audio "Delay" (Latency) in Videos',
    slug: 'audio-delay-latency-videos',
    shortDescription: 'The sound doesn\'t match the lips of the people talking in the video.',
    category: 'audio',
    subcategory: 'Connectivity',
    symptoms: ['Lip-sync issues', 'Delayed sound', 'Lag'],
    causes: ['Bluetooth latency', 'Old Bluetooth version (SBC codec)', 'App processing lag'],
    steps: [
      { id: 's1', title: 'Use a Low-Latency Codec', description: 'Ensure your device is using aptX Low Latency or AAC.' },
      { id: 's2', title: 'Restart the Video App', description: 'Apps like YouTube often have built-in delay compensation that can fail.' },
      { id: 's3', title: 'Use Wired Connection', description: 'The only way to achieve zero latency for gaming or editing.' }
    ],
    technicianAdvice: 'Bluetooth always has some delay; modern codecs and apps work together to hide it, but it\'s never perfect.',
    relatedProblemIds: ['p1370001', 'p610001'],
    createdAt: '2026-01-15T09:00:00Z'
  },
  // --- Printers: Maintenance & Quality ---
  {
    id: 'p1380001',
    title: 'Printer "Ghosting" (Double Image)',
    slug: 'printer-ghosting-double-image',
    shortDescription: 'The text appears twice on the page, with a faint "ghost" version slightly offset.',
    category: 'printer',
    subcategory: 'Hardware',
    symptoms: ['Double image', 'Blurry text', 'Shadows'],
    causes: ['Dirty fuser (Laser)', 'Worn out drum', 'Encoder strip issue (Inkjet)'],
    steps: [
      { id: 's1', title: 'Clean the Encoder Strip', description: 'Gently wipe the clear plastic strip inside the printer with a dry cloth.' },
      { id: 's2', title: 'Replace the Drum Unit', description: 'If using a laser printer, a worn drum will "hold" old toner and print it again.' },
      { id: 's3', title: 'Run Alignment Tool', description: 'Use the printer software to realign the printheads.' }
    ],
    technicianAdvice: 'Ghosting in laser printers is almost always a fuser or drum issue; in inkjets, it\'s usually the encoder strip.',
    relatedProblemIds: ['p1380002', 'p210001'],
    createdAt: '2026-01-16T08:00:00Z'
  },
  {
    id: 'p1380002',
    title: 'Printer "Smudging" (Ink not drying)',
    slug: 'printer-smudging-ink-not-drying',
    shortDescription: 'The ink comes off on your fingers or smudges when you touch the page.',
    category: 'printer',
    subcategory: 'Hardware',
    symptoms: ['Wet ink', 'Smudged text', 'Dirty rollers'],
    causes: ['Wrong paper type', 'High humidity', 'Fuser failure (Laser)'],
    steps: [
      { id: 's1', title: 'Check Paper Settings', description: 'Ensure the printer knows you are using "Glossy" or "Heavy" paper.' },
      { id: 's2', title: 'Let it Dry', description: 'Some high-quality photo prints need 5-10 minutes to fully set.' },
      { id: 's3', title: 'Check Fuser Temperature', description: 'In laser printers, if the fuser isn\'t hot enough, the toner won\'t melt onto the page.' }
    ],
    technicianAdvice: 'Using inkjet paper in a laser printer (or vice-versa) will always result in smudging or damage.',
    relatedProblemIds: ['p1380001', 'p210002'],
    createdAt: '2026-01-16T09:00:00Z'
  },
  // --- Smart Home: Connectivity & Voice ---
  {
    id: 'p1390001',
    title: 'Smart Speaker "Not Hearing" Wake Word',
    slug: 'smart-speaker-not-hearing-wake-word',
    shortDescription: 'You have to shout "Alexa" or "Hey Google" several times before it responds.',
    category: 'smart-home',
    subcategory: 'Hardware',
    symptoms: ['No response', 'Must shout', 'Delayed reaction'],
    causes: ['Dust in microphones', 'Background noise', 'Software hang'],
    steps: [
      { id: 's1', title: 'Clean the Mic Holes', description: 'Use compressed air to blow dust out of the tiny holes on top of the speaker.' },
      { id: 's2', title: 'Move Away from Walls', description: 'Placing a speaker in a corner causes echoes that confuse the mics.' },
      { id: 's3', title: 'Restart the Device', description: 'Clears any temporary audio processing glitches.' }
    ],
    technicianAdvice: 'If you have a TV or loud fan nearby, the speaker\'s "noise cancellation" might be filtering out your voice too.',
    relatedProblemIds: ['p1390002', 'p220001'],
    createdAt: '2026-01-17T08:00:00Z'
  },
  {
    id: 'p1390002',
    title: 'Smart Home "Routine" Not Triggering',
    slug: 'smart-home-routine-not-triggering',
    shortDescription: 'Your "Good Night" routine is supposed to turn off all lights, but it does nothing.',
    category: 'smart-home',
    subcategory: 'Software',
    symptoms: ['Routine failed', 'Partial success', 'No action'],
    causes: ['Device offline', 'Conflict with another routine', 'Account sync error'],
    steps: [
      { id: 's1', title: 'Test Individual Devices', description: 'Ensure all devices in the routine are actually online and working.' },
      { id: 's2', title: 'Re-save the Routine', description: 'Sometimes just opening and saving the routine again fixes a sync error.' },
      { id: 's3', title: 'Check "Activity Log"', description: 'Look in the Alexa/Google app to see if it tried to run and failed.' }
    ],
    technicianAdvice: 'If one device in a routine is offline, it can sometimes cause the entire routine to "hang" or fail.',
    relatedProblemIds: ['p1390001', 'p220002'],
    createdAt: '2026-01-17T09:00:00Z'
  },
  // --- Laptop: Hardware & Maintenance ---
  {
    id: 'p1400001',
    title: 'Laptop "Beeping" on Startup',
    slug: 'laptop-beeping-on-startup',
    shortDescription: 'The laptop won\'t turn on and instead makes a series of loud beeps.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Beeping sound', 'No display', 'Flashing lights'],
    causes: ['RAM failure', 'Motherboard error', 'CPU issue'],
    steps: [
      { id: 's1', title: 'Count the Beeps', description: 'The pattern (e.g., 3 short, 1 long) is a "Post Code" that tells you what is wrong.' },
      { id: 's2', title: 'Reseat the RAM', description: 'Open the laptop, remove the RAM sticks, and click them back in firmly.' },
      { id: 's3', title: 'Look up the Code', description: 'Search for "[Laptop Model] beep codes" to find the specific error.' }
    ],
    technicianAdvice: 'Beep codes are the motherboard\'s way of talking when it can\'t use the screen.',
    relatedProblemIds: ['p1400002', 'p650002'],
    createdAt: '2026-01-18T08:00:00Z'
  },
  {
    id: 'p1400002',
    title: 'Laptop "Clock" is Always Wrong',
    slug: 'laptop-clock-always-wrong',
    shortDescription: 'Every time you turn on your laptop, the time and date are reset to several years ago.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Wrong time', 'Wrong date', 'SSL errors'],
    causes: ['Dead CMOS battery'],
    steps: [
      { id: 's1', title: 'Sync with Internet Time', description: 'Settings > Time & Language > Sync Now (Temporary fix).' },
      { id: 's2', title: 'Replace CMOS Battery', description: 'Open the laptop and replace the small CR2032 coin cell on the motherboard.' },
      { id: 's3', title: 'Check BIOS Settings', description: 'Ensure the time is set correctly in the firmware menu.' }
    ],
    technicianAdvice: 'The CMOS battery keeps the clock running even when the main battery is dead or removed.',
    relatedProblemIds: ['p1400001', 'p900002'],
    createdAt: '2026-01-18T09:00:00Z'
  }
];
