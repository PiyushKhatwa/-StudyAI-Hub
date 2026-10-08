import { Metadata } from 'next';

export const SITE_CONFIG = {
  name: 'StudyAI Hub',
  tagline: 'Discover the right AI tools for smarter studying.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://studyaihub.com',
  description: 'A curated discovery platform helping college students find the right AI tools for study, research, coding, writing, presentations, and productivity.',
  keywords: [
    'AI tools for students',
    'best AI tools for students',
    'free AI tools for students',
    'AI tools for college students',
    'AI tools for studying',
    'AI tools for research',
    'AI coding tools for students',
    'AI presentation maker for students',
    'AI note taking tools'
  ],
  author: 'StudyAI Hub Editorial Team'
};

export function constructMetadata({
  title,
  description,
  path = '',
  keywords = []
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const metaTitle = title ? `${title} | ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`;
  const metaDescription = description || SITE_CONFIG.description;
  const canonicalUrl = `${SITE_CONFIG.url}${path}`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [...SITE_CONFIG.keywords, ...keywords],
    authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.author,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      locale: 'en_US',
      type: 'website'
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    }
  };
}
