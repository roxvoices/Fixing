import { INITIAL_PROBLEMS, CATEGORIES } from '@/lib/data'

export const BASE_URL = 'https://fixmydevice.vercel.app'

// Fixed at 5 sitemaps as required — URLs distributed evenly across all 5
export const NUM_SITEMAPS = 5

// ── Static pages ─────────────────────────────────────────────────────────────
export const STATIC_URLS = [
  { url: `${BASE_URL}/`,            changefreq: 'daily',   priority: '1.0' },
  { url: `${BASE_URL}/about`,       changefreq: 'monthly', priority: '0.5' },
  { url: `${BASE_URL}/contact`,     changefreq: 'monthly', priority: '0.5' },
  { url: `${BASE_URL}/request-fix`, changefreq: 'monthly', priority: '0.6' },
]

// ── Category pages ────────────────────────────────────────────────────────────
export const CATEGORY_URLS = CATEGORIES.map(cat => ({
  url:        `${BASE_URL}/category/${cat.slug}`,
  changefreq: 'weekly',
  priority:   '0.9',
  lastmod:    new Date().toISOString().split('T')[0],
}))

// ── Problem pages ─────────────────────────────────────────────────────────────
export const PROBLEM_URLS = INITIAL_PROBLEMS.map(p => ({
  url:        `${BASE_URL}/problem/${p.slug}`,
  changefreq: 'monthly',
  priority:   '0.8',
  lastmod:    p.createdAt.split('T')[0],
}))

// ── All URLs combined ─────────────────────────────────────────────────────────
export const ALL_URLS = [
  ...STATIC_URLS,
  ...CATEGORY_URLS,
  ...PROBLEM_URLS,
]

// ── Distribute evenly across exactly NUM_SITEMAPS files ──────────────────────
// e.g. 2890 URLs across 5 sitemaps = chunks of ~578 each
// This ensures all 5 sitemaps have content even with current URL count,
// and scales cleanly as you add more guides
const chunkSize = Math.ceil(ALL_URLS.length / NUM_SITEMAPS)

// Returns the slice of URLs for sitemap N (1-indexed, 1 to NUM_SITEMAPS)
export function getChunk(n: number) {
  const start = (n - 1) * chunkSize
  const end   = start + chunkSize
  return ALL_URLS.slice(start, end)
}

// ── XML helpers ───────────────────────────────────────────────────────────────
type SitemapUrl = {
  url:        string
  changefreq: string
  priority:   string
  lastmod?:   string
}

export function buildUrlsetXml(urls: SitemapUrl[]): string {
  const entries = urls
    .map(u => `  <url>
    <loc>${escapeXml(u.url)}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`
}

export function buildSitemapIndexXml(sitemapUrls: string[]): string {
  const today = new Date().toISOString().split('T')[0]
  const entries = sitemapUrls
    .map(u => `  <sitemap>
    <loc>${escapeXml(u)}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
