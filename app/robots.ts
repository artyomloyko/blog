import { MetadataRoute } from 'next';
import { siteMetadata } from './components/metadata';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteMetadata.baseUrl}/sitemap.xml`,
    host: siteMetadata.baseUrl,
  };
}
