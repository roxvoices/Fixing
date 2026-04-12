import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_80: Problem[] = [];
let idCounter = 4900000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_80.push({
    id: `p${idCounter++}`,
    title: `Standard ${category} ${sub} Fix #${i + 1}`,
    slug: `standard-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `Standard fix for ${sub.toLowerCase()} issues on ${category} platforms.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['Slow performance', 'Lag', 'Freezing'],
    causes: ['Low storage', 'Too many apps', 'Old hardware'],
    steps: [
      { id: 's1', title: 'Clear Storage', description: 'Delete large, unused files.' },
      { id: 's2', title: 'Uninstall Apps', description: 'Remove applications you don\'t use.' },
      { id: 's3', title: 'Factory Reset', description: 'Wipe the device for a fresh start.' }
    ],
    technicianAdvice: 'A factory reset is the most effective way to fix chronic performance issues.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
