'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Check, ArrowRight, ChevronRight } from 'lucide-react'
import LogoCarousel from '@/components/LogoCarousel'
import { partnerLogos } from '@/lib/data/partnerLogos'
import { Banner } from '@/components/Banner'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#070707] via-[#0a0a2e] to-[#1330b9] text-white">
      {/* Top banner */}
      <Banner />
      <Navbar />    
      {/* Main Section */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-12 grid md:grid-cols-2 gap-10 items-start">
        {/* Left Content */}
        <section>
          <h2 className="text-5xl font-bold mb-6">See Cyware in Action</h2>
          <p className="text-gray-300 text-lg mb-8">
            Our cybersecurity experts will show you how Cyware enables you to:
          </p>

          <ul className="space-y-4">
            {[
              'Operationalize Threat Intelligence',
              'Hyper-Orchestrate and Automate Threat Response',
              'Collaborate and Share Intelligence Securely',
            ].map((text, i) => (
              <li key={i} className="flex items-start">
                <div className="bg-[#00c689] rounded-full p-1 mr-3 mt-1">
                  <Check className="h-5 w-5 text-black" />
                </div>
                <span className="text-lg">{text}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <LogoCarousel logos={partnerLogos} />
          </div>
        </section>

        {/* Right Form */}
        <section className="bg-[#0c0c1c] border border-gray-800 rounded-2xl p-6 shadow-lg">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {['First Name*', 'Last Name*'].map((placeholder, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={placeholder}
                  required
                  className="input"
                />
              ))}
            </div>
            <input type="email" placeholder="Work Email*" required className="input" />
            <input type="text" placeholder="Organization*" required className="input" />

            <div className="relative">
              <select
                required
                defaultValue=""
                className="input appearance-none pr-10"
              >
                <option value="" disabled>Region*</option>
                <option value="na">North America</option>
                <option value="eu">Europe</option>
                <option value="asia">Asia Pacific</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>

            <input type="text" placeholder="Job Title" className="input" />
            <input type="tel" placeholder="Phone number" className="input" />

            <textarea
              placeholder="Comments"
              className="input rounded-2xl min-h-[80px]"
            />

            <button
              type="submit"
              className="w-full bg-[#1a1a2f] border border-gray-700 rounded-full px-4 py-3 hover:bg-[#222244] transition flex items-center justify-center group"
            >
              Submit <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12 grid md:grid-cols-4 gap-8">
            {/* Logo & Subscribe */}
            <div>
              <div className="flex items-center mb-6">
                <span className="text-[#004efc] text-3xl font-bold mr-2">✧</span>
                <span className="text-white font-bold text-xl">CYWARE</span>
              </div>
              <p className="text-gray-400 mb-4">Get the latest cyber intel insights - subscribe now!</p>
              <form className="space-y-3">
                <input type="email" placeholder="Email*" className="input" required />
                <button
                  type="submit"
                  className="w-full border border-gray-700 text-white px-6 py-2 rounded-full flex items-center hover:bg-black/30 group transition"
                >
                  Subscribe <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              {/* Certifications */}
              <div className="grid grid-cols-4 gap-3 mt-6">
                {Array(8).fill(0).map((_, i) => (
                  <div key={i} className="border border-gray-700 rounded-full p-3 flex justify-center hover:border-gray-500 transition-colors">
                    <Image src="/placeholder.svg" alt="Cert" width={24} height={24} loading="lazy" />
                  </div>
                ))}
              </div>
            </div>

            {/* Collapsible Footer Links */}
            {[
              {
                title: 'Platform',
                links: [
                  'Continuous Threat Operationalization',
                  'Threat Intel Management',
                  'Threat Feeds & CTI Enrichment',
                  'Compromised Credentials',
                  'Malware Sandbox',
                  'Security Advisories',
                ],
              },
              {
                title: 'Resources',
                links: [
                  'Blog',
                  'White Paper',
                  'Case Studies',
                  'Threat Briefings',
                ],
              },
              {
                title: 'Company',
                links: [
                  'About Cyware',
                  'Careers',
                  'News & Announcements',
                  'Security Compliances',
                  'Support',
                  'Contact Us',
                ],
              },
            ].map((section, i) => (
              <details key={i} className="group open:mb-4">
                <summary className="text-white font-bold text-lg cursor-pointer mb-2 group-open:mb-3">
                  {section.title}
                </summary>
                <ul className="space-y-2">
                  {section.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href="#" className="text-gray-400 hover:text-white transition">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>

          {/* Bottom footer row */}
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex space-x-6">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms & Conditions</Link>
            </div>
            <div>© 2025 Cyware. All rights reserved.</div>
            <div className="flex space-x-3">
              {['YouTube', 'LinkedIn', 'Twitter'].map((alt, i) => (
                <Link key={i} href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                  <Image src="/placeholder.svg" alt={alt} width={20} height={20} loading="lazy" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
