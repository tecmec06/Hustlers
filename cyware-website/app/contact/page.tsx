import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronRight, Check, ArrowRight } from "lucide-react"
import LogoCarousel from "./components/logo-carousel"

export default function Home() {
  const partnerLogos = [
    { name: "UBER", src: "/logos/uber.svg?height=40&width=80" },
    { name: "OTIS", src: "/logos/otis.svg?height=40&width=80" },
    { name: "ARVEST", src: "/logos/arvest.svg?height=40&width=80" },
    { name: "PWC", src: "/logos/pwc.svg?height=80&width=80" },
    { name: "OPTIV", src: "/logos/optiv.png?height=100&width=80" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#070707] via-[#0a0a2e] to-[#1330b9] relative overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-15"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 78, 252, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 78, 252, 0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Top banner */}
      <div className="bg-[#004efc] text-white py-2 px-4 text-center text-sm flex justify-center items-center space-x-4">
        <div className="flex items-center">
          <span className="font-bold mr-1">RSAC</span>
          <span className="text-xs opacity-80">2025 CONFERENCE</span>
        </div>
        <span>Register now to meet Cyware at the ISAC 2025 Annual Meeting</span>
        <Link href="https://www.rsaconference.com/usa" className="flex items-center hover:underline">
          Check out <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      {/* Navigation */}
      <header className="border border-gray-800/50 rounded-full px-4 py-2 mx-auto my-4 max-w-6xl w-full flex items-center justify-between bg-black/20 backdrop-blur-sm z-10">
        <div className="flex items-center">
          <Link href="/" className="mr-6">
            <div className="flex items-center">
              <div className="text-[#004efc] font-bold text-2xl mr-1">
                <span className="text-3xl">✧</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">CYWARE</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-1">
            <div className="group relative">
              <Link href="#" className="text-white px-3 py-2 flex items-center hover:text-[#8ea2ff] transition-colors">
                Platform <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full mt-1 w-64 bg-black/90 backdrop-blur-md border border-gray-800 rounded-xl p-2 hidden group-hover:block z-50">
                <div className="py-1">
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 rounded-lg">
                    Continuous Threat Operationalization
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 rounded-lg">
                    Unified Threat Intel Management
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 rounded-lg">
                    Threat Intel Platform & Feeds
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link href="#" className="text-white px-3 py-2 flex items-center hover:text-[#8ea2ff] transition-colors">
                Solutions <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full mt-1 w-64 bg-black/90 backdrop-blur-md border border-gray-800 rounded-xl p-2 hidden group-hover:block z-50">
                <div className="py-1">
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 rounded-lg">
                    Threat Intelligence
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 rounded-lg">
                    Security Orchestration
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 rounded-lg">
                    Incident Response
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link href="#" className="text-white px-3 py-2 flex items-center hover:text-[#8ea2ff] transition-colors">
                Partners <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full mt-1 w-64 bg-black/90 backdrop-blur-md border border-gray-800 rounded-xl p-2 hidden group-hover:block z-50">
                <div className="py-1">
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 rounded-lg">
                    Channel Partners
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 rounded-lg">
                    Technology Alliances
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 rounded-lg">
                    MSSPs
                  </Link>
                </div>
              </div>
            </div>
            <div className="group relative">
              <Link href="#" className="text-white px-3 py-2 flex items-center hover:text-[#8ea2ff] transition-colors">
                Resources <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full mt-1 w-64 bg-black/90 backdrop-blur-md border border-gray-800 rounded-xl p-2 hidden group-hover:block z-50">
                <div className="py-1">
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 rounded-lg">
                    Blog
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 rounded-lg">
                    White Papers
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 rounded-lg">
                    Case Studies
                  </Link>
                </div>
              </div>
            </div>
            <Link href="#" className="text-white px-3 py-2 flex items-center hover:text-[#8ea2ff] transition-colors">
              <span className="flex items-center">
                <span className="mr-1 text-[#004efc]">✧</span> Quarterback AI
              </span>
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="#"
            className="bg-[#00c689] text-white px-4 py-2 rounded-full flex items-center hover:bg-opacity-90 transition"
          >
            Get a Demo <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
          <div className="group relative">
            <Link href="#" className="text-white px-3 py-2 flex items-center hover:text-[#8ea2ff] transition-colors">
              About Cyware <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute right-0 top-full mt-1 w-64 bg-black/90 backdrop-blur-md border border-gray-800 rounded-xl p-2 hidden group-hover:block z-50">
              <div className="py-1">
                <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 rounded-lg">
                  Company
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 rounded-lg">
                  Leadership
                </Link>
                <Link href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/50 rounded-lg">
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-12 grid md:grid-cols-2 gap-8 items-center z-10">
        <div>
          <h1 className="text-5xl font-bold text-white mb-6">See Cyware in Action</h1>
          <p className="text-gray-300 text-lg mb-8">
            Our cybersecurity experts will show you how Cyware enables you to:
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-[#00c689] rounded-full p-1 mr-3 mt-1">
                <Check className="h-5 w-5 text-black" />
              </div>
              <span className="text-white text-lg">Operationalize Threat Intelligence</span>
            </div>
            <div className="flex items-start">
              <div className="bg-[#00c689] rounded-full p-1 mr-3 mt-1">
                <Check className="h-5 w-5 text-black" />
              </div>
              <span className="text-white text-lg">Hyper-Orchestrate and Automate Threat Response</span>
            </div>
            <div className="flex items-start">
              <div className="bg-[#00c689] rounded-full p-1 mr-3 mt-1">
                <Check className="h-5 w-5 text-black" />
              </div>
              <span className="text-white text-lg">Collaborate and Share Intelligence Securely</span>
            </div>
          </div>

          <div className="mt-12">
            <LogoCarousel logos={partnerLogos} />
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,78,252,0.1)]">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First Name*"
                  className="w-full bg-black/50 border border-gray-700/50 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c689] focus:border-transparent transition-all"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="w-full bg-black/50 border border-gray-700/50 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c689] focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                placeholder="Work Email*"
                className="w-full bg-black/50 border border-gray-700/50 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c689] focus:border-transparent transition-all"
                required
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Organization*"
                className="w-full bg-black/50 border border-gray-700/50 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c689] focus:border-transparent transition-all"
                required
              />
            </div>


            <div>
              <div className="relative">
                <select
                  className="w-full bg-black/50 border border-gray-700 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c689] appearance-none"
                  required
                  defaultValue="" // Use defaultValue here instead of selected on option
                >
                  <option value="" disabled>
                    Region*
                  </option>
                  <option value="na">North America</option>
                  <option value="eu">Europe</option>
                  <option value="asia">Asia Pacific</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div>
              <input
                type="text"
                placeholder="Job Title"
                className="w-full bg-black/50 border border-gray-700/50 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c689] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full bg-black/50 border border-gray-700/50 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c689] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <textarea
                placeholder="Comments"
                className="w-full bg-black/50 border border-gray-700/50 rounded-2xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c689] focus:border-transparent transition-all min-h-[80px]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black/50 border border-gray-700/50 rounded-full px-4 py-3 text-white hover:bg-black/70 transition flex items-center justify-center group"
            >
              Submit <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/30 pt-16 pb-8 mt-16 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="text-[#004efc] font-bold text-2xl mr-1">
                  <span className="text-3xl">✧</span>
                </div>
                <span className="text-white font-bold text-xl tracking-tight">CYWARE</span>
              </div>
              <p className="text-gray-400 mb-4">Get the latest cyber intel insights - subscribe now!</p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full bg-black/50 border border-gray-700/50 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00c689] focus:border-transparent transition-all"
                  required
                />
                <button
                  type="submit"
                  className="bg-transparent border border-gray-700/50 text-white px-6 py-2 rounded-full flex items-center hover:bg-black/30 transition group"
                >
                  Subscribe <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <div className="grid grid-cols-4 gap-4 mt-8">
                <div className="border border-gray-700/50 rounded-full p-3 flex items-center justify-center hover:border-gray-500 transition-colors">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Certification" width={24} height={24} />
                </div>
                <div className="border border-gray-700/50 rounded-full p-3 flex items-center justify-center hover:border-gray-500 transition-colors">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Certification" width={24} height={24} />
                </div>
                <div className="border border-gray-700/50 rounded-full p-3 flex items-center justify-center hover:border-gray-500 transition-colors">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Certification" width={24} height={24} />
                </div>
                <div className="border border-gray-700/50 rounded-full p-3 flex items-center justify-center hover:border-gray-500 transition-colors">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Certification" width={24} height={24} />
                </div>
                <div className="border border-gray-700/50 rounded-full p-3 flex items-center justify-center hover:border-gray-500 transition-colors">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Certification" width={24} height={24} />
                </div>
                <div className="border border-gray-700/50 rounded-full p-3 flex items-center justify-center hover:border-gray-500 transition-colors">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Certification" width={24} height={24} />
                </div>
                <div className="border border-gray-700/50 rounded-full p-3 flex items-center justify-center hover:border-gray-500 transition-colors">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Certification" width={24} height={24} />
                </div>
                <div className="border border-gray-700/50 rounded-full p-3 flex items-center justify-center hover:border-gray-500 transition-colors">
                  <Image src="/placeholder.svg?height=24&width=24" alt="Certification" width={24} height={24} />
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Platform</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Continuous Threat Operationalization Platform
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Unified Threat Intel Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Threat Intel Platform & Feeds
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    CTI Enrichment
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Compromised Credentials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Malware Sandbox
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Security Advisories
                  </Link>
                </li>
              </ul>

              <h3 className="text-white font-bold text-lg mt-8 mb-4">Partners</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Channel Partners
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Technology Alliances
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    MSSPs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Open APIs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    CywareOne Login
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    White Paper
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Industry Reports
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Webinar & Events
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Threat Briefings
                  </Link>
                </li>
              </ul>

              <h3 className="text-white font-bold text-lg mt-8 mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    About Cyware
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    News & Announcements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Security Compliances
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Technical Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Hyper Orchestration & Automation</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Threat Actioning Platform
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Low Code / No Code Playbooks
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Case Management
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Threat Remediation & Response
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cyber Fusion
                  </Link>
                </li>
              </ul>

              <h3 className="text-white font-bold text-lg mt-8 mb-4">Threat Intel Sharing & Collaboration</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Analyst Collaboration Platform
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    ISAC/ISAO Sharing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    ISAC-to-ISAC Sharing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Supplier Sharing Network
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Automated Collective Defense
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800/30 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
            </div>
            <div className="text-gray-400 text-sm">© Copyright 2025, All Rights Reserved by Cyware</div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Image src="/placeholder.svg?height=20&width=20" alt="YouTube" width={20} height={20} />
              </Link>
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Image src="/placeholder.svg?height=20&width=20" alt="LinkedIn" width={20} height={20} />
              </Link>
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors">
                <Image src="/placeholder.svg?height=20&width=20" alt="Twitter" width={20} height={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
