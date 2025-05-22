'use client';

import React from 'react';
import LogoCarousel from './LogoCarousel';
export default function Hero() {
  return (
    <section className="relative z-10 py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          {/* Left Content */}
          <div className="lg:w-1/2 w-full text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Outpace Threats with <br />
              <span className="text-[#c9d2f1]">AI-Powered Threat Intel</span> <br />
              Management
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl">
              Secure your organization with our Continuous Threat Operationalization Platform that operationalizes intelligence and boosts collaboration
            </p>

            <div className="flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-full bg-[#004e3c] hover:bg-[#00624d] text-white px-6 py-3 text-sm font-medium transition">
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
      <div className="hidden lg:block absolute top-10 right-[-10px] h-[480px] w-[620px] rounded-xl overflow-hidden border border-gray-900 shadow-2xl">
        <img
          src="https://go.cyware.com/hs-fs/hubfs/Screenshot%202025-02-12%20at%204.21.58%20PM.png?width=1500&height=1272&name=Screenshot%202025-02-12%20at%204.21.58%20PM.png"
          alt="AI Threat Intel"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Logo Carousel */}
      <div className="mt-16">
        <LogoCarousel />
      </div>
    </section>
  );
}
