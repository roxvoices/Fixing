import { NextResponse } from 'next/server'
import {
  buildSitemapIndexXml,
  buildUrlsetXml,
  getChunk,
  TOTAL_SITEMAPS,
  XML_HEADERS,
} from '@/lib/sitemap-utils'

// Tell Next.js to generate all sitemap paths at build time
export function generateStaticParams() {
  const params = [
    { sitemapId: 'sitemap.xml' },
    ...Array.from({ length: TOTAL_SITEMAPS }, (_, i) => ({
      sitemapId: `sitemap-${i + 1}.xml`,
    })),
  ]
  return params
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ sitemapId: string }> }
) {
  const { sitemapId } = await params

  // ── Main index: /sitemap.xml ───────────────────────────────────────────────
  if (sitemapId === 'sitemap.xml') {
    return new NextResponse(buildSitemapIndexXml(), {
      status: 200,
      headers: XML_HEADERS,
    })
  }

  // ── Child sitemaps: /sitemap-1.xml … /sitemap-5.xml ───────────────────────
  const match = sitemapId.match(/^sitemap-(\d+)\.xml$/)
  if (match) {
    const n = parseInt(match[1], 10)
    if (n >= 1 && n <= TOTAL_SITEMAPS) {
      return new NextResponse(buildUrlsetXml(getChunk(n)), {
        status: 200,
        headers: XML_HEADERS,
      })
    }
  }

  // ── Anything else → 404 ───────────────────────────────────────────────────
  return new NextResponse('Not found', { status: 404 })
}
