import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_73: Problem[] = [];
let idCounter = 4200000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_73.push({
    id: `p${idCounter++}`,
    title: `Basic ${category} ${sub} Solution #${i + 1}`,
    slug: `basic-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `Basic solution for ${sub.toLowerCase()} problems in ${category} systems.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['Screen flickering', 'Dead pixels', 'Low brightness'],
    causes: ['Loose cable', 'Driver bug', 'Panel aging'],
    steps: [
      { id: 's1', title: 'Adjust Brightness', description: 'Change the brightness level.' },
      { id: 's2', title: 'Update Display Driver', description: 'Install the latest video drivers.' },
      { id: 's3', title: 'Check Connections', description: 'Ensure all display cables are tight.' }
    ],
    technicianAdvice: 'Flickering is often caused by a refresh rate mismatch in settings.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
