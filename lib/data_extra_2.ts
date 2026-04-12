import { Problem } from './types';

export const EXTRA_PROBLEMS_2: Problem[] = [
  {
    id: 'p4101',
    title: 'Smart TV not turning on',
    slug: 'smart-tv-not-turning-on',
    shortDescription: 'The television fails to power up or show any standby light.',
    category: 'hardware',
    subcategory: 'General',
    symptoms: ['No power light', 'No response to remote', 'No sound or image'],
    causes: ['Blown fuse', 'Power board failure', 'Faulty power cable'],
    steps: [
      { id: 's1', title: 'Check Power Source', description: 'Ensure the outlet works by plugging in another device.' },
      { id: 's2', title: 'Power Cycle', description: 'Unplug the TV for 60 seconds, then hold the power button for 30 seconds before plugging back in.' },
      { id: 's3', title: 'Inspect Power Cord', description: 'Look for any visible damage or loose connections at the back of the TV.' }
    ],
    technicianAdvice: 'If the standby light is blinking, count the flashes; it often indicates a specific hardware error code.',
    relatedProblemIds: ['p4102', 'p4140'],
    createdAt: '2025-06-20T08:00:00Z'
  },
  {
    id: 'p4102',
    title: 'Smart TV stuck on startup logo',
    slug: 'smart-tv-stuck-on-startup-logo',
    shortDescription: 'The TV powers on but hangs indefinitely on the manufacturer logo screen.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Logo remains on screen', 'TV unresponsive to remote', 'Automatic rebooting'],
    causes: ['Corrupted firmware', 'Main board failure', 'Failed software update'],
    steps: [
      { id: 's1', title: 'Force Restart', description: 'Unplug the TV and plug it back in after a minute.' },
      { id: 's2', title: 'Factory Reset via Buttons', description: 'Many TVs have a physical reset button or a key combination (e.g., Vol- and Power) to force a reset.' },
      { id: 's3', title: 'Firmware Recovery', description: 'Download firmware to a USB drive and follow the manufacturer\'s recovery instructions.' }
    ],
    technicianAdvice: 'This is often a sign of NAND flash memory failure on the main board, which may require board replacement.',
    relatedProblemIds: ['p4101', 'p4110'],
    createdAt: '2025-06-20T09:00:00Z'
  },
  {
    id: 'p4103',
    title: 'Smart TV screen black but sound working',
    slug: 'smart-tv-screen-black-but-sound-working',
    shortDescription: 'The TV has audio and responds to commands, but the display remains completely dark.',
    category: 'hardware',
    subcategory: 'General',
    symptoms: ['Sound present', 'Backlight might be visible in dark room', 'Flashlight test shows image'],
    causes: ['Backlight LED failure', 'T-Con board failure', 'Inverter board failure'],
    steps: [
      { id: 's1', title: 'The Flashlight Test', description: 'Shine a bright light close to the screen. If you see a faint image, the backlight is dead.' },
      { id: 's2', title: 'Check Connections', description: 'Ensure HDMI cables are secure as a loose connection can sometimes drop video but keep audio.' },
      { id: 's3', title: 'Reset Picture Settings', description: 'If you can see the menu faintly, try resetting the picture settings.' }
    ],
    technicianAdvice: 'If the flashlight test fails to show an image, the issue is likely the T-Con board or the panel itself.',
    relatedProblemIds: ['p4120', 'p4121'],
    createdAt: '2025-06-20T10:00:00Z'
  },
  {
    id: 'p4104',
    title: 'Smart TV no sound output',
    slug: 'smart-tv-no-sound-output',
    shortDescription: 'The picture is fine, but no audio is coming from the internal speakers.',
    category: 'hardware',
    subcategory: 'General',
    symptoms: ['Mute icon on screen', 'No sound from any app', 'No sound from HDMI inputs'],
    causes: ['Muted audio', 'Incorrect audio output setting', 'Blown speakers'],
    steps: [
      { id: 's1', title: 'Check Mute/Volume', description: 'Ensure the TV isn\'t muted and volume is up.' },
      { id: 's2', title: 'Check Audio Output', description: 'Go to Settings > Sound and ensure "Internal Speakers" is selected, not "Optical" or "ARC".' },
      { id: 's3', title: 'Test with Headphones', description: 'Plug in headphones. If they work, the internal speakers or their wiring are faulty.' }
    ],
    technicianAdvice: 'Check if a "Hotel Mode" or "Demo Mode" is enabled, as these can sometimes restrict audio settings.',
    relatedProblemIds: ['p4105', 'p4128'],
    createdAt: '2025-06-20T11:00:00Z'
  },
  {
    id: 'p4105',
    title: 'Smart TV sound distorted',
    slug: 'smart-tv-sound-distorted',
    shortDescription: 'Audio from the TV speakers sounds crackly, muffled, or has a robotic quality.',
    category: 'hardware',
    subcategory: 'General',
    symptoms: ['Crackling noise', 'Muffled voices', 'Vibrating cabinet'],
    causes: ['Torn speaker cone', 'Loose internal component', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Reset Sound Settings', description: 'Go to Sound Settings and select "Reset to Default".' },
      { id: 's2', title: 'Check for Interference', description: 'Move other electronic devices away from the TV.' },
      { id: 's3', title: 'External Audio Test', description: 'Connect a soundbar. If the sound is clear, the internal speakers are physically damaged.' }
    ],
    technicianAdvice: 'Distortion at high volumes often indicates a physical tear in the speaker surround.',
    relatedProblemIds: ['p4104', 'p4129'],
    createdAt: '2025-06-20T12:00:00Z'
  },
  {
    id: 'p4106',
    title: 'Smart TV remote not responding',
    slug: 'smart-tv-remote-not-responding',
    shortDescription: 'The TV does not react to any button presses from the remote control.',
    category: 'hardware',
    subcategory: 'General',
    symptoms: ['No response to remote', 'TV works with physical buttons', 'Remote light doesn\'t blink'],
    causes: ['Dead batteries', 'Blocked IR sensor', 'Remote needs re-pairing'],
    steps: [
      { id: 's1', title: 'Replace Batteries', description: 'Always try fresh, high-quality alkaline batteries first.' },
      { id: 's2', title: 'The Camera Test', description: 'Point the remote at your phone camera and press a button. If you see a light on the screen, the remote is sending a signal.' },
      { id: 's3', title: 'Clear Obstructions', description: 'Ensure nothing is blocking the IR receiver at the bottom of the TV.' }
    ],
    technicianAdvice: 'Modern "Smart" remotes often use Bluetooth. If the IR test works but the TV doesn\'t respond, it likely needs to be re-paired.',
    relatedProblemIds: ['p4107', 'p4135'],
    createdAt: '2025-06-20T13:00:00Z'
  },
  {
    id: 'p4107',
    title: 'Smart TV remote pairing failing',
    slug: 'smart-tv-remote-pairing-failing',
    shortDescription: 'The Bluetooth remote fails to connect or "pair" with the Smart TV.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"Pairing failed" message', 'Remote only works via IR', 'Connection drops'],
    causes: ['Bluetooth interference', 'Low battery', 'Software bug'],
    steps: [
      { id: 's1', title: 'Reset Remote', description: 'Remove batteries and hold the power button for 20 seconds to drain residual power.' },
      { id: 's2', title: 'Pairing Mode', description: 'Hold the specific pairing buttons (usually Back + Play/Pause) while standing close to the TV.' },
      { id: 's3', title: 'Update TV Software', description: 'Use the physical buttons or a mobile app to update the TV firmware.' }
    ],
    technicianAdvice: 'Unplug the TV for 2 minutes to reset the internal Bluetooth module before trying to pair again.',
    relatedProblemIds: ['p4106', 'p4126'],
    createdAt: '2025-06-20T14:00:00Z'
  },
  {
    id: 'p4108',
    title: 'Smart TV unable to connect to WiFi',
    slug: 'smart-tv-unable-to-connect-to-wifi',
    shortDescription: 'The TV sees the network but fails to establish a connection or obtain an IP address.',
    category: 'network',
    subcategory: 'General',
    symptoms: ['"Connection failed"', 'Incorrect password error', 'WiFi list empty'],
    causes: ['Incorrect password', 'Weak signal', 'DHCP failure'],
    steps: [
      { id: 's1', title: 'Restart Router and TV', description: 'Power cycle both devices simultaneously.' },
      { id: 's2', title: 'Check Date and Time', description: 'If the TV date is wrong, it cannot connect to secure WiFi networks.' },
      { id: 's3', title: 'Forget and Reconnect', description: 'Delete the network from the TV settings and enter the password again.' }
    ],
    technicianAdvice: 'If the WiFi list is empty, the internal WiFi module may have become disconnected or failed.',
    relatedProblemIds: ['p4109', 'p4138'],
    createdAt: '2025-06-20T15:00:00Z'
  },
  {
    id: 'p4109',
    title: 'Smart TV WiFi disconnecting frequently',
    slug: 'smart-tv-wifi-disconnecting-frequently',
    shortDescription: 'The TV connects to the internet but drops the connection every few minutes.',
    category: 'network',
    subcategory: 'General',
    symptoms: ['Buffering in apps', '"Network disconnected" popups', 'Slow speeds'],
    causes: ['Signal interference', 'Overloaded router', 'WiFi module overheating'],
    steps: [
      { id: 's1', title: 'Use 5GHz Band', description: 'If your router supports it, use 5GHz to avoid interference from 2.4GHz devices.' },
      { id: 's2', title: 'Disable "Quick Start"', description: 'Some TVs have a "Fast Boot" mode that doesn\'t properly reset the network card.' },
      { id: 's3', title: 'Check for Obstructions', description: 'Ensure the TV isn\'t blocked by large metal objects or mirrors.' }
    ],
    technicianAdvice: 'For the most stable experience, use a wired Ethernet connection if possible.',
    relatedProblemIds: ['p4108', 'p4116'],
    createdAt: '2025-06-20T16:00:00Z'
  },
  {
    id: 'p4110',
    title: 'Smart TV unable to update software',
    slug: 'smart-tv-unable-to-update-software',
    shortDescription: 'The TV fails to check for updates or the "Update" button is greyed out.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"Server unavailable"', 'No update found', 'Greyed out menu'],
    causes: ['No internet connection', 'Server downtime', 'Region mismatch'],
    steps: [
      { id: 's1', title: 'Check Internet', description: 'Ensure other apps like YouTube are working.' },
      { id: 's2', title: 'Manual Update', description: 'Visit the manufacturer website, download the firmware to a USB, and update via the TV menu.' },
      { id: 's3', title: 'Reset Network Settings', description: 'Clear the network cache and try again.' }
    ],
    technicianAdvice: 'Some older Smart TVs no longer receive over-the-air updates and require manual USB installation.',
    relatedProblemIds: ['p4111', 'p4137'],
    createdAt: '2025-06-20T17:00:00Z'
  },
  {
    id: 'p4111',
    title: 'Smart TV software update failing',
    slug: 'smart-tv-software-update-failing',
    shortDescription: 'The update starts downloading but stops with an error code or gets stuck at a certain percentage.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Error code (e.g., 007)', 'Stuck at 50%', 'TV reboots during update'],
    causes: ['Insufficient storage', 'Interrupted download', 'Corrupted update file'],
    steps: [
      { id: 's1', title: 'Clear App Cache', description: 'Free up space by deleting unused apps or clearing cache.' },
      { id: 's2', title: 'Use Wired Connection', description: 'WiFi drops can corrupt the update file; use Ethernet for the update.' },
      { id: 's3', title: 'USB Recovery', description: 'If the TV is stuck, use a USB drive to perform a clean install.' }
    ],
    technicianAdvice: 'Never turn off the TV during an update, as this can "brick" the main board.',
    relatedProblemIds: ['p4110', 'p4102'],
    createdAt: '2025-06-20T18:00:00Z'
  },
  {
    id: 'p4112',
    title: 'Smart TV apps crashing',
    slug: 'smart-tv-apps-crashing',
    shortDescription: 'Streaming apps like Netflix or YouTube close unexpectedly or return to the home screen.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['App closes suddenly', 'Freezing during playback', 'Black screen on launch'],
    causes: ['Outdated app', 'Memory leak', 'Corrupted app data'],
    steps: [
      { id: 's1', title: 'Force Close App', description: 'Go to Settings > Apps and select "Force Stop".' },
      { id: 's2', title: 'Reinstall App', description: 'Delete the app and download it again from the app store.' },
      { id: 's3', title: 'Cold Boot TV', description: 'Hold the power button on the remote until the TV reboots.' }
    ],
    technicianAdvice: 'If multiple apps crash, the TV\'s internal memory (RAM) might be full. A factory reset is often the best fix.',
    relatedProblemIds: ['p4113', 'p4133'],
    createdAt: '2025-06-20T19:00:00Z'
  },
  {
    id: 'p4113',
    title: 'Smart TV apps not installing',
    slug: 'smart-tv-apps-not-installing',
    shortDescription: 'The app store fails to download or install new applications.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"Installation failed"', 'Download stuck', 'Insufficient space error'],
    causes: ['Full storage', 'Account login issue', 'Incompatible app version'],
    steps: [
      { id: 's1', title: 'Check Storage Space', description: 'Delete old apps or media files to free up space.' },
      { id: 's2', title: 'Sign Out/In', description: 'Sign out of your TV account (e.g., Samsung/Google) and sign back in.' },
      { id: 's3', title: 'Update App Store', description: 'Check if the app store itself needs an update.' }
    ],
    technicianAdvice: 'Ensure your TV\'s region is set correctly, as some apps are geo-restricted.',
    relatedProblemIds: ['p4112', 'p4114'],
    createdAt: '2025-06-20T20:00:00Z'
  },
  {
    id: 'p4114',
    title: 'Smart TV apps not updating',
    slug: 'smart-tv-apps-not-updating',
    shortDescription: 'Existing apps fail to update to the latest version, causing compatibility issues.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Update loop', 'Error message in app store', 'App won\'t launch without update'],
    causes: ['Auto-update disabled', 'Network issues', 'OS version too old'],
    steps: [
      { id: 's1', title: 'Enable Auto-Update', description: 'Check app store settings for an "Auto-update" toggle.' },
      { id: 's2', title: 'Manual App Update', description: 'Go to the app\'s page in the store and select "Update".' },
      { id: 's3', title: 'System Update', description: 'Some apps require a newer version of the TV OS to update.' }
    ],
    technicianAdvice: 'If an app is discontinued by the developer for your TV model, it will no longer update.',
    relatedProblemIds: ['p4113', 'p4110'],
    createdAt: '2025-06-20T21:00:00Z'
  },
  {
    id: 'p4115',
    title: 'Smart TV unable to stream videos',
    slug: 'smart-tv-unable-to-stream-videos',
    shortDescription: 'Apps open, but videos fail to load or show a "Playback Error".',
    category: 'network',
    subcategory: 'General',
    symptoms: ['Infinite loading circle', 'Error code on screen', 'Sound but no video'],
    causes: ['Slow internet', 'DRM issues', 'DNS problems'],
    steps: [
      { id: 's1', title: 'Run Speed Test', description: 'Use the TV browser to check if your speed is at least 5Mbps for HD.' },
      { id: 's2', title: 'Change DNS', description: 'Try setting the TV DNS to 8.8.8.8 (Google) or 1.1.1.1 (Cloudflare).' },
      { id: 's3', title: 'Reset Smart Hub', description: 'Resets the streaming platform without wiping the whole TV.' }
    ],
    technicianAdvice: 'Check if your ISP is throttling streaming traffic or if your router\'s firewall is too restrictive.',
    relatedProblemIds: ['p4116', 'p4108'],
    createdAt: '2025-06-20T22:00:00Z'
  },
  {
    id: 'p4116',
    title: 'Smart TV streaming buffering frequently',
    slug: 'smart-tv-streaming-buffering-frequently',
    shortDescription: 'Videos play for a few seconds then stop to load, making watching impossible.',
    category: 'network',
    subcategory: 'General',
    symptoms: ['Frequent pauses', 'Resolution drops to low quality', 'Audio/Video sync issues'],
    causes: ['Network congestion', 'Weak WiFi signal', 'Background app usage'],
    steps: [
      { id: 's1', title: 'Restart Network', description: 'Unplug your modem and router for 30 seconds.' },
      { id: 's2', title: 'Lower Quality', description: 'Manually set the app quality to 1080p instead of 4K.' },
      { id: 's3', title: 'Close Other Apps', description: 'Ensure other devices on the network aren\'t downloading large files.' }
    ],
    technicianAdvice: 'If using WiFi, try moving the router closer or using a WiFi extender with an Ethernet port.',
    relatedProblemIds: ['p4115', 'p4109'],
    createdAt: '2025-06-20T23:00:00Z'
  },
  {
    id: 'p4117',
    title: 'Smart TV HDMI port not working',
    slug: 'smart-tv-hdmi-port-not-working',
    shortDescription: 'The TV fails to detect any signal from devices plugged into a specific HDMI port.',
    category: 'hardware',
    subcategory: 'General',
    symptoms: ['"No Signal" on one port', 'Flickering image', 'Intermittent connection'],
    causes: ['Broken HDMI port', 'Faulty cable', 'Handshake error'],
    steps: [
      { id: 's1', title: 'Try Different Cable', description: 'HDMI cables fail often; test with a known working one.' },
      { id: 's2', title: 'Try Different Port', description: 'If HDMI 1 is dead, try HDMI 2 to rule out the source device.' },
      { id: 's3', title: 'HDMI Handshake Reset', description: 'Unplug both TV and device from power, disconnect HDMI, wait 2 mins, reconnect HDMI, then power on.' }
    ],
    technicianAdvice: 'Physical damage to the HDMI port pins is common if cables are pulled out at an angle.',
    relatedProblemIds: ['p4118', 'p4119'],
    createdAt: '2025-06-21T08:00:00Z'
  },
  {
    id: 'p4118',
    title: 'Smart TV USB port not working',
    slug: 'smart-tv-usb-port-not-working',
    shortDescription: 'The TV does not recognize USB drives or power USB devices.',
    category: 'hardware',
    subcategory: 'General',
    symptoms: ['Drive not detected', 'No power to LED on drive', 'Error reading USB'],
    causes: ['Unsupported file system', 'Insufficient power', 'Dead port'],
    steps: [
      { id: 's1', title: 'Check File System', description: 'Most TVs only support FAT32 or NTFS, not exFAT or APFS.' },
      { id: 's2', title: 'Test with Small Drive', description: 'Large external HDDs may require more power than the TV port provides.' },
      { id: 's3', title: 'Restart TV', description: 'A full power cycle can reset the USB controller.' }
    ],
    technicianAdvice: 'Use the USB port labeled "HDD" for external hard drives, as it usually provides more amperage.',
    relatedProblemIds: ['p4131', 'p4117'],
    createdAt: '2025-06-21T09:00:00Z'
  },
  {
    id: 'p4119',
    title: 'Smart TV unable to detect external devices',
    slug: 'smart-tv-unable-to-detect-external-devices',
    shortDescription: 'The TV fails to show connected devices (consoles, players) in the input list.',
    category: 'hardware',
    subcategory: 'General',
    symptoms: ['Input list empty', 'Device name not showing', 'Auto-switch failing'],
    causes: ['CEC disabled', 'Incompatible resolution', 'Faulty cable'],
    steps: [
      { id: 's1', title: 'Enable HDMI-CEC', description: 'Look for "Anynet+", "Bravia Sync", or "Simplink" in settings and turn it on.' },
      { id: 's2', title: 'Check Device Power', description: 'Ensure the external device is fully powered on and outputting a signal.' },
      { id: 's3', title: 'Reset Input List', description: 'Some TVs have an "Edit Inputs" option to refresh the list.' }
    ],
    technicianAdvice: 'If the device is 4K but the TV is 1080p, the TV won\'t "see" it unless the device is set to a lower resolution.',
    relatedProblemIds: ['p4117', 'p4125'],
    createdAt: '2025-06-21T10:00:00Z'
  },
  {
    id: 'p4120',
    title: 'Smart TV screen flickering',
    slug: 'smart-tv-screen-flickering',
    shortDescription: 'The display brightness or image pulses or flashes rapidly.',
    category: 'hardware',
    subcategory: 'General',
    symptoms: ['Rapid flashing', 'Brightness jumps', 'Intermittent blackouts'],
    causes: ['Loose cable', 'Eco-sensor glitch', 'Failing backlight'],
    steps: [
      { id: 's1', title: 'Disable Eco-Sensor', description: 'Turn off "Ambient Light Detection" or "Energy Saving" mode.' },
      { id: 's2', title: 'Check HDMI Cable', description: 'A bad cable is the #1 cause of digital flickering.' },
      { id: 's3', title: 'Test Different Input', description: 'If it flickers on HDMI but not on YouTube, the issue is the source or cable.' }
    ],
    technicianAdvice: 'If the flickering happens on all inputs including the menu, the LED backlight strips are likely failing.',
    relatedProblemIds: ['p4103', 'p4121'],
    createdAt: '2025-06-21T11:00:00Z'
  },
  {
    id: 'p4121',
    title: 'Smart TV screen showing lines',
    slug: 'smart-tv-screen-showing-lines',
    shortDescription: 'Vertical or horizontal lines appear across the television screen.',
    category: 'hardware',
    subcategory: 'General',
    symptoms: ['Thin vertical lines', 'Thick horizontal bands', 'Colored lines'],
    causes: ['Loose LVDS cable', 'T-Con board failure', 'Panel damage'],
    steps: [
      { id: 's1', title: 'The Tap Test', description: 'Gently tap the back of the TV near the ports. If the lines flicker, a cable is loose.' },
      { id: 's2', title: 'Check Different Inputs', description: 'If lines appear on the menu, the panel or T-Con is faulty.' },
      { id: 's3', title: 'Power Cycle', description: 'Unplug for 10 minutes to discharge the T-Con board.' }
    ],
    technicianAdvice: 'Vertical lines that don\'t change are usually a sign of "tab bonding" failure in the panel, which is often unrepairable.',
    relatedProblemIds: ['p4120', 'p4122'],
    createdAt: '2025-06-21T12:00:00Z'
  },
  {
    id: 'p4122',
    title: 'Smart TV colors distorted',
    slug: 'smart-tv-colors-distorted',
    shortDescription: 'The screen colors look "solarized", inverted, or have a heavy tint (e.g., all green).',
    category: 'hardware',
    subcategory: 'General',
    symptoms: ['Inverted colors', 'Neon-like appearance', 'Single color tint'],
    causes: ['Incorrect picture settings', 'Failing T-Con board', 'Loose internal ribbon cable'],
    steps: [
      { id: 's1', title: 'Reset Picture Settings', description: 'Go to Settings > Picture > Reset Picture.' },
      { id: 's2', title: 'Check Accessibility Settings', description: 'Ensure "High Contrast" or "Color Inversion" isn\'t accidentally enabled.' },
      { id: 's3', title: 'Update Firmware', description: 'Software bugs can sometimes cause color mapping errors.' }
    ],
    technicianAdvice: 'A "solarized" or "negative" image is a classic symptom of a failing AS15 chip on the T-Con board.',
    relatedProblemIds: ['p4121', 'p4120'],
    createdAt: '2025-06-21T13:00:00Z'
  },
  {
    id: 'p4123',
    title: 'Smart TV unable to mirror screen',
    slug: 'smart-tv-unable-to-mirror-screen',
    shortDescription: 'Your phone or laptop fails to find the TV when trying to cast or mirror the screen.',
    category: 'network',
    subcategory: 'General',
    symptoms: ['TV not in list', 'Connection timed out', 'Black screen on TV'],
    causes: ['Different WiFi networks', 'Disabled AirPlay/Cast', 'Incompatible device'],
    steps: [
      { id: 's1', title: 'Check WiFi Network', description: 'Both devices MUST be on the exact same WiFi SSID and band (2.4GHz vs 5GHz).' },
      { id: 's2', title: 'Enable Screen Sharing', description: 'Ensure "AirPlay" or "Screen Mirroring" is set to ON in TV settings.' },
      { id: 's3', title: 'Restart Both Devices', description: 'Clears the discovery cache on both the TV and the source device.' }
    ],
    technicianAdvice: 'Public or office WiFi networks often block the "discovery" protocols needed for screen mirroring.',
    relatedProblemIds: ['p4124', 'p4125'],
    createdAt: '2025-06-21T14:00:00Z'
  },
  {
    id: 'p4124',
    title: 'Smart TV screen mirroring lagging',
    slug: 'smart-tv-screen-mirroring-lagging',
    shortDescription: 'The mirrored image is choppy, pixelated, or several seconds behind the source device.',
    category: 'network',
    subcategory: 'General',
    symptoms: ['Stuttering video', 'Audio out of sync', 'Connection drops'],
    causes: ['Weak WiFi signal', 'High network traffic', 'Low-power source device'],
    steps: [
      { id: 's1', title: 'Move Closer to Router', description: 'Mirroring requires high bandwidth; a weak signal causes lag.' },
      { id: 's2', title: 'Use 5GHz WiFi', description: '5GHz is much faster and less prone to interference for mirroring.' },
      { id: 's3', title: 'Lower Resolution', description: 'Reduce the resolution on your laptop/phone to 720p to reduce data load.' }
    ],
    technicianAdvice: 'Mirroring is very CPU-intensive. Ensure your phone/laptop isn\'t in "Power Saving" mode.',
    relatedProblemIds: ['p4123', 'p4116'],
    createdAt: '2025-06-21T15:00:00Z'
  },
  {
    id: 'p4125',
    title: 'Smart TV unable to connect to casting devices',
    slug: 'smart-tv-unable-to-connect-to-casting-devices',
    shortDescription: 'The TV fails to receive content from apps like YouTube or Netflix via the "Cast" button.',
    category: 'network',
    subcategory: 'General',
    symptoms: ['Cast icon missing', 'Connection failed', 'Infinite loading'],
    causes: ['Outdated app', 'Google Cast service disabled', 'Router firewall'],
    steps: [
      { id: 's1', title: 'Update Apps', description: 'Ensure both the mobile app and the TV app are up to date.' },
      { id: 's2', title: 'Reset Network Settings', description: 'Clears any IP conflicts preventing discovery.' },
      { id: 's3', title: 'Check Router AP Isolation', description: 'Ensure "AP Isolation" is DISABLED in your router settings.' }
    ],
    technicianAdvice: 'If the cast icon is missing, the TV\'s "Chromecast Built-in" app may need its cache cleared.',
    relatedProblemIds: ['p4123', 'p4115'],
    createdAt: '2025-06-21T16:00:00Z'
  },
  {
    id: 'p4126',
    title: 'Smart TV Bluetooth not working',
    slug: 'smart-tv-bluetooth-not-working',
    shortDescription: 'The TV fails to turn on Bluetooth or find any nearby Bluetooth devices.',
    category: 'hardware',
    subcategory: 'General',
    symptoms: ['Bluetooth toggle won\'t turn on', 'Searching forever', 'Error message'],
    causes: ['Bluetooth module failure', 'Software glitch', 'Interference'],
    steps: [
      { id: 's1', title: 'Cold Boot', description: 'Unplug the TV for 5 minutes to reset the hardware modules.' },
      { id: 's2', title: 'Check for Interference', description: 'Move other Bluetooth or 2.4GHz devices away from the TV.' },
      { id: 's3', title: 'Update TV Software', description: 'Bluetooth drivers are often updated via system firmware.' }
    ],
    technicianAdvice: 'If Bluetooth and WiFi both fail, they likely share a single internal card that needs replacement.',
    relatedProblemIds: ['p4127', 'p4107'],
    createdAt: '2025-06-21T17:00:00Z'
  },
  {
    id: 'p4127',
    title: 'Smart TV unable to pair Bluetooth devices',
    slug: 'smart-tv-unable-to-pair-bluetooth-devices',
    shortDescription: 'The TV finds the headphones or speaker but fails to complete the pairing process.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"Pairing unsuccessful"', 'PIN mismatch', 'Device disappears'],
    causes: ['Device already paired elsewhere', 'Incompatible Bluetooth version', 'Full pairing list'],
    steps: [
      { id: 's1', title: 'Clear Pairing List', description: 'Delete all old Bluetooth devices from the TV settings.' },
      { id: 's2', title: 'Reset Bluetooth Device', description: 'Put your headphones/speaker into pairing mode correctly.' },
      { id: 's3', title: 'Stand Closer', description: 'Pairing requires a very strong signal; stay within 3 feet during the process.' }
    ],
    technicianAdvice: 'Ensure the Bluetooth device isn\'t currently connected to your phone, as most can only hold one active connection.',
    relatedProblemIds: ['p4126', 'p4128'],
    createdAt: '2025-06-21T18:00:00Z'
  },
  {
    id: 'p4128',
    title: 'Smart TV Bluetooth audio lagging',
    slug: 'smart-tv-bluetooth-audio-lagging',
    shortDescription: 'The sound from Bluetooth headphones is noticeably behind the picture on the screen.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Lip-sync issues', 'Delayed sound effects', 'Audio stutter'],
    causes: ['High latency codec', 'Weak signal', 'Processing delay'],
    steps: [
      { id: 's1', title: 'Adjust Audio Delay', description: 'Go to Settings > Sound > Expert Settings > Digital Output Audio Delay.' },
      { id: 's2', title: 'Use Game Mode', description: 'Reduces picture processing time to match audio speed.' },
      { id: 's3', title: 'Update Headphones', description: 'Check if your Bluetooth device has a firmware update.' }
    ],
    technicianAdvice: 'Bluetooth audio always has some lag. Look for "Low Latency" (aptX-LL) compatible devices for the best results.',
    relatedProblemIds: ['p4127', 'p4104'],
    createdAt: '2025-06-21T19:00:00Z'
  },
  {
    id: 'p4129',
    title: 'Smart TV internal storage full',
    slug: 'smart-tv-internal-storage-full',
    shortDescription: 'The TV shows a "Storage Full" warning, preventing new apps or updates.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Warning popups', 'Apps won\'t update', 'Slow UI'],
    causes: ['Too many apps', 'Large cache files', 'Hidden system logs'],
    steps: [
      { id: 's1', title: 'Delete Unused Apps', description: 'Go to the App Manager and remove anything you don\'t use.' },
      { id: 's2', title: 'Clear All App Cache', description: 'Some TVs have a "Device Care" or "Storage Manager" to clear cache at once.' },
      { id: 's3', title: 'Reset Smart Hub', description: 'Clears out temporary files and app data without a full factory reset.' }
    ],
    technicianAdvice: 'Most Smart TVs only have 4GB to 8GB of storage. Avoid installing large games.',
    relatedProblemIds: ['p4130', 'p4113'],
    createdAt: '2025-06-21T20:00:00Z'
  },
  {
    id: 'p4130',
    title: 'Smart TV unable to delete apps',
    slug: 'smart-tv-unable-to-delete-apps',
    shortDescription: 'The "Delete" or "Uninstall" option is missing or fails to remove an application.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Delete button greyed out', 'App reappears after delete', 'Error message'],
    causes: ['Pre-installed "bloatware"', 'App currently running', 'System restriction'],
    steps: [
      { id: 's1', title: 'Check if Pre-installed', description: 'Manufacturer apps (like Netflix or Prime) often cannot be deleted.' },
      { id: 's2', title: 'Force Stop First', description: 'Go to App Settings, "Force Stop" the app, then try deleting.' },
      { id: 's3', title: 'Disable App', description: 'If you can\'t delete it, select "Disable" to stop it from running and using resources.' }
    ],
    technicianAdvice: 'Pre-installed apps are part of the system partition and can only be removed via advanced developer tools.',
    relatedProblemIds: ['p4129', 'p4131'],
    createdAt: '2025-06-21T21:00:00Z'
  },
  {
    id: 'p4131',
    title: 'Smart TV unable to clear cache',
    slug: 'smart-tv-unable-to-clear-cache',
    shortDescription: 'The option to clear app cache is missing or doesn\'t free up any space.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Storage remains full', 'No "Clear Cache" button', 'App data persists'],
    causes: ['OS limitation', 'Corrupted system database', 'App-specific lock'],
    steps: [
      { id: 's1', title: 'Cold Boot TV', description: 'Hold the remote power button for 10 seconds. This clears the system RAM cache.' },
      { id: 's2', title: 'Individual App Clear', description: 'Go to Settings > Apps > [App Name] > Storage > Clear Cache.' },
      { id: 's3', title: 'Factory Reset', description: 'The only way to clear deep system-level cached files.' }
    ],
    technicianAdvice: 'Clearing cache is a temporary fix; if storage is always full, you need to delete apps.',
    relatedProblemIds: ['p4129', 'p4130'],
    createdAt: '2025-06-21T22:00:00Z'
  },
  {
    id: 'p4132',
    title: 'Smart TV voice control not working',
    slug: 'smart-tv-voice-control-not-working',
    shortDescription: 'The TV fails to respond when you speak into the remote or use a wake word.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"I didn\'t catch that"', 'No listening icon', 'Voice button unresponsive'],
    causes: ['Microphone muted', 'Remote not paired via Bluetooth', 'No internet connection'],
    steps: [
      { id: 's1', title: 'Check Remote Pairing', description: 'Voice commands require Bluetooth. Ensure your remote is paired.' },
      { id: 's2', title: 'Check Privacy Settings', description: 'Ensure "Voice Recognition" and "Microphone Access" are enabled in settings.' },
      { id: 's3', title: 'Check Internet', description: 'Most voice processing happens in the cloud; WiFi must be active.' }
    ],
    technicianAdvice: 'Check if there is a physical "Mic Off" switch on the bottom of the TV frame.',
    relatedProblemIds: ['p4133', 'p4134'],
    createdAt: '2025-06-21T23:00:00Z'
  },
  {
    id: 'p4133',
    title: 'Smart TV voice recognition failing',
    slug: 'smart-tv-voice-recognition-failing',
    shortDescription: 'The TV hears you but consistently misunderstands your commands.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Wrong search results', 'Transcribed text is gibberish', 'Language mismatch'],
    causes: ['Background noise', 'Incorrect language setting', 'Low-quality microphone'],
    steps: [
      { id: 's1', title: 'Set Language', description: 'Go to Settings > Voice and ensure the correct dialect is selected.' },
      { id: 's2', title: 'Reduce Noise', description: 'Mute the TV sound or move away from fans/AC before speaking.' },
      { id: 's3', title: 'Speak Clearly', description: 'Hold the remote 6 inches from your mouth and speak at a natural pace.' }
    ],
    technicianAdvice: 'Voice recognition accuracy degrades over time if the remote\'s microphone hole is clogged with lint.',
    relatedProblemIds: ['p4132', 'p4134'],
    createdAt: '2025-06-22T08:00:00Z'
  },
  {
    id: 'p4134',
    title: 'Smart TV unable to search via voice',
    slug: 'smart-tv-unable-to-search-via-voice',
    shortDescription: 'Voice commands work for volume/power, but fail to search within apps like YouTube.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"Search unavailable"', 'Voice button does nothing in apps', 'Generic error'],
    causes: ['App-specific restriction', 'Account not signed in', 'Outdated app'],
    steps: [
      { id: 's1', title: 'Sign into App', description: 'Some apps require a logged-in account for voice search features.' },
      { id: 's2', title: 'Update App', description: 'Ensure the specific app (e.g., YouTube) is on the latest version.' },
      { id: 's3', title: 'Check Global Search', description: 'Ensure "Search in Apps" is enabled in the TV\'s main search settings.' }
    ],
    technicianAdvice: 'Not all third-party apps support the TV\'s native voice engine.',
    relatedProblemIds: ['p4132', 'p4133'],
    createdAt: '2025-06-22T09:00:00Z'
  },
  {
    id: 'p4135',
    title: 'Smart TV picture settings not saving',
    slug: 'smart-tv-picture-settings-not-saving',
    shortDescription: 'The TV reverts to "Vivid" or "Store Mode" every time it is turned off.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Settings reset on reboot', 'Brightness too high', '"Store Mode" popup'],
    causes: ['Retail/Store mode enabled', 'Software bug', 'Failing EEPROM'],
    steps: [
      { id: 's1', title: 'Disable Store Mode', description: 'Go to Settings > System > Usage Mode and set to "Home Mode".' },
      { id: 's2', title: 'Apply to All Inputs', description: 'Ensure you select "Apply to All Sources" when changing settings.' },
      { id: 's3', title: 'Update Firmware', description: 'Fixes known bugs where settings partitions become read-only.' }
    ],
    technicianAdvice: 'If "Home Mode" is on but settings still don\'t save, the main board\'s memory chip is likely faulty.',
    relatedProblemIds: ['p4136', 'p4137'],
    createdAt: '2025-06-22T10:00:00Z'
  },
  {
    id: 'p4136',
    title: 'Smart TV sound settings not saving',
    slug: 'smart-tv-sound-settings-not-saving',
    shortDescription: 'Equalizer or speaker output settings reset to default after the TV is powered off.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Soundbar disconnects', 'Equalizer resets', 'Volume limit resets'],
    causes: ['Store mode', 'HDMI-CEC conflict', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Check Usage Mode', description: 'Ensure the TV is in "Home Mode", not "Demo" or "Store".' },
      { id: 's2', title: 'Toggle HDMI-CEC', description: 'Turn off CEC (Anynet+/Simplink) to see if an external device is forcing settings.' },
      { id: 's3', title: 'Factory Reset', description: 'Clears corrupted settings files.' }
    ],
    technicianAdvice: 'External soundbars can sometimes "hijack" TV settings via the ARC/eARC connection.',
    relatedProblemIds: ['p4135', 'p4104'],
    createdAt: '2025-06-22T11:00:00Z'
  },
  {
    id: 'p4137',
    title: 'Smart TV network settings not saving',
    slug: 'smart-tv-network-settings-not-saving',
    shortDescription: 'The TV forgets the WiFi password or static IP every time it reboots.',
    category: 'network',
    subcategory: 'General',
    symptoms: ['Must re-enter WiFi password', 'IP reverts to DHCP', 'No auto-connect'],
    causes: ['Corrupted network profile', 'Fast boot bug', 'WiFi module failure'],
    steps: [
      { id: 's1', title: 'Forget Network', description: 'Delete the network and reconnect from scratch.' },
      { id: 's2', title: 'Disable "Quick Start"', description: 'Forces the network card to fully initialize on every boot.' },
      { id: 's3', title: 'Manual IP Setup', description: 'Try assigning a static IP to see if it "sticks".' }
    ],
    technicianAdvice: 'If the TV forgets the password immediately, the security encryption (WPA3) might be incompatible with the TV.',
    relatedProblemIds: ['p4135', 'p4108'],
    createdAt: '2025-06-22T12:00:00Z'
  },
  {
    id: 'p4138',
    title: 'Smart TV unable to access app store',
    slug: 'smart-tv-unable-to-access-app-store',
    shortDescription: 'The app store icon is missing or clicking it does nothing.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Missing icon', 'Clicking does nothing', 'Loading forever'],
    causes: ['Account not signed in', 'Region mismatch', 'Server outage'],
    steps: [
      { id: 's1', title: 'Check Account', description: 'Ensure you are signed into the manufacturer\'s account (Samsung/LG/Google).' },
      { id: 's2', title: 'Check Country Settings', description: 'The app store is disabled if the TV region is set incorrectly.' },
      { id: 's3', title: 'Update System', description: 'The app store often requires the latest OS to function.' }
    ],
    technicianAdvice: 'If the TV is very old, the manufacturer may have shut down the app store for that model.',
    relatedProblemIds: ['p4139', 'p4113'],
    createdAt: '2025-06-22T13:00:00Z'
  },
  {
    id: 'p4139',
    title: 'Smart TV app store crashing',
    slug: 'smart-tv-app-store-crashing',
    shortDescription: 'The app store opens but closes immediately or freezes while browsing.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Store closes suddenly', 'Freezing on search', 'White screen'],
    causes: ['Corrupted store cache', 'Low system memory', 'Software bug'],
    steps: [
      { id: 's1', title: 'Clear Store Cache', description: 'Go to Settings > Apps > System Apps > App Store > Clear Cache.' },
      { id: 's2', title: 'Cold Boot', description: 'Hold the power button on the remote for 10 seconds to reboot.' },
      { id: 's3', title: 'Reset Smart Hub', description: 'Reinstalls the app store and its dependencies.' }
    ],
    technicianAdvice: 'App store crashes are often caused by a background update that was interrupted.',
    relatedProblemIds: ['p4138', 'p4140'],
    createdAt: '2025-06-22T14:00:00Z'
  },
  {
    id: 'p4140',
    title: 'Smart TV app store showing error codes',
    slug: 'smart-tv-app-store-showing-error-codes',
    shortDescription: 'The app store displays specific error codes (e.g., 102, 3010) when trying to browse or download.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Error code on screen', 'Download blocked', 'Server error'],
    causes: ['DNS issues', 'Server maintenance', 'SSL certificate error'],
    steps: [
      { id: 's1', title: 'Check Date and Time', description: 'Incorrect time causes SSL errors that block the app store.' },
      { id: 's2', title: 'Change DNS', description: 'Set DNS to 8.8.8.8 to bypass ISP routing issues.' },
      { id: 's3', title: 'Search Error Code', description: 'Look up the specific code on the manufacturer\'s support site.' }
    ],
    technicianAdvice: 'Error codes are usually network-related. Try a mobile hotspot to see if the error persists.',
    relatedProblemIds: ['p4139', 'p4110'],
    createdAt: '2025-06-22T15:00:00Z'
  },
  {
    id: 'p4141',
    title: 'Smart TV unable to connect to external speakers',
    slug: 'smart-tv-unable-to-connect-to-external-speakers',
    shortDescription: 'The TV fails to output audio to a soundbar or receiver via Optical or HDMI ARC.',
    category: 'hardware',
    subcategory: 'General',
    symptoms: ['No sound from soundbar', 'TV speakers still active', 'Optical port not glowing'],
    causes: ['Incorrect output setting', 'Faulty cable', 'CEC disabled'],
    steps: [
      { id: 's1', title: 'Select Audio Output', description: 'Go to Settings > Sound > Output and select "Optical" or "HDMI ARC".' },
      { id: 's2', title: 'Enable HDMI-CEC', description: 'Ensure Anynet+/Simplink is ON for ARC to function.' },
      { id: 's3', title: 'Check Optical Cable', description: 'Ensure the cable is clicked in firmly and the red light is visible at the end.' }
    ],
    technicianAdvice: 'If using ARC, ensure the cable is plugged into the specific HDMI port on the TV labeled "ARC" or "eARC".',
    relatedProblemIds: ['p4142', 'p4104'],
    createdAt: '2025-06-22T16:00:00Z'
  },
  {
    id: 'p4142',
    title: 'Smart TV external speakers sound distorted',
    slug: 'smart-tv-external-speakers-sound-distorted',
    shortDescription: 'Audio sent to external speakers has static, pops, or is out of sync.',
    category: 'hardware',
    subcategory: 'General',
    symptoms: ['Popping sounds', 'Audio delay', 'Static noise'],
    causes: ['Digital format mismatch', 'Bad cable', 'Ground loop interference'],
    steps: [
      { id: 's1', title: 'Change Audio Format', description: 'Switch the TV output from "Auto" or "Dolby" to "PCM" to see if distortion stops.' },
      { id: 's2', title: 'Replace Cable', description: 'A frayed HDMI or Optical cable can cause digital "jitter" or noise.' },
      { id: 's3', title: 'Check Grounding', description: 'Ensure the TV and soundbar are plugged into the same power strip.' }
    ],
    technicianAdvice: 'If the sound is only distorted on high-bitrate content (4K), your HDMI cable may not have enough bandwidth.',
    relatedProblemIds: ['p4141', 'p4105'],
    createdAt: '2025-06-22T17:00:00Z'
  },
  {
    id: 'p4143',
    title: 'Smart TV unable to access streaming services',
    slug: 'smart-tv-unable-to-access-streaming-services',
    shortDescription: 'The TV connects to WiFi but fails to load the main pages of Netflix, Hulu, or Disney+.',
    category: 'network',
    subcategory: 'General',
    symptoms: ['"Service unavailable"', 'Blank screen in apps', 'Login loop'],
    causes: ['ISP blocking', 'DNS failure', 'Region lock'],
    steps: [
      { id: 's1', title: 'Check Service Status', description: 'Use your phone to see if the streaming service is down globally.' },
      { id: 's2', title: 'Reset Router', description: 'Clears any stale DNS entries from your ISP.' },
      { id: 's3', title: 'Check Region Settings', description: 'Ensure your TV region matches your streaming account region.' }
    ],
    technicianAdvice: 'Some streaming services block "Smart DNS" or VPN services. Disable them if active.',
    relatedProblemIds: ['p4144', 'p4115'],
    createdAt: '2025-06-22T18:00:00Z'
  },
  {
    id: 'p4144',
    title: 'Smart TV streaming services showing error codes',
    slug: 'smart-tv-streaming-services-showing-error-codes',
    shortDescription: 'Apps like Netflix show specific error codes (e.g., UI-800-3, nw-2-5) instead of playing video.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Error code on screen', 'Playback blocked', 'App won\'t load'],
    causes: ['Corrupted app data', 'Network timeout', 'Account issue'],
    steps: [
      { id: 's1', title: 'Clear App Data', description: 'Go to Settings > Apps > [App Name] > Clear Data.' },
      { id: 's2', title: 'Sign Out and Back In', description: 'Forces the app to refresh its security tokens.' },
      { id: 's3', title: 'Check Network Connection', description: 'Run the "Network Test" built into the streaming app settings.' }
    ],
    technicianAdvice: 'Netflix error "nw-2-5" almost always indicates a DNS or router configuration problem.',
    relatedProblemIds: ['p4143', 'p4112'],
    createdAt: '2025-06-22T19:00:00Z'
  },
  {
    id: 'p4145',
    title: 'Smart TV unable to update apps',
    slug: 'smart-tv-unable-to-update-apps',
    shortDescription: 'The TV detects an update is available but fails to download or install it.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Update stuck at 0%', '"Update failed" message', 'App store crashes'],
    causes: ['Low storage', 'Network interruption', 'App store bug'],
    steps: [
      { id: 's1', title: 'Free Up Space', description: 'Delete one or two unused apps to ensure there\'s room for the update.' },
      { id: 's2', title: 'Restart App Store', description: 'Force stop the app store and try again.' },
      { id: 's3', title: 'Check Internet Speed', description: 'Slow or unstable WiFi can cause the download to time out.' }
    ],
    technicianAdvice: 'If an app won\'t update, try deleting it entirely and installing the latest version from scratch.',
    relatedProblemIds: ['p4114', 'p4113'],
    createdAt: '2025-06-22T20:00:00Z'
  },
  {
    id: 'p4146',
    title: 'Smart TV apps not responding',
    slug: 'smart-tv-apps-not-responding',
    shortDescription: 'Apps open but don\'t react to remote clicks or get stuck on a single frame.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Frozen screen', 'Remote clicks ignored', 'Infinite loading'],
    causes: ['System memory full', 'App crash', 'Remote pairing issue'],
    steps: [
      { id: 's1', title: 'Cold Boot', description: 'Hold the power button on the remote for 10 seconds to force a system restart.' },
      { id: 's2', title: 'Clear App Cache', description: 'Go to Settings > Apps > [App Name] > Clear Cache.' },
      { id: 's3', title: 'Check Remote Batteries', description: 'Low batteries can cause intermittent signal loss.' }
    ],
    technicianAdvice: 'If the TV is slow to respond to all apps, the internal processor might be overheating.',
    relatedProblemIds: ['p4112', 'p4106'],
    createdAt: '2025-06-22T21:00:00Z'
  },
  {
    id: 'p4147',
    title: 'Smart TV unable to connect to smart home devices',
    slug: 'smart-tv-unable-to-connect-to-smart-home-devices',
    shortDescription: 'The TV fails to find or link with smart lights, cameras, or hubs.',
    category: 'network',
    subcategory: 'General',
    symptoms: ['Device not found', 'Pairing failed', 'Offline status'],
    causes: ['Different WiFi networks', 'Incompatible protocol', 'Discovery disabled'],
    steps: [
      { id: 's1', title: 'Check WiFi SSID', description: 'Ensure both the TV and the smart device are on the same 2.4GHz network.' },
      { id: 's2', title: 'Enable Discovery', description: 'Turn on "SSDP" or "UPnP" in your router settings.' },
      { id: 's3', title: 'Update Smart App', description: 'Ensure the TV\'s smart home app (e.g., SmartThings) is updated.' }
    ],
    technicianAdvice: 'Most smart home devices only support 2.4GHz. If your TV is on 5GHz, they may not "see" each other.',
    relatedProblemIds: ['p4148', 'p4149'],
    createdAt: '2025-06-22T22:00:00Z'
  },
  {
    id: 'p4148',
    title: 'Smart TV smart home integration failing',
    slug: 'smart-tv-smart-home-integration-failing',
    shortDescription: 'The TV is linked to your smart home but commands (like "Turn off lights") don\'t work.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"Device unresponsive"', 'Command timed out', 'Cloud sync error'],
    causes: ['Account sync error', 'API change', 'Network delay'],
    steps: [
      { id: 's1', title: 'Unlink and Relink', description: 'Remove the TV from your smart home app and add it back.' },
      { id: 's2', title: 'Check Account Permissions', description: 'Ensure the TV has permission to control other devices.' },
      { id: 's3', title: 'Restart Smart Hub', description: 'Resets the local integration engine.' }
    ],
    technicianAdvice: 'Check if the manufacturer\'s cloud service (e.g., LG ThinQ, Samsung Account) is currently down.',
    relatedProblemIds: ['p4147', 'p4149'],
    createdAt: '2025-06-22T23:00:00Z'
  },
  {
    id: 'p4149',
    title: 'Smart TV unable to control smart home devices',
    slug: 'smart-tv-unable-to-control-smart-home-devices',
    shortDescription: 'The TV shows the smart home dashboard, but clicking on devices does nothing.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Buttons unresponsive', 'Status not updating', 'Error message'],
    causes: ['Session expired', 'Firmware mismatch', 'Local network block'],
    steps: [
      { id: 's1', title: 'Sign Out/In', description: 'Refresh your smart home account credentials on the TV.' },
      { id: 's2', title: 'Update Device Firmware', description: 'Ensure the light/camera you are trying to control is up to date.' },
      { id: 's3', title: 'Check Router Firewall', description: 'Ensure the TV isn\'t being blocked from communicating with local IPs.' }
    ],
    technicianAdvice: 'Some integrations require a dedicated hub (like Zigbee or Matter) to function correctly.',
    relatedProblemIds: ['p4147', 'p4148'],
    createdAt: '2025-06-23T08:00:00Z'
  },
  {
    id: 'p4150',
    title: 'Smart TV screen showing ghosting',
    slug: 'smart-tv-screen-showing-ghosting',
    shortDescription: 'Moving objects on the screen leave a faint trail or "ghost" behind them.',
    category: 'hardware',
    subcategory: 'General',
    symptoms: ['Trailing images', 'Blurry motion', 'Smearing'],
    causes: ['Slow panel response time', 'Incorrect picture mode', 'Failing T-Con board'],
    steps: [
      { id: 's1', title: 'Enable Game Mode', description: 'Turns off heavy processing to improve response time.' },
      { id: 's2', title: 'Adjust Motion Settings', description: 'Turn off "Motion Smoothing" or "Auto Motion Plus".' },
      { id: 's3', title: 'Check Temperature', description: 'LCD panels respond slower when cold; let the TV warm up for 20 minutes.' }
    ],
    technicianAdvice: 'Ghosting is often a physical limitation of cheaper VA panels, but can be worsened by "Dynamic Contrast" settings.',
    relatedProblemIds: ['p4151', 'p4120'],
    createdAt: '2025-06-23T09:00:00Z'
  },
  {
    id: 'p4151',
    title: 'Smart TV screen showing motion blur',
    slug: 'smart-tv-screen-showing-motion-blur',
    shortDescription: 'Fast-moving scenes (sports, action) look blurry or lose detail.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Blurry sports', 'Juddering image', 'Loss of detail in motion'],
    causes: ['Low refresh rate', 'Processing lag', 'Incorrect motion settings'],
    steps: [
      { id: 's1', title: 'Enable Motion Interpolation', description: 'Turn on "TruMotion" or "Motionflow" and set to a moderate level.' },
      { id: 's2', title: 'Check Source Quality', description: 'Low-bitrate streaming (like 720p) will always look blurry in motion.' },
      { id: 's3', title: 'Use High-Speed HDMI', description: 'Ensure your cable supports the TV\'s native refresh rate (60Hz or 120Hz).' }
    ],
    technicianAdvice: 'Motion blur is different from ghosting; it\'s often a result of how the TV processes 24fps film content.',
    relatedProblemIds: ['p4150', 'p4121'],
    createdAt: '2025-06-23T10:00:00Z'
  },
  {
    id: 'p4152',
    title: 'Smart TV unable to adjust picture settings',
    slug: 'smart-tv-unable-to-adjust-picture-settings',
    shortDescription: 'The Brightness, Contrast, or Color sliders are greyed out or don\'t change the image.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Greyed out menus', 'Settings don\'t apply', 'Locked picture mode'],
    causes: ['HDR content active', 'Store Mode enabled', 'Intelligent Mode active'],
    steps: [
      { id: 's1', title: 'Disable Intelligent Mode', description: 'Turn off "AI Picture" or "Adaptive Brightness" to unlock manual controls.' },
      { id: 's2', title: 'Check Content Type', description: 'When playing HDR or Dolby Vision, many settings are locked to maintain accuracy.' },
      { id: 's3', title: 'Reset Picture Mode', description: 'Switch to "Standard" or "Movie" mode to see if controls unlock.' }
    ],
    technicianAdvice: 'If the TV is in "Store Mode", it will reset any changes you make within minutes.',
    relatedProblemIds: ['p4135', 'p4153'],
    createdAt: '2025-06-23T11:00:00Z'
  },
  {
    id: 'p4153',
    title: 'Smart TV unable to adjust sound settings',
    slug: 'smart-tv-unable-to-adjust-sound-settings',
    shortDescription: 'The Equalizer or Sound Mode settings are unavailable or unresponsive.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Greyed out sound menu', 'EQ doesn\'t change tone', 'Fixed volume'],
    causes: ['External speakers connected', 'AI Sound active', 'System restriction'],
    steps: [
      { id: 's1', title: 'Switch to Internal Speakers', description: 'Many sound settings are disabled when using Optical or HDMI ARC.' },
      { id: 's2', title: 'Turn off AI Sound', description: 'Disable "Adaptive Sound" or "Clear Voice" to unlock the Equalizer.' },
      { id: 's3', title: 'Check for Software Update', description: 'Fixes bugs where the audio processor gets stuck in a specific mode.' }
    ],
    technicianAdvice: 'If using a soundbar, you must adjust the EQ on the soundbar itself, not the TV.',
    relatedProblemIds: ['p4136', 'p4152'],
    createdAt: '2025-06-23T12:00:00Z'
  },
  {
    id: 'p4154',
    title: 'Smart TV unable to access system settings',
    slug: 'smart-tv-unable-to-access-system-settings',
    shortDescription: 'The "General" or "System" menu fails to open or is missing entirely.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Menu won\'t open', 'Missing icons', 'TV freezes on click'],
    causes: ['Software corruption', 'Parental locks', 'Failing main board'],
    steps: [
      { id: 's1', title: 'Cold Boot', description: 'Unplug the TV for 2 minutes to clear the system memory.' },
      { id: 's2', title: 'Check Parental Controls', description: 'Ensure a PIN hasn\'t been set that restricts access to settings.' },
      { id: 's3', title: 'Use Mobile App', description: 'Try accessing settings via the manufacturer\'s remote app on your phone.' }
    ],
    technicianAdvice: 'If the settings menu is missing, the TV\'s internal firmware partition may be corrupted.',
    relatedProblemIds: ['p4155', 'p4110'],
    createdAt: '2025-06-23T13:00:00Z'
  },
  {
    id: 'p4155',
    title: 'Smart TV system settings crashing',
    slug: 'smart-tv-system-settings-crashing',
    shortDescription: 'The TV returns to the home screen or reboots whenever you try to change a setting.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Sudden exit from menu', 'TV reboots on click', 'Error message'],
    causes: ['Corrupted settings database', 'Low RAM', 'Firmware bug'],
    steps: [
      { id: 's1', title: 'Clear App Cache', description: 'If possible, clear cache for the "System UI" or "Settings" app.' },
      { id: 's2', title: 'Remove USB Devices', description: 'A faulty USB drive can cause the system to crash when scanning for storage settings.' },
      { id: 's3', title: 'Factory Reset via Buttons', description: 'Since the menu crashes, use the physical reset button on the TV.' }
    ],
    technicianAdvice: 'This is often caused by a "half-installed" system update. A full factory reset is required.',
    relatedProblemIds: ['p4154', 'p4102'],
    createdAt: '2025-06-23T14:00:00Z'
  },
  {
    id: 'p4156',
    title: 'Smart TV unable to factory reset',
    slug: 'smart-tv-unable-to-factory-reset',
    shortDescription: 'The "Factory Reset" option is greyed out or requires a PIN you don\'t have.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Greyed out button', 'PIN required', 'Reset fails to start'],
    causes: ['Default PIN changed', 'System lock', 'Software bug'],
    steps: [
      { id: 's1', title: 'Try Default PINs', description: 'Common defaults are 0000, 1111, 1234, or 7777.' },
      { id: 's2', title: 'Service Menu Reset', description: 'Use a specific remote code (e.g., Mute-1-8-2-Power) to access the hidden service menu.' },
      { id: 's3', title: 'Physical Reset Button', description: 'Look for a "Reset" pinhole on the back or side of the TV.' }
    ],
    technicianAdvice: 'If you forgot your PIN, you can usually reset it by holding specific buttons on the remote while the TV is off.',
    relatedProblemIds: ['p4157', 'p4154'],
    createdAt: '2025-06-23T15:00:00Z'
  },
  {
    id: 'p4157',
    title: 'Smart TV factory reset failing',
    slug: 'smart-tv-factory-reset-failing',
    shortDescription: 'The reset process starts but gets stuck or ends with an error, leaving the TV unchanged.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Stuck at 0%', 'Error message during reset', 'Settings not wiped'],
    causes: ['Corrupted recovery partition', 'Hardware memory failure', 'Interrupted power'],
    steps: [
      { id: 's1', title: 'Unplug All Cables', description: 'Remove HDMI and USB cables before starting the reset.' },
      { id: 's2', title: 'Use USB Recovery', description: 'Download the firmware to a USB and use the "Force Update" method.' },
      { id: 's3', title: 'Check Main Board', description: 'If reset fails repeatedly, the internal storage chip is likely dead.' }
    ],
    technicianAdvice: 'A failed factory reset is a strong indicator of a hardware failure on the main board.',
    relatedProblemIds: ['p4156', 'p4102'],
    createdAt: '2025-06-23T16:00:00Z'
  },
  {
    id: 'p4158',
    title: 'Smart TV unable to connect to Ethernet',
    slug: 'smart-tv-unable-to-connect-to-ethernet',
    shortDescription: 'The TV fails to recognize a wired internet connection even when the cable is plugged in.',
    category: 'network',
    subcategory: 'General',
    symptoms: ['"Cable disconnected"', 'No IP address', 'No lights on LAN port'],
    causes: ['Faulty cable', 'Dead LAN port', 'Router port disabled'],
    steps: [
      { id: 's1', title: 'Check Cable Lights', description: 'Look for green/orange blinking lights on the TV or router port.' },
      { id: 's2', title: 'Try Different Cable', description: 'Ethernet cables can have internal breaks; test with a new Cat6 cable.' },
      { id: 's3', title: 'Disable WiFi', description: 'Some TVs won\'t use Ethernet if WiFi is already connected.' }
    ],
    technicianAdvice: 'If the LAN port has no lights and a new cable doesn\'t work, the port may have been damaged by a power surge.',
    relatedProblemIds: ['p4159', 'p4108'],
    createdAt: '2025-06-23T17:00:00Z'
  },
  {
    id: 'p4159',
    title: 'Smart TV Ethernet disconnecting frequently',
    slug: 'smart-tv-ethernet-disconnecting-frequently',
    shortDescription: 'The wired connection drops randomly, causing apps to buffer or crash.',
    category: 'network',
    subcategory: 'General',
    symptoms: ['"Network lost" popups', 'Buffering', 'Intermittent connection'],
    causes: ['Loose connector', 'Router DHCP lease issue', 'Failing router port'],
    steps: [
      { id: 's1', title: 'Check Connector Click', description: 'Ensure the RJ45 tab is intact and "clicks" into the TV.' },
      { id: 's2', title: 'Assign Static IP', description: 'Prevents the TV from losing connection during DHCP renewals.' },
      { id: 's3', title: 'Try Different Router Port', description: 'Rule out a faulty port on your internet router.' }
    ],
    technicianAdvice: 'A "flapping" Ethernet connection is often caused by a cable that is too long or has poor shielding.',
    relatedProblemIds: ['p4158', 'p4109'],
    createdAt: '2025-06-23T18:00:00Z'
  },
  {
    id: 'p4160',
    title: 'Smart TV unable to access web browser',
    slug: 'smart-tv-unable-to-access-web-browser',
    shortDescription: 'The built-in web browser fails to load pages or crashes on startup.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Browser won\'t open', '"Page cannot be displayed"', 'Extremely slow loading'],
    causes: ['Outdated browser engine', 'Heavy website (too much RAM)', 'No internet'],
    steps: [
      { id: 's1', title: 'Clear Browser History', description: 'Go to Browser Settings > Privacy > Clear Browsing Data.' },
      { id: 's2', title: 'Check Internet', description: 'Ensure other apps like Netflix are working.' },
      { id: 's3', title: 'Avoid Heavy Sites', description: 'TV browsers have limited RAM; avoid sites with many ads or auto-play videos.' }
    ],
    technicianAdvice: 'Smart TV browsers are notoriously limited. For a better experience, use a dedicated streaming stick or cast from your phone.',
    relatedProblemIds: ['p4115', 'p4112'],
    createdAt: '2025-06-23T19:00:00Z'
  }
];
