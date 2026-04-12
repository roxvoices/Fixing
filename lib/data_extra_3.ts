import { Problem } from './types';

export const EXTRA_PROBLEMS_3: Problem[] = [
  {
    id: 'p4201',
    title: 'System recovery not starting',
    slug: 'system-recovery-not-starting',
    shortDescription: 'The system recovery process fails to initiate when triggered from settings or boot menu.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['Recovery menu doesn\'t appear', 'PC boots normally instead of recovery', 'Error message on startup'],
    causes: ['Corrupted recovery partition', 'Missing recovery files', 'BIOS/UEFI settings'],
    steps: [
      { id: 's1', title: 'Check Recovery Partition', description: 'Use Disk Management to ensure the recovery partition exists and is healthy.' },
      { id: 's2', title: 'Use Installation Media', description: 'Create a Windows installation USB and boot from it to access recovery tools.' },
      { id: 's3', title: 'Command Line Trigger', description: 'Run "reagentc /enable" in an elevated Command Prompt to re-enable the recovery environment.' }
    ],
    technicianAdvice: 'If the recovery partition is deleted, you will need to perform a clean install using external media.',
    relatedProblemIds: ['p4202', 'p4214'],
    createdAt: '2025-07-01T08:00:00Z'
  },
  {
    id: 'p4202',
    title: 'System recovery stuck at loading screen',
    slug: 'system-recovery-stuck-at-loading-screen',
    shortDescription: 'The recovery environment begins to load but hangs indefinitely on the splash screen.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['Spinning circle hangs', 'Black screen after logo', 'Unresponsive keyboard/mouse'],
    causes: ['Hardware conflict', 'Corrupted recovery image', 'Disk read errors'],
    steps: [
      { id: 's1', title: 'Disconnect Peripherals', description: 'Unplug all non-essential USB devices (printers, webcams) and try again.' },
      { id: 's2', title: 'Check Disk for Errors', description: 'Run "chkdsk /f" from a command prompt if possible to fix file system errors.' },
      { id: 's3', title: 'Wait it Out', description: 'Sometimes recovery can take up to an hour to initialize on slower hard drives.' }
    ],
    technicianAdvice: 'A hang at the loading screen often indicates a failing hard drive or SSD.',
    relatedProblemIds: ['p4201', 'p4218'],
    createdAt: '2025-07-01T09:00:00Z'
  },
  {
    id: 'p4203',
    title: 'System recovery unable to detect system files',
    slug: 'system-recovery-unable-to-detect-system-files',
    shortDescription: 'Recovery tools report that they cannot find the Windows installation or required system files.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['"No operating system found"', '"Drive where Windows is installed is locked"', 'Empty OS list'],
    causes: ['File system corruption', 'MBR/GPT errors', 'Disconnected drive'],
    steps: [
      { id: 's1', title: 'Check BIOS Detection', description: 'Restart and enter BIOS to ensure the hard drive is detected by the motherboard.' },
      { id: 's2', title: 'Rebuild BCD', description: 'Use "bootrec /rebuildbcd" in the recovery command prompt.' },
      { id: 's3', title: 'Fix MBR', description: 'Run "bootrec /fixmbr" and "bootrec /fixboot" to repair the boot sector.' }
    ],
    technicianAdvice: 'This usually means the boot configuration data is missing or pointing to the wrong partition.',
    relatedProblemIds: ['p4219', 'p4220'],
    createdAt: '2025-07-01T10:00:00Z'
  },
  {
    id: 'p4204',
    title: 'System recovery unable to restore settings',
    slug: 'system-recovery-unable-to-restore-settings',
    shortDescription: 'The recovery process completes but fails to bring back user preferences and system configurations.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['Default wallpaper/theme', 'Lost WiFi passwords', 'Reset app preferences'],
    causes: ['Registry corruption', 'User profile damage', 'Incomplete restore point'],
    steps: [
      { id: 's1', title: 'Try Different Restore Point', description: 'Pick an earlier date if the most recent one failed to restore settings.' },
      { id: 's2', title: 'Check User Profile', description: 'Ensure you are logged into the correct account after recovery.' },
      { id: 's3', title: 'Manual Registry Restore', description: 'Advanced: Restore registry hives from the RegBack folder if available.' }
    ],
    technicianAdvice: 'If settings won\'t restore, your user profile might be too corrupted to be salvaged.',
    relatedProblemIds: ['p4209', 'p4220'],
    createdAt: '2025-07-01T11:00:00Z'
  },
  {
    id: 'p4205',
    title: 'System recovery unable to restore drivers',
    slug: 'system-recovery-unable-to-restore-drivers',
    shortDescription: 'After recovery, hardware components like WiFi or Audio are missing their drivers.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['No sound', 'No internet', 'Generic VGA graphics'],
    causes: ['Driver store corruption', 'Incompatible driver versions', 'Hardware ID mismatch'],
    steps: [
      { id: 's1', title: 'Use Device Manager', description: 'Right-click missing devices and select "Update Driver" > "Search automatically".' },
      { id: 's2', title: 'Manufacturer Website', description: 'Download the latest drivers from the laptop manufacturer\'s support page.' },
      { id: 's3', title: 'Windows Update', description: 'Run Windows Update to fetch optional driver packages.' }
    ],
    technicianAdvice: 'Recovery often reverts to "base" drivers; always have your network driver on a USB before starting recovery.',
    relatedProblemIds: ['p4206', 'p4201'],
    createdAt: '2025-07-01T12:00:00Z'
  },
  {
    id: 'p4206',
    title: 'System recovery unable to restore applications',
    slug: 'system-recovery-unable-to-restore-applications',
    shortDescription: 'Installed programs are missing or fail to launch after a system recovery or refresh.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['Broken shortcuts', '"App not found" errors', 'Missing program folders'],
    causes: ['"Refresh" vs "Restore" confusion', 'Registry links broken', 'Files moved during recovery'],
    steps: [
      { id: 's1', title: 'Check "Removed Apps" List', description: 'Windows often saves a list of removed apps on your desktop after a refresh.' },
      { id: 's2', title: 'Reinstall Software', description: 'Manually reinstall critical applications from their original installers.' },
      { id: 's3', title: 'Check Windows.old', description: 'Look in C:\\Windows.old to see if your program files were moved there.' }
    ],
    technicianAdvice: 'A "System Refresh" intentionally removes third-party apps to improve stability. Only "System Restore" keeps them.',
    relatedProblemIds: ['p4205', 'p4204'],
    createdAt: '2025-07-01T13:00:00Z'
  },
  {
    id: 'p4207',
    title: 'System recovery failing repeatedly',
    slug: 'system-recovery-failing-repeatedly',
    shortDescription: 'The recovery process starts but crashes or errors out before finishing, every time.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['"Undo changes" loop', 'Error 0x80070005', 'System reboots mid-process'],
    causes: ['Antivirus interference', 'Disk errors', 'Insufficient power'],
    steps: [
      { id: 's1', title: 'Disable Antivirus', description: 'Turn off real-time protection before initiating recovery.' },
      { id: 's2', title: 'Run in Safe Mode', description: 'Start System Restore from Safe Mode to bypass driver conflicts.' },
      { id: 's3', title: 'Check Power Supply', description: 'Ensure the laptop is plugged into a wall outlet, not running on battery.' }
    ],
    technicianAdvice: 'Repeated failures usually mean the source files (restore points) are corrupted.',
    relatedProblemIds: ['p4210', 'p4202'],
    createdAt: '2025-07-01T14:00:00Z'
  },
  {
    id: 'p4208',
    title: 'System recovery unable to verify integrity',
    slug: 'system-recovery-unable-to-verify-integrity',
    shortDescription: 'The recovery tool fails to verify the digital signature or checksum of the recovery files.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['"Digital signature could not be verified"', 'Checksum error', 'Security warning'],
    causes: ['Tampered files', 'Bit rot', 'Incorrect system date/time'],
    steps: [
      { id: 's1', title: 'Sync System Clock', description: 'Ensure the BIOS/UEFI date and time are accurate.' },
      { id: 's2', title: 'Disable Secure Boot', description: 'Temporarily disable Secure Boot in BIOS to allow recovery to proceed.' },
      { id: 's3', title: 'Verify Source Media', description: 'If using a USB, recreate it using the official Media Creation Tool.' }
    ],
    technicianAdvice: 'Integrity failures are a security feature to prevent malware from hijacking the recovery process.',
    relatedProblemIds: ['p4212', 'p4213'],
    createdAt: '2025-07-01T15:00:00Z'
  },
  {
    id: 'p4209',
    title: 'System recovery unable to locate restore points',
    slug: 'system-recovery-unable-to-locate-restore-points',
    shortDescription: 'The System Restore window shows an empty list of available restore points.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['"No restore points have been created"', 'List is blank', 'Next button greyed out'],
    causes: ['System Protection disabled', 'Storage limit reached', 'Windows update cleared them'],
    steps: [
      { id: 's1', title: 'Enable System Protection', description: 'Go to System Properties > System Protection and ensure it is "On" for C:.' },
      { id: 's2', title: 'Check Disk Space', description: 'Increase the "Max Usage" slider in System Protection settings.' },
      { id: 's3', title: 'Show More Restore Points', description: 'Check the box "Show more restore points" if available.' }
    ],
    technicianAdvice: 'Windows often deletes old restore points during major feature updates to save space.',
    relatedProblemIds: ['p4211', 'p4204'],
    createdAt: '2025-07-01T16:00:00Z'
  },
  {
    id: 'p4210',
    title: 'System recovery restore point corrupted',
    slug: 'system-recovery-restore-point-corrupted',
    shortDescription: 'A restore point is visible but fails to apply because its data is unreadable or inconsistent.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['Error 0x80042306', '"Restore point is damaged"', 'Process hangs at 99%'],
    causes: ['Disk write errors', 'Sudden power loss', 'Malware'],
    steps: [
      { id: 's1', title: 'Run SFC Scan', description: 'Run "sfc /scannow" to repair system files before trying restore again.' },
      { id: 's2', title: 'Try Older Point', description: 'Corruption usually affects only specific points; try one from a week ago.' },
      { id: 's3', title: 'Clean Boot', description: 'Perform a clean boot to ensure no third-party services are locking the restore files.' }
    ],
    technicianAdvice: 'Once a restore point is corrupted, it cannot be fixed. You must use a different one.',
    relatedProblemIds: ['p4207', 'p4209'],
    createdAt: '2025-07-01T17:00:00Z'
  },
  {
    id: 'p4211',
    title: 'System recovery restore point missing',
    slug: 'system-recovery-restore-point-missing',
    shortDescription: 'A restore point you previously created has disappeared from the system.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['Specific date missing', 'Only one point available', 'Recent points gone'],
    causes: ['Low disk space', 'CCleaner/Optimization tools', 'Dual boot conflicts'],
    steps: [
      { id: 's1', title: 'Check Optimization Apps', description: 'Ensure apps like CCleaner aren\'t set to "Wipe System Restore Points".' },
      { id: 's2', title: 'Increase Shadow Copy Space', description: 'Use "vssadmin resize shadowstorage" in CMD to give more room for points.' },
      { id: 's3', title: 'Check Event Viewer', description: 'Look for "VolSnap" errors to see why points are being deleted.' }
    ],
    technicianAdvice: 'If you dual-boot with an older version of Windows, it may delete the restore points of the newer version.',
    relatedProblemIds: ['p4209', 'p4210'],
    createdAt: '2025-07-01T18:00:00Z'
  },
  {
    id: 'p4212',
    title: 'System recovery unable to mount recovery image',
    slug: 'system-recovery-unable-to-mount-recovery-image',
    shortDescription: 'The system cannot "open" or mount the .wim or .esd file containing the recovery data.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['"Failed to mount image"', 'Error 0x80070002', 'Missing WinRE.wim'],
    causes: ['File path changed', 'Image file corrupted', 'Missing WIM drivers'],
    steps: [
      { id: 's1', title: 'Locate WinRE.wim', description: 'Use "dir /a /s c:\\winre.wim" to find where the recovery image is hidden.' },
      { id: 's2', title: 'Set Recovery Path', description: 'Use "reagentc /setreimage /path [folder]" to tell Windows where the image is.' },
      { id: 's3', title: 'Repair Image', description: 'Run "DISM /Online /Cleanup-Image /RestoreHealth" to fix the local image store.' }
    ],
    technicianAdvice: 'If the image is missing, you can copy a fresh one from a Windows installation ISO.',
    relatedProblemIds: ['p4208', 'p4213'],
    createdAt: '2025-07-01T19:00:00Z'
  },
  {
    id: 'p4213',
    title: 'System recovery unable to read recovery media',
    slug: 'system-recovery-unable-to-read-recovery-media',
    shortDescription: 'The recovery environment fails to read data from the USB drive or DVD.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['"Media not found"', 'I/O Device Error', 'Stuck at "Reading files..."'],
    causes: ['Scratched disc', 'Faulty USB port', 'Corrupted flash drive'],
    steps: [
      { id: 's1', title: 'Try Different USB Port', description: 'Use a USB 2.0 port if available, as some recovery environments lack USB 3.0 drivers.' },
      { id: 's2', title: 'Clean the Media', description: 'Wipe DVDs with a microfiber cloth; ensure USB contacts are clean.' },
      { id: 's3', title: 'Re-burn/Re-flash', description: 'Recreate the recovery media on a different, high-quality flash drive.' }
    ],
    technicianAdvice: 'Cheap USB drives often fail during the sustained read operations required for recovery.',
    relatedProblemIds: ['p4212', 'p4214'],
    createdAt: '2025-07-01T20:00:00Z'
  },
  {
    id: 'p4214',
    title: 'System recovery unable to boot recovery environment',
    slug: 'system-recovery-unable-to-boot-recovery-environment',
    shortDescription: 'The PC fails to enter the "Advanced Startup" mode and keeps rebooting or going to Windows.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['Shift+Restart fails', 'F11/F12 doesn\'t work', 'Boot loop'],
    causes: ['Fast Startup enabled', 'Corrupted bootloader', 'Disabled recovery key'],
    steps: [
      { id: 's1', title: 'Disable Fast Startup', description: 'Go to Power Options > Choose what power buttons do > Uncheck "Turn on fast startup".' },
      { id: 's2', title: 'Force Recovery', description: 'Turn the PC off/on 3 times during the boot logo to force "Automatic Repair".' },
      { id: 's3', title: 'Use Settings App', description: 'Go to Settings > Update & Security > Recovery > Advanced Startup > Restart Now.' }
    ],
    technicianAdvice: 'If you can\'t boot to recovery, your BIOS might be set to "Ultra Fast Boot" which skips keyboard input.',
    relatedProblemIds: ['p4201', 'p4213'],
    createdAt: '2025-07-01T21:00:00Z'
  },
  {
    id: 'p4215',
    title: 'System recovery unable to detect keyboard',
    slug: 'system-recovery-unable-to-detect-keyboard',
    shortDescription: 'You reach the recovery menu but cannot type or navigate because the keyboard is unresponsive.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['Keys don\'t work', 'Cannot select language', 'NumLock light off'],
    causes: ['Missing USB drivers', 'Legacy USB disabled in BIOS', 'Wireless keyboard sync'],
    steps: [
      { id: 's1', title: 'Use Wired Keyboard', description: 'Plug in a basic USB wired keyboard; wireless ones often don\'t work in recovery.' },
      { id: 's2', title: 'Enable Legacy USB', description: 'Enter BIOS and ensure "Legacy USB Support" is Enabled.' },
      { id: 's3', title: 'Try Different Port', description: 'Move the keyboard to a USB 2.0 port (usually black, not blue).' }
    ],
    technicianAdvice: 'Some modern laptops require specific "Intel VMD" drivers to see any input devices in recovery.',
    relatedProblemIds: ['p4216', 'p4217'],
    createdAt: '2025-07-01T22:00:00Z'
  },
  {
    id: 'p4216',
    title: 'System recovery unable to detect mouse',
    slug: 'system-recovery-unable-to-detect-mouse',
    shortDescription: 'The mouse cursor is missing or frozen in the recovery environment.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['No cursor', 'Mouse clicks don\'t work', 'Touchpad unresponsive'],
    causes: ['Missing I2C/HID drivers', 'Touchpad disabled in BIOS', 'USB conflict'],
    steps: [
      { id: 's1', title: 'Use Keyboard Navigation', description: 'Use Tab, Arrow keys, and Enter to navigate the recovery menus.' },
      { id: 's2', title: 'Connect USB Mouse', description: 'External USB mice have better compatibility than built-in touchpads.' },
      { id: 's3', title: 'Check BIOS', description: 'Ensure the pointing device is set to "Advanced" or "Enabled" in BIOS.' }
    ],
    technicianAdvice: 'Touchpads on newer laptops often require a specific driver that isn\'t included in the base recovery image.',
    relatedProblemIds: ['p4215', 'p4217'],
    createdAt: '2025-07-01T23:00:00Z'
  },
  {
    id: 'p4217',
    title: 'System recovery unable to detect display',
    slug: 'system-recovery-unable-to-detect-display',
    shortDescription: 'The PC enters recovery but the screen remains black or shows "No Signal".',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['Black screen', 'Monitor goes to sleep', 'Backlight only'],
    causes: ['Incompatible resolution', 'Wrong video output', 'Missing GPU drivers'],
    steps: [
      { id: 's1', title: 'Use External Monitor', description: 'Connect a monitor via HDMI to see if the image is being sent there.' },
      { id: 's2', title: 'Low Resolution Mode', description: 'Try to trigger "Enable Low-Resolution Video" from the Startup Settings menu.' },
      { id: 's3', title: 'Check Brightness', description: 'Sometimes recovery defaults to 0% brightness; try the brightness keys.' }
    ],
    technicianAdvice: 'If you have a dedicated GPU, try plugging the monitor into the motherboard port instead.',
    relatedProblemIds: ['p4215', 'p4216'],
    createdAt: '2025-07-02T08:00:00Z'
  },
  {
    id: 'p4218',
    title: 'System recovery unable to access disk',
    slug: 'system-recovery-unable-to-access-disk',
    shortDescription: 'Recovery tools see the drive but cannot read or write to it due to encryption or permissions.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['"Access Denied"', 'BitLocker recovery key prompt', 'Drive is write-protected'],
    causes: ['BitLocker encryption', 'Disk failure', 'Read-only attribute'],
    steps: [
      { id: 's1', title: 'Enter BitLocker Key', description: 'Find your 48-digit key in your Microsoft account to unlock the drive.' },
      { id: 's2', title: 'Clear Read-Only', description: 'Use "diskpart", select the disk, and run "attributes disk clear readonly".' },
      { id: 's3', title: 'Check SMART Status', description: 'Use "wmic diskdrive get status" to see if the drive is physically failing.' }
    ],
    technicianAdvice: 'If BitLocker is active and you don\'t have the key, the data is permanently inaccessible.',
    relatedProblemIds: ['p4203', 'p4219'],
    createdAt: '2025-07-02T09:00:00Z'
  },
  {
    id: 'p4219',
    title: 'System recovery unable to repair bootloader',
    slug: 'system-recovery-unable-to-repair-bootloader',
    shortDescription: 'The "Startup Repair" tool fails to fix the boot files, leaving the PC unbootable.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['"Startup Repair couldn\'t repair your PC"', 'Log file: SrtTrail.txt', 'Infinite repair loop'],
    causes: ['Severely corrupted BCD', 'Wrong partition marked active', 'Hardware failure'],
    steps: [
      { id: 's1', title: 'Manual BCD Rebuild', description: 'Run "bootrec /rebuildbcd" followed by "bcdboot c:\\windows /s s: /f uefi".' },
      { id: 's2', title: 'Check Partition Style', description: 'Ensure your drive is GPT for UEFI systems or MBR for Legacy systems.' },
      { id: 's3', title: 'Disable Early Launch Anti-Malware', description: 'Select option 8 in Startup Settings to bypass driver signature checks.' }
    ],
    technicianAdvice: 'If manual repair fails, you may need to delete and recreate the EFI system partition.',
    relatedProblemIds: ['p4203', 'p4220'],
    createdAt: '2025-07-02T10:00:00Z'
  },
  {
    id: 'p4220',
    title: 'System recovery unable to rebuild system registry',
    slug: 'system-recovery-unable-to-rebuild-system-registry',
    shortDescription: 'Recovery fails because the registry hives are missing or too damaged to be reconstructed.',
    category: 'laptop',
    subcategory: 'System Recovery',
    symptoms: ['"System Registry is missing or contains errors"', 'Blue screen: CONFIG_LIST_FAILED', 'Error 0xc0000225'],
    causes: ['Failed update', 'Power outage during write', 'Disk corruption'],
    steps: [
      { id: 's1', title: 'Restore from RegBack', description: 'Copy files from C:\\Windows\\System32\\config\\RegBack to the config folder.' },
      { id: 's2', title: 'Run DISM Offline', description: 'Use DISM with the /Image and /ScratchDir flags to repair the offline registry.' },
      { id: 's3', title: 'System Restore', description: 'Use an earlier restore point as it includes a backup of the registry.' }
    ],
    technicianAdvice: 'Modern Windows versions (1803+) no longer automatically back up the registry to RegBack. You must rely on System Restore.',
    relatedProblemIds: ['p4204', 'p4219'],
    createdAt: '2025-07-02T11:00:00Z'
  },
  {
    id: 'p4221',
    title: 'Login credentials not accepted',
    slug: 'login-credentials-not-accepted',
    shortDescription: 'The system rejects your username or password even though you are sure they are correct.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['"Invalid username or password"', 'Login loop', 'Keyboard layout mismatch'],
    causes: ['Caps Lock active', 'Wrong keyboard language', 'Account sync issue'],
    steps: [
      { id: 's1', title: 'Check Caps Lock', description: 'Ensure Caps Lock is off and type your password slowly.' },
      { id: 's2', title: 'Verify Keyboard Layout', description: 'Check the bottom right of the login screen to ensure the correct language is selected.' },
      { id: 's3', title: 'Reset Password', description: 'Use the "Forgot Password" link to reset your credentials via email or security questions.' }
    ],
    technicianAdvice: 'If you are on a domain, your account might be locked due to too many failed attempts.',
    relatedProblemIds: ['p4230', 'p4226'],
    createdAt: '2025-07-02T12:00:00Z'
  },
  {
    id: 'p4222',
    title: 'Login session expiring unexpectedly',
    slug: 'login-session-expiring-unexpectedly',
    shortDescription: 'You are frequently logged out of applications or websites while actively using them.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['Sudden redirect to login', '"Session expired" popups', 'Lost unsaved work'],
    causes: ['Cookie corruption', 'IP address change', 'Server-side session timeout'],
    steps: [
      { id: 's1', title: 'Clear Browser Cookies', description: 'Go to browser settings and clear cookies for the specific site.' },
      { id: 's2', title: 'Check VPN/Proxy', description: 'If your IP changes frequently (e.g., via VPN), some servers will kill the session for security.' },
      { id: 's3', title: 'Enable "Stay Logged In"', description: 'Check the "Remember Me" box during login to request a longer session token.' }
    ],
    technicianAdvice: 'Aggressive "Privacy" extensions can sometimes delete session cookies prematurely.',
    relatedProblemIds: ['p4223', 'p4224'],
    createdAt: '2025-07-02T13:00:00Z'
  },
  {
    id: 'p4223',
    title: 'Login session timeout too short',
    slug: 'login-session-timeout-too-short',
    shortDescription: 'The application logs you out after only a few minutes of inactivity, which is disruptive.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['Logout after 5 mins', 'Frequent re-authentication', 'Security policy prompts'],
    causes: ['Corporate security policy', 'App default settings', 'Banking security standards'],
    steps: [
      { id: 's1', title: 'Check App Settings', description: 'Look for "Session Timeout" or "Auto-logout" settings within the app preferences.' },
      { id: 's2', title: 'Keep Session Active', description: 'Some apps stay logged in as long as the tab is open or there is mouse movement.' },
      { id: 's3', title: 'Contact IT Admin', description: 'If this is a work device, the timeout is likely enforced by a Group Policy (GPO).' }
    ],
    technicianAdvice: 'Financial and medical apps have legally mandated short timeouts that cannot be changed by the user.',
    relatedProblemIds: ['p4222', 'p4225'],
    createdAt: '2025-07-02T14:00:00Z'
  },
  {
    id: 'p4224',
    title: 'Authentication token expired',
    slug: 'authentication-token-expired',
    shortDescription: 'The digital "key" used to keep you logged in has reached its end of life.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['API errors', 'App fails to sync', 'Forced logout'],
    causes: ['Time-to-live (TTL) reached', 'System clock mismatch', 'Refresh token failure'],
    steps: [
      { id: 's1', title: 'Re-authenticate', description: 'Log out manually and log back in to generate a fresh token.' },
      { id: 's2', title: 'Check System Time', description: 'Ensure your device time is synced with the internet; tokens fail if the clock is off.' },
      { id: 's3', title: 'Update the App', description: 'Old app versions may have bugs in their token refresh logic.' }
    ],
    technicianAdvice: 'Tokens are designed to expire for security; if it happens constantly, the app\'s "Refresh Token" is likely broken.',
    relatedProblemIds: ['p4225', 'p4222'],
    createdAt: '2025-07-02T15:00:00Z'
  },
  {
    id: 'p4225',
    title: 'Authentication token invalid',
    slug: 'authentication-token-invalid',
    shortDescription: 'The system rejects your login token as malformed, tampered with, or unrecognized.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['"Invalid Token" error', '401 Unauthorized', 'App won\'t load data'],
    causes: ['Server-side secret change', 'Token corruption', 'Cross-site request forgery (CSRF)'],
    steps: [
      { id: 's1', title: 'Clear App Data/Cache', description: 'Wipe the app storage to delete the corrupted token.' },
      { id: 's2', title: 'Check for Multiple Logins', description: 'Some services invalidate old tokens when you log in on a new device.' },
      { id: 's3', title: 'Disable Ad-Blockers', description: 'Some blockers interfere with the headers that carry authentication tokens.' }
    ],
    technicianAdvice: 'An "Invalid Token" error often happens if the server\'s security certificates have been updated.',
    relatedProblemIds: ['p4224', 'p4226'],
    createdAt: '2025-07-02T16:00:00Z'
  },
  {
    id: 'p4226',
    title: 'Authentication server not responding',
    slug: 'authentication-server-not-responding',
    shortDescription: 'The login page hangs or returns an error because it cannot reach the identity provider.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['"Connection Timed Out"', '500 Internal Server Error', 'Spinning wheel on login'],
    causes: ['Server outage', 'DNS issues', 'Firewall blocking'],
    steps: [
      { id: 's1', title: 'Check Service Status', description: 'Visit sites like Downdetector to see if the service (e.g., Google, Microsoft) is down.' },
      { id: 's2', title: 'Try Different Network', description: 'Switch from WiFi to Mobile Data to rule out a local network block.' },
      { id: 's3', title: 'Flush DNS', description: 'Run "ipconfig /flushdns" to clear stale connection paths.' }
    ],
    technicianAdvice: 'If the server is down, there is nothing you can do but wait for the provider to fix it.',
    relatedProblemIds: ['p4227', 'p4221'],
    createdAt: '2025-07-02T17:00:00Z'
  },
  {
    id: 'p4227',
    title: 'Authentication request blocked',
    slug: 'authentication-request-blocked',
    shortDescription: 'Your login attempt is stopped by a security filter, often due to your location or IP reputation.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['"Access Denied"', 'CAPTCHA loop', 'IP blacklisted'],
    causes: ['VPN usage', 'Suspicious activity on network', 'Geo-fencing'],
    steps: [
      { id: 's1', title: 'Disable VPN', description: 'Many services block known VPN IP addresses to prevent bot attacks.' },
      { id: 's2', title: 'Complete CAPTCHA', description: 'Follow the on-screen prompts to prove you are a human.' },
      { id: 's3', title: 'Check for Malware', description: 'Ensure your device isn\'t part of a botnet that is getting your IP blocked.' }
    ],
    technicianAdvice: 'If you are traveling, some apps block logins from foreign countries for your protection.',
    relatedProblemIds: ['p4226', 'p4228'],
    createdAt: '2025-07-02T18:00:00Z'
  },
  {
    id: 'p4228',
    title: 'Authentication unable to verify identity',
    slug: 'authentication-unable-to-verify-identity',
    shortDescription: 'The system cannot confirm you are the account owner, even with the correct password.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['"We couldn\'t verify it\'s you"', 'Security questions failing', 'Account recovery loop'],
    causes: ['New device/location', 'Missing recovery info', 'Suspicious login pattern'],
    steps: [
      { id: 's1', title: 'Use Trusted Device', description: 'Try logging in from a phone or computer you have used successfully before.' },
      { id: 's2', title: 'Check Recovery Email', description: 'Look for a verification code sent to your backup email address.' },
      { id: 's3', title: 'Wait 24 Hours', description: 'Sometimes security locks reset after a cooling-off period.' }
    ],
    technicianAdvice: 'Identity verification is triggered when the system detects a "high-risk" login attempt.',
    relatedProblemIds: ['p4227', 'p4229'],
    createdAt: '2025-07-02T19:00:00Z'
  },
  {
    id: 'p4229',
    title: 'Authentication system detecting false login attempts',
    slug: 'authentication-system-detecting-false-login-attempts',
    shortDescription: 'You receive notifications about login attempts that you did not initiate.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['"Was this you?" emails', 'MFA codes arriving randomly', 'Account lock warnings'],
    causes: ['Password leak', 'Brute force attack', 'Credential stuffing'],
    steps: [
      { id: 's1', title: 'Change Password Immediately', description: 'Create a new, complex password that you don\'t use anywhere else.' },
      { id: 's2', title: 'Check HaveIBeenPwned', description: 'See if your email was part of a recent data breach.' },
      { id: 's3', title: 'Enable 2FA', description: 'Add a second layer of security so a leaked password isn\'t enough to get in.' }
    ],
    technicianAdvice: 'If you get an MFA code you didn\'t request, someone has your password. Change it now.',
    relatedProblemIds: ['p4230', 'p4231'],
    createdAt: '2025-07-02T20:00:00Z'
  },
  {
    id: 'p4230',
    title: 'Authentication system locking account incorrectly',
    slug: 'authentication-system-locking-account-incorrectly',
    shortDescription: 'Your account is locked for "security reasons" even though you haven\'t made any mistakes.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['"Account Locked"', 'Cannot reset password', 'Admin intervention required'],
    causes: ['Third-party app sync errors', 'Malicious attacks on your username', 'System bug'],
    steps: [
      { id: 's1', title: 'Check Background Apps', description: 'An old phone or app trying to sync with an old password can trigger a lock.' },
      { id: 's2', title: 'Wait for Auto-Unlock', description: 'Most locks expire after 15, 30, or 60 minutes.' },
      { id: 's3', title: 'Contact Support', description: 'If the lock persists, you may need to verify your ID with a human agent.' }
    ],
    technicianAdvice: 'If your account is targeted by a brute-force attack, the system may keep locking it to protect you.',
    relatedProblemIds: ['p4229', 'p4221'],
    createdAt: '2025-07-02T21:00:00Z'
  },
  {
    id: 'p4231',
    title: 'Multi-factor authentication failing',
    slug: 'multi-factor-authentication-failing',
    shortDescription: 'The second step of your login process (SMS, App, Key) is not working correctly.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['Code rejected', 'App crashes', 'Hardware key not detected'],
    causes: ['Time desync', 'Network issues', 'Faulty hardware'],
    steps: [
      { id: 's1', title: 'Sync App Time', description: 'In your MFA app (like Google Authenticator), go to Settings > Time correction for codes.' },
      { id: 's2', title: 'Check Internet', description: 'Push notifications require a data connection to arrive.' },
      { id: 's3', title: 'Use Backup Codes', description: 'Use the one-time codes you saved when setting up 2FA.' }
    ],
    technicianAdvice: 'MFA apps are extremely sensitive to the device\'s system time. Ensure "Set time automatically" is ON.',
    relatedProblemIds: ['p4232', 'p4233'],
    createdAt: '2025-07-02T22:00:00Z'
  },
  {
    id: 'p4232',
    title: 'Multi-factor authentication code not received',
    slug: 'multi-factor-authentication-code-not-received',
    shortDescription: 'You are waiting for an SMS or email code, but it never arrives.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['No SMS', 'Empty inbox', 'Resend button used multiple times'],
    causes: ['Carrier blocking', 'Spam filter', 'Wrong phone number'],
    steps: [
      { id: 's1', title: 'Check Spam/Junk', description: 'Email codes often end up in the spam folder.' },
      { id: 's2', title: 'Restart Phone', description: 'Forces a reconnection to the cellular network to receive pending SMS.' },
      { id: 's3', title: 'Check for "Short Code" Blocks', description: 'Ensure your carrier hasn\'t blocked automated messages from short numbers.' }
    ],
    technicianAdvice: 'SMS is the least reliable MFA method. Switch to an Authenticator App for better reliability.',
    relatedProblemIds: ['p4231', 'p4233'],
    createdAt: '2025-07-02T23:00:00Z'
  },
  {
    id: 'p4233',
    title: 'Multi-factor authentication code incorrect',
    slug: 'multi-factor-authentication-code-incorrect',
    shortDescription: 'You enter the code exactly as shown, but the system says it is wrong.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['"Invalid code"', 'Code expires too fast', 'Rejected attempt'],
    causes: ['Clock desync', 'Entering old code', 'Typo'],
    steps: [
      { id: 's1', title: 'Wait for New Code', description: 'Wait for the timer to reset and enter the fresh code immediately.' },
      { id: 's2', title: 'Check Time Zone', description: 'Ensure your phone and computer are in the same time zone.' },
      { id: 's3', title: 'Refresh Page', description: 'Sometimes the login session times out while you are looking for the code.' }
    ],
    technicianAdvice: 'If the code is from an app, ensure you are looking at the correct account (e.g., Personal vs Work).',
    relatedProblemIds: ['p4231', 'p4232'],
    createdAt: '2025-07-03T08:00:00Z'
  },
  {
    id: 'p4234',
    title: 'Multi-factor authentication device lost',
    slug: 'multi-factor-authentication-device-lost',
    shortDescription: 'You no longer have access to the phone or hardware key used for 2FA.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['Locked out of account', 'Cannot receive codes', 'No trusted device'],
    causes: ['Lost phone', 'Broken hardware key', 'Stolen device'],
    steps: [
      { id: 's1', title: 'Use Backup Codes', description: 'Enter one of the 8-10 recovery codes you saved during setup.' },
      { id: 's2', title: 'Account Recovery', description: 'Follow the "I don\'t have my phone" link to start a manual identity review.' },
      { id: 's3', title: 'Remote Wipe', description: 'If the device was stolen, use "Find My" to wipe it and protect your accounts.' }
    ],
    technicianAdvice: 'Recovery can take 3-5 days as a human must verify your identity to prevent hackers from taking over.',
    relatedProblemIds: ['p4235', 'p4237'],
    createdAt: '2025-07-03T09:00:00Z'
  },
  {
    id: 'p4235',
    title: 'Multi-factor authentication device not recognized',
    slug: 'multi-factor-authentication-device-not-recognized',
    shortDescription: 'The system doesn\'t offer your usual MFA methods, even though the device is registered.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['Missing "Send SMS" option', 'App not showing prompt', 'Generic error'],
    causes: ['Account de-synced', 'Security update', 'Browser cookie cleared'],
    steps: [
      { id: 's1', title: 'Sign In on Trusted PC', description: 'Use a device that is already logged in to re-verify the mobile device.' },
      { id: 's2', title: 'Update MFA App', description: 'Ensure your Authenticator app is on the latest version.' },
      { id: 's3', title: 'Check Account Security', description: 'Log in via web and ensure the device is still listed in "Trusted Devices".' }
    ],
    technicianAdvice: 'Sometimes a major OS update changes the "Hardware ID" of your phone, making it look like a new device.',
    relatedProblemIds: ['p4234', 'p4236'],
    createdAt: '2025-07-03T10:00:00Z'
  },
  {
    id: 'p4236',
    title: 'Multi-factor authentication unable to sync',
    slug: 'multi-factor-authentication-unable-to-sync',
    shortDescription: 'Your MFA app is not syncing with the server, leading to outdated or missing codes.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['"Sync failed"', 'Old codes showing', 'No push notifications'],
    causes: ['No internet', 'Background data restricted', 'Battery saver mode'],
    steps: [
      { id: 's1', title: 'Enable Background Data', description: 'Ensure the MFA app is allowed to use data in the background.' },
      { id: 's2', title: 'Disable Battery Saver', description: 'Power saving modes often kill the sync services needed for MFA.' },
      { id: 's3', title: 'Manual Sync', description: 'Go to app settings and tap "Sync Now" or "Refresh".' }
    ],
    technicianAdvice: 'If sync fails, check if your phone\'s internal storage is full, which can prevent database updates.',
    relatedProblemIds: ['p4235', 'p4231'],
    createdAt: '2025-07-03T11:00:00Z'
  },
  {
    id: 'p4237',
    title: 'Multi-factor authentication unable to reset',
    slug: 'multi-factor-authentication-unable-to-reset',
    shortDescription: 'You are trying to change your 2FA settings but the system won\'t allow the reset.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['"Reset failed"', 'Cannot remove old phone', 'Security hold active'],
    causes: ['Security cooling-off period', 'Missing current 2FA', 'Admin restriction'],
    steps: [
      { id: 's1', title: 'Verify Current 2FA', description: 'Most systems require you to use your OLD 2FA method to authorize a NEW one.' },
      { id: 's2', title: 'Check for Security Holds', description: 'If you recently changed your password, you may have to wait 48 hours to change 2FA.' },
      { id: 's3', title: 'Use Recovery Email', description: 'Try resetting via a secondary verification method if the primary is stuck.' }
    ],
    technicianAdvice: 'Resetting 2FA is a high-risk action; systems are designed to be difficult to reset to prevent account hijacking.',
    relatedProblemIds: ['p4234', 'p4235'],
    createdAt: '2025-07-03T12:00:00Z'
  },
  {
    id: 'p4238',
    title: 'Biometric authentication not working',
    slug: 'biometric-authentication-not-working',
    shortDescription: 'The system fails to offer or recognize fingerprint or facial data for login.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['"Biometrics unavailable"', 'Scanner doesn\'t light up', 'Fall back to PIN'],
    causes: ['Hardware failure', 'Dirty sensor', 'Software update bug'],
    steps: [
      { id: 's1', title: 'Clean the Sensor', description: 'Wipe the fingerprint reader or camera lens with a clean cloth.' },
      { id: 's2', title: 'Re-register Biometrics', description: 'Delete your old fingerprint/face data and set it up again.' },
      { id: 's3', title: 'Check Driver', description: 'In Device Manager, ensure the "Biometric Devices" driver is working.' }
    ],
    technicianAdvice: 'If biometrics fail after a screen replacement, the new hardware may not be properly calibrated.',
    relatedProblemIds: ['p4239', 'p4240'],
    createdAt: '2025-07-03T13:00:00Z'
  },
  {
    id: 'p4239',
    title: 'Fingerprint scanner not detecting fingerprint',
    slug: 'fingerprint-scanner-not-detecting-fingerprint',
    shortDescription: 'The scanner is active but fails to read your finger or says "No match".',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['"Try again"', 'Vibrates but fails', 'Unrecognized finger'],
    causes: ['Wet/Dry skin', 'Scratched sensor', 'Poor initial scan'],
    steps: [
      { id: 's1', title: 'Moisturize/Dry Hands', description: 'Extremely dry or wet fingers are hard for optical scanners to read.' },
      { id: 's2', title: 'Register Multiple Fingers', description: 'Add both index fingers and thumbs to the system for redundancy.' },
      { id: 's3', title: 'Press Firmer', description: 'Ensure your finger covers the entire sensor area.' }
    ],
    technicianAdvice: 'If you have a screen protector, ensure it is "fingerprint compatible" for in-display scanners.',
    relatedProblemIds: ['p4238', 'p4240'],
    createdAt: '2025-07-03T14:00:00Z'
  },
  {
    id: 'p4240',
    title: 'Facial recognition not recognizing user',
    slug: 'facial-recognition-not-recognizing-user',
    shortDescription: 'The camera sees you but fails to unlock the device.',
    category: 'security',
    subcategory: 'Authentication',
    symptoms: ['"Face not recognized"', 'Camera stays on', 'PIN prompt'],
    causes: ['Poor lighting', 'Obstructions (mask, glasses)', 'Angle too steep'],
    steps: [
      { id: 's1', title: 'Improve Lighting', description: 'Ensure your face is well-lit and not in deep shadow.' },
      { id: 's2', title: 'Add Alternate Appearance', description: 'Set up a second scan while wearing glasses or a different hat.' },
      { id: 's3', title: 'Check for Obstructions', description: 'Ensure the IR sensors (not just the camera) are clean and clear.' }
    ],
    technicianAdvice: 'Facial recognition can fail if you are wearing polarized sunglasses that block IR light.',
    relatedProblemIds: ['p4238', 'p4239'],
    createdAt: '2025-07-03T15:00:00Z'
  },
  {
    id: 'p4241',
    title: 'Application not compatible with OS version',
    slug: 'application-not-compatible-with-os-version',
    shortDescription: 'The app fails to install or run because your operating system is too old or too new.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['"OS not supported" error', 'Installer won\'t start', 'App crashes on launch'],
    causes: ['Deprecated APIs', 'Missing system libraries', 'Security architecture changes'],
    steps: [
      { id: 's1', title: 'Check System Requirements', description: 'Visit the app developer\'s website to see the minimum supported OS version.' },
      { id: 's2', title: 'Update OS', description: 'Install any pending system updates to meet the app\'s requirements.' },
      { id: 's3', title: 'Use Compatibility Mode', description: 'Right-click the app > Properties > Compatibility > Run this program in compatibility mode for [Older OS].' }
    ],
    technicianAdvice: 'If an app is very old, you may need to run it inside a Virtual Machine (VM) with an older OS.',
    relatedProblemIds: ['p4244', 'p4245'],
    createdAt: '2025-07-03T16:00:00Z'
  },
  {
    id: 'p4242',
    title: 'Application not compatible with hardware',
    slug: 'application-not-compatible-with-hardware',
    shortDescription: 'The app requires specific hardware features (like a GPU or AVX instructions) that your device lacks.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['"Hardware requirements not met"', 'Missing feature errors', 'Extremely poor performance'],
    causes: ['Old CPU architecture', 'Insufficient VRAM', 'Missing sensor (GPS, NFC)'],
    steps: [
      { id: 's1', title: 'Check Hardware Specs', description: 'Compare your RAM, CPU, and GPU against the app\'s "Recommended" specs.' },
      { id: 's2', title: 'Update Drivers', description: 'Sometimes a driver update can enable features needed by the app.' },
      { id: 's3', title: 'Use Lite Version', description: 'Look for a "Lite" or "Web" version of the app that has lower hardware requirements.' }
    ],
    technicianAdvice: 'Hardware incompatibility usually cannot be fixed without upgrading the physical components of the device.',
    relatedProblemIds: ['p4241', 'p4256'],
    createdAt: '2025-07-03T17:00:00Z'
  },
  {
    id: 'p4243',
    title: 'Application not compatible with other software',
    slug: 'application-not-compatible-with-other-software',
    shortDescription: 'Two or more apps are conflicting, causing one or both to crash or malfunction.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['App crashes when [Other App] is open', 'System-wide slowdown', 'Shared file errors'],
    causes: ['Antivirus blocking', 'Overlay conflicts (Discord, Steam)', 'Shared DLL version mismatch'],
    steps: [
      { id: 's1', title: 'Disable Overlays', description: 'Turn off in-game overlays from Discord, Steam, or NVIDIA GeForce Experience.' },
      { id: 's2', title: 'Clean Boot', description: 'Disable all non-Microsoft startup items to find the conflicting software.' },
      { id: 's3', title: 'Add Exclusions', description: 'Add the app folder to your Antivirus/Firewall exclusion list.' }
    ],
    technicianAdvice: 'Software conflicts are common with "optimization" or "security" suites that monitor other apps.',
    relatedProblemIds: ['p4241', 'p4254'],
    createdAt: '2025-07-03T18:00:00Z'
  },
  {
    id: 'p4244',
    title: 'Application requiring legacy drivers',
    slug: 'application-requiring-legacy-drivers',
    shortDescription: 'An older app needs outdated drivers to function, which may compromise system security.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['"Driver not found"', 'Hardware not detected by app', 'Blue screen on launch'],
    causes: ['Discontinued hardware support', '32-bit driver on 64-bit OS', 'Unsigned drivers'],
    steps: [
      { id: 's1', title: 'Disable Driver Signature Enforcement', description: 'Restart Windows in "Advanced Startup" and select option 7.' },
      { id: 's2', title: 'Install in Compatibility Mode', description: 'Run the driver installer with compatibility settings for Windows 7 or XP.' },
      { id: 's3', title: 'Use Virtual Machine', description: 'Run the app and its legacy drivers in a sandboxed VM to protect your main OS.' }
    ],
    technicianAdvice: 'Using legacy drivers on a modern OS can cause significant system instability.',
    relatedProblemIds: ['p4241', 'p4245'],
    createdAt: '2025-07-03T19:00:00Z'
  },
  {
    id: 'p4245',
    title: 'Application requiring specific runtime',
    slug: 'application-requiring-specific-runtime',
    shortDescription: 'The app needs a specific version of .NET, Java, or C++ Redistributable that is missing.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['"MSVCP140.dll missing"', '"Java not found"', 'Error 0xc000007b'],
    causes: ['Missing runtime libraries', 'Corrupted runtime installation', 'Version mismatch'],
    steps: [
      { id: 's1', title: 'Install All-in-One Runtimes', description: 'Download a package that installs all common Visual C++ versions (2005-2022).' },
      { id: 's2', title: 'Enable .NET Framework', description: 'Go to "Turn Windows features on or off" and check .NET 3.5 and 4.8.' },
      { id: 's3', title: 'Reinstall the Runtime', description: 'Uninstall the specific runtime (e.g., Java) and download the latest version from the official site.' }
    ],
    technicianAdvice: 'Many games and professional tools require specific "Redistributable" packages to bridge the gap between code and hardware.',
    relatedProblemIds: ['p4241', 'p4244'],
    createdAt: '2025-07-03T20:00:00Z'
  },
  {
    id: 'p4246',
    title: 'Application requiring administrative privileges',
    slug: 'application-requiring-administrative-privileges',
    shortDescription: 'The app fails to save settings or access files because it lacks permission to write to system folders.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['"Access Denied"', 'Settings not saving', 'Update fails'],
    causes: ['UAC restrictions', 'Standard user account', 'Protected folder access'],
    steps: [
      { id: 's1', title: 'Run as Administrator', description: 'Right-click the app shortcut and select "Run as administrator".' },
      { id: 's2', title: 'Set Permanent Admin', description: 'Properties > Compatibility > Check "Run this program as an administrator".' },
      { id: 's3', title: 'Check Folder Permissions', description: 'Ensure your user account has "Full Control" over the app\'s installation folder.' }
    ],
    technicianAdvice: 'Avoid running every app as admin; only do so for trusted applications that genuinely need system access.',
    relatedProblemIds: ['p4250', 'p4241'],
    createdAt: '2025-07-03T21:00:00Z'
  },
  {
    id: 'p4247',
    title: 'Application failing on 64-bit system',
    slug: 'application-failing-on-64-bit-system',
    shortDescription: 'An older 16-bit or 32-bit app cannot run on a modern 64-bit operating system.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['"This app cannot run on your PC"', 'Unsupported architecture error', 'Instant crash'],
    causes: ['Missing WoW64 layer', '16-bit code (not supported on 64-bit)', 'Hardcoded file paths'],
    steps: [
      { id: 's1', title: 'Check for 64-bit Version', description: 'Visit the developer site to see if a modern 64-bit version is available.' },
      { id: 's2', title: 'Use DOSBox', description: 'For very old (DOS-era) apps, use an emulator like DOSBox.' },
      { id: 's3', title: 'Install 32-bit Runtimes', description: 'Ensure the 32-bit (x86) versions of C++ runtimes are installed alongside 64-bit ones.' }
    ],
    technicianAdvice: '64-bit Windows can run 32-bit apps, but it CANNOT run 16-bit apps without an emulator.',
    relatedProblemIds: ['p4248', 'p4241'],
    createdAt: '2025-07-03T22:00:00Z'
  },
  {
    id: 'p4248',
    title: 'Application failing on 32-bit system',
    slug: 'application-failing-on-32-bit-system',
    shortDescription: 'A modern app requires a 64-bit OS and cannot run on your older 32-bit system.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['"Not a valid Win32 application"', 'Installation blocked', 'Missing DLLs'],
    causes: ['64-bit instruction set required', 'Memory addressing limits (4GB)', 'Modern compiler defaults'],
    steps: [
      { id: 's1', title: 'Check OS Architecture', description: 'Go to Settings > System > About to confirm if you are on 32-bit (x86).' },
      { id: 's2', title: 'Upgrade to 64-bit', description: 'If your CPU supports it, you will need to clean install a 64-bit version of Windows.' },
      { id: 's3', title: 'Find Legacy Version', description: 'Search for an older version of the app that still supported 32-bit systems.' }
    ],
    technicianAdvice: '32-bit systems are becoming obsolete; most modern software now requires 64-bit for memory management.',
    relatedProblemIds: ['p4247', 'p4241'],
    createdAt: '2025-07-03T23:00:00Z'
  },
  {
    id: 'p4249',
    title: 'Application unable to run in background',
    slug: 'application-unable-to-run-in-background',
    shortDescription: 'The app stops working or syncing as soon as you switch to another window or lock your screen.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['Sync pauses', 'Downloads fail when minimized', 'No background notifications'],
    causes: ['Battery optimization', 'OS background limits', 'App settings'],
    steps: [
      { id: 's1', title: 'Disable Battery Optimization', description: 'In phone settings, set the app to "Unrestricted" or "Don\'t Optimize".' },
      { id: 's2', title: 'Allow Background Activity', description: 'Ensure "Background App Refresh" is enabled for the app in system settings.' },
      { id: 's3', title: 'Check "Keep Alive" Settings', description: 'Some apps have an internal setting to "Stay active in notification tray".' }
    ],
    technicianAdvice: 'Mobile OSs (iOS/Android) are very aggressive about killing background apps to save battery.',
    relatedProblemIds: ['p4258', 'p4250'],
    createdAt: '2025-07-04T08:00:00Z'
  },
  {
    id: 'p4250',
    title: 'Application unable to access system resources',
    slug: 'application-unable-to-access-system-resources',
    shortDescription: 'The app cannot use the camera, microphone, or location because permissions are blocked.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['"Permission denied"', 'Black camera screen', 'Map shows wrong location'],
    causes: ['Privacy settings', 'Security software block', 'Driver conflict'],
    steps: [
      { id: 's1', title: 'Check Privacy Settings', description: 'Go to Settings > Privacy and ensure "Allow apps to access [Feature]" is ON.' },
      { id: 's2', title: 'Reset App Permissions', description: 'Uninstall and reinstall the app to trigger the permission prompts again.' },
      { id: 's3', title: 'Check Hardware Switch', description: 'Some laptops have a physical slider or FN key to disable the camera/mic.' }
    ],
    technicianAdvice: 'Modern OSs require explicit user consent for sensitive hardware; check the "Privacy Dashboard" for logs.',
    relatedProblemIds: ['p4246', 'p4249'],
    createdAt: '2025-07-04T09:00:00Z'
  },
  {
    id: 'p4251',
    title: 'Application crashing on startup',
    slug: 'application-crashing-on-startup',
    shortDescription: 'The app closes or vanishes immediately after you try to open it.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['Splash screen appears then closes', 'No error message', 'Process starts then dies in Task Manager'],
    causes: ['Corrupted cache', 'Missing dependency', 'Incompatible update'],
    steps: [
      { id: 's1', title: 'Clear App Cache', description: 'Delete the temporary files in the app\'s "AppData" or "Cache" folder.' },
      { id: 's2', title: 'Update Graphics Drivers', description: 'Startup crashes are often caused by the app failing to initialize the GPU.' },
      { id: 's3', title: 'Reinstall the App', description: 'A clean reinstall fixes issues caused by missing or corrupted program files.' }
    ],
    technicianAdvice: 'Check the "Event Viewer" (Windows) or "Console" (Mac) to see the specific error code causing the crash.',
    relatedProblemIds: ['p4252', 'p4253'],
    createdAt: '2025-07-04T10:00:00Z'
  },
  {
    id: 'p4252',
    title: 'Application crashing during use',
    slug: 'application-crashing-during-use',
    shortDescription: 'The app works for a while but then closes unexpectedly while you are working.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['Sudden exit', '"App has stopped working"', 'Lost progress'],
    causes: ['Memory leak', 'Overheating', 'Specific action trigger'],
    steps: [
      { id: 's1', title: 'Identify the Trigger', description: 'Does it crash when you save? When you use a specific tool? Avoid that action.' },
      { id: 's2', title: 'Check RAM Usage', description: 'If your RAM is full, the OS may kill the app to prevent a system crash.' },
      { id: 's3', title: 'Lower Graphics Settings', description: 'If it\'s a game or design tool, reducing the load can prevent crashes.' }
    ],
    technicianAdvice: 'Random crashes during use are often related to hardware instability, like failing RAM or an unstable overclock.',
    relatedProblemIds: ['p4251', 'p4254'],
    createdAt: '2025-07-04T11:00:00Z'
  },
  {
    id: 'p4253',
    title: 'Application crashing after update',
    slug: 'application-crashing-after-update',
    shortDescription: 'The app was working fine until a recent update, and now it is unstable.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['New bugs', 'Regression in performance', 'Crashes on new features'],
    causes: ['Bad update code', 'Incompatible old cache', 'Database migration failure'],
    steps: [
      { id: 's1', title: 'Roll Back Version', description: 'If possible, download and install the previous version of the app.' },
      { id: 's2', title: 'Wipe App Data', description: 'Updates sometimes fail because they can\'t read the old configuration files.' },
      { id: 's3', title: 'Report to Developer', description: 'Check the app\'s forums or support page to see if others are having the same issue.' }
    ],
    technicianAdvice: 'Updates can sometimes break compatibility with older hardware that was previously supported.',
    relatedProblemIds: ['p4251', 'p4255'],
    createdAt: '2025-07-04T12:00:00Z'
  },
  {
    id: 'p4254',
    title: 'Application freezing unexpectedly',
    slug: 'application-freezing-unexpectedly',
    shortDescription: 'The app becomes completely unresponsive (hangs) and you have to force-close it.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['"Not Responding" title bar', 'Spinning wait cursor', 'UI doesn\'t update'],
    causes: ['Deadlock in code', 'Waiting for network/disk', 'Infinite loop'],
    steps: [
      { id: 's1', title: 'Wait 60 Seconds', description: 'The app might be performing a heavy task; give it a minute to recover.' },
      { id: 's2', title: 'Check Network Connection', description: 'If the app is waiting for a server response, it may appear frozen.' },
      { id: 's3', title: 'Force Quit', description: 'Use Task Manager (Ctrl+Shift+Esc) or Activity Monitor to kill the process.' }
    ],
    technicianAdvice: 'Frequent freezing is often a sign of a slow hard drive (HDD) struggling to keep up with data requests.',
    relatedProblemIds: ['p4252', 'p4255'],
    createdAt: '2025-07-04T13:00:00Z'
  },
  {
    id: 'p4255',
    title: 'Application slow to respond',
    slug: 'application-slow-to-respond',
    shortDescription: 'The app is laggy; there is a delay between your clicks and the app\'s reaction.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['Input lag', 'Slow menu opening', 'Choppy animations'],
    causes: ['High CPU load', 'Slow disk I/O', 'GPU acceleration issues'],
    steps: [
      { id: 's1', title: 'Disable Hardware Acceleration', description: 'In app settings, turn off "Hardware Acceleration" to use the CPU instead of GPU.' },
      { id: 's2', title: 'Close Background Apps', description: 'Free up system resources for the active application.' },
      { id: 's3', title: 'Check for Disk Activity', description: 'If your disk is at 100% usage, the app will be slow to load assets.' }
    ],
    technicianAdvice: 'Slowness is often caused by "bloatware" or too many background processes competing for resources.',
    relatedProblemIds: ['p4254', 'p4257'],
    createdAt: '2025-07-04T14:00:00Z'
  },
  {
    id: 'p4256',
    title: 'Application consuming excessive memory',
    slug: 'application-consuming-excessive-memory',
    shortDescription: 'The app uses an unusual amount of RAM, causing other apps to slow down or crash.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['High RAM usage in Task Manager', 'System "Out of Memory" errors', 'Heavy disk swapping'],
    causes: ['Memory leak', 'Large data sets', 'Too many open tabs/files'],
    steps: [
      { id: 's1', title: 'Restart the App', description: 'Temporarily clears the leaked memory and returns usage to normal.' },
      { id: 's2', title: 'Disable Extensions', description: 'In browsers or IDEs, third-party plugins are often the cause of high RAM usage.' },
      { id: 's3', title: 'Increase Page File', description: 'Adjust virtual memory settings to provide more "overflow" space on the disk.' }
    ],
    technicianAdvice: 'A "Memory Leak" is a bug where the app forgets to release RAM it no longer needs. Only a developer fix or restart can solve it.',
    relatedProblemIds: ['p4257', 'p4252'],
    createdAt: '2025-07-04T15:00:00Z'
  },
  {
    id: 'p4257',
    title: 'Application consuming excessive CPU',
    slug: 'application-consuming-excessive-cpu',
    shortDescription: 'The app keeps your processor at high usage, causing heat and fan noise.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['100% CPU usage', 'Loud fans', 'System-wide lag'],
    causes: ['Background processing', 'Mining malware', 'Optimization bug'],
    steps: [
      { id: 's1', title: 'Check Task Manager', description: 'Identify if a specific sub-process of the app is causing the spike.' },
      { id: 's2', title: 'Change Process Priority', description: 'Set the app priority to "Low" in Task Manager to give other apps a chance.' },
      { id: 's3', title: 'Scan for Malware', description: 'Ensure the high usage isn\'t caused by a hidden crypto-miner.' }
    ],
    technicianAdvice: 'High CPU usage while idle is almost always a bug or a background task like indexing.',
    relatedProblemIds: ['p4256', 'p4258'],
    createdAt: '2025-07-04T16:00:00Z'
  },
  {
    id: 'p4258',
    title: 'Application consuming excessive battery',
    slug: 'application-consuming-excessive-battery',
    shortDescription: 'Using this specific app drains your battery much faster than others.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['Fast percentage drop', 'Device gets hot', 'High "Battery Usage" rank'],
    causes: ['High screen brightness', 'Constant GPS/Data usage', 'Unoptimized code'],
    steps: [
      { id: 's1', title: 'Restrict Background Data', description: 'Prevent the app from using the internet when not in use.' },
      { id: 's2', title: 'Lower App Settings', description: 'Reduce frame rate or graphics quality within the app.' },
      { id: 's3', title: 'Use Dark Mode', description: 'If the app and your screen support it, dark mode saves power on OLED displays.' }
    ],
    technicianAdvice: 'Apps that use the camera or GPS constantly will always be heavy battery drainers.',
    relatedProblemIds: ['p4249', 'p4257'],
    createdAt: '2025-07-04T17:00:00Z'
  },
  {
    id: 'p4259',
    title: 'Application causing system instability',
    slug: 'application-causing-system-instability',
    shortDescription: 'When this app is running, the entire computer becomes prone to crashes and errors.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['Random reboots', 'Other apps crashing', 'Visual glitches'],
    causes: ['Kernel driver conflict', 'Resource exhaustion', 'Hardware stress'],
    steps: [
      { id: 's1', title: 'Update the App', description: 'Developers often release patches for "system-breaking" bugs.' },
      { id: 's2', title: 'Check for Overheating', description: 'The app might be pushing your hardware to the point of thermal failure.' },
      { id: 's3', title: 'Uninstall and Find Alternative', description: 'If an app is fundamentally unstable, it may not be worth the risk to your system.' }
    ],
    technicianAdvice: 'Apps that install "Kernel Drivers" (like anti-cheat or virtual drives) are the most likely to cause system-wide instability.',
    relatedProblemIds: ['p4260', 'p4243'],
    createdAt: '2025-07-04T18:00:00Z'
  },
  {
    id: 'p4260',
    title: 'Application causing system reboot',
    slug: 'application-causing-system-reboot',
    shortDescription: 'Launching or using the app triggers an immediate, forced restart of your device.',
    category: 'app',
    subcategory: 'Compatibility',
    symptoms: ['Sudden black screen', 'PC restarts without warning', 'Blue screen (BSOD)'],
    causes: ['Power supply failure (PSU)', 'Critical driver error', 'CPU/GPU overheating'],
    steps: [
      { id: 's1', title: 'Disable Automatic Restart', description: 'In Windows, disable "Automatically restart" on system failure to see the error code.' },
      { id: 's2', title: 'Check Power Connections', description: 'Ensure your PC is getting enough power; heavy apps can trip a weak PSU.' },
      { id: 's3', title: 'Monitor Temperatures', description: 'Use a tool like HWMonitor to see if the CPU/GPU is hitting 90C+ before the reboot.' }
    ],
    technicianAdvice: 'An immediate reboot under load is almost always a hardware protection mechanism triggered by heat or power issues.',
    relatedProblemIds: ['p4259', 'p4252'],
    createdAt: '2025-07-04T19:00:00Z'
  },
  {
    id: 'p4261',
    title: 'Device configuration not saving',
    slug: 'device-configuration-not-saving',
    shortDescription: 'Changes you make to system or hardware settings are lost as soon as you close the settings window.',
    category: 'laptop',
    subcategory: 'Configuration',
    symptoms: ['Settings revert to default', 'No "Apply" button response', 'Error on save'],
    causes: ['Read-only config file', 'Permission issues', 'Corrupted user profile'],
    steps: [
      { id: 's1', title: 'Run as Administrator', description: 'Open the settings app or control panel with administrative rights.' },
      { id: 's2', title: 'Check File Attributes', description: 'Ensure the configuration files in AppData are not marked as "Read-only".' },
      { id: 's3', title: 'Create New User Profile', description: 'If the profile is corrupted, settings often fail to write to the registry.' }
    ],
    technicianAdvice: 'If BIOS settings won\'t save, your motherboard\'s CMOS battery may be dead.',
    relatedProblemIds: ['p4262', 'p4266'],
    createdAt: '2025-07-04T20:00:00Z'
  },
  {
    id: 'p4262',
    title: 'Device configuration reset after reboot',
    slug: 'device-configuration-reset-after-reboot',
    shortDescription: 'Your settings work during the current session but return to defaults every time you restart.',
    category: 'laptop',
    subcategory: 'Configuration',
    symptoms: ['Wallpaper resets', 'WiFi forgotten', 'Brightness at 100% on boot'],
    causes: ['Deep Freeze/Kiosk software', 'Failing CMOS battery', 'Windows "Fast Startup" bug'],
    steps: [
      { id: 's1', title: 'Disable Fast Startup', description: 'Fast Startup can sometimes prevent settings from being committed to disk during shutdown.' },
      { id: 's2', title: 'Check for Kiosk Mode', description: 'Ensure no "System Restore" or "Deep Freeze" software is active.' },
      { id: 's3', title: 'Replace CMOS Battery', description: 'On desktops, a CR2032 battery swap often fixes boot-time setting loss.' }
    ],
    technicianAdvice: 'If only specific hardware settings reset, the component\'s firmware might be failing to hold a charge.',
    relatedProblemIds: ['p4261', 'p4265'],
    createdAt: '2025-07-04T21:00:00Z'
  },
  {
    id: 'p4263',
    title: 'Device configuration not applied',
    slug: 'device-configuration-not-applied',
    shortDescription: 'The settings menu shows the change is made, but the hardware doesn\'t actually change its behavior.',
    category: 'laptop',
    subcategory: 'Configuration',
    symptoms: ['Resolution doesn\'t change', 'Volume stays same', 'Refresh rate stuck'],
    causes: ['Driver override', 'Hardware limitation', 'Conflicting third-party utility'],
    steps: [
      { id: 's1', title: 'Restart Driver', description: 'Use Win+Ctrl+Shift+B to restart the graphics driver if display settings won\'t apply.' },
      { id: 's2', title: 'Use Manufacturer Tool', description: 'Use the official app (e.g., NVIDIA Control Panel) instead of Windows Settings.' },
      { id: 's3', title: 'Check for Physical Switches', description: 'Some laptops have physical toggles that override software settings.' }
    ],
    technicianAdvice: 'If a setting won\'t apply, the hardware may be reporting capabilities it doesn\'t actually support.',
    relatedProblemIds: ['p4261', 'p4264'],
    createdAt: '2025-07-04T22:00:00Z'
  },
  {
    id: 'p4264',
    title: 'Device configuration invalid',
    slug: 'device-configuration-invalid',
    shortDescription: 'The system rejects a configuration as "out of range" or "unsupported".',
    category: 'laptop',
    subcategory: 'Configuration',
    symptoms: ['"Invalid parameter"', 'Beeping on boot', 'Settings menu crashes'],
    causes: ['Manual registry edits', 'Incompatible hardware pairing', 'Overclocking too high'],
    steps: [
      { id: 's1', title: 'Reset to Defaults', description: 'Use the "Reset" or "Restore Defaults" button in the settings menu.' },
      { id: 's2', title: 'Boot in Safe Mode', description: 'Safe Mode loads a minimal config, allowing you to fix invalid settings.' },
      { id: 's3', title: 'Clear CMOS', description: 'Use the motherboard jumper or remove the battery to wipe invalid BIOS settings.' }
    ],
    technicianAdvice: 'Invalid configurations can sometimes prevent the system from POSTing (booting at all).',
    relatedProblemIds: ['p4265', 'p4263'],
    createdAt: '2025-07-04T23:00:00Z'
  },
  {
    id: 'p4265',
    title: 'Device configuration corrupted',
    slug: 'device-configuration-corrupted',
    shortDescription: 'The configuration file is unreadable, causing errors or erratic device behavior.',
    category: 'laptop',
    subcategory: 'Configuration',
    symptoms: ['Garbled text in menus', 'Random crashes', 'Device not recognized'],
    causes: ['Sudden power loss', 'Disk bad sectors', 'Software bug'],
    steps: [
      { id: 's1', title: 'Delete Config File', description: 'Find and delete the .ini or .xml config file; the app will recreate a fresh one.' },
      { id: 's2', title: 'Run Disk Check', description: 'Run "chkdsk" to ensure the corruption isn\'t caused by physical drive damage.' },
      { id: 's3', title: 'Reinstall Drivers', description: 'Corruption often happens in the driver\'s local data store.' }
    ],
    technicianAdvice: 'Corruption is often a precursor to a failing storage drive.',
    relatedProblemIds: ['p4266', 'p4262'],
    createdAt: '2025-07-05T08:00:00Z'
  },
  {
    id: 'p4266',
    title: 'Device configuration unable to load',
    slug: 'device-configuration-unable-to-load',
    shortDescription: 'The device fails to start because it cannot find or read its startup configuration.',
    category: 'laptop',
    subcategory: 'Configuration',
    symptoms: ['"Failed to load configuration"', 'Yellow exclamation in Device Manager', 'App won\'t open'],
    causes: ['Missing files', 'Registry key deleted', 'Antivirus block'],
    steps: [
      { id: 's1', title: 'Check Quarantine', description: 'Ensure your antivirus hasn\'t mistakenly flagged a config file as a threat.' },
      { id: 's2', title: 'Repair Installation', description: 'Use "Add or Remove Programs" > [App] > Modify > Repair.' },
      { id: 's3', title: 'Check Environment Variables', description: 'Ensure system paths (like PATH or TEMP) are correctly configured.' }
    ],
    technicianAdvice: 'This is common after a "System Cleanup" that was too aggressive.',
    relatedProblemIds: ['p4265', 'p4261'],
    createdAt: '2025-07-05T09:00:00Z'
  },
  {
    id: 'p4267',
    title: 'Device configuration unable to export',
    slug: 'device-configuration-unable-to-export',
    shortDescription: 'You cannot save your settings to a file for backup or transfer to another device.',
    category: 'laptop',
    subcategory: 'Configuration',
    symptoms: ['"Export failed"', 'Empty backup file', 'Permission error'],
    causes: ['Disk full', 'No write permission', 'App bug'],
    steps: [
      { id: 's1', title: 'Change Export Location', description: 'Try saving to the Desktop or a USB drive instead of a system folder.' },
      { id: 's2', title: 'Check Disk Space', description: 'Ensure you have enough room for the backup file.' },
      { id: 's3', title: 'Update the App', description: 'Export bugs are often fixed in newer software versions.' }
    ],
    technicianAdvice: 'If export fails, you can often manually copy the config files from the AppData folder.',
    relatedProblemIds: ['p4268', 'p4269'],
    createdAt: '2025-07-05T10:00:00Z'
  },
  {
    id: 'p4268',
    title: 'Device configuration unable to import',
    slug: 'device-configuration-unable-to-import',
    shortDescription: 'The system rejects a backup or configuration file you are trying to load.',
    category: 'laptop',
    subcategory: 'Configuration',
    symptoms: ['"Incompatible file format"', 'Import hangs', 'Settings don\'t change'],
    causes: ['Version mismatch', 'File corruption', 'Wrong file extension'],
    steps: [
      { id: 's1', title: 'Check Version', description: 'Ensure the backup was created on the same (or older) version of the software.' },
      { id: 's2', title: 'Verify File Integrity', description: 'Open the file in Notepad to see if it contains readable data or just gibberish.' },
      { id: 's3', title: 'Manual Import', description: 'Paste the contents of the backup directly into the active config file.' }
    ],
    technicianAdvice: 'Importing a config from a different hardware model can cause system crashes.',
    relatedProblemIds: ['p4267', 'p4265'],
    createdAt: '2025-07-05T11:00:00Z'
  },
  {
    id: 'p4269',
    title: 'Device configuration unable to sync',
    slug: 'device-configuration-unable-to-sync',
    shortDescription: 'Your settings are not syncing across your devices (e.g., via iCloud or Microsoft Account).',
    category: 'laptop',
    subcategory: 'Configuration',
    symptoms: ['Different settings on different PCs', '"Sync paused"', 'Conflict errors'],
    causes: ['Account error', 'No internet', 'Sync disabled in settings'],
    steps: [
      { id: 's1', title: 'Check Account Status', description: 'Ensure you are signed in and your account isn\'t locked or needing verification.' },
      { id: 's2', title: 'Enable Sync', description: 'Go to Settings > Accounts > Sync your settings and ensure it is ON.' },
      { id: 's3', title: 'Restart Sync Service', description: 'Log out and back in to force a fresh sync with the cloud.' }
    ],
    technicianAdvice: 'Syncing can take several minutes; don\'t expect changes to appear instantly on other devices.',
    relatedProblemIds: ['p4267', 'p4270'],
    createdAt: '2025-07-05T12:00:00Z'
  },
  {
    id: 'p4270',
    title: 'Device configuration unable to reset',
    slug: 'device-configuration-unable-to-reset',
    shortDescription: 'The "Reset to Defaults" button is missing, greyed out, or fails to work.',
    category: 'laptop',
    subcategory: 'Configuration',
    symptoms: ['Cannot undo changes', 'Reset button does nothing', 'Error on reset'],
    causes: ['Missing default template', 'Permission block', 'Software bug'],
    steps: [
      { id: 's1', title: 'Manual Deletion', description: 'Delete the config file while the app is closed; it will generate a default one on next launch.' },
      { id: 's2', title: 'Reinstall App', description: 'The cleanest way to get back to default settings.' },
      { id: 's3', title: 'Check for "Lock" Settings', description: 'Some enterprise devices have settings locked by an administrator.' }
    ],
    technicianAdvice: 'If you can\'t reset, your user account might not have the "Write" permission for that specific registry key.',
    relatedProblemIds: ['p4261', 'p4269'],
    createdAt: '2025-07-05T13:00:00Z'
  },
  {
    id: 'p4271',
    title: 'Connectivity dropped unexpectedly',
    slug: 'connectivity-dropped-unexpectedly',
    shortDescription: 'Your internet or network connection cuts out suddenly without any obvious reason.',
    category: 'internet',
    subcategory: 'Connectivity',
    symptoms: ['"No Internet" icon', 'Downloads stop', 'Video calls freeze'],
    causes: ['Router rebooting', 'ISP outage', 'Signal interference'],
    steps: [
      { id: 's1', title: 'Check Router Lights', description: 'Ensure the "Internet" or "Globe" light is green/white, not red or off.' },
      { id: 's2', title: 'Restart WiFi', description: 'Toggle WiFi off and on on your device to force a reconnection.' },
      { id: 's3', title: 'Check Other Devices', description: 'If only one device drops, the issue is with that device, not the network.' }
    ],
    technicianAdvice: 'Sudden drops are often caused by "DFS" channel switching on 5GHz WiFi.',
    relatedProblemIds: ['p4273', 'p4278'],
    createdAt: '2025-07-05T14:00:00Z'
  },
  {
    id: 'p4272',
    title: 'Connectivity slow to establish',
    slug: 'connectivity-slow-to-establish',
    shortDescription: 'It takes a long time (30+ seconds) for your device to connect to the network after waking up.',
    category: 'internet',
    subcategory: 'Connectivity',
    symptoms: ['"Identifying..." stays too long', 'Delayed internet access', 'Slow DHCP'],
    causes: ['IP address conflict', 'Slow DNS server', 'Driver initialization lag'],
    steps: [
      { id: 's1', title: 'Assign Static IP', description: 'Manually set an IP address to skip the DHCP negotiation phase.' },
      { id: 's2', title: 'Update Network Driver', description: 'Ensure your WiFi/Ethernet driver is optimized for fast wake-up.' },
      { id: 's3', title: 'Change DNS', description: 'Use a fast provider like Cloudflare (1.1.1.1) to speed up the initial handshake.' }
    ],
    technicianAdvice: 'A slow connection is often caused by the router struggling to assign an IP address from a full pool.',
    relatedProblemIds: ['p4271', 'p4279'],
    createdAt: '2025-07-05T15:00:00Z'
  },
  {
    id: 'p4273',
    title: 'Connectivity intermittent',
    slug: 'connectivity-intermittent',
    shortDescription: 'The connection works and then stops repeatedly, making it impossible to stay online.',
    category: 'internet',
    subcategory: 'Connectivity',
    symptoms: ['Flapping connection', 'Lag spikes', '"Request timed out"'],
    causes: ['Loose cable', 'Overloaded router', 'Microwave interference'],
    steps: [
      { id: 's1', title: 'Check Physical Cables', description: 'Ensure Ethernet and coax cables are screwed in or clicked in tightly.' },
      { id: 's2', title: 'Change WiFi Channel', description: 'Use a WiFi analyzer app to find a less crowded channel (1, 6, or 11 for 2.4GHz).' },
      { id: 's3', title: 'Reduce Load', description: 'Disconnect other devices to see if the router is simply overwhelmed.' }
    ],
    technicianAdvice: 'Intermittent issues are the hardest to diagnose; they are often caused by "noise" on the line from a neighbor.',
    relatedProblemIds: ['p4271', 'p4274'],
    createdAt: '2025-07-05T16:00:00Z'
  },
  {
    id: 'p4274',
    title: 'Connectivity limited',
    slug: 'connectivity-limited',
    shortDescription: 'You are connected to the network, but have "No Internet Access".',
    category: 'internet',
    subcategory: 'Connectivity',
    symptoms: ['Yellow triangle icon', 'Can access local files but not websites', 'Ping gateway works, ping google fails'],
    causes: ['ISP authentication failure', 'DNS error', 'Incorrect gateway settings'],
    steps: [
      { id: 's1', title: 'Restart Modem/Router', description: 'Power cycle both devices to refresh the ISP connection.' },
      { id: 's2', title: 'Check Account Status', description: 'Ensure your internet bill is paid and there are no local outages.' },
      { id: 's3', title: 'Reset TCP/IP Stack', description: 'Run "netsh int ip reset" in CMD and restart.' }
    ],
    technicianAdvice: '"Limited" connectivity usually means the local network is fine, but the "bridge" to the internet is broken.',
    relatedProblemIds: ['p4273', 'p4279'],
    createdAt: '2025-07-05T17:00:00Z'
  },
  {
    id: 'p4275',
    title: 'Connectivity blocked by firewall',
    slug: 'connectivity-blocked-by-firewall',
    shortDescription: 'A security wall is preventing an app or the whole system from accessing the internet.',
    category: 'internet',
    subcategory: 'Connectivity',
    symptoms: ['"Connection refused"', 'App works on other networks', 'Firewall notification'],
    causes: ['Strict security rules', 'Work/School restrictions', 'Misconfigured Windows Firewall'],
    steps: [
      { id: 's1', title: 'Allow App through Firewall', description: 'Go to Firewall settings > Allow an app or feature > Check both Public and Private.' },
      { id: 's2', title: 'Temporarily Disable Firewall', description: 'Turn it off for 1 minute to see if the connection works; if so, you need a new rule.' },
      { id: 's3', title: 'Reset Firewall Defaults', description: 'Restores the standard rules that allow most common traffic.' }
    ],
    technicianAdvice: 'Corporate firewalls often block specific "ports" used by games or VPNs.',
    relatedProblemIds: ['p4276', 'p4277'],
    createdAt: '2025-07-05T18:00:00Z'
  },
  {
    id: 'p4276',
    title: 'Connectivity blocked by antivirus',
    slug: 'connectivity-blocked-by-antivirus',
    shortDescription: 'Your antivirus software is intercepting and stopping network traffic it deems suspicious.',
    category: 'internet',
    subcategory: 'Connectivity',
    symptoms: ['"SSL Error"', 'Websites won\'t load', 'Antivirus popup'],
    causes: ['Web shield active', 'False positive', 'Encrypted traffic scanning'],
    steps: [
      { id: 's1', title: 'Disable Web Shield', description: 'Turn off the "Web" or "Network" protection module in your AV settings.' },
      { id: 's2', title: 'Add URL Exclusion', description: 'Add the specific website or IP to the AV\'s "White List".' },
      { id: 's3', title: 'Check for Certificate Issues', description: 'Some AVs install their own certificates to scan HTTPS; ensure they are trusted.' }
    ],
    technicianAdvice: 'Third-party AVs (Avast, McAfee, etc.) are much more likely to block connectivity than Windows Defender.',
    relatedProblemIds: ['p4275', 'p4277'],
    createdAt: '2025-07-05T19:00:00Z'
  },
  {
    id: 'p4277',
    title: 'Connectivity blocked by ISP',
    slug: 'connectivity-blocked-by-isp',
    shortDescription: 'Your internet provider is intentionally restricting access to certain sites or services.',
    category: 'internet',
    subcategory: 'Connectivity',
    symptoms: ['"Site blocked by provider"', 'Specific apps (Tor, P2P) don\'t work', 'DNS redirection'],
    causes: ['Legal requirements', 'Parental controls', 'Copyright enforcement'],
    steps: [
      { id: 's1', title: 'Use a VPN', description: 'Encrypt your traffic so the ISP cannot see what sites you are visiting.' },
      { id: 's2', title: 'Change DNS', description: 'ISPs often block sites via DNS; use 1.1.1.1 to bypass simple blocks.' },
      { id: 's3', title: 'Check Account Controls', description: 'Ensure "Family Shield" or "Safe Search" isn\'t enabled on your ISP account page.' }
    ],
    technicianAdvice: 'ISPs in some countries are legally required to block certain categories of websites.',
    relatedProblemIds: ['p4275', 'p4276'],
    createdAt: '2025-07-05T20:00:00Z'
  },
  {
    id: 'p4278',
    title: 'Connectivity unable to reach gateway',
    slug: 'connectivity-unable-to-reach-gateway',
    shortDescription: 'Your device cannot communicate with the router (the gateway to the internet).',
    category: 'internet',
    subcategory: 'Connectivity',
    symptoms: ['"Destination host unreachable"', 'Cannot open router settings (192.168.1.1)', 'No IP assigned'],
    causes: ['Subnet mismatch', 'Router crash', 'WiFi authentication failure'],
    steps: [
      { id: 's1', title: 'Check Gateway IP', description: 'Run "ipconfig" and look for "Default Gateway". Ensure you can ping that address.' },
      { id: 's2', title: 'Reboot Router', description: 'The router\'s internal software may have crashed.' },
      { id: 's3', title: 'Forget WiFi Network', description: 'Forces a fresh handshake and IP request from the gateway.' }
    ],
    technicianAdvice: 'If you can\'t reach the gateway, you are effectively isolated from the rest of the network.',
    relatedProblemIds: ['p4271', 'p4279'],
    createdAt: '2025-07-05T21:00:00Z'
  },
  {
    id: 'p4279',
    title: 'Connectivity unable to reach DNS',
    slug: 'connectivity-unable-to-reach-dns',
    shortDescription: 'Your device can connect to IPs but cannot translate names (like google.com) into addresses.',
    category: 'internet',
    subcategory: 'Connectivity',
    symptoms: ['"DNS_PROBE_FINISHED_NO_INTERNET"', 'IPs work, names don\'t', 'Slow page lookups'],
    causes: ['DNS server down', 'Incorrect DNS settings', 'Firewall blocking port 53'],
    steps: [
      { id: 's1', title: 'Flush DNS Cache', description: 'Run "ipconfig /flushdns" to clear old, potentially broken records.' },
      { id: 's2', title: 'Set Manual DNS', description: 'Go to network settings and set DNS to 8.8.8.8 (Google) or 1.1.1.1 (Cloudflare).' },
      { id: 's3', title: 'Restart DNS Client Service', description: 'In Windows Services, restart the "DNS Client" service.' }
    ],
    technicianAdvice: 'DNS issues are often mistaken for "no internet" because the browser fails to load any named sites.',
    relatedProblemIds: ['p4274', 'p4280'],
    createdAt: '2025-07-05T22:00:00Z'
  },
  {
    id: 'p4280',
    title: 'Connectivity unable to reach server',
    slug: 'connectivity-unable-to-reach-server',
    shortDescription: 'Your internet is fine, but you cannot connect to one specific website or game server.',
    category: 'internet',
    subcategory: 'Connectivity',
    symptoms: ['"Server not found"', 'Connection timed out', 'High packet loss to one IP'],
    causes: ['Server maintenance', 'Routing issue', 'IP ban'],
    steps: [
      { id: 's1', title: 'Check "Is It Down"', description: 'Use a site like isitdownrightnow.com to see if the server is actually online.' },
      { id: 's2', title: 'Run a Traceroute', description: 'Run "tracert [server_ip]" to see where the connection is failing.' },
      { id: 's3', title: 'Try a Proxy/VPN', description: 'If the issue is a routing problem with your ISP, a VPN can bypass the broken path.' }
    ],
    technicianAdvice: 'If you can reach everything else, the problem is almost certainly with the remote server or the path to it.',
    relatedProblemIds: ['p4279', 'p4271'],
    createdAt: '2025-07-05T23:00:00Z'
  },
  {
    id: 'p4281',
    title: 'Power management settings not applied',
    slug: 'power-management-settings-not-applied',
    shortDescription: 'Your computer ignores your power plan settings (like screen timeout or sleep timer).',
    category: 'laptop',
    subcategory: 'Power',
    symptoms: ['Screen never turns off', 'PC sleeps too early', 'Brightness doesn\'t dim'],
    causes: ['Background app activity', 'Power plan corruption', 'Driver override'],
    steps: [
      { id: 's1', title: 'Check Power Requests', description: 'Run "powercfg /requests" in CMD to see which app is keeping the system awake.' },
      { id: 's2', title: 'Restore Power Plan Defaults', description: 'Go to Power Options > Change plan settings > Restore default settings for this plan.' },
      { id: 's3', title: 'Update Chipset Drivers', description: 'Chipset drivers manage the communication between the OS and power hardware.' }
    ],
    technicianAdvice: 'Media players and browsers with active video tabs often prevent the system from entering sleep mode.',
    relatedProblemIds: ['p4282', 'p4285'],
    createdAt: '2025-07-06T08:00:00Z'
  },
  {
    id: 'p4282',
    title: 'Power management causing system sleep',
    slug: 'power-management-causing-system-sleep',
    shortDescription: 'The computer enters sleep mode unexpectedly, even while you are using it or a task is running.',
    category: 'laptop',
    subcategory: 'Power',
    symptoms: ['Sudden black screen', 'Downloads interrupted', 'Session locks randomly'],
    causes: ['Aggressive power saving', 'Faulty lid sensor', 'Overheating'],
    steps: [
      { id: 's1', title: 'Increase Sleep Timeout', description: 'Set "Sleep after" to a longer duration in Power & Sleep settings.' },
      { id: 's2', title: 'Check Lid Settings', description: 'Ensure "When I close the lid" is set correctly and the sensor isn\'t being tripped by magnets.' },
      { id: 's3', title: 'Monitor CPU Temp', description: 'Some systems force sleep if the processor hits a critical temperature.' }
    ],
    technicianAdvice: 'A "Sleep" event in the System Log can tell you exactly what triggered the transition.',
    relatedProblemIds: ['p4281', 'p4283'],
    createdAt: '2025-07-06T09:00:00Z'
  },
  {
    id: 'p4283',
    title: 'Power management causing system hibernate',
    slug: 'power-management-causing-system-hibernate',
    shortDescription: 'The PC skips sleep and goes straight to hibernation, which takes longer to wake up from.',
    category: 'laptop',
    subcategory: 'Power',
    symptoms: ['Slow wake up', '"Resuming Windows" screen', 'Disk space disappearing (hiberfil.sys)'],
    causes: ['Low battery threshold', 'Critical battery action', 'Hybrid sleep disabled'],
    steps: [
      { id: 's1', title: 'Disable Hibernation', description: 'Run "powercfg -h off" in CMD to disable hibernation and free up disk space.' },
      { id: 's2', title: 'Adjust Battery Levels', description: 'Change the "Critical battery level" in advanced power settings to a lower percentage.' },
      { id: 's3', title: 'Enable Hybrid Sleep', description: 'Allows the PC to sleep quickly while still saving state to disk as a backup.' }
    ],
    technicianAdvice: 'Hibernation is useful for long-term storage but annoying for daily use due to slow resume times.',
    relatedProblemIds: ['p4282', 'p4284'],
    createdAt: '2025-07-06T10:00:00Z'
  },
  {
    id: 'p4284',
    title: 'Power management causing system shutdown',
    slug: 'power-management-causing-system-shutdown',
    shortDescription: 'The system shuts down completely instead of sleeping or hibernating.',
    category: 'laptop',
    subcategory: 'Power',
    symptoms: ['Lost work', 'Full boot sequence on wake', 'No "Sleep" option in menu'],
    causes: ['Power supply issues', 'Critical thermal event', 'Incorrect power button action'],
    steps: [
      { id: 's1', title: 'Check Power Button Settings', description: 'Ensure "Choose what the power buttons do" isn\'t set to "Shut down".' },
      { id: 's2', title: 'Inspect Event Viewer', description: 'Look for "Kernel-Power" errors to see if the shutdown was graceful or a crash.' },
      { id: 's3', title: 'Test Battery Health', description: 'A failing battery may not have enough voltage to maintain sleep mode.' }
    ],
    technicianAdvice: 'If the PC shuts down only when unplugged, the battery cells are likely dead.',
    relatedProblemIds: ['p4283', 'p4281'],
    createdAt: '2025-07-06T11:00:00Z'
  },
  {
    id: 'p4285',
    title: 'Power management causing system wake-up',
    slug: 'power-management-causing-system-wake-up',
    shortDescription: 'The computer wakes up from sleep on its own, often in the middle of the night.',
    category: 'laptop',
    subcategory: 'Power',
    symptoms: ['PC on in the morning', 'Fans spinning in bag', 'Battery drained while "off"'],
    causes: ['Wake timers', 'Network card "Wake on LAN"', 'Sensitive mouse'],
    steps: [
      { id: 's1', title: 'Find Wake Source', description: 'Run "powercfg /lastwake" to see what device or task woke the PC.' },
      { id: 's2', title: 'Disable Wake Timers', description: 'Power Options > Change plan settings > Advanced > Sleep > Allow wake timers > Disable.' },
      { id: 's3', title: 'Disable Wake on LAN', description: 'In Device Manager, uncheck "Allow this device to wake the computer" for your network card.' }
    ],
    technicianAdvice: 'Windows Update is a frequent culprit for middle-of-the-night wake-ups.',
    relatedProblemIds: ['p4281', 'p4282'],
    createdAt: '2025-07-06T12:00:00Z'
  },
  {
    id: 'p4286',
    title: 'Power management unable to detect battery',
    slug: 'power-management-unable-to-detect-battery',
    shortDescription: 'The OS shows "No battery detected" even though a battery is physically present.',
    category: 'laptop',
    subcategory: 'Power',
    symptoms: ['"X" on battery icon', 'PC dies instantly when unplugged', 'Battery status "Unknown"'],
    causes: ['Loose internal connector', 'Dead battery controller', 'Driver glitch'],
    steps: [
      { id: 's1', title: 'Reinstall Battery Driver', description: 'Device Manager > Batteries > Uninstall "Microsoft ACPI-Compliant Control Method Battery" and restart.' },
      { id: 's2', title: 'Perform a Power Reset', description: 'Shut down, unplug, hold power button for 30 seconds, then restart.' },
      { id: 's3', title: 'Reseat the Battery', description: 'If comfortable, open the laptop and ensure the battery cable is firmly plugged in.' }
    ],
    technicianAdvice: 'If the battery is old, the internal protection circuit may have tripped permanently.',
    relatedProblemIds: ['p4287', 'p4288'],
    createdAt: '2025-07-06T13:00:00Z'
  },
  {
    id: 'p4287',
    title: 'Power management unable to detect charger',
    slug: 'power-management-unable-to-detect-charger',
    shortDescription: 'The laptop doesn\'t show it is charging when the power adapter is plugged in.',
    category: 'laptop',
    subcategory: 'Power',
    symptoms: ['"Plugged in, not charging"', 'No charging light', 'Battery percentage dropping while plugged in'],
    causes: ['Failing adapter', 'Damaged charging port', 'Incorrect wattage charger'],
    steps: [
      { id: 's1', title: 'Try a Different Outlet', description: 'Rule out a dead wall socket or tripped breaker.' },
      { id: 's2', title: 'Inspect the Charging Pin', description: 'Look for bent pins or debris inside the charging port and the cable end.' },
      { id: 's3', title: 'Check BIOS for Adapter Info', description: 'Many laptops can show the detected charger wattage in the BIOS menu.' }
    ],
    technicianAdvice: 'Using a low-wattage charger (e.g., a phone charger on a laptop) will often result in "Not Charging".',
    relatedProblemIds: ['p4286', 'p4288'],
    createdAt: '2025-07-06T14:00:00Z'
  },
  {
    id: 'p4288',
    title: 'Power management unable to optimize battery',
    slug: 'power-management-unable-to-optimize-battery',
    shortDescription: 'Battery health features (like 80% charge limit) are not working or missing.',
    category: 'laptop',
    subcategory: 'Power',
    symptoms: ['Always charges to 100%', 'Battery health declining fast', 'No "Eco Mode"'],
    causes: ['Missing manufacturer software', 'Outdated BIOS', 'Incompatible battery'],
    steps: [
      { id: 's1', title: 'Install Manufacturer Utility', description: 'Download apps like "Lenovo Vantage", "MyASUS", or "Dell Power Manager".' },
      { id: 's2', title: 'Enable Battery Threshold', description: 'Find the setting to "Limit charge to 80%" to extend battery lifespan.' },
      { id: 's3', title: 'Calibrate the Battery', description: 'Fully charge to 100%, then drain to 0% to reset the battery meter.' }
    ],
    technicianAdvice: 'Keeping a battery at 100% while plugged in all the time is the fastest way to kill its capacity.',
    relatedProblemIds: ['p4286', 'p4287'],
    createdAt: '2025-07-06T15:00:00Z'
  },
  {
    id: 'p4289',
    title: 'Power management unable to enter low power state',
    slug: 'power-management-unable-to-enter-low-power-state',
    shortDescription: 'The CPU or GPU stays at high clock speeds even when the computer is idle.',
    category: 'laptop',
    subcategory: 'Power',
    symptoms: ['High idle temps', 'Short battery life', 'Fans always on'],
    causes: ['"High Performance" power plan', 'Background malware', 'Driver bug'],
    steps: [
      { id: 's1', title: 'Switch to "Balanced" Plan', description: 'The "High Performance" plan often prevents the CPU from downclocking.' },
      { id: 's2', title: 'Check Minimum Processor State', description: 'In advanced power settings, ensure "Minimum processor state" is set to 5%.' },
      { id: 's3', title: 'Update Graphics Driver', description: 'GPU drivers often have bugs that keep the card in "3D Mode" on the desktop.' }
    ],
    technicianAdvice: 'A "Low Power State" (C-State) is essential for modern laptop battery life.',
    relatedProblemIds: ['p4290', 'p4281'],
    createdAt: '2025-07-06T16:00:00Z'
  },
  {
    id: 'p4290',
    title: 'Power management unable to exit low power state',
    slug: 'power-management-unable-to-exit-low-power-state',
    shortDescription: 'The computer becomes extremely slow or "stuck" in a low-performance mode even when plugged in.',
    category: 'laptop',
    subcategory: 'Power',
    symptoms: ['CPU stuck at 0.8GHz', 'Laggy UI', 'Slow app opening'],
    causes: ['BD PROCHOT signal', 'Failing power adapter', 'Thermal throttling bug'],
    steps: [
      { id: 's1', title: 'Unplug and Replug', description: 'Forces the OS to re-evaluate the power source and performance level.' },
      { id: 's2', title: 'Use ThrottleStop', description: 'Advanced users can use this tool to see if "BD PROCHOT" is being triggered incorrectly.' },
      { id: 's3', title: 'Check for Overheating', description: 'If the system is too hot, it will lock the CPU to the lowest speed to cool down.' }
    ],
    technicianAdvice: 'A failing power adapter can cause the motherboard to throttle the CPU to save power.',
    relatedProblemIds: ['p4289', 'p4281'],
    createdAt: '2025-07-06T17:00:00Z'
  },
  {
    id: 'p4291',
    title: 'System optimization failing',
    slug: 'system-optimization-failing',
    shortDescription: 'Tools designed to speed up your computer are crashing or returning errors.',
    category: 'software',
    subcategory: 'Optimization',
    symptoms: ['"Cleanup failed"', 'Optimization app crashes', 'No performance gain'],
    causes: ['Permission issues', 'Corrupted database', 'Conflict with antivirus'],
    steps: [
      { id: 's1', title: 'Run as Administrator', description: 'Optimization tools need deep system access to clear caches.' },
      { id: 's2', title: 'Check for Updates', description: 'Ensure the optimization tool is compatible with your current OS version.' },
      { id: 's3', title: 'Use Built-in Tools', description: 'Try "Disk Cleanup" or "Storage Sense" instead of third-party apps.' }
    ],
    technicianAdvice: 'Many "PC Boosters" are actually bloatware that can slow down your system further.',
    relatedProblemIds: ['p4292', 'p4293'],
    createdAt: '2025-07-06T18:00:00Z'
  },
  {
    id: 'p4292',
    title: 'System optimization causing data loss',
    slug: 'system-optimization-causing-data-loss',
    shortDescription: 'An optimization tool accidentally deleted important files, like documents or browser passwords.',
    category: 'software',
    subcategory: 'Optimization',
    symptoms: ['Missing files', 'Logged out of all sites', 'Empty Downloads folder'],
    causes: ['Aggressive cleaning settings', 'Incorrect file identification', 'User error'],
    steps: [
      { id: 's1', title: 'Check the Recycle Bin', description: 'Some tools move files there instead of deleting them permanently.' },
      { id: 's2', title: 'Use File Recovery Software', description: 'Try a tool like Recuva if the files were deleted recently.' },
      { id: 's3', title: 'Review Cleanup Settings', description: 'Uncheck "Downloads" and "Passwords" in your cleaning app.' }
    ],
    technicianAdvice: 'Always review what a "Cleanup" tool is going to delete before clicking "Start".',
    relatedProblemIds: ['p4291', 'p4293'],
    createdAt: '2025-07-06T19:00:00Z'
  },
  {
    id: 'p4293',
    title: 'System optimization causing system instability',
    slug: 'system-optimization-causing-system-instability',
    shortDescription: 'After "optimizing", your computer is now crashing, showing blue screens, or missing features.',
    category: 'software',
    subcategory: 'Optimization',
    symptoms: ['BSOD on boot', 'Start menu not working', '"DLL not found" errors'],
    causes: ['Registry over-cleaning', 'Deleted system drivers', 'Disabled essential services'],
    steps: [
      { id: 's1', title: 'Use System Restore', description: 'Roll back to the point before you ran the optimization tool.' },
      { id: 's2', title: 'Run SFC Scan', description: 'Run "sfc /scannow" in CMD to repair any deleted system files.' },
      { id: 's3', title: 'Undo Changes in App', description: 'Most good optimization tools have an "Undo" or "Restore" feature.' }
    ],
    technicianAdvice: 'Registry cleaners are particularly dangerous and rarely provide any real performance benefit.',
    relatedProblemIds: ['p4291', 'p4292'],
    createdAt: '2025-07-06T20:00:00Z'
  },
  {
    id: 'p4294',
    title: 'System optimization unable to clear cache',
    slug: 'system-optimization-unable-to-clear-cache',
    shortDescription: 'Temporary files and app caches remain on the disk even after a cleanup attempt.',
    category: 'software',
    subcategory: 'Optimization',
    symptoms: ['Disk space doesn\'t increase', '"File in use" errors', 'Old data persists in apps'],
    causes: ['Apps running in background', 'Locked system files', 'Permission denied'],
    steps: [
      { id: 's1', title: 'Close All Apps', description: 'Ensure browsers and heavy apps are completely closed before cleaning.' },
      { id: 's2', title: 'Clean in Safe Mode', description: 'Safe Mode prevents most apps from starting, making their cache files easy to delete.' },
      { id: 's3', title: 'Manual Deletion', description: 'Navigate to %TEMP% and delete the files manually.' }
    ],
    technicianAdvice: 'Some cache files are "locked" by the OS and can only be cleared during a reboot.',
    relatedProblemIds: ['p4295', 'p4291'],
    createdAt: '2025-07-06T21:00:00Z'
  },
  {
    id: 'p4295',
    title: 'System optimization unable to clear temporary files',
    slug: 'system-optimization-unable-to-clear-temporary-files',
    shortDescription: 'The "Temp" folders continue to grow, consuming gigabytes of space.',
    category: 'software',
    subcategory: 'Optimization',
    symptoms: ['Low disk space warning', 'Thousands of small files in Temp folder', 'Cleanup tool hangs'],
    causes: ['Failed installers', 'App logging bugs', 'Windows Update leftovers'],
    steps: [
      { id: 's1', title: 'Use Storage Sense', description: 'Enable Windows "Storage Sense" to automatically clear temp files.' },
      { id: 's2', title: 'Run Disk Cleanup as Admin', description: 'Click "Clean up system files" to remove Windows Update and driver backups.' },
      { id: 's3', title: 'Identify the Culprit', description: 'Sort the Temp folder by size to see which app is generating the most data.' }
    ],
    technicianAdvice: 'A single bugged app can generate gigabytes of log files in the Temp folder in just a few hours.',
    relatedProblemIds: ['p4294', 'p4291'],
    createdAt: '2025-07-06T22:00:00Z'
  },
  {
    id: 'p4296',
    title: 'System optimization unable to defragment disk',
    slug: 'system-optimization-unable-to-defragment-disk',
    shortDescription: 'The defragmentation tool fails to start or finishes instantly with "0% optimized".',
    category: 'software',
    subcategory: 'Optimization',
    symptoms: ['"Optimization not available"', 'Drive not showing in list', 'Slow disk performance'],
    causes: ['SSD detected (SSDs shouldn\'t be defragged)', 'Disk errors', 'Insufficient free space'],
    steps: [
      { id: 's1', title: 'Check Drive Type', description: 'If you have an SSD, Windows will "Trim" it instead of defragging. This is normal.' },
      { id: 's2', title: 'Free Up Space', description: 'You need at least 15% free space for defragmentation to work.' },
      { id: 's3', title: 'Run CHKDSK', description: 'Fix any file system errors before attempting to defrag.' }
    ],
    technicianAdvice: 'NEVER manually defrag an SSD; it adds unnecessary wear and provides no speed benefit.',
    relatedProblemIds: ['p4291', 'p4295'],
    createdAt: '2025-07-06T23:00:00Z'
  },
  {
    id: 'p4297',
    title: 'System optimization unable to optimize registry',
    slug: 'system-optimization-unable-to-optimize-registry',
    shortDescription: 'Registry cleaning or compacting tools are failing to modify the system database.',
    category: 'software',
    subcategory: 'Optimization',
    symptoms: ['"Registry access denied"', 'Tool hangs at 50%', 'Error 0x800...'],
    causes: ['Antivirus protection', 'Locked registry hives', 'Corrupted registry'],
    steps: [
      { id: 's1', title: 'Disable Antivirus', description: 'Security software often blocks tools from modifying the registry.' },
      { id: 's2', title: 'Run in Safe Mode', description: 'Allows access to registry keys that are normally locked by running apps.' },
      { id: 's3', title: 'Check for Corruption', description: 'Use "DISM /Online /Cleanup-Image /RestoreHealth" to repair the system image.' }
    ],
    technicianAdvice: 'Registry optimization is largely a myth; modern Windows versions manage the registry very efficiently on their own.',
    relatedProblemIds: ['p4293', 'p4291'],
    createdAt: '2025-07-07T08:00:00Z'
  },
  {
    id: 'p4298',
    title: 'System optimization unable to optimize startup',
    slug: 'system-optimization-unable-to-optimize-startup',
    shortDescription: 'You cannot disable apps from starting automatically, or they keep re-enabling themselves.',
    category: 'software',
    subcategory: 'Optimization',
    symptoms: ['Slow boot time', 'Unwanted apps opening on login', 'Task Manager "Startup" tab is empty'],
    causes: ['App internal settings', 'Group Policy', 'Malware persistence'],
    steps: [
      { id: 's1', title: 'Check App Settings', description: 'Many apps have an internal "Start with Windows" toggle that overrides the OS setting.' },
      { id: 's2', title: 'Use Autoruns', description: 'Download the Microsoft "Autoruns" tool for a much deeper look at startup items.' },
      { id: 's3', title: 'Check Task Scheduler', description: 'Some apps use "Scheduled Tasks" to start instead of the standard startup folder.' }
    ],
    technicianAdvice: 'Disabling too many startup items can break features like cloud sync or hardware hotkeys.',
    relatedProblemIds: ['p4291', 'p4299'],
    createdAt: '2025-07-07T09:00:00Z'
  },
  {
    id: 'p4299',
    title: 'System optimization unable to optimize services',
    slug: 'system-optimization-unable-to-optimize-services',
    shortDescription: 'You cannot stop or disable background services that are slowing down your PC.',
    category: 'software',
    subcategory: 'Optimization',
    symptoms: ['"Access Denied" in services.msc', 'Service restarts immediately', 'High background CPU usage'],
    causes: ['System protection', 'Dependency requirements', 'Malware'],
    steps: [
      { id: 's1', title: 'Check Dependencies', description: 'Right-click service > Properties > Dependencies. You can\'t stop a service if others need it.' },
      { id: 's2', title: 'Change Startup Type to "Disabled"', description: 'Prevents the service from starting even after a reboot.' },
      { id: 's3', title: 'Run as TrustedInstaller', description: 'Some services are protected; you need special tools to modify them.' }
    ],
    technicianAdvice: 'Be extremely careful disabling services; stopping the wrong one can break your internet or login screen.',
    relatedProblemIds: ['p4298', 'p4291'],
    createdAt: '2025-07-07T10:00:00Z'
  },
  {
    id: 'p4300',
    title: 'System optimization unable to optimize drivers',
    slug: 'system-optimization-unable-to-optimize-drivers',
    shortDescription: 'Driver update tools are failing to find or install better versions of your hardware drivers.',
    category: 'software',
    subcategory: 'Optimization',
    symptoms: ['"No updates found" (when you know they exist)', 'Installation failed', 'Wrong driver installed'],
    causes: ['OEM lock (laptop drivers)', 'Server connection error', 'Incompatible hardware ID'],
    steps: [
      { id: 's1', title: 'Download Manually', description: 'Visit the manufacturer\'s site (Intel, NVIDIA, Dell) and download the driver directly.' },
      { id: 's2', title: 'Use Device Manager', description: 'Right-click device > Update driver > Search automatically.' },
      { id: 's3', title: 'Uninstall Old Driver First', description: 'Use "DDU" (Display Driver Uninstaller) for a clean slate before installing new ones.' }
    ],
    technicianAdvice: 'Third-party "Driver Boosters" often install generic or incorrect drivers. Always prefer official sources.',
    relatedProblemIds: ['p4291', 'p4300'],
    createdAt: '2025-07-07T11:00:00Z'
  },
  {
    id: 'p4301',
    title: 'Device feature not working',
    slug: 'device-feature-not-working',
    shortDescription: 'A specific hardware feature (like a fingerprint reader, webcam, or touch screen) is unresponsive.',
    category: 'laptop',
    subcategory: 'Features',
    symptoms: ['Feature doesn\'t respond to touch/input', 'Missing from settings', 'Error code in Device Manager'],
    causes: ['Missing driver', 'Hardware failure', 'Disabled in BIOS'],
    steps: [
      { id: 's1', title: 'Check Device Manager', description: 'Look for any "Unknown Device" or items with a yellow exclamation mark.' },
      { id: 's2', title: 'Update Firmware', description: 'Download the latest BIOS/UEFI update from the manufacturer\'s support page.' },
      { id: 's3', title: 'Test in Safe Mode', description: 'If the feature works in Safe Mode, a third-party app is blocking it.' }
    ],
    technicianAdvice: 'If a feature stops working after a physical drop, an internal ribbon cable may have come loose.',
    relatedProblemIds: ['p4302', 'p4306'],
    createdAt: '2025-07-07T12:00:00Z'
  },
  {
    id: 'p4302',
    title: 'Device feature disabled by system',
    slug: 'device-feature-disabled-by-system',
    shortDescription: 'The operating system has turned off a feature to save power or protect the system.',
    category: 'laptop',
    subcategory: 'Features',
    symptoms: ['"Feature unavailable"', 'Greyed out settings', 'Notification: "Device was disabled"'],
    causes: ['Low battery', 'Overheating', 'Security policy'],
    steps: [
      { id: 's1', title: 'Plug in Power', description: 'Many features (like high-performance GPU or fast charging) only work when plugged in.' },
      { id: 's2', title: 'Check Power Management', description: 'Device Manager > [Device] > Properties > Power Management > Uncheck "Allow the computer to turn off this device".' },
      { id: 's3', title: 'Review Group Policy', description: 'For work PCs, check if IT has disabled the feature (e.g., USB ports or Camera).' }
    ],
    technicianAdvice: 'Windows "Battery Saver" mode automatically disables many non-essential hardware features.',
    relatedProblemIds: ['p4301', 'p4303'],
    createdAt: '2025-07-07T13:00:00Z'
  },
  {
    id: 'p4303',
    title: 'Device feature disabled by user',
    slug: 'device-feature-disabled-by-user',
    shortDescription: 'You or another user accidentally turned off a feature through a hotkey or setting.',
    category: 'laptop',
    subcategory: 'Features',
    symptoms: ['Touchpad not working', 'WiFi won\'t turn on', 'No sound'],
    causes: ['Function (Fn) key toggle', 'Physical switch', 'Settings toggle'],
    steps: [
      { id: 's1', title: 'Check Fn Keys', description: 'Look for icons on your F1-F12 keys (like a crossed-out touchpad) and press them with the Fn key.' },
      { id: 's2', title: 'Check Physical Switches', description: 'Some older laptops have a sliding switch on the side for WiFi or Bluetooth.' },
      { id: 's3', title: 'Reset Settings', description: 'Go to Settings > System > Troubleshoot to find automated fixers for common features.' }
    ],
    technicianAdvice: 'The "Touchpad Disable" hotkey is the most common cause of "broken" hardware reports.',
    relatedProblemIds: ['p4301', 'p4302'],
    createdAt: '2025-07-07T14:00:00Z'
  },
  {
    id: 'p4304',
    title: 'Device feature causing system instability',
    slug: 'device-feature-causing-system-instability',
    shortDescription: 'Using a specific feature (like a dedicated GPU or Bluetooth) causes the computer to crash.',
    category: 'laptop',
    subcategory: 'Features',
    symptoms: ['BSOD when turning on Bluetooth', 'Freeze when launching camera', 'Visual glitches'],
    causes: ['Corrupted driver', 'Hardware conflict', 'Power surge'],
    steps: [
      { id: 's1', title: 'Roll Back Driver', description: 'If the issue started after an update, return to the previous driver version.' },
      { id: 's2', title: 'Disable the Feature', description: 'If you don\'t need it, disable the device in Device Manager to keep the system stable.' },
      { id: 's3', title: 'Run Hardware Diagnostics', description: 'Most laptops have a built-in test tool accessible by pressing a key (like F12 or Esc) during boot.' }
    ],
    technicianAdvice: 'Instability when using a high-power feature (like a GPU) often points to a failing power supply or battery.',
    relatedProblemIds: ['p4301', 'p4305'],
    createdAt: '2025-07-07T15:00:00Z'
  },
  {
    id: 'p4305',
    title: 'Device feature causing data loss',
    slug: 'device-feature-causing-data-loss',
    shortDescription: 'A feature like "Auto-Save" or "Cloud Sync" is malfunctioning and deleting or overwriting your files.',
    category: 'laptop',
    subcategory: 'Features',
    symptoms: ['Files reverted to old versions', 'Empty folders', 'Sync conflict errors'],
    causes: ['Clock mismatch', 'Server-side error', 'Conflicting sync apps'],
    steps: [
      { id: 's1', title: 'Check Version History', description: 'Use the cloud provider\'s website to restore previous versions of your files.' },
      { id: 's2', title: 'Disable Sync Temporarily', description: 'Stop the sync to prevent further data loss while you investigate.' },
      { id: 's3', title: 'Verify System Time', description: 'Ensure your PC clock is accurate; wrong time can cause sync tools to overwrite newer files.' }
    ],
    technicianAdvice: 'Never rely on a single "Auto-Sync" feature as your only backup; always have an offline copy.',
    relatedProblemIds: ['p4304', 'p4301'],
    createdAt: '2025-07-07T16:00:00Z'
  },
  {
    id: 'p4306',
    title: 'Device feature unable to activate',
    slug: 'device-feature-unable-to-activate',
    shortDescription: 'You cannot turn on a feature; the toggle switch immediately flips back to "Off".',
    category: 'laptop',
    subcategory: 'Features',
    symptoms: ['WiFi won\'t stay on', 'Bluetooth toggle greyed out', '"Service failed to start"'],
    causes: ['Dependency service stopped', 'Hardware not detected', 'Malware interference'],
    steps: [
      { id: 's1', title: 'Check Windows Services', description: 'Run "services.msc" and ensure the related service (e.g., Bluetooth Support Service) is running.' },
      { id: 's2', title: 'Reset Network Settings', description: 'For WiFi/Bluetooth issues, a full network reset often clears the block.' },
      { id: 's3', title: 'Check Airplane Mode', description: 'Ensure Airplane Mode is completely OFF, as it blocks multiple features at once.' }
    ],
    technicianAdvice: 'If a toggle won\'t stay on, the OS is likely failing to communicate with the hardware controller.',
    relatedProblemIds: ['p4307', 'p4301'],
    createdAt: '2025-07-07T17:00:00Z'
  },
  {
    id: 'p4307',
    title: 'Device feature unable to deactivate',
    slug: 'device-feature-unable-to-deactivate',
    shortDescription: 'A feature (like the microphone or location tracking) stays on even when you try to turn it off.',
    category: 'laptop',
    subcategory: 'Features',
    symptoms: ['Camera light stays on', 'Location icon always visible', 'Settings won\'t save'],
    causes: ['App override', 'Malware/Spyware', 'Driver bug'],
    steps: [
      { id: 's1', title: 'Identify Active App', description: 'Check Privacy settings to see which app is currently using the feature.' },
      { id: 's2', title: 'Force Stop the App', description: 'Kill the process in Task Manager to see if the feature turns off.' },
      { id: 's3', title: 'Scan for Malware', description: 'A camera or mic that won\'t turn off is a major red flag for a security breach.' }
    ],
    technicianAdvice: 'If the camera light is on but no app is using it, the hardware or driver may be in a "stuck" state.',
    relatedProblemIds: ['p4306', 'p4301'],
    createdAt: '2025-07-07T18:00:00Z'
  },
  {
    id: 'p4308',
    title: 'Device feature unable to configure',
    slug: 'device-feature-unable-to-configure',
    shortDescription: 'The settings for a feature are missing, broken, or don\'t change anything.',
    category: 'laptop',
    subcategory: 'Features',
    symptoms: ['"Settings unavailable"', 'Blank configuration screen', 'Changes don\'t save'],
    causes: ['Corrupted control software', 'Missing registry keys', 'Incompatible driver'],
    steps: [
      { id: 's1', title: 'Reinstall Control App', description: 'Uninstall and reinstall the specific app used to manage the feature (e.g., Synaptics for Touchpad).' },
      { id: 's2', title: 'Run SFC Scan', description: 'Repairs system files that might be preventing the settings from loading.' },
      { id: 's3', title: 'Check for Windows Updates', description: 'Sometimes a Windows update breaks the manufacturer\'s configuration tool.' }
    ],
    technicianAdvice: 'Many modern features are configured through "Windows Settings" AND a separate manufacturer app; check both.',
    relatedProblemIds: ['p4301', 'p4309'],
    createdAt: '2025-07-07T19:00:00Z'
  },
  {
    id: 'p4309',
    title: 'Device feature unable to update',
    slug: 'device-feature-unable-to-update',
    shortDescription: 'The firmware or driver for a specific feature fails to install the latest version.',
    category: 'laptop',
    subcategory: 'Features',
    symptoms: ['"Update failed"', 'Infinite update loop', 'Version number doesn\'t change'],
    causes: ['File in use', 'Incorrect hardware ID', 'Server timeout'],
    steps: [
      { id: 's1', title: 'Manual Install', description: 'Download the update file and run it as administrator instead of using an auto-updater.' },
      { id: 's2', title: 'Uninstall Old Version', description: 'Completely remove the old driver before trying to install the new one.' },
      { id: 's3', title: 'Check Disk Space', description: 'Ensure you have enough room to download and extract the update files.' }
    ],
    technicianAdvice: 'Firmware updates (like for a battery or SSD) are critical but risky; ensure you are plugged into power.',
    relatedProblemIds: ['p4308', 'p4301'],
    createdAt: '2025-07-07T20:00:00Z'
  },
  {
    id: 'p4310',
    title: 'Device feature unable to reset',
    slug: 'device-feature-unable-to-reset',
    shortDescription: 'You cannot return a feature\'s settings to their original factory state.',
    category: 'laptop',
    subcategory: 'Features',
    symptoms: ['Reset button missing', 'Error on reset', 'Settings persist after reset'],
    causes: ['Permission block', 'Corrupted default template', 'Registry lock'],
    steps: [
      { id: 's1', title: 'Delete Config Folder', description: 'Find the app\'s folder in %AppData% and delete it to force a reset.' },
      { id: 's2', title: 'Use System Restore', description: 'Roll back to a time when the feature was working correctly.' },
      { id: 's3', title: 'Clean Reinstall', description: 'The only way to truly "reset" some complex hardware features.' }
    ],
    technicianAdvice: 'If a reset fails, the "Default" configuration file may be missing from the program folder.',
    relatedProblemIds: ['p4301', 'p4308'],
    createdAt: '2025-07-07T21:00:00Z'
  },
  {
    id: 'p4311',
    title: 'Notifications not appearing',
    slug: 'notifications-not-appearing',
    shortDescription: 'You are missing important alerts from apps like Email, Slack, or System updates.',
    category: 'software',
    subcategory: 'Notifications',
    symptoms: ['No banners', 'No sound', 'Notification center is empty'],
    causes: ['Focus Assist / Do Not Disturb', 'Notifications disabled in settings', 'Background app refresh off'],
    steps: [
      { id: 's1', title: 'Disable Focus Assist', description: 'Check the Action Center (Win+N) and ensure "Do Not Disturb" or "Focus Assist" is OFF.' },
      { id: 's2', title: 'Check App Settings', description: 'Go to Settings > System > Notifications and ensure the specific app is allowed.' },
      { id: 's3', title: 'Allow Background Activity', description: 'Ensure the app is allowed to run in the background to send alerts.' }
    ],
    technicianAdvice: 'Many users accidentally turn on "Focus" mode, which silences all non-priority notifications.',
    relatedProblemIds: ['p4312', 'p4318'],
    createdAt: '2025-07-07T22:00:00Z'
  },
  {
    id: 'p4312',
    title: 'Notifications appearing late',
    slug: 'notifications-appearing-late',
    shortDescription: 'Alerts show up minutes or hours after the actual event occurred.',
    category: 'software',
    subcategory: 'Notifications',
    symptoms: ['Delayed email alerts', 'Chat messages arrive late', 'Stale weather alerts'],
    causes: ['Battery optimization', 'Slow internet', 'Sync interval settings'],
    steps: [
      { id: 's1', title: 'Disable Battery Optimization', description: 'Set the app to "Unrestricted" in battery settings so it can check for updates constantly.' },
      { id: 's2', title: 'Check Sync Frequency', description: 'In the app\'s own settings, set the sync interval to "As items arrive" or "Every 5 minutes".' },
      { id: 's3', title: 'Reset Network Connection', description: 'A laggy connection can delay the push notifications from reaching your device.' }
    ],
    technicianAdvice: 'Mobile devices often delay notifications when the screen is off to save power (Doze mode).',
    relatedProblemIds: ['p4311', 'p4320'],
    createdAt: '2025-07-07T23:00:00Z'
  },
  {
    id: 'p4313',
    title: 'Notifications appearing repeatedly',
    slug: 'notifications-appearing-repeatedly',
    shortDescription: 'The same alert keeps popping up even after you have dismissed or read it.',
    category: 'software',
    subcategory: 'Notifications',
    symptoms: ['Duplicate alerts', 'Dismissed notifications return', 'Constant pinging'],
    causes: ['Sync loop', 'Multiple devices', 'App bug'],
    steps: [
      { id: 's1', title: 'Clear App Cache', description: 'Wipe the app\'s temporary data to stop the notification loop.' },
      { id: 's2', title: 'Check Other Devices', description: 'Ensure you haven\'t left the notification unread on another synced device.' },
      { id: 's3', title: 'Reinstall the App', description: 'Fixes issues where the app\'s "read" status isn\'t being sent to the server.' }
    ],
    technicianAdvice: 'This often happens with email apps when the "IMAP" sync gets stuck in a loop.',
    relatedProblemIds: ['p4314', 'p4311'],
    createdAt: '2025-07-08T08:00:00Z'
  },
  {
    id: 'p4314',
    title: 'Notifications not clearing',
    slug: 'notifications-not-clearing',
    shortDescription: 'Alerts stay in your notification center even after you click them or try to swipe them away.',
    category: 'software',
    subcategory: 'Notifications',
    symptoms: ['"Ghost" notifications', 'Swipe doesn\'t work', 'Notification center hangs'],
    causes: ['System UI crash', 'Unresponsive app', 'Touch screen glitch'],
    steps: [
      { id: 's1', title: 'Restart Windows Explorer', description: 'Use Task Manager to restart "Windows Explorer" (explorer.exe) to refresh the UI.' },
      { id: 's2', title: 'Force Close the App', description: 'If the app is frozen, it won\'t tell the OS to remove the notification.' },
      { id: 's3', title: 'Clear All Notifications', description: 'Use the "Clear all" button at the bottom of the notification center.' }
    ],
    technicianAdvice: 'Persistent notifications are usually a sign that the "Shell Experience Host" process has crashed.',
    relatedProblemIds: ['p4313', 'p4315'],
    createdAt: '2025-07-08T09:00:00Z'
  },
  {
    id: 'p4315',
    title: 'Notifications not clickable',
    slug: 'notifications-not-clickable',
    shortDescription: 'Clicking a notification does nothing; it doesn\'t open the app or perform the action.',
    category: 'software',
    subcategory: 'Notifications',
    symptoms: ['No response to click', 'Notification vanishes without opening app', 'Error on click'],
    causes: ['App not running', 'Broken deep link', 'UI overlay conflict'],
    steps: [
      { id: 's1', title: 'Open App Manually', description: 'If the shortcut is broken, open the app from the Start menu to see the alert.' },
      { id: 's2', title: 'Check for Overlays', description: 'Disable apps like "f.lux" or screen recorders that might be intercepting clicks.' },
      { id: 's3', title: 'Update the App', description: 'Deep-linking bugs are common and usually fixed in app updates.' }
    ],
    technicianAdvice: 'If the app is in the middle of an update, its notifications will be temporarily unclickable.',
    relatedProblemIds: ['p4314', 'p4317'],
    createdAt: '2025-07-08T10:00:00Z'
  },
  {
    id: 'p4316',
    title: 'Notifications causing system lag',
    slug: 'notifications-causing-system-lag',
    shortDescription: 'Your computer stutters or freezes for a second every time a notification appears.',
    category: 'software',
    subcategory: 'Notifications',
    symptoms: ['Frame drops', 'Audio crackling', 'Mouse lag during alerts'],
    causes: ['High-resolution banners', 'Sound driver conflict', 'Low system resources'],
    steps: [
      { id: 's1', title: 'Disable Notification Sounds', description: 'The audio trigger can sometimes cause a momentary system hang.' },
      { id: 's2', title: 'Turn off Banners', description: 'Allow notifications in the center but disable the "pop-up" banners.' },
      { id: 's3', title: 'Update Graphics Driver', description: 'The animation for the notification banner uses the GPU; ensure it\'s running smoothly.' }
    ],
    technicianAdvice: 'Lag during notifications is common on older PCs with slow hard drives or limited RAM.',
    relatedProblemIds: ['p4317', 'p4311'],
    createdAt: '2025-07-08T11:00:00Z'
  },
  {
    id: 'p4317',
    title: 'Notifications causing app crash',
    slug: 'notifications-causing-app-crash',
    shortDescription: 'An app crashes as soon as it tries to send a notification or when you interact with one.',
    category: 'software',
    subcategory: 'Notifications',
    symptoms: ['App closes on alert', 'Crash when clicking notification', 'Lost data'],
    causes: ['Corrupted notification database', 'Memory error', 'Incompatible OS API'],
    steps: [
      { id: 's1', title: 'Reset App Notifications', description: 'Turn notifications OFF and then ON again in system settings.' },
      { id: 's2', title: 'Clear System Notification Cache', description: 'Advanced: Delete the "wpndatabase.db" file in your user profile.' },
      { id: 's3', title: 'Check for App Update', description: 'This is usually a coding error within the app itself.' }
    ],
    technicianAdvice: 'If an app crashes on every alert, the notification "payload" might be too large for the app to handle.',
    relatedProblemIds: ['p4316', 'p4315'],
    createdAt: '2025-07-08T12:00:00Z'
  },
  {
    id: 'p4318',
    title: 'Notifications unable to mute',
    slug: 'notifications-unable-to-mute',
    shortDescription: 'An app continues to make sounds or show banners even after you have muted it.',
    category: 'software',
    subcategory: 'Notifications',
    symptoms: ['Mute toggle ignored', 'Sounds play in "Silent" mode', 'Persistent banners'],
    causes: ['App-specific settings override', 'System bug', 'Priority notification status'],
    steps: [
      { id: 's1', title: 'Check Internal App Settings', description: 'Many apps (like WhatsApp or Telegram) have their own mute settings that override the OS.' },
      { id: 's2', title: 'Disable "Allow Priority"', description: 'Ensure the app isn\'t marked as "Priority" in Focus Assist settings.' },
      { id: 's3', title: 'Use Volume Mixer', description: 'Manually mute the specific app in the Windows Volume Mixer.' }
    ],
    technicianAdvice: 'Some "emergency" or "security" apps are designed to bypass system mutes; check the app\'s permissions.',
    relatedProblemIds: ['p4311', 'p4319'],
    createdAt: '2025-07-08T13:00:00Z'
  },
  {
    id: 'p4319',
    title: 'Notifications unable to prioritize',
    slug: 'notifications-unable-to-prioritize',
    shortDescription: 'You cannot set certain apps to show alerts even when "Do Not Disturb" is on.',
    category: 'software',
    subcategory: 'Notifications',
    symptoms: ['Important alerts missed', 'Priority list won\'t save', 'Settings greyed out'],
    causes: ['Focus Assist bug', 'User account restrictions', 'App doesn\'t support priority'],
    steps: [
      { id: 's1', title: 'Edit Priority List', description: 'Go to Focus Assist settings > Customize your priority list > Add the app.' },
      { id: 's2', title: 'Check for "Work" Profile', description: 'If your PC is managed by a company, they may control the priority settings.' },
      { id: 's3', title: 'Restart Notification Service', description: 'Restart the "Windows Push Notifications User Service" in services.msc.' }
    ],
    technicianAdvice: 'Priority settings often fail if the app isn\'t correctly registered with the Windows Notification Service.',
    relatedProblemIds: ['p4318', 'p4311'],
    createdAt: '2025-07-08T14:00:00Z'
  },
  {
    id: 'p4320',
    title: 'Notifications unable to sync',
    slug: 'notifications-unable-to-sync',
    shortDescription: 'Dismissing a notification on your phone doesn\'t remove it from your PC (or vice versa).',
    category: 'software',
    subcategory: 'Notifications',
    symptoms: ['Stale alerts on PC', 'Double dismissal required', 'Sync errors in "Phone Link"'],
    causes: ['Cloud sync disabled', 'Battery saver active', 'Account mismatch'],
    steps: [
      { id: 's1', title: 'Check "Phone Link" Settings', description: 'Ensure "Sync notifications" is enabled in the Windows Phone Link app.' },
      { id: 's2', title: 'Disable Battery Optimization', description: 'Both devices need to be able to talk to the cloud in the background.' },
      { id: 's3', title: 'Re-pair Devices', description: 'Unlink and relink your phone and PC to refresh the sync connection.' }
    ],
    technicianAdvice: 'Notification syncing requires a stable internet connection on BOTH devices simultaneously.',
    relatedProblemIds: ['p4312', 'p4311'],
    createdAt: '2025-07-08T15:00:00Z'
  },
  {
    id: 'p4321',
    title: 'System logging failing',
    slug: 'system-logging-failing',
    shortDescription: 'The "Event Viewer" or system logs are empty or return errors when you try to view them.',
    category: 'software',
    subcategory: 'Logging',
    symptoms: ['"Event Log service is unavailable"', 'Blank log screens', 'Error 0x80070005'],
    causes: ['Service stopped', 'Corrupted log files', 'Permission issues'],
    steps: [
      { id: 's1', title: 'Start Event Log Service', description: 'Run "services.msc" and ensure "Windows Event Log" is set to Automatic and Running.' },
      { id: 's2', title: 'Clear Corrupted Logs', description: 'Navigate to C:\\Windows\\System32\\winevt\\Logs and delete the .evtx files (requires admin).' },
      { id: 's3', title: 'Check Permissions', description: 'Ensure the "Local Service" account has full control over the Logs folder.' }
    ],
    technicianAdvice: 'If logging fails, you lose the ability to diagnose other system crashes.',
    relatedProblemIds: ['p4322', 'p4324'],
    createdAt: '2025-07-08T16:00:00Z'
  },
  {
    id: 'p4322',
    title: 'System logging causing disk full',
    slug: 'system-logging-causing-disk-full',
    shortDescription: 'Log files are growing uncontrollably, consuming all available disk space.',
    category: 'software',
    subcategory: 'Logging',
    symptoms: ['Low disk space warning', 'Gigabyte-sized .log or .evtx files', 'System slowdown'],
    causes: ['Infinite error loop', 'Debug logging enabled', 'Failed log rotation'],
    steps: [
      { id: 's1', title: 'Disable Debug Logging', description: 'Check app settings and registry for "EnableDebugLog" and set it to 0.' },
      { id: 's2', title: 'Set Max Log Size', description: 'In Event Viewer, right-click a log > Properties > Set "Maximum log size" and "Overwrite events as needed".' },
      { id: 's3', title: 'Clear Logs', description: 'Use "wevtutil cl [LogName]" in CMD to clear the bloated logs instantly.' }
    ],
    technicianAdvice: 'A "Disk Full" condition caused by logs can prevent the system from booting.',
    relatedProblemIds: ['p4321', 'p4325'],
    createdAt: '2025-07-08T17:00:00Z'
  },
  {
    id: 'p4323',
    title: 'System logging causing system lag',
    slug: 'system-logging-causing-system-lag',
    shortDescription: 'The act of writing logs is slowing down your computer, especially during heavy tasks.',
    category: 'software',
    subcategory: 'Logging',
    symptoms: ['Stuttering during disk activity', 'High "System" process CPU usage', 'Slow app response'],
    causes: ['Too many events per second', 'Slow hard drive (HDD)', 'Synchronous logging'],
    steps: [
      { id: 's1', title: 'Filter Logged Events', description: 'Disable "Information" level events and only log "Errors" and "Warnings".' },
      { id: 's2', title: 'Move Logs to SSD', description: 'If possible, redirect log storage to a faster drive to reduce I/O wait.' },
      { id: 's3', title: 'Disable Non-Essential Logs', description: 'Turn off "Audit" logging for successful file access or logins.' }
    ],
    technicianAdvice: 'High-frequency logging on a mechanical hard drive is a common cause of "micro-stuttering".',
    relatedProblemIds: ['p4321', 'p4322'],
    createdAt: '2025-07-08T18:00:00Z'
  },
  {
    id: 'p4324',
    title: 'System logging unable to record events',
    slug: 'system-logging-unable-to-record-events',
    shortDescription: 'The system is running, but no new entries are appearing in the logs.',
    category: 'software',
    subcategory: 'Logging',
    symptoms: ['Logs stuck at an old date', 'Missing crash reports', 'No "Audit Success" entries'],
    causes: ['Log file reached max size', 'Disk is write-protected', 'Logging service crashed'],
    steps: [
      { id: 's1', title: 'Enable Overwriting', description: 'Ensure logs are set to "Overwrite events as needed" when the max size is reached.' },
      { id: 's2', title: 'Check Disk Space', description: 'If the disk is 100% full, the logging service will stop silently.' },
      { id: 's3', title: 'Restart Windows Event Log', description: 'A simple service restart often fixes a "stuck" logging engine.' }
    ],
    technicianAdvice: 'If logs aren\'t recording, you may have a "silent" system failure that is hard to track.',
    relatedProblemIds: ['p4321', 'p4322'],
    createdAt: '2025-07-08T19:00:00Z'
  },
  {
    id: 'p4325',
    title: 'System logging unable to clear logs',
    slug: 'system-logging-unable-to-clear-logs',
    shortDescription: 'You receive an error when trying to empty the event logs or delete log files.',
    category: 'software',
    subcategory: 'Logging',
    symptoms: ['"Access Denied"', '"File in use by another process"', 'Logs remain after clearing'],
    causes: ['Insufficient privileges', 'Logging service holding file lock', 'Malware protection'],
    steps: [
      { id: 's1', title: 'Stop Service Before Clearing', description: 'Stop the "Windows Event Log" service, then delete the files manually.' },
      { id: 's2', title: 'Run as Administrator', description: 'Ensure you are using an elevated Command Prompt or Event Viewer.' },
      { id: 's3', title: 'Check for "Read-Only" Attribute', description: 'Ensure the log files haven\'t been marked as read-only by a security tool.' }
    ],
    technicianAdvice: 'Some security software prevents clearing logs to ensure an "audit trail" is maintained.',
    relatedProblemIds: ['p4322', 'p4321'],
    createdAt: '2025-07-08T20:00:00Z'
  },
  {
    id: 'p4326',
    title: 'System logging unable to export logs',
    slug: 'system-logging-unable-to-export-logs',
    shortDescription: 'You cannot save the logs to a file to send to a technician or support team.',
    category: 'software',
    subcategory: 'Logging',
    symptoms: ['"Save as" fails', 'Exported file is 0KB', 'App crashes on export'],
    causes: ['Corrupted event entry', 'Insufficient disk space', 'Invalid export path'],
    steps: [
      { id: 's1', title: 'Export a Smaller Range', description: 'Try exporting only the last 24 hours instead of the entire log.' },
      { id: 's2', title: 'Save to Desktop', description: 'Avoid saving directly to the root of C: or protected system folders.' },
      { id: 's3', title: 'Use Command Line', description: 'Use "wevtutil epl System C:\\logs\\system.evtx" to export via CMD.' }
    ],
    technicianAdvice: 'If one event is corrupted, the entire export process may fail. Try excluding that event.',
    relatedProblemIds: ['p4327', 'p4321'],
    createdAt: '2025-07-08T21:00:00Z'
  },
  {
    id: 'p4327',
    title: 'System logging unable to import logs',
    slug: 'system-logging-unable-to-import-logs',
    shortDescription: 'You cannot open an .evtx or .log file from another computer to view it.',
    category: 'software',
    subcategory: 'Logging',
    symptoms: ['"Format not supported"', 'Blank screen on import', 'Missing metadata'],
    causes: ['Version mismatch', 'Missing display DLLs', 'File corruption'],
    steps: [
      { id: 's1', title: 'Check OS Version', description: 'Logs from Windows 11 may not open correctly on Windows 7.' },
      { id: 's2', title: 'Include Display Information', description: 'When exporting from the source PC, ensure "Display information" is included.' },
      { id: 's3', title: 'Use Event Viewer "Open Saved Log"', description: 'Don\'t just double-click the file; use the "Open Saved Log" option inside Event Viewer.' }
    ],
    technicianAdvice: 'Imported logs often show "Event ID not found" if the related application isn\'t installed on the local PC.',
    relatedProblemIds: ['p4326', 'p4321'],
    createdAt: '2025-07-08T22:00:00Z'
  },
  {
    id: 'p4328',
    title: 'System logging unable to sync logs',
    slug: 'system-logging-unable-to-sync-logs',
    shortDescription: 'Centralized logging (like to a Windows Event Forwarding server) is not working.',
    category: 'software',
    subcategory: 'Logging',
    symptoms: ['Server is empty', '"Subscription failed"', 'Network timeout'],
    causes: ['Firewall blocking port 5985/5986', 'WinRM not configured', 'Certificate error'],
    steps: [
      { id: 's1', title: 'Enable WinRM', description: 'Run "winrm quickconfig" on both the source and collector PCs.' },
      { id: 's2', title: 'Check Firewall Rules', description: 'Ensure "Windows Remote Management" is allowed through the firewall.' },
      { id: 's3', title: 'Verify Subscription', description: 'In Event Viewer > Subscriptions, check the status for any error messages.' }
    ],
    technicianAdvice: 'Syncing logs is critical for enterprise security monitoring (SIEM).',
    relatedProblemIds: ['p4321', 'p4329'],
    createdAt: '2025-07-08T23:00:00Z'
  },
  {
    id: 'p4329',
    title: 'System logging unable to rotate logs',
    slug: 'system-logging-unable-to-rotate-logs',
    shortDescription: 'Old logs are not being archived or deleted, leading to a single massive file.',
    category: 'software',
    subcategory: 'Logging',
    symptoms: ['Single file > 1GB', 'No ".1", ".2" archive files', 'Disk space issues'],
    causes: ['Incorrect rotation policy', 'Permission denied on archive folder', 'Service bug'],
    steps: [
      { id: 's1', title: 'Configure Rotation Policy', description: 'In the app or OS settings, set a "Max number of archives" (e.g., 5 files).' },
      { id: 's2', title: 'Check Folder Permissions', description: 'Ensure the logging service can create new files in the log directory.' },
      { id: 's3', title: 'Restart Logging Service', description: 'Forces the service to re-evaluate the file size and trigger a rotation.' }
    ],
    technicianAdvice: 'Log rotation is essential to prevent a single point of failure and manage disk space.',
    relatedProblemIds: ['p4322', 'p4321'],
    createdAt: '2025-07-09T08:00:00Z'
  },
  {
    id: 'p4330',
    title: 'System logging unable to filter logs',
    slug: 'system-logging-unable-to-filter-logs',
    shortDescription: 'The "Filter Current Log" feature is slow, crashes, or returns no results.',
    category: 'software',
    subcategory: 'Logging',
    symptoms: ['"No events found" (incorrectly)', 'Event Viewer hangs on filter', 'Invalid XML error'],
    causes: ['Too many events to process', 'Corrupted index', 'Complex query error'],
    steps: [
      { id: 's1', title: 'Simplify the Filter', description: 'Filter by one Event ID or one Source at a time instead of multiple.' },
      { id: 's2', title: 'Clear the Log', description: 'If the log is too large, the filtering engine may time out.' },
      { id: 's3', title: 'Use PowerShell', description: 'Use "Get-WinEvent" in PowerShell for much faster and more reliable filtering.' }
    ],
    technicianAdvice: 'The Event Viewer UI is notoriously slow; PowerShell is the professional way to search logs.',
    relatedProblemIds: ['p4321', 'p4324'],
    createdAt: '2025-07-09T09:00:00Z'
  },
  {
    id: 'p4331',
    title: 'System unable to boot after update',
    slug: 'system-unable-to-boot-after-update',
    shortDescription: 'The computer gets stuck on a black screen or a loading loop immediately after installing updates.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"Undoing changes..." loop', 'Blue screen on boot', 'Stuck at manufacturer logo'],
    causes: ['Incompatible driver update', 'Corrupted system files', 'Bootloader conflict'],
    steps: [
      { id: 's1', title: 'Boot into Safe Mode', description: 'Interrupt the boot 3 times to trigger "Automatic Repair", then select Startup Settings > Safe Mode.' },
      { id: 's2', title: 'Uninstall Latest Update', description: 'In Advanced Options, select "Uninstall Updates" > "Uninstall latest quality/feature update".' },
      { id: 's3', title: 'Run Startup Repair', description: 'Use the "Startup Repair" tool in the recovery environment to fix boot files.' }
    ],
    technicianAdvice: 'This is often caused by a "Feature Update" that is incompatible with an old driver.',
    relatedProblemIds: ['p4332', 'p4336'],
    createdAt: '2025-07-09T10:00:00Z'
  },
  {
    id: 'p4332',
    title: 'System unable to shutdown after update',
    slug: 'system-unable-to-shutdown-after-update',
    shortDescription: 'The PC hangs on the "Shutting down" screen or restarts instead of turning off.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Infinite spinning circle', 'Fans stay on after screen goes black', 'PC reboots on shutdown'],
    causes: ['Update process stuck', 'Driver power state failure', 'Fast Startup conflict'],
    steps: [
      { id: 's1', title: 'Force Shutdown', description: 'Hold the physical power button for 10 seconds to force a hard power off.' },
      { id: 's2', title: 'Disable Fast Startup', description: 'Power Options > Choose what power buttons do > Uncheck "Turn on fast startup".' },
      { id: 's3', title: 'Check for Pending Updates', description: 'Ensure the update actually finished; sometimes it needs one more reboot.' }
    ],
    technicianAdvice: 'A "Restart" loop is often caused by the "Automatically restart on system failure" setting.',
    relatedProblemIds: ['p4331', 'p4333'],
    createdAt: '2025-07-09T11:00:00Z'
  },
  {
    id: 'p4333',
    title: 'System unable to sleep after update',
    slug: 'system-unable-to-sleep-after-update',
    shortDescription: 'The "Sleep" option is missing, or the PC wakes up immediately after sleeping.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['No sleep in Start menu', 'PC wakes up in 2 seconds', 'Screen stays on'],
    causes: ['Display driver reset', 'Wake timers enabled by update', 'Power plan reset'],
    steps: [
      { id: 's1', title: 'Update Graphics Driver', description: 'If Windows installed a generic driver, the "Sleep" feature will be disabled.' },
      { id: 's2', title: 'Run Power Troubleshooter', description: 'Settings > Troubleshoot > Additional troubleshooters > Power.' },
      { id: 's3', title: 'Check Wake Requests', description: 'Run "powercfg /requests" to see what is blocking sleep.' }
    ],
    technicianAdvice: 'Updates often reset power plans to "Balanced", which may have different sleep settings than your custom plan.',
    relatedProblemIds: ['p4332', 'p4334'],
    createdAt: '2025-07-09T12:00:00Z'
  },
  {
    id: 'p4334',
    title: 'System unable to hibernate after update',
    slug: 'system-unable-to-hibernate-after-update',
    shortDescription: 'Hibernation fails or the hiberfil.sys file is deleted/corrupted after an update.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"Hibernate" missing', 'PC crashes when hibernating', 'Slow boot'],
    causes: ['Hibernation disabled by OS', 'Insufficient disk space', 'Incompatible chipset driver'],
    steps: [
      { id: 's1', title: 'Re-enable Hibernation', description: 'Run "powercfg -h on" in an elevated Command Prompt.' },
      { id: 's2', title: 'Check Disk Space', description: 'Hibernation needs space equal to about 75% of your RAM.' },
      { id: 's3', title: 'Update Chipset Drivers', description: 'Ensures the OS can correctly signal the hardware to enter a deep sleep state.' }
    ],
    technicianAdvice: 'Major updates often disable hibernation to prevent "resuming" into a mismatched system state.',
    relatedProblemIds: ['p4333', 'p4335'],
    createdAt: '2025-07-09T13:00:00Z'
  },
  {
    id: 'p4335',
    title: 'System unable to wake-up after update',
    slug: 'system-unable-to-wake-up-after-update',
    shortDescription: 'The PC goes to sleep but won\'t wake up; you have to pull the power to get it back.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Black screen on wake', 'Keyboard lights on but no display', 'Fans spin but no boot'],
    causes: ['Graphics driver crash on wake', 'BIOS/UEFI bug', 'USB wake disabled'],
    steps: [
      { id: 's1', title: 'Restart Graphics Driver', description: 'Press Win+Ctrl+Shift+B when the screen is black to force a driver refresh.' },
      { id: 's2', title: 'Disable "Link State Power Management"', description: 'In advanced power settings, set PCI Express > Link State Power Management to OFF.' },
      { id: 's3', title: 'Update BIOS', description: 'Fixes low-level hardware communication issues during the wake-up phase.' }
    ],
    technicianAdvice: 'This is a classic symptom of an unstable graphics driver provided by Windows Update.',
    relatedProblemIds: ['p4333', 'p4331'],
    createdAt: '2025-07-09T14:00:00Z'
  },
  {
    id: 'p4336',
    title: 'System unable to detect hardware after update',
    slug: 'system-unable-to-detect-hardware-after-update',
    shortDescription: 'Your WiFi, Bluetooth, or Sound card has vanished from the system after an update.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"No audio output device"', 'WiFi icon missing', 'Unknown device in Device Manager'],
    causes: ['Driver replaced by generic version', 'Hardware disabled by OS', 'Firmware mismatch'],
    steps: [
      { id: 's1', title: 'Roll Back Driver', description: 'Device Manager > [Device] > Properties > Driver > Roll Back Driver.' },
      { id: 's2', title: 'Scan for Hardware Changes', description: 'Right-click the computer name in Device Manager and select "Scan for hardware changes".' },
      { id: 's3', title: 'Download OEM Drivers', description: 'Visit your laptop manufacturer\'s site and install the specific driver for your model.' }
    ],
    technicianAdvice: 'Windows Update often tries to install "newer" drivers that aren\'t actually compatible with your specific hardware.',
    relatedProblemIds: ['p4331', 'p4337'],
    createdAt: '2025-07-09T15:00:00Z'
  },
  {
    id: 'p4337',
    title: 'System unable to detect software after update',
    slug: 'system-unable-to-detect-software-after-update',
    shortDescription: 'Installed apps are missing from the Start menu or show as "Not installed" after an update.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Broken shortcuts', 'Apps missing from "Add or Remove Programs"', 'Registry errors'],
    causes: ['User profile migration failure', 'Registry corruption', 'App incompatible with new OS version'],
    steps: [
      { id: 's1', title: 'Check Windows.old folder', description: 'If you just did a major upgrade, your files might be in C:\\Windows.old.' },
      { id: 's2', title: 'Re-register Apps', description: 'Use PowerShell to re-register all Windows Store apps.' },
      { id: 's3', title: 'Reinstall the App', description: 'The most reliable way to fix broken registry links after an update.' }
    ],
    technicianAdvice: 'Major updates (like moving from Win 10 to 11) can sometimes fail to migrate all registry keys correctly.',
    relatedProblemIds: ['p4336', 'p4340'],
    createdAt: '2025-07-09T16:00:00Z'
  },
  {
    id: 'p4338',
    title: 'System unable to detect network after update',
    slug: 'system-unable-to-detect-network-after-update',
    shortDescription: 'You can see WiFi networks, but you cannot connect to them, or the list is empty.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"No networks found"', '"Can\'t connect to this network"', 'IP configuration failure'],
    causes: ['Network stack corruption', 'Incompatible security protocol', 'VPN conflict'],
    steps: [
      { id: 's1', title: 'Network Reset', description: 'Settings > Network & Internet > Advanced network settings > Network reset.' },
      { id: 's2', title: 'Uninstall VPN/Antivirus', description: 'Third-party network filters often break during major Windows updates.' },
      { id: 's3', title: 'Forget and Reconnect', description: 'Remove the saved WiFi profile and enter the password again.' }
    ],
    technicianAdvice: 'Updates can sometimes change the "FIPS" or security requirements for WiFi connections.',
    relatedProblemIds: ['p4336', 'p4331'],
    createdAt: '2025-07-09T17:00:00Z'
  },
  {
    id: 'p4339',
    title: 'System unable to detect user after update',
    slug: 'system-unable-to-detect-user-after-update',
    shortDescription: 'Your user account is missing from the login screen, or you are logged into a "Temporary Profile".',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"You have been logged in with a temporary profile"', 'Desktop is empty', 'Files missing from Documents'],
    causes: ['User profile service failure', 'Registry corruption', 'Account migration error'],
    steps: [
      { id: 's1', title: 'Restart 3 Times', description: 'Sometimes Windows just needs a few reboots to finish the profile migration.' },
      { id: 's2', title: 'Check C:\\Users Folder', description: 'Ensure your original user folder still exists and contains your data.' },
      { id: 's3', title: 'Fix Profile in Registry', description: 'Advanced: Use regedit to remove the ".bak" extension from your profile key.' }
    ],
    technicianAdvice: 'NEVER save files while in a temporary profile; they will be deleted when you log out.',
    relatedProblemIds: ['p4337', 'p4331'],
    createdAt: '2025-07-09T18:00:00Z'
  },
  {
    id: 'p4340',
    title: 'System unable to detect configuration after update',
    slug: 'system-unable-to-detect-configuration-after-update',
    shortDescription: 'All your personal settings (colors, taskbar, defaults) have been reset to factory defaults.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Default wallpaper returns', 'Default browser reset to Edge', 'Privacy settings changed'],
    causes: ['New OS defaults', 'Configuration file overwrite', 'Sync failure'],
    steps: [
      { id: 's1', title: 'Check Sync Settings', description: 'Ensure "Sync your settings" is still ON in your Microsoft/Apple account.' },
      { id: 's2', title: 'Restore from Backup', description: 'If you have a system image or registry backup, now is the time to use it.' },
      { id: 's3', title: 'Re-configure Manually', description: 'Some updates are so large that they simply cannot preserve all minor settings.' }
    ],
    technicianAdvice: 'Microsoft often resets "Default Apps" to their own products (Edge, Photos) after major updates.',
    relatedProblemIds: ['p4337', 'p4339'],
    createdAt: '2025-07-09T19:00:00Z'
  }
];
