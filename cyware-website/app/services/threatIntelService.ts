// Types
export interface ThreatIntelData {
  title: string
  highlightedPhrases: string[]
  buttonLabel: string
  buttonLink: string
  imageSrc: string
  reverse: boolean
  iconSrc: string
}

// Service class for threat intelligence operations
export class ThreatIntelService {
  // Fetch threat intelligence data
  static async getThreatIntelData(): Promise<ThreatIntelData> {
    try {
      const response = await fetch('/api/threat-intel')
      if (!response.ok) {
        throw new Error('Failed to fetch threat intelligence data')
      }
      return await response.json()
    } catch (error) {
      console.error('Error fetching threat intelligence data:', error)
      throw error
    }
  }

  // Submit new threat intelligence data
  static async submitThreatIntelData(data: ThreatIntelData): Promise<{ message: string; data: ThreatIntelData }> {
    try {
      const response = await fetch('/api/threat-intel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (!response.ok) {
        throw new Error('Failed to submit threat intelligence data')
      }
      return await response.json()
    } catch (error) {
      console.error('Error submitting threat intelligence data:', error)
      throw error
    }
  }
} 