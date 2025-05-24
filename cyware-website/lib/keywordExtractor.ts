const globalKeywordCache = globalThis as any

if (!globalKeywordCache.lastGenerated) {
  globalKeywordCache.lastGenerated = 0
  globalKeywordCache.cachedKeywords = []
  globalKeywordCache.cachedDescription = ''
  globalKeywordCache.cachedQuote = ''
}

export async function extractKeywords(): Promise<[string[], string, string]> {
  const now = Date.now()
  const TTL = 60 * 1000

  if (now - globalKeywordCache.lastGenerated > TTL) {
    globalKeywordCache.cachedKeywords = await generateAndFetchKeywords()
    globalKeywordCache.cachedDescription = await generateDescriptionBasedOnKeywords(globalKeywordCache.cachedKeywords)
    globalKeywordCache.cachedQuote = await generateQuoteBasedOnKeywords(globalKeywordCache.cachedKeywords)
    globalKeywordCache.lastGenerated = now
    console.log('⏳ Regenerating SEO metadata...')
  } else {
    console.log('✅ Serving cached SEO metadata...')
  }

  return [
    globalKeywordCache.cachedKeywords,
    globalKeywordCache.cachedDescription,
    globalKeywordCache.cachedQuote,
  ]
}


async function get_top_5_keywords_based_on_trend(keywords: string[]): Promise<string[]> {
  const SERPAPI_KEY = process.env.SERPAPI_KEY
  if (!SERPAPI_KEY) throw new Error('SERPAPI_KEY not set in environment')

  const fetchTrendData = async (keyword: string) => {
    const url = `https://serpapi.com/search.json?engine=google_trends&q=${encodeURIComponent(
      keyword
    )}&hl=en&date=today 12-m&data_type=TIMESERIES&api_key=${SERPAPI_KEY}`

    const res = await fetch(url)
    if (!res.ok) {
      throw new Error(`Failed to fetch trend data for "${keyword}": ${res.statusText}`)
    }

    const json = await res.json()
    return json
  }

  const calculateAverageInterest = (trendData: any): number => {
    const timeline = trendData?.interest_over_time?.timeline_data ?? []
    let total = 0
    let count = 0

    for (const item of timeline) {
      const values = item?.values ?? []
      for (const val of values) {
        const extracted = typeof val.extracted_value === 'number'
          ? val.extracted_value
          : parseFloat(val.extracted_value)

        if (!isNaN(extracted)) {
          total += extracted
          count++
        }
      }
    }

    return count > 0 ? total / count : 0
  }

  const scoredKeywords: { keyword: string, score: number }[] = []

  for (const keyword of keywords) {
    try {
      const data = await fetchTrendData(keyword)
      const score = calculateAverageInterest(data)
      scoredKeywords.push({ keyword, score })
    } catch (err) {
      console.warn(`Skipped keyword "${keyword}" due to error:`, err)
    }
  }

  console.log("scoredKeywords", scoredKeywords)

  // Sort by score descending and return top 5
  return scoredKeywords
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(k => k.keyword)
}


export async function generateAndFetchKeywords(): Promise<string[]> {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) throw new Error('GEMINI_API_KEY is not set')

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`
  const prompt = `
    Identify and return 10 trending SEO keywords relevant to a cyber threat intelligence platform.
    Return only comma-separated keywords without explanation.
  `.trim()

  const requestBody = {
    contents: [{ parts: [{ text: prompt }] }]
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Gemini API error: ${response.status} - ${errorText}`)
  }

  const json = await response.json()
  const rawText = json?.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
  const keywords = rawText.split(',').map((kw: string) => kw.trim().toLowerCase()).filter(Boolean)

  console.log("keywords", keywords)

  const final_keywords = await get_top_5_keywords_based_on_trend(keywords)

  console.log("final_keywords", final_keywords)

  if (final_keywords.length === 0) throw new Error('No keywords generated')
  return final_keywords
}

export async function generateDescriptionBasedOnKeywords(keywords: string[]): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) throw new Error('GEMINI_API_KEY is not set')

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`
  const prompt = `
    Generate an SEO meta description (under 160 characters) for a cybersecurity platform using: ${keywords.join(', ')}.
    Only return the description without explanation.
  `.trim()

  const requestBody = {
    contents: [{ parts: [{ text: prompt }] }]
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Gemini API error: ${response.status} - ${errorText}`)
  }

  const json = await response.json()
  return json?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? ''
}

export async function generateQuoteBasedOnKeywords(keywords: string[]): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) throw new Error('GEMINI_API_KEY is not set')

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`
  const prompt = `
    Generate a short, creative quote on cybersecurity threat intelligence using: ${keywords.join(',')}.
    Do not explain. Just the quote.
  `.trim()

  const requestBody = {
    contents: [{ parts: [{ text: prompt }] }]
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Gemini API error: ${response.status} - ${errorText}`)
  }

  const json = await response.json()
  return json?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? ''
}
