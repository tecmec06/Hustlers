import NodeCache from 'node-cache'

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
  globalForQuoteCache.refreshInterval = parseInt(process.env.QUOTE_REFRESH_INTERVAL || '60', 10)
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

export function getQuote(): string {
  const cache = globalForQuoteCache.quoteCache!
  const cached = cache.get<string>(QUOTE_KEY)
  if (cached) {
    console.log('Serving cached quote:', cached)
    return cached
  }

  const newQuote = quotes[Math.floor(Math.random() * quotes.length)]
  cache.set(QUOTE_KEY, newQuote)
  console.log('Generated new quote:', newQuote)
  return newQuote
}

export function updateRefreshInterval(newTTL: number) {
  console.log(`Quote refresh interval updated to ${newTTL}s`)
  globalForQuoteCache.refreshInterval = newTTL
  globalForQuoteCache.quoteCache = createCache(newTTL)
}

