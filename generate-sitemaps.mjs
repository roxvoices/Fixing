/**
 * generate-sitemaps.mjs
 * Runs before "next build" to create static XML sitemap files in public/.
 * Reads ALL slug fields from ALL data*.ts files in lib/ using regex.
 * This guarantees the sitemap exactly matches what Next.js will build.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const BASE_URL   = 'https://fixmydevice.vercel.app'
const MAX_URLS   = 2000
const PUBLIC_DIR = path.join(__dirname, 'public')
const TODAY      = new Date().toISOString().split('T')[0]

if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true })

console.log('Reading problem slugs...')

// ── 1. Read ALL data files and extract every slug ────────────────────────────
const libDir = path.join(__dirname, 'lib')
const allDataFiles = fs.readdirSync(libDir)
  .filter(f => f.startsWith('data') && f.endsWith('.ts'))
  .sort()

const allSlugs = []

for (const file of allDataFiles) {
  const content = fs.readFileSync(path.join(libDir, file), 'utf8')

  if (file === 'data.ts') {
    // Skip the CATEGORIES section — only grab problem slugs
    const afterCategories = content.includes('const BASE_PROBLEMS')
      ? content.split('const BASE_PROBLEMS')[1]
      : content.split('export const INITIAL_PROBLEMS')[0]
    // Grab slugs after CATEGORIES definition (line 85+)
    const problemSlugs = [...afterCategories.matchAll(/\bslug:\s*['"`]([^'"`]+)['"`]/g)]
      .map(m => m[1])
    allSlugs.push(...problemSlugs)
  } else {
    // All data_extra files — grab every slug (both single and double quotes)
    const slugs = [...content.matchAll(/\bslug:\s*['"`]([^'"`]+)['"`]/g)]
      .map(m => m[1])
    allSlugs.push(...slugs)
  }
}

// Deduplicate
const uniqueSlugs = [...new Set(allSlugs)]
console.log(`Total problems: ${uniqueSlugs.length}`)

// ── 2. Read category slugs from data.ts ────────────────────────────────────
const dataTs = fs.readFileSync(path.join(libDir, 'data.ts'), 'utf8')
const categorySection = dataTs.split('const BASE_PROBLEMS')[0]
const categorySlugs = [...categorySection.matchAll(/\bslug:\s*['"`]([^'"`]+)['"`]/g)]
  .map(m => m[1])
  .filter(s => !s.includes('not-') && !uniqueSlugs.slice(0, 20).includes(s))

// ── 3. XML helpers ────────────────────────────────────────────────────────────
function esc(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
           .replace(/"/g,'&quot;').replace(/'/g,'&apos;')
}

function buildUrlset(entries) {
  const rows = entries.map(e =>
    `  <url>\n    <loc>${esc(e.loc)}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
  ).join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows}\n</urlset>`
}

// ── 4. Build sitemap-1: static + category pages ──────────────────────────────
const sitemap1 = [
  { loc: `${BASE_URL}/`,            lastmod: TODAY, changefreq: 'daily',   priority: '1.0' },
  { loc: `${BASE_URL}/about`,       lastmod: TODAY, changefreq: 'monthly', priority: '0.5' },
  { loc: `${BASE_URL}/contact`,     lastmod: TODAY, changefreq: 'monthly', priority: '0.5' },
  { loc: `${BASE_URL}/request-fix`, lastmod: TODAY, changefreq: 'monthly', priority: '0.6' },
  ...categorySlugs.map(slug => ({
    loc: `${BASE_URL}/category/${slug}`, lastmod: TODAY, changefreq: 'weekly', priority: '0.9'
  })),
]

// ── 5. Split problems into chunks of MAX_URLS each ───────────────────────────
const problemChunks = []
for (let i = 0; i * MAX_URLS < uniqueSlugs.length || i < 4; i++) {
  const chunk = uniqueSlugs.slice(i * MAX_URLS, (i + 1) * MAX_URLS).map(slug => ({
    loc: `${BASE_URL}/problem/${slug}`, lastmod: TODAY, changefreq: 'monthly', priority: '0.8'
  }))
  problemChunks.push(chunk)
  if (i >= 3) break // Always generate sitemap-2 through sitemap-5
}

// ── 6. Write all sitemap files ────────────────────────────────────────────────
const allChunks = [sitemap1, ...problemChunks]

allChunks.forEach((entries, i) => {
  const filename = `sitemap-${i + 1}.xml`
  fs.writeFileSync(path.join(PUBLIC_DIR, filename), buildUrlset(entries), 'utf8')
  console.log(`Created ${filename} (${entries.length} URLs)`)
})

// ── 7. Write sitemap index ────────────────────────────────────────────────────
const indexEntries = allChunks
  .filter((_, i) => allChunks[i].length > 0 || i === 0) // always include sitemap-1
  .map((_, i) =>
    `  <sitemap>\n    <loc>${esc(`${BASE_URL}/sitemap-${i + 1}.xml`)}</loc>\n    <lastmod>${TODAY}</lastmod>\n  </sitemap>`
  ).join('\n')

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexEntries}\n</sitemapindex>`

fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), indexXml, 'utf8')
console.log(`All sitemaps generated successfully.`)
