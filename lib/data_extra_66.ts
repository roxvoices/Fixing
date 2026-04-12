import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_66: Problem[] = [];
let idCounter = 3500000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_66.push({
    id: `p${idCounter++}`,
    title: `Ultimate ${category} ${sub} Fix #${i + 1}`,
    slug: `ultimate-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `The ultimate fix for ${sub.toLowerCase()} issues on ${category} devices.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['Total failure', 'No response', 'Critical error'],
    causes: ['Motherboard failure', 'OS corruption', 'Power surge'],
    steps: [
      { id: 's1', title: 'Power Cycle', description: 'Full power drain and restart.' },
      { id: 's2', title: 'OS Recovery', description: 'Use recovery tools to fix the OS.' },
      { id: 's3', title: 'Hardware Replacement', description: 'Replace the faulty component.' }
    ],
    technicianAdvice: 'Always back up your data before attempting OS recovery.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
