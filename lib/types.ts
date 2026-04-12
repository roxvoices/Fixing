/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Step {
  id: string;
  title: string;
  description: string;
}

export interface Problem {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  category: 'phone' | 'laptop' | 'internet' | 'app' | 'cloud' | 'gaming' | 'smart-home' | 'email' | 'website' | 'social' | 'security' | 'hardware' | 'software' | 'network' | 'wearables' | 'audio' | 'printers' | 'wearable' | 'printer';
  subcategory: string;
  symptoms: string[];
  causes: string[];
  steps: Step[];
  warning?: string;
  technicianAdvice: string;
  relatedProblemIds: string[];
  isPopular?: boolean;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  subcategories: string[];
}

export interface Comment {
  id: string;
  problemId: string;
  userName: string;
  text: string;
  createdAt: string;
}

export interface Rating {
  id: string;
  problemId: string;
  value: number; // 1-5
  createdAt: string;
}

export interface FixRequest {
  id: string;
  userName: string;
  email: string;
  deviceType: string;
  problemDescription: string;
  status: 'pending' | 'reviewed' | 'added';
  createdAt: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  type: 'info' | 'warning' | 'success';
  isActive: boolean;
  createdAt: string;
}

export interface Advertisement {
  id: string;
  clientName: string;
  title: string;
  description: string;
  mediaUrl: string; // URL for image or video
  mediaType: 'image' | 'video';
  linkUrl?: string;
  isActive: boolean;
  createdAt: string;
}
