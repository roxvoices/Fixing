import { Problem } from './types';

export const EXTRA_PROBLEMS_4: Problem[] = [
  // --- Smart Home Problems ---
  {
    id: 'p5001',
    title: 'Smart bulb not connecting to WiFi',
    slug: 'smart-bulb-not-connecting-to-wifi',
    shortDescription: 'The smart bulb fails to pair with the home network during setup.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Bulb blinking but not found', 'Timeout error in app', 'Connection failed'],
    causes: ['2.4GHz vs 5GHz mismatch', 'Weak signal', 'Incorrect password'],
    steps: [
      { id: 's1', title: 'Check Frequency', description: 'Ensure your phone is on a 2.4GHz network, as most bulbs don\'t support 5GHz.' },
      { id: 's2', title: 'Reset Bulb', description: 'Turn the bulb off and on 3-5 times rapidly until it starts blinking.' },
      { id: 's3', title: 'Move Closer', description: 'Bring the bulb closer to the router for the initial pairing process.' }
    ],
    technicianAdvice: 'Disable 5GHz temporarily on your router if the bulb refuses to pair.',
    relatedProblemIds: ['p5002', 'p5003'],
    createdAt: '2025-08-01T08:00:00Z'
  },
  {
    id: 'p5002',
    title: 'Smart bulb flickering',
    slug: 'smart-bulb-flickering',
    shortDescription: 'The smart bulb flashes or flickers even when turned off or at low brightness.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Constant flickering', 'Strobe effect', 'Brief flashes when off'],
    causes: ['Incompatible dimmer switch', 'Voltage fluctuations', 'Firmware bug'],
    steps: [
      { id: 's1', title: 'Check Switch', description: 'Ensure the bulb is NOT connected to a physical dimmer switch.' },
      { id: 's2', title: 'Update Firmware', description: 'Check the manufacturer app for any available bulb updates.' },
      { id: 's3', title: 'Test in Different Socket', description: 'Rule out a faulty lamp or light fixture.' }
    ],
    technicianAdvice: 'Smart bulbs have internal dimmers; using them with external dimmers causes power instability.',
    relatedProblemIds: ['p5001', 'p5004'],
    createdAt: '2025-08-01T09:00:00Z'
  },
  {
    id: 'p5003',
    title: 'Smart bulb unresponsive in app',
    slug: 'smart-bulb-unresponsive-in-app',
    shortDescription: 'The bulb shows as "Offline" or "Unreachable" in the smart home app.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"Offline" status', 'Cannot change color', 'Voice commands fail'],
    causes: ['Physical switch turned off', 'Router DHCP lease issue', 'Cloud server outage'],
    steps: [
      { id: 's1', title: 'Check Physical Switch', description: 'Ensure the wall switch is always in the ON position.' },
      { id: 's2', title: 'Power Cycle', description: 'Turn the bulb off and on once to force a reconnect.' },
      { id: 's3', title: 'Re-link Account', description: 'Remove and re-add the service in Google Home or Alexa.' }
    ],
    technicianAdvice: 'If many bulbs go offline at once, your router may have reached its maximum device limit.',
    relatedProblemIds: ['p5001', 'p5005'],
    createdAt: '2025-08-01T10:00:00Z'
  },
  {
    id: 'p5004',
    title: 'Smart plug clicking repeatedly',
    slug: 'smart-plug-clicking-repeatedly',
    shortDescription: 'The smart plug makes a rapid clicking sound and toggles power on/off.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Clicking noise', 'Power cycling', 'App notification spam'],
    causes: ['Internal relay failure', 'Overload protection', 'Firmware loop'],
    steps: [
      { id: 's1', title: 'Reduce Load', description: 'Unplug high-wattage devices like heaters or kettles.' },
      { id: 's2', title: 'Factory Reset', description: 'Hold the power button for 10 seconds until the LED flashes.' },
      { id: 's3', title: 'Check Voltage', description: 'Ensure the outlet isn\'t providing unstable power.' }
    ],
    technicianAdvice: 'Repeated clicking usually indicates a failing mechanical relay. Replace the plug.',
    relatedProblemIds: ['p5003', 'p5006'],
    createdAt: '2025-08-01T11:00:00Z'
  },
  {
    id: 'p5005',
    title: 'Smart camera motion alerts delayed',
    slug: 'smart-camera-motion-alerts-delayed',
    shortDescription: 'Notifications for motion arrive several minutes after the event occurred.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Late notifications', 'Missing events', 'App sync lag'],
    causes: ['Slow upload speed', 'Battery saver on phone', 'Cloud processing delay'],
    steps: [
      { id: 's1', title: 'Check Upload Speed', description: 'Ensure your WiFi has at least 2Mbps upload for HD cameras.' },
      { id: 's2', title: 'Disable Battery Optimization', description: 'Allow the camera app to run unrestricted in phone settings.' },
      { id: 's3', title: 'Adjust Sensitivity', description: 'Lower sensitivity can reduce processing time for the cloud AI.' }
    ],
    technicianAdvice: 'Delayed alerts are often caused by the phone\'s OS putting the app to sleep to save battery.',
    relatedProblemIds: ['p5003', 'p5007'],
    createdAt: '2025-08-01T12:00:00Z'
  },
  {
    id: 'p5006',
    title: 'Smart thermostat not turning on heat',
    slug: 'smart-thermostat-not-turning-on-heat',
    shortDescription: 'The thermostat shows "Heating" but the furnace does not start.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['No heat', 'Furnace silent', 'Thermostat screen on'],
    causes: ['C-wire power issue', 'Incompatible wiring', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Check Wiring', description: 'Ensure the R and W wires are securely connected.' },
      { id: 's2', title: 'Restart Thermostat', description: 'Remove from wall and reattach, or use the reset menu.' },
      { id: 's3', title: 'Check Furnace Power', description: 'Ensure the furnace switch and breaker are ON.' }
    ],
    technicianAdvice: 'Many smart thermostats require a "C-wire" for consistent power; without it, they may fail to trigger the relay.',
    relatedProblemIds: ['p5004', 'p5008'],
    createdAt: '2025-08-01T13:00:00Z'
  },
  // --- Gaming Console Problems ---
  {
    id: 'p5101',
    title: 'Console overheating and shutting down',
    slug: 'console-overheating-and-shutting-down',
    shortDescription: 'The gaming console turns off abruptly during gameplay with a temperature warning.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Loud fan', '"Too hot" message', 'Sudden power off'],
    causes: ['Dust buildup', 'Poor ventilation', 'Dried thermal paste'],
    steps: [
      { id: 's1', title: 'Clear Air Vents', description: 'Use compressed air to blow dust out of the intake and exhaust ports.' },
      { id: 's2', title: 'Improve Airflow', description: 'Move the console to an open area, at least 6 inches from walls.' },
      { id: 's3', title: 'Vertical vs Horizontal', description: 'Try changing the orientation to see if airflow improves.' }
    ],
    technicianAdvice: 'If the console is old, the internal thermal paste may need replacement by a professional.',
    relatedProblemIds: ['p5102', 'p5103'],
    createdAt: '2025-08-02T08:00:00Z'
  },
  {
    id: 'p5102',
    title: 'Console disc drive not reading discs',
    slug: 'console-disc-drive-not-reading-discs',
    shortDescription: 'The console fails to recognize a disc or ejects it immediately.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"Unrecognized Disc"', 'Clicking noise', 'Eject loop'],
    causes: ['Dirty laser lens', 'Scratched disc', 'Mechanical failure'],
    steps: [
      { id: 's1', title: 'Clean the Disc', description: 'Wipe the disc from center to edge with a soft cloth.' },
      { id: 's2', title: 'Try Different Disc', description: 'Test with a movie or another game to rule out a specific disc issue.' },
      { id: 's3', title: 'Rebuild Database', description: 'On PS5/PS4, use Safe Mode to rebuild the database.' }
    ],
    technicianAdvice: 'If no discs work, the laser assembly likely needs replacement.',
    relatedProblemIds: ['p5101', 'p5104'],
    createdAt: '2025-08-02T09:00:00Z'
  },
  {
    id: 'p5103',
    title: 'Controller stick drift',
    slug: 'controller-stick-drift',
    shortDescription: 'The character or camera moves on its own without touching the analog sticks.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Ghost movement', 'Inaccurate aiming', 'Stuck inputs'],
    causes: ['Wear and tear', 'Dust inside sensor', 'Software calibration'],
    steps: [
      { id: 's1', title: 'Clean with Alcohol', description: 'Use a Q-tip with 90% isopropyl alcohol around the base of the stick.' },
      { id: 's2', title: 'Increase Deadzone', description: 'In game settings, increase the "Stick Deadzone" to ignore minor drift.' },
      { id: 's3', title: 'Update Controller', description: 'Connect to console and check for controller firmware updates.' }
    ],
    technicianAdvice: 'Stick drift is a mechanical wear issue; if cleaning fails, the potentiometer needs replacement.',
    relatedProblemIds: ['p5101', 'p5105'],
    createdAt: '2025-08-02T10:00:00Z'
  },
  {
    id: 'p5104',
    title: 'Console not outputting 4K/HDR',
    slug: 'console-not-outputting-4k-hdr',
    shortDescription: 'The console is limited to 1080p even when connected to a 4K HDR TV.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Low resolution', 'HDR "Not Supported"', 'Washed out colors'],
    causes: ['Old HDMI cable', 'Wrong HDMI port on TV', 'TV settings'],
    steps: [
      { id: 's1', title: 'Use High-Speed Cable', description: 'Ensure you are using the HDMI 2.1 cable that came with the console.' },
      { id: 's2', title: 'Enable HDMI Deep Color', description: 'On your TV settings, enable "Enhanced Format" or "UHD Deep Color" for that port.' },
      { id: 's3', title: 'Check Console Settings', description: 'Go to Screen and Video > Video Output > Resolution and set to 2160p.' }
    ],
    technicianAdvice: 'Not all HDMI ports on a TV support 4K/60Hz/HDR; check your TV manual.',
    relatedProblemIds: ['p5102', 'p5106'],
    createdAt: '2025-08-02T11:00:00Z'
  },
  // --- Wearable Problems ---
  {
    id: 'p5201',
    title: 'Smartwatch heart rate sensor inaccurate',
    slug: 'smartwatch-heart-rate-sensor-inaccurate',
    shortDescription: 'The watch shows unusually high or low heart rate readings during rest or exercise.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Spiking HR', 'Flatline readings', 'Delayed updates'],
    causes: ['Loose fit', 'Tattoos on wrist', 'Sweat buildup'],
    steps: [
      { id: 's1', title: 'Tighten the Band', description: 'The watch should be snug but comfortable, two fingers above the wrist bone.' },
      { id: 's2', title: 'Clean the Sensor', description: 'Wipe the back of the watch with a damp cloth to remove sweat and oils.' },
      { id: 's3', title: 'Switch Wrists', description: 'Try the other wrist to see if skin tone or tattoos are interfering.' }
    ],
    technicianAdvice: 'Optical sensors struggle with dark tattoos or excessive arm hair.',
    relatedProblemIds: ['p5202', 'p5203'],
    createdAt: '2025-08-03T08:00:00Z'
  },
  {
    id: 'p5202',
    title: 'Smartwatch battery draining fast',
    slug: 'smartwatch-battery-draining-fast',
    shortDescription: 'The watch battery lasts significantly less than the advertised time.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Dead by noon', 'Hot to touch', 'Rapid % drop'],
    causes: ['Always-on display', 'Frequent GPS use', 'Background app sync'],
    steps: [
      { id: 's1', title: 'Disable Always-On', description: 'Turn off the always-on display to save up to 30% battery.' },
      { id: 's2', title: 'Reduce Notifications', description: 'Only allow critical apps to send alerts to the watch.' },
      { id: 's3', title: 'Restart Watch', description: 'Clears background processes that might be stuck in a loop.' }
    ],
    technicianAdvice: 'Third-party watch faces are a common cause of excessive battery drain.',
    relatedProblemIds: ['p5201', 'p5204'],
    createdAt: '2025-08-03T09:00:00Z'
  },
  {
    id: 'p5203',
    title: 'Smartwatch not syncing with phone',
    slug: 'smartwatch-not-syncing-with-phone',
    shortDescription: 'Steps, sleep data, or notifications are not transferring to the mobile app.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Data missing in app', '"Not Connected" status', 'No notifications'],
    causes: ['Bluetooth off', 'App permissions', 'Outdated app'],
    steps: [
      { id: 's1', title: 'Toggle Bluetooth', description: 'Turn Bluetooth off and on on both the phone and the watch.' },
      { id: 's2', title: 'Check App Permissions', description: 'Ensure the companion app has access to Location, Nearby Devices, and Notifications.' },
      { id: 's3', title: 'Unpair and Repair', description: 'Remove the watch from Bluetooth settings and re-add it via the app.' }
    ],
    technicianAdvice: 'Ensure the companion app is not being "optimized" or killed by the phone\'s battery management.',
    relatedProblemIds: ['p5201', 'p5205'],
    createdAt: '2025-08-03T10:00:00Z'
  },
  // --- Audio Problems ---
  {
    id: 'p5301',
    title: 'Bluetooth headphones audio cutting out',
    slug: 'bluetooth-headphones-audio-cutting-out',
    shortDescription: 'The sound stutters or drops completely when moving or in crowded areas.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Stuttering audio', 'One earbud drops', 'Static noise'],
    causes: ['Interference', 'Low battery', 'Outdated firmware'],
    steps: [
      { id: 's1', title: 'Reset Connection', description: 'Forget the device in Bluetooth settings and pair again.' },
      { id: 's2', title: 'Update Firmware', description: 'Use the manufacturer\'s app to check for headphone updates.' },
      { id: 's3', title: 'Avoid Interference', description: 'Move away from WiFi routers or microwaves which use the same 2.4GHz band.' }
    ],
    technicianAdvice: 'True wireless earbuds often have a "Master" earbud; ensure it has a clear line of sight to the phone.',
    relatedProblemIds: ['p5302', 'p5303'],
    createdAt: '2025-08-04T08:00:00Z'
  },
  {
    id: 'p5302',
    title: 'Headphones active noise cancelling (ANC) weak',
    slug: 'headphones-active-noise-cancelling-anc-weak',
    shortDescription: 'The noise cancellation is not as effective as it used to be or makes a "hissing" sound.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['More background noise', 'Hissing/Whistling', 'Pressure feeling'],
    causes: ['Worn ear pads', 'Blocked microphones', 'Firmware bug'],
    steps: [
      { id: 's1', title: 'Clean External Mics', description: 'Use a soft brush to clear dust from the small mesh grilles on the earcups.' },
      { id: 's2', title: 'Check Ear Pad Seal', description: 'Ensure the pads aren\'t ripped; a good seal is critical for ANC.' },
      { id: 's3', title: 'Recalibrate ANC', description: 'Some apps have a "Calibration" tool to adjust for your ear shape.' }
    ],
    technicianAdvice: 'If you hear a high-pitched whistle, a microphone is likely loose or damaged.',
    relatedProblemIds: ['p5301', 'p5304'],
    createdAt: '2025-08-04T09:00:00Z'
  },
  // --- Printer Problems ---
  {
    id: 'p5401',
    title: 'Printer showing "Offline" on PC',
    slug: 'printer-showing-offline-on-pc',
    shortDescription: 'The printer is turned on and connected, but the computer says it is offline.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"Offline" status', 'Jobs stuck in queue', 'Cannot print'],
    causes: ['SNMP status bug', 'IP address change', 'Print spooler crash'],
    steps: [
      { id: 's1', title: 'Restart Print Spooler', description: 'Run "services.msc", find "Print Spooler", right-click and Restart.' },
      { id: 's2', title: 'Uncheck "Use Printer Offline"', description: 'Open print queue > Printer menu > Uncheck "Use Printer Offline".' },
      { id: 's3', title: 'Check IP Address', description: 'Ensure the printer\'s IP matches the one in the port settings.' }
    ],
    technicianAdvice: 'Assigning a static IP to your printer prevents it from going "offline" when the router reboots.',
    relatedProblemIds: ['p5402', 'p5403'],
    createdAt: '2025-08-05T08:00:00Z'
  },
  {
    id: 'p5402',
    title: 'Printer streaks or faded lines',
    slug: 'printer-streaks-or-faded-lines',
    shortDescription: 'Printed documents have horizontal or vertical lines, or missing sections of text.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['White lines', 'Smudged ink', 'Faded colors'],
    causes: ['Clogged print head', 'Low ink/toner', 'Dirty rollers'],
    steps: [
      { id: 's1', title: 'Run Cleaning Cycle', description: 'Use the printer\'s maintenance menu to run a "Head Cleaning".' },
      { id: 's2', title: 'Check Ink Levels', description: 'Replace any cartridges that are low or expired.' },
      { id: 's3', title: 'Align Print Head', description: 'Run the "Print Head Alignment" tool from the settings.' }
    ],
    technicianAdvice: 'If using an inkjet, print at least once a week to prevent the ink from drying in the nozzles.',
    relatedProblemIds: ['p5401', 'p5404'],
    createdAt: '2025-08-05T09:00:00Z'
  },
  // --- Device Configuration Problems ---
  {
    id: 'p5501',
    title: 'Device driver conflict after installation',
    slug: 'device-driver-conflict-after-installation',
    shortDescription: 'Installing a new driver causes another device to stop working or triggers a Blue Screen.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Yellow exclamation in Device Manager', 'BSOD', 'Hardware malfunction'],
    causes: ['Shared IRQ conflict', 'Overlapping memory addresses', 'Incompatible driver versions'],
    steps: [
      { id: 's1', title: 'Roll Back Driver', description: 'Use Device Manager to revert to the previous working driver.' },
      { id: 's2', title: 'Uninstall Conflicting Device', description: 'Remove both devices and install them one by one.' },
      { id: 's3', title: 'Update BIOS', description: 'Can resolve low-level resource allocation conflicts.' }
    ],
    technicianAdvice: 'Modern Windows handles resources well, but legacy hardware still suffers from IRQ conflicts.',
    relatedProblemIds: ['p5502', 'p5503'],
    createdAt: '2025-08-06T08:00:00Z'
  },
  {
    id: 'p5502',
    title: 'Device registry settings corrupted',
    slug: 'device-registry-settings-corrupted',
    shortDescription: 'Hardware settings stored in the Windows Registry are invalid, preventing the device from starting.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Code 19 error', 'Device not recognized', 'Settings won\'t save'],
    causes: ['Failed software uninstall', 'Malware', 'Registry cleaner tools'],
    steps: [
      { id: 's1', title: 'Delete UpperFilters/LowerFilters', description: 'Common fix for CD/DVD or Keyboard issues in the Registry.' },
      { id: 's2', title: 'System Restore', description: 'Revert the registry to a state before the corruption occurred.' },
      { id: 's3', title: 'Reinstall Device', description: 'Uninstall from Device Manager and let Windows recreate the registry keys.' }
    ],
    technicianAdvice: 'Avoid "Registry Cleaners"; they often delete critical hardware configuration keys.',
    relatedProblemIds: ['p5501', 'p5504'],
    createdAt: '2025-08-06T09:00:00Z'
  },
  // --- Connectivity Problems ---
  {
    id: 'p5601',
    title: 'Network stack corruption',
    slug: 'network-stack-corruption',
    shortDescription: 'The underlying software that handles internet connections is damaged, preventing all traffic.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"No Internet"', 'DNS errors', 'Ping fails to local router'],
    causes: ['Malware', 'Failed network update', 'VPN driver crash'],
    steps: [
      { id: 's1', title: 'Winsock Reset', description: 'Run "netsh winsock reset" in an elevated Command Prompt.' },
      { id: 's2', title: 'TCP/IP Reset', description: 'Run "netsh int ip reset" to rebuild the network protocol stack.' },
      { id: 's3', title: 'Flush DNS', description: 'Run "ipconfig /flushdns" to clear stale routing data.' }
    ],
    technicianAdvice: 'A network stack reset is the "nuclear option" for fixing persistent connection issues.',
    relatedProblemIds: ['p5602', 'p5603'],
    createdAt: '2025-08-07T08:00:00Z'
  },
  {
    id: 'p5602',
    title: 'Protocol error (ERR_CONNECTION_REFUSED)',
    slug: 'protocol-error-connection-refused',
    shortDescription: 'The browser cannot connect to a website because the connection was actively rejected.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Browser error page', 'Site won\'t load', 'Works on other devices'],
    causes: ['Firewall blocking', 'Proxy settings', 'Browser cache'],
    steps: [
      { id: 's1', title: 'Check Proxy Settings', description: 'Ensure "Automatically detect settings" is ON and no manual proxy is set.' },
      { id: 's2', title: 'Disable Firewall Temporarily', description: 'Rule out your security software as the cause.' },
      { id: 's3', title: 'Clear Browser Cache', description: 'Remove temporary files that might be pointing to an old IP.' }
    ],
    technicianAdvice: 'This error often means the website server is up but the specific "port" (like 80 or 443) is blocked.',
    relatedProblemIds: ['p5601', 'p5604'],
    createdAt: '2025-08-07T09:00:00Z'
  },
  // --- Power Management Problems ---
  {
    id: 'p5701',
    title: 'Battery calibration incorrect',
    slug: 'battery-calibration-incorrect',
    shortDescription: 'The device shuts down at 20% or stays at 100% for hours before dropping rapidly.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Sudden shutdown', 'Inaccurate %', 'Random jumps in level'],
    causes: ['Software desync', 'Old battery', 'Deep discharge'],
    steps: [
      { id: 's1', title: 'Full Cycle Reset', description: 'Charge to 100%, discharge until it dies, then charge back to 100% uninterrupted.' },
      { id: 's2', title: 'Update BIOS/Firmware', description: 'Manufacturers often release fixes for battery reporting bugs.' },
      { id: 's3', title: 'Check Battery Health', description: 'Use "powercfg /batteryreport" to see the actual capacity vs design capacity.' }
    ],
    technicianAdvice: 'Calibration doesn\'t fix a dead battery; it only makes the reporting more accurate.',
    relatedProblemIds: ['p5702', 'p5703'],
    createdAt: '2025-08-08T08:00:00Z'
  },
  {
    id: 'p5702',
    title: 'Sleep/Hibernate failure (PC wakes immediately)',
    slug: 'sleep-hibernate-failure-pc-wakes-immediately',
    shortDescription: 'The PC enters sleep mode but turns back on within seconds without user input.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['PC won\'t stay asleep', 'Fans spin up randomly', 'Monitor stays on'],
    causes: ['Mouse movement', 'Network "Wake on LAN"', 'Scheduled tasks'],
    steps: [
      { id: 's1', title: 'Check Last Wake Event', description: 'Run "powercfg -lastwake" to see what triggered the wake-up.' },
      { id: 's2', title: 'Disable Mouse Wake', description: 'Device Manager > Mouse > Properties > Power Management > Uncheck "Allow this device to wake".' },
      { id: 's3', title: 'Check Wake Timers', description: 'Power Options > Edit Plan > Advanced > Sleep > Allow wake timers > Disable.' }
    ],
    technicianAdvice: 'Network cards are the most common "ghost" wake-up culprits.',
    relatedProblemIds: ['p5701', 'p5704'],
    createdAt: '2025-08-08T09:00:00Z'
  },
  // --- System Optimization Problems ---
  {
    id: 'p5801',
    title: 'Disk fragmentation causing slowdown',
    slug: 'disk-fragmentation-causing-slowdown',
    shortDescription: 'Files are scattered across the hard drive, making it take longer to read data.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Slow file opening', 'Long boot times', 'Constant disk noise'],
    causes: ['HDD usage patterns', 'Lack of maintenance', 'Full drive'],
    steps: [
      { id: 's1', title: 'Run Defragmenter', description: 'Search for "Defragment and Optimize Drives" and run on your HDD.' },
      { id: 's2', title: 'Check Drive Type', description: 'NEVER defrag an SSD; it reduces its lifespan and provides no benefit.' },
      { id: 's3', title: 'Free Up Space', description: 'Defragging requires at least 15% free space to move files around.' }
    ],
    technicianAdvice: 'Modern Windows defrags HDDs automatically; if it\'s slow, the drive might be failing.',
    relatedProblemIds: ['p5802', 'p5803'],
    createdAt: '2025-08-09T08:00:00Z'
  },
  {
    id: 'p5802',
    title: 'Startup bloat (Too many background apps)',
    slug: 'startup-bloat-too-many-background-apps',
    shortDescription: 'The PC takes several minutes to become usable after logging in.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Slow startup', 'High RAM usage at idle', 'Many icons in tray'],
    causes: ['Apps setting themselves to auto-start', 'Pre-installed bloatware', 'Update services'],
    steps: [
      { id: 's1', title: 'Use Task Manager', description: 'Ctrl+Shift+Esc > Startup tab > Disable everything you don\'t need daily.' },
      { id: 's2', title: 'Uninstall Unused Apps', description: 'Go to Settings > Apps and remove "Trial" or "Helper" software.' },
      { id: 's3', title: 'Delay Services', description: 'Set non-critical services to "Automatic (Delayed Start)" in services.msc.' }
    ],
    technicianAdvice: 'Every startup app adds seconds to your boot time and eats into your available RAM.',
    relatedProblemIds: ['p5801', 'p5804'],
    createdAt: '2025-08-09T09:00:00Z'
  },
  // --- Device Feature Problems ---
  {
    id: 'p5901',
    title: 'Sensor calibration failure (Accelerometer/Gyro)',
    slug: 'sensor-calibration-failure-accelerometer-gyro',
    shortDescription: 'The screen won\'t rotate or the compass points in the wrong direction.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['No auto-rotate', 'Inaccurate GPS heading', 'Game tilt controls fail'],
    causes: ['Software glitch', 'Magnetic interference', 'Dropped device'],
    steps: [
      { id: 's1', title: 'Figure-8 Motion', description: 'Move the device in a large figure-8 pattern to recalibrate the compass.' },
      { id: 's2', title: 'Check Rotation Lock', description: 'Ensure the "Auto-rotate" toggle is enabled in the quick settings.' },
      { id: 's3', title: 'Factory Test Menu', description: 'Use dialer codes (like *#0*# on Samsung) to test and reset sensors.' }
    ],
    technicianAdvice: 'Magnetic cases or car mounts can permanently interfere with the internal magnetometer.',
    relatedProblemIds: ['p5902', 'p5903'],
    createdAt: '2025-08-10T08:00:00Z'
  },
  {
    id: 'p5902',
    title: 'Peripheral detection failure (USB/Thunderbolt)',
    slug: 'peripheral-detection-failure-usb-thunderbolt',
    shortDescription: 'Plugging in a device results in "USB Device Not Recognized" or no response at all.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"USB Device Not Recognized"', 'No sound when plugging in', 'Power only, no data'],
    causes: ['Faulty cable', 'Dirty port', 'Missing controller drivers'],
    steps: [
      { id: 's1', title: 'Try Different Cable', description: 'Many cables are "charge only" and lack the data wires.' },
      { id: 's2', title: 'Clean the Port', description: 'Use a toothpick to gently remove lint from the USB-C or Lightning port.' },
      { id: 's3', title: 'Reinstall USB Controllers', description: 'Uninstall all "Root Hubs" in Device Manager and restart.' }
    ],
    technicianAdvice: 'Thunderbolt devices often require "Approval" in the Thunderbolt software before they will work.',
    relatedProblemIds: ['p5901', 'p5904'],
    createdAt: '2025-08-10T09:00:00Z'
  },
  // --- Notification Problems ---
  {
    id: 'p6001',
    title: 'Notification sync delays across devices',
    slug: 'notification-sync-delays-across-devices',
    shortDescription: 'Dismissing a notification on your phone doesn\'t clear it from your tablet or PC.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Duplicate alerts', 'Old notifications reappearing', 'Sync lag'],
    causes: ['Cloud sync failure', 'Battery saver mode', 'Outdated app version'],
    steps: [
      { id: 's1', title: 'Check Sync Settings', description: 'Ensure "Notification Sync" is enabled in the app settings on all devices.' },
      { id: 's2', title: 'Update Google Play Services', description: 'Critical for notification delivery on Android devices.' },
      { id: 's3', title: 'Restart Devices', description: 'Forces a fresh connection to the notification servers.' }
    ],
    technicianAdvice: 'Syncing relies on a persistent connection; if one device is on "Low Power Mode", sync will fail.',
    relatedProblemIds: ['p6002', 'p6003'],
    createdAt: '2025-08-11T08:00:00Z'
  },
  {
    id: 'p6002',
    title: 'Notification sound issues (Silent alerts)',
    slug: 'notification-sound-issues-silent-alerts',
    shortDescription: 'Notifications appear on screen but make no sound or vibration.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Visual only alerts', 'Missed calls', 'No vibration'],
    causes: ['Do Not Disturb mode', 'Focus Assist', 'App-specific mute'],
    steps: [
      { id: 's1', title: 'Check Focus Mode', description: 'Ensure "Do Not Disturb" or "Focus" is turned OFF.' },
      { id: 's2', title: 'Check App Sound Settings', description: 'Some apps have their own internal mute toggle separate from the system.' },
      { id: 's3', title: 'Verify Volume Mixer', description: 'On PC, ensure "System Sounds" is not muted in the volume mixer.' }
    ],
    technicianAdvice: 'Bluetooth headphones connected in another room can "steal" your notification sounds.',
    relatedProblemIds: ['p6001', 'p6004'],
    createdAt: '2025-08-11T09:00:00Z'
  },
  // --- System Logging Problems ---
  {
    id: 'p6101',
    title: 'Event Viewer failures (Logs not recording)',
    slug: 'event-viewer-failures-logs-not-recording',
    shortDescription: 'The system stops recording errors and events, making troubleshooting impossible.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Empty logs', '"Event Log service is unavailable"', 'Missing critical errors'],
    causes: ['Service disabled', 'Log file corruption', 'Disk full'],
    steps: [
      { id: 's1', title: 'Start Event Log Service', description: 'Run services.msc and ensure "Windows Event Log" is Running and Automatic.' },
      { id: 's2', title: 'Clear Corrupt Logs', description: 'Navigate to C:\\Windows\\System32\\winevt\\Logs and delete the large .evtx files.' },
      { id: 's3', title: 'Check Disk Space', description: 'Logs cannot write if the system drive is completely full.' }
    ],
    technicianAdvice: 'If logs aren\'t recording, you might miss early warning signs of hardware failure.',
    relatedProblemIds: ['p6102', 'p6103'],
    createdAt: '2025-08-12T08:00:00Z'
  },
  {
    id: 'p6102',
    title: 'Log bloat (Excessive disk usage by logs)',
    slug: 'log-bloat-excessive-disk-usage-by-logs',
    shortDescription: 'System or application logs grow to tens of gigabytes, filling up the hard drive.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Low disk space', 'Large files in AppData', 'Slow system performance'],
    causes: ['Debug mode left on', 'Repeated error loop', 'Missing log rotation'],
    steps: [
      { id: 's1', title: 'Identify Large Logs', description: 'Use a tool like WizTree to find where the space is being taken.' },
      { id: 's2', title: 'Disable Debug Logging', description: 'Check app settings for "Enable Verbose Logging" and turn it off.' },
      { id: 's3', title: 'Limit Log Size', description: 'In Event Viewer, right-click a log > Properties > Set "Maximum log size".' }
    ],
    technicianAdvice: 'A "log storm" (thousands of entries per second) usually indicates a software bug or a failing driver.',
    relatedProblemIds: ['p6101', 'p6104'],
    createdAt: '2025-08-12T09:00:00Z'
  },
  // --- Device Configuration Problems (Expanded) ---
  {
    id: 'p6201',
    title: 'BIOS settings reset after power loss',
    slug: 'bios-settings-reset-after-power-loss',
    shortDescription: 'The computer loses its date, time, and custom BIOS settings every time it is unplugged.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['"CMOS Checksum Error"', 'System time incorrect', 'Boot order reset'],
    causes: ['Dead CMOS battery', 'Motherboard short', 'Static discharge'],
    steps: [
      { id: 's1', title: 'Replace CR2032 Battery', description: 'Open the case and replace the small coin-cell battery on the motherboard.' },
      { id: 's2', title: 'Update BIOS', description: 'Sometimes a firmware bug causes settings to not save correctly.' },
      { id: 's3', title: 'Check Power Supply', description: 'Ensure the PSU is providing stable standby voltage.' }
    ],
    technicianAdvice: 'A dead CMOS battery is the most common cause of settings loss in older PCs.',
    relatedProblemIds: ['p6202', 'p6203'],
    createdAt: '2025-08-13T08:00:00Z'
  },
  {
    id: 'p6202',
    title: 'UEFI Secure Boot preventing OS launch',
    slug: 'uefi-secure-boot-preventing-os-launch',
    shortDescription: 'The PC fails to boot into Linux or an older version of Windows due to security signatures.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['"Secure Boot Violation"', 'Red warning box', 'Boot loop'],
    causes: ['Unsigned bootloader', 'Expired security keys', 'Custom OS installation'],
    steps: [
      { id: 's1', title: 'Disable Secure Boot', description: 'Enter BIOS/UEFI and set Secure Boot to "Disabled".' },
      { id: 's2', title: 'Install Keys', description: 'Use the "Install Default Secure Boot Keys" option in BIOS.' },
      { id: 's3', title: 'Use Signed Bootloader', description: 'Ensure your OS distribution supports Secure Boot.' }
    ],
    technicianAdvice: 'Secure Boot is a security feature, but it can be a headache for dual-booting Linux.',
    relatedProblemIds: ['p6201', 'p6204'],
    createdAt: '2025-08-13T09:00:00Z'
  },
  // --- Connectivity Problems (Expanded) ---
  {
    id: 'p6301',
    title: 'WiFi signal interference from appliances',
    slug: 'wifi-signal-interference-from-appliances',
    shortDescription: 'Internet speed drops or disconnects when the microwave or cordless phone is in use.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Speed drops', 'High latency', 'Connection drops'],
    causes: ['2.4GHz frequency overlap', 'Shielding failure', 'Physical obstruction'],
    steps: [
      { id: 's1', title: 'Switch to 5GHz', description: 'Use the 5GHz band which is not affected by household appliances.' },
      { id: 's2', title: 'Change WiFi Channel', description: 'Set your router to channel 1, 6, or 11 to avoid overlap.' },
      { id: 's3', title: 'Move the Router', description: 'Ensure the router is not placed directly next to a microwave or fridge.' }
    ],
    technicianAdvice: 'Microwaves operate on the exact same 2.45GHz frequency as WiFi.',
    relatedProblemIds: ['p6302', 'p6303'],
    createdAt: '2025-08-14T08:00:00Z'
  },
  {
    id: 'p6302',
    title: 'Ethernet port not detecting cable',
    slug: 'ethernet-port-not-detecting-cable',
    shortDescription: 'Plugging in a LAN cable results in "Network Cable Unplugged" error.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['No lights on port', 'No internet', 'Generic error'],
    causes: ['Faulty cable', 'Bent pins in port', 'Disabled NIC in BIOS'],
    steps: [
      { id: 's1', title: 'Try Different Cable', description: 'Test with a known working Cat5e or Cat6 cable.' },
      { id: 's2', title: 'Check Port Pins', description: 'Look inside the port for any bent or touching copper pins.' },
      { id: 's3', title: 'Enable in Device Manager', description: 'Ensure the Ethernet controller is not "Disabled".' }
    ],
    technicianAdvice: 'Ethernet ports can be damaged by static electricity during lightning storms.',
    relatedProblemIds: ['p6301', 'p6304'],
    createdAt: '2025-08-14T09:00:00Z'
  },
  // --- Power Management Problems (Expanded) ---
  {
    id: 'p6401',
    title: 'Laptop shutting down when unplugged',
    slug: 'laptop-shutting-down-when-unplugged',
    shortDescription: 'The laptop works fine on the charger but turns off instantly when the power cord is removed.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Instant power off', 'Battery shows 0%', 'No warning'],
    causes: ['Dead battery cells', 'Disconnected battery cable', 'Motherboard power circuit failure'],
    steps: [
      { id: 's1', title: 'Check Battery Connection', description: 'Open the laptop and ensure the battery connector is seated firmly.' },
      { id: 's2', title: 'Run Battery Report', description: 'Use "powercfg /batteryreport" to check the health status.' },
      { id: 's3', title: 'Replace Battery', description: 'If the battery is old, it likely has no capacity left to hold a charge.' }
    ],
    technicianAdvice: 'If the battery shows 100% but dies instantly, the internal protection circuit is likely tripped.',
    relatedProblemIds: ['p6402', 'p6403'],
    createdAt: '2025-08-15T08:00:00Z'
  },
  {
    id: 'p6402',
    title: 'Phone charging very slowly',
    slug: 'phone-charging-very-slowly',
    shortDescription: 'The phone takes 5+ hours to reach a full charge, or barely gains percentage while in use.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['"Slow charging" notification', 'Heat while charging', 'Battery drain > Charge rate'],
    causes: ['Low wattage adapter', 'Damaged cable', 'Background app usage'],
    steps: [
      { id: 's1', title: 'Use Original Charger', description: 'Switch to a high-wattage (20W+) PD or QC charger.' },
      { id: 's2', title: 'Clean Charging Port', description: 'Remove lint that might be preventing a solid connection.' },
      { id: 's3', title: 'Turn Off Screen', description: 'Charging is much faster when the device is not being used.' }
    ],
    technicianAdvice: 'Charging from a computer USB port is limited to 0.5A, which is very slow for modern phones.',
    relatedProblemIds: ['p6401', 'p6404'],
    createdAt: '2025-08-15T09:00:00Z'
  },
  // --- System Optimization Problems (Expanded) ---
  {
    id: 'p6501',
    title: 'Memory leak causing system crash',
    slug: 'memory-leak-causing-system-crash',
    shortDescription: 'A program slowly consumes all available RAM until the computer freezes or crashes.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Increasing RAM usage', 'System stutter', 'Blue screen'],
    causes: ['Poorly coded software', 'Driver bug', 'Browser extension'],
    steps: [
      { id: 's1', title: 'Identify the App', description: 'Use Task Manager to find the app with ever-increasing memory usage.' },
      { id: 's2', title: 'Update the Software', description: 'Developers often release patches for known memory leaks.' },
      { id: 's3', title: 'Restart the App', description: 'Closing and reopening the app will temporarily free the leaked memory.' }
    ],
    technicianAdvice: 'Web browsers with many extensions are the most common source of memory leaks.',
    relatedProblemIds: ['p6502', 'p6503'],
    createdAt: '2025-08-16T08:00:00Z'
  },
  {
    id: 'p6502',
    title: 'High CPU usage by "System Idle Process"',
    slug: 'high-cpu-usage-by-system-idle-process',
    shortDescription: 'The user sees 99% CPU usage by "System Idle Process" and thinks it is a virus.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['High % in Task Manager', 'Confusion', 'No actual slowdown'],
    causes: ['Misunderstanding of process', 'Normal behavior'],
    steps: [
      { id: 's1', title: 'Understand the Process', description: 'System Idle Process represents the % of CPU that is NOT being used.' },
      { id: 's2', title: 'Check "System" Process', description: 'If the "System" process (not Idle) is high, then there is a real issue.' },
      { id: 's3', title: 'Check Temperature', description: 'If the PC is slow and hot, look for other processes like "Antimalware Service Executable".' }
    ],
    technicianAdvice: '99% System Idle Process is a GOOD thing; it means your CPU is resting.',
    relatedProblemIds: ['p6501', 'p6504'],
    createdAt: '2025-08-16T09:00:00Z'
  },
  // --- Device Feature Problems (Expanded) ---
  {
    id: 'p6601',
    title: 'NFC not working for payments',
    slug: 'nfc-not-working-for-payments',
    shortDescription: 'The phone fails to trigger a payment when held near a card terminal.',
    category: 'phone',
    subcategory: 'Sensors',
    symptoms: ['No response at terminal', '"NFC error"', 'Payment app fails'],
    causes: ['Thick case', 'NFC disabled', 'Software conflict'],
    steps: [
      { id: 's1', title: 'Enable NFC', description: 'Go to Settings > Connected Devices > Connection Preferences > NFC.' },
      { id: 's2', title: 'Remove Case', description: 'Metal or thick plastic cases can block the short-range signal.' },
      { id: 's3', title: 'Set Default Payment App', description: 'Ensure Google Pay or Apple Pay is set as the primary NFC app.' }
    ],
    technicianAdvice: 'The NFC antenna is usually located near the top camera module on most phones.',
    relatedProblemIds: ['p6602', 'p6603'],
    createdAt: '2025-08-17T08:00:00Z'
  },
  {
    id: 'p6602',
    title: 'FaceID/Face Unlock failing in low light',
    slug: 'faceid-face-unlock-failing-in-low-light',
    shortDescription: 'The phone cannot recognize your face when you are in a dark room.',
    category: 'phone',
    subcategory: 'Sensors',
    symptoms: ['"Face not recognized"', 'PIN prompt', 'Infrared dots visible but fail'],
    causes: ['Poor IR sensor performance', 'Obstructions', 'Software bug'],
    steps: [
      { id: 's1', title: 'Increase Screen Brightness', description: 'The screen light can help the camera see your face better.' },
      { id: 's2', title: 'Re-scan in Low Light', description: 'Some phones allow you to add an "Alternate Appearance" in dark conditions.' },
      { id: 's3', title: 'Clean Sensors', description: 'Wipe the "notch" area to ensure the IR projector is clear.' }
    ],
    technicianAdvice: 'True FaceID uses infrared, so it should work in total darkness. If it doesn\'t, the IR projector might be failing.',
    relatedProblemIds: ['p6601', 'p6604'],
    createdAt: '2025-08-17T09:00:00Z'
  },
  // --- Notification Problems (Expanded) ---
  {
    id: 'p6701',
    title: 'Notifications appearing but disappearing instantly',
    slug: 'notifications-appearing-but-disappearing-instantly',
    shortDescription: 'A notification pops up for a split second and then vanishes from the tray.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Ghost notifications', 'Missing alerts', 'Notification history empty'],
    causes: ['App auto-dismissal', 'Conflict with another device', 'Notification listener bug'],
    steps: [
      { id: 's1', title: 'Check Notification History', description: 'Go to Settings > Notifications > Notification History to see what happened.' },
      { id: 's2', title: 'Disable "Auto-Dismiss"', description: 'Check app settings for any "Mark as read on notification" options.' },
      { id: 's3', title: 'Check Other Devices', description: 'If you have the app open on a PC, it might be auto-clearing the phone alert.' }
    ],
    technicianAdvice: 'Smartwatches often dismiss notifications from the phone once they are "seen" on the wrist.',
    relatedProblemIds: ['p6702', 'p6703'],
    createdAt: '2025-08-18T08:00:00Z'
  },
  {
    id: 'p6702',
    title: 'Notifications showing "Content Hidden"',
    slug: 'notifications-showing-content-hidden',
    shortDescription: 'You can see that you have a message, but the text is hidden on the lock screen.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"1 new message"', 'Hidden preview', 'Privacy mode'],
    causes: ['Privacy settings', 'Work profile restriction', 'App-specific lock'],
    steps: [
      { id: 's1', title: 'Change Lock Screen Settings', description: 'Settings > Notifications > Notifications on Lock Screen > Show Content.' },
      { id: 's2', title: 'Check App Privacy', description: 'Apps like WhatsApp have their own "Show Preview" toggle in settings.' },
      { id: 's3', title: 'Check Work Profile', description: 'If your phone is managed by IT, they may force content to be hidden.' }
    ],
    technicianAdvice: 'This is a security feature to prevent people from reading your messages over your shoulder.',
    relatedProblemIds: ['p6701', 'p6704'],
    createdAt: '2025-08-18T09:00:00Z'
  },
  // --- System Logging Problems (Expanded) ---
  {
    id: 'p6801',
    title: 'System logs showing "Disk I/O Error"',
    slug: 'system-logs-showing-disk-io-error',
    shortDescription: 'The event viewer is filled with warnings about failed read/write operations.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['System freezes', 'Slow performance', 'Event ID 7, 11, or 15'],
    causes: ['Failing HDD/SSD', 'Loose SATA cable', 'Driver corruption'],
    steps: [
      { id: 's1', title: 'Run CHKDSK', description: 'Run "chkdsk c: /f /r" to find and fix bad sectors.' },
      { id: 's2', title: 'Check SMART Status', description: 'Use a tool like CrystalDiskInfo to see the drive\'s health.' },
      { id: 's3', title: 'Replace the Drive', description: 'If I/O errors are frequent, the drive is dying. Backup data immediately.' }
    ],
    technicianAdvice: 'Disk I/O errors are the #1 sign that you need a new hard drive.',
    relatedProblemIds: ['p6802', 'p6803'],
    createdAt: '2025-08-19T08:00:00Z'
  },
  {
    id: 'p6802',
    title: 'System logs showing "Kernel-Power" errors',
    slug: 'system-logs-showing-kernel-power-errors',
    shortDescription: 'The logs show "The system has rebooted without cleanly shutting down first."',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['Sudden restarts', 'No BSOD', 'Event ID 41'],
    causes: ['Faulty PSU', 'Overheating', 'Unstable overclock'],
    steps: [
      { id: 's1', title: 'Check Power Supply', description: 'Ensure your PSU has enough wattage for your components.' },
      { id: 's2', title: 'Monitor Temperatures', description: 'Use HWMonitor to check if the CPU or GPU is hitting 90C+.' },
      { id: 's3', title: 'Reset BIOS to Defaults', description: 'Remove any CPU or RAM overclocks that might be unstable.' }
    ],
    technicianAdvice: 'Kernel-Power 41 just means the power was cut; it doesn\'t tell you WHY. You must investigate the hardware.',
    relatedProblemIds: ['p6801', 'p6804'],
    createdAt: '2025-08-19T09:00:00Z'
  },
  // --- Update-related Problems (Expanded) ---
  {
    id: 'p6901',
    title: 'Windows Update stuck at 0% or 99%',
    slug: 'windows-update-stuck-at-0-or-99',
    shortDescription: 'The update progress bar hasn\'t moved in hours.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['No progress', 'High disk usage', 'Update service hanging'],
    causes: ['Corrupt update cache', 'Internet interruption', 'Conflict with antivirus'],
    steps: [
      { id: 's1', title: 'Run Update Troubleshooter', description: 'Settings > System > Troubleshoot > Other troubleshooters > Windows Update.' },
      { id: 's2', title: 'Clear SoftwareDistribution Folder', description: 'Stop the update service and delete the contents of C:\\Windows\\SoftwareDistribution.' },
      { id: 's3', title: 'Use Media Creation Tool', description: 'Manually update using the official tool from Microsoft\'s website.' }
    ],
    technicianAdvice: 'Sometimes Windows is actually working in the background even if the % doesn\'t change. Give it 2 hours.',
    relatedProblemIds: ['p6902', 'p6903'],
    createdAt: '2025-08-20T08:00:00Z'
  },
  {
    id: 'p6902',
    title: 'Update causing "Undo changes" loop',
    slug: 'update-causing-undo-changes-loop',
    shortDescription: 'The PC tries to update, fails, undoes changes, and then tries again in an infinite loop.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"We couldn\'t complete the updates"', 'Infinite reboot', 'Cannot reach desktop'],
    causes: ['Corrupt system files', 'Insufficient disk space', 'Driver conflict'],
    steps: [
      { id: 's1', title: 'Boot to Safe Mode', description: 'Try to finish the "undoing" process in Safe Mode.' },
      { id: 's2', title: 'Run SFC and DISM', description: 'Repair system files using "sfc /scannow" and "dism /online /cleanup-image /restorehealth".' },
      { id: 's3', title: 'Hide the Update', description: 'Use the "Show or Hide Updates" troubleshooter to skip the problematic update.' }
    ],
    technicianAdvice: 'This loop usually means one specific update is incompatible with your current drivers.',
    relatedProblemIds: ['p6901', 'p6904'],
    createdAt: '2025-08-20T09:00:00Z'
  }
];
