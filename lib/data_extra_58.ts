import { Problem } from './types';

const appNames = [
  'WhatsApp', 'Instagram', 'Facebook', 'TikTok', 'Snapchat', 'YouTube', 'Netflix',
  'Spotify', 'Gmail', 'Outlook', 'Zoom', 'Microsoft Teams', 'Slack', 'Discord',
  'Uber', 'DoorDash', 'Airbnb', 'Amazon', 'eBay', 'PayPal', 'Venmo', 'Cash App',
  'Tinder', 'Bumble', 'LinkedIn', 'Twitter (X)', 'Threads', 'Telegram'
];

const appTemplates = [
  {
    title: 'Crashing on Startup',
    slug: 'crashing-startup',
    desc: 'The app closes immediately after you tap the icon.',
    category: 'app',
    sub: 'Stability',
    symptoms: ['Instant close', 'Error message', 'Frozen splash screen'],
    causes: ['Corrupt cache', 'Outdated version', 'System conflict'],
    steps: ['Clear cache', 'Update app', 'Reinstall app'],
    advice: 'Reinstalling is the most reliable fix for persistent crashes.'
  },
  {
    title: 'Notifications Not Appearing',
    slug: 'notifications-missing',
    desc: 'You don\'t get alerts for new messages or updates.',
    category: 'app',
    sub: 'Functionality',
    symptoms: ['No alerts', 'Delayed messages', 'Silent badges'],
    causes: ['Disabled in settings', 'Battery optimization', 'Do Not Disturb'],
    steps: ['Check app settings', 'Check system permissions', 'Disable battery saver'],
    advice: 'Ensure "Background App Refresh" is enabled for the app.'
  },
  {
    title: 'Login Failed (Incorrect Password)',
    slug: 'login-failed',
    desc: 'Cannot sign in even with the correct credentials.',
    category: 'app',
    sub: 'Security',
    symptoms: ['Error message', 'Looping login', 'Account locked'],
    causes: ['Server issues', 'Wrong password', '2FA error'],
    steps: ['Reset password', 'Check server status', 'Verify 2FA code'],
    advice: 'Check if the app\'s servers are down via Downdetector.'
  },
  {
    title: 'Media Not Loading',
    slug: 'media-not-loading',
    desc: 'Images or videos stay as gray boxes or spinning circles.',
    category: 'app',
    sub: 'Performance',
    symptoms: ['Blurry images', 'Infinite loading', 'Playback error'],
    causes: ['Slow internet', 'App cache full', 'Incompatible format'],
    steps: ['Check WiFi/Data', 'Clear cache', 'Restart app'],
    advice: 'Try switching from WiFi to Mobile Data to test the connection.'
  }
];

export const EXTRA_PROBLEMS_58: Problem[] = [];

let idCounter = 2400000;
appNames.forEach(name => {
  appTemplates.forEach(template => {
    EXTRA_PROBLEMS_58.push({
      id: `p${idCounter++}`,
      title: `${name} ${template.title}`,
      slug: `${name.toLowerCase().replace(/ /g, '-')}-${template.slug}`,
      shortDescription: `Common ${template.title} issue on ${name}. ${template.desc}`,
      category: template.category as any,
      subcategory: template.sub,
      symptoms: template.symptoms,
      causes: template.causes,
      steps: template.steps.map((s, i) => ({ id: `s${i+1}`, title: s, description: s })),
      technicianAdvice: template.advice,
      relatedProblemIds: [],
      createdAt: new Date().toISOString()
    });
  });
});
