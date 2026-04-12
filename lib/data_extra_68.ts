import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_68: Problem[] = [];
let idCounter = 3700000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_68.push({
    id: `p${idCounter++}`,
    title: `Elite ${category} ${sub} Solution #${i + 1}`,
    slug: `elite-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `Elite solution for ${sub.toLowerCase()} issues on ${category} platforms.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['System hang', 'Slow boot', 'Driver errors'],
    causes: ['Disk fragmentation', 'Startup bloat', 'Incompatible drivers'],
    steps: [
      { id: 's1', title: 'Defragment Disk', description: 'Optimize file storage (for HDDs).' },
      { id: 's2', title: 'Manage Startup', description: 'Disable unnecessary startup apps.' },
      { id: 's3', title: 'Update Drivers', description: 'Install the latest hardware drivers.' }
    ],
    technicianAdvice: 'SSD users should avoid defragmentation; use "Trim" instead.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
