import NodeCache from 'node-cache'
import {globalKeywordCache} from './keywordExtractor'

// Shared cache holder in global context (avoids re-instantiation)
const globalForQuoteCache = globalThis as unknown as {
  quoteCache?: NodeCache
  refreshInterval?: number
}

function createCache(ttl: number) {
  return new NodeCache({ stdTTL: ttl })
}

// Initialize once
if (!globalForQuoteCache.quoteCache) {
  globalForQuoteCache.refreshInterval = parseInt(process.env.QUOTE_REFRESH_INTERVAL || '1', 10)
  globalForQuoteCache.quoteCache = createCache(globalForQuoteCache.refreshInterval)
}

const QUOTE_KEY = 'currentQuote'
const quotes = [
  "Security is a process, not a product.",
  "Cybersecurity is much more than a matter of IT.",
  "The best defense is a good offense.",
  "You are only as strong as your weakest link.",
  "Encryption is not a crime."
]

async function generateQuote(): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set in environment variables')
  }

  const keywords = globalKeywordCache.cachedKeywords ?? ['threat intelligence','IOC management','cyber threat detection','STIX/TAXII integration','real-time threat analysis']

  const keywordList = keywords.join(', ')

  const prompt = `
    Generate a concise, powerful quote related to cybersecurity threat intelligence that creatively incorporates or is inspired by the following keywords: ${keywordList}.
    The quote should be professional, original, and thought-provoking — suitable for a cybersecurity-focused audience such as analysts, CISOs, and threat hunters.
    Do not explain the quote. Just return the quote in plain text.
  `.trim()

  const requestBody = {
    contents: [{ parts: [{ text: prompt }] }]
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`

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

    const quote = json?.candidates?.[0]?.content?.parts?.[0]?.text?.trim()

    if (!quote) {
      throw new Error('No quote generated or unexpected format from Gemini API.')
    }

    console.log('Kyewowrd', keywordList)

    console.log('New quote generated:', quote)

    return quote

  } catch (error: unknown) {
    console.error('Quote generation failed:', error)
    throw new Error('Failed to fetch quote.')
  }
}

export async function getQuote(): Promise<string> {
  const cache = globalForQuoteCache.quoteCache!
  const cached = cache.get<string>(QUOTE_KEY)
  if (cached) {
    return cached
  }

  const newQuote = await generateQuote()
  cache.set(QUOTE_KEY, newQuote)
  return newQuote
}

export function updateRefreshInterval(newTTL: number) {
  globalForQuoteCache.refreshInterval = newTTL
  globalForQuoteCache.quoteCache = createCache(newTTL)
}

