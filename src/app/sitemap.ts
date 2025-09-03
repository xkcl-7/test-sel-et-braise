import { MetadataRoute } from 'next';
import { getAllPostSlugs } from '@/lib/mdx';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const posts = await getAllPostSlugs();

  // Static pages
  const staticPages = [
    '',
    '/menu',
    '/resa', 
    '/blog',
    '/legal/mentions',
  ];

  const staticSitemapEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  // Blog posts
  const blogSitemapEntries = posts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticSitemapEntries, ...blogSitemapEntries];
}
