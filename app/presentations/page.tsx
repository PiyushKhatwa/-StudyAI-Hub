import { Metadata } from 'next';
import { CATEGORIES_DATA, TOOLS_DATA } from '@/content/tools/tools-data';
import { CategoryPageView } from '@/components/tools/CategoryPageView';
import { constructMetadata } from '@/lib/seo/metadata';

const category = CATEGORIES_DATA['presentations'];
const tools = TOOLS_DATA.filter((t) => t.category === 'presentations');

export const metadata: Metadata = constructMetadata({
  title: category.metaTitle,
  description: category.metaDescription,
  path: '/presentations',
  keywords: ['AI tools for presentations', 'AI presentation maker for students', 'AI slide generator students', 'Gamma app student', 'Google Slides AI addon']
});

export default function PresentationsPage() {
  const relatedCategories = [
    { title: 'Writing & Editing', href: '/writing', description: 'Draft concise bullet points and speaker scripts for slides.' },
    { title: 'Productivity & Notes', href: '/productivity', description: 'Organize project timelines and group presentation rehearsals.' },
    { title: 'Coding & Engineering', href: '/coding', description: 'Create slide decks to present capstone software demonstrations.' }
  ];

  return (
    <CategoryPageView
      category={category}
      tools={tools}
      relatedCategories={relatedCategories}
    />
  );
}
