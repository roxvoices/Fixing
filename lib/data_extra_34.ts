import { Problem } from './types';

export const EXTRA_PROBLEMS_34: Problem[] = [
  // --- Phone: Software & System ---
  {
    id: 'p1210001',
    title: 'Phone "System Update" Failed (Error Code)',
    slug: 'phone-system-update-failed-error',
    shortDescription: 'The update starts, but then shows an error message and rolls back.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Update failed', 'Error code', 'System rollback'],
    causes: ['Insufficient storage', 'Corrupt download', 'Rooted/Modified system'],
    steps: [
      { id: 's1', title: 'Free Up Space', description: 'Ensure you have at least 5-10GB of free space for the update to unpack.' },
      { id: 's2', title: 'Clear Update Cache', description: 'On Android, clear cache for "Google Play Services" and "System Update".' },
      { id: 's3', title: 'Update via Computer', description: 'Use iTunes/Finder (iOS) or Smart Switch (Samsung) to update via cable.' }
    ],
    technicianAdvice: 'If your phone is "Rooted" or has a custom recovery, official OTA updates will always fail.',
    relatedProblemIds: ['p1210002', 'p410001'],
    createdAt: '2025-12-30T08:00:00Z'
  },
  {
    id: 'p1210002',
    title: 'Phone "Safe Mode" Stuck',
    slug: 'phone-safe-mode-stuck',
    shortDescription: 'The phone is stuck in Safe Mode and you cannot access your downloaded apps.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['"Safe Mode" on screen', 'Apps missing', 'Cannot exit'],
    causes: ['Stuck volume button', 'Software glitch', 'Corrupt system file'],
    steps: [
      { id: 's1', title: 'Check Volume Buttons', description: 'Safe Mode is triggered by holding Volume Down during boot. Ensure the button isn\'t physically stuck.' },
      { id: 's2', title: 'Restart from Notification', description: 'Some phones have a "Safe Mode is on" notification you can tap to restart.' },
      { id: 's3', title: 'Remove Case', description: 'A tight case might be pressing the volume button during startup.' }
    ],
    technicianAdvice: 'If the volume button is broken and "stuck" down, the phone will boot into Safe Mode every single time.',
    relatedProblemIds: ['p1210001', 'p410002'],
    createdAt: '2025-12-30T09:00:00Z'
  },
  // --- Laptop: Connectivity & Bluetooth ---
  {
    id: 'p1220001',
    title: 'Laptop "Bluetooth" Icon Missing',
    slug: 'laptop-bluetooth-icon-missing',
    shortDescription: 'The Bluetooth toggle has disappeared from the settings and action center.',
    category: 'laptop',
    subcategory: 'Connectivity',
    symptoms: ['No Bluetooth toggle', 'Cannot connect devices', 'Missing in Device Manager'],
    causes: ['Driver crash', 'BIOS disabled', 'Hardware failure'],
    steps: [
      { id: 's1', title: 'Run Bluetooth Troubleshooter', description: 'Settings > Troubleshoot > Other troubleshooters > Bluetooth.' },
      { id: 's2', title: 'Check Device Manager', description: 'Look for "Unknown Device" or a yellow triangle under Bluetooth. Right-click > Enable.' },
      { id: 's3', title: 'Perform a Cold Boot', description: 'Shut down, unplug power, and hold the power button for 30s to reset the wireless chip.' }
    ],
    technicianAdvice: 'Sometimes the Bluetooth/WiFi card gets into a "bad state" that only a total power drain can fix.',
    relatedProblemIds: ['p1220002', 'p320001'],
    createdAt: '2025-12-31T08:00:00Z'
  },
  {
    id: 'p1220002',
    title: 'Laptop "Airplane Mode" Stuck ON',
    slug: 'laptop-airplane-mode-stuck-on',
    shortDescription: 'The Airplane Mode toggle is grayed out or won\'t turn off, so you have no WiFi or Bluetooth.',
    category: 'laptop',
    subcategory: 'Connectivity',
    symptoms: ['No wireless', 'Toggle grayed out', 'Airplane icon'],
    causes: ['Physical switch active', 'Driver conflict', 'Radio Management service hang'],
    steps: [
      { id: 's1', title: 'Check Physical Switch', description: 'Some laptops have a physical switch or an Fn key (like Fn+F12) to toggle wireless.' },
      { id: 's2', title: 'Restart Radio Management Service', description: 'Services.msc > Radio Management Service > Restart.' },
      { id: 's3', title: 'Update BIOS', description: 'A known fix for many laptops where the wireless state gets stuck in the firmware.' }
    ],
    technicianAdvice: 'If the physical wireless switch is broken, the laptop will stay in Airplane Mode permanently.',
    relatedProblemIds: ['p1220001', 'p770001'],
    createdAt: '2025-12-31T09:00:00Z'
  },
  // --- Internet: Security & Router ---
  {
    id: 'p1230001',
    title: 'Router "Admin Password" Forgotten',
    slug: 'router-admin-password-forgotten',
    shortDescription: 'You need to change your WiFi settings but you can\'t log into the router\'s admin page.',
    category: 'internet',
    subcategory: 'Router',
    symptoms: ['Login failed', 'Locked out', 'Cannot change settings'],
    causes: ['Forgotten credentials', 'Default password changed'],
    steps: [
      { id: 's1', title: 'Check the Sticker', description: 'Look for the default "Admin Password" on the bottom of the router.' },
      { id: 's2', title: 'Try Common Defaults', description: 'Try "admin/admin", "admin/password", or leaving the password blank.' },
      { id: 's3', title: 'Factory Reset', description: 'Hold the "Reset" pinhole for 15 seconds. This resets the password to the default on the sticker.' }
    ],
    technicianAdvice: 'Factory resetting will also delete your WiFi name and password, so you\'ll need to set those up again.',
    relatedProblemIds: ['p1230002', 'p250001'],
    createdAt: '2026-01-01T08:00:00Z'
  },
  {
    id: 'p1230002',
    title: 'WiFi "UPnP" Security Warning',
    slug: 'wifi-upnp-security-warning',
    shortDescription: 'Your security software warns you that UPnP is enabled on your router, which is a risk.',
    category: 'internet',
    subcategory: 'Router',
    symptoms: ['Security alert', 'Vulnerability found', 'Unauthorized port openings'],
    causes: ['UPnP enabled by default'],
    steps: [
      { id: 's1', title: 'Disable UPnP', description: 'Log into your router and turn off "Universal Plug and Play".' },
      { id: 's2', title: 'Use Manual Port Forwarding', description: 'If a game needs a port open, do it manually instead of letting UPnP do it automatically.' },
      { id: 's3', title: 'Update Router Firmware', description: 'Ensure your router has the latest security patches.' }
    ],
    technicianAdvice: 'UPnP allows any device on your network to open a hole in your firewall without a password.',
    relatedProblemIds: ['p1230001', 'p270001'],
    createdAt: '2026-01-01T09:00:00Z'
  },
  // --- App: Functionality & Sync ---
  {
    id: 'p1240001',
    title: 'App "Syncing" Forever (Stuck)',
    slug: 'app-syncing-forever-stuck',
    shortDescription: 'The app says "Syncing..." or "Updating..." but never finishes, even after hours.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Infinite sync', 'Data not updating', 'High battery usage'],
    causes: ['Corrupt local database', 'Large file stuck in queue', 'Server mismatch'],
    steps: [
      { id: 's1', title: 'Force Stop and Restart', description: 'Clears the current sync process.' },
      { id: 's2', title: 'Log Out and Back In', description: 'Forces the app to re-download the sync index from the server.' },
      { id: 's3', title: 'Check for Large Attachments', description: 'If it\'s an email or note app, check if a massive file is blocking the queue.' }
    ],
    technicianAdvice: 'A single "bad" file can often block the entire sync pipeline for an app.',
    relatedProblemIds: ['p1240002', 'p170002'],
    createdAt: '2026-01-02T08:00:00Z'
  },
  {
    id: 'p1240002',
    title: 'App "In-App Purchases" Not Restoring',
    slug: 'app-in-app-purchases-not-restoring',
    shortDescription: 'You bought a premium feature or subscription, but the app still shows the "Buy" button.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Missing features', 'Purchase not found', 'Error message'],
    causes: ['Different Store ID logged in', 'Receipt validation failure', 'App bug'],
    steps: [
      { id: 's1', title: 'Tap "Restore Purchases"', description: 'Look for this button in the app\'s settings or store page.' },
      { id: 's2', title: 'Check Store Account', description: 'Ensure you are logged into the same Apple ID or Google Account used for the purchase.' },
      { id: 's3', title: 'Check Purchase History', description: 'Verify the transaction was successful in your account settings.' }
    ],
    technicianAdvice: 'If you switched from iPhone to Android (or vice-versa), most in-app purchases do NOT transfer.',
    relatedProblemIds: ['p1240001', 'p260001'],
    createdAt: '2026-01-02T09:00:00Z'
  },
  // --- Gaming: Performance & Heat ---
  {
    id: 'p1250001',
    title: 'Game "Stuttering" When Moving Mouse',
    slug: 'game-stuttering-moving-mouse',
    shortDescription: 'The game is smooth when standing still, but stutters heavily when you look around with the mouse.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Choppy movement', 'FPS drops on mouse move', 'Laggy aim'],
    causes: ['High mouse polling rate (1000Hz+)', 'Overlay conflict', 'CPU bottleneck'],
    steps: [
      { id: 's1', title: 'Lower Mouse Polling Rate', description: 'Change from 1000Hz to 500Hz or 250Hz in your mouse software.' },
      { id: 's2', title: 'Disable Discord Overlay', description: 'A common cause of mouse-related stuttering.' },
      { id: 's3', title: 'Enable "Raw Input"', description: 'In the game settings, turn on Raw Mouse Input to bypass Windows processing.' }
    ],
    technicianAdvice: 'Very high polling rates can overwhelm the CPU, causing lag every time the mouse moves.',
    relatedProblemIds: ['p1250002', 'p950001'],
    createdAt: '2026-01-03T08:00:00Z'
  },
  {
    id: 'p1250002',
    title: 'Game "Screen Tearing" Without V-Sync',
    slug: 'game-screen-tearing-no-vsync',
    shortDescription: 'The image looks like it\'s being "cut" in half horizontally during fast movement.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Horizontal lines', 'Split image', 'Visual glitches'],
    causes: ['FPS not matching monitor refresh rate'],
    steps: [
      { id: 's1', title: 'Enable V-Sync', description: 'Matches game FPS to your monitor\'s refresh rate (e.g., 60Hz).' },
      { id: 's2', title: 'Use G-Sync or FreeSync', description: 'If your monitor supports it, this is the best way to fix tearing without lag.' },
      { id: 's3', title: 'Cap FPS', description: 'Set a frame rate limit slightly below your refresh rate (e.g., 59 FPS for 60Hz).' }
    ],
    technicianAdvice: 'Screen tearing happens when the GPU sends a new frame while the monitor is still drawing the old one.',
    relatedProblemIds: ['p1250001', 'p350001'],
    createdAt: '2026-01-03T09:00:00Z'
  }
];
