'use client';

import React from 'react';
import LogoCarousel from './LogoCarousel';
import { partnerLogos } from '@/lib/data/partnerLogos';
import { useTypewriter } from '../app/hooks/useTypewriter'

export default function Hero() {
  const fullText = 'Outpace Threats with AI-Powered Threat Intel Management'
  const typedText = useTypewriter(fullText, 25)

  const specialPhrase = 'AI-Powered Threat Intel'
  const specialStart = fullText.indexOf(specialPhrase)
  const specialEnd = specialStart + specialPhrase.length

  return (
    <section className="relative z-10 py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 w-full text-white">
            <div className="min-h-[11.5rem] mb-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {typedText.length <= specialStart ? (
                  <>
                    {typedText}
                    <span className="animate-blink inline-block w-[1px] h-[1em] bg-white ml-1 align-bottom" />
                  </>
                ) : typedText.length <= specialEnd ? (
                  <>
                    {fullText.slice(0, specialStart)}
                    <br />
                    <span className="text-[#c9d2f1]">
                      {typedText.slice(specialStart)}
                      <span className="animate-blink inline-block w-[1px] h-[1em] bg-[#c9d2f1] ml-1 align-bottom" />
                    </span>
                  </>
                ) : (
                  <>
                    {fullText.slice(0, specialStart)}
                    <br />
                    <span className="text-[#c9d2f1]">
                      {fullText.slice(specialStart, specialEnd)}
                    </span>
                    <br />
                    {typedText.slice(specialEnd)}
                    <span className="animate-blink inline-block w-[1px] h-[1em] bg-white ml-1 align-bottom" />
                  </>
                )}
              </h1>
            </div>

            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl">
              Secure your organization with our Continuous Threat Operationalization Platform that operationalizes intelligence and boosts collaboration
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="border border-white/60 flex items-center gap-2 rounded-full bg-[#004e3c] hover:bg-[#00624d] text-white px-6 py-3 text-sm font-medium transition">
                Get a Demo
                <span className="inline-block text-xl leading-none">→</span>
              </button>
              <button className="flex items-center gap-2 rounded-full border border-white/60 text-white hover:bg-white/10 px-6 py-3 text-sm font-medium transition">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Image Box */}
      <div className="hidden lg:block absolute top-10 right-[-10px] h-[420px] w-[620px] rounded-xl overflow-hidden border border-gray-900 shadow-2xl">
        <img
          src="https://go.cyware.com/hs-fs/hubfs/Screenshot%202025-02-12%20at%204.21.58%20PM.png?width=1500&height=1272&name=Screenshot%202025-02-12%20at%204.21.58%20PM.png"
          alt="AI Threat Intel"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Logo Carousel */}
      <div className="mt-16">
        <LogoCarousel logos={partnerLogos} />
      </div>
    </section>
  )
}
