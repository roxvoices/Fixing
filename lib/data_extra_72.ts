import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_72: Problem[] = [];
let idCounter = 4100000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_72.push({
    id: `p${idCounter++}`,
    title: `Standard ${category} ${sub} Guide #${i + 1}`,
    slug: `standard-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `Standard guide for ${sub.toLowerCase()} issues on ${category} platforms.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['No sound', 'Distorted audio', 'Mic not working'],
    causes: ['Muted settings', 'Bad driver', 'Hardware damage'],
    steps: [
      { id: 's1', title: 'Check Volume', description: 'Ensure the device is not muted.' },
      { id: 's2', title: 'Update Audio Driver', description: 'Install the latest sound drivers.' },
      { id: 's3', title: 'Test with Headphones', description: 'Check if the issue is with the speakers.' }
    ],
    technicianAdvice: 'Always check the physical mute switch if your device has one.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
