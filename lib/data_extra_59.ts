import { Problem } from './types';

const routerBrands = [
  'TP-Link', 'Netgear', 'Asus', 'Linksys', 'D-Link', 'Tenda', 'Google Nest',
  'Eero', 'Ubiquiti UniFi', 'MikroTik', 'Huawei', 'ZTE', 'Xiaomi Mi', 'Mercusys'
];

const internetTemplates = [
  {
    title: 'Red Light on Router',
    slug: 'red-light-router',
    desc: 'The internet light is solid or flashing red.',
    category: 'internet',
    sub: 'Hardware',
    symptoms: ['No internet', 'Red LED', 'Modem error'],
    causes: ['ISP outage', 'Disconnected cable', 'Authentication failure'],
    steps: ['Restart router', 'Check coax/fiber cable', 'Call ISP'],
    advice: 'A red light usually means the router can\'t "see" the internet signal.'
  },
  {
    title: 'WiFi Keeps Dropping',
    slug: 'wifi-keeps-dropping',
    desc: 'The wireless signal disappears and reappears randomly.',
    category: 'internet',
    sub: 'WiFi',
    symptoms: ['Intermittent connection', 'Signal lost', 'Lag spikes'],
    causes: ['Interference', 'Overheating', 'Too many devices'],
    steps: ['Change WiFi channel', 'Move router to open area', 'Update firmware'],
    advice: 'Avoid placing the router near microwaves or cordless phones.'
  },
  {
    title: 'Slow WiFi Speed',
    slug: 'slow-wifi-speed',
    desc: 'Internet is fast on Ethernet but slow on WiFi.',
    category: 'internet',
    sub: 'Speed',
    symptoms: ['Buffering', 'Slow downloads', 'Low signal'],
    causes: ['Distance', 'Congestion', 'Old WiFi standard'],
    steps: ['Use 5GHz band', 'Move closer to router', 'Check for background downloads'],
    advice: '5GHz is faster but has shorter range than 2.4GHz.'
  },
  {
    title: 'Cannot Access Router Admin Page',
    slug: 'cannot-access-admin',
    desc: 'The 192.168.1.1 or tplinkwifi.net page won\'t load.',
    category: 'internet',
    sub: 'Software',
    symptoms: ['Page not found', 'Login error', 'Timeout'],
    causes: ['Wrong IP', 'Connected to wrong WiFi', 'Router hang'],
    steps: ['Check gateway IP', 'Connect via Ethernet', 'Factory reset'],
    advice: 'Use "ipconfig" in CMD to find your "Default Gateway" IP.'
  }
];

export const EXTRA_PROBLEMS_59: Problem[] = [];

let idCounter = 2500000;
routerBrands.forEach(brand => {
  internetTemplates.forEach(template => {
    EXTRA_PROBLEMS_59.push({
      id: `p${idCounter++}`,
      title: `${brand} ${template.title}`,
      slug: `${brand.toLowerCase().replace(/ /g, '-')}-${template.slug}`,
      shortDescription: `Common ${template.title} issue on ${brand} routers. ${template.desc}`,
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
