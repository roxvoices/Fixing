import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_71: Problem[] = [];
let idCounter = 4000000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_71.push({
    id: `p${idCounter++}`,
    title: `Essential ${category} ${sub} Fix #${i + 1}`,
    slug: `essential-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `Essential fix for ${sub.toLowerCase()} problems in ${category} devices.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['App crash', 'Slow response', 'UI lag'],
    causes: ['Memory pressure', 'Old version', 'System bloat'],
    steps: [
      { id: 's1', title: 'Update App', description: 'Install the latest version.' },
      { id: 's2', title: 'Free Up Space', description: 'Delete unused files.' },
      { id: 's3', title: 'Restart App', description: 'Close and reopen the app.' }
    ],
    technicianAdvice: 'Keeping your apps updated ensures you have the latest bug fixes.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
