import { NextResponse } from 'next/server'
import { buildSitemapIndexXml, XML_HEADERS } from '@/lib/sitemap-utils'

export const dynamic = 'force-static'

export async function GET() {
  return new NextResponse(buildSitemapIndexXml(), {
    status: 200,
    headers: XML_HEADERS,
  })
}
