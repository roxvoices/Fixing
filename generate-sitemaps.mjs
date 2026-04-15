import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const BASE_URL = 'https://fixmydevice.vercel.app'
const MAX_URLS = 2000
const PUBLIC_DIR = path.join(__dirname, 'public')
const TODAY = new Date().toISOString().split('T')[0]

if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true })
}

const dataTs = fs.readFileSync(
  path.join(__dirname, 'lib', 'data.ts'),
  'utf8'
)

const categorySection =
  dataTs.split('const BASE_PROBLEMS')[0]

const categorySlugs =
  [...categorySection.matchAll(/slug:\s*'([^']+)'/g)]
  .map(m => m[1])

console.log(`Categories found: ${categorySlugs.length}`)

const libDir = path.join(__dirname, 'lib')

const dataFiles = fs.readdirSync(libDir)
  .filter(f => f.startsWith('data') && f.endsWith('.ts'))
  .sort()

const problemSlugs = []

for (const file of dataFiles) {

  const content = fs.readFileSync(
    path.join(libDir, file),
    'utf8'
  )

  if (file === 'data.ts') {

    const problemSection =
      content.split('const BASE_PROBLEMS')[1] || ''

    problemSlugs.push(
      ...[...problemSection.matchAll(
        /\bslug:\s*'([^']+)'/g
      )].map(m => m[1])
    )

  } else {

    problemSlugs.push(
      ...[...content.matchAll(
        /\bslug:\s*'([^']+)'/g
      )].map(m => m[1])
    )

  }
}

const uniqueProblems =
  [...new Set(problemSlugs)]

console.log(
  `Problem slugs found: ${uniqueProblems.length}`
)

function esc(str) {
  return str
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&apos;')
}

function urlset(entries) {

  const rows = entries.map(e => `
  <url>
    <loc>${esc(e.loc)}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rows}
</urlset>`
}

const sitemap1Entries = [

  {
    loc: `${BASE_URL}/`,
    lastmod: TODAY,
    changefreq: 'daily',
    priority: '1.0'
  },

  {
    loc: `${BASE_URL}/about`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.5'
  },

  {
    loc: `${BASE_URL}/contact`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.5'
  },

  {
    loc: `${BASE_URL}/request-fix`,
    lastmod: TODAY,
    changefreq: 'monthly',
    priority: '0.6'
  },

  ...categorySlugs.map(slug => ({
    loc: `${BASE_URL}/category/${slug}`,
    lastmod: TODAY,
    changefreq: 'weekly',
    priority: '0.9'
  }))
]

const problemChunks = []

for (let i = 0; i < 4; i++) {

  problemChunks.push(

    uniqueProblems
      .slice(i * MAX_URLS,
             (i + 1) * MAX_URLS)

      .map(slug => ({

        loc:
          `${BASE_URL}/problem/${slug}`,

        lastmod: TODAY,
        changefreq: 'monthly',
        priority: '0.8'

      }))
  )
}

const allChunks =
  [sitemap1Entries, ...problemChunks]

let totalUrls = 0

allChunks.forEach((entries, i) => {

  const filename =
    `sitemap-${i + 1}.xml`

  fs.writeFileSync(

    path.join(PUBLIC_DIR, filename),

    urlset(entries),

    'utf8'

  )

  console.log(
    `✓ public/${filename} (${entries.length})`
  )

  totalUrls += entries.length

})

const sitemapEntries =
  allChunks.map((_, i) => `
  <sitemap>
    <loc>${BASE_URL}/sitemap-${i + 1}.xml</loc>
    <lastmod>${TODAY}</lastmod>
  </sitemap>`).join('')

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</sitemapindex>`

fs.writeFileSync(
  path.join(PUBLIC_DIR, 'sitemap.xml'),
  indexXml
)

console.log(`✓ public/sitemap.xml`)
console.log(`Total URLs: ${totalUrls}`)
