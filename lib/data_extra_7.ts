import { Problem } from './types';

export const EXTRA_PROBLEMS_7: Problem[] = [
  // --- Security Problems (Expanded) ---
  {
    id: 'p10001',
    title: 'Ransomware infection warning',
    slug: 'ransomware-infection-warning',
    shortDescription: 'Your files are encrypted and a message demands payment to unlock them.',
    category: 'security',
    subcategory: 'Malware',
    symptoms: ['Files have .locked extension', 'Ransom note on desktop', 'Apps won\'t open'],
    causes: ['Malicious email attachment', 'Unsafe download', 'Exploit kit'],
    steps: [
      { id: 's1', title: 'Disconnect from Network', description: 'Immediately turn off WiFi and unplug Ethernet to stop the spread.' },
      { id: 's2', title: 'Do Not Pay', description: 'Paying does not guarantee you will get your files back and funds criminals.' },
      { id: 's3', title: 'Restore from Offline Backup', description: 'Wipe the drive and restore your data from a backup that was not connected during the attack.' }
    ],
    technicianAdvice: 'Ransomware is extremely difficult to decrypt without the key. Prevention is the only real cure.',
    relatedProblemIds: ['p10002', 'p10003'],
    createdAt: '2025-08-24T08:00:00Z'
  },
  {
    id: 'p10002',
    title: 'Phishing email targeting bank credentials',
    slug: 'phishing-email-targeting-bank-credentials',
    shortDescription: 'You received an email that looks like it is from your bank asking you to log in.',
    category: 'security',
    subcategory: 'Account',
    symptoms: ['Urgent language', 'Suspicious sender address', 'Link points to non-bank URL'],
    causes: ['Data breach leak', 'Random spam'],
    steps: [
      { id: 's1', title: 'Check the URL', description: 'Hover over links to see the actual destination before clicking.' },
      { id: 's2', title: 'Contact Bank Directly', description: 'Use the official app or website, never the link in the email.' },
      { id: 's3', title: 'Report as Phishing', description: 'Mark the email as spam/phishing in your email client.' }
    ],
    technicianAdvice: 'Banks will never ask for your password or PIN via email.',
    relatedProblemIds: ['p10001', 'p10004'],
    createdAt: '2025-08-24T09:00:00Z'
  },
  // --- Social Media Problems (Expanded) ---
  {
    id: 'p11001',
    title: 'Facebook account hacked and email changed',
    slug: 'facebook-account-hacked-and-email-changed',
    shortDescription: 'You can no longer log in and you received a notification that your primary email was updated.',
    category: 'social',
    subcategory: 'Account',
    symptoms: ['Password rejected', 'Friends seeing weird posts', 'Email changed alert'],
    causes: ['Weak password', 'Phishing', 'Session hijacking'],
    steps: [
      { id: 's1', title: 'Use "Secure My Account"', description: 'Click the link in the "Email Changed" notification from Facebook.' },
      { id: 's2', title: 'Identify Your Account', description: 'Search for your profile by name or phone number on the recovery page.' },
      { id: 's3', title: 'Upload ID', description: 'Facebook may require a photo of your ID to verify ownership.' }
    ],
    technicianAdvice: 'Once recovered, enable 2FA immediately to prevent future hacks.',
    relatedProblemIds: ['p11002', 'p11003'],
    createdAt: '2025-08-25T08:00:00Z'
  },
  {
    id: 'p11002',
    title: 'Instagram "Action Blocked" error',
    slug: 'instagram-action-blocked-error',
    shortDescription: 'You are temporarily unable to like, comment, or follow people.',
    category: 'social',
    subcategory: 'Posting',
    symptoms: ['"Action Blocked" popup', 'Cannot like posts', 'Cannot follow'],
    causes: ['Spammy behavior', 'Using automation bots', 'Rapid actions'],
    steps: [
      { id: 's1', title: 'Stop All Actions', description: 'Give your account a 24-48 hour break from all activity.' },
      { id: 's2', title: 'Unlink Third-Party Apps', description: 'Remove any "Follower Tracker" or bot apps from your account.' },
      { id: 's3', title: 'Switch to Mobile Data', description: 'Sometimes your IP address is flagged; switching to data can help.' }
    ],
    technicianAdvice: 'Instagram\'s AI flags accounts that act like bots. Slow down your interactions.',
    relatedProblemIds: ['p11001', 'p11004'],
    createdAt: '2025-08-25T09:00:00Z'
  },
  // --- Websites Problems (Expanded) ---
  {
    id: 'p12001',
    title: 'Website showing "500 Internal Server Error"',
    slug: 'website-showing-500-internal-server-error',
    shortDescription: 'The website fails to load and displays a generic server error message.',
    category: 'website',
    subcategory: 'Functionality',
    symptoms: ['Blank page with "500"', 'Server error message', 'Site down'],
    causes: ['Coding error', 'Server overload', 'Database connection failure'],
    steps: [
      { id: 's1', title: 'Refresh the Page', description: 'Sometimes it is a temporary glitch that a refresh fixes.' },
      { id: 's2', title: 'Check "Down for Everyone"', description: 'Use a site like downforeveryoneorjustme.com to see if it is global.' },
      { id: 's3', title: 'Clear Cookies/Cache', description: 'Stale session data can sometimes trigger server-side errors.' }
    ],
    technicianAdvice: 'A 500 error is almost always a problem with the website\'s server, not your computer.',
    relatedProblemIds: ['p12002', 'p12003'],
    createdAt: '2025-08-26T08:00:00Z'
  },
  {
    id: 'p12002',
    title: 'Website images not loading (Broken icons)',
    slug: 'website-images-not-loading',
    shortDescription: 'The text on the site loads fine, but all images show as broken links or placeholders.',
    category: 'website',
    subcategory: 'Display',
    symptoms: ['Broken image icons', 'Missing banners', 'Alt text only'],
    causes: ['Slow connection', 'Ad-blocker over-filtering', 'CDN outage'],
    steps: [
      { id: 's1', title: 'Disable Ad-Blocker', description: 'Some extensions mistakenly block legitimate images as ads.' },
      { id: 's2', title: 'Check Console for 404s', description: 'Press F12 and look for red errors in the Console tab.' },
      { id: 's3', title: 'Try Incognito Mode', description: 'Rules out browser extensions or corrupt cache.' }
    ],
    technicianAdvice: 'If images fail on one site only, their image hosting server is likely down.',
    relatedProblemIds: ['p12001', 'p12004'],
    createdAt: '2025-08-26T09:00:00Z'
  },
  // --- Adding hundreds more to reach the goal ---
  // I will continue to add more problems in subsequent turns to reach the 10,000+ goal.
];
