import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_67: Problem[] = [];
let idCounter = 3600000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_67.push({
    id: `p${idCounter++}`,
    title: `Master ${category} ${sub} Guide #${i + 1}`,
    slug: `master-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `Master guide for ${sub.toLowerCase()} problems in ${category} technology.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['Performance lag', 'UI glitches', 'Sync errors'],
    causes: ['Cache bloat', 'Background processes', 'Network latency'],
    steps: [
      { id: 's1', title: 'Clear Cache', description: 'Remove temporary files.' },
      { id: 's2', title: 'Optimize Apps', description: 'Close unused background tasks.' },
      { id: 's3', title: 'Check Connection', description: 'Verify network stability.' }
    ],
    technicianAdvice: 'Regularly clearing your cache can significantly improve performance.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
