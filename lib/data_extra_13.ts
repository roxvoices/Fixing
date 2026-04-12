import { Problem } from './types';

export const EXTRA_PROBLEMS_13: Problem[] = [
  // --- Internet: Speed & Stability ---
  {
    id: 'p160001',
    title: 'Internet Speed Much Slower Than Paid For',
    slug: 'internet-speed-slower-than-paid',
    shortDescription: 'You pay for 500Mbps but only get 50Mbps on your devices.',
    category: 'internet',
    subcategory: 'Speed',
    symptoms: ['Buffering video', 'Slow downloads', 'Laggy gaming'],
    causes: ['Old router', 'WiFi interference', 'ISP throttling'],
    steps: [
      { id: 's1', title: 'Test with Ethernet', description: 'Plug directly into the router. If speed is fine, your WiFi is the problem.' },
      { id: 's2', title: 'Check Router Hardware', description: 'Ensure your router supports Gigabit speeds (802.11ac or 802.11ax).' },
      { id: 's3', title: 'Change WiFi Channel', description: 'Use a WiFi analyzer app to find a less crowded channel.' }
    ],
    technicianAdvice: 'ISP "up to" speeds are theoretical maximums, rarely achieved over WiFi.',
    relatedProblemIds: ['p160002', 'p160003'],
    createdAt: '2025-09-15T08:00:00Z'
  },
  {
    id: 'p160002',
    title: 'Internet Connection Drops Every Few Minutes',
    slug: 'internet-connection-drops-frequently',
    shortDescription: 'The internet works fine, then suddenly disconnects for a few seconds before returning.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Intermittent connection', 'Zoom calls dropping', 'Router rebooting'],
    causes: ['Overheating router', 'Bad coaxial cable', 'Too many devices'],
    steps: [
      { id: 's1', title: 'Check Cable Connections', description: 'Ensure all cables (Coax, Ethernet) are tight and not frayed.' },
      { id: 's2', title: 'Update Router Firmware', description: 'Manufacturers release patches for stability issues.' },
      { id: 's3', title: 'Replace the Splitter', description: 'If you have cable internet, a bad signal splitter can cause drops.' }
    ],
    technicianAdvice: 'If the router lights turn red, the issue is with the line coming into your house.',
    relatedProblemIds: ['p160001', 'p160004'],
    createdAt: '2025-09-15T09:00:00Z'
  },
  // --- App: Functionality & Sync ---
  {
    id: 'p170001',
    title: 'App "Not Responding" (Force Quit Required)',
    slug: 'app-not-responding-force-quit',
    shortDescription: 'The application freezes and the mouse cursor turns into a spinning wheel.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Frozen UI', 'Spinning wheel', 'High CPU usage'],
    causes: ['Memory leak', 'Conflict with other app', 'Corrupt user data'],
    steps: [
      { id: 's1', title: 'Force Quit', description: 'Use Task Manager (Ctrl+Shift+Esc) or Activity Monitor (Cmd+Space) to kill the process.' },
      { id: 's2', title: 'Check for Updates', description: 'Ensure you are running the latest version of the app.' },
      { id: 's3', title: 'Reinstall App', description: 'If it happens every time, a clean reinstall may be necessary.' }
    ],
    technicianAdvice: 'Apps often freeze when they are waiting for a network response that never comes.',
    relatedProblemIds: ['p170002', 'p170003'],
    createdAt: '2025-09-16T08:00:00Z'
  },
  {
    id: 'p170002',
    title: 'App Data Not Syncing Between Devices',
    slug: 'app-data-not-syncing-devices',
    shortDescription: 'Changes made on your phone app don\'t appear on your tablet or computer app.',
    category: 'app',
    subcategory: 'Sync',
    symptoms: ['Missing notes', 'Old data showing', 'Sync error icon'],
    causes: ['Different accounts logged in', 'Sync disabled in settings', 'Server outage'],
    steps: [
      { id: 's1', title: 'Verify Account', description: 'Ensure you are logged into the exact same email/ID on all devices.' },
      { id: 's2', title: 'Check Sync Settings', description: 'Go to App Settings > Sync and ensure it is toggled ON.' },
      { id: 's3', title: 'Force Manual Sync', description: 'Look for a "Sync Now" button or pull down to refresh.' }
    ],
    technicianAdvice: 'Low Power Mode often disables background syncing to save battery.',
    relatedProblemIds: ['p170001', 'p170004'],
    createdAt: '2025-09-16T09:00:00Z'
  },
  // --- Gaming: Software & Performance ---
  {
    id: 'p180001',
    title: 'Game "Stuttering" or Low FPS',
    slug: 'game-stuttering-low-fps',
    shortDescription: 'The game feels choppy and the frame rate drops during intense scenes.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Low FPS', 'Input lag', 'Choppy movement'],
    causes: ['Weak hardware', 'Background processes', 'Thermal throttling'],
    steps: [
      { id: 's1', title: 'Lower Graphics Settings', description: 'Reduce resolution, shadows, and anti-aliasing.' },
      { id: 's2', title: 'Enable Game Mode', description: 'Use Windows Game Mode or console performance mode.' },
      { id: 's3', title: 'Check Temperatures', description: 'Ensure your GPU/CPU isn\'t overheating and slowing down.' }
    ],
    technicianAdvice: 'Updating your graphics drivers can sometimes give a 10-20% FPS boost.',
    relatedProblemIds: ['p180002', 'p180003'],
    createdAt: '2025-09-17T08:00:00Z'
  },
  {
    id: 'p180002',
    title: 'Game Crashing to Desktop (CTD)',
    slug: 'game-crashing-to-desktop',
    shortDescription: 'The game closes suddenly without any error message, returning you to the home screen.',
    category: 'gaming',
    subcategory: 'Software',
    symptoms: ['Sudden exit', 'No error code', 'Loss of progress'],
    causes: ['Corrupt game files', 'Incompatible mods', 'DirectX error'],
    steps: [
      { id: 's1', title: 'Verify Game Integrity', description: 'Use Steam/Epic/Xbox app to "Verify Files" or "Repair".' },
      { id: 's2', title: 'Disable Overlays', description: 'Turn off Discord, Steam, or NVIDIA overlays which can cause conflicts.' },
      { id: 's3', title: 'Check Event Viewer', description: 'Look for "Application Error" logs to find the specific DLL causing the crash.' }
    ],
    technicianAdvice: 'Mods are the #1 cause of crashes in PC gaming.',
    relatedProblemIds: ['p180001', 'p180004'],
    createdAt: '2025-09-17T09:00:00Z'
  },
  // --- Wearables: Battery & Charging ---
  {
    id: 'p190001',
    title: 'Smartwatch Battery Not Lasting a Full Day',
    slug: 'smartwatch-battery-not-lasting-day',
    shortDescription: 'The watch dies by the evening even with light usage.',
    category: 'wearable',
    subcategory: 'Battery',
    symptoms: ['Fast drain', 'Low battery warning', 'Shutdown'],
    causes: ['Always-on display', 'Frequent GPS usage', 'Old battery'],
    steps: [
      { id: 's1', title: 'Disable Always-On Display', description: 'Turn off the constant screen to save significant power.' },
      { id: 's2', title: 'Reduce Notification Frequency', description: 'Only allow essential apps to vibrate your wrist.' },
      { id: 's3', title: 'Check for Background Apps', description: 'Some watch faces or apps consume more power than others.' }
    ],
    technicianAdvice: 'GPS is the biggest battery killer on any wearable.',
    relatedProblemIds: ['p190002', 'p190003'],
    createdAt: '2025-09-18T08:00:00Z'
  },
  {
    id: 'p190002',
    title: 'Smartwatch Not Charging (Dirty Contacts)',
    slug: 'smartwatch-not-charging-dirty-contacts',
    shortDescription: 'The watch doesn\'t respond when placed on its charger or plugged in.',
    category: 'wearable',
    subcategory: 'Hardware',
    symptoms: ['No charging icon', 'Intermittent charging', 'Heat during charging'],
    causes: ['Corroded pins', 'Sweat/Lotion buildup', 'Broken cable'],
    steps: [
      { id: 's1', title: 'Clean the Pins', description: 'Use a toothpick and alcohol to clean the gold contacts on the back of the watch.' },
      { id: 's2', title: 'Check the Charger', description: 'Ensure the charging puck or cable is free of debris.' },
      { id: 's3', title: 'Try Different Power Brick', description: 'Rule out a faulty wall adapter.' }
    ],
    technicianAdvice: 'Sweat is acidic and can corrode charging pins over time.',
    relatedProblemIds: ['p190001', 'p190004'],
    createdAt: '2025-09-18T09:00:00Z'
  },
  // --- Audio: Quality & Mic ---
  {
    id: 'p200001',
    title: 'Headphones Microphone Sounds Muffled',
    slug: 'headphones-mic-sounds-muffled',
    shortDescription: 'People on calls say you sound like you are underwater or far away.',
    category: 'audio',
    subcategory: 'Hardware',
    symptoms: ['Muffled voice', 'Low volume', 'Static on mic'],
    causes: ['Blocked mic hole', 'Incorrect input selected', 'Software noise cancellation'],
    steps: [
      { id: 's1', title: 'Clean Mic Hole', description: 'Use a pin or brush to remove lint from the tiny microphone opening.' },
      { id: 's2', title: 'Check Input Settings', description: 'Ensure the system is using the headset mic, not the laptop\'s built-in mic.' },
      { id: 's3', title: 'Disable "Enhancements"', description: 'Turn off "Noise Suppression" in Windows/Mac settings to see if it improves clarity.' }
    ],
    technicianAdvice: 'Bluetooth mics often sound worse than wired ones due to bandwidth limitations.',
    relatedProblemIds: ['p200002', 'p200003'],
    createdAt: '2025-09-19T08:00:00Z'
  },
  {
    id: 'p200002',
    title: 'Audio and Video Out of Sync (Latency)',
    slug: 'audio-video-out-of-sync',
    shortDescription: 'The sound of people talking doesn\'t match their lip movements in videos.',
    category: 'audio',
    subcategory: 'Connectivity',
    symptoms: ['Lip sync issues', 'Delayed sound', 'Laggy audio'],
    causes: ['Bluetooth codec delay', 'Slow processing', 'App bug'],
    steps: [
      { id: 's1', title: 'Use Low Latency Codec', description: 'Ensure your headphones and phone support aptX Low Latency or AAC.' },
      { id: 's2', title: 'Restart the App', description: 'Sometimes the video player gets out of sync with the audio buffer.' },
      { id: 's3', title: 'Try Wired Connection', description: 'Wired headphones have zero latency.' }
    ],
    technicianAdvice: 'Bluetooth 5.0+ significantly reduces latency compared to older versions.',
    relatedProblemIds: ['p200001', 'p200004'],
    createdAt: '2025-09-19T09:00:00Z'
  }
];
