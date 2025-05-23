import { NextResponse } from 'next/server'
import { extractKeywords, shiftLastGeneratedBack } from '@/lib/keywordExtractor'

export async function POST(req: Request) {
  try {
    const { content } = await req.json()

    // Force cache to expire by shifting the timestamp back 30 minutes
    const THIRTY_MINUTES = 1000 * 60 * 2
    shiftLastGeneratedBack(THIRTY_MINUTES)

    // Now extract keywords (this will regenerate them)
    const keywords = await extractKeywords(content || '')
    return NextResponse.json({ keywords })
  } catch (error) {
    console.error('Error in /api/keywords:', error)
    return NextResponse.json({ keywords: [] }, { status: 500 })
  }
}