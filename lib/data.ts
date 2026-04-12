import { Problem, Category } from './types';
import { EXTRA_PROBLEMS } from './data_extra';
import { EXTRA_PROBLEMS_2 } from './data_extra_2';
import { EXTRA_PROBLEMS_3 } from './data_extra_3';

export const CATEGORIES: Category[] = [
  {
    id: 'phone',
    name: 'Phone Problems',
    slug: 'phone-problems',
    icon: 'Smartphone',
    subcategories: ['Charging', 'Battery', 'Display', 'Network', 'Software', 'Audio', 'Camera', 'Sensors'],
  },
  {
    id: 'laptop',
    name: 'Laptop Problems',
    slug: 'laptop-problems',
    icon: 'Laptop',
    subcategories: ['Boot', 'Performance', 'Connectivity', 'Software', 'Hardware', 'Security'],
  },
  {
    id: 'internet',
    name: 'Internet Problems',
    slug: 'internet-problems',
    icon: 'Globe',
    subcategories: ['WiFi', 'Mobile Data', 'Router', 'Speed'],
  },
  {
    id: 'app',
    name: 'App Problems',
    slug: 'app-problems',
    icon: 'AppWindow',
    subcategories: ['Installation', 'Launch', 'Functionality', 'Sync'],
  },
  {
    id: 'cloud',
    name: 'Cloud Services',
    slug: 'cloud-services',
    icon: 'Cloud',
    subcategories: ['Sync', 'Storage', 'Account', 'Security'],
  },
  {
    id: 'gaming',
    name: 'Gaming',
    slug: 'gaming-problems',
    icon: 'Gamepad2',
    subcategories: ['Performance', 'Connectivity', 'Hardware', 'Software'],
  },
  {
    id: 'smart-home',
    name: 'Smart Home',
    slug: 'smart-home',
    icon: 'Home',
    subcategories: ['TV', 'Speaker', 'Lighting', 'Security'],
  },
  {
    id: 'email',
    name: 'Email Services',
    slug: 'email-problems',
    icon: 'Mail',
    subcategories: ['Sending', 'Receiving', 'Sync', 'Security'],
  },
  {
    id: 'website',
    name: 'Websites',
    slug: 'website-problems',
    icon: 'Globe2',
    subcategories: ['Loading', 'Display', 'Functionality', 'Database'],
  },
  {
    id: 'social',
    name: 'Social Media',
    slug: 'social-media',
    icon: 'Share2',
    subcategories: ['Account', 'Posting', 'Messaging', 'Privacy'],
  },
  {
    id: 'security',
    name: 'Security',
    slug: 'security-problems',
    icon: 'ShieldAlert',
    subcategories: ['Malware', 'Encryption', 'Account', 'Network'],
  },
];

const BASE_PROBLEMS: Problem[] = [
  // --- Phone: Charging / Battery ---
  {
    id: 'p1',
    title: 'iPhone 13 Not Charging',
    slug: 'iphone-13-not-charging',
    shortDescription: 'Your iPhone 13 doesn\'t respond when plugged into a lightning cable or wireless charger.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['No charging icon', 'Phone doesn\'t vibrate when connected', 'Intermittent charging'],
    causes: ['Lint in port', 'Damaged cable', 'Faulty adapter', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Check Cable/Adapter', description: 'Try a different MFi-certified cable and wall outlet.' },
      { id: 's2', title: 'Clean Port', description: 'Gently remove lint from the port using a wooden toothpick.' },
      { id: 's3', title: 'Force Restart', description: 'Press Vol Up, then Vol Down, then hold Side button until Apple logo appears.' }
    ],
    warning: 'Metal tools can damage the port pins.',
    technicianAdvice: 'If cleaning fails, the port or battery may need replacement.',
    relatedProblemIds: ['p2', 'p11'],
    isPopular: true,
    createdAt: '2024-01-10T10:00:00Z'
  },
  {
    id: 'p2',
    title: 'Samsung Galaxy S21 Battery Drain (Android 14)',
    slug: 'samsung-s21-battery-drain-android-14',
    shortDescription: 'Battery life decreased significantly after the Android 14 update.',
    category: 'phone',
    subcategory: 'Battery',
    symptoms: ['Fast standby drain', 'Device feels warm', 'High system usage'],
    causes: ['Unoptimized apps', '120Hz refresh rate', 'Sync issues', 'Location services'],
    steps: [
      { id: 's1', title: 'Check Usage', description: 'Go to Settings > Battery to identify power-hungry apps.' },
      { id: 's2', title: 'Limit Background Apps', description: 'Put unused apps to sleep in Background usage limits.' },
      { id: 's3', title: 'Wipe Cache', description: 'Boot to recovery and select Wipe cache partition.' }
    ],
    technicianAdvice: 'If health is below 80%, consider a replacement.',
    relatedProblemIds: ['p1', 'p11'],
    isPopular: true,
    createdAt: '2024-01-15T12:00:00Z'
  },
  {
    id: 'p11',
    title: 'Phone Overheating While Charging',
    slug: 'phone-overheating-while-charging',
    shortDescription: 'Device becomes uncomfortably hot during a charge cycle.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['Cool down warning', 'Charging stops', 'Screen dims'],
    causes: ['Non-original charger', 'Thick case', 'Heavy usage while charging'],
    steps: [
      { id: 's1', title: 'Remove Case', description: 'Allow better airflow by removing protective covers.' },
      { id: 's2', title: 'Stop Usage', description: 'Avoid gaming or GPS while plugged in.' },
      { id: 's3', title: 'Use Original Charger', description: 'Switch to the official manufacturer charger.' }
    ],
    warning: 'Excessive heat degrades battery capacity permanently.',
    technicianAdvice: 'If it gets hot when idle, the battery might be short-circuiting.',
    relatedProblemIds: ['p1', 'p2'],
    isPopular: true,
    createdAt: '2024-03-10T14:00:00Z'
  },

  // --- Phone: Display / Screen ---
  {
    id: 'p13',
    title: 'iPhone Screen Flickering',
    slug: 'iphone-screen-flickering',
    shortDescription: 'The display flashes or shows lines randomly on your iPhone.',
    category: 'phone',
    subcategory: 'Display',
    symptoms: ['Horizontal lines', 'Brightness jumps', 'Ghosting'],
    causes: ['Loose display cable', 'Water damage', 'Software bug', 'Failing LCD/OLED'],
    steps: [
      { id: 's1', title: 'Force Restart', description: 'Clears temporary software glitches affecting the display.' },
      { id: 's2', title: 'Update iOS', description: 'Ensure you are on the latest version as Apple fixes display bugs via software.' },
      { id: 's3', title: 'Reset All Settings', description: 'Settings > General > Transfer or Reset iPhone > Reset > Reset All Settings.' }
    ],
    technicianAdvice: 'If flickering persists after a reset, the screen assembly likely needs replacement.',
    relatedProblemIds: ['p14'],
    isPopular: false,
    createdAt: '2024-03-20T11:00:00Z'
  },
  {
    id: 'p14',
    title: 'Touchscreen Not Responding (Android)',
    slug: 'touchscreen-not-responding-android',
    shortDescription: 'The screen doesn\'t register touches or is very slow to react.',
    category: 'phone',
    subcategory: 'Display',
    symptoms: ['Dead zones', 'Delayed reaction', 'Total unresponsiveness'],
    causes: ['Dirty screen', 'Poor quality screen protector', 'System freeze', 'Hardware failure'],
    steps: [
      { id: 's1', title: 'Clean the Screen', description: 'Use a microfiber cloth to remove oils and dirt.' },
      { id: 's2', title: 'Remove Screen Protector', description: 'A cracked or poorly applied protector can interfere with touch.' },
      { id: 's3', title: 'Safe Mode', description: 'Boot into Safe Mode to see if a third-party app is causing the freeze.' }
    ],
    technicianAdvice: 'If the digitizer is cracked internally, the screen must be replaced.',
    relatedProblemIds: ['p13'],
    isPopular: true,
    createdAt: '2024-03-22T15:00:00Z'
  },

  // --- Laptop: Boot / Startup ---
  {
    id: 'p4',
    title: 'Dell Inspiron 15 Not Turning On',
    slug: 'dell-inspiron-15-not-turning-on',
    shortDescription: 'The laptop shows no signs of life when the power button is pressed.',
    category: 'laptop',
    subcategory: 'Boot',
    symptoms: ['No lights', 'No fan noise', 'Black screen'],
    causes: ['Dead battery', 'Static buildup', 'Faulty RAM', 'Motherboard failure'],
    steps: [
      { id: 's1', title: 'Hard Reset', description: 'Unplug, hold power for 30s, plug in and boot.' },
      { id: 's2', title: 'Check Adapter', description: 'Look for the LED on the charger brick.' },
      { id: 's3', title: 'Reseat RAM', description: 'Carefully remove and re-insert RAM modules.' }
    ],
    technicianAdvice: 'If motherboard is dead, repair cost might exceed value.',
    relatedProblemIds: ['p7', 'p12'],
    isPopular: true,
    createdAt: '2024-02-05T14:30:00Z'
  },
  {
    id: 'p7',
    title: 'Blue Screen of Death (HP Pavilion)',
    slug: 'hp-pavilion-bsod-windows-10',
    shortDescription: 'Your HP laptop crashes to a blue screen with an error code.',
    category: 'laptop',
    subcategory: 'Boot',
    symptoms: ['Sudden restart', 'Error codes (e.g. MEMORY_MANAGEMENT)', 'Boot loop'],
    causes: ['Faulty RAM/HDD', 'Corrupted files', 'Overheating', 'Bad update'],
    steps: [
      { id: 's1', title: 'Note Error Code', description: 'Search the specific code on another device.' },
      { id: 's2', title: 'Run Diagnostics', description: 'Tap F2 on startup to enter HP Diagnostics.' },
      { id: 's3', title: 'Uninstall Updates', description: 'Go to Advanced Startup > Troubleshoot > Uninstall Updates.' }
    ],
    warning: 'BSOD can lead to data loss.',
    technicianAdvice: 'Frequent BSODs often point to failing RAM or Drive.',
    relatedProblemIds: ['p4', 'p12'],
    isPopular: false,
    createdAt: '2024-02-20T13:00:00Z'
  },

  // --- Laptop: Performance ---
  {
    id: 'p12',
    title: 'MacBook Pro Fan Noise Loud',
    slug: 'macbook-pro-fan-noise-loud',
    shortDescription: 'Fans spinning at high speed even with minimal apps open.',
    category: 'laptop',
    subcategory: 'Performance',
    symptoms: ['Constant whirring', 'Hot bottom', 'Throttling'],
    causes: ['Dust', 'High CPU usage', 'Spotlight indexing', 'Old thermal paste'],
    steps: [
      { id: 's1', title: 'Check Activity Monitor', description: 'Find apps using high % CPU.' },
      { id: 's2', title: 'Reset SMC', description: 'Fixes power/fan management on Intel Macs.' },
      { id: 's3', title: 'Clean Vents', description: 'Use compressed air on the back hinge.' }
    ],
    technicianAdvice: 'Grinding noise means the fan bearing is failing.',
    relatedProblemIds: ['p4', 'p7'],
    isPopular: false,
    createdAt: '2024-03-15T09:30:00Z'
  },

  // --- Internet: WiFi / Router ---
  {
    id: 'p5',
    title: 'WiFi Keeps Disconnecting (Android)',
    slug: 'wifi-keeps-disconnecting-android',
    shortDescription: 'Phone connects to WiFi but drops the connection frequently.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Icon disappears', 'Intermittent internet', 'Auto-switch to data'],
    causes: ['Interference', 'IP conflict', 'Battery saver', 'Old firmware'],
    steps: [
      { id: 's1', title: 'Forget & Reconnect', description: 'Delete the network and sign in again.' },
      { id: 's2', title: 'Reset Network Settings', description: 'Settings > System > Reset WiFi & Bluetooth.' },
      { id: 's3', title: 'Disable MAC Randomization', description: 'Set Privacy to "Use device MAC" in network settings.' }
    ],
    technicianAdvice: 'If all devices drop, the router is likely failing.',
    relatedProblemIds: ['p8'],
    isPopular: false,
    createdAt: '2024-02-10T11:00:00Z'
  },
  {
    id: 'p8',
    title: 'Slow Internet on Windows Laptop',
    slug: 'slow-internet-windows-laptop',
    shortDescription: 'Download speeds are much slower than your ISP plan.',
    category: 'internet',
    subcategory: 'Speed',
    symptoms: ['Buffering', 'Slow loading', 'High ping'],
    causes: ['Background updates', 'Old drivers', 'DNS issues', 'Distance'],
    steps: [
      { id: 's1', title: 'Run Speed Test', description: 'Confirm speed at speedtest.net.' },
      { id: 's2', title: 'Change DNS', description: 'Use Google DNS (8.8.8.8 and 8.8.4.4).' },
      { id: 's3', title: 'Disable P2P Updates', description: 'Turn off Delivery Optimization in Windows Update.' }
    ],
    technicianAdvice: 'If slow on all devices, contact your ISP.',
    relatedProblemIds: ['p5'],
    isPopular: true,
    createdAt: '2024-02-25T10:00:00Z'
  },

  // --- App: Crashing / Launch ---
  {
    id: 'p6',
    title: 'Instagram Crashing on iOS 17',
    slug: 'instagram-crashing-ios-17',
    shortDescription: 'App closes immediately after opening on iPhone.',
    category: 'app',
    subcategory: 'Launch',
    symptoms: ['Splash screen then exit', 'Home screen return', 'Other apps fine'],
    causes: ['Corrupted cache', 'iOS 17 bug', 'Low storage', 'Server issue'],
    steps: [
      { id: 's1', title: 'Force Close', description: 'Swipe app away and restart.' },
      { id: 's2', title: 'Update App', description: 'Check App Store for updates.' },
      { id: 's3', title: 'Offload App', description: 'Settings > General > Storage > Instagram > Offload.' }
    ],
    technicianAdvice: 'Software crashes are rarely hardware-related.',
    relatedProblemIds: ['p9'],
    isPopular: true,
    createdAt: '2024-02-15T16:00:00Z'
  },
  {
    id: 'p9',
    title: 'WhatsApp Notifications Not Working',
    slug: 'whatsapp-notifications-not-working',
    shortDescription: 'No alerts for new messages until app is opened.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['No sound/vibration', 'No badges', 'Foreground only sync'],
    causes: ['Disabled in settings', 'Battery optimization', 'Do Not Disturb', 'Data restriction'],
    steps: [
      { id: 's1', title: 'Check App Settings', description: 'WhatsApp > Settings > Notifications.' },
      { id: 's2', title: 'System Permissions', description: 'Phone Settings > Apps > WhatsApp > Notifications.' },
      { id: 's3', title: 'Disable Battery Optimization', description: 'Set WhatsApp to "Unrestricted" in battery settings.' }
    ],
    technicianAdvice: 'This is a software configuration issue.',
    relatedProblemIds: ['p6'],
    isPopular: false,
    createdAt: '2024-03-01T15:00:00Z'
  },
];

import { EXTRA_PROBLEMS_4 } from './data_extra_4';
import { EXTRA_PROBLEMS_5 } from './data_extra_5';
import { EXTRA_PROBLEMS_6 } from './data_extra_6';
import { EXTRA_PROBLEMS_7 } from './data_extra_7';
import { EXTRA_PROBLEMS_8 } from './data_extra_8';
import { EXTRA_PROBLEMS_9 } from './data_extra_9';
import { EXTRA_PROBLEMS_10 } from './data_extra_10';
import { EXTRA_PROBLEMS_11 } from './data_extra_11';
import { EXTRA_PROBLEMS_12 } from './data_extra_12';
import { EXTRA_PROBLEMS_13 } from './data_extra_13';
import { EXTRA_PROBLEMS_14 } from './data_extra_14';
import { EXTRA_PROBLEMS_15 } from './data_extra_15';
import { EXTRA_PROBLEMS_16 } from './data_extra_16';
import { EXTRA_PROBLEMS_17 } from './data_extra_17';
import { EXTRA_PROBLEMS_18 } from './data_extra_18';
import { EXTRA_PROBLEMS_19 } from './data_extra_19';
import { EXTRA_PROBLEMS_20 } from './data_extra_20';
import { EXTRA_PROBLEMS_21 } from './data_extra_21';
import { EXTRA_PROBLEMS_22 } from './data_extra_22';
import { EXTRA_PROBLEMS_23 } from './data_extra_23';
import { EXTRA_PROBLEMS_24 } from './data_extra_24';
import { EXTRA_PROBLEMS_25 } from './data_extra_25';
import { EXTRA_PROBLEMS_26 } from './data_extra_26';
import { EXTRA_PROBLEMS_27 } from './data_extra_27';
import { EXTRA_PROBLEMS_28 } from './data_extra_28';
import { EXTRA_PROBLEMS_29 } from './data_extra_29';
import { EXTRA_PROBLEMS_30 } from './data_extra_30';
import { EXTRA_PROBLEMS_31 } from './data_extra_31';
import { EXTRA_PROBLEMS_32 } from './data_extra_32';
import { EXTRA_PROBLEMS_33 } from './data_extra_33';
import { EXTRA_PROBLEMS_34 } from './data_extra_34';
import { EXTRA_PROBLEMS_35 } from './data_extra_35';
import { EXTRA_PROBLEMS_36 } from './data_extra_36';
import { EXTRA_PROBLEMS_37 } from './data_extra_37';
import { EXTRA_PROBLEMS_38 } from './data_extra_38';
import { EXTRA_PROBLEMS_39 } from './data_extra_39';
import { EXTRA_PROBLEMS_40 } from './data_extra_40';
import { EXTRA_PROBLEMS_41 } from './data_extra_41';
import { EXTRA_PROBLEMS_42 } from './data_extra_42';
import { EXTRA_PROBLEMS_43 } from './data_extra_43';
import { EXTRA_PROBLEMS_44 } from './data_extra_44';
import { EXTRA_PROBLEMS_45 } from './data_extra_45';
import { EXTRA_PROBLEMS_46 } from './data_extra_46';
import { EXTRA_PROBLEMS_47 } from './data_extra_47';
import { EXTRA_PROBLEMS_48 } from './data_extra_48';
import { EXTRA_PROBLEMS_49 } from './data_extra_49';
import { EXTRA_PROBLEMS_50 } from './data_extra_50';
import { EXTRA_PROBLEMS_51 } from './data_extra_51';
import { EXTRA_PROBLEMS_52 } from './data_extra_52';
import { EXTRA_PROBLEMS_53 } from './data_extra_53';
import { EXTRA_PROBLEMS_54 } from './data_extra_54';
import { EXTRA_PROBLEMS_55 } from './data_extra_55';
import { EXTRA_PROBLEMS_56 } from './data_extra_56';
import { EXTRA_PROBLEMS_57 } from './data_extra_57';
import { EXTRA_PROBLEMS_58 } from './data_extra_58';
import { EXTRA_PROBLEMS_59 } from './data_extra_59';
import { EXTRA_PROBLEMS_60 } from './data_extra_60';
import { EXTRA_PROBLEMS_61 } from './data_extra_61';
import { EXTRA_PROBLEMS_62 } from './data_extra_62';
import { EXTRA_PROBLEMS_63 } from './data_extra_63';
import { EXTRA_PROBLEMS_64 } from './data_extra_64';
import { EXTRA_PROBLEMS_65 } from './data_extra_65';
import { EXTRA_PROBLEMS_66 } from './data_extra_66';
import { EXTRA_PROBLEMS_67 } from './data_extra_67';
import { EXTRA_PROBLEMS_68 } from './data_extra_68';
import { EXTRA_PROBLEMS_69 } from './data_extra_69';
import { EXTRA_PROBLEMS_70 } from './data_extra_70';
import { EXTRA_PROBLEMS_71 } from './data_extra_71';
import { EXTRA_PROBLEMS_72 } from './data_extra_72';
import { EXTRA_PROBLEMS_73 } from './data_extra_73';
import { EXTRA_PROBLEMS_74 } from './data_extra_74';
import { EXTRA_PROBLEMS_75 } from './data_extra_75';
import { EXTRA_PROBLEMS_76 } from './data_extra_76';
import { EXTRA_PROBLEMS_77 } from './data_extra_77';
import { EXTRA_PROBLEMS_78 } from './data_extra_78';
import { EXTRA_PROBLEMS_79 } from './data_extra_79';
import { EXTRA_PROBLEMS_80 } from './data_extra_80';

export const INITIAL_PROBLEMS: Problem[] = [
  ...BASE_PROBLEMS,
  ...EXTRA_PROBLEMS,
  ...EXTRA_PROBLEMS_2,
  ...EXTRA_PROBLEMS_3,
  ...EXTRA_PROBLEMS_4,
  ...EXTRA_PROBLEMS_5,
  ...EXTRA_PROBLEMS_6,
  ...EXTRA_PROBLEMS_7,
  ...EXTRA_PROBLEMS_8,
  ...EXTRA_PROBLEMS_9,
  ...EXTRA_PROBLEMS_10,
  ...EXTRA_PROBLEMS_11,
  ...EXTRA_PROBLEMS_12,
  ...EXTRA_PROBLEMS_13,
  ...EXTRA_PROBLEMS_14,
  ...EXTRA_PROBLEMS_15,
  ...EXTRA_PROBLEMS_16,
  ...EXTRA_PROBLEMS_17,
  ...EXTRA_PROBLEMS_18,
  ...EXTRA_PROBLEMS_19,
  ...EXTRA_PROBLEMS_20,
  ...EXTRA_PROBLEMS_21,
  ...EXTRA_PROBLEMS_22,
  ...EXTRA_PROBLEMS_23,
  ...EXTRA_PROBLEMS_24,
  ...EXTRA_PROBLEMS_25,
  ...EXTRA_PROBLEMS_26,
  ...EXTRA_PROBLEMS_27,
  ...EXTRA_PROBLEMS_28,
  ...EXTRA_PROBLEMS_29,
  ...EXTRA_PROBLEMS_30,
  ...EXTRA_PROBLEMS_31,
  ...EXTRA_PROBLEMS_32,
  ...EXTRA_PROBLEMS_33,
  ...EXTRA_PROBLEMS_34,
  ...EXTRA_PROBLEMS_35,
  ...EXTRA_PROBLEMS_36,
  ...EXTRA_PROBLEMS_37,
  ...EXTRA_PROBLEMS_38,
  ...EXTRA_PROBLEMS_39,
  ...EXTRA_PROBLEMS_40,
  ...EXTRA_PROBLEMS_41,
  ...EXTRA_PROBLEMS_42,
  ...EXTRA_PROBLEMS_43,
  ...EXTRA_PROBLEMS_44,
  ...EXTRA_PROBLEMS_45,
  ...EXTRA_PROBLEMS_46,
  ...EXTRA_PROBLEMS_47,
  ...EXTRA_PROBLEMS_48,
  ...EXTRA_PROBLEMS_49,
  ...EXTRA_PROBLEMS_50,
  ...EXTRA_PROBLEMS_51,
  ...EXTRA_PROBLEMS_52,
  ...EXTRA_PROBLEMS_53,
  ...EXTRA_PROBLEMS_54,
  ...EXTRA_PROBLEMS_55,
  ...EXTRA_PROBLEMS_56,
  ...EXTRA_PROBLEMS_57,
  ...EXTRA_PROBLEMS_58,
  ...EXTRA_PROBLEMS_59,
  ...EXTRA_PROBLEMS_60,
  ...EXTRA_PROBLEMS_61,
  ...EXTRA_PROBLEMS_62,
  ...EXTRA_PROBLEMS_63,
  ...EXTRA_PROBLEMS_64,
  ...EXTRA_PROBLEMS_65,
  ...EXTRA_PROBLEMS_66,
  ...EXTRA_PROBLEMS_67,
  ...EXTRA_PROBLEMS_68,
  ...EXTRA_PROBLEMS_69,
  ...EXTRA_PROBLEMS_70,
  ...EXTRA_PROBLEMS_71,
  ...EXTRA_PROBLEMS_72,
  ...EXTRA_PROBLEMS_73,
  ...EXTRA_PROBLEMS_74,
  ...EXTRA_PROBLEMS_75,
  ...EXTRA_PROBLEMS_76,
  ...EXTRA_PROBLEMS_77,
  ...EXTRA_PROBLEMS_78,
  ...EXTRA_PROBLEMS_79,
  ...EXTRA_PROBLEMS_80
];
