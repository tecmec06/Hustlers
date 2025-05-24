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


export async function generateAndFetchKeywords(): Promise<string[]> {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) throw new Error('GEMINI_API_KEY is not set')

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`
  const prompt = `
    Identify and return 5 trending SEO keywords relevant to a cyber threat intelligence platform.
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

  if (keywords.length === 0) throw new Error('No keywords generated')
  return keywords
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
