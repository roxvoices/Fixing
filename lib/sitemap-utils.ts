import { INITIAL_PROBLEMS, CATEGORIES } from '@/lib/data'

export const BASE_URL       = 'https://fixmydevice.vercel.app'
export const MAX_URLS       = 2000
export const TOTAL_SITEMAPS = 5

type UrlEntry = {
  url: string
  lastmod: string
  changefreq: string
  priority: string
}

function today(): string {
  return new Date().toISOString().split('T')[0]
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&apos;')
}

// sitemap-1 → static pages + all category pages
function getStaticAndCategoryUrls(): UrlEntry[] {
  const d = today()
  const staticUrls: UrlEntry[] = [
    { url: `${BASE_URL}/`,            lastmod: d, changefreq: 'daily',   priority: '1.0' },
    { url: `${BASE_URL}/about`,       lastmod: d, changefreq: 'monthly', priority: '0.5' },
    { url: `${BASE_URL}/contact`,     lastmod: d, changefreq: 'monthly', priority: '0.5' },
    { url: `${BASE_URL}/request-fix`, lastmod: d, changefreq: 'monthly', priority: '0.6' },
  ]
  const categoryUrls: UrlEntry[] = CATEGORIES.map(cat => ({
    url:        `${BASE_URL}/category/${cat.slug}`,
    lastmod:    d,
    changefreq: 'weekly',
    priority:   '0.9',
  }))
  return [...staticUrls, ...categoryUrls]
}

// sitemap-2 → problems 0–1999
// sitemap-3 → problems 2000–3999
// sitemap-4 → problems 4000–5999
// sitemap-5 → problems 6000+
function getProblemChunk(sitemapNumber: number): UrlEntry[] {
  const start = (sitemapNumber - 2) * MAX_URLS
  const end   = start + MAX_URLS
  return INITIAL_PROBLEMS.slice(start, end).map(p => ({
    url:        `${BASE_URL}/problem/${p.slug}`,
    lastmod:    p.createdAt.split('T')[0],
    changefreq: 'monthly',
    priority:   '0.8',
  }))
}

// Returns URLs for a given child sitemap number (1–5)
export function getChunk(n: number): UrlEntry[] {
  if (n === 1) return getStaticAndCategoryUrls()
  return getProblemChunk(n)
}

export function buildUrlsetXml(urls: UrlEntry[]): string {
  const entries = urls
    .map(u =>
      `  <url>\n    <loc>${escapeXml(u.url)}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries}
</urlset>`
}

export function buildSitemapIndexXml(): string {
  const d = today()
  const entries = Array.from({ length: TOTAL_SITEMAPS }, (_, i) => i + 1)
    .map(n =>
      `  <sitemap>\n    <loc>${escapeXml(`${BASE_URL}/sitemap-${n}.xml`)}</loc>\n    <lastmod>${d}</lastmod>\n  </sitemap>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`
}

export const XML_HEADERS = {
  'Content-Type':  'application/xml; charset=utf-8',
  'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
} as const
