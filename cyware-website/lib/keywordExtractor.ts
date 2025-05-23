let cachedKeywords: string[] = []
let lastGenerated = 0

export async function extractKeywords(content: string): Promise<string[]> {
  const now = Date.now()
  const refreshInterval = 1000 * 60 * 30 // 30 minutes

  if (now - lastGenerated > refreshInterval || cachedKeywords.length === 0) {
    // Replace with actual logic or external API call
    cachedKeywords = await fetchOrGenerateKeywords(content)
    lastGenerated = now
  }

  return cachedKeywords
}

async function fetchOrGenerateKeywords(content: string): Promise<string[]> {
  // Simulate real NLP/ML/AI extraction logic here
  return ['updated', 'cybersecurity', 'intel','testing', 'automation']
}