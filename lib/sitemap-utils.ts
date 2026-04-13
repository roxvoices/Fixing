/**
 * lib/sitemap-utils.ts
 * Single source of truth for all sitemap generation.
 *
 * Distribution:
 *   sitemap.xml    → sitemapindex listing sitemap-1.xml … sitemap-5.xml
 *   sitemap-1.xml  → static pages + all category pages  (~15 URLs)
 *   sitemap-2.xml  → problem pages 1-2000
 *   sitemap-3.xml  → problem pages 2001-4000
 *   sitemap-4.xml  → problem pages 4001-6000
 *   sitemap-5.xml  → problem pages 6001+
 *
 * With ~2,877 problems today:
 *   sitemap-1 = 15 URLs   (static + categories)
 *   sitemap-2 = 2,000 URLs
 *   sitemap-3 = 877 URLs
 *   sitemap-4 = 0 URLs (valid empty urlset — no 404)
 *   sitemap-5 = 0 URLs (valid empty urlset — no 404)
 */

import { INITIAL_PROBLEMS, CATEGORIES } from '@/lib/data'

export const BASE_URL      = 'https://fixmydevice.vercel.app'
export const MAX_URLS      = 2000
export const TOTAL_SITEMAPS = 5

// ── URL builders ──────────────────────────────────────────────────────────────

type UrlEntry = {
  url: string
  lastmod: string
  changefreq: string
  priority: string
}

function today(): string {
  return new Date().toISOString().split('T')[0]
}

export function getStaticAndCategoryUrls(): UrlEntry[] {
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

export function getProblemUrlChunk(chunkIndex: number): UrlEntry[] {
  // chunkIndex is 0-based; sitemap-2 = chunkIndex 0, sitemap-3 = chunkIndex 1, etc.
  const start = chunkIndex * MAX_URLS
  const end   = start + MAX_URLS
  return INITIAL_PROBLEMS.slice(start, end).map(p => ({
    url:        `${BASE_URL}/problem/${p.slug}`,
    lastmod:    p.createdAt.split('T')[0],
    changefreq: 'monthly',
    priority:   '0.8',
  }))
}

// Returns the correct URL list for each child sitemap (1-indexed)
export function getChunk(n: number): UrlEntry[] {
  if (n === 1) return getStaticAndCategoryUrls()
  return getProblemUrlChunk(n - 2)   // sitemap-2 → chunk 0, sitemap-3 → chunk 1, etc.
}

// ── XML renderers ─────────────────────────────────────────────────────────────

function escapeXml(str: string): string {
  return str
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&apos;')
}

export function buildUrlsetXml(urls: UrlEntry[]): string {
  const entries = urls
    .map(u =>
`  <url>
    <loc>${escapeXml(u.url)}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`)
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
`  <sitemap>
    <loc>${escapeXml(`${BASE_URL}/sitemap-${n}.xml`)}</loc>
    <lastmod>${d}</lastmod>
  </sitemap>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`
}

// Shared HTTP headers for all XML responses
export const XML_HEADERS = {
  'Content-Type':  'application/xml; charset=utf-8',
  'Cache-Control': 'public, max-age=86400, stale-while-revalidate=43200',
} as const
