import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_64: Problem[] = [];
let idCounter = 3300000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_64.push({
    id: `p${idCounter++}`,
    title: `Specialist ${category} ${sub} Fix #${i + 1}`,
    slug: `specialist-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `Specialist fix for ${sub.toLowerCase()} issues on ${category} hardware.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['Erratic behavior', 'Slow response', 'Visual glitches'],
    causes: ['Driver bug', 'Overclocking instability', 'Voltage drops'],
    steps: [
      { id: 's1', title: 'Reset Overclock', description: 'Return all settings to factory defaults.' },
      { id: 's2', title: 'Clean Install', description: 'Wipe and reinstall the operating system.' },
      { id: 's3', title: 'Stress Test', description: 'Verify stability under heavy load.' }
    ],
    technicianAdvice: 'Ensure the power supply is adequate for the hardware requirements.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
