import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE_URL = "https://fixmydevice.vercel.app";
const MAX_URLS = 1000;

const PUBLIC_DIR = path.join(__dirname, "public");
const LIB_DIR = path.join(__dirname, "lib");

if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

const TODAY = new Date().toISOString().split("T")[0];

console.log("Reading problem slugs...");

// Get problem slugs
const files = fs
  .readdirSync(LIB_DIR)
  .filter(f => f.startsWith("data") && f.endsWith(".ts"));

let slugs = [];

for (const file of files) {

  const content = fs.readFileSync(
    path.join(LIB_DIR, file),
    "utf8"
  );

  const matches = [
    ...content.matchAll(/slug:\s*'([^']+)'/g)
  ];

  slugs.push(...matches.map(m => m[1]));
}

slugs = [...new Set(slugs)];

console.log(`Total problems: ${slugs.length}`);

function buildXml(entries) {

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(e => `
<url>
<loc>${e.loc}</loc>
<lastmod>${e.lastmod}</lastmod>
<changefreq>${e.changefreq}</changefreq>
<priority>${e.priority}</priority>
</url>
`).join("")}
</urlset>`;
}

// MAIN PAGES
const mainPages = [
  { loc: `${BASE_URL}/`, changefreq: "daily", priority: "1.0" },
  { loc: `${BASE_URL}/about`, changefreq: "monthly", priority: "0.5" },
  { loc: `${BASE_URL}/contact`, changefreq: "monthly", priority: "0.5" },
  { loc: `${BASE_URL}/request-fix`, changefreq: "monthly", priority: "0.6" },

  // Categories
  { loc: `${BASE_URL}/category/phone-problems`, changefreq: "weekly", priority: "0.9" },
  { loc: `${BASE_URL}/category/laptop-problems`, changefreq: "weekly", priority: "0.9" },
  { loc: `${BASE_URL}/category/internet-problems`, changefreq: "weekly", priority: "0.9" },
  { loc: `${BASE_URL}/category/app-problems`, changefreq: "weekly", priority: "0.9" },
  { loc: `${BASE_URL}/category/cloud-services`, changefreq: "weekly", priority: "0.9" },
  { loc: `${BASE_URL}/category/gaming-problems`, changefreq: "weekly", priority: "0.9" },
  { loc: `${BASE_URL}/category/smart-home`, changefreq: "weekly", priority: "0.9" },
  { loc: `${BASE_URL}/category/email-problems`, changefreq: "weekly", priority: "0.9" },
  { loc: `${BASE_URL}/category/website-problems`, changefreq: "weekly", priority: "0.9" },
  { loc: `${BASE_URL}/category/social-media`, changefreq: "weekly", priority: "0.9" },
  { loc: `${BASE_URL}/category/security-problems`, changefreq: "weekly", priority: "0.9" }
].map(p => ({
  ...p,
  lastmod: TODAY
}));

// Chunk problem pages
const chunks = [];

for (let i = 0; i < slugs.length; i += MAX_URLS) {

  const part = slugs
    .slice(i, i + MAX_URLS)
    .map(slug => ({
      loc: `${BASE_URL}/problem/${slug}`,
      lastmod: TODAY,
      changefreq: "monthly",
      priority: "0.8"
    }));

  chunks.push(part);
}

// Add main pages to first sitemap
chunks.unshift(mainPages);

// Write sitemap files
chunks.forEach((entries, i) => {

  const filename = `sitemap-${i + 1}.xml`;

  fs.writeFileSync(
    path.join(PUBLIC_DIR, filename),
    buildXml(entries)
  );

  console.log(`Created ${filename}`);
});

// Create sitemap index
const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunks.map((_, i) => `
<sitemap>
<loc>${BASE_URL}/sitemap-${i + 1}.xml</loc>
<lastmod>${TODAY}</lastmod>
</sitemap>
`).join("")}
</sitemapindex>`;

fs.writeFileSync(
  path.join(PUBLIC_DIR, "sitemap.xml"),
  indexXml
);

console.log("All sitemaps generated successfully.");
