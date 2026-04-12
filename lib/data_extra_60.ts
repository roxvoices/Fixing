import { Problem } from './types';

const gameConsoles = [
  'PlayStation 5', 'PlayStation 4', 'Xbox Series X', 'Xbox Series S', 'Xbox One',
  'Nintendo Switch', 'Nintendo Switch OLED', 'Steam Deck', 'ROG Ally', 'Gaming PC'
];

const gamingTemplates = [
  {
    title: 'Controller Drift',
    slug: 'controller-drift',
    desc: 'The character or camera moves on its own without touching the stick.',
    category: 'gaming',
    sub: 'Hardware',
    symptoms: ['Ghost movement', 'Unresponsive sticks', 'Jittery aim'],
    causes: ['Dust in sensor', 'Worn out potentiometer', 'Software calibration'],
    steps: ['Clean with alcohol', 'Calibrate in settings', 'Replace stick module'],
    advice: 'Stick drift is a physical wear issue; cleaning is often temporary.'
  },
  {
    title: 'Overheating & Loud Fan',
    slug: 'overheating-loud-fan',
    desc: 'The console gets very hot and the fan sounds like a jet engine.',
    category: 'gaming',
    sub: 'Cooling',
    symptoms: ['Loud noise', 'Sudden shutdown', 'Hot air'],
    causes: ['Dust buildup', 'Poor ventilation', 'Dried thermal paste'],
    steps: ['Clean vents', 'Move to open space', 'Replace thermal paste'],
    advice: 'Never keep your console in a closed cabinet while playing.'
  },
  {
    title: 'Disc Not Reading',
    slug: 'disc-not-reading',
    desc: 'The console doesn\'t recognize the game disc or says "Unrecognized Disc".',
    category: 'gaming',
    sub: 'Hardware',
    symptoms: ['Error code', 'Clicking sound', 'No disc icon'],
    causes: ['Dirty disc', 'Scratched disc', 'Laser failure'],
    steps: ['Clean disc', 'Try another disc', 'Rebuild database'],
    advice: 'Deep scratches can sometimes be fixed with a professional resurfacing.'
  },
  {
    title: 'Online Lag & High Ping',
    slug: 'online-lag-high-ping',
    desc: 'Multiplayer games are stuttering or you keep getting disconnected.',
    category: 'gaming',
    sub: 'Connectivity',
    symptoms: ['Rubber-banding', 'High latency', 'Disconnects'],
    causes: ['WiFi interference', 'Slow internet', 'Server issues'],
    steps: ['Use Ethernet', 'Restart router', 'Check server status'],
    advice: 'Ethernet is always better than WiFi for competitive gaming.'
  }
];

export const EXTRA_PROBLEMS_60: Problem[] = [];

let idCounter = 2600000;
gameConsoles.forEach(consoleName => {
  gamingTemplates.forEach(template => {
    EXTRA_PROBLEMS_60.push({
      id: `p${idCounter++}`,
      title: `${consoleName} ${template.title}`,
      slug: `${consoleName.toLowerCase().replace(/ /g, '-')}-${template.slug}`,
      shortDescription: `Common ${template.title} issue on ${consoleName}. ${template.desc}`,
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
