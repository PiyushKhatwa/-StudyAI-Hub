import { Metadata } from 'next';
import { CATEGORIES_DATA, TOOLS_DATA } from '@/content/tools/tools-data';
import { CategoryPageView } from '@/components/tools/CategoryPageView';
import { constructMetadata } from '@/lib/seo/metadata';

const category = CATEGORIES_DATA['coding'];
const tools = TOOLS_DATA.filter((t) => t.category === 'coding');

export const metadata: Metadata = constructMetadata({
  title: category.metaTitle,
  description: category.metaDescription,
  path: '/coding',
  keywords: ['AI coding tools for students', 'AI tools for CSE students', 'free AI coding tools for college students', 'free GitHub Copilot student', 'Cursor IDE student']
});

export default function CodingPage() {
  const relatedCategories = [
    { title: 'Productivity & Notes', href: '/productivity', description: 'Manage engineering coursework tasks and lab deadlines.' },
    { title: 'Academic Research', href: '/research', description: 'Find CS research papers and IEEE conference publications.' },
    { title: 'Presentations & Slides', href: '/presentations', description: 'Design slide decks for software engineering project defenses.' }
  ];

  return (
    <CategoryPageView
      category={category}
      tools={tools}
      relatedCategories={relatedCategories}
    />
  );
}
