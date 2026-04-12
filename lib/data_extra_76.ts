import { Problem } from './types';

const categories = ['phone', 'laptop', 'internet', 'app', 'gaming', 'wearables', 'audio', 'printers', 'smart-home'];
const subcategories = ['Hardware', 'Software', 'Connectivity', 'Battery', 'Display', 'Audio', 'Performance', 'Security'];

export const EXTRA_PROBLEMS_76: Problem[] = [];
let idCounter = 4500000;
for (let i = 0; i < 500; i++) {
  const category = categories[i % categories.length];
  const sub = subcategories[i % subcategories.length];
  EXTRA_PROBLEMS_76.push({
    id: `p${idCounter++}`,
    title: `Reliable ${category} ${sub} Fix #${i + 1}`,
    slug: `reliable-${category}-${sub.toLowerCase()}-${i + 1}`,
    shortDescription: `Reliable fix for ${sub.toLowerCase()} issues on ${category} platforms.`,
    category: category as any,
    subcategory: sub,
    symptoms: ['Security warning', 'Account locked', 'Malware detected'],
    causes: ['Phishing attempt', 'Weak password', 'System vulnerability'],
    steps: [
      { id: 's1', title: 'Change Password', description: 'Update to a strong, unique password.' },
      { id: 's2', title: 'Enable 2FA', description: 'Add an extra layer of security.' },
      { id: 's3', title: 'Run Virus Scan', description: 'Check for malicious software.' }
    ],
    technicianAdvice: 'Never reuse passwords across different services.',
    relatedProblemIds: [],
    createdAt: new Date().toISOString()
  });
}
