import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const BASE_URL = "https://fixmydevice.vercel.app";
const MAX_URLS = 2000;

const PUBLIC_DIR = path.join(__dirname, "public");
const LIB_DIR = path.join(__dirname, "lib");

if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

const TODAY = new Date().toISOString().split("T")[0];

console.log("Scanning data files...");

// Read ALL data files safely
const dataFiles = fs
  .readdirSync(LIB_DIR)
  .filter((f) => f.startsWith("data") && f.endsWith(".ts"));

let problemSlugs = [];
let categorySlugs = [];

for (const file of dataFiles) {

  const content = fs.readFileSync(
    path.join(LIB_DIR, file),
    "utf8"
  );

  const matches = [
    ...content.matchAll(/slug:\s*'([^']+)'/g)
  ];

  const slugs = matches.map((m) => m[1]);

  if (file === "data.ts") {
    categorySlugs = slugs.slice(0, 20);
  }

  problemSlugs.push(...slugs);
}

problemSlugs = [...new Set(problemSlugs)];

console.log(`Problems found: ${problemSlugs.length}`);

function buildUrlset(entries) {

  const rows = entries.map((e) => `
  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>
  `).join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rows}
</urlset>`;
}

// Main pages
const sitemap1 = [

  {
    loc: `${BASE_URL}/`,
    lastmod: TODAY,
    changefreq: "daily",
    priority: "1.0"
  },

  {
    loc: `${BASE_URL}/about`,
    lastmod: TODAY,
    changefreq: "monthly",
    priority: "0.5"
  }

];

// Problem chunks
const chunks = [];

for (let i = 0; i < problemSlugs.length; i += MAX_URLS) {

  const slice = problemSlugs
    .slice(i, i + MAX_URLS)
    .map((slug) => ({
      loc: `${BASE_URL}/problem/${slug}`,
      lastmod: TODAY,
      changefreq: "monthly",
      priority: "0.8"
    }));

  chunks.push(slice);
}

const all = [sitemap1, ...chunks];

all.forEach((entries, i) => {

  const filename = `sitemap-${i + 1}.xml`;

  fs.writeFileSync(
    path.join(PUBLIC_DIR, filename),
    buildUrlset(entries),
    "utf8"
  );

  console.log(`Created ${filename}`);
});

// Sitemap index
const indexRows = all.map((_, i) => `
<sitemap>
<loc>${BASE_URL}/sitemap-${i + 1}.xml</loc>
<lastmod>${TODAY}</lastmod>
</sitemap>
`).join("");

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexRows}
</sitemapindex>`;

fs.writeFileSync(
  path.join(PUBLIC_DIR, "sitemap.xml"),
  indexXml,
  "utf8"
);

console.log("Sitemaps created successfully");
