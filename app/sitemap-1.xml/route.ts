import { NextResponse } from 'next/server'
import { getChunk, buildUrlsetXml, XML_HEADERS } from '@/lib/sitemap-utils'

export const dynamic = 'force-static'

export async function GET() {
  return new NextResponse(buildUrlsetXml(getChunk(1)), {
    status: 200,
    headers: XML_HEADERS,
  })
}
