
let lastUpdated = 0
let currentAlts: Record<string, string> = {}
let toggleAlt = false

const refreshInterval = 1000 * 60 * 5 // 30 minutes

export async function getImageAlts(): Promise<Record<string, string>> {
  const now = Date.now()

  if (now - lastUpdated > refreshInterval || Object.keys(currentAlts).length === 0) {
    currentAlts = await fetchOrGenerateAlts()
    lastUpdated = now
  }

  return currentAlts
}

// Swaps between two alt maps to simulate changes for testing
export async function fetchOrGenerateAlts(): Promise<Record<string, string>> {
  toggleAlt = !toggleAlt

  return toggleAlt
    ? {
        'orchestrate' : 'Island supremacy',
        'cyware': 'Cyware Supremacy',
      }
    : {
        'orchestrate' : 'Playbook supremacy',
        'cyware': 'Hail Cyware',
      }
}

// For testing – shift update time backward to force refresh
export function shiftLastUpdatedBack(ms: number) {
  lastUpdated -= ms
}