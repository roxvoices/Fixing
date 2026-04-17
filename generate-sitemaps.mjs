import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Import your real data source
import { ALL_PROBLEMS } from "./lib/allProblems.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE_URL = "https://fixmydevice.vercel.app";
const MAX_URLS = 1000;

const PUBLIC_DIR = path.join(__dirname, "public");

if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

const TODAY = new Date().toISOString().split("T")[0];

console.log("Reading slugs from ALL_PROBLEMS...");

const slugs = ALL_PROBLEMS.map(p => p.slug);

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

chunks.forEach((entries, i) => {

  const filename = `sitemap-${i + 1}.xml`;

  fs.writeFileSync(
    path.join(PUBLIC_DIR, filename),
    buildXml(entries)
  );

  console.log(`Created ${filename}`);
});

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

console.log("Sitemaps done.");
