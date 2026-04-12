import { Problem } from './types';

export const EXTRA_PROBLEMS_44: Problem[] = [
  // --- Phone: Software & Privacy ---
  {
    id: 'p1710001',
    title: 'Phone "Emergency SOS" Calling Randomly',
    slug: 'phone-emergency-sos-calling-randomly',
    shortDescription: 'Your phone starts a countdown to call emergency services while it is in your pocket or bag.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Siren sound', 'Emergency call started', 'Accidental trigger'],
    causes: ['Rapid power button presses', 'Case pressing buttons', 'Software bug'],
    steps: [
      { id: 's1', title: 'Disable "Call with 5 Presses"', description: 'Settings > Emergency SOS > Toggle "Call with 5 Presses" OFF.' },
      { id: 's2', title: 'Check Button Clearance', description: 'Ensure your phone case isn\'t holding down the power or volume buttons.' },
      { id: 's3', title: 'Update OS', description: 'Manufacturers often tweak the sensitivity of emergency triggers in updates.' }
    ],
    technicianAdvice: 'This often happens when the phone is squeezed in a tight pocket, triggering the "5-press" shortcut.',
    relatedProblemIds: ['p1710002', 'p1590001'],
    createdAt: '2026-02-18T08:00:00Z'
  },
  {
    id: 'p1710002',
    title: 'Phone "Microphone" Icon Always On',
    slug: 'phone-microphone-icon-always-on',
    shortDescription: 'A green or orange dot stays at the top of your screen, indicating an app is listening.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Privacy dot visible', 'Battery drain', 'Paranoia'],
    causes: ['Background app using mic', 'Voice assistant "Always Listening"', 'Malware'],
    steps: [
      { id: 's1', title: 'Check Privacy Dashboard', description: 'Settings > Privacy > See which app is currently using the microphone.' },
      { id: 's2', title: 'Disable "Hey Siri" or "OK Google"', description: 'If you don\'t use voice assistants, turn off the "Always Listening" feature.' },
      { id: 's3', title: 'Force Close Background Apps', description: 'Identify the culprit and kill the process.' }
    ],
    technicianAdvice: 'The privacy dot is a hardware-level indicator; if it\'s on, something is definitely receiving audio.',
    relatedProblemIds: ['p1710001', 'p500001'],
    createdAt: '2026-02-18T09:00:00Z'
  },
  // --- Laptop: Hardware & Ports ---
  {
    id: 'p1720001',
    title: 'Laptop "USB-C" Port Loose',
    slug: 'laptop-usb-c-port-loose',
    shortDescription: 'The charging cable wiggles or falls out easily, and you have to hold it at an angle to charge.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Loose connection', 'Intermittent charging', 'Cable falls out'],
    causes: ['Physical wear', 'Lint buildup', 'Damaged internal pins'],
    steps: [
      { id: 's1', title: 'Clean the Port', description: 'Use a toothpick to gently scrape out any compressed lint from the bottom of the port.' },
      { id: 's2', title: 'Try a New Cable', description: 'Sometimes the "teeth" on the cable wear out, not the port itself.' },
      { id: 's3', title: 'Replace the Daughterboard', description: 'If the port is physically broken, the USB-C board must be replaced.' }
    ],
    technicianAdvice: 'USB-C ports are rated for 10,000 cycles, but side-to-side strain can break the solder joints much sooner.',
    relatedProblemIds: ['p1720002', 'p320001'],
    createdAt: '2026-02-19T08:00:00Z'
  },
  {
    id: 'p1720002',
    title: 'Laptop "SD Card Reader" Not Working',
    slug: 'laptop-sd-card-reader-not-working',
    shortDescription: 'You insert a memory card, but the computer doesn\'t show a new drive.',
    category: 'laptop',
    subcategory: 'Connectivity',
    symptoms: ['Card not detected', 'No drive letter', 'Error message'],
    causes: ['Driver missing', 'Dirty contacts', 'Locked SD card'],
    steps: [
      { id: 's1', title: 'Check the Lock Switch', description: 'Ensure the tiny slider on the side of the SD card is in the "Unlock" position.' },
      { id: 's2', title: 'Update Card Reader Driver', description: 'Check Device Manager for "Memory technology devices" and update the driver.' },
      { id: 's3', title: 'Clean the Card Contacts', description: 'Wipe the gold pins on the SD card with a dry cloth.' }
    ],
    technicianAdvice: 'If the card works in a camera but not the laptop, the laptop\'s internal reader pins might be bent.',
    relatedProblemIds: ['p1720001', 'p320001'],
    createdAt: '2026-02-19T09:00:00Z'
  },
  // --- Internet: WiFi & Security ---
  {
    id: 'p1730001',
    title: 'WiFi "WPA3" Connection Issues',
    slug: 'wifi-wpa3-connection-issues',
    shortDescription: 'Your new router has WPA3 security, but your older devices cannot connect to it.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Cannot connect', 'Wrong password error', 'Network not found'],
    causes: ['Device doesn\'t support WPA3', 'Incompatible handshake'],
    steps: [
      { id: 's1', title: 'Enable "WPA2/WPA3 Mixed Mode"', description: 'In router settings, allow older devices to use WPA2 while newer ones use WPA3.' },
      { id: 's2', title: 'Update Device Firmware', description: 'Some older devices received WPA3 support via software updates.' },
      { id: 's3', title: 'Forget and Re-add Network', description: 'Forces the device to negotiate a new security handshake.' }
    ],
    technicianAdvice: 'WPA3 is much more secure, but many devices made before 2020 don\'t understand it.',
    relatedProblemIds: ['p1730002', 'p250001'],
    createdAt: '2026-02-20T08:00:00Z'
  },
  {
    id: 'p1730002',
    title: 'WiFi "MAC Filtering" Blocking New Device',
    slug: 'wifi-mac-filtering-blocking',
    shortDescription: 'You have the correct password, but the device says "Access Denied" or "Failed to Connect".',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Access denied', 'Correct password fails', 'Connection refused'],
    causes: ['MAC Filtering enabled on router', 'Private MAC address on phone'],
    steps: [
      { id: 's1', title: 'Disable "Private WiFi Address"', description: 'On iPhone/Android, turn off "Private MAC" for this specific network.' },
      { id: 's2', title: 'Add Device to Allowlist', description: 'Find the device\'s MAC address in settings and add it to the router\'s filter list.' },
      { id: 's3', title: 'Disable MAC Filtering', description: 'It provides very little security and causes many connection issues.' }
    ],
    technicianAdvice: 'Modern phones change their "ID" (MAC address) for privacy, which breaks old-school MAC filtering.',
    relatedProblemIds: ['p1730001', 'p580002'],
    createdAt: '2026-02-20T09:00:00Z'
  },
  // --- App: Functionality & Storage ---
  {
    id: 'p1740001',
    title: 'App "Camera" is Upside Down',
    slug: 'app-camera-upside-down',
    shortDescription: 'When you open the camera in a specific app (like Instagram), the image is flipped or rotated.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Inverted image', 'Wrong orientation', 'Mirroring issues'],
    causes: ['App orientation bug', 'Accelerometer glitch', 'System rotation lock'],
    steps: [
      { id: 's1', title: 'Toggle Rotation Lock', description: 'Turn it on and off to reset the system\'s orientation sensor.' },
      { id: 's2', title: 'Update the App', description: 'This is usually a bug in how the app handles the camera API.' },
      { id: 's3', title: 'Reinstall the App', description: 'Clears any corrupt configuration files.' }
    ],
    technicianAdvice: 'If the camera is upside down in ALL apps, the physical sensor might be mounted incorrectly (rare) or the driver is corrupt.',
    relatedProblemIds: ['p1740002', 'p1410002'],
    createdAt: '2026-02-21T08:00:00Z'
  },
  {
    id: 'p1740002',
    title: 'App "Downloads" Disappearing',
    slug: 'app-downloads-disappearing',
    shortDescription: 'You download a file in an app, but you can\'t find it in your phone\'s "Downloads" folder.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Missing files', 'Cannot find download', 'Storage used but no file'],
    causes: ['App-specific sandbox', 'Wrong download path', 'Auto-delete settings'],
    steps: [
      { id: 's1', title: 'Check "In-App" Storage', description: 'Many apps (like Netflix or Spotify) store downloads in a hidden, encrypted folder.' },
      { id: 's2', title: 'Use a File Manager App', description: 'Search for the file name across the entire internal storage.' },
      { id: 's3', title: 'Check App Permissions', description: 'Ensure the app has "Storage" or "Files" permission to save to the public folder.' }
    ],
    technicianAdvice: 'Modern Android and iOS "sandbox" apps, meaning they can\'t always save files where you expect them.',
    relatedProblemIds: ['p1740001', 'p340002'],
    createdAt: '2026-02-21T09:00:00Z'
  },
  // --- Gaming: Performance & Graphics ---
  {
    id: 'p1750001',
    title: 'Game "Stuttering" Every Few Seconds',
    slug: 'game-stuttering-intermittent',
    shortDescription: 'The game runs at 60 FPS but "hitches" or freezes for a split second every few seconds.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Micro-stutter', 'Hitching', 'Unstable frame time'],
    causes: ['Background wallpaper slideshow', 'Polling rate too high', 'Shader compilation'],
    steps: [
      { id: 's1', title: 'Lower Mouse Polling Rate', description: 'Set your mouse to 500Hz instead of 1000Hz or 4000Hz.' },
      { id: 's2', title: 'Disable Wallpaper Slideshow', description: 'Windows changing the wallpaper can cause a system-wide stutter.' },
      { id: 's3', title: 'Enable "Game Mode"', description: 'Tells Windows to prioritize the game process above all else.' }
    ],
    technicianAdvice: 'High-end mice with 8000Hz polling can actually overwhelm the CPU, causing stutters in games.',
    relatedProblemIds: ['p1750002', 'p1450001'],
    createdAt: '2026-02-22T08:00:00Z'
  },
  {
    id: 'p1750002',
    title: 'Game "Resolution" is Blurry (DLSS/FSR)',
    slug: 'game-resolution-blurry-upscaling',
    shortDescription: 'The game looks "soft" or blurry even though it\'s set to 4K.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Blurry image', 'Smearing', 'Low detail'],
    causes: ['Aggressive upscaling (DLSS Performance)', 'Motion Blur enabled', 'Dynamic Resolution'],
    steps: [
      { id: 's1', title: 'Change DLSS/FSR to "Quality"', description: 'Avoid "Performance" or "Ultra Performance" modes unless necessary.' },
      { id: 's2', title: 'Disable Motion Blur', description: 'Instantly makes the image look sharper during movement.' },
      { id: 's3', title: 'Increase "Sharpening" Slider', description: 'Most upscalers have a sharpening setting to counteract the blur.' }
    ],
    technicianAdvice: 'Upscaling is a trade-off; you get more FPS but lose some fine detail and clarity.',
    relatedProblemIds: ['p1750001', 'p1050001'],
    createdAt: '2026-02-22T09:00:00Z'
  }
];
