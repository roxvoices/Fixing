import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_79: Problem[] = [];
let idCounter = 4800000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_79.push({
    id: `p${idCounter++}`,
    title: `Basic ${category} ${sub} Troubleshooting #${i + 1}`,
    slug: `basic-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `Basic troubleshooting for ${sub.toLowerCase()} problems in ${category} devices.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['WiFi dropping', 'Bluetooth error', 'No signal'],
    causes: ['Interference', 'Distance', 'Old router'],
    steps: [
      { id: 's1', title: 'Move Closer', description: 'Get closer to the signal source.' },
      { id: 's2', title: 'Reboot Router', description: 'Restart your network hardware.' },
      { id: 's3', title: 'Update Device', description: 'Install the latest network drivers.' }
    ],
    technicianAdvice: 'WiFi signals are easily blocked by walls and large furniture.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
