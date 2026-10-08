export type ToolCategory = 
  | 'study' 
  | 'research' 
  | 'coding' 
  | 'writing' 
  | 'presentations' 
  | 'productivity';

export interface ToolItem {
  id: string;
  name: string;
  slug: string;
  category: ToolCategory;
  categoryLabel: string;
  description: string;
  shortDescription: string;
  bestFor: string;
  features: string[];
  pricing: string;
  freePlan: string;
  hasFreeTier: boolean;
  studentUsefulness: string;
  tags: string[];
  officialUrl: string;
  iconName: string;
  lastVerified: string;
  verificationStatus: 'Verified' | 'To Verify';
  academicDiscountAvailable: boolean;
  academicDiscountDetails?: string;
}

export interface CategoryInfo {
  slug: ToolCategory;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  useCases: string[];
  faqs: { question: string; answer: string }[];
}

export interface BlogPost {
  title: string;
  slug: string;
  description: string;
  author: {
    name: string;
    role: string;
    bio: string;
  };
  publishedAt: string;
  updatedAt: string;
  category: string;
  readingTime: string;
  tableOfContents: { id: string; title: string }[];
  faqs: { question: string; answer: string }[];
  sources: { title: string; url: string }[];
}
