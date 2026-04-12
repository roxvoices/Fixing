import { Problem } from './types';

export const EXTRA_PROBLEMS_9: Problem[] = [
  // --- App Problems (Expanded) ---
  {
    id: 'p15001',
    title: 'App "Waiting" or "Loading" stuck on Home Screen',
    slug: 'app-waiting-loading-stuck-home-screen',
    shortDescription: 'An app icon is grayed out and says "Waiting..." or "Loading..." forever.',
    category: 'app',
    subcategory: 'Installation',
    symptoms: ['Gray icon', 'Stuck progress', 'Cannot delete'],
    causes: ['App Store sync issue', 'Low storage', 'Network interruption'],
    steps: [
      { id: 's1', title: 'Pause and Resume', description: 'Tap the icon once to pause, then again to resume the download.' },
      { id: 's2', title: 'Sign Out of App Store', description: 'Go to Settings > Media & Purchases > Sign Out, then sign back in.' },
      { id: 's3', title: 'Restart Device', description: 'Forces the system to re-evaluate the pending download queue.' }
    ],
    technicianAdvice: 'If it won\'t delete, you may need to "Offload" it from the storage settings menu.',
    relatedProblemIds: ['p15002', 'p15003'],
    createdAt: '2025-08-29T08:00:00Z'
  },
  {
    id: 'p15002',
    title: 'App "Unable to Verify App" error',
    slug: 'app-unable-to-verify-app-error',
    shortDescription: 'You see an error saying the app cannot be verified because of an internet connection issue.',
    category: 'app',
    subcategory: 'Launch',
    symptoms: ['Verification error', 'App won\'t open', 'Internet is fine otherwise'],
    causes: ['Expired certificate', 'VPN interference', 'Date/Time mismatch'],
    steps: [
      { id: 's1', title: 'Check Date & Time', description: 'Ensure "Set Automatically" is ON in your system settings.' },
      { id: 's2', title: 'Disable VPN', description: 'VPNs can block the verification servers used by Apple or Google.' },
      { id: 's3', title: 'Reinstall the App', description: 'The certificate may have been revoked; a fresh install usually fixes it.' }
    ],
    technicianAdvice: 'This often happens with "Enterprise" or sideloaded apps when their developer certificate expires.',
    relatedProblemIds: ['p15001', 'p15004'],
    createdAt: '2025-08-29T09:00:00Z'
  },
  // --- Internet Problems (Expanded) ---
  {
    id: 'p16001',
    title: 'DNS_PROBE_FINISHED_NXDOMAIN error',
    slug: 'dns-probe-finished-nxdomain-error',
    shortDescription: 'The browser cannot find the IP address for the website you are trying to visit.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['NXDOMAIN error', 'Site not found', 'Other sites work'],
    causes: ['Stale DNS cache', 'Misconfigured DNS server', 'Typo in URL'],
    steps: [
      { id: 's1', title: 'Flush DNS', description: 'Run "ipconfig /flushdns" in Command Prompt (Windows) or terminal (Mac).' },
      { id: 's2', title: 'Change DNS to 8.8.8.8', description: 'Use Google\'s public DNS which is more reliable than most ISP servers.' },
      { id: 's3', title: 'Restart Router', description: 'Clears the router\'s internal DNS cache.' }
    ],
    technicianAdvice: 'If this happens for all sites, your ISP\'s DNS server is likely down.',
    relatedProblemIds: ['p16002', 'p16003'],
    createdAt: '2025-08-30T08:00:00Z'
  },
  {
    id: 'p16002',
    title: 'WiFi "Connected, No Internet"',
    slug: 'wifi-connected-no-internet',
    shortDescription: 'Your device is connected to the router, but you cannot browse the web.',
    category: 'internet',
    subcategory: 'WiFi',
    symptoms: ['Yellow triangle', '"No Internet" message', 'Router lights red'],
    causes: ['ISP outage', 'Incorrect IP configuration', 'Router-Modem sync issue'],
    steps: [
      { id: 's1', title: 'Check Modem Lights', description: 'Ensure the "Online" or "Internet" light on your modem is solid green.' },
      { id: 's2', title: 'Power Cycle Everything', description: 'Unplug modem and router for 60 seconds, then plug back in.' },
      { id: 's3', title: 'Check ISP Status', description: 'Call your provider or check their app for local outages.' }
    ],
    technicianAdvice: 'If the modem lights are fine but the router says "No Internet", the cable between them might be bad.',
    relatedProblemIds: ['p16001', 'p16004'],
    createdAt: '2025-08-30T09:00:00Z'
  },
  // --- Adding hundreds more to reach the goal ---
  // I will continue to add more problems in subsequent turns to reach the 10,000+ goal.
];
