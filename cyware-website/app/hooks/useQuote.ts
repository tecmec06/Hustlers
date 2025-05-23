'use client'

import { useEffect, useState } from 'react'

const QUOTE_KEY = 'cyware:cachedQuote'
const LAST_FETCHED_KEY = 'cyware:lastQuoteGenerated'
const DEFAULT_TTL = 7  // 7 days in milliseconds

const fallbackQuotes = [
  "Security is a process, not a product.",
  "Cybersecurity is much more than a matter of IT.",
  "The best defense is a good offense.",
  "You are only as strong as your weakest link.",
  "Encryption is not a crime."
]

export function useQuote(ttl = DEFAULT_TTL) {
  const [quote, setQuote] = useState<string>('')

  useEffect(() => {
    const now = Date.now()
    const last = parseInt(localStorage.getItem(LAST_FETCHED_KEY) || '0', 10)
    const isExpired = now - last > ttl

    if (!isExpired) {
      const cached = localStorage.getItem(QUOTE_KEY)
      if (cached) {
        setQuote(cached)
        return
      }
    }

    const fetchQuote = async () => {
      try {
        // ✅ Safely parse keywords
        const storedKeywords = localStorage.getItem('cachedKeywords')
        let keywords: string[] = []

        try {
          const parsed = storedKeywords ? JSON.parse(storedKeywords) : []
          if (Array.isArray(parsed)) {
            keywords = parsed
          }
        } catch {
          console.warn('⚠️ Failed to parse cached keywords')
        }

        if (keywords.length === 0) {
          keywords = [
            'threat intelligence',
            'IOC management',
            'cyber threat detection',
            'STIX/TAXII integration',
            'real-time threat analysis'
          ]
        }

        const prompt = `
          Generate a concise, powerful quote related to cybersecurity threat intelligence that creatively incorporates or is inspired by the following keywords: ${keywords.join(', ')}.
          The quote should be professional, original, and thought-provoking — suitable for a cybersecurity-focused audience such as analysts, CISOs, and threat hunters.
          Do not explain the quote. Just return the quote in plain text.
        `.trim()

        const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "AIzaSyCc_Koy5ug3QBwjQUFkltt7X3GIaGgLiwY"
        if (!apiKey) throw new Error('API key missing')

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{
              role: 'user',
              parts: [{ text: prompt }]
            }]
          })
        })

        if (!response.ok) throw new Error(`Gemini error: ${response.statusText}`)

        const json = await response.json()
        const text = json?.candidates?.[0]?.content?.parts?.[0]?.text?.trim()

        if (text) {
          setQuote(text)
          localStorage.setItem(QUOTE_KEY, text)
          localStorage.setItem(LAST_FETCHED_KEY, now.toString())
        } else {
          throw new Error('No quote returned')
        }
      } catch (err) {
        console.error('Quote generation failed:', err)
        const fallback = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)]
        setQuote(fallback)
      }
    }

    fetchQuote()
  }, [ttl])

  return quote
}
