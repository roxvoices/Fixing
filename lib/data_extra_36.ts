import { Problem } from './types';

export const EXTRA_PROBLEMS_36: Problem[] = [
  // --- Phone: Software & System ---
  {
    id: 'p1310001',
    title: 'Phone "Boot Loop" (Stuck on Logo)',
    slug: 'phone-boot-loop-stuck-logo',
    shortDescription: 'The phone restarts repeatedly and never gets past the manufacturer logo.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Constant restarting', 'Stuck on logo', 'Heat'],
    causes: ['Corrupt system update', 'Failing battery', 'Motherboard short'],
    steps: [
      { id: 's1', title: 'Force Restart', description: 'Hold Power + Volume Down for 15 seconds.' },
      { id: 's2', title: 'Boot into Recovery Mode', description: 'Try to "Wipe Cache Partition" (Android) or "Update" via iTunes (iOS).' },
      { id: 's3', title: 'Factory Reset', description: 'The last resort; will wipe all data but may fix the software loop.' }
    ],
    technicianAdvice: 'If a factory reset doesn\'t fix it, the issue is likely a hardware failure on the motherboard.',
    relatedProblemIds: ['p1310002', 'p410001'],
    createdAt: '2026-01-09T08:00:00Z'
  },
  {
    id: 'p1310002',
    title: 'Phone "Touch ID / Face ID" Not Working',
    slug: 'phone-biometrics-not-working',
    shortDescription: 'The phone won\'t recognize your fingerprint or face, forcing you to use your passcode.',
    category: 'phone',
    subcategory: 'Hardware',
    symptoms: ['Biometrics failed', 'Error message', 'Cannot set up'],
    causes: ['Dirty sensor', 'Screen replacement (non-genuine)', 'Hardware failure'],
    steps: [
      { id: 's1', title: 'Clean the Sensor/Camera', description: 'Wipe the fingerprint scanner or the front camera notch.' },
      { id: 's2', title: 'Re-register Biometrics', description: 'Delete your old face/fingerprint and set it up again.' },
      { id: 's3', title: 'Check for Software Updates', description: 'Ensure the OS has the latest security patches for biometrics.' }
    ],
    technicianAdvice: 'Biometric sensors are cryptographically paired to the motherboard; if they break, only an authorized repair center can fix them.',
    relatedProblemIds: ['p1310001', 'p460002'],
    createdAt: '2026-01-09T09:00:00Z'
  },
  // --- Laptop: Hardware & Input ---
  {
    id: 'p1320001',
    title: 'Laptop "Trackpad" Clicking on its Own',
    slug: 'laptop-trackpad-clicking-own',
    shortDescription: 'The cursor jumps around and "clicks" things without you touching the trackpad.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Ghost clicks', 'Jumping cursor', 'Erratic movement'],
    causes: ['Swollen battery', 'Dirty trackpad', 'Static electricity'],
    steps: [
      { id: 's1', title: 'Check for Battery Swelling', description: 'A swollen battery under the trackpad can press against it from the inside.' },
      { id: 's2', title: 'Clean the Edges', description: 'Dirt stuck in the gap around the trackpad can trigger false clicks.' },
      { id: 's3', title: 'Disable Touchpad While Typing', description: 'Ensure your palms aren\'t triggering the clicks.' }
    ],
    technicianAdvice: 'If the trackpad is physically bulging, stop using the laptop immediately; the battery is dangerous.',
    relatedProblemIds: ['p1320002', 'p420002'],
    createdAt: '2026-01-10T08:00:00Z'
  },
  {
    id: 'p1320002',
    title: 'Laptop "Keyboard" Keys are Sticky',
    slug: 'laptop-keyboard-keys-sticky',
    shortDescription: 'Some keys are hard to press or stay down after you click them.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Sticky keys', 'Slow return', 'Double typing'],
    causes: ['Liquid spill', 'Crumbs/Dust', 'Worn out membrane'],
    steps: [
      { id: 's1', title: 'Clean with Isopropyl Alcohol', description: 'Use a Q-tip with 90%+ alcohol to clean around the sticky key.' },
      { id: 's2', title: 'Use Compressed Air', description: 'Blow out any crumbs or dust from under the keycaps.' },
      { id: 's3', title: 'Replace Individual Keycaps', description: 'On some laptops, you can pop the key off and clean the mechanism underneath.' }
    ],
    technicianAdvice: 'If you spilled soda or juice, the sugar will act like glue; a professional cleaning or keyboard replacement is usually needed.',
    relatedProblemIds: ['p1320001', 'p420001'],
    createdAt: '2026-01-10T09:00:00Z'
  },
  // --- Internet: WiFi & Security ---
  {
    id: 'p1330001',
    title: 'WiFi "Network Name" (SSID) Not Showing Up',
    slug: 'wifi-ssid-not-showing',
    shortDescription: 'Your router is on, but you can\'t see your WiFi name in the list of available networks.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Network missing', 'Other networks visible', 'Cannot connect'],
    causes: ['SSID Broadcast disabled', 'Router frequency mismatch', 'Router hang'],
    steps: [
      { id: 's1', title: 'Restart the Router', description: 'The simplest fix for a "hidden" network.' },
      { id: 's2', title: 'Connect Manually', description: 'Select "Add Network" and type in the SSID and password exactly.' },
      { id: 's3', title: 'Check 2.4GHz vs 5GHz', description: 'If your device only supports 2.4GHz and the router is only broadcasting 5GHz, you won\'t see it.' }
    ],
    technicianAdvice: 'Some routers have a "Hide SSID" setting for security; this doesn\'t actually make you safer and causes connection issues.',
    relatedProblemIds: ['p1330002', 'p160002'],
    createdAt: '2026-01-11T08:00:00Z'
  },
  {
    id: 'p1330002',
    title: 'WiFi "Security Certificate" Error',
    slug: 'wifi-security-certificate-error',
    shortDescription: 'When you try to browse the web, you get a "Your connection is not private" error on every site.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['SSL errors', 'Websites blocked', 'Privacy warning'],
    causes: ['Incorrect date/time on device', 'Public WiFi login required', 'Malware'],
    steps: [
      { id: 's1', title: 'Check Date and Time', description: 'If your clock is wrong, security certificates will appear invalid.' },
      { id: 's2', title: 'Log into Captive Portal', description: 'If on public WiFi, open "neverssl.com" to trigger the login page.' },
      { id: 's3', title: 'Disable VPN/Proxy', description: 'Sometimes a VPN can interfere with certificate validation.' }
    ],
    technicianAdvice: '99% of "Certificate Errors" are caused by the device\'s clock being off by more than a few minutes.',
    relatedProblemIds: ['p1330001', 'p250002'],
    createdAt: '2026-01-11T09:00:00Z'
  },
  // --- App: Functionality & Storage ---
  {
    id: 'p1340001',
    title: 'App "Storage" Full (Even with space available)',
    slug: 'app-storage-full-error',
    shortDescription: 'The app says "Not enough storage" to download a file, even though your phone has 10GB free.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Storage error', 'Cannot download', 'App stuck'],
    causes: ['App-specific storage limit', 'Corrupt cache', 'SD card error'],
    steps: [
      { id: 's1', title: 'Clear App Cache', description: 'Settings > Apps > [App Name] > Storage > Clear Cache.' },
      { id: 's2', title: 'Check App Settings', description: 'Some apps (like Spotify or Netflix) have their own internal storage limits.' },
      { id: 's3', title: 'Change Download Location', description: 'If using an SD card, try switching back to internal storage.' }
    ],
    technicianAdvice: 'Some apps require a "buffer" of free space that is much larger than the file you are downloading.',
    relatedProblemIds: ['p1340002', 'p340002'],
    createdAt: '2026-01-12T08:00:00Z'
  },
  {
    id: 'p1340002',
    title: 'App "Permissions" Resetting Automatically',
    slug: 'app-permissions-resetting',
    shortDescription: 'You grant an app permission to use the mic or camera, but it asks again a few days later.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Repeated prompts', 'Permissions revoked', 'Annoyance'],
    causes: ['OS "Auto-reset" feature', 'App update', 'Security software'],
    steps: [
      { id: 's1', title: 'Disable "Remove permissions if app is unused"', description: 'In the app info settings, toggle this OFF for trusted apps.' },
      { id: 's2', title: 'Check for App Updates', description: 'Ensure the app is targeting the latest OS permission model.' },
      { id: 's3', title: 'Check Security Apps', description: 'Some "Cleaner" or "Antivirus" apps automatically revoke permissions.' }
    ],
    technicianAdvice: 'Android and iOS now automatically revoke permissions for apps you haven\'t opened in a while to protect your privacy.',
    relatedProblemIds: ['p1340001', 'p500001'],
    createdAt: '2026-01-12T09:00:00Z'
  },
  // --- Gaming: Performance & Graphics ---
  {
    id: 'p1350001',
    title: 'Game "Screen Flickering" (Black/White flashes)',
    slug: 'game-screen-flickering-flashes',
    shortDescription: 'The screen flashes black or white rapidly while playing a game.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Rapid flickering', 'Black flashes', 'Eye strain'],
    causes: ['Incompatible G-Sync/FreeSync', 'Bad HDMI cable', 'GPU driver bug'],
    steps: [
      { id: 's1', title: 'Disable G-Sync/FreeSync', description: 'Test if the flickering stops when variable refresh rate is off.' },
      { id: 's2', title: 'Try a Different Cable', description: 'Ensure you are using a high-speed HDMI 2.1 or DisplayPort 1.4 cable.' },
      { id: 's3', title: 'Roll Back GPU Drivers', description: 'If it started after an update, go back to the previous stable version.' }
    ],
    technicianAdvice: 'Flickering is often caused by the monitor and GPU "disagreeing" on the refresh rate.',
    relatedProblemIds: ['p1350002', 'p350001'],
    createdAt: '2026-01-13T08:00:00Z'
  },
  {
    id: 'p1350002',
    title: 'Game "Texture" Not Loading (Blurry graphics)',
    slug: 'game-texture-not-loading',
    shortDescription: 'The game world looks blurry or "melted" because high-quality textures aren\'t loading.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Blurry graphics', 'Missing details', 'Slow loading'],
    causes: ['Low VRAM', 'Slow HDD/SSD', 'Corrupt game files'],
    steps: [
      { id: 's1', title: 'Move Game to SSD', description: 'Modern games require the speed of an SSD to stream textures in real-time.' },
      { id: 's2', title: 'Lower Texture Quality', description: 'If you exceed your GPU\'s VRAM, textures will fail to load.' },
      { id: 's3', title: 'Verify Game Integrity', description: 'Ensure no texture files are missing or corrupt.' }
    ],
    technicianAdvice: 'If you are using an old mechanical hard drive, the game can\'t read the large texture files fast enough.',
    relatedProblemIds: ['p1350001', 'p180001'],
    createdAt: '2026-01-13T09:00:00Z'
  }
];
