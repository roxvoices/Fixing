import { Problem } from './types';

export const EXTRA_PROBLEMS_24: Problem[] = [
  // --- Wearables: Sensors & Health ---
  {
    id: 'p710001',
    title: 'Smartwatch "Heart Rate" Reading Inaccurate',
    slug: 'smartwatch-heart-rate-inaccurate',
    shortDescription: 'The watch shows 160bpm while you are sitting down, or 60bpm while you are running.',
    category: 'wearable',
    subcategory: 'Hardware',
    symptoms: ['Spiking readings', 'Missing data', 'Incorrect zones'],
    causes: ['Watch too loose', 'Tattoos blocking light', 'Cold skin (poor blood flow)'],
    steps: [
      { id: 's1', title: 'Tighten the Band', description: 'The watch should be snug and about two fingers above your wrist bone.' },
      { id: 's2', title: 'Clean the Sensor', description: 'Wipe the bottom glass to remove sweat and oils.' },
      { id: 's3', title: 'Warm Up First', description: 'In cold weather, your blood flow to the skin is reduced; warm up for 5 mins before trusting the reading.' }
    ],
    technicianAdvice: 'Optical sensors (PPG) struggle with dark tattoos because the ink absorbs the green light used for sensing.',
    relatedProblemIds: ['p710002', 'p710003'],
    createdAt: '2025-11-10T08:00:00Z'
  },
  {
    id: 'p710002',
    title: 'Smartwatch "Step Count" Too High (Ghost Steps)',
    slug: 'smartwatch-step-count-too-high',
    shortDescription: 'The watch says you walked 500 steps while you were just washing dishes or driving.',
    category: 'wearable',
    subcategory: 'Software',
    symptoms: ['Inflated step count', 'Steps while sitting', 'Inaccurate goals'],
    causes: ['Over-sensitive accelerometer', 'Arm-heavy tasks', 'Incorrect wrist setting'],
    steps: [
      { id: 's1', title: 'Check "Dominant Hand" Setting', description: 'Ensure the watch knows if it\'s on your dominant hand (which moves more).' },
      { id: 's2', title: 'Calibrate with GPS Walk', description: 'Go for a 15-minute outdoor walk with GPS to help the watch learn your stride.' },
      { id: 's3', title: 'Ignore Minor Movements', description: 'Most watches have a "threshold" (e.g., 10 steps) before they start counting to filter out arm movements.' }
    ],
    technicianAdvice: 'No wrist-based tracker is 100% accurate; they are best used for tracking trends, not exact numbers.',
    relatedProblemIds: ['p710001', 'p710004'],
    createdAt: '2025-11-10T09:00:00Z'
  },
  // --- Audio: Bluetooth & Sync ---
  {
    id: 'p720001',
    title: 'Bluetooth Headphones "Multipoint" Not Switching',
    slug: 'bluetooth-headphones-multipoint-not-switching',
    shortDescription: 'Your headphones are connected to your phone and laptop, but they won\'t switch audio automatically.',
    category: 'audio',
    subcategory: 'Connectivity',
    symptoms: ['No auto-switch', 'Stuck on one device', 'Connection drops'],
    causes: ['Notification sounds on 1st device', 'Incompatible Bluetooth versions', 'App conflict'],
    steps: [
      { id: 's1', title: 'Pause Audio on 1st Device', description: 'Most multipoint systems won\'t switch until the current audio stream is fully stopped.' },
      { id: 's2', title: 'Silence Notifications', description: 'A tiny "ding" from your phone can prevent the headphones from switching to your laptop.' },
      { id: 's3', title: 'Check App Settings', description: 'Ensure "Multipoint" or "Dual Connection" is enabled in the headphone\'s app.' }
    ],
    technicianAdvice: 'Multipoint is notoriously finicky; sometimes a manual disconnect/reconnect is the only way.',
    relatedProblemIds: ['p720002', 'p720003'],
    createdAt: '2025-11-11T08:00:00Z'
  },
  {
    id: 'p720002',
    title: 'Bluetooth Headphones "Find My" Not Working',
    slug: 'bluetooth-headphones-find-my-not-working',
    shortDescription: 'You lost your earbuds, but the app says they are "Offline" or shows an old location.',
    category: 'audio',
    subcategory: 'Software',
    symptoms: ['Missing location', 'Offline status', 'No sound alert'],
    causes: ['Earbuds in closed case', 'Battery dead', 'Location services disabled'],
    steps: [
      { id: 's1', title: 'Check "Last Seen" Location', description: 'The app usually only knows where they were when they were last connected to your phone.' },
      { id: 's2', title: 'Ensure Case is Open (if nearby)', description: 'Many buds can\'t communicate with the phone when the case is closed.' },
      { id: 's3', title: 'Enable "Find My Network"', description: 'Ensure you have the community-based tracking enabled in settings.' }
    ],
    technicianAdvice: 'If the battery is dead, the earbuds are essentially invisible to tracking apps.',
    relatedProblemIds: ['p720001', 'p720004'],
    createdAt: '2025-11-11T09:00:00Z'
  },
  // --- Printers: Connectivity & Network ---
  {
    id: 'p730001',
    title: 'Printer "Offline" on Mac (AirPrint)',
    slug: 'printer-offline-mac-airprint',
    shortDescription: 'Your Mac says the printer is offline, but your iPhone can print to it just fine.',
    category: 'printer',
    subcategory: 'Connectivity',
    symptoms: ['"Printer Offline"', 'Job stuck in queue', 'Cannot find printer'],
    causes: ['mDNS/Bonjour glitch', 'IP address change', 'Sleep mode issues'],
    steps: [
      { id: 's1', title: 'Reset Printing System', description: 'System Settings > Printers > Right-click list > Reset printing system (Warning: deletes all printers).' },
      { id: 's2', title: 'Assign Static IP', description: 'Go to the printer\'s web interface and give it a permanent IP address.' },
      { id: 's3', title: 'Restart mDNSResponder', description: 'Open Terminal and type "sudo killall -HUP mDNSResponder".' }
    ],
    technicianAdvice: 'AirPrint relies on "Bonjour" discovery; if your router blocks multicast traffic, it will fail.',
    relatedProblemIds: ['p730002', 'p730003'],
    createdAt: '2025-11-12T08:00:00Z'
  },
  {
    id: 'p730002',
    title: 'Printer "WPS" Button Not Connecting to Router',
    slug: 'printer-wps-not-connecting',
    shortDescription: 'You press the WPS button on the router and the printer, but they never pair.',
    category: 'printer',
    subcategory: 'Connectivity',
    symptoms: ['Pairing failed', 'Timeout', 'Blinking WiFi light'],
    causes: ['WPS disabled on router', 'Distance too far', 'Frequency mismatch'],
    steps: [
      { id: 's1', title: 'Check Router Settings', description: 'Ensure "WPS" is enabled in your router\'s security menu.' },
      { id: 's2', title: 'Move Printer Closer', description: 'Temporarily move the printer next to the router for the initial setup.' },
      { id: 's3', title: 'Use USB Setup', description: 'Plug the printer into a PC via USB and use the setup wizard to enter WiFi credentials manually.' }
    ],
    technicianAdvice: 'WPS is often disabled by default on modern routers for security reasons.',
    relatedProblemIds: ['p730001', 'p730004'],
    createdAt: '2025-11-12T09:00:00Z'
  },
  // --- Smart Home: Security & Cameras ---
  {
    id: 'p740001',
    title: 'Smart Camera "Night Vision" is Blurry or White',
    slug: 'smart-camera-night-vision-blurry',
    shortDescription: 'At night, the camera image is completely white or very foggy.',
    category: 'smart-home',
    subcategory: 'Hardware',
    symptoms: ['White screen at night', 'Foggy image', 'No detail'],
    causes: ['IR reflection from glass', 'Spider webs', 'Dirty lens'],
    steps: [
      { id: 's1', title: 'Check for Glass Reflections', description: 'If the camera is behind a window, the IR lights reflect off the glass. Move it outside.' },
      { id: 's2', title: 'Clean the Lens', description: 'Dust or fingerprints can scatter the IR light, causing a "foggy" look.' },
      { id: 's3', title: 'Disable IR Lights', description: 'If you have a porch light, you might get a better image with IR turned OFF.' }
    ],
    technicianAdvice: 'Never place an IR-based camera behind a window; it will only see its own reflection at night.',
    relatedProblemIds: ['p740002', 'p740003'],
    createdAt: '2025-11-13T08:00:00Z'
  },
  {
    id: 'p740002',
    title: 'Smart Camera "Two-Way Audio" Echo',
    slug: 'smart-camera-two-way-audio-echo',
    shortDescription: 'When you talk through the camera, you hear your own voice echoing back loudly.',
    category: 'smart-home',
    subcategory: 'Software',
    symptoms: ['Loud echo', 'Feedback loop', 'Cannot hear visitor'],
    causes: ['Phone volume too high', 'Slow internet latency', 'No echo cancellation'],
    steps: [
      { id: 's1', title: 'Lower Phone Volume', description: 'Prevents the phone mic from picking up the sound from its own speaker.' },
      { id: 's2', title: 'Use Headphones', description: 'The best way to eliminate echo during two-way talk.' },
      { id: 's3', title: 'Check WiFi Signal', description: 'High latency (lag) makes it harder for the software to cancel out the echo.' }
    ],
    technicianAdvice: 'Echo is caused by the sound from the camera speaker being picked up by the camera mic and sent back to you.',
    relatedProblemIds: ['p740001', 'p740004'],
    createdAt: '2025-11-13T09:00:00Z'
  },
  // --- Laptop: Performance & Heat ---
  {
    id: 'p750001',
    title: 'Laptop "Thermal Throttling" (Slows down when hot)',
    slug: 'laptop-thermal-throttling-slowdown',
    shortDescription: 'The laptop starts fast but becomes very slow after 10-15 minutes of use.',
    category: 'laptop',
    subcategory: 'Performance',
    symptoms: ['Performance drop', 'Hot chassis', 'Loud fans'],
    causes: ['Clogged heatsink', 'Dried thermal paste', 'Blocked air intake'],
    steps: [
      { id: 's1', title: 'Use a Laptop Stand', description: 'Lifting the back of the laptop improves airflow significantly.' },
      { id: 's2', title: 'Clean with Compressed Air', description: 'Blow air into the exhaust vents to clear out dust bunnies.' },
      { id: 's3', title: 'Undervolt CPU', description: 'Advanced: Use tools like Throttlestop to reduce voltage and heat (use with caution).' }
    ],
    technicianAdvice: 'Throttling is the CPU slowing itself down to prevent permanent heat damage.',
    relatedProblemIds: ['p750002', 'p750003'],
    createdAt: '2025-11-14T08:00:00Z'
  },
  {
    id: 'p750002',
    title: 'Laptop Fan "Grinding" or Rattle Noise',
    slug: 'laptop-fan-grinding-rattle',
    shortDescription: 'The fan makes a loud, unpleasant mechanical noise like something is hitting the blades.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Grinding noise', 'Vibration', 'Fan stops spinning'],
    causes: ['Worn bearing', 'Object in fan', 'Bent fan blade'],
    steps: [
      { id: 's1', title: 'Inspect for Debris', description: 'Open the back and ensure no wires or stickers are touching the fan blades.' },
      { id: 's2', title: 'Lubricate Bearing (Temporary)', description: 'A tiny drop of sewing machine oil can quiet a noisy bearing for a while.' },
      { id: 's3', title: 'Replace the Fan', description: 'Laptop fans are cheap and usually easy to replace; don\'t wait for it to fail completely.' }
    ],
    technicianAdvice: 'A grinding fan will eventually stop, leading to an immediate overheating shutdown.',
    relatedProblemIds: ['p750001', 'p750004'],
    createdAt: '2025-11-14T09:00:00Z'
  }
];
