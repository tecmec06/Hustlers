let lastGenerated = 0
let cachedKeywords: string[] = []
let cachedDescription: string = ''

export async function extractKeywords(): Promise<[string[], string]> {
  const now = Date.now()
  const refreshInterval = 1000 * 60 * 30 // 30 minutes

  if (now - lastGenerated > refreshInterval || cachedKeywords.length === 0) {
    cachedKeywords = await generateAndFetchKeywords()
    cachedDescription = await generateDescriptionBasedOnKeywords(cachedKeywords)
    lastGenerated = now
  }

  return [cachedKeywords, cachedDescription]
}


export async function generateAndFetchKeywords(): Promise<string[]> {
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set in environment variables')
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`

  const prompt = `
    Identify and return the 5 most recent and highly trending SEO keywords relevant to a cyber threat intelligence platform as of this week.
    Analyze current cybersecurity news, search trends, and emerging technologies to determine the most relevant keywords.
    Only return the final keywords, formatted as a simple, comma-separated list without numbering or explanation.
  `.trim()

  const requestBody = {
    contents: [{ parts: [{ text: prompt }] }]
  }

  try {
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

    const keywords = rawText
      .split(',')
      .map((kw: string) => kw.trim().toLowerCase())
      .filter(Boolean)

    // console.log('[Generated Keywords]', keywords)

    if (keywords.length === 0) {
      throw new Error('No keywords generated or unexpected format from Gemini API.')
    }

    return keywords
  } catch (error: unknown) {
    console.error('Keyword generation failed:', error)
    throw new Error('Failed to fetch trending keywords.')
  }
}

// Setter to force cache expiry
export function shiftLastGeneratedBack(ms: number) {
  lastGenerated -= ms
}

export async function generateDescriptionBasedOnKeywords(cachedKeywords: string[]): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set in environment variables')
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`

  const prompt = `
    Based on the following SEO keywords: ${cachedKeywords.join(', ')},
    generate a single, compelling, SEO-optimized meta description (under 160 characters)
    for a cyber threat intelligence platform.
    The description should include or align with these keywords and be attractive to potential users searching on Google.
    Return only the final description without additional commentary.
  `.trim()

  const requestBody = {
    contents: [{ parts: [{ text: prompt }] }]
  }

  try {
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

    return rawText.trim()
  } catch (error: unknown) {
    console.error('Description generation failed:', error)
    throw new Error('Failed to generate SEO meta description.')
  }
}
