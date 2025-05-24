import { NextResponse } from 'next/server'

const SERPAPI_KEY = process.env.SERPAPI_KEY
if (!SERPAPI_KEY) throw new Error('SERPAPI_KEY not set in environment')

// Fetch trend data from SerpAPI
async function fetchTrendData(keyword: string) {
  const url = `https://serpapi.com/search.json?engine=google_trends&q=${encodeURIComponent(
    keyword
  )}&hl=en&date=today 12-m&data_type=TIMESERIES&api_key=${SERPAPI_KEY}`

  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`SerpAPI error for keyword "${keyword}": ${res.statusText}`)
  }

  const json = await res.json()
  return json
}

// Extract average score from trend timeline
function calculateAverageInterest(trendData: any): number {
  const timeline = trendData?.interest_over_time?.timeline_data ?? []

  if (!timeline.length) {
    console.warn('No timeline data found.')
    return 0
  }

  let totalSum = 0
  let totalCount = 0

  for (const item of timeline) {
    const values = item?.values
    if (!Array.isArray(values) || values.length === 0) continue

    for (const val of values) {
      const extracted = typeof val.extracted_value === 'number'
        ? val.extracted_value
        : parseFloat(val.extracted_value)

      if (!isNaN(extracted)) {
        totalSum += extracted
        totalCount++
      }
    }
  }

  return totalCount > 0 ? totalSum / totalCount : 0
}



// Extract scores over time for a keyword
function extractScoresForKeyword(trendData: any): { date: string, score: number }[] {
  const timeline = trendData?.interest_over_time?.timeline_data ?? []

  return timeline.map((item: any) => {
    const date = item?.formatted_time || item?.time || ''
    const values = item?.value ?? []
    const score = typeof values[0] === 'number' ? values[0] : 0

    return {
      date,
      score,
    }
  })
}

// GET handler
export async function GET() {
  try {
    const keywords = ['cybersecurity', 'dark web', 'vulnerability']

    let combinedScoreSum = 0
    let combinedScoreCount = 0

    const results = await Promise.all(
      keywords.map(async (kw) => {
        try {
          const data = await fetchTrendData(kw)
          const averageInterest = calculateAverageInterest(data)

          // Accumulate for global average
          combinedScoreSum += averageInterest
          combinedScoreCount++

          return {
            keyword: kw,
            averageInterest,
          }
        } catch (err) {
          console.error(`Error processing keyword "${kw}":`, err)
          return {
            keyword: kw,
            averageInterest: 0,
            scores: [],
          }
        }
      })
    )
    return NextResponse.json({
      results
    })
  } catch (err) {
    console.error('[Trend API Error]', err)
    return NextResponse.json({ error: 'Failed to fetch trend data' }, { status: 500 })
  }
}
