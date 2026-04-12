import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_69: Problem[] = [];
let idCounter = 3800000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_69.push({
    id: `p${idCounter++}`,
    title: `Premium ${category} ${sub} Fix #${i + 1}`,
    slug: `premium-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `Premium fix for ${sub.toLowerCase()} problems in ${category} devices.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['Battery drain', 'Overheating', 'Slow charging'],
    causes: ['Background sync', 'High brightness', 'Faulty cable'],
    steps: [
      { id: 's1', title: 'Reduce Brightness', description: 'Lower the screen brightness.' },
      { id: 's2', title: 'Disable Sync', description: 'Turn off background data sync.' },
      { id: 's3', title: 'Replace Cable', description: 'Use a high-quality charging cable.' }
    ],
    technicianAdvice: 'Using the original charger is always recommended for battery health.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
