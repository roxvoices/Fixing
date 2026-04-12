import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_77: Problem[] = [];
let idCounter = 4600000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_77.push({
    id: `p${idCounter++}`,
    title: `Quick ${category} ${sub} Solution #${i + 1}`,
    slug: `quick-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `Quick solution for ${sub.toLowerCase()} problems in ${category} devices.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['Overheating', 'Fan noise', 'Slow charging'],
    causes: ['Dust buildup', 'Heavy usage', 'Faulty charger'],
    steps: [
      { id: 's1', title: 'Clean Vents', description: 'Remove dust from cooling vents.' },
      { id: 's2', title: 'Reduce Load', description: 'Close demanding applications.' },
      { id: 's3', title: 'Check Charger', description: 'Ensure the charger is working correctly.' }
    ],
    technicianAdvice: 'Avoid using your device on soft surfaces like beds to prevent overheating.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
