import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/search'],
      },
    ],
    sitemap: 'https://fixmydevice.vercel.app/sitemap.xml',
  }
}
