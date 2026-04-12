import { Problem } from './types';

export const EXTRA_PROBLEMS_39: Problem[] = [
  // --- Wearables: Software & Sync ---
  {
    id: 'p1460001',
    title: 'Smartwatch "Notifications" Only Work Sometimes',
    slug: 'smartwatch-notifications-intermittent',
    shortDescription: 'You get some alerts on your watch, but others (like WhatsApp or Email) never show up.',
    category: 'wearable',
    subcategory: 'Software',
    symptoms: ['Missing alerts', 'Intermittent sync', 'Delayed notifications'],
    causes: ['Battery optimization on phone', 'Bluetooth range', 'App notification settings'],
    steps: [
      { id: 's1', title: 'Disable Battery Optimization', description: 'On Android, set the watch app to "Unrestricted" battery usage.' },
      { id: 's2', title: 'Check App-Specific Alerts', description: 'In the watch app, ensure each specific app is toggled "ON".' },
      { id: 's3', title: 'Keep App Open in Background', description: 'Don\'t "swipe away" the watch app from your recent apps list.' }
    ],
    technicianAdvice: 'If your phone "kills" the watch app to save battery, the connection will drop and notifications will stop.',
    relatedProblemIds: ['p1460002', 'p590001'],
    createdAt: '2026-01-24T08:00:00Z'
  },
  {
    id: 'p1460002',
    title: 'Smartwatch "Step Count" is Too High',
    slug: 'smartwatch-step-count-high',
    shortDescription: 'The watch says you walked 10,000 steps, but you\'ve been sitting at a desk all day.',
    category: 'wearable',
    subcategory: 'Sensors',
    symptoms: ['Inaccurate steps', 'Ghost walking', 'High calorie burn'],
    causes: ['Arm movement sensitivity', 'Driving/Vibration', 'Calibration error'],
    steps: [
      { id: 's1', title: 'Change "Wrist" Setting', description: 'Ensure the app knows if you wear it on your dominant or non-dominant hand.' },
      { id: 's2', title: 'Calibrate with GPS', description: 'Go for a 15-minute walk with GPS enabled to help the watch learn your stride.' },
      { id: 's3', title: 'Restart the Watch', description: 'Clears any temporary sensor glitches.' }
    ],
    technicianAdvice: 'Watches use an accelerometer to guess steps; if you move your arms a lot while talking or typing, it will count them as steps.',
    relatedProblemIds: ['p1460001', 'p620001'],
    createdAt: '2026-01-24T09:00:00Z'
  },
  // --- Audio: Quality & Connectivity ---
  {
    id: 'p1470001',
    title: 'Bluetooth Headphones "Volume" is Too Low',
    slug: 'bluetooth-headphones-volume-low',
    shortDescription: 'Even at 100% volume on your phone, the headphones sound very quiet.',
    category: 'audio',
    subcategory: 'Connectivity',
    symptoms: ['Quiet audio', 'Max volume not enough', 'Muffled sound'],
    causes: ['Absolute Volume mismatch', 'Earwax buildup', 'Low power mode'],
    steps: [
      { id: 's1', title: 'Disable "Absolute Volume"', description: 'Android: Developer Options > Disable Absolute Volume. This separates phone and headphone volume.' },
      { id: 's2', title: 'Clean the Speaker Mesh', description: 'Use a soft brush to remove any earwax blocking the sound.' },
      { id: 's3', title: 'Check "Volume Limit"', description: 'Settings > Sounds > Headphone Safety > Ensure "Reduce Loud Sounds" is OFF.' }
    ],
    technicianAdvice: 'Sometimes the phone and headphones have separate volume controls that aren\'t synced.',
    relatedProblemIds: ['p1470002', 'p240001'],
    createdAt: '2026-01-25T08:00:00Z'
  },
  {
    id: 'p1470002',
    title: 'Headphones "Mic" Not Working on PC',
    slug: 'headphones-mic-not-working-pc',
    shortDescription: 'You can hear audio fine, but your computer doesn\'t detect the microphone on your headset.',
    category: 'audio',
    subcategory: 'Connectivity',
    symptoms: ['No mic input', 'Internal mic used instead', 'Error message'],
    causes: ['Privacy settings', 'Wrong input device selected', 'Splitter cable needed'],
    steps: [
      { id: 's1', title: 'Check Privacy Settings', description: 'Settings > Privacy > Microphone > Allow apps to access your microphone.' },
      { id: 's2', title: 'Set as Default Device', description: 'Sound Control Panel > Recording > Right-click Headset > Set as Default.' },
      { id: 's3', title: 'Use a Y-Splitter', description: 'If your PC has separate green/pink jacks, you need an adapter for a single-plug headset.' }
    ],
    technicianAdvice: 'Windows often defaults to the laptop\'s built-in mic even when a headset is plugged in.',
    relatedProblemIds: ['p1470001', 'p200001'],
    createdAt: '2026-01-25T09:00:00Z'
  },
  // --- Printers: Maintenance & Quality ---
  {
    id: 'p1480001',
    title: 'Printer "Lines" on Scanned Images',
    slug: 'printer-lines-on-scanned-images',
    shortDescription: 'When you scan or copy a document, there is a permanent vertical line on the page.',
    category: 'printer',
    subcategory: 'Hardware',
    symptoms: ['Vertical lines', 'Streaks', 'Dirty scans'],
    causes: ['Dirty scanner glass', 'Scratched ADF glass'],
    steps: [
      { id: 's1', title: 'Clean the Large Glass', description: 'Wipe the main scanner bed with glass cleaner and a microfiber cloth.' },
      { id: 's2', title: 'Clean the Small ADF Glass', description: 'Look for the tiny strip of glass next to the main bed. A tiny speck of dust here causes a line across the whole page.' },
      { id: 's3', title: 'Check for Scratches', description: 'If the glass is physically scratched, the line will be permanent.' }
    ],
    technicianAdvice: 'A single speck of white-out or dust on the tiny ADF glass strip is the most common cause of vertical lines.',
    relatedProblemIds: ['p1480002', 'p210001'],
    createdAt: '2026-01-26T08:00:00Z'
  },
  {
    id: 'p1480002',
    title: 'Printer "Faded" Text (Laser Printer)',
    slug: 'printer-faded-text-laser',
    shortDescription: 'The middle of the page is faded or light, while the edges are dark.',
    category: 'printer',
    subcategory: 'Hardware',
    symptoms: ['Faded print', 'Uneven darkness', 'Low toner warning'],
    causes: ['Low toner', 'Toner settled on one side', 'Dirty corona wire'],
    steps: [
      { id: 's1', title: 'Shake the Toner Cartridge', description: 'Remove the cartridge and gently rock it side-to-side to redistribute the powder.' },
      { id: 's2', title: 'Clean the Corona Wire', description: 'Slide the green tab on the drum unit back and forth several times.' },
      { id: 's3', title: 'Disable "Toner Save" Mode', description: 'Check your print settings for "Draft" or "Eco" mode.' }
    ],
    technicianAdvice: 'Shaking the toner can often give you another 50-100 pages when it starts to fade.',
    relatedProblemIds: ['p1480001', 'p210001'],
    createdAt: '2026-01-26T09:00:00Z'
  },
  // --- Smart Home: Connectivity & Security ---
  {
    id: 'p1490001',
    title: 'Smart Camera "Night Vision" is Blurry',
    slug: 'smart-camera-night-vision-blurry',
    shortDescription: 'The daytime image is clear, but at night the image is foggy or has a white glare.',
    category: 'smart-home',
    subcategory: 'Hardware',
    symptoms: ['Foggy image', 'White glare', 'No detail at night'],
    causes: ['IR reflection from glass', 'Spider webs', 'Dirty lens'],
    steps: [
      { id: 's1', title: 'Clean the Lens', description: 'Wipe away any dust or fingerprints from the camera face.' },
      { id: 's2', title: 'Check for Reflections', description: 'If the camera is behind a window, the IR lights will reflect off the glass. Move it outside.' },
      { id: 's3', title: 'Remove Spider Webs', description: 'Spiders love the warmth of IR lights; a single web will cause a massive glare.' }
    ],
    technicianAdvice: 'If your camera is behind glass, you MUST turn off the internal IR lights and use an external IR illuminator.',
    relatedProblemIds: ['p1490002', 'p740001'],
    createdAt: '2026-01-27T08:00:00Z'
  },
  {
    id: 'p1490002',
    title: 'Smart Home "Hub" is Offline',
    slug: 'smart-home-hub-offline',
    shortDescription: 'Your SmartThings, HomePod, or Hue Bridge says "Offline" and no devices work.',
    category: 'smart-home',
    subcategory: 'Connectivity',
    symptoms: ['All devices offline', 'Hub unresponsive', 'Red light on hub'],
    causes: ['Ethernet cable loose', 'Power failure', 'Firmware update hang'],
    steps: [
      { id: 's1', title: 'Check Ethernet Connection', description: 'Ensure the cable is clicked firmly into both the hub and the router.' },
      { id: 's2', title: 'Power Cycle the Hub', description: 'Unplug for 30 seconds and plug back in.' },
      { id: 's3', title: 'Check Router Settings', description: 'Ensure the hub hasn\'t been blocked by a firewall or parental control.' }
    ],
    technicianAdvice: 'If the hub is offline, the "brain" of your smart home is gone; nothing will work until it\'s back.',
    relatedProblemIds: ['p1490001', 'p890001'],
    createdAt: '2026-01-27T09:00:00Z'
  },
  // --- Laptop: Hardware & Maintenance ---
  {
    id: 'p1500001',
    title: 'Laptop "Screen" Has a Single Bright Pixel',
    slug: 'laptop-screen-stuck-pixel',
    shortDescription: 'There is a tiny dot on your screen that is always red, green, or blue.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Bright dot', 'Stuck pixel', 'Permanent mark'],
    causes: ['Manufacturing defect', 'Transistor failure'],
    steps: [
      { id: 's1', title: 'Use a "Pixel Fixer" Website', description: 'Websites like JScreenFix flash colors rapidly to try and "wake up" the pixel.' },
      { id: 's2', title: 'Gently Massage the Pixel', description: 'Advanced: Use a soft cloth to very lightly press on the stuck pixel (use with caution).' },
      { id: 's3', title: 'Check Dead Pixel Policy', description: 'Most manufacturers only replace screens if there are 3-5+ dead pixels.' }
    ],
    technicianAdvice: 'A "stuck" pixel (colored) can often be fixed; a "dead" pixel (black) is usually permanent.',
    relatedProblemIds: ['p1500002', 'p670001'],
    createdAt: '2026-01-28T08:00:00Z'
  },
  {
    id: 'p1500002',
    title: 'Laptop "Battery" Drains While Off',
    slug: 'laptop-battery-drains-while-off',
    shortDescription: 'You shut down your laptop at 100%, but when you open it two days later, it\'s at 80%.',
    category: 'laptop',
    subcategory: 'Battery',
    symptoms: ['Drain during shutdown', 'Dead battery after storage', 'Slow drain'],
    causes: ['"Fast Startup" enabled', 'USB Power Share', 'Connected Standby'],
    steps: [
      { id: 's1', title: 'Disable "Fast Startup"', description: 'Control Panel > Power Options > Choose what the power buttons do > Uncheck "Turn on fast startup".' },
      { id: 's2', title: 'Disable "USB Power Share"', description: 'In BIOS, turn off the setting that keeps USB ports powered while the laptop is off.' },
      { id: 's3', title: 'Perform a Full Shutdown', description: 'Hold "Shift" while clicking "Shut Down" to ensure it doesn\'t go into a deep sleep.' }
    ],
    technicianAdvice: 'Modern laptops never truly turn "off"; they stay in a low-power state to boot up faster.',
    relatedProblemIds: ['p1500001', 'p230002'],
    createdAt: '2026-01-28T09:00:00Z'
  }
];
