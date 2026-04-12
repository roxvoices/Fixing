import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_74: Problem[] = [];
let idCounter = 4300000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_74.push({
    id: `p${idCounter++}`,
    title: `General ${category} ${sub} Fix #${i + 1}`,
    slug: `general-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `General fix for ${sub.toLowerCase()} issues on ${category} hardware.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['Bluetooth failing', 'WiFi dropping', 'GPS inaccurate'],
    causes: ['Interference', 'Old firmware', 'Antenna damage'],
    steps: [
      { id: 's1', title: 'Reset Network', description: 'Reset all network settings.' },
      { id: 's2', title: 'Update Firmware', description: 'Install the latest device firmware.' },
      { id: 's3', title: 'Toggle Airplane Mode', description: 'Quickly reset all wireless radios.' }
    ],
    technicianAdvice: 'Airplane mode toggle is a great first step for any wireless issue.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
