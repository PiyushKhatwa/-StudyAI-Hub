import { MetadataRoute } from 'next';
import { CATEGORIES_DATA } from '@/content/tools/tools-data';
import { FLAGSHIP_ARTICLE } from '@/content/articles/best-ai-tools-for-college-students';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://studyaihub.com';
  const currentDate = '2026-10-08T00:00:00.000Z';

  // Core Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog/${FLAGSHIP_ARTICLE.slug}`,
      lastModified: FLAGSHIP_ARTICLE.updatedAt,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5
    }
  ];

  // Category Hub Routes
  const categoryRoutes: MetadataRoute.Sitemap = Object.keys(CATEGORIES_DATA).map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.9
  }));

  return [...staticRoutes, ...categoryRoutes];
}
