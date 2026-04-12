import { Problem } from './types';

export const EXTRA_PROBLEMS_27: Problem[] = [
  // --- Wearables: Battery & Charging ---
  {
    id: 'p860001',
    title: 'Smartwatch "Overheating" While Charging',
    slug: 'smartwatch-overheating-while-charging',
    shortDescription: 'The watch becomes very hot and shows a temperature warning when placed on the charger.',
    category: 'wearable',
    subcategory: 'Battery',
    symptoms: ['Hot watch', 'Charging paused', 'Warning icon'],
    causes: ['Faulty charger', 'Third-party puck', 'Ambient heat'],
    steps: [
      { id: 's1', title: 'Use Official Charger', description: 'Cheap third-party chargers often lack proper voltage regulation.' },
      { id: 's2', title: 'Remove Protective Case', description: 'If you have a plastic bumper on the watch, it might be trapping heat.' },
      { id: 's3', title: 'Charge in Cool Area', description: 'Don\'t charge the watch in direct sunlight or near a heater.' }
    ],
    technicianAdvice: 'Inductive (wireless) charging naturally generates heat; if it gets too hot, the watch will stop charging to protect the battery.',
    relatedProblemIds: ['p860002', 'p190001'],
    createdAt: '2025-11-25T08:00:00Z'
  },
  {
    id: 'p860002',
    title: 'Smartwatch Battery "Expanding" (Screen Popping Off)',
    slug: 'smartwatch-battery-expanding',
    shortDescription: 'The watch screen is being pushed out from the inside, or the back is bulging.',
    category: 'wearable',
    subcategory: 'Battery',
    symptoms: ['Bulging case', 'Screen lifting', 'Curved back'],
    causes: ['Lithium-ion failure', 'Heat damage', 'Age'],
    steps: [
      { id: 's1', title: 'Stop Using Immediately', description: 'A swollen battery is a fire hazard. Do NOT press down on it.' },
      { id: 's2', title: 'Do Not Charge', description: 'Charging an expanded battery can cause it to vent or catch fire.' },
      { id: 's3', title: 'Professional Disposal', description: 'Take it to a dedicated e-waste facility; do not throw it in the trash.' }
    ],
    technicianAdvice: 'Swollen batteries are caused by gas buildup inside the cells. This is a critical safety issue.',
    relatedProblemIds: ['p860001', 'p810001'],
    createdAt: '2025-11-25T09:00:00Z'
  },
  // --- Audio: Software & Features ---
  {
    id: 'p870001',
    title: 'Headphones "Auto-Pause" Triggering Randomly',
    slug: 'headphones-auto-pause-triggering-randomly',
    shortDescription: 'Your music stops and starts on its own while you are walking or moving your head.',
    category: 'audio',
    subcategory: 'Software',
    symptoms: ['Music pausing', 'Beeping', 'Intermittent playback'],
    causes: ['Dirty proximity sensor', 'Loose fit', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Clean the Sensor', description: 'Wipe the small black window inside the earcup or on the earbud.' },
      { id: 's2', title: 'Adjust Fit', description: 'If the headphones shift, the sensor thinks you took them off.' },
      { id: 's3', title: 'Disable Feature in App', description: 'Turn off "Wear Detection" or "Auto-Pause" in the headphone\'s settings app.' }
    ],
    technicianAdvice: 'Proximity sensors can be fooled by long hair or hats that get between the sensor and your skin.',
    relatedProblemIds: ['p870002', 'p290001'],
    createdAt: '2025-11-26T08:00:00Z'
  },
  {
    id: 'p870002',
    title: 'Headphones "Transparency Mode" Sounds Robotic',
    slug: 'headphones-transparency-mode-robotic',
    shortDescription: 'When you turn on transparency mode, the outside world sounds metallic or artificial.',
    category: 'audio',
    subcategory: 'Software',
    symptoms: ['Robotic voices', 'Metallic hiss', 'Unnatural sound'],
    causes: ['Wind noise', 'Microphone blockage', 'Software processing lag'],
    steps: [
      { id: 's1', title: 'Check for Wind', description: 'Transparency mode often struggles in windy conditions; try turning it off.' },
      { id: 's2', title: 'Clean External Mics', description: 'Ensure the tiny holes on the outside of the headphones are clear of lint.' },
      { id: 's3', title: 'Update Firmware', description: 'Manufacturers often tune the transparency algorithms in software updates.' }
    ],
    technicianAdvice: 'Transparency mode uses external mics to pipe sound in; any blockage makes it sound "tinny".',
    relatedProblemIds: ['p870001', 'p200001'],
    createdAt: '2025-11-26T09:00:00Z'
  },
  // --- Printers: Maintenance & Ink ---
  {
    id: 'p880001',
    title: 'Printer "Ink Drying" (Clogged Nozzles)',
    slug: 'printer-ink-drying-clogged-nozzles',
    shortDescription: 'The printer hasn\'t been used in a month, and now it prints with gaps or missing colors.',
    category: 'printer',
    subcategory: 'Hardware',
    symptoms: ['Missing lines', 'Faded colors', 'Blank pages'],
    causes: ['Dried ink in printhead'],
    steps: [
      { id: 's1', title: 'Run "Deep Clean"', description: 'Use the printer\'s maintenance menu to force ink through the nozzles.' },
      { id: 's2', title: 'Print a "Color Grid"', description: 'Forces all colors to fire, which can help clear minor clogs.' },
      { id: 's3', title: 'Manual Printhead Cleaning', description: 'Advanced: Remove the printhead and soak it in warm distilled water (use with caution).' }
    ],
    technicianAdvice: 'Inkjet printers should be used at least once a week to prevent the ink from drying in the tiny nozzles.',
    relatedProblemIds: ['p880002', 'p210001'],
    createdAt: '2025-11-27T08:00:00Z'
  },
  {
    id: 'p880002',
    title: 'Printer "Non-Genuine" Cartridge Warning',
    slug: 'printer-non-genuine-cartridge-warning',
    shortDescription: 'You installed a third-party ink cartridge and the printer refuses to use it.',
    category: 'printer',
    subcategory: 'Software',
    symptoms: ['Error message', '"Incompatible cartridge"', 'Cannot print'],
    causes: ['DRM chip on cartridge', 'Firmware update blocking 3rd party ink'],
    steps: [
      { id: 's1', title: 'Click "OK" or "Continue"', description: 'Sometimes you can just bypass the warning by acknowledging the risk.' },
      { id: 's2', title: 'Clean the Chip', description: 'Wipe the gold contacts on the cartridge with a dry cloth.' },
      { id: 's3', title: 'Downgrade Firmware', description: 'Advanced: Some users revert to older firmware that didn\'t block generic ink.' }
    ],
    technicianAdvice: 'Printer companies make their profit on ink, so they use software to discourage using cheaper alternatives.',
    relatedProblemIds: ['p880001', 'p300001'],
    createdAt: '2025-11-27T09:00:00Z'
  },
  // --- Smart Home: Connectivity & Hubs ---
  {
    id: 'p890001',
    title: 'Smart Device "Not Responding" in HomeKit/Google Home',
    slug: 'smart-device-not-responding-homekit-google',
    shortDescription: 'The device works in its own app, but says "No Response" in your main smart home app.',
    category: 'smart-home',
    subcategory: 'Connectivity',
    symptoms: ['"No Response"', 'Red exclamation mark', 'Voice control fails'],
    causes: ['mDNS/Bonjour issues', 'Hub-to-device lag', 'Account sync error'],
    steps: [
      { id: 's1', title: 'Restart Your Smart Hub', description: 'Reboot your Apple TV, HomePod, or Google Nest Hub.' },
      { id: 's2', title: 'Check "Local Network" Permission', description: 'On iPhone, ensure the Home app has "Local Network" access in Settings > Privacy.' },
      { id: 's3', title: 'Re-sync Accounts', description: 'In the Google Home app, say "Hey Google, sync my devices".' }
    ],
    technicianAdvice: 'If it works in the native app, the device is online; the "bridge" to your hub is the problem.',
    relatedProblemIds: ['p890002', 'p220001'],
    createdAt: '2025-11-28T08:00:00Z'
  },
  {
    id: 'p890002',
    title: 'Smart Home "Zigbee/Z-Wave" Range Issues',
    slug: 'smart-home-zigbee-zwave-range-issues',
    shortDescription: 'Devices far from the hub keep dropping offline, even though your WiFi is strong there.',
    category: 'smart-home',
    subcategory: 'Connectivity',
    symptoms: ['Intermittent connection', 'Slow response', 'Device offline'],
    causes: ['Mesh network gaps', 'Interference from WiFi', 'Metal obstructions'],
    steps: [
      { id: 's1', title: 'Add a Repeater', description: 'Add a mains-powered device (like a smart plug) halfway between the hub and the dead zone.' },
      { id: 's2', title: 'Change WiFi Channel', description: 'Zigbee uses the same 2.4GHz band; move your WiFi to channel 1 or 6 to avoid overlap.' },
      { id: 's3', title: 'Heal the Network', description: 'In your hub settings, run a "Network Repair" or "Heal" to optimize the mesh paths.' }
    ],
    technicianAdvice: 'Zigbee and Z-Wave are mesh networks; the more "always-on" devices you have, the stronger the network becomes.',
    relatedProblemIds: ['p890001', 'p430002'],
    createdAt: '2025-11-28T09:00:00Z'
  },
  // --- Laptop: Software & Performance ---
  {
    id: 'p900001',
    title: 'Laptop "System Interrupts" High CPU Usage',
    slug: 'laptop-system-interrupts-high-cpu',
    shortDescription: 'The laptop is slow and Task Manager shows "System Interrupts" using 20-50% of the CPU.',
    category: 'laptop',
    subcategory: 'Performance',
    symptoms: ['Slow PC', 'High CPU', 'Laggy mouse'],
    causes: ['Failing hardware', 'Bad driver', 'USB device conflict'],
    steps: [
      { id: 's1', title: 'Unplug All USB Devices', description: 'See if the CPU usage drops. If so, one of your peripherals is faulty.' },
      { id: 's2', title: 'Update All Drivers', description: 'Use the manufacturer\'s update tool (e.g., Dell Command Update) to refresh all system drivers.' },
      { id: 's3', title: 'Check Disk Health', description: 'A failing SSD can cause constant interrupts as the system tries to read data.' }
    ],
    technicianAdvice: '"System Interrupts" isn\'t a process; it\'s the CPU waiting for hardware that isn\'t responding correctly.',
    relatedProblemIds: ['p900002', 'p230001'],
    createdAt: '2025-11-29T08:00:00Z'
  },
  {
    id: 'p900002',
    title: 'Laptop "Windows Update" Stuck at 0% or 100%',
    slug: 'laptop-windows-update-stuck',
    shortDescription: 'You try to update your laptop, but the progress bar hasn\'t moved in hours.',
    category: 'laptop',
    subcategory: 'Software',
    symptoms: ['Stuck update', 'Error 0x800...', 'High disk usage'],
    causes: ['Corrupt update cache', 'Service hang', 'Insufficient space'],
    steps: [
      { id: 's1', title: 'Run Windows Update Troubleshooter', description: 'Settings > System > Troubleshoot > Other troubleshooters > Windows Update.' },
      { id: 's2', title: 'Clear SoftwareDistribution Folder', description: 'Stop "wuauserv" service, delete contents of C:\\Windows\\SoftwareDistribution, and restart service.' },
      { id: 's3', title: 'Use Media Creation Tool', description: 'If the built-in update fails, use the official Microsoft tool to "Upgrade this PC".' }
    ],
    technicianAdvice: 'Windows Update is notoriously fragile; clearing the cache is the most effective fix.',
    relatedProblemIds: ['p900001', 'p450002'],
    createdAt: '2025-11-29T09:00:00Z'
  }
];
