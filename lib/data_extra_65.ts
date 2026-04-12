import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_65: Problem[] = [];
let idCounter = 3400000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_65.push({
    id: `p${idCounter++}`,
    title: `Pro ${category} ${sub} Solution #${i + 1}`,
    slug: `pro-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `Professional solution for ${sub.toLowerCase()} problems in ${category} systems.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['System freeze', 'Blue screen', 'Network timeout'],
    causes: ['Memory leak', 'Registry corruption', 'Port failure'],
    steps: [
      { id: 's1', title: 'Memory Check', description: 'Run a full memory diagnostic tool.' },
      { id: 's2', title: 'Registry Repair', description: 'Fix broken system entries.' },
      { id: 's3', title: 'Port Inspection', description: 'Check physical ports for damage.' }
    ],
    technicianAdvice: 'Regular maintenance can prevent most of these issues.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
