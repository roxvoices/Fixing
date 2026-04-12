import { Problem } from './types';

export const EXTRA_PROBLEMS_5: Problem[] = [
  // --- System Recovery Problems (Restored) ---
  {
    id: 'p7001',
    title: 'System recovery not starting',
    slug: 'system-recovery-not-starting',
    shortDescription: 'The recovery environment fails to launch when selected from the boot menu.',
    category: 'laptop',
    subcategory: 'Boot',
    symptoms: ['Black screen', 'Reboot to OS', 'Error message'],
    causes: ['Corrupt recovery partition', 'Missing boot files', 'Hardware failure'],
    steps: [
      { id: 's1', title: 'Use External Media', description: 'Boot from a USB recovery drive created on another PC.' },
      { id: 's2', title: 'Check Disk Health', description: 'Run diagnostics to ensure the drive isn\'t failing.' },
      { id: 's3', title: 'Rebuild BCD', description: 'Use command prompt to fix the boot configuration data.' }
    ],
    technicianAdvice: 'If the recovery partition is gone, a clean install is the only option.',
    relatedProblemIds: ['p7002', 'p7003'],
    createdAt: '2025-08-21T08:00:00Z'
  },
  {
    id: 'p7002',
    title: 'System recovery stuck at loading screen',
    slug: 'system-recovery-stuck-at-loading-screen',
    shortDescription: 'The recovery process hangs indefinitely on the logo or progress bar.',
    category: 'laptop',
    subcategory: 'Boot',
    symptoms: ['Spinning circle', 'No progress', 'Frozen UI'],
    causes: ['Slow disk I/O', 'Driver conflict', 'Corrupt recovery image'],
    steps: [
      { id: 's1', title: 'Wait Longer', description: 'Recovery can sometimes take hours if the disk is slow.' },
      { id: 's2', title: 'Disconnect Peripherals', description: 'Remove all USB devices except keyboard and mouse.' },
      { id: 's3', title: 'Try Safe Mode Recovery', description: 'Attempt to launch recovery from within Safe Mode.' }
    ],
    technicianAdvice: 'A hang at 99% often means the final bootloader update is failing.',
    relatedProblemIds: ['p7001', 'p7004'],
    createdAt: '2025-08-21T09:00:00Z'
  },
  {
    id: 'p7003',
    title: 'System recovery unable to detect system files',
    slug: 'system-recovery-unable-to-detect-system-files',
    shortDescription: 'Recovery starts but reports that it cannot find the Windows or OS installation.',
    category: 'laptop',
    subcategory: 'Boot',
    symptoms: ['"No OS found"', 'Empty drive list', 'Partition error'],
    causes: ['Missing SATA/NVMe drivers', 'Encrypted drive (BitLocker)', 'Partition table corruption'],
    steps: [
      { id: 's1', title: 'Load Drivers', description: 'Use the "Load Driver" option to provide storage controller drivers.' },
      { id: 's2', title: 'Unlock BitLocker', description: 'Enter your recovery key to allow access to the system files.' },
      { id: 's3', title: 'Fix MBR/GPT', description: 'Use diskpart to repair the partition table.' }
    ],
    technicianAdvice: 'If the drive is "RAW", the file system is likely destroyed.',
    relatedProblemIds: ['p7001', 'p7005'],
    createdAt: '2025-08-21T10:00:00Z'
  },
  {
    id: 'p7004',
    title: 'System recovery unable to restore settings',
    slug: 'system-recovery-unable-to-restore-settings',
    shortDescription: 'The recovery completes but your personal settings and preferences are lost.',
    category: 'laptop',
    subcategory: 'Software',
    symptoms: ['Default wallpaper', 'Reset apps', 'Missing accounts'],
    causes: ['User profile corruption', 'Partial restore', 'Incorrect restore point'],
    steps: [
      { id: 's1', title: 'Check C:\\Windows.old', description: 'Look for your old files in the backup folder created during refresh.' },
      { id: 's2', title: 'Sync from Cloud', description: 'Log in to your Microsoft or Apple account to pull down settings.' },
      { id: 's3', title: 'Try Different Restore Point', description: 'Go back further in time to a point where settings were intact.' }
    ],
    technicianAdvice: 'A "Reset" often removes settings by design; a "Restore" should keep them.',
    relatedProblemIds: ['p7002', 'p7006'],
    createdAt: '2025-08-21T11:00:00Z'
  },
  {
    id: 'p7005',
    title: 'System recovery unable to restore drivers',
    slug: 'system-recovery-unable-to-restore-drivers',
    shortDescription: 'After recovery, many hardware components (WiFi, Sound) are not working.',
    category: 'laptop',
    subcategory: 'Hardware',
    symptoms: ['No WiFi', 'Generic VGA graphics', 'No sound'],
    causes: ['Driver store corruption', 'Incompatible restore point', 'Missing OEM drivers'],
    steps: [
      { id: 's1', title: 'Run Windows Update', description: 'Let the OS find and download the missing drivers automatically.' },
      { id: 's2', title: 'Download from OEM', description: 'Visit the manufacturer website (Dell, HP, etc.) for specific drivers.' },
      { id: 's3', title: 'Check Device Manager', description: 'Manually point "Unknown Devices" to the driver folder.' }
    ],
    technicianAdvice: 'Always keep a copy of your WiFi driver on a USB stick before doing a recovery.',
    relatedProblemIds: ['p7003', 'p7007'],
    createdAt: '2025-08-21T12:00:00Z'
  },
  {
    id: 'p7006',
    title: 'System recovery unable to restore applications',
    slug: 'system-recovery-unable-to-restore-applications',
    shortDescription: 'Installed programs are missing or fail to launch after a system recovery.',
    category: 'laptop',
    subcategory: 'Software',
    symptoms: ['Broken shortcuts', 'Missing .exe files', 'Registry errors'],
    causes: ['Registry desync', 'Partial file restore', 'App-specific protection'],
    steps: [
      { id: 's1', title: 'Reinstall Apps', description: 'Most apps need a fresh installation to register with the new OS state.' },
      { id: 's2', title: 'Check Program Files', description: 'See if the files exist but the shortcuts are just gone.' },
      { id: 's3', title: 'Run App Repair', description: 'Use "Add/Remove Programs" > Repair for supported software.' }
    ],
    technicianAdvice: 'System Restore is not a backup; it doesn\'t always save full application states.',
    relatedProblemIds: ['p7004', 'p7008'],
    createdAt: '2025-08-21T13:00:00Z'
  },
  {
    id: 'p7007',
    title: 'System recovery failing repeatedly',
    slug: 'system-recovery-failing-repeatedly',
    shortDescription: 'The recovery process starts but crashes or errors out every time it reaches a certain %.',
    category: 'laptop',
    subcategory: 'Boot',
    symptoms: ['"Recovery failed"', 'Blue screen during restore', 'Infinite loop'],
    causes: ['Bad RAM', 'Failing hard drive', 'Corrupt source media'],
    steps: [
      { id: 's1', title: 'Test RAM', description: 'Run MemTest86 to check for memory errors.' },
      { id: 's2', title: 'Check Drive SMART', description: 'Ensure the drive doesn\'t have too many bad sectors.' },
      { id: 's3', title: 'Use New Media', description: 'Create a fresh recovery USB on a different computer.' }
    ],
    technicianAdvice: 'Repeated failures at the same % usually point to a physical bad spot on the disk.',
    relatedProblemIds: ['p7005', 'p7009'],
    createdAt: '2025-08-21T14:00:00Z'
  },
  {
    id: 'p7008',
    title: 'System recovery unable to verify integrity',
    slug: 'system-recovery-unable-to-verify-integrity',
    shortDescription: 'The recovery tool reports that the backup or image is "untrusted" or "corrupt".',
    category: 'laptop',
    subcategory: 'Software',
    symptoms: ['"Hash mismatch"', '"Signature invalid"', 'Verification error'],
    causes: ['Bit rot', 'Interrupted download', 'Malware tampering'],
    steps: [
      { id: 's1', title: 'Re-download Image', description: 'Get a fresh copy of the recovery ISO from the official source.' },
      { id: 's2', title: 'Check USB Drive', description: 'Ensure the USB drive isn\'t failing or fake (low capacity).' },
      { id: 's3', title: 'Disable Secure Boot', description: 'Sometimes Secure Boot blocks valid but older recovery images.' }
    ],
    technicianAdvice: 'Integrity errors are a safety feature to prevent installing a compromised OS.',
    relatedProblemIds: ['p7006', 'p7010'],
    createdAt: '2025-08-21T15:00:00Z'
  },
  {
    id: 'p7009',
    title: 'System recovery unable to locate restore points',
    slug: 'system-recovery-unable-to-locate-restore-points',
    shortDescription: 'The "System Restore" list is empty, even though you know you created points.',
    category: 'laptop',
    subcategory: 'Software',
    symptoms: ['"No restore points found"', 'Empty list', 'Restore disabled'],
    causes: ['Disk space limit reached', 'Windows Update cleared them', 'System Protection turned off'],
    steps: [
      { id: 's1', title: 'Enable System Protection', description: 'Go to System Properties > System Protection and ensure it is ON.' },
      { id: 's2', title: 'Increase Disk Usage', description: 'Allow more space for restore points in the configuration menu.' },
      { id: 's3', title: 'Check Event Viewer', description: 'Look for "volsnap" errors that might explain why points were deleted.' }
    ],
    technicianAdvice: 'Major Windows updates often delete old restore points to prevent compatibility issues.',
    relatedProblemIds: ['p7007', 'p7011'],
    createdAt: '2025-08-21T16:00:00Z'
  },
  {
    id: 'p7010',
    title: 'System recovery restore point corrupted',
    slug: 'system-recovery-restore-point-corrupted',
    shortDescription: 'A restore point is found, but the process fails with a "corrupt" error during extraction.',
    category: 'laptop',
    subcategory: 'Software',
    symptoms: ['Error 0x80070005', 'Restore failed message', 'System files unchanged'],
    causes: ['Antivirus interference', 'Disk errors', 'Incomplete snapshot'],
    steps: [
      { id: 's1', title: 'Disable Antivirus', description: 'Temporarily turn off real-time protection before starting restore.' },
      { id: 's2', title: 'Run Restore in Safe Mode', description: 'Safe Mode prevents third-party drivers from locking files.' },
      { id: 's3', title: 'Run SFC', description: 'Repair system files before attempting another restore.' }
    ],
    technicianAdvice: 'If one point is corrupt, try the next oldest one in the list.',
    relatedProblemIds: ['p7008', 'p7012'],
    createdAt: '2025-08-21T17:00:00Z'
  },
  // --- Adding hundreds more to reach the goal ---
  // I will continue to add more problems in subsequent turns to reach the 10,000+ goal.
];
