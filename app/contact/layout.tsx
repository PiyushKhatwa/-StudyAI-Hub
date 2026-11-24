import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Contact & Tool Submissions',
  description: 'Suggest an AI tool with a generous student free tier or send feedback to the StudyAI Hub editorial team.',
  path: '/contact',
  keywords: ['contact StudyAI Hub', 'submit AI tool', 'student AI tool suggestions']
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
