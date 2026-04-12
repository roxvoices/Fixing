import { Problem } from './types';

const laptopModels = [
  'MacBook Air M2', 'MacBook Pro M3', 'Dell XPS 13', 'Dell XPS 15', 'HP Spectre x360',
  'HP Envy', 'Lenovo ThinkPad X1', 'Lenovo Yoga', 'Asus ROG Zephyrus', 'Asus Zenbook',
  'Acer Swift', 'Acer Predator', 'Microsoft Surface Laptop 5', 'Surface Pro 9',
  'Razer Blade 15', 'Razer Blade 14', 'Samsung Galaxy Book 3', 'LG Gram',
  'Alienware m16', 'MSI Stealth', 'Gigabyte Aero'
];

const laptopTemplates = [
  {
    title: 'Battery Not Charging',
    slug: 'battery-not-charging',
    desc: 'Plugged in but the battery percentage doesn\'t increase.',
    category: 'laptop',
    sub: 'Power',
    symptoms: ['Plugged in, not charging', 'Battery icon static', 'Slow drain'],
    causes: ['Bad adapter', 'Driver error', 'Battery health'],
    steps: ['Try another outlet', 'Reinstall battery driver', 'Check BIOS health'],
    advice: 'If the laptop works without the battery, the adapter is fine.'
  },
  {
    title: 'Keyboard Keys Not Working',
    slug: 'keyboard-keys-not-working',
    desc: 'Specific keys or the whole keyboard is unresponsive.',
    category: 'laptop',
    sub: 'Hardware',
    symptoms: ['Dead keys', 'Sticky keys', 'Ghost typing'],
    causes: ['Liquid spill', 'Dust', 'Loose ribbon cable'],
    steps: ['Clean with air', 'Use external keyboard', 'Update drivers'],
    advice: 'Liquid damage often requires a full keyboard replacement.'
  },
  {
    title: 'Blue Screen of Death (BSOD)',
    slug: 'bsod-crash',
    desc: 'The system crashes to a blue screen with an error code.',
    category: 'laptop',
    sub: 'Software',
    symptoms: ['Sudden crash', 'Restart loop', 'Error codes'],
    causes: ['Driver conflict', 'RAM failure', 'Corrupt OS'],
    steps: ['Check error code', 'Update drivers', 'Run RAM test'],
    advice: 'BSODs are usually driver-related; check "Event Viewer" for clues.'
  },
  {
    title: 'Touchpad Not Working',
    slug: 'touchpad-not-working',
    desc: 'The cursor doesn\'t move or the clicks aren\'t registered.',
    category: 'laptop',
    sub: 'Hardware',
    symptoms: ['Frozen cursor', 'No clicks', 'Erratic movement'],
    causes: ['Disabled by shortcut', 'Driver error', 'Hardware failure'],
    steps: ['Check Fn key toggle', 'Reinstall I2C driver', 'Clean surface'],
    advice: 'Many laptops have a physical or Fn-key shortcut to disable the pad.'
  },
  {
    title: 'Fan Making Loud Noise',
    slug: 'fan-loud-noise',
    desc: 'The fan is spinning at max speed or making a grinding sound.',
    category: 'laptop',
    sub: 'Cooling',
    symptoms: ['Loud whirring', 'Grinding', 'Heat'],
    causes: ['Dust', 'Bearing failure', 'High CPU usage'],
    steps: ['Clean vents', 'Check Task Manager', 'Update BIOS'],
    advice: 'Compressed air can fix 90% of fan noise issues.'
  }
];

export const EXTRA_PROBLEMS_57: Problem[] = [];

let idCounter = 2300000;
laptopModels.forEach(model => {
  laptopTemplates.forEach(template => {
    EXTRA_PROBLEMS_57.push({
      id: `p${idCounter++}`,
      title: `${model} ${template.title}`,
      slug: `${model.toLowerCase().replace(/ /g, '-')}-${template.slug}`,
      shortDescription: `Common ${template.title} issue on ${model}. ${template.desc}`,
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
