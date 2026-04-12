import { Problem } from './types';

const models = [
  'iPhone 15', 'iPhone 15 Pro', 'iPhone 15 Pro Max', 'iPhone 14', 'iPhone 14 Pro',
  'Samsung S24', 'Samsung S24 Ultra', 'Samsung S23', 'Samsung S23 Ultra',
  'Google Pixel 8', 'Google Pixel 8 Pro', 'Google Pixel 7', 'OnePlus 12', 'OnePlus 11',
  'Xiaomi 14', 'Xiaomi 13', 'Sony Xperia 1 V', 'Asus Zenfone 10', 'Motorola Edge 40',
  'Nothing Phone (2)', 'Huawei P60 Pro', 'Oppo Find X6 Pro', 'Vivo X90 Pro'
];

const problemTemplates = [
  {
    title: 'Screen Flickering',
    slug: 'screen-flickering',
    desc: 'The display flashes or has horizontal lines intermittently.',
    category: 'phone',
    sub: 'Display',
    symptoms: ['Flickering', 'Lines', 'Unstable brightness'],
    causes: ['Loose cable', 'Software bug', 'Static buildup'],
    steps: ['Restart phone', 'Update OS', 'Check in Safe Mode'],
    advice: 'If it happens in Safe Mode, it is a hardware issue.'
  },
  {
    title: 'Overheating While Charging',
    slug: 'overheating-charging',
    desc: 'The phone gets extremely hot to the touch when plugged in.',
    category: 'phone',
    sub: 'Battery',
    symptoms: ['Hot chassis', 'Charging paused', 'Slow performance'],
    causes: ['Faulty charger', 'Background apps', 'Ambient temperature'],
    steps: ['Use original charger', 'Remove case', 'Close all apps'],
    advice: 'Heat kills batteries; avoid using the phone for gaming while charging.'
  },
  {
    title: 'GPS Signal Lost',
    slug: 'gps-signal-lost',
    desc: 'Maps cannot find your location or the "blue dot" is stuck.',
    category: 'phone',
    sub: 'Hardware',
    symptoms: ['No GPS', 'Inaccurate location', 'Searching for signal'],
    causes: ['Blocked antenna', 'Software glitch', 'Power saving mode'],
    steps: ['Toggle Location', 'Disable Power Saving', 'Calibrate Compass'],
    advice: 'Tall buildings or thick clouds can sometimes block GPS signals.'
  },
  {
    title: 'Bluetooth Pairing Failed',
    slug: 'bluetooth-pairing-failed',
    desc: 'Cannot connect to headphones, car, or smartwatch.',
    category: 'phone',
    sub: 'Connectivity',
    symptoms: ['Connection failed', 'Device not found', 'Drops'],
    causes: ['Interference', 'Outdated firmware', 'Cache error'],
    steps: ['Forget device', 'Restart Bluetooth', 'Reset Network Settings'],
    advice: 'Ensure the device is in "Pairing Mode" (usually a flashing light).'
  }
];

export const EXTRA_PROBLEMS_56: Problem[] = [];

let idCounter = 2200000;
models.forEach(model => {
  problemTemplates.forEach(template => {
    EXTRA_PROBLEMS_56.push({
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
