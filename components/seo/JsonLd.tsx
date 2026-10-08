import React from 'react';

interface JsonLdProps {
  data: Record<string, unknown>;
}

export const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
};

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'StudyAI Hub',
    url: 'https://studyaihub.com',
    logo: 'https://studyaihub.com/logo.png',
    description: 'An independent discovery and educational resource platform helping college students find vetted AI tools for study, research, coding, writing, and presentations.',
    sameAs: []
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'StudyAI Hub',
    url: 'https://studyaihub.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://studyaihub.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function getArticleSchema({
  title,
  description,
  url,
  publishedAt,
  updatedAt,
  authorName
}: {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt: string;
  authorName: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: url,
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      '@type': 'Organization',
      name: authorName
    },
    publisher: {
      '@type': 'Organization',
      name: 'StudyAI Hub',
      logo: {
        '@type': 'ImageObject',
        url: 'https://studyaihub.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };
}
