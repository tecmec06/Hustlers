import NodeCache from 'node-cache'

// In memory cache for quotes, will be cleared once server restarts
const SEVEN_DAYS_IN_SECONDS = 7 * 24 * 60 * 60
const refreshInterval = parseInt(process.env.QUOTE_REFRESH_INTERVAL || SEVEN_DAYS_IN_SECONDS.toString(), 10)
const quoteCache = new NodeCache({ stdTTL: refreshInterval })

const QUOTE_KEY = 'currentQuote'

// Dummy quote source (replace with API/db logic)
const quoteList = [
  "Security is a process, not a product.",
  "Cybersecurity is much more than a matter of IT.",
  "The best defense is a good offense.",
  "You are only as strong as your weakest link.",
  "Encryption is not a crime."
]

function getRandomQuote() {
  const index = Math.floor(Math.random() * quoteList.length)
  return quoteList[index]
}

// Exposed function
export function getQuote(): string {
  const cachedQuote = quoteCache.get<string>(QUOTE_KEY)
  if (cachedQuote) return cachedQuote

  const newQuote = getRandomQuote()
  quoteCache.set(QUOTE_KEY, newQuote)
  return newQuote
}
