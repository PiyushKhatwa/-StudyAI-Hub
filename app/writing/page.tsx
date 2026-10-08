import { Metadata } from 'next';
import { CATEGORIES_DATA, TOOLS_DATA } from '@/content/tools/tools-data';
import { CategoryPageView } from '@/components/tools/CategoryPageView';
import { constructMetadata } from '@/lib/seo/metadata';

const category = CATEGORIES_DATA['writing'];
const tools = TOOLS_DATA.filter((t) => t.category === 'writing');

export const metadata: Metadata = constructMetadata({
  title: category.metaTitle,
  description: category.metaDescription,
  path: '/writing',
  keywords: ['AI writing tools for students', 'academic writing assistant', 'college grammar checker', 'paraphrasing tool college', 'ethical AI editing']
});

export default function WritingPage() {
  const relatedCategories = [
    { title: 'Academic Research', href: '/research', description: 'Source peer-reviewed citations and verify study conclusions.' },
    { title: 'Presentations & Slides', href: '/presentations', description: 'Convert written research papers into clear presentation slides.' },
    { title: 'Study & Exam Prep', href: '/study', description: 'Extract essay prompts into practice quiz questions.' }
  ];

  return (
    <CategoryPageView
      category={category}
      tools={tools}
      relatedCategories={relatedCategories}
    />
  );
}
