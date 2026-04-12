import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_75: Problem[] = [];
let idCounter = 4400000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_75.push({
    id: `p${idCounter++}`,
    title: `Common ${category} ${sub} Troubleshooting #${i + 1}`,
    slug: `common-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `Common troubleshooting for ${sub.toLowerCase()} problems in ${category} devices.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['Slow boot', 'System freeze', 'Laggy UI'],
    causes: ['Low RAM', 'Background apps', 'Disk full'],
    steps: [
      { id: 's1', title: 'Close Apps', description: 'Force close all background applications.' },
      { id: 's2', title: 'Check RAM', description: 'Ensure you have enough free memory.' },
      { id: 's3', title: 'Reboot System', description: 'A fresh start often clears memory leaks.' }
    ],
    technicianAdvice: 'Restarting your device once a week can prevent many performance issues.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
