import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_78: Problem[] = [];
let idCounter = 4700000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_78.push({
    id: `p${idCounter++}`,
    title: `Simple ${category} ${sub} Fix #${i + 1}`,
    slug: `simple-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `Simple fix for ${sub.toLowerCase()} issues on ${category} platforms.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['No power', 'Won\'t charge', 'Black screen'],
    causes: ['Dead battery', 'Bad cable', 'Internal short'],
    steps: [
      { id: 's1', title: 'Charge Device', description: 'Plug in for at least 30 minutes.' },
      { id: 's2', title: 'Try New Cable', description: 'Test with a different charging cable.' },
      { id: 's3', title: 'Force Restart', description: 'Hold power button for 15 seconds.' }
    ],
    technicianAdvice: 'A "dead" device often just needs a long charge with a known good cable.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
