import { Problem } from './types';

export const EXTRA_PROBLEMS_8: Problem[] = [
  // --- Email Services Problems (Expanded) ---
  {
    id: 'p13001',
    title: 'Gmail "Temporary Error (500)"',
    slug: 'gmail-temporary-error-500',
    shortDescription: 'You cannot access your inbox and see a numeric error code 500.',
    category: 'email',
    subcategory: 'Receiving',
    symptoms: ['Inbox won\'t load', 'Error 500', 'Cannot send mail'],
    causes: ['Google server maintenance', 'Browser cache conflict', 'Extension interference'],
    steps: [
      { id: 's1', title: 'Wait 15 Minutes', description: 'Temporary errors usually resolve themselves quickly as Google fixes the server node.' },
      { id: 's2', title: 'Clear Browser Cache', description: 'Remove old session data that might be causing a loop.' },
      { id: 's3', title: 'Try Incognito', description: 'If it works in incognito, one of your extensions is breaking Gmail.' }
    ],
    technicianAdvice: 'Numeric errors in Gmail are almost always server-side issues.',
    relatedProblemIds: ['p13002', 'p13003'],
    createdAt: '2025-08-27T08:00:00Z'
  },
  {
    id: 'p13002',
    title: 'Outlook "Disconnected" status in status bar',
    slug: 'outlook-disconnected-status',
    shortDescription: 'Outlook is open but shows "Disconnected" or "Trying to connect" at the bottom.',
    category: 'email',
    subcategory: 'Sync',
    symptoms: ['No new mail', 'Status bar warning', 'Send/Receive fails'],
    causes: ['Password expired', 'Work Offline mode enabled', 'Profile corruption'],
    steps: [
      { id: 's1', title: 'Check "Work Offline"', description: 'Go to Send/Receive tab and ensure "Work Offline" is NOT highlighted.' },
      { id: 's2', title: 'Update Password', description: 'Go to File > Account Settings > Update your password if it changed recently.' },
      { id: 's3', title: 'Repair Profile', description: 'File > Account Settings > Select account > Repair.' }
    ],
    technicianAdvice: 'If Outlook is stuck "Trying to connect", your office firewall might be blocking the MAPI protocol.',
    relatedProblemIds: ['p13001', 'p13004'],
    createdAt: '2025-08-27T09:00:00Z'
  },
  // --- Cloud Services Problems (Expanded) ---
  {
    id: 'p14001',
    title: 'iCloud "Storage Full" but deleted files',
    slug: 'icloud-storage-full-but-deleted-files',
    shortDescription: 'You deleted photos and videos, but iCloud still says you have no space left.',
    category: 'cloud',
    subcategory: 'Storage',
    symptoms: ['"Storage Full" alert', 'Backup failing', 'Photos not syncing'],
    causes: ['"Recently Deleted" folder', 'Old device backups', 'Hidden system data'],
    steps: [
      { id: 's1', title: 'Empty Recently Deleted', description: 'Photos stay in the "Recently Deleted" album for 30 days and still count toward storage.' },
      { id: 's2', title: 'Delete Old Backups', description: 'Settings > [Name] > iCloud > Manage Storage > Backups > Delete old device backups.' },
      { id: 's3', title: 'Check Large Files', description: 'Use "Manage Storage" to see if apps like WhatsApp are using gigabytes of space.' }
    ],
    technicianAdvice: 'iCloud storage is shared across all your Apple devices and family members if sharing is on.',
    relatedProblemIds: ['p14002', 'p14003'],
    createdAt: '2025-08-28T08:00:00Z'
  },
  {
    id: 'p14002',
    title: 'Google Drive "Waiting to upload" stuck',
    slug: 'google-drive-waiting-to-upload-stuck',
    shortDescription: 'Files in the mobile app are stuck with a "Waiting to upload" status indefinitely.',
    category: 'cloud',
    subcategory: 'Sync',
    symptoms: ['Upload progress stuck', 'No sync', 'Battery drain'],
    causes: ['"Transfer files only over WiFi" enabled', 'Low storage on phone', 'App cache bug'],
    steps: [
      { id: 's1', title: 'Check WiFi Settings', description: 'In Drive settings, ensure "Transfer files only over WiFi" is OFF if you are on data.' },
      { id: 's2', title: 'Clear App Cache', description: 'Go to Phone Settings > Apps > Drive > Storage > Clear Cache.' },
      { id: 's3', title: 'Force Stop App', description: 'Restart the app to trigger a fresh sync attempt.' }
    ],
    technicianAdvice: 'Large uploads can fail if the phone enters "Low Power Mode" during the transfer.',
    relatedProblemIds: ['p14001', 'p14004'],
    createdAt: '2025-08-28T09:00:00Z'
  },
  // --- Adding hundreds more to reach the goal ---
  // I will continue to add more problems in subsequent turns to reach the 10,000+ goal.
];
