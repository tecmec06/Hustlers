'use client'

import { useEffect, useState } from 'react'

const REFRESH_INTERVAL = 30 // 30 mins
const KEYWORDS_KEY = 'cachedKeywords'
const DESCRIPTION_KEY = 'cachedDescription'
const LAST_GENERATED_KEY = 'lastGenerated'

export function useKeywordData() {
  const [keywords, setKeywords] = useState<string[]>([])
  const [description, setDescription] = useState<string>('')

  useEffect(() => {
    const now = Date.now()
    const lastGenerated = parseInt(localStorage.getItem(LAST_GENERATED_KEY) || '0', 10)
    const isExpired = now - lastGenerated > REFRESH_INTERVAL

    if (!isExpired) {
      setKeywords(JSON.parse(localStorage.getItem(KEYWORDS_KEY) || '[]'))
      setDescription(localStorage.getItem(DESCRIPTION_KEY) || '')
      return
    }

    const fetchData = async () => {
      try {
        const newKeywords = await generateAndFetchKeywords()
        const newDesc = await generateDescriptionBasedOnKeywords(newKeywords)

        localStorage.setItem(KEYWORDS_KEY, JSON.stringify(newKeywords))
        localStorage.setItem(DESCRIPTION_KEY, newDesc)
        localStorage.setItem(LAST_GENERATED_KEY, now.toString())

        setKeywords(newKeywords)
        setDescription(newDesc)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()
  }, [])

  return { keywords, description }
}

async function generateAndFetchKeywords(): Promise<string[]> {
    console.log('Generating and fetching keywords')
  const apiKey = "AIzaSyCc_Koy5ug3QBwjQUFkltt7X3GIaGgLiwY"
  console.log('API Key:', apiKey)   
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`

  const prompt = `
    Identify and return the 5 most recent and highly trending SEO keywords relevant to a cyber threat intelligence platform as of this week.
    Analyze current cybersecurity news, search trends, and emerging technologies to determine the most relevant keywords.
    Only return the final keywords, formatted as a simple, comma-separated list without numbering or explanation.
  `.trim()

  const requestBody = { contents: [{ parts: [{ text: prompt }] }] }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody)
  })

  const json = await res.json()
  console.log('JSON:', json)
  const rawText = json?.candidates?.[0]?.content?.parts?.[0]?.text ?? ''
  return rawText.split(',').map((kw: string) => kw.trim().toLowerCase()).filter(Boolean)
}

async function generateDescriptionBasedOnKeywords(keywords: string[]): Promise<string> {
  const apiKey = "AIzaSyCc_Koy5ug3QBwjQUFkltt7X3GIaGgLiwY"
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`

  const prompt = `
    Based on the following SEO keywords: ${keywords.join(', ')},
    generate a single, compelling, SEO-optimized meta description (under 160 characters)
    for a cyber threat intelligence platform.
    Return only the final description.
  `.trim()

  const requestBody = { contents: [{ parts: [{ text: prompt }] }] }

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody)
  })

  const json = await res.json()
  return json?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || ''
}
