import { Problem } from './types';

export const EXTRA_PROBLEMS_25: Problem[] = [
  // --- Phone: Software & Apps ---
  {
    id: 'p760001',
    title: 'Phone "App Permissions" Resetting Automatically',
    slug: 'phone-app-permissions-resetting',
    shortDescription: 'Apps keep asking for camera or location access even though you already granted it.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Repeated prompts', 'Permissions revoked', 'App functionality broken'],
    causes: ['"Remove permissions if app is unused" feature', 'System update', 'Security app interference'],
    steps: [
      { id: 's1', title: 'Disable "Auto-revoke"', description: 'Settings > Apps > [App Name] > Permissions > Turn OFF "Remove permissions if app is unused".' },
      { id: 's2', title: 'Check Security Apps', description: 'Ensure apps like Lookout or McAfee aren\'t "cleaning" your permissions.' },
      { id: 's3', title: 'Reset All Permissions', description: 'Settings > Apps > Reset app preferences (forces a clean slate).' }
    ],
    technicianAdvice: 'Android 11+ automatically revokes permissions for apps you haven\'t opened in a few months.',
    relatedProblemIds: ['p760002', 'p760003'],
    createdAt: '2025-11-15T08:00:00Z'
  },
  {
    id: 'p760002',
    title: 'Phone "Work Profile" Apps Not Opening',
    slug: 'phone-work-profile-apps-not-opening',
    shortDescription: 'You can see your work email and apps, but they are grayed out or say "Work profile is off".',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Grayed out icons', 'Cannot open work apps', 'Notification missing'],
    causes: ['Work profile paused', 'IT policy update', 'Device not compliant'],
    steps: [
      { id: 's1', title: 'Turn On Work Profile', description: 'Swipe down for Quick Settings and ensure the "Work Profile" toggle is ON.' },
      { id: 's2', title: 'Check Company Portal App', description: 'Open Intune or your MDM app to see if there are any compliance warnings.' },
      { id: 's3', title: 'Contact IT Support', description: 'Your company might have revoked access or updated their security requirements.' }
    ],
    technicianAdvice: 'Work profiles can be set to automatically turn off during non-working hours.',
    relatedProblemIds: ['p760001', 'p760004'],
    createdAt: '2025-11-15T09:00:00Z'
  },
  // --- Laptop: Connectivity & WiFi ---
  {
    id: 'p770001',
    title: 'Laptop "WiFi Doesn\'t Have a Valid IP Configuration"',
    slug: 'laptop-wifi-invalid-ip-configuration',
    shortDescription: 'You are connected to WiFi, but there is a yellow triangle and no internet access.',
    category: 'laptop',
    subcategory: 'Connectivity',
    symptoms: ['No internet', 'Yellow triangle', 'Error message'],
    causes: ['DHCP failure', 'IP conflict', 'Corrupt TCP/IP stack'],
    steps: [
      { id: 's1', title: 'Release and Renew IP', description: 'Open Command Prompt as Admin > "ipconfig /release" then "ipconfig /renew".' },
      { id: 's2', title: 'Reset TCP/IP Stack', description: 'Command Prompt > "netsh int ip reset" then restart.' },
      { id: 's3', title: 'Restart Router', description: 'Forces the router to assign a new IP address to your laptop.' }
    ],
    technicianAdvice: 'This error means your laptop is talking to the router, but the router isn\'t giving it an "address" to use the internet.',
    relatedProblemIds: ['p770002', 'p770003'],
    createdAt: '2025-11-16T08:00:00Z'
  },
  {
    id: 'p770002',
    title: 'Laptop WiFi "Limited Connectivity" (Public WiFi)',
    slug: 'laptop-wifi-limited-connectivity-public',
    shortDescription: 'You connect to a hotel or airport WiFi, but the login page (captive portal) never appears.',
    category: 'laptop',
    subcategory: 'Connectivity',
    symptoms: ['No login page', 'No internet', 'Stuck on "Connecting"'],
    causes: ['DNS settings mismatch', 'HTTPS redirect failure', 'Cached portal page'],
    steps: [
      { id: 's1', title: 'Go to "neverssl.com"', description: 'Forces a non-secure connection which usually triggers the login portal.' },
      { id: 's2', title: 'Use Router IP', description: 'Type 192.168.1.1 or 1.1.1.1 into your browser to force the portal.' },
      { id: 's3', title: 'Disable Custom DNS', description: 'If you use Google DNS (8.8.8.8), switch back to "Auto" so the hotel DNS can work.' }
    ],
    technicianAdvice: 'Captive portals struggle with modern browsers that force HTTPS everywhere.',
    relatedProblemIds: ['p770001', 'p770004'],
    createdAt: '2025-11-16T09:00:00Z'
  },
  // --- Internet: Speed & Hardware ---
  {
    id: 'p780001',
    title: 'Internet Speed "Capped" at 100Mbps (Gigabit Port Issue)',
    slug: 'internet-speed-capped-100mbps',
    shortDescription: 'You pay for 1Gbps, but your wired PC never goes above 95-100Mbps.',
    category: 'internet',
    subcategory: 'Speed',
    symptoms: ['Speed stuck at 100Mbps', 'Slow downloads', 'Gigabit not working'],
    causes: ['Cat5 cable (not Cat5e/6)', 'Damaged Ethernet pin', 'Old 10/100 switch'],
    steps: [
      { id: 's1', title: 'Check Cable Label', description: 'Ensure your cable says "Cat5e" or "Cat6". Plain "Cat5" is limited to 100Mbps.' },
      { id: 's2', title: 'Inspect Ethernet Pins', description: 'If one of the 8 tiny wires in the plug is broken, it will fallback to 100Mbps.' },
      { id: 's3', title: 'Check Network Card Settings', description: 'Device Manager > Network Adapters > Properties > Advanced > Speed & Duplex > Set to "1.0 Gbps Full Duplex".' }
    ],
    technicianAdvice: 'If your speed is exactly 94-98Mbps, you have a "Fast Ethernet" bottleneck somewhere in your hardware.',
    relatedProblemIds: ['p780002', 'p780003'],
    createdAt: '2025-11-17T08:00:00Z'
  },
  {
    id: 'p780002',
    title: 'Internet "Packet Loss" (Skipping in Games/Calls)',
    slug: 'internet-packet-loss',
    shortDescription: 'Your speed is high, but data is being lost, causing voices to cut out and games to skip.',
    category: 'internet',
    subcategory: 'Speed',
    symptoms: ['Choppy audio', 'Teleporting in games', 'Slow loading'],
    causes: ['Bad cable', 'ISP line noise', 'Overloaded router'],
    steps: [
      { id: 's1', title: 'Run a Ping Test', description: 'Open Command Prompt > "ping google.com -t". Look for "Request timed out".' },
      { id: 's2', title: 'Bypass Your Router', description: 'Plug your PC directly into the modem. If loss stops, your router is dying.' },
      { id: 's3', title: 'Check for Line Noise', description: 'Call your ISP and ask them to check the "Signal to Noise Ratio" (SNR) on your line.' }
    ],
    technicianAdvice: 'Packet loss is often caused by a physical fault, like a chewed cable or a wet junction box outside.',
    relatedProblemIds: ['p780001', 'p780004'],
    createdAt: '2025-11-17T09:00:00Z'
  },
  // --- App: Functionality & Sync ---
  {
    id: 'p790001',
    title: 'App "Background Data" Not Working',
    slug: 'app-background-data-not-working',
    shortDescription: 'The app only works when it is open; it won\'t download messages or sync in the background.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['No background sync', 'Late messages', 'Manual refresh required'],
    causes: ['Data saver enabled', 'Background restriction', 'Low power mode'],
    steps: [
      { id: 's1', title: 'Disable Data Saver', description: 'Settings > Network > Data Saver > Turn OFF or add app to "Unrestricted" list.' },
      { id: 's2', title: 'Check App Info', description: 'Settings > Apps > [App Name] > Mobile Data > Enable "Background Data".' },
      { id: 's3', title: 'Enable "Background App Refresh" (iOS)', description: 'Settings > General > Background App Refresh.' }
    ],
    technicianAdvice: 'Many users enable "Data Saver" and forget that it cripples background app functionality.',
    relatedProblemIds: ['p790002', 'p790003'],
    createdAt: '2025-11-18T08:00:00Z'
  },
  {
    id: 'p790002',
    title: 'App "Clear Data" vs "Clear Cache" Confusion',
    slug: 'app-clear-data-vs-cache',
    shortDescription: 'You want to fix an app but aren\'t sure which button to press or what they do.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['App glitching', 'Full storage', 'Login issues'],
    causes: ['User confusion'],
    steps: [
      { id: 's1', title: 'Try "Clear Cache" First', description: 'Deletes temporary files. You will NOT be logged out and no data is lost.' },
      { id: 's2', title: 'Use "Clear Data" as Last Resort', description: 'Resets the app to factory state. You WILL be logged out and local data (like drafts) will be deleted.' },
      { id: 's3', title: 'Restart After Clearing', description: 'Always reboot the phone after clearing data to ensure a clean start.' }
    ],
    technicianAdvice: '"Clear Cache" is for speed; "Clear Data" is for fixing deep-seated bugs.',
    relatedProblemIds: ['p790001', 'p790004'],
    createdAt: '2025-11-18T09:00:00Z'
  },
  // --- Gaming: Display & Settings ---
  {
    id: 'p800001',
    title: 'Gaming Console "HDR" Looks Washed Out',
    slug: 'gaming-console-hdr-washed-out',
    shortDescription: 'You turned on HDR, but the colors look gray and faded instead of vibrant.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Gray colors', 'Low contrast', 'Faded image'],
    causes: ['Incorrect TV settings', 'Cheap HDMI cable', 'Misconfigured HDR calibration'],
    steps: [
      { id: 's1', title: 'Enable "HDMI Ultra HD Deep Color"', description: 'On your TV settings, ensure the specific HDMI port has "Enhanced" or "Deep Color" mode ON.' },
      { id: 's2', title: 'Run System HDR Calibration', description: 'Go to Console Settings > Display > Adjust HDR. Follow the "barely visible" prompts carefully.' },
      { id: 's3', title: 'Check TV Brightness', description: 'Many TVs need "Backlight" set to 100% for HDR to work correctly.' }
    ],
    technicianAdvice: 'Budget "HDR" TVs often lack the brightness (nits) to actually display HDR, making it look worse than SDR.',
    relatedProblemIds: ['p800002', 'p800003'],
    createdAt: '2025-11-19T08:00:00Z'
  },
  {
    id: 'p800002',
    title: 'Gaming Console "Overscan" (Edges of screen cut off)',
    slug: 'gaming-console-overscan-cut-off',
    shortDescription: 'The UI elements (like health bars or maps) are partially off the edge of the TV screen.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Cut off UI', 'Missing edges', 'Zoomed image'],
    causes: ['TV "Overscan" setting', 'Aspect ratio mismatch'],
    steps: [
      { id: 's1', title: 'Change TV Aspect Ratio', description: 'Look for "Just Scan", "1:1", or "Screen Fit" in your TV\'s picture settings.' },
      { id: 's2', title: 'Adjust Display Area in Console', description: 'Settings > Sound and Screen > Display Area Settings > Shrink until it fits.' },
      { id: 's3', title: 'Disable "Overscan" in TV Menu', description: 'Sometimes hidden under "Advanced" or "Expert" picture settings.' }
    ],
    technicianAdvice: 'Overscan is a relic from old tube TVs that modern digital screens shouldn\'t use.',
    relatedProblemIds: ['p800001', 'p800004'],
    createdAt: '2025-11-19T09:00:00Z'
  }
];
