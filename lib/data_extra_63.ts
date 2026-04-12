import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_63: Problem[] = [];
let idCounter = 3200000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_63.push({
    id: `p${idCounter++}`,
    title: `Expert ${category} ${sub} Guide #${i + 1}`,
    slug: `expert-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `Expert level guide for resolving ${sub.toLowerCase()} problems in ${category} devices.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['System instability', 'Data loss', 'Hardware disconnects'],
    causes: ['Firmware corruption', 'Component failure', 'External interference'],
    steps: [
      { id: 's1', title: 'Firmware Flash', description: 'Reinstall the device firmware.' },
      { id: 's2', title: 'Component Swap', description: 'Test with known good parts.' },
      { id: 's3', title: 'Professional Repair', description: 'Contact authorized service center.' }
    ],
    technicianAdvice: 'Use only original manufacturer parts for replacements.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
