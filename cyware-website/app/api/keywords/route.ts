import { NextResponse } from 'next/server'
import { extractKeywords} from '@/lib/keywordExtractor'

const THIRTY_MINUTES_MS = 35 * 60 * 1000

export async function POST(req: Request) {
  try {
    // Invalidate keyword cache by going back 30 minutes
    // shiftLastGeneratedBack(THIRTY_MINUTES_MS)

    // Generate fresh keywords
    const [keywords, description, quote] = await extractKeywords()

    return NextResponse.json({ success: true, keywords, description, quote }, { status: 200 })
  } catch (error: unknown) {
    console.error('[API] /api/keywords - Keyword generation failed:', error)

    return NextResponse.json(
      { success: false, error: 'Failed to generate keywords', keywords: [] },
      { status: 500 }
    )
  }
}
