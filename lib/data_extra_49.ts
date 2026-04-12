import { Problem } from './types';

export const EXTRA_PROBLEMS_49: Problem[] = [
  // --- Phone: Software & Customization ---
  {
    id: 'p1960001',
    title: 'Phone "Widgets" Disappearing After Reboot',
    slug: 'phone-widgets-disappearing-reboot',
    shortDescription: 'You set up your home screen with widgets, but they are gone every time you restart your phone.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Missing widgets', 'Empty spaces on home screen', 'Reset layout'],
    causes: ['App installed on SD card', 'Launcher bug', 'Battery optimization'],
    steps: [
      { id: 's1', title: 'Move App to Internal Storage', description: 'Widgets won\'t load if the app is on an SD card that hasn\'t mounted yet.' },
      { id: 's2', title: 'Disable Battery Optimization for Launcher', description: 'Ensure the home screen app isn\'t being killed in the background.' },
      { id: 's3', title: 'Update Launcher App', description: 'Check for updates to Nova, Pixel Launcher, or Samsung Home.' }
    ],
    technicianAdvice: 'Widgets require the parent app to be active; if the app is "sleeping" or on slow external storage, the widget will fail to load.',
    relatedProblemIds: ['p1960002', 'p1840001'],
    createdAt: '2026-03-15T08:00:00Z'
  },
  {
    id: 'p1960002',
    title: 'Phone "Wallpaper" is Blurry',
    slug: 'phone-wallpaper-blurry',
    shortDescription: 'You set a high-quality photo as your wallpaper, but it looks pixelated or fuzzy on the home screen.',
    category: 'phone',
    subcategory: 'Software',
    symptoms: ['Blurry image', 'Pixelation', 'Low quality'],
    causes: ['Incorrect resolution', 'App compression', 'Parallax effect stretching'],
    steps: [
      { id: 's1', title: 'Use Native Resolution', description: 'Ensure the image matches your phone\'s screen resolution (e.g., 1080x2400).' },
      { id: 's2', title: 'Disable "Perspective Zoom"', description: 'On iPhone, turn off the effect that moves the wallpaper, as it crops and zooms the image.' },
      { id: 's3', title: 'Set via Gallery App', description: 'Sometimes setting a wallpaper through a 3rd party app compresses it; use the built-in gallery instead.' }
    ],
    technicianAdvice: 'If you use a small photo, the phone has to "stretch" it to fit the screen, causing blur.',
    relatedProblemIds: ['p1960001', 'p1510002'],
    createdAt: '2026-03-15T09:00:00Z'
  },
  // --- Laptop: Hardware & Maintenance ---
  {
    id: 'p1970001',
    title: 'Laptop "Bezel" is Peeling Off',
    slug: 'laptop-bezel-peeling',
    shortDescription: 'The plastic or rubber frame around the screen is coming loose or unglued.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Gaps around screen', 'Sticky residue', 'Bezel lifting'],
    causes: ['Heat from screen', 'Old adhesive', 'Physical strain'],
    steps: [
      { id: 's1', title: 'Avoid Direct Sunlight', description: 'Heat can melt the adhesive holding the bezel in place.' },
      { id: 's2', title: 'Use Double-Sided Electronics Tape', description: 'A small strip of 3M 300LSE tape can re-secure the bezel.' },
      { id: 's3', title: 'Check Hinge Tension', description: 'If the bezel peels when opening the lid, the hinge might be too stiff.' }
    ],
    technicianAdvice: 'Be careful not to press on the LCD panel itself while trying to re-stick the bezel.',
    relatedProblemIds: ['p1970002', 'p1770001'],
    createdAt: '2026-03-16T08:00:00Z'
  },
  {
    id: 'p1970002',
    title: 'Laptop "Rubber Feet" Falling Off',
    slug: 'laptop-rubber-feet-falling-off',
    shortDescription: 'The small rubber pads on the bottom of the laptop have come off, making it slide on desks.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Laptop sliding', 'Scratched bottom', 'Uneven sitting'],
    causes: ['Heat melting glue', 'Friction from sliding in/out of bags'],
    steps: [
      { id: 's1', title: 'Clean the Recess', description: 'Use alcohol to remove all old glue residue before re-applying.' },
      { id: 's2', title: 'Use Cyanoacrylate (Super Glue)', description: 'A tiny drop can permanently re-attach the rubber foot.' },
      { id: 's3', title: 'Buy Replacement Feet', description: 'You can find model-specific rubber feet on eBay or Amazon.' }
    ],
    technicianAdvice: 'Rubber feet are important for airflow; without them, the laptop sits too flat and can overheat.',
    relatedProblemIds: ['p1970001', 'p230001'],
    createdAt: '2026-03-16T09:00:00Z'
  },
  // --- Internet: WiFi & Speed ---
  {
    id: 'p1980001',
    title: 'WiFi "Speed" is Fast but "Upload" is Zero',
    slug: 'wifi-upload-speed-zero',
    shortDescription: 'You can watch videos fine, but you can\'t send emails, post to social media, or join video calls.',
    category: 'internet',
    subcategory: 'Speed',
    symptoms: ['Cannot send data', 'Video calls fail', 'Fast download but no upload'],
    causes: ['Upstream noise on cable line', 'Router firewall', 'ISP outage'],
    steps: [
      { id: 's1', title: 'Check Cable Connections', description: 'Ensure the coax cable is tight on both the modem and the wall.' },
      { id: 's2', title: 'Disable Router Firewall Temporarily', description: 'See if a security setting is blocking outgoing traffic.' },
      { id: 's3', title: 'Call ISP for "Line Noise" Check', description: 'This is often a physical issue with the wire outside your house.' }
    ],
    technicianAdvice: 'Upload traffic uses a different frequency than download; it\'s possible for one to be "noisy" while the other is clean.',
    relatedProblemIds: ['p1980002', 'p1680001'],
    createdAt: '2026-03-17T08:00:00Z'
  },
  {
    id: 'p1980002',
    title: 'WiFi "Roaming" Not Working (Stuck on far router)',
    slug: 'wifi-roaming-not-working',
    shortDescription: 'You walk from the living room to the bedroom, but your phone stays connected to the weak living room signal.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Stuck on weak signal', 'Slow speed near node', 'Manual toggle required'],
    causes: ['"Sticky" client behavior', 'Overlap too high', 'Roaming protocols (802.11k/v/r) disabled'],
    steps: [
      { id: 's1', title: 'Enable Fast Roaming', description: 'In your mesh/router settings, turn on 802.11r or "Fast Transition".' },
      { id: 's2', title: 'Lower Transmit Power', description: 'If the routers are too "loud", the phone won\'t think it needs to switch.' },
      { id: 's3', title: 'Set "Minimum RSSI"', description: 'Advanced: Tell the router to "kick" clients if their signal drops below a certain level.' }
    ],
    technicianAdvice: 'The DEVICE decides when to roam, not the router. Some devices are just "lazy" and hold onto weak signals.',
    relatedProblemIds: ['p1980001', 'p430002'],
    createdAt: '2026-03-17T09:00:00Z'
  },
  // --- App: Functionality & UI ---
  {
    id: 'p1990001',
    title: 'App "Keyboard" Covers the Text Box',
    slug: 'app-keyboard-covers-text-box',
    shortDescription: 'When you type, the keyboard pops up and hides the very thing you are typing into.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Cannot see what I\'m typing', 'UI doesn\'t shift up', 'Blind typing'],
    causes: ['App layout bug', 'Third-party keyboard height', 'System UI glitch'],
    steps: [
      { id: 's1', title: 'Change Keyboard Height', description: 'In Gboard or SwiftKey settings, reduce the keyboard size.' },
      { id: 's2', title: 'Use "Floating" Mode', description: 'Move the keyboard to a different part of the screen.' },
      { id: 's3', title: 'Update the App', description: 'This is usually a failure of the app to "resize" its window when the keyboard appears.' }
    ],
    technicianAdvice: 'This is a common "coding oversight" where the developer didn\'t account for large keyboards on small screens.',
    relatedProblemIds: ['p1990002', 'p1940001'],
    createdAt: '2026-03-18T08:00:00Z'
  },
  {
    id: 'p1990002',
    title: 'App "Refresh" Gesture Not Working',
    slug: 'app-refresh-gesture-not-working',
    shortDescription: 'You pull down on the screen to refresh, but the loading spinner never appears or nothing happens.',
    category: 'app',
    subcategory: 'Functionality',
    symptoms: ['Cannot refresh', 'Stale data', 'Gesture ignored'],
    causes: ['Network timeout', 'App state frozen', 'Touch conflict'],
    steps: [
      { id: 's1', title: 'Force Stop and Restart', description: 'Clears the app\'s temporary state.' },
      { id: 's2', title: 'Check Internet Connection', description: 'If you are offline, the refresh gesture might be disabled.' },
      { id: 's3', title: 'Clear App Cache', description: 'Removes any corrupt local data that might be blocking the refresh.' }
    ],
    technicianAdvice: 'If the "Pull to Refresh" fails, try finding a manual "Refresh" button in the app settings or menu.',
    relatedProblemIds: ['p1990001', 'p1440001'],
    createdAt: '2026-03-18T09:00:00Z'
  },
  // --- Gaming: Performance & Graphics ---
  {
    id: 'p2000001',
    title: 'Game "Brightness" is Too High (Blacks look gray)',
    slug: 'game-brightness-too-high',
    shortDescription: 'Even at the lowest brightness setting, the dark areas of the game look gray and washed out.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Washed out image', 'No true blacks', 'Gray shadows'],
    causes: ['"Full" vs "Limited" RGB range mismatch', 'Monitor black equalizer'],
    steps: [
      { id: 's1', title: 'Match RGB Range', description: 'Ensure BOTH your GPU (NVIDIA/AMD) and Monitor are set to "Full" (0-255).' },
      { id: 's2', title: 'Disable "Black Equalizer"', description: 'In monitor settings, turn off features that artificially brighten shadows.' },
      { id: 's3', title: 'Check Game Gamma', description: 'Adjust the in-game gamma slider until the "barely visible" icon is correct.' }
    ],
    technicianAdvice: 'If your PC sends "Full" range but your monitor expects "Limited", blacks will look gray.',
    relatedProblemIds: ['p2000002', 'p1950001'],
    createdAt: '2026-03-19T08:00:00Z'
  },
  {
    id: 'p2000002',
    title: 'Game "Resolution" Changes Automatically',
    slug: 'game-resolution-changes-automatically',
    shortDescription: 'The game starts in 4K but suddenly drops to a blurry resolution during combat.',
    category: 'gaming',
    subcategory: 'Performance',
    symptoms: ['Blurry image', 'Fluctuating resolution', 'Sudden UI resize'],
    causes: ['Dynamic Resolution Scaling (DRS)', 'VRAM limit reached', 'Windows "Focus Assist"'],
    steps: [
      { id: 's1', title: 'Disable "Dynamic Resolution"', description: 'In game settings, turn off DRS or "Target FPS" scaling.' },
      { id: 's2', title: 'Lower Texture Quality', description: 'If you run out of VRAM, the game might downscale to prevent a crash.' },
      { id: 's3', title: 'Check for Background Apps', description: 'Ensure no other app is trying to take control of the resolution.' }
    ],
    technicianAdvice: 'DRS is a great feature for consoles, but on PC it can be jarring if the "jumps" are too large.',
    relatedProblemIds: ['p2000001', 'p1750002'],
    createdAt: '2026-03-19T09:00:00Z'
  }
];
