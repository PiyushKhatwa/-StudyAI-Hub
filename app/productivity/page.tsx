import { Metadata } from 'next';
import { CATEGORIES_DATA, TOOLS_DATA } from '@/content/tools/tools-data';
import { CategoryPageView } from '@/components/tools/CategoryPageView';
import { constructMetadata } from '@/lib/seo/metadata';

const category = CATEGORIES_DATA['productivity'];
const tools = TOOLS_DATA.filter((t) => t.category === 'productivity');

export const metadata: Metadata = constructMetadata({
  title: category.metaTitle,
  description: category.metaDescription,
  path: '/productivity',
  keywords: ['AI note taking tools', 'AI productivity tools for students', 'lecture transcription AI', 'Notion AI student plan', 'Goblin tools college']
});

export default function ProductivityPage() {
  const relatedCategories = [
    { title: 'Study & Exam Prep', href: '/study', description: 'Convert recorded lecture summaries into active flashcard decks.' },
    { title: 'Writing & Editing', href: '/writing', description: 'Turn raw lecture notes into polished academic papers.' },
    { title: 'Coding & Engineering', href: '/coding', description: 'Organize software sprint tasks and computer lab assignments.' }
  ];

  return (
    <CategoryPageView
      category={category}
      tools={tools}
      relatedCategories={relatedCategories}
    />
  );
}
