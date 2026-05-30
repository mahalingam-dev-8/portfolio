import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mahalingam.dev',
      lastModified: '2025-05-30',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
