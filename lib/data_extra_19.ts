import { Problem } from './types';

export const EXTRA_PROBLEMS_19: Problem[] = [
  // --- Wearables: Display & Touch ---
  {
    id: 'p460001',
    title: 'Smartwatch Screen "Burn-in" (Image Retention)',
    slug: 'smartwatch-screen-burn-in',
    shortDescription: 'You can see a faint ghost of the watch face even when the screen changes.',
    category: 'wearable',
    subcategory: 'Hardware',
    symptoms: ['Ghost images', 'Discoloration', 'Static shadows'],
    causes: ['OLED degradation', 'High brightness for long periods', 'Static UI elements'],
    steps: [
      { id: 's1', title: 'Change Watch Face', description: 'Use a face with different colors and layouts to "exercise" the pixels.' },
      { id: 's2', title: 'Lower Brightness', description: 'Prevents further degradation of the OLED material.' },
      { id: 's3', title: 'Enable "Pixel Shift"', description: 'Check if your watch has a setting to slightly move the UI to prevent burn-in.' }
    ],
    technicianAdvice: 'True OLED burn-in is permanent hardware damage and cannot be fixed with software.',
    relatedProblemIds: ['p460002', 'p460003'],
    createdAt: '2025-10-16T08:00:00Z'
  },
  {
    id: 'p460002',
    title: 'Smartwatch Touchscreen Not Responding',
    slug: 'smartwatch-touchscreen-not-responding',
    shortDescription: 'The watch turns on, but tapping or swiping the screen does nothing.',
    category: 'wearable',
    subcategory: 'Hardware',
    symptoms: ['Unresponsive touch', 'Ghost touches', 'Frozen screen'],
    causes: ['Water on screen', 'Dirty sensor', 'Digitizer failure'],
    steps: [
      { id: 's1', title: 'Dry the Screen', description: 'Capacitive screens don\'t work well when wet or in high humidity.' },
      { id: 's2', title: 'Force Restart', description: 'Hold the side buttons for 10-15 seconds to force a reboot.' },
      { id: 's3', title: 'Clean the Edges', description: 'Dirt trapped under the bezel can register as a constant touch.' }
    ],
    technicianAdvice: 'If the screen is cracked, the touch layer (digitizer) is likely severed.',
    relatedProblemIds: ['p460001', 'p460004'],
    createdAt: '2025-10-16T09:00:00Z'
  },
  // --- Audio: Wired & Jacks ---
  {
    id: 'p470001',
    title: 'Headphone Jack "Static" When Rotating Plug',
    slug: 'headphone-jack-static-rotating',
    shortDescription: 'You hear crackling or the sound cuts out if you wiggle or rotate the headphone plug.',
    category: 'audio',
    subcategory: 'Hardware',
    symptoms: ['Crackling sound', 'One side cuts out', 'Static'],
    causes: ['Dirty jack', 'Loose internal solder', 'Oxidized plug'],
    steps: [
      { id: 's1', title: 'Clean the Plug', description: 'Wipe the metal headphone jack with a dry cloth or a tiny bit of alcohol.' },
      { id: 's2', title: 'Clean the Port', description: 'Use a toothpick to gently remove lint from the bottom of the jack.' },
      { id: 's3', title: 'Try Different Headphones', description: 'Rules out a broken wire in the headphone cable itself.' }
    ],
    technicianAdvice: 'If cleaning doesn\'t work, the internal pins of the jack are likely bent or loose from the motherboard.',
    relatedProblemIds: ['p470002', 'p470003'],
    createdAt: '2025-10-17T08:00:00Z'
  },
  {
    id: 'p470002',
    title: 'USB-C to 3.5mm Adapter Not Recognized',
    slug: 'usb-c-headphone-adapter-not-recognized',
    shortDescription: 'You plug in your dongle, but the phone continues to play music through its speakers.',
    category: 'audio',
    subcategory: 'Connectivity',
    symptoms: ['No audio through adapter', '"Device not supported" error', 'Speaker still active'],
    causes: ['Incompatible DAC (Active vs Passive)', 'Dirty USB-C port', 'Software bug'],
    steps: [
      { id: 's1', title: 'Check Compatibility', description: 'Some phones (like Pixel/Samsung) require "Active" adapters with a built-in DAC chip.' },
      { id: 's2', title: 'Clean USB-C Port', description: 'Lint in the port can prevent the data pins from connecting.' },
      { id: 's3', title: 'Restart Phone', description: 'Forces the system to re-scan the USB bus for audio devices.' }
    ],
    technicianAdvice: 'Apple\'s USB-C to 3.5mm adapter is actually one of the best and most compatible options available.',
    relatedProblemIds: ['p470001', 'p470004'],
    createdAt: '2025-10-17T09:00:00Z'
  },
  // --- Printers: Maintenance & Errors ---
  {
    id: 'p480001',
    title: 'Printer "Waste Ink Pad Full" Error',
    slug: 'printer-waste-ink-pad-full',
    shortDescription: 'The printer stops working and says a service is required because the ink pads are at the end of their life.',
    category: 'printer',
    subcategory: 'Hardware',
    symptoms: ['Service required message', 'Printer locked', 'Flashing lights'],
    causes: ['Counter reached limit', 'Physical ink saturation'],
    steps: [
      { id: 's1', title: 'Use Reset Utility', description: 'Some manufacturers provide a one-time reset tool (e.g., Epson Maintenance Utility).' },
      { id: 's2', title: 'Replace the Pads', description: 'This is a messy physical repair; the sponge pads inside must be replaced.' },
      { id: 's3', title: 'Check for External Tank', description: 'Some users install "waste ink bottles" to bypass the pads entirely.' }
    ],
    technicianAdvice: 'This is a controversial "planned obsolescence" feature, but it does prevent ink from leaking onto your desk.',
    relatedProblemIds: ['p480002', 'p480003'],
    createdAt: '2025-10-18T08:00:00Z'
  },
  {
    id: 'p480002',
    title: 'Printer "Scanner Lid Open" False Error',
    slug: 'printer-scanner-lid-open-false',
    shortDescription: 'The printer won\'t print because it thinks the lid is open, even though it is closed.',
    category: 'printer',
    subcategory: 'Hardware',
    symptoms: ['"Lid Open" error', 'Cannot start job', 'Beeping'],
    causes: ['Broken plastic tab', 'Stuck sensor switch', 'Misaligned lid'],
    steps: [
      { id: 's1', title: 'Locate the Sensor', description: 'Look for a tiny plastic "finger" or a small hole where the lid meets the body.' },
      { id: 's2', title: 'Manual Press', description: 'Try pressing the sensor with a pen to see if the error goes away.' },
      { id: 's3', title: 'Tape it Down', description: 'If the plastic tab is broken, you can sometimes tape the sensor in the "closed" position.' }
    ],
    technicianAdvice: 'Be careful not to jam the sensor permanently if it\'s an optical one.',
    relatedProblemIds: ['p480001', 'p480004'],
    createdAt: '2025-10-18T09:00:00Z'
  },
  // --- Smart Home: Lighting & Power ---
  {
    id: 'p490001',
    title: 'Smart Bulb "Ghosting" (Glowing when off)',
    slug: 'smart-bulb-ghosting-glowing-off',
    shortDescription: 'The smart bulb stays very dimly lit even when you turn it off in the app.',
    category: 'smart-home',
    subcategory: 'Hardware',
    symptoms: ['Faint glow at night', 'Flickering when off', 'Buzzing'],
    causes: ['Incompatible dimmer switch', 'Residual current', 'Cheap LED driver'],
    steps: [
      { id: 's1', title: 'Replace Dimmer with Standard Switch', description: 'Smart bulbs have their own dimming; they don\'t work with wall dimmers.' },
      { id: 's2', title: 'Swap with Different Brand', description: 'Higher quality bulbs (like Hue) have better isolation from residual current.' },
      { id: 's3', title: 'Check Wiring', description: 'Ensure the neutral wire is correctly connected if using a smart switch.' }
    ],
    technicianAdvice: 'Even a tiny amount of "leakage" current can light up an efficient LED bulb.',
    relatedProblemIds: ['p490002', 'p490003'],
    createdAt: '2025-10-19T08:00:00Z'
  },
  {
    id: 'p490002',
    title: 'Smart Plug "Overload Protection" Tripping',
    slug: 'smart-plug-overload-tripping',
    shortDescription: 'The smart plug turns itself off automatically when you try to use a specific appliance.',
    category: 'smart-home',
    subcategory: 'Hardware',
    symptoms: ['Sudden power off', 'App notification', 'Clicking sound'],
    causes: ['Appliance exceeds wattage', 'Inrush current', 'Faulty plug sensor'],
    steps: [
      { id: 's1', title: 'Check Wattage', description: 'Ensure the appliance (e.g., space heater) is under the plug\'s limit (usually 1800W).' },
      { id: 's2', title: 'Try Different Appliance', description: 'If a lamp trips it, the smart plug itself is faulty.' },
      { id: 's3', title: 'Disable Feature in App', description: 'Some plugs allow you to adjust the sensitivity of the overload protection.' }
    ],
    technicianAdvice: 'Never use smart plugs with high-draw appliances like heaters or AC units unless they are specifically rated for it.',
    relatedProblemIds: ['p490001', 'p490004'],
    createdAt: '2025-10-19T09:00:00Z'
  },
  // --- Laptop: Security & Privacy ---
  {
    id: 'p500001',
    title: 'Laptop Webcam "In Use" by Unknown App',
    slug: 'laptop-webcam-in-use-unknown',
    shortDescription: 'The webcam light is on, but you aren\'t in a video call.',
    category: 'laptop',
    subcategory: 'Security',
    symptoms: ['Webcam light on', '"Camera in use" error', 'Privacy concern'],
    causes: ['Malware/Spyware', 'Background app (Teams/Zoom) stuck', 'Browser tab using camera'],
    steps: [
      { id: 's1', title: 'Check Privacy Settings', description: 'Settings > Privacy > Camera > See which apps have recently accessed it.' },
      { id: 's2', title: 'Run Malware Scan', description: 'Use a reputable antivirus to check for "RATs" (Remote Access Trojans).' },
      { id: 's3', title: 'Force Close Communication Apps', description: 'Sometimes Zoom or Teams doesn\'t release the camera after a call.' }
    ],
    technicianAdvice: 'A physical webcam cover is the only 100% guarantee of privacy.',
    relatedProblemIds: ['p500002', 'p500003'],
    createdAt: '2025-10-20T08:00:00Z'
  },
  {
    id: 'p500002',
    title: 'Laptop "BitLocker Recovery" Screen on Boot',
    slug: 'laptop-bitlocker-recovery-screen',
    shortDescription: 'The laptop asks for a 48-digit recovery key before it will start Windows.',
    category: 'laptop',
    subcategory: 'Security',
    symptoms: ['Blue recovery screen', 'Key required', 'Cannot boot'],
    causes: ['BIOS update', 'Hardware change', 'Motherboard failure'],
    steps: [
      { id: 's1', title: 'Find Key in Microsoft Account', description: 'Log into account.microsoft.com/devices/recoverykey from another device.' },
      { id: 's2', title: 'Check Printouts/USB', description: 'Look for the key where you saved it during initial setup.' },
      { id: 's3', title: 'Reinstall Windows', description: 'If the key is lost, the data is gone. You must wipe the drive and start over.' }
    ],
    technicianAdvice: 'BitLocker is "military grade" encryption; without the key, the data is mathematically impossible to recover.',
    relatedProblemIds: ['p500001', 'p500004'],
    createdAt: '2025-10-20T09:00:00Z'
  }
];
