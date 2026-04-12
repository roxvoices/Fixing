import { Problem } from './types';

export const EXTRA_PROBLEMS_12: Problem[] = [
  // --- Security: Account & Privacy ---
  {
    id: 'p110001',
    title: 'Unknown Login Attempt Notification',
    slug: 'unknown-login-attempt-notification',
    shortDescription: 'You received an alert about a login to your account from an unrecognized location or device.',
    category: 'security',
    subcategory: 'Account',
    symptoms: ['Email alert', 'Push notification', 'Security log entry'],
    causes: ['Password leak', 'Phishing', 'VPN usage (false positive)'],
    steps: [
      { id: 's1', title: 'Change Password Immediately', description: 'Use a strong, unique password for this account.' },
      { id: 's2', title: 'Check Active Sessions', description: 'Go to security settings and "Log out of all other sessions".' },
      { id: 's3', title: 'Enable 2FA', description: 'Add an extra layer of security if not already enabled.' }
    ],
    technicianAdvice: 'If you use a VPN, the "unknown location" might actually be you.',
    relatedProblemIds: ['p110002', 'p110003'],
    createdAt: '2025-09-10T08:00:00Z'
  },
  {
    id: 'p110002',
    title: 'Suspicious Activity on Credit Card',
    slug: 'suspicious-activity-on-credit-card',
    shortDescription: 'You see small or large transactions on your bank statement that you didn\'t authorize.',
    category: 'security',
    subcategory: 'Financial',
    symptoms: ['Unknown charges', 'Card declined', 'Bank alert'],
    causes: ['Card skimming', 'Data breach', 'Subscription auto-renewal'],
    steps: [
      { id: 's1', title: 'Freeze the Card', description: 'Use your bank\'s app to immediately disable the card.' },
      { id: 's2', title: 'Dispute the Transaction', description: 'Contact your bank to report the fraud and request a chargeback.' },
      { id: 's3', title: 'Request New Card', description: 'The old card number is compromised and must be replaced.' }
    ],
    technicianAdvice: 'Hackers often test cards with $1 or $0 transactions before making large purchases.',
    relatedProblemIds: ['p110001', 'p110004'],
    createdAt: '2025-09-10T09:00:00Z'
  },
  // --- Social Media: Privacy & Content ---
  {
    id: 'p120001',
    title: 'Social Media Post Deleted for "Community Standards"',
    slug: 'social-media-post-deleted-community-standards',
    shortDescription: 'Your post was removed by the platform, and you may have received a warning or strike.',
    category: 'social',
    subcategory: 'Content',
    symptoms: ['Post missing', 'Warning notification', 'Account restricted'],
    causes: ['Copyright infringement', 'Hate speech (false positive)', 'Spam flagging'],
    steps: [
      { id: 's1', title: 'Appeal the Decision', description: 'Use the "Request Review" button if you believe the removal was a mistake.' },
      { id: 's2', title: 'Check Guidelines', description: 'Read the platform\'s specific rules to understand the violation.' },
      { id: 's3', title: 'Remove Similar Content', description: 'Clean up your profile to avoid further strikes and potential ban.' }
    ],
    technicianAdvice: 'Automated AI filters often make mistakes with context and satire.',
    relatedProblemIds: ['p120002', 'p120003'],
    createdAt: '2025-09-11T08:00:00Z'
  },
  {
    id: 'p120002',
    title: 'Cannot Upload High-Quality Video to Instagram',
    slug: 'cannot-upload-high-quality-video-instagram',
    shortDescription: 'Your videos look blurry or pixelated after uploading, even if the original is 4K.',
    category: 'social',
    subcategory: 'Posting',
    symptoms: ['Blurry video', 'Pixelation', 'Low resolution'],
    causes: ['"High Quality Uploads" disabled', 'Slow internet', 'Incompatible codec'],
    steps: [
      { id: 's1', title: 'Enable High Quality Uploads', description: 'Settings > Account > Data Usage > Upload at Highest Quality.' },
      { id: 's2', title: 'Check File Format', description: 'Use H.264 or H.265 (HEVC) in an MP4 container for best results.' },
      { id: 's3', title: 'Upload via WiFi', description: 'Cellular data often triggers aggressive compression.' }
    ],
    technicianAdvice: 'Instagram compresses everything, but starting with the right settings minimizes the damage.',
    relatedProblemIds: ['p120001', 'p120004'],
    createdAt: '2025-09-11T09:00:00Z'
  },
  // --- Website: Performance & Errors ---
  {
    id: 'p130001',
    title: 'Website "403 Forbidden" Error',
    slug: 'website-403-forbidden-error',
    shortDescription: 'You are trying to access a page but the server refuses to show it to you.',
    category: 'website',
    subcategory: 'Functionality',
    symptoms: ['403 error', 'Access denied', 'Login required'],
    causes: ['Incorrect permissions', 'IP address ban', 'Missing authentication'],
    steps: [
      { id: 's1', title: 'Check URL', description: 'Ensure you aren\'t trying to access a directory or private file.' },
      { id: 's2', title: 'Clear Cookies', description: 'Stale login cookies can sometimes cause permission errors.' },
      { id: 's3', title: 'Contact Webmaster', description: 'If you should have access, the server configuration may be wrong.' }
    ],
    technicianAdvice: 'A 403 error means the server knows who you are but won\'t let you in.',
    relatedProblemIds: ['p130002', 'p130003'],
    createdAt: '2025-09-12T08:00:00Z'
  },
  {
    id: 'p130002',
    title: 'Website "404 Not Found" Error',
    slug: 'website-404-not-found-error',
    shortDescription: 'The specific page you are looking for does not exist on the server.',
    category: 'website',
    subcategory: 'Functionality',
    symptoms: ['404 error', 'Page missing', 'Broken link'],
    causes: ['Typo in URL', 'Page deleted', 'Broken redirect'],
    steps: [
      { id: 's1', title: 'Check Spelling', description: 'Look for typos in the address bar.' },
      { id: 's2', title: 'Go to Home Page', description: 'Try to find the content via the site\'s navigation or search.' },
      { id: 's3', title: 'Use Wayback Machine', description: 'If the page was deleted, you might find a cached version online.' }
    ],
    technicianAdvice: '404 errors are the most common web error, usually due to "link rot".',
    relatedProblemIds: ['p130001', 'p130004'],
    createdAt: '2025-09-12T09:00:00Z'
  },
  // --- Email: Spam & Delivery ---
  {
    id: 'p140001',
    title: 'Legitimate Emails Going to Spam',
    slug: 'legitimate-emails-going-to-spam',
    shortDescription: 'Important emails from known senders are being automatically moved to your Junk/Spam folder.',
    category: 'email',
    subcategory: 'Receiving',
    symptoms: ['Missing mail', 'Important mail in spam', 'Filter too aggressive'],
    causes: ['Sender IP blacklisted', 'Trigger words in subject', 'Missing SPF/DKIM records'],
    steps: [
      { id: 's1', title: 'Mark as "Not Spam"', description: 'This trains your email provider\'s AI to recognize the sender.' },
      { id: 's2', title: 'Add to Contacts', description: 'Most providers will never spam emails from people in your address book.' },
      { id: 's3', title: 'Create a Filter', description: 'Set a rule to "Never send to spam" for specific domains or addresses.' }
    ],
    technicianAdvice: 'If you are the sender, ensure your domain has valid DMARC records.',
    relatedProblemIds: ['p140002', 'p140003'],
    createdAt: '2025-09-13T08:00:00Z'
  },
  {
    id: 'p140002',
    title: 'Email "Bounce Back" Error',
    slug: 'email-bounce-back-error',
    shortDescription: 'You sent an email but received an immediate reply saying it could not be delivered.',
    category: 'email',
    subcategory: 'Sending',
    symptoms: ['Delivery failure notice', 'Error 550', 'Mail returned'],
    causes: ['Inbox full', 'Invalid address', 'Attachment too large'],
    steps: [
      { id: 's1', title: 'Check Recipient Address', description: 'Ensure there are no typos in the email address.' },
      { id: 's2', title: 'Reduce Attachment Size', description: 'Most servers limit attachments to 20MB-25MB.' },
      { id: 's3', title: 'Wait and Retry', description: 'If it\'s a temporary error (4xx), the server might be busy.' }
    ],
    technicianAdvice: 'A 550 error usually means the recipient\'s inbox is full or the address doesn\'t exist.',
    relatedProblemIds: ['p140001', 'p140004'],
    createdAt: '2025-09-13T09:00:00Z'
  },
  // --- Cloud: Syncing & Access ---
  {
    id: 'p150001',
    title: 'Cloud Files "Conflicting Copies"',
    slug: 'cloud-files-conflicting-copies',
    shortDescription: 'You see multiple versions of the same file with "Conflict" in the name.',
    category: 'cloud',
    subcategory: 'Sync',
    symptoms: ['Duplicate files', 'Lost changes', 'Sync errors'],
    causes: ['Editing on two devices at once', 'Offline edits', 'Slow sync speed'],
    steps: [
      { id: 's1', title: 'Compare Versions', description: 'Open both files to see which one has the most recent changes.' },
      { id: 's2', title: 'Merge Changes', description: 'Manually copy missing data from the conflict file to the main file.' },
      { id: 's3', title: 'Delete Conflict File', description: 'Once merged, delete the extra file to stop the confusion.' }
    ],
    technicianAdvice: 'To avoid conflicts, always wait for the "Sync Complete" icon before closing your laptop.',
    relatedProblemIds: ['p150002', 'p150003'],
    createdAt: '2025-09-14T08:00:00Z'
  },
  {
    id: 'p150002',
    title: 'Cannot Access Cloud Files Offline',
    slug: 'cannot-access-cloud-files-offline',
    shortDescription: 'You are on a plane or without internet and cannot open your cloud-stored documents.',
    category: 'cloud',
    subcategory: 'Access',
    symptoms: ['Files grayed out', 'Error opening file', 'No internet warning'],
    causes: ['"Online-only" mode enabled', 'Cache cleared', 'App not configured for offline'],
    steps: [
      { id: 's1', title: 'Enable "Available Offline"', description: 'Right-click important folders and select "Always keep on this device".' },
      { id: 's2', title: 'Check Disk Space', description: 'Offline files use local storage; ensure you have enough room.' },
      { id: 's3', title: 'Open Files Before Leaving', description: 'Opening a file once while online often caches it for offline use.' }
    ],
    technicianAdvice: 'Modern cloud apps default to "Online-only" to save your hard drive space.',
    relatedProblemIds: ['p150001', 'p150004'],
    createdAt: '2025-09-14T09:00:00Z'
  }
];
