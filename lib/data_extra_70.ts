import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_70: Problem[] = [];
let idCounter = 3900000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_70.push({
    id: `p${idCounter++}`,
    title: `Core ${category} ${sub} Troubleshooting #${i + 1}`,
    slug: `core-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `Core troubleshooting for ${sub.toLowerCase()} issues on ${category} systems.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['No signal', 'Connection failed', 'Timeout'],
    causes: ['Router error', 'ISP outage', 'Interference'],
    steps: [
      { id: 's1', title: 'Reboot Router', description: 'Unplug and replug the router.' },
      { id: 's2', title: 'Check Cables', description: 'Ensure all network cables are secure.' },
      { id: 's3', title: 'Contact ISP', description: 'Verify if there is a local outage.' }
    ],
    technicianAdvice: 'Most internet issues can be resolved with a simple router reboot.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
