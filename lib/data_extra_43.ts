import { Problem } from './types';

export const EXTRA_PROBLEMS_43: Problem[] = [
  // --- Phone: Software & Security ---
  {
    id: 'p1660001',
    title: 'Phone "Spam Calls" Increasing',
    slug: 'phone-spam-calls-increasing',
    shortDescription: 'You are receiving dozens of automated or "Scam Likely" calls every day.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Constant ringing', 'Unknown numbers', 'Scam alerts'],
    causes: ['Number leaked in data breach', 'Robocallers'],
    steps: [
      { id: 's1', title: 'Enable "Silence Unknown Callers"', description: 'On iPhone: Settings > Phone > Silence Unknown Callers. (Warning: silences all numbers not in contacts).' },
      { id: 's2', title: 'Use Carrier Spam Blocking', description: 'Download apps like "AT&T ActiveArmor" or "T-Mobile Scam Shield".' },
      { id: 's3', title: 'Register on "Do Not Call" List', description: 'Visit donotcall.gov to register your number (US only).' }
    ],
    technicianAdvice: 'Once your number is on a "live" list, the only permanent fix is to block numbers aggressively or change your number.',
    relatedProblemIds: ['p1660002', 'p510001'],
    createdAt: '2026-02-13T08:00:00Z'
  },
  {
    id: 'p1660002',
    title: 'Phone "Calendar" Spam (Fake invites)',
    slug: 'phone-calendar-spam-invites',
    shortDescription: 'Your calendar is full of fake events like "Your iPhone is infected" or "Claim your prize".',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Fake events', 'Constant notifications', 'Calendar bloat'],
    causes: ['Malicious calendar subscription', 'Website pop-up trick'],
    steps: [
      { id: 's1', title: 'Delete Subscribed Calendar', description: 'Settings > Calendar > Accounts > Subscribed Calendars > Delete the suspicious one.' },
      { id: 's2', title: 'Don\'t Click Links', description: 'Never click the links inside these fake events; they lead to phishing sites.' },
      { id: 's3', title: 'Report as Junk', description: 'In the Calendar app, select the event and click "Report Junk".' }
    ],
    technicianAdvice: 'This is not a virus; it\'s just a calendar subscription you accidentally accepted on a website.',
    relatedProblemIds: ['p1660001', 'p440001'],
    createdAt: '2026-02-13T09:00:00Z'
  },
  // --- Laptop: Hardware & Display ---
  {
    id: 'p1670001',
    title: 'Laptop "Screen" Has a Dark Spot (Pressure Mark)',
    slug: 'laptop-screen-dark-spot-pressure',
    shortDescription: 'There is a faint, dark "bruise" on the screen that is visible on white backgrounds.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Dark spot', 'Bruise-like mark', 'Uneven brightness'],
    causes: ['Physical pressure', 'Carrying in a tight bag', 'Object left on keyboard'],
    steps: [
      { id: 's1', title: 'Check for External Pressure', description: 'Ensure your laptop bag isn\'t too tight or pressing against the lid.' },
      { id: 's2', title: 'Avoid Pressing the Lid', description: 'Never put heavy books on top of your closed laptop.' },
      { id: 's3', title: 'Replace LCD Panel', description: 'Pressure marks are physical damage to the liquid crystals and cannot be fixed with software.' }
    ],
    technicianAdvice: 'Pressure marks are often caused by the keyboard or a crumb pressing against the screen when the lid is closed.',
    relatedProblemIds: ['p1670002', 'p670001'],
    createdAt: '2026-02-14T08:00:00Z'
  },
  {
    id: 'p1670002',
    title: 'Laptop "Screen" is Flickering (Hardware)',
    slug: 'laptop-screen-flickering-hardware',
    shortDescription: 'The screen flashes or the image "jumps" when you move the laptop lid.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Flickering', 'Image distortion', 'Blackouts when moving lid'],
    causes: ['Loose/Damaged eDP cable', 'Worn out hinge'],
    steps: [
      { id: 's1', title: 'Test at Different Angles', description: 'Slowly move the lid. If the flickering only happens at a certain angle, it\'s the cable.' },
      { id: 's2', title: 'Test with External Monitor', description: 'If the external screen is fine, the GPU is okay; it\'s the laptop screen/cable.' },
      { id: 's3', title: 'Reseat Display Cable', description: 'Advanced: Open the laptop and ensure the display cable is firmly plugged into the motherboard.' }
    ],
    technicianAdvice: 'The display cable passes through the hinge; years of opening and closing can eventually fray the wires.',
    relatedProblemIds: ['p1670001', 'p520002'],
    createdAt: '2026-02-14T09:00:00Z'
  },
  // --- Internet: WiFi & Speed ---
  {
    id: 'p1680001',
    title: 'WiFi "Speed" is Fast but Browsing is Slow',
    slug: 'wifi-speed-fast-browsing-slow',
    shortDescription: 'Speedtest.net shows 500Mbps, but websites take 5-10 seconds to start loading.',
    category: 'internet',
    subcategory: 'Speed',
    symptoms: ['Fast speed test', 'Slow page loads', 'High "Time to First Byte"'],
    causes: ['DNS latency', 'IPv6 conflict', 'Browser bloat'],
    steps: [
      { id: 's1', title: 'Change DNS to 1.1.1.1', description: 'Manually set your DNS to Cloudflare or Google to speed up "lookups".' },
      { id: 's2', title: 'Disable IPv6', description: 'In network settings, try disabling IPv6 to see if it fixes the delay.' },
      { id: 's3', title: 'Clear Browser Extensions', description: 'Some extensions inspect every page, causing a delay before it displays.' }
    ],
    technicianAdvice: 'This is usually a "lookup" issue; your computer knows how to download fast, but it takes too long to find the site\'s address.',
    relatedProblemIds: ['p1680002', 'p1030002'],
    createdAt: '2026-02-15T08:00:00Z'
  },
  {
    id: 'p1680002',
    title: 'WiFi "Bufferbloat" (Lag when others are streaming)',
    slug: 'wifi-bufferbloat-lag',
    shortDescription: 'Your gaming ping is fine until someone else starts a YouTube video, then it spikes to 500ms.',
    category: 'internet',
    subcategory: 'Speed',
    symptoms: ['Lag spikes', 'Ping jitter', 'Unstable connection'],
    causes: ['Router buffer overflow', 'Lack of QoS'],
    steps: [
      { id: 's1', title: 'Enable QoS (Quality of Service)', description: 'In router settings, prioritize "Gaming" or "Real-time" traffic.' },
      { id: 's2', title: 'Limit Upload Speed', description: 'Set your max upload to 90% of your actual speed to prevent the buffer from filling.' },
      { id: 's3', title: 'Upgrade Router', description: 'Cheaper routers have small buffers that fill up easily under load.' }
    ],
    technicianAdvice: 'Bufferbloat is like a traffic jam at the router; QoS acts like an emergency lane for your gaming data.',
    relatedProblemIds: ['p1680001', 'p530001'],
    createdAt: '2026-02-15T09:00:00Z'
  },
  // --- App: Functionality & UI ---
  {
    id: 'p1690001',
    title: 'App "Keyboard" is Too Big (One-Handed Mode)',
    slug: 'app-keyboard-too-big-one-handed',
    shortDescription: 'The keyboard is squashed to one side or looks tiny on your large screen.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Small keyboard', 'Off-center input', 'Hard to type'],
    causes: ['One-handed mode enabled', 'Floating keyboard mode'],
    steps: [
      { id: 's1', title: 'Disable One-Handed Mode', description: 'Look for an arrow icon on the side of the keyboard to expand it.' },
      { id: 's2', title: 'Check Keyboard Settings', description: 'Settings > Keyboard > Layout > Set to "Normal" or "Standard".' },
      { id: 's3', title: 'Reset Keyboard App', description: 'Clear data for Gboard or Samsung Keyboard to reset the layout.' }
    ],
    technicianAdvice: 'One-handed mode is great for large phones, but easy to trigger accidentally with a swipe gesture.',
    relatedProblemIds: ['p1690002', 'p1040002'],
    createdAt: '2026-02-16T08:00:00Z'
  },
  {
    id: 'p1690002',
    title: 'App "Screen" is Zoomed In',
    slug: 'app-screen-zoomed-in',
    shortDescription: 'Everything on the screen looks huge and you have to scroll just to see the whole app.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Giant icons', 'Cut-off text', 'Cannot see full UI'],
    causes: ['Accessibility Zoom enabled', 'Display Scaling set too high'],
    steps: [
      { id: 's1', title: 'Three-Finger Double Tap', description: 'On iPhone/Android, this is the gesture to toggle the accessibility zoom.' },
      { id: 's2', title: 'Check Display Size', description: 'Settings > Display > Display Size > Ensure it is set to "Default".' },
      { id: 's3', title: 'Disable Zoom in Accessibility', description: 'Settings > Accessibility > Zoom > Toggle OFF.' }
    ],
    technicianAdvice: 'Accessibility features are easy to trigger with accidental multi-finger gestures.',
    relatedProblemIds: ['p1690001', 'p1540001'],
    createdAt: '2026-02-16T09:00:00Z'
  },
  // --- Gaming: Performance & Software ---
  {
    id: 'p1700001',
    title: 'Game "Anti-Cheat" Error (Cannot launch)',
    slug: 'game-anti-cheat-error',
    shortDescription: 'The game won\'t start and shows an error from Easy Anti-Cheat or BattlEye.',
    category: 'gaming',
    subcategory: 'Software',
    symptoms: ['Launch failed', 'Error message', 'Kicked from match'],
    causes: ['Conflict with RGB software', 'Corrupt anti-cheat files', 'Windows Test Mode enabled'],
    steps: [
      { id: 's1', title: 'Repair Anti-Cheat Service', description: 'Go to the game folder > AntiCheat > Run "EasyAntiCheat_Setup.exe" > Repair.' },
      { id: 's2', title: 'Disable RGB Software', description: 'Apps like "iCUE" or "Armoury Crate" are sometimes flagged as cheats.' },
      { id: 's3', title: 'Disable Windows Test Mode', description: 'Command Prompt (Admin) > "bcdedit /set TESTSIGNING OFF" > Restart.' }
    ],
    technicianAdvice: 'Anti-cheat software runs at a very high privilege level and is very sensitive to other system-level apps.',
    relatedProblemIds: ['p1700002', 'p180002'],
    createdAt: '2026-02-17T08:00:00Z'
  },
  {
    id: 'p1700002',
    title: 'Game "Voice Chat" Not Working (Can hear but not talk)',
    slug: 'game-voice-chat-not-working',
    shortDescription: 'You can hear your teammates, but they can\'t hear you, even though your mic works in Discord.',
    category: 'gaming',
    subcategory: 'Software',
    symptoms: ['No mic input', 'Teammates can\'t hear me', 'Mic icon doesn\'t light up'],
    causes: ['Wrong input device in game', 'Push-to-talk enabled', 'NAT Type issues'],
    steps: [
      { id: 's1', title: 'Check In-Game Audio Settings', description: 'Ensure the "Input Device" matches your actual microphone.' },
      { id: 's2', title: 'Check Push-to-Talk Key', description: 'Ensure you are pressing the correct key to talk.' },
      { id: 's3', title: 'Check Privacy Settings', description: 'Settings > Privacy > Microphone > Allow desktop apps to access your microphone.' }
    ],
    technicianAdvice: 'Games often have their own separate audio settings that override your Windows defaults.',
    relatedProblemIds: ['p1700001', 'p850002'],
    createdAt: '2026-02-17T09:00:00Z'
  }
];
