import { Problem } from './types';

export const EXTRA_PROBLEMS_41: Problem[] = [
  // --- Phone: iPhone 15 Specific ---
  {
    id: 'p1560001',
    title: 'iPhone 15 "USB-C" Cable Not Recognized',
    slug: 'iphone-15-usb-c-not-recognized',
    shortDescription: 'You plug in a USB-C cable to your iPhone 15, but it doesn\'t charge or transfer data.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['No charging', 'No data transfer', 'Cable loose'],
    causes: ['Non-compliant cable', 'Dirty port', 'Software bug'],
    steps: [
      { id: 's1', title: 'Use MFi Certified Cable', description: 'Ensure the cable is high-quality and supports Power Delivery (PD).' },
      { id: 's2', title: 'Clean the USB-C Port', description: 'Use compressed air to blow out any lint or debris.' },
      { id: 's3', title: 'Restart iPhone', description: 'Forces the USB-C controller to reset.' }
    ],
    technicianAdvice: 'iPhone 15 is the first to use USB-C; it is more sensitive to cable quality than the old Lightning port.',
    relatedProblemIds: ['p1560002', 'p660001'],
    createdAt: '2026-02-03T08:00:00Z'
  },
  {
    id: 'p1560002',
    title: 'iPhone 15 "Action Button" Not Responding',
    slug: 'iphone-15-action-button-not-responding',
    shortDescription: 'You press the Action Button but the assigned shortcut or feature doesn\'t trigger.',
    category: 'phone',
    subcategory: 'Hardware',
    symptoms: ['Button click but no action', 'Delayed response', 'Wrong action'],
    causes: ['Software glitch', 'Focus Mode restriction', 'Case interference'],
    steps: [
      { id: 's1', title: 'Check Action Button Settings', description: 'Settings > Action Button > Ensure the correct feature is selected.' },
      { id: 's2', title: 'Test Without Case', description: 'Ensure the case isn\'t preventing a full press of the button.' },
      { id: 's3', title: 'Update iOS', description: 'Apple often fixes button-related bugs in software updates.' }
    ],
    technicianAdvice: 'The Action Button requires a "Long Press" by default; ensure you aren\'t just tapping it.',
    relatedProblemIds: ['p1560001', 'p410002'],
    createdAt: '2026-02-03T09:00:00Z'
  },
  // --- Phone: Samsung S24 Specific ---
  {
    id: 'p1570001',
    title: 'Samsung S24 "AI Features" Not Working',
    slug: 'samsung-s24-ai-features-not-working',
    shortDescription: 'Circle to Search, Live Translate, or Generative Edit are missing or failing to load.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['AI features missing', 'Error message', 'Network error'],
    causes: ['Samsung Account not logged in', 'No internet connection', 'Regional restrictions'],
    steps: [
      { id: 's1', title: 'Log into Samsung Account', description: 'Most Galaxy AI features require a logged-in account.' },
      { id: 's2', title: 'Enable AI Features', description: 'Settings > Advanced Features > Advanced Intelligence > Enable the features you want.' },
      { id: 's3', title: 'Check Internet Connection', description: 'Generative AI features require a connection to Samsung\'s servers.' }
    ],
    technicianAdvice: 'Galaxy AI features are cloud-based; they won\'t work in Airplane Mode or with poor signal.',
    relatedProblemIds: ['p1570002', 'p170001'],
    createdAt: '2026-02-04T08:00:00Z'
  },
  {
    id: 'p1570002',
    title: 'Samsung S24 "Moiré Pattern" on Screen',
    slug: 'samsung-s24-moire-pattern-screen',
    shortDescription: 'The screen looks "grainy" or has a strange pattern, especially at low brightness.',
    category: 'phone',
    subcategory: 'Hardware',
    symptoms: ['Grainy screen', 'Pattern visible', 'Uneven colors'],
    causes: ['Mura effect (OLED)', 'Software calibration', 'Hardware defect'],
    steps: [
      { id: 's1', title: 'Disable "Extra Dim"', description: 'Check quick settings; "Extra Dim" can make grain more visible.' },
      { id: 's2', title: 'Adjust Vividness Slider', description: 'Settings > Display > Screen Mode > Vivid > Advanced > Adjust vividness.' },
      { id: 's3', title: 'Check for Software Update', description: 'Samsung released patches specifically to address S24 display "vividness" issues.' }
    ],
    technicianAdvice: 'Some "grain" is normal for high-density OLED panels at very low brightness, but it shouldn\'t be visible in daylight.',
    relatedProblemIds: ['p1570001', 'p460001'],
    createdAt: '2026-02-04T09:00:00Z'
  },
  // --- Laptop: MacBook M3 Specific ---
  {
    id: 'p1580001',
    title: 'MacBook M3 "External Display" Limit',
    slug: 'macbook-m3-external-display-limit',
    shortDescription: 'You can only connect one external monitor to your M3 MacBook Air, even with a dock.',
    category: 'laptop',
    subcategory: 'Connectivity',
    symptoms: ['Second monitor black', 'Only one screen works', 'Mirroring only'],
    causes: ['Hardware limitation of base M3 chip'],
    steps: [
      { id: 's1', title: 'Close the Laptop Lid', description: 'The base M3 MacBook Air supports two external displays ONLY when the lid is closed.' },
      { id: 's2', title: 'Use a DisplayLink Dock', description: 'A specialized dock with its own graphics chip can bypass the internal limit.' },
      { id: 's3', title: 'Check macOS Version', description: 'Ensure you are on macOS Sonoma 14.4 or later for the dual-display-lid-closed feature.' }
    ],
    technicianAdvice: 'The base M3 chip has a hard limit on the number of display controllers; M3 Pro and Max support more.',
    relatedProblemIds: ['p1580002', 'p320002'],
    createdAt: '2026-02-05T08:00:00Z'
  },
  {
    id: 'p1580002',
    title: 'MacBook M3 "Overheating" (No Fan)',
    slug: 'macbook-m3-overheating-no-fan',
    shortDescription: 'The MacBook Air becomes very hot to the touch and slows down during heavy tasks.',
    category: 'laptop',
    subcategory: 'Performance',
    symptoms: ['Hot chassis', 'Thermal throttling', 'Slow performance'],
    causes: ['Fanless design', 'Heavy workload (Video editing/Gaming)'],
    steps: [
      { id: 's1', title: 'Use on a Hard Surface', description: 'Allows the aluminum bottom to act as a heatsink.' },
      { id: 's2', title: 'Close Background Apps', description: 'Reduce the load on the M3 chip.' },
      { id: 's3', title: 'Use a Laptop Cooling Pad', description: 'Active cooling can help keep the bottom case cool.' }
    ],
    technicianAdvice: 'The MacBook Air is designed for silence; it will slow itself down (throttle) to prevent damage if it gets too hot.',
    relatedProblemIds: ['p1580001', 'p230001'],
    createdAt: '2026-02-05T09:00:00Z'
  },
  // --- Wearables: Apple Watch Ultra 2 Specific ---
  {
    id: 'p1590001',
    title: 'Apple Watch Ultra 2 "Siren" Triggering Accidentally',
    slug: 'apple-watch-ultra-2-siren-accidental',
    shortDescription: 'The loud emergency siren goes off when you don\'t want it to.',
    category: 'wearable',
    subcategory: 'Software',
    symptoms: ['Loud noise', 'Accidental trigger', 'Embarrassment'],
    causes: ['Action Button held down', 'Tight clothing'],
    steps: [
      { id: 's1', title: 'Disable "Hold to Turn On"', description: 'Settings > Siren > Toggle "Hold Action Button" OFF.' },
      { id: 's2', title: 'Change Action Button Feature', description: 'Assign the button to something else like "Workout" or "Flashlight".' },
      { id: 's3', title: 'Check for Case Pressure', description: 'Ensure your watch case isn\'t pressing the orange button.' }
    ],
    technicianAdvice: 'The Siren is 86 decibels; it\'s designed to be heard from 600 feet away, so accidental triggers are very loud.',
    relatedProblemIds: ['p1590002', 'p1560002'],
    createdAt: '2026-02-06T08:00:00Z'
  },
  {
    id: 'p1590002',
    title: 'Apple Watch Ultra 2 "Depth App" Not Launching',
    slug: 'apple-watch-ultra-2-depth-app-not-launching',
    shortDescription: 'The watch doesn\'t automatically start the Depth app when you submerge it in water.',
    category: 'wearable',
    subcategory: 'Software',
    symptoms: ['No depth tracking', 'App won\'t open', 'Water lock issues'],
    causes: ['Feature disabled in settings', 'Sensor blockage'],
    steps: [
      { id: 's1', title: 'Enable "Auto-Launch"', description: 'Settings > General > Auto-Launch > Toggle "Auto-Launch App" ON.' },
      { id: 's2', title: 'Check Water Lock', description: 'Ensure you haven\'t manually disabled the sensor.' },
      { id: 's3', title: 'Rinse with Fresh Water', description: 'Salt or chlorine can block the pressure sensor; rinse thoroughly after diving.' }
    ],
    technicianAdvice: 'The Depth app only works up to 40 meters; beyond that, you need a dedicated dive computer.',
    relatedProblemIds: ['p1590001', 'p620001'],
    createdAt: '2026-02-06T09:00:00Z'
  },
  // --- Gaming: PS5 Specific ---
  {
    id: 'p1600001',
    title: 'PS5 "Rest Mode" Crashing',
    slug: 'ps5-rest-mode-crashing',
    shortDescription: 'The console shuts down completely or freezes when you try to wake it from Rest Mode.',
    category: 'gaming',
    subcategory: 'Software',
    symptoms: ['Console won\'t wake', 'Hard reboot required', 'Database rebuilding'],
    causes: ['External HDD conflict', 'Software bug', 'Power supply issue'],
    steps: [
      { id: 's1', title: 'Disable Rest Mode', description: 'Settings > System > Power Saving > Set Time Until PS5 Enters Rest Mode > Don\'t Put in Rest Mode.' },
      { id: 's2', title: 'Unplug External Storage', description: 'Test if the crash still happens without your external hard drive connected.' },
      { id: 's3', title: 'Update System Software', description: 'Sony has released multiple patches to address Rest Mode stability.' }
    ],
    technicianAdvice: 'This is a well-known issue; if it persists, it\'s safer to fully shut down the console instead of using Rest Mode.',
    relatedProblemIds: ['p1600002', 'p450001'],
    createdAt: '2026-02-07T08:00:00Z'
  },
  {
    id: 'p1600002',
    title: 'PS5 "DualSense" Battery Life Very Short',
    slug: 'ps5-dualsense-battery-short',
    shortDescription: 'The controller only lasts 3-4 hours before needing a charge.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['Fast drain', 'Frequent charging', 'Low battery warning'],
    causes: ['Haptic feedback intensity', 'Adaptive triggers', 'Speaker volume'],
    steps: [
      { id: 's1', title: 'Lower Haptic Intensity', description: 'Settings > Accessories > Controller > Vibration Intensity > Medium/Low.' },
      { id: 's2', title: 'Turn Off Controller Speaker', description: 'Saves a significant amount of battery power.' },
      { id: 's3', title: 'Dim Controller Lights', description: 'Set "Brightness of Controller Indicators" to Dim.' }
    ],
    technicianAdvice: 'The DualSense has a lot of advanced features that consume power; turning them down can double your play time.',
    relatedProblemIds: ['p1600001', 'p1150001'],
    createdAt: '2026-02-07T09:00:00Z'
  }
];
