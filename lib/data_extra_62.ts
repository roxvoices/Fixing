import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_62: Problem[] = [];
let idCounter = 3100000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_62.push({
    id: `p${idCounter++}`,
    title: `Advanced ${category} ${sub} Troubleshooting #${i + 1}`,
    slug: `advanced-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `Advanced troubleshooting for ${sub.toLowerCase()} issues on ${category} platforms.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['Intermittent failure', 'Performance degradation', 'Error logs'],
    causes: ['Complex software conflict', 'Hardware degradation', 'Environmental factors'],
    steps: [
      { id: 's1', title: 'Deep Scan', description: 'Perform a full system diagnostic.' },
      { id: 's2', title: 'Safe Mode Test', description: 'Isolate software from hardware.' },
      { id: 's3', title: 'Factory Reset', description: 'The final software-level solution.' }
    ],
    technicianAdvice: 'Document all error codes before performing a factory reset.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
