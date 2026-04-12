import { Problem } from './types';

export const EXTRA_PROBLEMS_42: Problem[] = [
  // --- Phone: Google Pixel 8 Specific ---
  {
    id: 'p1610001',
    title: 'Pixel 8 "Magic Editor" Not Working',
    slug: 'pixel-8-magic-editor-not-working',
    shortDescription: 'You try to move or resize objects in a photo, but the "Magic Editor" button is missing or fails to save.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Feature missing', 'Save failed', 'Infinite loading'],
    causes: ['Photo not backed up to Google Photos', 'No internet', 'Storage full'],
    steps: [
      { id: 's1', title: 'Backup Photo to Cloud', description: 'Magic Editor only works on photos that have been synced to Google Photos.' },
      { id: 's2', title: 'Check Google One Storage', description: 'Generative AI edits require free space in your Google account.' },
      { id: 's3', title: 'Update Google Photos App', description: 'Ensure you have the latest version from the Play Store.' }
    ],
    technicianAdvice: 'Magic Editor is a cloud-based AI feature; it doesn\'t run locally on the phone\'s chip.',
    relatedProblemIds: ['p1610002', 'p1570001'],
    createdAt: '2026-02-08T08:00:00Z'
  },
  {
    id: 'p1610002',
    title: 'Pixel 8 "Temperature Sensor" Inaccurate',
    slug: 'pixel-8-temperature-sensor-inaccurate',
    shortDescription: 'The temperature app shows wildly different results for the same object.',
    category: 'phone',
    subcategory: 'Hardware',
    symptoms: ['Wrong temperature', 'Fluctuating readings', 'Sensor error'],
    causes: ['Wrong material selected', 'Distance from object', 'Phone is too hot'],
    steps: [
      { id: 's1', title: 'Hold Closer', description: 'The sensor works best within 2 inches (5cm) of the object.' },
      { id: 's2', title: 'Select Correct Material', description: 'The app needs to know if you are measuring metal, plastic, or water for accuracy.' },
      { id: 's3', title: 'Let Phone Cool Down', description: 'If the phone itself is hot, the infrared sensor will be less accurate.' }
    ],
    technicianAdvice: 'This is an industrial-grade IR sensor, not a medical one; it shouldn\'t be used to measure body temperature.',
    relatedProblemIds: ['p1610001', 'p910002'],
    createdAt: '2026-02-08T09:00:00Z'
  },
  // --- Laptop: Windows 11 Specific ---
  {
    id: 'p1620001',
    title: 'Windows 11 "Taskbar" Icons Missing',
    slug: 'windows-11-taskbar-icons-missing',
    shortDescription: 'The taskbar is visible, but all your pinned apps and the Start button have disappeared.',
    category: 'laptop',
    subcategory: 'Software',
    symptoms: ['Empty taskbar', 'Start button missing', 'Cannot open apps'],
    causes: ['Windows Explorer crash', 'Update glitch', 'Corrupt icon cache'],
    steps: [
      { id: 's1', title: 'Restart Windows Explorer', description: 'Ctrl+Shift+Esc > Find "Windows Explorer" > Right-click > Restart.' },
      { id: 's2', title: 'Uninstall Latest Update', description: 'If it happened after an update, roll it back in Settings > Windows Update > Update history.' },
      { id: 's3', title: 'Run SFC Scan', description: 'Command Prompt (Admin) > "sfc /scannow" to fix corrupt system files.' }
    ],
    technicianAdvice: 'The Windows 11 taskbar is a separate process from the old Windows 10 one and is more prone to UI glitches.',
    relatedProblemIds: ['p1620002', 'p900002'],
    createdAt: '2026-02-09T08:00:00Z'
  },
  {
    id: 'p1620002',
    title: 'Windows 11 "Right-Click Menu" is Slow',
    slug: 'windows-11-right-click-menu-slow',
    shortDescription: 'When you right-click a file, it takes 2-3 seconds for the menu to appear.',
    category: 'laptop',
    subcategory: 'Software',
    symptoms: ['Delayed menu', 'Laggy UI', 'Frustrating navigation'],
    causes: ['Too many shell extensions', 'Slow HDD', 'Windows 11 "New" menu lag'],
    steps: [
      { id: 's1', title: 'Show Classic Menu', description: 'Shift + Right-click to bypass the new Windows 11 menu.' },
      { id: 's2', title: 'Disable Shell Extensions', description: 'Use a tool like "ShellExView" to disable 3rd party items in the menu.' },
      { id: 's3', title: 'Update Graphics Drivers', description: 'The menu uses transparency effects that rely on the GPU.' }
    ],
    technicianAdvice: 'The new Windows 11 context menu is built on a different framework that can be slow on older hardware.',
    relatedProblemIds: ['p1620001', 'p230001'],
    createdAt: '2026-02-09T09:00:00Z'
  },
  // --- Internet: Starlink Specific ---
  {
    id: 'p1630001',
    title: 'Starlink "Obstructions" Causing Drops',
    slug: 'starlink-obstructions-causing-drops',
    shortDescription: 'Your internet cuts out every few minutes for a few seconds.',
    category: 'internet',
    subcategory: 'Speed',
    symptoms: ['Frequent drops', 'Slow speed', 'App says "Obstructed"'],
    causes: ['Trees/Buildings in field of view', 'Snow buildup'],
    steps: [
      { id: 's1', title: 'Use the "Check for Obstructions" Tool', description: 'In the Starlink app, use your phone camera to scan the sky.' },
      { id: 's2', title: 'Mount Dish Higher', description: 'Move the dish to the roof or a pole to get above tree lines.' },
      { id: 's3', title: 'Enable "Snow Melt" Mode', description: 'In settings, set it to "Automatic" to keep the dish warm.' }
    ],
    technicianAdvice: 'Starlink needs a 100% clear 110-degree view of the sky; even a single tree branch will cause a drop.',
    relatedProblemIds: ['p1630002', 'p160002'],
    createdAt: '2026-02-10T08:00:00Z'
  },
  {
    id: 'p1630002',
    title: 'Starlink "Dish" Not Leveling',
    slug: 'starlink-dish-not-leveling',
    shortDescription: 'The dish is stuck at a strange angle and won\'t move to find satellites.',
    category: 'internet',
    subcategory: 'Hardware',
    symptoms: ['Dish stuck', 'Motor noise', 'No signal'],
    causes: ['Physical obstruction', 'Motor failure', 'Cable damage'],
    steps: [
      { id: 's1', title: 'Check for Debris', description: 'Ensure no ice or branches are blocking the dish\'s movement.' },
      { id: 's2', title: 'Stow and Unstow', description: 'In the app, click "Stow" then "Unstow" to reset the motors.' },
      { id: 's3', title: 'Check Cable for Kinks', description: 'A damaged cable can prevent the dish from receiving power for the motors.' }
    ],
    technicianAdvice: 'If the motors are dead, the dish will need to be replaced by Starlink support.',
    relatedProblemIds: ['p1630001', 'p730001'],
    createdAt: '2026-02-10T09:00:00Z'
  },
  // --- App: WhatsApp Specific ---
  {
    id: 'p1640001',
    title: 'WhatsApp "Backup" Stuck at 99%',
    slug: 'whatsapp-backup-stuck',
    shortDescription: 'You try to backup your chats to Google Drive or iCloud, but it never finishes.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Stuck progress bar', 'No backup', 'High data usage'],
    causes: ['Corrupt video file', 'Insufficient cloud storage', 'Network timeout'],
    steps: [
      { id: 's1', title: 'Exclude Videos', description: 'Settings > Chats > Chat Backup > Turn OFF "Include Videos".' },
      { id: 's2', title: 'Check Cloud Space', description: 'Ensure your Google Drive or iCloud isn\'t full.' },
      { id: 's3', title: 'Force Stop WhatsApp', description: 'Restart the app and try the backup again.' }
    ],
    technicianAdvice: 'Large video files are the most common reason for backups to fail or hang.',
    relatedProblemIds: ['p1640002', 'p1240001'],
    createdAt: '2026-02-11T08:00:00Z'
  },
  {
    id: 'p1640002',
    title: 'WhatsApp "Web" Not Syncing',
    slug: 'whatsapp-web-not-syncing',
    shortDescription: 'Messages you send on your phone don\'t show up on your computer, or vice-versa.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Missing messages', 'Out of sync', 'Connecting...'],
    causes: ['Battery optimization on phone', 'Slow internet', 'Old browser version'],
    steps: [
      { id: 's1', title: 'Log Out of All Devices', description: 'On your phone, go to Linked Devices > Log out of all.' },
      { id: 's2', title: 'Disable Battery Saver', description: 'Ensure your phone isn\'t killing WhatsApp in the background.' },
      { id: 's3', title: 'Clear Browser Cache', description: 'On your computer, clear the cache for web.whatsapp.com.' }
    ],
    technicianAdvice: 'WhatsApp Web now works without your phone being online, but it still needs to sync periodically.',
    relatedProblemIds: ['p1640001', 'p170002'],
    createdAt: '2026-02-11T09:00:00Z'
  },
  // --- Gaming: Xbox Series X Specific ---
  {
    id: 'p1650001',
    title: 'Xbox "Quick Resume" Not Working',
    slug: 'xbox-quick-resume-not-working',
    shortDescription: 'You switch back to a game and it reloads from the start instead of where you left off.',
    category: 'gaming',
    subcategory: 'Software',
    symptoms: ['Game reloads', 'No "Quick Resume" tag', 'Lost progress'],
    causes: ['Online-only game', 'Game update', 'Too many games in queue'],
    steps: [
      { id: 's1', title: 'Check if Game Supports It', description: 'Online multiplayer games (like Fortnite or CoD) do NOT support Quick Resume.' },
      { id: 's2', title: 'Manage Quick Resume Group', description: 'My Games & Apps > Groups > Quick Resume. Remove old games to make space.' },
      { id: 's3', title: 'Restart Console', description: 'Clears the cache for the Quick Resume feature.' }
    ],
    technicianAdvice: 'Quick Resume saves the game state to the SSD; if the game is updated, that save state becomes invalid.',
    relatedProblemIds: ['p1650002', 'p450001'],
    createdAt: '2026-02-12T08:00:00Z'
  },
  {
    id: 'p1650002',
    title: 'Xbox "Controller" Disconnecting Randomly',
    slug: 'xbox-controller-disconnecting-randomly',
    shortDescription: 'The Xbox button flashes and you lose control for 5-10 seconds during a game.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['Loss of control', 'Flashing light', 'Intermittent connection'],
    causes: ['Wireless interference', 'Low batteries', 'Outdated firmware'],
    steps: [
      { id: 's1', title: 'Update Controller Firmware', description: 'Settings > Accessories > Controller > Update.' },
      { id: 's2', title: 'Move Router Away', description: 'WiFi routers can interfere with the Xbox wireless signal.' },
      { id: 's3', title: 'Use a USB Cable', description: 'Test if the disconnects happen while wired; if not, it\'s a wireless issue.' }
    ],
    technicianAdvice: 'The Xbox uses a proprietary 2.4GHz signal; if you have a lot of other wireless devices nearby, it can drop.',
    relatedProblemIds: ['p1650001', 'p1150001'],
    createdAt: '2026-02-12T09:00:00Z'
  }
];
