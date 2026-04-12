import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

const symptomsList = [
  ['Slow performance', 'Lag', 'Freezing'],
  ['No power', 'Won\'t turn on', 'Black screen'],
  ['Overheating', 'Hot to touch', 'Loud fan'],
  ['Battery drain', 'Fast discharge', 'Shutdowns'],
  ['Connection drops', 'No signal', 'Weak WiFi'],
  ['Broken screen', 'Cracks', 'Touch unresponsive'],
  ['Audio distortion', 'No sound', 'Crackling'],
  ['App crash', 'Error message', 'Won\'t open']
];

const causesList = [
  ['Software bug', 'Update error', 'Corrupt files'],
  ['Hardware failure', 'Physical damage', 'Wear and tear'],
  ['Battery aging', 'Faulty charger', 'Deep discharge'],
  ['Interference', 'Distance', 'Network congestion'],
  ['Liquid damage', 'Spill', 'Humidity'],
  ['Dust buildup', 'Poor ventilation', 'Clogged ports'],
  ['Security breach', 'Malware', 'Account lock'],
  ['Incompatibility', 'Old version', 'Driver conflict']
];

export const EXTRA_PROBLEMS_61: Problem[] = [];

let idCounter = 3000000;

// Generate 500 problems
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  const symptoms = symptomsList[i % symptomsList.length];
  const causes = causesList[i % causesList.length];
  
  const title = `Generic ${category} ${sub} Issue #${i + 1}`;
  
  EXTRA_PROBLEMS_61.push({
    id: `p${idCounter++}`,
    title: title,
    slug: `generic-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `A common ${sub.toLowerCase()} problem affecting various ${category} devices.`,
    category: category as any,
    subcategory: sub,
    symptoms: symptoms,
    causes: causes,
    steps: [
      { id: 's1', title: 'Restart Device', description: 'Turn the device off and on again.' },
      { id: 's2', title: 'Check for Updates', description: 'Ensure the latest software is installed.' },
      { id: 's3', title: 'Reset Settings', description: 'Restore default configurations.' }
    ],
    technicianAdvice: 'Always start with a soft reset before attempting hardware repairs.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
