import { Problem } from './types';

export const EXTRA_PROBLEMS_14: Problem[] = [
  // --- Printers: Ink & Quality ---
  {
    id: 'p210001',
    title: 'Printer Printing Blank Pages',
    slug: 'printer-printing-blank-pages',
    shortDescription: 'The printer goes through the motions of printing but the paper comes out completely white.',
    category: 'printer',
    subcategory: 'Hardware',
    symptoms: ['Blank pages', 'No ink on paper', 'Full cartridges'],
    causes: ['Clogged printhead', 'Protective tape still on', 'Empty ink (software error)'],
    steps: [
      { id: 's1', title: 'Run Printhead Cleaning', description: 'Use the printer\'s maintenance menu to run a deep clean cycle.' },
      { id: 's2', title: 'Check Tape', description: 'Ensure the orange or yellow protective tape is removed from new cartridges.' },
      { id: 's3', title: 'Check Ink Levels', description: 'Don\'t trust the software; physically check if the cartridge feels heavy.' }
    ],
    technicianAdvice: 'If an inkjet printer isn\'t used for weeks, the ink in the nozzles can dry and block the flow.',
    relatedProblemIds: ['p210002', 'p210003'],
    createdAt: '2025-09-20T08:00:00Z'
  },
  {
    id: 'p210002',
    title: 'Printer Leaving Streaks or Lines',
    slug: 'printer-leaving-streaks-lines',
    shortDescription: 'Vertical or horizontal lines appear across your printed documents.',
    category: 'printer',
    subcategory: 'Hardware',
    symptoms: ['Streaky prints', 'Missing colors', 'Faded lines'],
    causes: ['Dirty scanner glass', 'Scratched drum (Laser)', 'Low ink (Inkjet)'],
    steps: [
      { id: 's1', title: 'Clean Scanner Glass', description: 'If copying, a tiny speck on the glass causes a line down the whole page.' },
      { id: 's2', title: 'Replace Toner/Drum', description: 'For laser printers, a scratched drum will leave a repeating mark.' },
      { id: 's3', title: 'Align Printheads', description: 'Use the alignment tool in the printer settings to fix horizontal shifts.' }
    ],
    technicianAdvice: 'Repeating spots at regular intervals usually indicate a dirty roller or damaged drum.',
    relatedProblemIds: ['p210001', 'p210004'],
    createdAt: '2025-09-20T09:00:00Z'
  },
  // --- Smart Home: Hubs & Sensors ---
  {
    id: 'p220001',
    title: 'Smart Home Hub Offline',
    slug: 'smart-home-hub-offline',
    shortDescription: 'All your smart devices say "No Response" because the main hub is disconnected.',
    category: 'smart-home',
    subcategory: 'Connectivity',
    symptoms: ['All devices offline', 'Hub light red/flashing', 'App error'],
    causes: ['Power outage', 'Ethernet cable loose', 'Firmware update failed'],
    steps: [
      { id: 's1', title: 'Power Cycle Hub', description: 'Unplug for 30 seconds and plug back in.' },
      { id: 's2', title: 'Check Internet', description: 'Ensure your router is working and the hub has a valid IP address.' },
      { id: 's3', title: 'Check Cloud Status', description: 'Visit the manufacturer\'s status page to see if their servers are down.' }
    ],
    technicianAdvice: 'If your hub is connected via WiFi, try switching to Ethernet for better stability.',
    relatedProblemIds: ['p220002', 'p220003'],
    createdAt: '2025-09-21T08:00:00Z'
  },
  {
    id: 'p220002',
    title: 'Motion Sensor Not Triggering Lights',
    slug: 'motion-sensor-not-triggering-lights',
    shortDescription: 'You walk into a room but the smart lights stay off.',
    category: 'smart-home',
    subcategory: 'Hardware',
    symptoms: ['No trigger', 'Delayed response', 'False triggers'],
    causes: ['Dead battery', 'Out of range', 'Automation rule error'],
    steps: [
      { id: 's1', title: 'Replace Battery', description: 'Most sensors use CR2032 or CR123A batteries that last 1-2 years.' },
      { id: 's2', title: 'Check Automation Rule', description: 'Ensure the "If Motion Detected" rule is still active and has the correct time range.' },
      { id: 's3', title: 'Adjust Sensitivity', description: 'Increase sensitivity in the app if it\'s missing smaller movements.' }
    ],
    technicianAdvice: 'PIR sensors can struggle in very hot rooms as they look for temperature changes.',
    relatedProblemIds: ['p220001', 'p220004'],
    createdAt: '2025-09-21T09:00:00Z'
  },
  // --- Laptop: Performance & Heat ---
  {
    id: 'p230001',
    title: 'Laptop Running Very Slow (High Disk Usage)',
    slug: 'laptop-slow-high-disk-usage',
    shortDescription: 'The laptop takes minutes to boot and apps take forever to open.',
    category: 'laptop',
    subcategory: 'Performance',
    symptoms: ['100% disk usage', 'Slow response', 'Freezing'],
    causes: ['Failing HDD', 'Windows Search indexing', 'Antivirus scan'],
    steps: [
      { id: 's1', title: 'Check Task Manager', description: 'Identify which process is hogging the disk (Ctrl+Shift+Esc).' },
      { id: 's2', title: 'Disable Startup Apps', description: 'Stop unnecessary programs from loading when you turn on the PC.' },
      { id: 's3', title: 'Upgrade to SSD', description: 'If you have an old mechanical HDD, switching to an SSD is the best upgrade.' }
    ],
    technicianAdvice: '100% disk usage on a mechanical drive is a classic sign of imminent failure.',
    relatedProblemIds: ['p230002', 'p230003'],
    createdAt: '2025-09-22T08:00:00Z'
  },
  {
    id: 'p230002',
    title: 'Laptop Battery Not Charging (Plugged in, Not Charging)',
    slug: 'laptop-battery-not-charging-plugged-in',
    shortDescription: 'The laptop is connected to power, but the battery percentage doesn\'t increase.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['"Plugged in, not charging"', 'Battery icon stuck', 'Shutdown when unplugged'],
    causes: ['Faulty AC adapter', 'Battery driver error', 'Dead battery cells'],
    steps: [
      { id: 's1', title: 'Uninstall Battery Driver', description: 'Device Manager > Batteries > Uninstall "Microsoft ACPI-Compliant Control Method Battery" > Restart.' },
      { id: 's2', title: 'Try Different Charger', description: 'Borrow a compatible charger to rule out a broken cable.' },
      { id: 's3', title: 'Check BIOS/UEFI', description: 'Some laptops have "Battery Health" settings that stop charging at 80%.' }
    ],
    technicianAdvice: 'If the laptop works on AC but dies instantly when unplugged, the battery is likely dead.',
    relatedProblemIds: ['p230001', 'p230004'],
    createdAt: '2025-09-22T09:00:00Z'
  },
  // --- Smartphone: Audio & Mic ---
  {
    id: 'p240001',
    title: 'Smartphone Speaker Sounds Crackly',
    slug: 'smartphone-speaker-crackly',
    shortDescription: 'Music and ringtones sound distorted or have a buzzing noise.',
    category: 'phone',
    subcategory: 'Audio',
    symptoms: ['Distorted sound', 'Buzzing', 'Low volume'],
    causes: ['Water damage', 'Metal filings in speaker', 'Software EQ error'],
    steps: [
      { id: 's1', title: 'Clean with Soft Brush', description: 'Gently remove debris from the speaker grill.' },
      { id: 's2', title: 'Use "Eject Water" Sound', description: 'Play a high-frequency tone to vibrate water out of the speaker.' },
      { id: 's3', title: 'Check Audio Settings', description: 'Ensure "Mono Audio" or weird EQ presets aren\'t enabled.' }
    ],
    technicianAdvice: 'If you work with metal, tiny magnetic filings can get stuck in the speaker and cause buzzing.',
    relatedProblemIds: ['p240002', 'p240003'],
    createdAt: '2025-09-23T08:00:00Z'
  },
  {
    id: 'p240002',
    title: 'Phone Stuck in "Headphone Mode"',
    slug: 'phone-stuck-headphone-mode',
    shortDescription: 'The phone thinks headphones are plugged in, so no sound comes from the speakers.',
    category: 'phone',
    subcategory: 'Audio',
    symptoms: ['No speaker sound', 'Headphone icon visible', 'Volume bar says "Headphones"'],
    causes: ['Debris in jack', 'Water in jack', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Clean the Jack', description: 'Use a toothpick or compressed air to remove lint from the 3.5mm jack.' },
      { id: 's2', title: 'Plug and Unplug', description: 'Rapidly insert and remove a pair of headphones to reset the physical switch.' },
      { id: 's3', title: 'Restart Phone', description: 'Clears any software state that might be stuck.' }
    ],
    technicianAdvice: 'Lint in the headphone jack is the most common cause of this issue.',
    relatedProblemIds: ['p240001', 'p240004'],
    createdAt: '2025-09-23T09:00:00Z'
  },
  // --- Internet: Security & Privacy ---
  {
    id: 'p250001',
    title: 'WiFi Router "WPS" Security Risk',
    slug: 'wifi-router-wps-security-risk',
    shortDescription: 'Your router has WPS enabled, which makes it vulnerable to brute-force attacks.',
    category: 'internet',
    subcategory: 'Router',
    symptoms: ['Security warning', 'Unauthorized access', 'Slow internet'],
    causes: ['WPS enabled by default'],
    steps: [
      { id: 's1', title: 'Disable WPS', description: 'Log into your router settings and turn off "Wi-Fi Protected Setup".' },
      { id: 's2', title: 'Change Admin Password', description: 'Ensure your router\'s login isn\'t still "admin/admin".' },
      { id: 's3', title: 'Update Encryption', description: 'Use WPA3 or WPA2-AES for the best security.' }
    ],
    technicianAdvice: 'WPS is a major security hole; always disable it and use a strong WPA2/3 password instead.',
    relatedProblemIds: ['p250002', 'p250003'],
    createdAt: '2025-09-24T08:00:00Z'
  },
  {
    id: 'p250002',
    title: 'Public WiFi "Privacy Warning"',
    slug: 'public-wifi-privacy-warning',
    shortDescription: 'Your phone or laptop warns you that the network is not secure or is monitoring traffic.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Security alert', '"Unsecured Network"', 'Privacy warning'],
    causes: ['No encryption (Open WiFi)', 'Man-in-the-middle risk'],
    steps: [
      { id: 's1', title: 'Use a VPN', description: 'Encrypt your traffic so the network owner cannot see what you are doing.' },
      { id: 's2', title: 'Avoid Sensitive Sites', description: 'Don\'t log into banks or use credit cards on public WiFi.' },
      { id: 's3', title: 'Forget the Network', description: 'Once done, "Forget" the network so your device doesn\'t auto-connect later.' }
    ],
    technicianAdvice: 'Public WiFi is inherently unsafe. Always assume someone is watching the traffic.',
    relatedProblemIds: ['p250001', 'p250004'],
    createdAt: '2025-09-24T09:00:00Z'
  }
];
