let lastGenerated = 0
let cachedKeywords: string[] = []
let toggle = false // Used to alternate between the two keyword sets

export async function extractKeywords(content: string): Promise<string[]> {
  const now = Date.now()
  const refreshInterval = 1000 * 60 * 2 // 30 minutes

  if (now - lastGenerated > refreshInterval || cachedKeywords.length === 0) {
    cachedKeywords = await fetchOrGenerateKeywords(content)
    lastGenerated = now
  }

  return cachedKeywords
}

export async function fetchOrGenerateKeywords(content: string): Promise<string[]> {
  // Alternate between two keyword arrays
  toggle = !toggle
  return toggle
    ? ['updated', 'cybersecurity', 'test1','intel', 'automation']
    : ['refreshed', 'defense', 'security','test2', 'platform']
}

// ✅ Setter to force cache expiry
export function shiftLastGeneratedBack(ms: number) {
  lastGenerated -= ms
}