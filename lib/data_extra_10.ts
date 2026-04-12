import { Problem } from './types';

export const EXTRA_PROBLEMS_10: Problem[] = [
  // --- Phone: Charging (Templated) ---
  {
    id: 'p20001',
    title: 'iPhone 11 Not Charging',
    slug: 'iphone-11-not-charging',
    shortDescription: 'Your iPhone 11 doesn\'t respond when plugged into a lightning cable.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['No charging icon', 'Intermittent charging'],
    causes: ['Lint in port', 'Damaged cable', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Check Cable', description: 'Try a different MFi-certified cable.' },
      { id: 's2', title: 'Clean Port', description: 'Gently remove lint from the port.' }
    ],
    technicianAdvice: 'If cleaning fails, the port may need replacement.',
    relatedProblemIds: ['p1', 'p20002'],
    createdAt: '2025-09-01T08:00:00Z'
  },
  {
    id: 'p20002',
    title: 'iPhone 12 Not Charging',
    slug: 'iphone-12-not-charging',
    shortDescription: 'Your iPhone 12 doesn\'t respond when plugged into a lightning cable.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['No charging icon', 'Intermittent charging'],
    causes: ['Lint in port', 'Damaged cable', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Check Cable', description: 'Try a different MFi-certified cable.' },
      { id: 's2', title: 'Clean Port', description: 'Gently remove lint from the port.' }
    ],
    technicianAdvice: 'If cleaning fails, the port may need replacement.',
    relatedProblemIds: ['p1', 'p20001'],
    createdAt: '2025-09-01T09:00:00Z'
  },
  {
    id: 'p20003',
    title: 'iPhone 14 Not Charging',
    slug: 'iphone-14-not-charging',
    shortDescription: 'Your iPhone 14 doesn\'t respond when plugged into a lightning cable.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['No charging icon', 'Intermittent charging'],
    causes: ['Lint in port', 'Damaged cable', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Check Cable', description: 'Try a different MFi-certified cable.' },
      { id: 's2', title: 'Clean Port', description: 'Gently remove lint from the port.' }
    ],
    technicianAdvice: 'If cleaning fails, the port may need replacement.',
    relatedProblemIds: ['p1', 'p20004'],
    createdAt: '2025-09-01T10:00:00Z'
  },
  {
    id: 'p20004',
    title: 'iPhone 15 Not Charging',
    slug: 'iphone-15-not-charging',
    shortDescription: 'Your iPhone 15 doesn\'t respond when plugged into a USB-C cable.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['No charging icon', 'Intermittent charging'],
    causes: ['Lint in port', 'Damaged cable', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Check Cable', description: 'Try a different USB-C cable.' },
      { id: 's2', title: 'Clean Port', description: 'Gently remove lint from the port.' }
    ],
    technicianAdvice: 'If cleaning fails, the port may need replacement.',
    relatedProblemIds: ['p1', 'p20003'],
    createdAt: '2025-09-01T11:00:00Z'
  },
  {
    id: 'p20005',
    title: 'Samsung Galaxy S20 Not Charging',
    slug: 'samsung-s20-not-charging',
    shortDescription: 'Your Samsung S20 doesn\'t respond when plugged into a USB-C cable.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['No charging icon', 'Intermittent charging'],
    causes: ['Lint in port', 'Damaged cable', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Check Cable', description: 'Try a different USB-C cable.' },
      { id: 's2', title: 'Clean Port', description: 'Gently remove lint from the port.' }
    ],
    technicianAdvice: 'If cleaning fails, the port may need replacement.',
    relatedProblemIds: ['p2', 'p20006'],
    createdAt: '2025-09-01T12:00:00Z'
  },
  {
    id: 'p20006',
    title: 'Samsung Galaxy S22 Not Charging',
    slug: 'samsung-s22-not-charging',
    shortDescription: 'Your Samsung S22 doesn\'t respond when plugged into a USB-C cable.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['No charging icon', 'Intermittent charging'],
    causes: ['Lint in port', 'Damaged cable', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Check Cable', description: 'Try a different USB-C cable.' },
      { id: 's2', title: 'Clean Port', description: 'Gently remove lint from the port.' }
    ],
    technicianAdvice: 'If cleaning fails, the port may need replacement.',
    relatedProblemIds: ['p2', 'p20005'],
    createdAt: '2025-09-01T13:00:00Z'
  },
  {
    id: 'p20007',
    title: 'Samsung Galaxy S23 Not Charging',
    slug: 'samsung-s23-not-charging',
    shortDescription: 'Your Samsung S23 doesn\'t respond when plugged into a USB-C cable.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['No charging icon', 'Intermittent charging'],
    causes: ['Lint in port', 'Damaged cable', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Check Cable', description: 'Try a different USB-C cable.' },
      { id: 's2', title: 'Clean Port', description: 'Gently remove lint from the port.' }
    ],
    technicianAdvice: 'If cleaning fails, the port may need replacement.',
    relatedProblemIds: ['p2', 'p20008'],
    createdAt: '2025-09-01T14:00:00Z'
  },
  {
    id: 'p20008',
    title: 'Samsung Galaxy S24 Not Charging',
    slug: 'samsung-s24-not-charging',
    shortDescription: 'Your Samsung S24 doesn\'t respond when plugged into a USB-C cable.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['No charging icon', 'Intermittent charging'],
    causes: ['Lint in port', 'Damaged cable', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Check Cable', description: 'Try a different USB-C cable.' },
      { id: 's2', title: 'Clean Port', description: 'Gently remove lint from the port.' }
    ],
    technicianAdvice: 'If cleaning fails, the port may need replacement.',
    relatedProblemIds: ['p2', 'p20007'],
    createdAt: '2025-09-01T15:00:00Z'
  },
  {
    id: 'p20009',
    title: 'Google Pixel 6 Not Charging',
    slug: 'google-pixel-6-not-charging',
    shortDescription: 'Your Pixel 6 doesn\'t respond when plugged into a USB-C cable.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['No charging icon', 'Intermittent charging'],
    causes: ['Lint in port', 'Damaged cable', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Check Cable', description: 'Try a different USB-C cable.' },
      { id: 's2', title: 'Clean Port', description: 'Gently remove lint from the port.' }
    ],
    technicianAdvice: 'If cleaning fails, the port may need replacement.',
    relatedProblemIds: ['p20010'],
    createdAt: '2025-09-01T16:00:00Z'
  },
  {
    id: 'p20010',
    title: 'Google Pixel 7 Not Charging',
    slug: 'google-pixel-7-not-charging',
    shortDescription: 'Your Pixel 7 doesn\'t respond when plugged into a USB-C cable.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['No charging icon', 'Intermittent charging'],
    causes: ['Lint in port', 'Damaged cable', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Check Cable', description: 'Try a different USB-C cable.' },
      { id: 's2', title: 'Clean Port', description: 'Gently remove lint from the port.' }
    ],
    technicianAdvice: 'If cleaning fails, the port may need replacement.',
    relatedProblemIds: ['p20009', 'p20011'],
    createdAt: '2025-09-01T17:00:00Z'
  },
  {
    id: 'p20011',
    title: 'Google Pixel 8 Not Charging',
    slug: 'google-pixel-8-not-charging',
    shortDescription: 'Your Pixel 8 doesn\'t respond when plugged into a USB-C cable.',
    category: 'phone',
    subcategory: 'Charging',
    symptoms: ['No charging icon', 'Intermittent charging'],
    causes: ['Lint in port', 'Damaged cable', 'Software glitch'],
    steps: [
      { id: 's1', title: 'Check Cable', description: 'Try a different USB-C cable.' },
      { id: 's2', title: 'Clean Port', description: 'Gently remove lint from the port.' }
    ],
    technicianAdvice: 'If cleaning fails, the port may need replacement.',
    relatedProblemIds: ['p20010'],
    createdAt: '2025-09-01T18:00:00Z'
  },
  // --- Adding hundreds more to reach the goal ---
  // I will continue to add more problems in subsequent turns to reach the 10,000+ goal.
];
