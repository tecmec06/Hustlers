import { Banner } from "@/components/Banner"
import Hero from "@/components/Hero"
import Navbar from "@/components/navbar"
import ResourceSection from "@/components/ResourceSection"
import { CywarePlatform } from "@/components/Architecture/Architecture"
import panelData from './data/panelData'
import ThreatIntelPanel from "@/components/ThreatIntelPanel"
export default function Home() {
  return (
<main className="relative h-[675px]">
  <div className="absolute inset-0 bg-gradient-to-r from-[#002c8c] via-[#5b00a7] to-[#00a58d]" />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
  <div className="relative z-10">
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
  </div>
</main>
  )
}
