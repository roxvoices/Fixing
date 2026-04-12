import { Problem } from './types';

export const EXTRA_PROBLEMS_45: Problem[] = [
  // --- Phone: Hardware & Audio ---
  {
    id: 'p1760001',
    title: 'Phone "Earpiece" is Very Quiet',
    slug: 'phone-earpiece-quiet',
    shortDescription: 'You can barely hear the person on the other end during a call, even at max volume.',
    category: 'phone',
    subcategory: 'Audio',
    symptoms: ['Low call volume', 'Muffled voice', 'Hard to hear'],
    causes: ['Earwax/Dirt in grill', 'Protective film covering speaker', 'Software bug'],
    steps: [
      { id: 's1', title: 'Clean the Grill', description: 'Use a soft toothbrush and a tiny bit of isopropyl alcohol to scrub the top speaker mesh.' },
      { id: 's2', title: 'Check Screen Protector', description: 'Ensure your screen protector isn\'t covering the tiny slit at the top.' },
      { id: 's3', title: 'Disable "Phone Noise Cancellation"', description: 'Settings > Accessibility > Audio/Visual > Toggle OFF to see if it improves clarity.' }
    ],
    technicianAdvice: '90% of quiet earpieces are caused by skin oils and makeup clogging the fine metal mesh.',
    relatedProblemIds: ['p1760002', 'p240001'],
    createdAt: '2026-02-23T08:00:00Z'
  },
  {
    id: 'p1760002',
    title: 'Phone "Vibration" is Rattling',
    slug: 'phone-vibration-rattling',
    shortDescription: 'When the phone vibrates, it makes a loud buzzing or rattling noise instead of a smooth hum.',
    category: 'phone',
    subcategory: 'Hardware',
    symptoms: ['Loud vibration', 'Rattling sound', 'Weak haptics'],
    causes: ['Loose internal screw', 'Damaged Taptic Engine / Linear Motor', 'Loose case'],
    steps: [
      { id: 's1', title: 'Test Without Case', description: 'Ensure it\'s the phone rattling and not a loose button on your case.' },
      { id: 's2', title: 'Lower Vibration Intensity', description: 'Settings > Sounds & Haptics > Reduce the strength to stop the rattle.' },
      { id: 's3', title: 'Check for Loose Screen', description: 'If the screen is slightly lifting, it can rattle against the frame.' }
    ],
    technicianAdvice: 'If the vibration motor itself is loose, it requires opening the phone to tighten the mounting screws.',
    relatedProblemIds: ['p1760001', 'p600002'],
    createdAt: '2026-02-23T09:00:00Z'
  },
  // --- Laptop: Hardware & Maintenance ---
  {
    id: 'p1770001',
    title: 'Laptop "Hinge" is Making a Cracking Sound',
    slug: 'laptop-hinge-cracking-sound',
    shortDescription: 'Every time you open or close the laptop, you hear a loud "pop" or "crack".',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Cracking noise', 'Stiff movement', 'Lid feels loose'],
    causes: ['Tight hinge', 'Broken plastic mount', 'Loose screw'],
    steps: [
      { id: 's1', title: 'Stop Using the Lid', description: 'If it\'s cracking, every movement is damaging the plastic frame. Keep it open.' },
      { id: 's2', title: 'Inspect for Gaps', description: 'Look at the corner of the laptop. If the case is splitting open, the hinge mount is broken.' },
      { id: 's3', title: 'Loosen the Hinge Nut', description: 'Advanced: Open the laptop and slightly loosen the tension nut on the hinge.' }
    ],
    technicianAdvice: 'Laptop hinges are often screwed into thin plastic; if the hinge gets too stiff, it will rip the screws out of the frame.',
    relatedProblemIds: ['p1770002', 'p1670002'],
    createdAt: '2026-02-24T08:00:00Z'
  },
  {
    id: 'p1770002',
    title: 'Laptop "Webcam" is Grainy/Dark',
    slug: 'laptop-webcam-grainy-dark',
    shortDescription: 'Your video quality on Zoom or Teams looks terrible, even in a bright room.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Grainy video', 'Dark image', 'Low resolution'],
    causes: ['Low-quality sensor (720p)', 'Privacy shutter partially closed', 'Software "Beauty" filters'],
    steps: [
      { id: 's1', title: 'Clean the Lens', description: 'Wipe the tiny camera lens at the top of the screen; fingerprints make it look foggy.' },
      { id: 's2', title: 'Check Privacy Shutter', description: 'Ensure the physical slider is fully open.' },
      { id: 's3', title: 'Improve Lighting', description: 'Laptop cameras have tiny sensors; they need a lot of light to look decent.' }
    ],
    technicianAdvice: 'Most laptops still use 720p cameras from 2010; for professional quality, an external 1080p/4K webcam is necessary.',
    relatedProblemIds: ['p1770001', 'p500001'],
    createdAt: '2026-02-24T09:00:00Z'
  },
  // --- Internet: WiFi & Range ---
  {
    id: 'p1780001',
    title: 'WiFi "Signal" Disappears When Door is Closed',
    slug: 'wifi-signal-disappears-door-closed',
    shortDescription: 'You have great WiFi in the hallway, but it drops to zero as soon as you close your bedroom door.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Signal drop', 'Disconnects', 'Door-dependent speed'],
    causes: ['Solid wood/Metal door', 'Mirror on the door', 'Foil insulation'],
    steps: [
      { id: 's1', title: 'Check for Mirrors', description: 'Mirrors are made of a thin layer of metal, which is a perfect WiFi shield.' },
      { id: 's2', title: 'Move Router Position', description: 'Try to get a "line of sight" through the doorway if possible.' },
      { id: 's3', title: 'Install a WiFi Node', description: 'Place a mesh node inside the room to maintain a strong local signal.' }
    ],
    technicianAdvice: 'Modern fire doors often have metal cores or foil backing that act as a "Faraday cage" for WiFi.',
    relatedProblemIds: ['p1780002', 'p430002'],
    createdAt: '2026-02-25T08:00:00Z'
  },
  {
    id: 'p1780002',
    title: 'WiFi "Extender" is Making Internet Slower',
    slug: 'wifi-extender-making-internet-slower',
    shortDescription: 'You added an extender to fix range, but now the internet feels slower than before.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['High latency', 'Half speed', 'Buffering'],
    causes: ['Extender too far from router', 'Half-duplex penalty', 'Channel interference'],
    steps: [
      { id: 's1', title: 'Move Extender Closer', description: 'The extender needs a strong signal from the router to "repeat" it effectively.' },
      { id: 's2', title: 'Use a Different SSID', description: 'Give the extender a different name (e.g., Home_EXT) so you can manually choose the best signal.' },
      { id: 's3', title: 'Switch to Mesh', description: 'Mesh systems use a dedicated "backhaul" to avoid the 50% speed penalty of extenders.' }
    ],
    technicianAdvice: 'Standard WiFi extenders cut your bandwidth in half because they have to talk to the router and the device on the same channel.',
    relatedProblemIds: ['p1780001', 'p1430001'],
    createdAt: '2026-02-25T09:00:00Z'
  },
  // --- App: Functionality & UI ---
  {
    id: 'p1790001',
    title: 'App "Dark Mode" Not Working',
    slug: 'app-dark-mode-not-working',
    shortDescription: 'Your phone is in Dark Mode, but a specific app stays bright white.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Bright UI', 'Settings ignored', 'Eye strain'],
    causes: ['App doesn\'t support system dark mode', 'In-app setting override'],
    steps: [
      { id: 's1', title: 'Check In-App Settings', description: 'Look for "Theme" or "Appearance" inside the app\'s own settings menu.' },
      { id: 's2', title: 'Force Dark Mode (Android)', description: 'Developer Options > Override force-dark. (Warning: can make some apps look weird).' },
      { id: 's3', title: 'Update the App', description: 'Developers often add dark mode support in newer versions.' }
    ],
    technicianAdvice: 'Some older apps have "hardcoded" white backgrounds that can\'t be changed without a developer update.',
    relatedProblemIds: ['p1790002', 'p1510002'],
    createdAt: '2026-02-26T08:00:00Z'
  },
  {
    id: 'p1790002',
    title: 'App "Share Sheet" is Slow to Load',
    slug: 'app-share-sheet-slow',
    shortDescription: 'When you click "Share", the menu takes several seconds to appear or freezes the phone.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Delayed menu', 'UI freeze', 'Laggy sharing'],
    causes: ['Too many suggested contacts', 'Slow app integration', 'System bloat'],
    steps: [
      { id: 's1', title: 'Disable "Show Contact Suggestions"', description: 'Settings > Siri & Search > Show when Sharing (iOS) or similar on Android.' },
      { id: 's2', title: 'Restart the Phone', description: 'Clears the cache of the sharing system.' },
      { id: 's3', title: 'Remove Unused Apps', description: 'Fewer apps means a smaller, faster share menu.' }
    ],
    technicianAdvice: 'The share sheet tries to predict who you want to talk to; if you have thousands of contacts, this prediction can be slow.',
    relatedProblemIds: ['p1790001', 'p1620002'],
    createdAt: '2026-02-26T09:00:00Z'
  },
  // --- Gaming: Hardware & Connectivity ---
  {
    id: 'p1800001',
    title: 'Game "Mouse" Feels Heavy (Input Lag)',
    slug: 'game-mouse-heavy-input-lag',
    shortDescription: 'Your mouse movement feels like it\'s "swimming" or delayed, making it hard to aim.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['Delayed movement', 'Floaty aim', 'Unresponsive'],
    causes: ['V-Sync enabled', 'Low polling rate', 'Wireless interference'],
    steps: [
      { id: 's1', title: 'Disable V-Sync', description: 'V-Sync adds significant input lag; use G-Sync or FreeSync instead.' },
      { id: 's2', title: 'Increase Polling Rate', description: 'Ensure your mouse is set to 1000Hz in its software.' },
      { id: 's3', title: 'Disable "Enhance Pointer Precision"', description: 'Windows Settings > Mouse > Additional mouse options > Pointer Options. Uncheck this.' }
    ],
    technicianAdvice: 'Input lag is the time between moving the mouse and seeing the cursor move; even 50ms can feel "heavy" to a gamer.',
    relatedProblemIds: ['p1800002', 'p1450001'],
    createdAt: '2026-02-27T08:00:00Z'
  },
  {
    id: 'p1800002',
    title: 'Game "Monitor" No Signal (DisplayPort)',
    slug: 'game-monitor-no-signal-displayport',
    shortDescription: 'You use a DisplayPort cable, but the monitor says "No Signal" while HDMI works fine.',
    category: 'gaming',
    subcategory: 'Hardware',
    symptoms: ['Black screen', 'No signal', 'HDMI works but DP doesn\'t'],
    causes: ['Static buildup in monitor', 'Bad DP cable', 'Deep sleep mode'],
    steps: [
      { id: 's1', title: 'The "Power Cycle" Fix', description: 'Unplug the monitor from the wall AND the PC. Wait 2 minutes. Plug back in.' },
      { id: 's2', title: 'Disable "DP Deep Sleep"', description: 'In the monitor\'s OSD menu, turn off power saving features for DisplayPort.' },
      { id: 's3', title: 'Try a VESA Certified Cable', description: 'Cheap DP cables often have a "Pin 20" issue that causes power problems.' }
    ],
    technicianAdvice: 'DisplayPort is more sensitive to "handshake" errors than HDMI; a full power reset usually fixes it.',
    relatedProblemIds: ['p1800001', 'p320002'],
    createdAt: '2026-02-27T09:00:00Z'
  }
];
