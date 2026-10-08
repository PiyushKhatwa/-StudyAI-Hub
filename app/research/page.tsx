import { Metadata } from 'next';
import { CATEGORIES_DATA, TOOLS_DATA } from '@/content/tools/tools-data';
import { CategoryPageView } from '@/components/tools/CategoryPageView';
import { constructMetadata } from '@/lib/seo/metadata';

const category = CATEGORIES_DATA['research'];
const tools = TOOLS_DATA.filter((t) => t.category === 'research');

export const metadata: Metadata = constructMetadata({
  title: category.metaTitle,
  description: category.metaDescription,
  path: '/research',
  keywords: ['AI tools for research', 'AI research paper tools', 'literature review AI', 'academic citation checker', 'consensus search']
});

export default function ResearchPage() {
  const relatedCategories = [
    { title: 'Writing & Editing', href: '/writing', description: 'Ensure academic tone and proper citation formatting.' },
    { title: 'Study & Exam Prep', href: '/study', description: 'Convert research findings into active recall flashcards.' },
    { title: 'Productivity & Notes', href: '/productivity', description: 'Organize research papers into structured digital wikis.' }
  ];

  return (
    <CategoryPageView
      category={category}
      tools={tools}
      relatedCategories={relatedCategories}
    />
  );
}
