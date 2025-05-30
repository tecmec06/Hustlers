import { Metadata } from 'next'
import Navbar from "@/components/navbar"
import Hero from "@/components/Hero"
import ResourceSection from "@/components/ResourceSection"
import { CywarePlatform } from "@/components/Architecture/Architecture"
import panelData from './data/panelData'
import ThreatIntelPanel from "@/components/ThreatIntelPanel"
import { extractKeywords } from '@/lib/keywordExtractor'
import { CywareQuarterback } from '@/components/cyware-quarterback/cyware-quarterback'
import { CywareStatsSection } from '@/components/cyware-stat-section'
import DynamicQuote from '@/components/DynamicQuote'

// ✅ Enable ISR - regenerate metadata every 60s
export const revalidate = 60

export async function generateMetadata(): Promise<Metadata> {
  const [keywords, description, quote] = await extractKeywords()

  return {
    title: 'Cybersecurity Automation from Cyware | Cyware',
    description,
    keywords,
  }
}

export default function Home() {
  return (
    <main className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-[#002c8c] via-[#5b00a7] to-[#00a58d]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ResourceSection />
        <CywarePlatform />
        <div className="mt-90">
          {panelData.map((panel, index) => (
            <ThreatIntelPanel key={index} {...panel} />
          ))}
        </div>
        <div className="bg-black min-h-screen">
          <CywareQuarterback />
        </div>
        <CywareStatsSection />
        <DynamicQuote />
      </div>
    </main>
  )
}
