import { Problem } from './types';

export const EXTRA_PROBLEMS_11: Problem[] = [
  // --- Laptop: Screen Problems ---
  {
    id: 'p30001',
    title: 'Laptop Screen Flickering',
    slug: 'laptop-screen-flickering',
    shortDescription: 'The display flashes or flickers intermittently during use.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Flashing screen', 'Lines on display', 'Brightness jumps'],
    causes: ['Loose video cable', 'Outdated GPU driver', 'Failing backlight'],
    steps: [
      { id: 's1', title: 'Update Graphics Driver', description: 'Download the latest driver from the manufacturer\'s website.' },
      { id: 's2', title: 'Check Refresh Rate', description: 'Ensure the refresh rate matches the monitor\'s specifications.' },
      { id: 's3', title: 'Test with External Monitor', description: 'If the external monitor doesn\'t flicker, the laptop screen or cable is likely faulty.' }
    ],
    technicianAdvice: 'A flickering screen often points to a loose eDP cable inside the hinge.',
    relatedProblemIds: ['p30002', 'p30003'],
    createdAt: '2025-09-02T08:00:00Z'
  },
  {
    id: 'p30002',
    title: 'Laptop Screen Dim or No Backlight',
    slug: 'laptop-screen-dim-no-backlight',
    shortDescription: 'The screen is very dark, but you can see images if you shine a light on it.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Very dark screen', 'No backlight', 'Faint images'],
    causes: ['Blown backlight fuse', 'Faulty inverter', 'Damaged LED strip'],
    steps: [
      { id: 's1', title: 'Check Brightness Settings', description: 'Use function keys to ensure brightness isn\'t at 0%.' },
      { id: 's2', title: 'Reset Power', description: 'Perform a hard reset by removing battery and holding power button.' },
      { id: 's3', title: 'Check Lid Sensor', description: 'Ensure the magnetic lid sensor isn\'t stuck in the "closed" position.' }
    ],
    technicianAdvice: 'If you see an image with a flashlight, the LCD panel itself is fine but the backlight circuit is dead.',
    relatedProblemIds: ['p30001', 'p30004'],
    createdAt: '2025-09-02T09:00:00Z'
  },
  // --- Smartphone: Battery Problems ---
  {
    id: 'p40001',
    title: 'Smartphone Battery Draining Rapidly',
    slug: 'smartphone-battery-draining-rapidly',
    shortDescription: 'The battery percentage drops significantly even when the phone is not in use.',
    category: 'phone',
    subcategory: 'Battery',
    symptoms: ['Hot phone', 'Fast percentage drop', 'Short standby time'],
    causes: ['Background apps', 'High screen brightness', 'Failing battery cell'],
    steps: [
      { id: 's1', title: 'Check Battery Usage', description: 'Go to Settings > Battery to see which apps are consuming the most power.' },
      { id: 's2', title: 'Disable Background Refresh', description: 'Prevent apps from updating data in the background.' },
      { id: 's3', title: 'Calibrate Battery', description: 'Drain to 0%, then charge to 100% without interruption.' }
    ],
    technicianAdvice: 'If the battery health is below 80%, a physical replacement is recommended.',
    relatedProblemIds: ['p40002', 'p40003'],
    createdAt: '2025-09-03T08:00:00Z'
  },
  {
    id: 'p40002',
    title: 'Smartphone Swollen Battery',
    slug: 'smartphone-swollen-battery',
    shortDescription: 'The back of the phone is bulging or the screen is lifting due to battery expansion.',
    category: 'phone',
    subcategory: 'Battery',
    symptoms: ['Bulging case', 'Screen lifting', 'Phone feels thick'],
    causes: ['Overheating', 'Overcharging', 'Manufacturing defect'],
    steps: [
      { id: 's1', title: 'Stop Using Immediately', description: 'A swollen battery is a fire hazard. Power off the device.' },
      { id: 's2', title: 'Do Not Charge', description: 'Charging an expanded battery can lead to a thermal runaway event.' },
      { id: 's3', title: 'Professional Disposal', description: 'Take the device to a repair shop for safe battery removal and disposal.' }
    ],
    technicianAdvice: 'Never attempt to puncture a swollen battery. It can explode or catch fire.',
    relatedProblemIds: ['p40001', 'p40004'],
    createdAt: '2025-09-03T09:00:00Z'
  },
  // --- Smart Home: Connectivity ---
  {
    id: 'p50001',
    title: 'Smart Bulb Not Connecting to WiFi',
    slug: 'smart-bulb-not-connecting-wifi',
    shortDescription: 'The smart bulb fails to pair with your home network or app.',
    category: 'smart-home',
    subcategory: 'Connectivity',
    symptoms: ['Bulb flashing', 'App timeout', 'Device not found'],
    causes: ['2.4GHz vs 5GHz mismatch', 'Weak WiFi signal', 'Incorrect password'],
    steps: [
      { id: 's1', title: 'Use 2.4GHz Network', description: 'Most smart bulbs only support 2.4GHz WiFi. Ensure your phone is on the same band.' },
      { id: 's2', title: 'Reset the Bulb', description: 'Turn the light switch on and off 3-5 times rapidly until it flashes.' },
      { id: 's3', title: 'Move Closer to Router', description: 'Pair the bulb in a socket closer to the router, then move it to its final location.' }
    ],
    technicianAdvice: 'Many smart bulbs struggle with "mesh" networks that combine 2.4GHz and 5GHz under one name.',
    relatedProblemIds: ['p50002', 'p50003'],
    createdAt: '2025-09-04T08:00:00Z'
  },
  {
    id: 'p50002',
    title: 'Smart Plug Clicking but No Power',
    slug: 'smart-plug-clicking-no-power',
    shortDescription: 'The smart plug makes a clicking sound when toggled, but the connected device doesn\'t turn on.',
    category: 'smart-home',
    subcategory: 'Hardware',
    symptoms: ['Clicking sound', 'No output power', 'LED indicator is on'],
    causes: ['Internal relay failure', 'Blown internal fuse', 'Overloaded circuit'],
    steps: [
      { id: 's1', title: 'Test with Lamp', description: 'Plug in a simple lamp to verify if any power is being delivered.' },
      { id: 's2', title: 'Check Power Rating', description: 'Ensure the connected device doesn\'t exceed the plug\'s max wattage (usually 10A-15A).' },
      { id: 's3', title: 'Factory Reset', description: 'Hold the physical button for 10 seconds to reset the internal controller.' }
    ],
    technicianAdvice: 'A clicking sound means the relay is moving, but the contacts inside may be burnt or stuck.',
    relatedProblemIds: ['p50001', 'p50004'],
    createdAt: '2025-09-04T09:00:00Z'
  },
  // --- Gaming: Hardware ---
  {
    id: 'p60001',
    title: 'Console Controller Stick Drift',
    slug: 'console-controller-stick-drift',
    shortDescription: 'The on-screen character or camera moves on its own without touching the analog sticks.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['Ghost movement', 'Inaccurate aiming', 'Stuck inputs'],
    causes: ['Dust in sensor', 'Worn out potentiometers', 'Software calibration error'],
    steps: [
      { id: 's1', title: 'Clean with Isopropyl Alcohol', description: 'Use a Q-tip with 90%+ alcohol around the base of the stick.' },
      { id: 's2', title: 'Calibrate in Settings', description: 'Use the console\'s controller settings to adjust deadzones.' },
      { id: 's3', title: 'Replace Stick Module', description: 'If cleaning fails, the physical sensor module needs to be desoldered and replaced.' }
    ],
    technicianAdvice: 'Stick drift is the #1 cause of controller failure in modern consoles.',
    relatedProblemIds: ['p60002', 'p60003'],
    createdAt: '2025-09-05T08:00:00Z'
  },
  {
    id: 'p60002',
    title: 'Console Overheating (Loud Fan)',
    slug: 'console-overheating-loud-fan',
    shortDescription: 'The console fan spins at max speed and the system may shut down with a warning.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['Loud fan noise', 'System shutdown', '"Too hot" warning'],
    causes: ['Dust buildup', 'Dried thermal paste', 'Poor ventilation'],
    steps: [
      { id: 's1', title: 'Clear Air Vents', description: 'Use compressed air to blow dust out of the intake and exhaust ports.' },
      { id: 's2', title: 'Improve Airflow', description: 'Ensure the console is in an open area with at least 6 inches of space on all sides.' },
      { id: 's3', title: 'Replace Thermal Paste', description: 'Disassemble the console and apply fresh high-quality thermal compound to the APU.' }
    ],
    technicianAdvice: 'If your console sounds like a jet engine, it\'s time for a deep clean.',
    relatedProblemIds: ['p60001', 'p60004'],
    createdAt: '2025-09-05T09:00:00Z'
  },
  // --- Wearables: Syncing ---
  {
    id: 'p70001',
    title: 'Smartwatch Not Syncing Steps',
    slug: 'smartwatch-not-syncing-steps',
    shortDescription: 'Your steps are counted on the watch but don\'t appear in the phone app.',
    category: 'wearable',
    subcategory: 'Sync',
    symptoms: ['Data mismatch', 'Sync failed error', 'Outdated info in app'],
    causes: ['Bluetooth connection lost', 'App permissions revoked', 'Server sync delay'],
    steps: [
      { id: 's1', title: 'Toggle Bluetooth', description: 'Turn Bluetooth off and on for both the watch and the phone.' },
      { id: 's2', title: 'Check App Permissions', description: 'Ensure the health app has permission to access "Motion & Fitness" data.' },
      { id: 's3', title: 'Force Sync', description: 'Pull down on the home screen of the app to trigger a manual sync.' }
    ],
    technicianAdvice: 'Sometimes unpairing and re-pairing the watch is the only way to fix persistent sync bugs.',
    relatedProblemIds: ['p70002', 'p70003'],
    createdAt: '2025-09-06T08:00:00Z'
  },
  {
    id: 'p70002',
    title: 'Smartwatch Heart Rate Sensor Inaccurate',
    slug: 'smartwatch-heart-rate-inaccurate',
    shortDescription: 'The watch shows unusually high or low heart rate readings during rest or exercise.',
    category: 'wearable',
    subcategory: 'Hardware',
    symptoms: ['Erratic readings', 'No reading', 'Slow updates'],
    causes: ['Loose fit', 'Dirty sensor', 'Tattoos blocking light'],
    steps: [
      { id: 's1', title: 'Tighten the Band', description: 'The sensor needs a snug fit against the skin to read blood flow correctly.' },
      { id: 's2', title: 'Clean the Back', description: 'Wipe sweat and oils off the green/red LED sensors on the back of the watch.' },
      { id: 's3', title: 'Adjust Position', description: 'Move the watch two fingers-width above your wrist bone for better accuracy.' }
    ],
    technicianAdvice: 'Optical heart rate sensors can be fooled by rapid arm movements or cold weather.',
    relatedProblemIds: ['p70001', 'p70004'],
    createdAt: '2025-09-06T09:00:00Z'
  },
  // --- Audio: Bluetooth ---
  {
    id: 'p80001',
    title: 'Bluetooth Headphones Audio Stuttering',
    slug: 'bluetooth-headphones-audio-stuttering',
    shortDescription: 'The sound cuts in and out or crackles while listening to music or calls.',
    category: 'audio',
    subcategory: 'Connectivity',
    symptoms: ['Audio drops', 'Crackling sound', 'Lag/Delay'],
    causes: ['Interference', 'Low battery', 'Outdated firmware'],
    steps: [
      { id: 's1', title: 'Move Closer to Source', description: 'Bluetooth range is limited; walls and other electronics can cause drops.' },
      { id: 's2', title: 'Reset Headphones', description: 'Follow the manual to perform a factory reset (usually holding power + volume).' },
      { id: 's3', title: 'Update Firmware', description: 'Use the manufacturer\'s app to check for and install audio patches.' }
    ],
    technicianAdvice: '2.4GHz WiFi and microwaves can interfere with Bluetooth signals.',
    relatedProblemIds: ['p80002', 'p80003'],
    createdAt: '2025-09-07T08:00:00Z'
  },
  {
    id: 'p80002',
    title: 'One Earbud Not Working',
    slug: 'one-earbud-not-working',
    shortDescription: 'Sound only comes out of one side of your wireless or wired headphones.',
    category: 'audio',
    subcategory: 'Hardware',
    symptoms: ['Silent left/right side', 'Low volume on one side', 'Balance issues'],
    causes: ['Earwax buildup', 'Broken internal wire', 'Desynced TWS earbuds'],
    steps: [
      { id: 's1', title: 'Clean the Mesh', description: 'Gently remove earwax from the speaker grill using a soft brush.' },
      { id: 's2', title: 'Re-sync Earbuds', description: 'Place both in the case and hold the sync button to pair them to each other.' },
      { id: 's3', title: 'Check Audio Balance', description: 'Go to Accessibility > Audio/Visual and ensure the balance slider is centered.' }
    ],
    technicianAdvice: '90% of "dead" earbuds are just clogged with earwax.',
    relatedProblemIds: ['p80001', 'p80004'],
    createdAt: '2025-09-07T09:00:00Z'
  },
  // --- Printers: Common Issues ---
  {
    id: 'p90001',
    title: 'Printer Paper Jam',
    slug: 'printer-paper-jam',
    shortDescription: 'Paper is stuck inside the printer mechanism, stopping all print jobs.',
    category: 'printer',
    subcategory: 'Hardware',
    symptoms: ['"Paper Jam" error', 'Grinding noise', 'Torn paper'],
    causes: ['Overloaded tray', 'Damp paper', 'Worn pickup rollers'],
    steps: [
      { id: 's1', title: 'Remove Paper Gently', description: 'Always pull paper in the direction of the paper path to avoid tearing.' },
      { id: 's2', title: 'Check for Scraps', description: 'Open all access doors and use a flashlight to find tiny pieces of paper.' },
      { id: 's3', title: 'Clean Rollers', description: 'Wipe the rubber pickup rollers with a damp, lint-free cloth.' }
    ],
    technicianAdvice: 'Never use sharp objects like tweezers to pull paper; you might scratch the drum.',
    relatedProblemIds: ['p90002', 'p90003'],
    createdAt: '2025-09-08T08:00:00Z'
  },
  {
    id: 'p90002',
    title: 'Printer Offline Error',
    slug: 'printer-offline-error',
    shortDescription: 'The computer says the printer is offline even though it is turned on and connected.',
    category: 'printer',
    subcategory: 'Connectivity',
    symptoms: ['"Offline" status', 'Print queue stuck', 'No connection'],
    causes: ['IP address change', 'SNMP status error', 'Print spooler crash'],
    steps: [
      { id: 's1', title: 'Restart Print Spooler', description: 'In Windows, go to Services.msc > Print Spooler > Restart.' },
      { id: 's2', title: 'Uncheck "Use Printer Offline"', description: 'Open queue > Printer menu > Ensure "Use Printer Offline" is unchecked.' },
      { id: 's3', title: 'Set Static IP', description: 'Assign a permanent IP address to the printer in your router settings.' }
    ],
    technicianAdvice: 'Printers often "go offline" because their IP address changed after a router reboot.',
    relatedProblemIds: ['p90001', 'p90004'],
    createdAt: '2025-09-08T09:00:00Z'
  },
  // --- Adding more to reach the goal ---
  {
    id: 'p100001',
    title: 'Smart Camera Night Vision Not Working',
    slug: 'smart-camera-night-vision-not-working',
    shortDescription: 'The camera image is pitch black at night despite having IR LEDs.',
    category: 'smart-home',
    subcategory: 'Hardware',
    symptoms: ['Black image at night', 'No red glow from IR LEDs', 'Grainy video'],
    causes: ['IR cut filter stuck', 'Reflections from glass', 'Insufficient power'],
    steps: [
      { id: 's1', title: 'Check for Obstructions', description: 'Ensure no objects are reflecting the IR light back into the lens.' },
      { id: 's2', title: 'Listen for "Click"', description: 'The IR filter should click when switching to night mode. If not, it\'s stuck.' },
      { id: 's3', title: 'External IR Illuminator', description: 'If the built-in LEDs are weak, add an external IR floodlight.' }
    ],
    technicianAdvice: 'Placing a camera behind a window will always cause IR glare at night.',
    relatedProblemIds: ['p50001', 'p100002'],
    createdAt: '2025-09-09T08:00:00Z'
  },
  {
    id: 'p100002',
    title: 'Smart Thermostat Not Turning on AC',
    slug: 'smart-thermostat-not-turning-on-ac',
    shortDescription: 'The thermostat says "Cooling" but the AC unit outside doesn\'t start.',
    category: 'smart-home',
    subcategory: 'Hardware',
    symptoms: ['No cold air', 'AC unit silent', 'Thermostat error code'],
    causes: ['Blown C-wire fuse', 'Incompatible wiring', 'Relay failure'],
    steps: [
      { id: 's1', title: 'Check HVAC Fuse', description: 'Check the 3A or 5A fuse on the control board inside your furnace/air handler.' },
      { id: 's2', title: 'Verify Wiring', description: 'Ensure the Y (Cooling) and G (Fan) wires are securely connected.' },
      { id: 's3', title: 'Test with Old Thermostat', description: 'If the old one works, the smart thermostat is likely faulty or misconfigured.' }
    ],
    technicianAdvice: 'Smart thermostats require a "C" (Common) wire for consistent power.',
    relatedProblemIds: ['p100001', 'p100003'],
    createdAt: '2025-09-09T09:00:00Z'
  }
];
