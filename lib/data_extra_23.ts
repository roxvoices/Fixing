import { Problem } from './types';

export const EXTRA_PROBLEMS_23: Problem[] = [
  // --- Phone: Battery & Power ---
  {
    id: 'p660001',
    title: 'Smartphone "Liquid Detected in Connector" Warning',
    slug: 'smartphone-liquid-detected-warning',
    shortDescription: 'The phone refuses to charge and shows a water drop icon, even if it hasn\'t been near water.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['Charging disabled', 'Warning popup', 'Beeping'],
    causes: ['Moisture in port', 'Pocket lint holding humidity', 'Corroded pins'],
    steps: [
      { id: 's1', title: 'Dry the Port', description: 'Tap the phone against your hand with the port facing down. Do NOT use a hair dryer.' },
      { id: 's2', title: 'Clean with Compressed Air', description: 'Blow out any lint that might be trapping moisture.' },
      { id: 's3', title: 'Use Wireless Charging', description: 'A safe way to charge while you wait for the port to dry completely.' }
    ],
    technicianAdvice: 'Never plug a charger into a wet port; it can cause a short circuit that permanently damages the motherboard.',
    relatedProblemIds: ['p660002', 'p660003'],
    createdAt: '2025-11-05T08:00:00Z'
  },
  {
    id: 'p660002',
    title: 'Smartphone "Fast Charging" Not Working',
    slug: 'smartphone-fast-charging-not-working',
    shortDescription: 'The phone charges very slowly, taking 4-5 hours for a full charge instead of 1 hour.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['Slow charging', '"Charging" instead of "Fast Charging"', 'Long ETA'],
    causes: ['Incompatible cable', 'Weak power brick', 'Software setting'],
    steps: [
      { id: 's1', title: 'Use Original Charger', description: 'Ensure both the brick and cable are rated for your phone\'s fast charging tech (e.g., PD, QC, VOOC).' },
      { id: 's2', title: 'Enable Fast Charging in Settings', description: 'Some phones (like Samsung) have a toggle under Battery > More Battery Settings.' },
      { id: 's3', title: 'Clean the Port', description: 'If the data pins aren\'t making a good connection, the phone will default to slow 5W charging.' }
    ],
    technicianAdvice: 'Cheap "gas station" cables often only have two wires (power) and lack the data wires needed to negotiate fast charging.',
    relatedProblemIds: ['p660001', 'p660004'],
    createdAt: '2025-11-05T09:00:00Z'
  },
  // --- Laptop: Display & Graphics ---
  {
    id: 'p670001',
    title: 'Laptop Screen "Flickering" When Moving Lid',
    slug: 'laptop-screen-flickering-lid-move',
    shortDescription: 'The screen flashes or changes colors when you adjust the angle of the laptop lid.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Flickering', 'Lines on screen', 'Blackout'],
    causes: ['Loose eDP cable', 'Frayed hinge cable', 'Damaged LCD connector'],
    steps: [
      { id: 's1', title: 'Test External Monitor', description: 'If the external screen is fine, the problem is definitely the internal cable or panel.' },
      { id: 's2', title: 'Update Graphics Drivers', description: 'Rule out software before assuming it\'s the cable.' },
      { id: 's3', title: 'Reseat the Display Cable', description: 'Requires opening the laptop to ensure the wide ribbon cable is firmly plugged into the motherboard.' }
    ],
    technicianAdvice: 'The cable that goes through the hinge is flexed every time you open the laptop; eventually, the tiny wires inside can break.',
    relatedProblemIds: ['p670002', 'p670003'],
    createdAt: '2025-11-06T08:00:00Z'
  },
  {
    id: 'p670002',
    title: 'Laptop "Dead Pixels" (Stuck Green/Red/Blue Dot)',
    slug: 'laptop-dead-pixels-stuck',
    shortDescription: 'A tiny dot on the screen stays one color no matter what is being displayed.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Bright dot', 'Black dot', 'Distracting mark'],
    causes: ['Manufacturing defect', 'Transistor failure'],
    steps: [
      { id: 's1', title: 'Run a Pixel Fixer App', description: 'Use a website that flashes colors rapidly to try and "unstick" the pixel.' },
      { id: 's2', title: 'Apply Gentle Pressure', description: 'Wrap a cloth around a pen and very gently press on the stuck pixel (use with caution).' },
      { id: 's3', title: 'Check Warranty', description: 'Most manufacturers have a "dead pixel policy" (e.g., 3+ dots required for replacement).' }
    ],
    technicianAdvice: 'A "stuck" pixel (colored) can often be fixed; a "dead" pixel (black) is usually permanent.',
    relatedProblemIds: ['p670001', 'p670004'],
    createdAt: '2025-11-06T09:00:00Z'
  },
  // --- Internet: Security & Privacy ---
  {
    id: 'p680001',
    title: 'Router "DNS Hijacking" (Redirected to fake sites)',
    slug: 'router-dns-hijacking-redirects',
    shortDescription: 'When you try to go to Google or Facebook, you are sent to a strange-looking site or an ad page.',
    category: 'internet',
    subcategory: 'Router',
    symptoms: ['Wrong websites loading', 'Certificate errors', 'Slow browsing'],
    causes: ['Malicious DNS settings in router', 'Compromised router firmware'],
    steps: [
      { id: 's1', title: 'Check Router DNS Settings', description: 'Ensure they are set to "Auto" or a reputable service like 8.8.8.8 (Google) or 1.1.1.1 (Cloudflare).' },
      { id: 's2', title: 'Change Router Admin Password', description: 'Hackers use default passwords to change your DNS settings.' },
      { id: 's3', title: 'Factory Reset Router', description: 'The only way to be sure all malicious settings are gone.' }
    ],
    technicianAdvice: 'DNS hijacking is a very dangerous form of phishing that is hard to detect.',
    relatedProblemIds: ['p680002', 'p680003'],
    createdAt: '2025-11-07T08:00:00Z'
  },
  {
    id: 'p680002',
    title: 'WiFi "Evil Twin" Attack (Fake Network)',
    slug: 'wifi-evil-twin-attack',
    shortDescription: 'You see two networks with the same name; one is yours, and the other is a fake one set up to steal passwords.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Duplicate SSIDs', 'Connection drops', 'Password prompts'],
    causes: ['Hacker nearby with a WiFi Pineapple or similar device'],
    steps: [
      { id: 's1', title: 'Don\'t Connect to the Open One', description: 'If one has a lock and the other doesn\'t, the open one is the fake.' },
      { id: 's2', title: 'Use a VPN', description: 'Protects your data even if you accidentally connect to a rogue hotspot.' },
      { id: 's3', title: 'Change Your SSID', description: 'Give your network a unique name that isn\'t "Linksys" or "Netgear".' }
    ],
    technicianAdvice: 'Your phone will often auto-connect to the strongest signal, which might be the hacker\'s device.',
    relatedProblemIds: ['p680001', 'p680004'],
    createdAt: '2025-11-07T09:00:00Z'
  },
  // --- App: Performance & Crashes ---
  {
    id: 'p690001',
    title: 'App "Out of Memory" Error',
    slug: 'app-out-of-memory-error',
    shortDescription: 'The app closes suddenly and a message says it ran out of memory.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Sudden crash', 'Slow performance', 'Error popup'],
    causes: ['Memory leak in app', 'Too many background apps', 'Old device with low RAM'],
    steps: [
      { id: 's1', title: 'Close All Other Apps', description: 'Free up system RAM for the app you are trying to use.' },
      { id: 's2', title: 'Restart Device', description: 'Clears the RAM completely and stops any leaking processes.' },
      { id: 's3', title: 'Lower App Settings', description: 'If it\'s a game or photo editor, reduce the quality or resolution.' }
    ],
    technicianAdvice: 'Memory leaks happen when an app "forgets" to release RAM it no longer needs.',
    relatedProblemIds: ['p690002', 'p690003'],
    createdAt: '2025-11-08T08:00:00Z'
  },
  {
    id: 'p690002',
    title: 'App "Waiting for Network" Forever',
    slug: 'app-waiting-for-network-forever',
    shortDescription: 'The app shows a loading spinner and never loads content, even if your internet is fine.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Infinite spinner', 'Blank screen', 'No data loading'],
    causes: ['App server outage', 'Blocked by VPN/Adblock', 'Corrupt app cache'],
    steps: [
      { id: 's1', title: 'Disable Adblock/VPN', description: 'Some apps fail to load if they can\'t reach their tracking or ad servers.' },
      { id: 's2', title: 'Clear App Cache', description: 'Settings > Apps > [App Name] > Storage > Clear Cache.' },
      { id: 's3', title: 'Check Downdetector', description: 'See if others are reporting issues with the app\'s servers.' }
    ],
    technicianAdvice: 'If the app works on mobile data but not WiFi, your router\'s firewall might be blocking it.',
    relatedProblemIds: ['p690001', 'p690004'],
    createdAt: '2025-11-08T09:00:00Z'
  },
  // --- Gaming: Performance & Heat ---
  {
    id: 'p700001',
    title: 'Gaming Console "Loud Fan" (Jet Engine Noise)',
    slug: 'gaming-console-loud-fan',
    shortDescription: 'The console fan spins at maximum speed and is very loud, even during simple games.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['Loud whirring', 'Hot air', 'Performance drops'],
    causes: ['Dust buildup', 'Dried thermal paste', 'Poor ventilation'],
    steps: [
      { id: 's1', title: 'Clean the Vents', description: 'Use a vacuum or compressed air to remove dust from the intake and exhaust.' },
      { id: 's2', title: 'Move to Open Space', description: 'Don\'t keep the console in a closed cabinet; it needs 6+ inches of clearance.' },
      { id: 's3', title: 'Replace Thermal Paste', description: 'For older consoles (PS4/Xbox One), the paste between the chip and heatsink may have dried out.' }
    ],
    technicianAdvice: 'A loud fan means the console is struggling to stay cool; ignore it and it might eventually die from heat.',
    relatedProblemIds: ['p700002', 'p700003'],
    createdAt: '2025-11-09T08:00:00Z'
  },
  {
    id: 'p700002',
    title: 'Gaming Console "Overheating" Shutdown',
    slug: 'gaming-console-overheating-shutdown',
    shortDescription: 'The console suddenly turns off and shows a warning message about temperature.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['Sudden power off', 'Warning message', 'Red light'],
    causes: ['Total fan failure', 'Blocked airflow', 'Extreme ambient heat'],
    steps: [
      { id: 's1', title: 'Let it Cool Down', description: 'Wait at least 30 minutes before turning it back on.' },
      { id: 's2', title: 'Check if Fan is Spinning', description: 'Listen closely or look through the vents to see if the fan moves at all.' },
      { id: 's3', title: 'Avoid Direct Sunlight', description: 'Ensure the console isn\'t sitting in a sunbeam or near a heater.' }
    ],
    technicianAdvice: 'Modern consoles will shut down to prevent the CPU from literally melting itself.',
    relatedProblemIds: ['p700001', 'p700004'],
    createdAt: '2025-11-09T09:00:00Z'
  }
];
