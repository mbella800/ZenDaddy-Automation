import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/download?session_id=*'],
    },
    sitemap: 'https://www.zendaddy.pro/sitemap.xml',
  };
}
