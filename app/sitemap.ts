
import type { MetadataRoute } from 'next';
import { CATEGORIES_DATA } from '@/content/tools/tools-data';
import { FLAGSHIP_ARTICLE } from '@/content/articles/best-ai-tools-for-college-students';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://studyaihub.live'
  ).replace(/\/+$/, '');

  // Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/${FLAGSHIP_ARTICLE.slug}`,
      lastModified: FLAGSHIP_ARTICLE.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Category routes
  const categoryRoutes: MetadataRoute.Sitemap = Object.keys(
    CATEGORIES_DATA
  ).map((slug) => ({
    url: `${baseUrl}/${slug}`,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes];
}
