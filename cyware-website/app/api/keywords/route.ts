import { NextResponse } from 'next/server'
import { extractKeywords } from '@/lib/keywordExtractor'

export async function POST(req: Request) {
  const { content } = await req.json()
  const keywords = await extractKeywords(content || '')
  return NextResponse.json({ keywords })
}