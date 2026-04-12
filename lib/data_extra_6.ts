import { Problem } from './types';

export const EXTRA_PROBLEMS_6: Problem[] = [
  // --- Authentication Problems (Restored) ---
  {
    id: 'p8001',
    title: 'Password not recognized after update',
    slug: 'password-not-recognized-after-update',
    shortDescription: 'The system rejects your correct password immediately after an OS update.',
    category: 'software',
    subcategory: 'Security',
    symptoms: ['"Incorrect password"', 'Login loop', 'Keyboard layout changed'],
    causes: ['Keyboard layout mismatch', 'Registry corruption', 'Account sync issue'],
    steps: [
      { id: 's1', title: 'Check Keyboard Layout', description: 'Ensure the layout (US/UK) matches what you used to set the password.' },
      { id: 's2', title: 'Use On-Screen Keyboard', description: 'Rule out a faulty physical key by typing with the mouse.' },
      { id: 's3', title: 'Reset via Cloud Account', description: 'Use your Microsoft or Apple ID to reset the local password.' }
    ],
    technicianAdvice: 'Sometimes updates reset the keyboard to a default layout, changing special characters.',
    relatedProblemIds: ['p8002', 'p8003'],
    createdAt: '2025-08-22T08:00:00Z'
  },
  {
    id: 'p8002',
    title: 'Two-factor authentication (2FA) code not arriving',
    slug: '2fa-code-not-arriving',
    shortDescription: 'You are prompted for a security code via SMS or email, but it never arrives.',
    category: 'software',
    subcategory: 'Security',
    symptoms: ['No SMS', 'No email', 'Timeout error'],
    causes: ['Network delay', 'Spam filter', 'Incorrect phone number'],
    steps: [
      { id: 's1', title: 'Check Spam Folder', description: 'Email codes are often flagged as junk by aggressive filters.' },
      { id: 's2', title: 'Wait 5 Minutes', description: 'SMS gateways can be congested; don\'t spam the "Resend" button.' },
      { id: 's3', title: 'Use Backup Codes', description: 'Enter one of the emergency codes you saved when setting up 2FA.' }
    ],
    technicianAdvice: 'Always use an Authenticator App instead of SMS for better reliability and security.',
    relatedProblemIds: ['p8001', 'p8004'],
    createdAt: '2025-08-22T09:00:00Z'
  },
  {
    id: 'p8003',
    title: 'Biometric login (Fingerprint/Face) failing',
    slug: 'biometric-login-failing',
    shortDescription: 'The device fails to recognize your fingerprint or face, forcing a PIN entry.',
    category: 'software',
    subcategory: 'Security',
    symptoms: ['"Not recognized"', 'Sensor dirty error', 'Hardware not available'],
    causes: ['Dirty sensor', 'Software glitch', 'Hardware failure'],
    steps: [
      { id: 's1', title: 'Clean the Sensor', description: 'Wipe the fingerprint reader or camera lens with a microfiber cloth.' },
      { id: 's2', title: 'Re-register Biometrics', description: 'Delete your old data and scan your face/finger again in good lighting.' },
      { id: 's3', title: 'Check for Updates', description: 'Manufacturers often release patches for biometric reliability.' }
    ],
    technicianAdvice: 'Dry skin or small cuts can prevent a fingerprint reader from working correctly.',
    relatedProblemIds: ['p8001', 'p8005'],
    createdAt: '2025-08-22T10:00:00Z'
  },
  {
    id: 'p8004',
    title: 'Account locked due to too many attempts',
    slug: 'account-locked-too-many-attempts',
    shortDescription: 'The system has temporarily or permanently locked you out after multiple failed logins.',
    category: 'software',
    subcategory: 'Security',
    symptoms: ['"Account locked"', 'Countdown timer', 'Contact admin message'],
    causes: ['Forgotten password', 'Brute force attack', 'Child playing with device'],
    steps: [
      { id: 's1', title: 'Wait for Timer', description: 'Most locks are temporary (15-60 minutes). Wait it out.' },
      { id: 's2', title: 'Use Recovery Email', description: 'Trigger a password reset to unlock the account immediately.' },
      { id: 's3', title: 'Contact Support', description: 'If it\'s a work account, your IT department can unlock it in seconds.' }
    ],
    technicianAdvice: 'Lockouts are a critical security feature to prevent unauthorized access.',
    relatedProblemIds: ['p8002', 'p8006'],
    createdAt: '2025-08-22T11:00:00Z'
  },
  // --- Application Compatibility Problems (Restored) ---
  {
    id: 'p9001',
    title: 'App crashes on startup after OS update',
    slug: 'app-crashes-on-startup-after-os-update',
    shortDescription: 'A previously working application now closes immediately when you try to open it.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['Splash screen then exit', 'Generic error message', 'No response'],
    causes: ['Incompatible API calls', 'Corrupt cache', 'Missing dependencies'],
    steps: [
      { id: 's1', title: 'Check for App Updates', description: 'Developers often release "Day 1" patches for new OS versions.' },
      { id: 's2', title: 'Clear App Cache', description: 'Delete temporary files that might be incompatible with the new OS.' },
      { id: 's3', title: 'Run in Compatibility Mode', description: 'On Windows, right-click > Properties > Compatibility > Run for older version.' }
    ],
    technicianAdvice: 'Major OS updates often change how apps access memory or files, causing older apps to break.',
    relatedProblemIds: ['p9002', 'p9003'],
    createdAt: '2025-08-23T08:00:00Z'
  },
  {
    id: 'p9002',
    title: 'Legacy software not running on 64-bit OS',
    slug: 'legacy-software-not-running-on-64-bit-os',
    shortDescription: 'An old 16-bit or 32-bit application fails to install or run on a modern 64-bit system.',
    category: 'software',
    subcategory: 'General',
    symptoms: ['"This app cannot run on your PC"', 'Installation fails', 'Missing DLLs'],
    causes: ['Architecture mismatch', 'Dropped support for 16-bit', 'Missing 32-bit libraries'],
    steps: [
      { id: 's1', title: 'Use a Virtual Machine', description: 'Run an older version of Windows (like XP or 7) inside a VM.' },
      { id: 's2', title: 'Install 32-bit Runtimes', description: 'Ensure you have the x86 versions of Visual C++ and .NET installed.' },
      { id: 's3', title: 'Check for 64-bit Version', description: 'The developer may have released a modern update for the app.' }
    ],
    technicianAdvice: 'Modern 64-bit Windows has dropped support for 16-bit apps entirely.',
    relatedProblemIds: ['p9001', 'p9004'],
    createdAt: '2025-08-23T09:00:00Z'
  },
  // --- Adding hundreds more to reach the goal ---
  // I will continue to add more problems in subsequent turns to reach the 10,000+ goal.
];
