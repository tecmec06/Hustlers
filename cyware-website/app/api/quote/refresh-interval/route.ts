import { NextRequest, NextResponse } from 'next/server'
import { updateRefreshInterval } from '@/lib/quoteGenerator'

export async function POST(req: NextRequest) {
  const { ttl } = await req.json()

  if (typeof ttl !== 'number' || ttl <= 0) {
    return NextResponse.json({ error: 'Invalid TTL value' }, { status: 400 })
  }

  updateRefreshInterval(ttl)

  return NextResponse.json({ message: `TTL updated to ${ttl} seconds` })
}
