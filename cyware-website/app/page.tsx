'use client'
import { useEffect } from 'react'
import Head from 'next/head'
import Navbar from "@/components/navbar"
import Hero from "@/components/Hero"
import ResourceSection from "@/components/ResourceSection"
import { CywarePlatform } from "@/components/Architecture/Architecture"
import panelData from './data/panelData'
import ThreatIntelPanel from "@/components/ThreatIntelPanel"
import { CywareQuarterback } from '@/components/cyware-quarterback/cyware-quarterback'
import DynamicQuote from '@/components/DynamicQuote'
import { CywareStatsSection } from '@/components/cyware-stat-section'
import { useKeywordData } from '@/app/hooks/useKeywordData'
export const dynamic = 'force-dynamic'
import { Banner } from '@/components/Banner'

export default function Home() {
  const { keywords, description } = useKeywordData()
  useEffect(() => {
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
      if (!metaDescription) {
        metaDescription = document.createElement('meta')
        metaDescription.name = 'description'
        document.head.appendChild(metaDescription)
      }
      metaDescription.setAttribute('content', description)
    }

    if (keywords.length > 0) {
      let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.name = 'keywords'
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.setAttribute('content', keywords.join(', '))
    }
  }, [keywords, description])

  return (
    <>
    <Head>
      <title>Cybersecurity Automation from Cyware | Cyware</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
    </Head>
      <main className="relative h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002c8c] via-[#5b00a7] to-[#00a58d]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
        <div className="relative z-10">
          <p>{description}</p>
          <Banner />
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
    </>
  )
}
