import { Problem } from './types';

export const EXTRA_PROBLEMS_33: Problem[] = [
  // --- Wearables: Software & Display ---
  {
    id: 'p1160001',
    title: 'Smartwatch "Watch Face" Not Changing',
    slug: 'smartwatch-watch-face-not-changing',
    shortDescription: 'You select a new face in the app, but the watch stays on the old one.',
    category: 'wearable',
    subcategory: 'Software',
    symptoms: ['Face not updating', 'Sync failed', 'App error'],
    causes: ['Bluetooth sync error', 'Storage full on watch', 'Incompatible face version'],
    steps: [
      { id: 's1', title: 'Restart Both Devices', description: 'Forces a fresh sync of the watch face data.' },
      { id: 's2', title: 'Delete Old Faces', description: 'Free up space on the watch for new designs.' },
      { id: 's3', title: 'Update the Watch App', description: 'Ensure the phone app is compatible with the watch firmware.' }
    ],
    technicianAdvice: 'Large, complex watch faces can take several minutes to transfer over Bluetooth.',
    relatedProblemIds: ['p1160002', 'p960001'],
    createdAt: '2025-12-25T08:00:00Z'
  },
  {
    id: 'p1160002',
    title: 'Smartwatch "Screen Brightness" Stuck',
    slug: 'smartwatch-screen-brightness-stuck',
    shortDescription: 'The watch screen is too dim or too bright and won\'t adjust even if you change the settings.',
    category: 'wearable',
    subcategory: 'Software',
    symptoms: ['Brightness won\'t change', 'Auto-brightness failed', 'Hard to see'],
    causes: ['Software hang', 'Ambient light sensor failure', 'Low power mode'],
    steps: [
      { id: 's1', title: 'Disable Auto-Brightness', description: 'Try setting it manually to see if the slider works.' },
      { id: 's2', title: 'Turn Off Power Reserve', description: 'Many watches lock brightness to minimum when the battery is low.' },
      { id: 's3', title: 'Force Restart', description: 'Clears any system-level display service hangs.' }
    ],
    technicianAdvice: 'If the screen is permanently dim, the backlight or OLED driver might be failing.',
    relatedProblemIds: ['p1160001', 'p460001'],
    createdAt: '2025-12-25T09:00:00Z'
  },
  // --- Audio: Connectivity & Quality ---
  {
    id: 'p1170001',
    title: 'Bluetooth Headphones "Pairing" Failed',
    slug: 'bluetooth-headphones-pairing-failed',
    shortDescription: 'The headphones are in pairing mode, but your phone or laptop cannot find them.',
    category: 'audio',
    subcategory: 'Connectivity',
    symptoms: ['Device not found', 'Pairing rejected', 'Timeout'],
    causes: ['Already connected to another device', 'Bluetooth cache full', 'Distance'],
    steps: [
      { id: 's1', title: 'Reset the Headphones', description: 'Follow the manual to clear the pairing list (usually a long press of multiple buttons).' },
      { id: 's2', title: 'Turn Off Other Bluetooth Devices', description: 'Ensure they aren\'t auto-connecting to your tablet or TV.' },
      { id: 's3', title: 'Restart Phone Bluetooth', description: 'Toggle Bluetooth off and on in your phone settings.' }
    ],
    technicianAdvice: 'Most headphones can only be in "Pairing Mode" for 60-120 seconds before they time out.',
    relatedProblemIds: ['p1170002', 'p970001'],
    createdAt: '2025-12-26T08:00:00Z'
  },
  {
    id: 'p1170002',
    title: 'Audio "Static" During Phone Calls',
    slug: 'audio-static-phone-calls',
    shortDescription: 'Music sounds fine, but when you are on a call, there is a loud static or buzzing noise.',
    category: 'audio',
    subcategory: 'Connectivity',
    symptoms: ['Static on calls', 'Muffled voice', 'Buzzing'],
    causes: ['Bluetooth "Hands-Free" profile low quality', 'Interference', 'Mic failure'],
    steps: [
      { id: 's1', title: 'Move Away from WiFi Router', description: 'WiFi can interfere with the low-bandwidth Bluetooth call profile.' },
      { id: 's2', title: 'Disable "HD Voice" (if possible)', description: 'Sometimes the high-quality call codec causes issues on older headsets.' },
      { id: 's3', title: 'Test with Wired Headset', description: 'Rule out the phone\'s internal cellular radio causing the noise.' }
    ],
    technicianAdvice: 'Bluetooth uses a different, lower-quality "profile" for calls than it does for music.',
    relatedProblemIds: ['p1170001', 'p200001'],
    createdAt: '2025-12-26T09:00:00Z'
  },
  // --- Printers: Software & Connectivity ---
  {
    id: 'p1180001',
    title: 'Printer "Spooler Service" Error',
    slug: 'printer-spooler-service-error',
    shortDescription: 'You try to print and get an error saying the "Print Spooler" service is not running.',
    category: 'printer',
    subcategory: 'Software',
    symptoms: ['Cannot print', 'Service error', 'Empty printer list'],
    causes: ['Corrupt print job', 'Windows system error', 'Driver conflict'],
    steps: [
      { id: 's1', title: 'Restart Spooler Service', description: 'Services.msc > Print Spooler > Right-click > Restart.' },
      { id: 's2', title: 'Clear Spooler Files', description: 'Delete everything in C:\\Windows\\System32\\spool\\PRINTERS.' },
      { id: 's3', title: 'Update Printer Driver', description: 'A bad driver can cause the spooler service to crash repeatedly.' }
    ],
    technicianAdvice: 'The spooler is the "waiting room" for print jobs; if one job is corrupt, it blocks everything.',
    relatedProblemIds: ['p1180002', 'p300001'],
    createdAt: '2025-12-27T08:00:00Z'
  },
  {
    id: 'p1180002',
    title: 'Printer "IP Address" Changed (Network Error)',
    slug: 'printer-ip-address-changed',
    shortDescription: 'The printer was working yesterday, but now the computer says it\'s "Offline" because its address changed.',
    category: 'printer',
    subcategory: 'Connectivity',
    symptoms: ['Printer offline', 'Cannot find printer', 'IP mismatch'],
    causes: ['DHCP lease expired', 'Router reboot'],
    steps: [
      { id: 's1', title: 'Set a Static IP', description: 'Go to the printer\'s network settings and assign a permanent IP address.' },
      { id: 's2', title: 'Update Port in Windows', description: 'Printer Properties > Ports > Configure Port > Enter the new IP address.' },
      { id: 's3', title: 'Re-add the Printer', description: 'The easiest way to let Windows find the new address automatically.' }
    ],
    technicianAdvice: 'Always give network printers a static IP to avoid "Offline" errors after a power cut.',
    relatedProblemIds: ['p1180001', 'p730001'],
    createdAt: '2025-12-27T09:00:00Z'
  },
  // --- Smart Home: Hardware & Setup ---
  {
    id: 'p1190001',
    title: 'Smart Camera "SD Card" Not Formatted',
    slug: 'smart-camera-sd-card-not-formatted',
    shortDescription: 'You insert a card for local recording, but the camera says "No SD card" or "Format failed".',
    category: 'smart-home',
    subcategory: 'Hardware',
    symptoms: ['No recording', 'Format error', 'Card not found'],
    causes: ['Incompatible card size', 'Wrong file system (FAT32 vs exFAT)', 'Fake/Slow card'],
    steps: [
      { id: 's1', title: 'Format on Computer', description: 'Use a PC to format the card to FAT32 (for cards <32GB) or exFAT.' },
      { id: 's2', title: 'Check Max Capacity', description: 'Ensure the camera supports the card size (e.g., some only support up to 128GB).' },
      { id: 's3', title: 'Use "High Endurance" Card', description: 'Cameras write constantly; standard cards will fail quickly.' }
    ],
    technicianAdvice: 'Cheap SD cards from unknown brands often have fake capacities and will fail in smart cameras.',
    relatedProblemIds: ['p1190002', 'p740001'],
    createdAt: '2025-12-28T08:00:00Z'
  },
  {
    id: 'p1190002',
    title: 'Smart Plug "Clicking" but No Power',
    slug: 'smart-plug-clicking-no-power',
    shortDescription: 'You hear the relay click when you turn it on, but the device plugged into it doesn\'t get power.',
    category: 'smart-home',
    subcategory: 'Hardware',
    symptoms: ['Clicking sound', 'No power output', 'App says "On"'],
    causes: ['Internal relay failure', 'Blown fuse', 'Burned contacts'],
    steps: [
      { id: 's1', title: 'Test with a Lamp', description: 'Ensure the device you are plugging in isn\'t the problem.' },
      { id: 's2', title: 'Check for Overload', description: 'Did you plug in a heater or AC? You might have burned the internal switch.' },
      { id: 's3', title: 'Factory Reset', description: 'Rule out a software glitch that is misreporting the relay state.' }
    ],
    technicianAdvice: 'The "click" is the physical switch moving; if the contacts inside are burned, no electricity will flow.',
    relatedProblemIds: ['p1190001', 'p490002'],
    createdAt: '2025-12-28T09:00:00Z'
  },
  // --- Laptop: Performance & Software ---
  {
    id: 'p1200001',
    title: 'Laptop "Touchscreen" Not Working',
    slug: 'laptop-touchscreen-not-working',
    shortDescription: 'The screen displays fine, but it doesn\'t respond to your fingers.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['No touch response', 'Ghost touches', 'Inaccurate tracking'],
    causes: ['Disabled in Device Manager', 'Driver conflict', 'Hardware failure'],
    steps: [
      { id: 's1', title: 'Enable HID-Compliant Touch Screen', description: 'Device Manager > Human Interface Devices > Right-click "HID-compliant touch screen" > Enable.' },
      { id: 's2', title: 'Clean the Screen', description: 'Oil and dirt can prevent the capacitive sensor from working.' },
      { id: 's3', title: 'Calibrate Touch', description: 'Control Panel > Tablet PC Settings > Calibrate.' }
    ],
    technicianAdvice: 'If the screen is cracked, even a tiny hairline fracture can kill the touch functionality.',
    relatedProblemIds: ['p1200002', 'p460002'],
    createdAt: '2025-12-29T08:00:00Z'
  },
  {
    id: 'p1200002',
    title: 'Laptop "Speakers" Popping Sound',
    slug: 'laptop-speakers-popping',
    shortDescription: 'You hear a "pop" or "click" sound every time audio starts or stops playing.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Popping sound', 'Clicking', 'Audio delay'],
    causes: ['Power management glitch', 'Bad audio driver', 'Static buildup'],
    steps: [
      { id: 's1', title: 'Disable Audio Power Management', description: 'Advanced: Requires registry edits to stop the audio chip from "sleeping".' },
      { id: 's2', title: 'Update Audio Drivers', description: 'Use the official Realtek or manufacturer drivers.' },
      { id: 's3', title: 'Test with Headphones', description: 'If headphones also pop, it\'s a software/driver issue. If not, it\'s the speakers.' }
    ],
    technicianAdvice: 'The "pop" is often the audio amplifier turning on and off to save battery power.',
    relatedProblemIds: ['p1200001', 'p400001'],
    createdAt: '2025-12-29T09:00:00Z'
  }
];
