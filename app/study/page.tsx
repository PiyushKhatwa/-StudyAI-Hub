import { Metadata } from 'next';
import { CATEGORIES_DATA, TOOLS_DATA } from '@/content/tools/tools-data';
import { CategoryPageView } from '@/components/tools/CategoryPageView';
import { constructMetadata } from '@/lib/seo/metadata';

const category = CATEGORIES_DATA['study'];
const tools = TOOLS_DATA.filter((t) => t.category === 'study');

export const metadata: Metadata = constructMetadata({
  title: category.metaTitle,
  description: category.metaDescription,
  path: '/study',
  keywords: ['AI study tools', 'AI tools for studying', 'AI flashcards', 'exam preparation AI', 'active recall tools']
});

export default function StudyPage() {
  const relatedCategories = [
    { title: 'Academic Research', href: '/research', description: 'Search peer-reviewed papers and synthesize citations.' },
    { title: 'Productivity & Notes', href: '/productivity', description: 'Transcribe audio lectures and organize course wikis.' },
    { title: 'Writing & Editing', href: '/writing', description: 'Refine academic prose and format references accurately.' }
  ];

  return (
    <CategoryPageView
      category={category}
      tools={tools}
      relatedCategories={relatedCategories}
    />
  );
}
