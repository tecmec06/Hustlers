import { Star, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import "./architecture.css"
import Image from "next/image"

interface CywarePlatformProps {
  className?: string
}

export function CywarePlatform({ className }: CywarePlatformProps) {
  return (
    <div className={cn("cyware-platform relative w-full bg-black max-h-fit", className)}>
      {/* Grid Background */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
        {Array.from({ length: 13 }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className="col-span-full h-px bg-[#333333] opacity-30"
            style={{ gridRow: rowIndex + 1 }}
          />
        ))}
        {Array.from({ length: 13 }).map((_, colIndex) => (
          <div
            key={`col-${colIndex}`}
            className="row-span-full w-px bg-[#333333] opacity-30"
            style={{ gridColumn: colIndex + 1 }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
        {/* Heading */}
        <h1 className="mb-8 text-center text-4xl font-medium text-white md:text-5xl">
          Think Faster. Act Smarter. Stay Ahead.
        </h1>

        {/* Learn More Button */}
        <div className="mb-12 flex justify-center">
          <a
            href="#"
            className="flex items-center gap-2 rounded-full border border-white/30 px-6 py-2 text-white transition-colors hover:bg-white/10"
          >
            Learn More <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Main Platform Container with proper z-index */}
        <div className="relative mx-auto max-w-4xl">
          {/* Green Triangles - positioned behind the main container with gradient */}
          <div className="absolute left-0 top-1/2 z-0 h-3/4 w-1/2 -translate-y-1/2 -translate-x-1/2">
            <div className="h-full w-full clip-triangle-left bg-gradient-to-r from-[#00c689]/30 to-[#00c689]/10 shadow-[0_0_50px_rgba(0,198,137,0.4)]"></div>
          </div>
          <div className="absolute right-0 top-1/2 z-0 h-3/4 w-1/2 -translate-y-1/2 translate-x-1/2">
            <div className="h-full w-full clip-triangle-right bg-gradient-to-l from-[#00c689]/30 to-[#00c689]/10 shadow-[0_0_50px_rgba(0,198,137,0.4)]"></div>
          </div>
          <div className="absolute bottom-0 left-1/2 z-0 h-3/4 w-full -translate-x-1/2 translate-y-[80%]">
            <div className="mx-auto h-full w-5/6 clip-triangle-bottom-inverted bg-gradient-to-b from-[#00c689]/30 to-[#00c689]/10 shadow-[0_0_50px_rgba(0,198,137,0.4)]"></div>
          </div>

          {/* Main Platform Container - positioned above the triangles */}
          <div className="relative z-10 rounded-3xl border-2 border-[#7417e2] bg-[#0f173d] p-8 pt-16 pb-32 shadow-[0_0_30px_rgba(116,23,226,0.3)]">
            {/* Platform Title with Logo */}
            <div className="mb-12 flex items-center justify-center gap-4">
              {/* <div className="relative h-12 w-12">
                <div className="absolute inset-0 rotate-45 rounded-sm bg-[#004efc]"></div>
                <div className="absolute inset-0 rotate-[135deg] rounded-sm bg-[#a600ce] opacity-80"></div>
                <div className="absolute left-1/4 top-1/4 h-1/2 w-1/2 rotate-[225deg] rounded-sm bg-[#00c689]"></div>
              </div> */}
              <Image 
                src="/cyware-logo.svg"
                alt="Cyware Logo"
                width={48}
                height={48}
                className="h-12 w-12"
              />
              <h1 className="text-3xl font-medium text-white md:text-4xl">
                Continuous Threat Operationalization Platform
              </h1>
            </div>

            {/* Three Column Layout */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Column 1: Unified Threat Intel Management */}
              <div className="rounded-xl bg-[#212f73]/50 p-4 pb-6 shadow-[0_0_15px_rgba(33,47,115,0.5)]">
                <h2 className="mb-4 text-center text-[#dcdee4]">Data Correlation</h2>
                <div className="rounded-xl bg-black p-4 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  <h3 className="mb-6 text-center text-xl text-white">
                    Unified Threat
                    <br />
                    Intel Management
                  </h3>

                  <div className="space-y-3">
                    <div className="rounded-lg bg-[#0f173d] p-2 text-center text-[#b7c3ff]">
                      Threat Intel Platform & Feeds
                    </div>
                    <div className="rounded-lg bg-[#0f173d] p-2 text-center text-[#b7c3ff]">CTI Enrichment</div>
                    <div className="rounded-lg bg-[#0f173d] p-2 text-center text-[#b7c3ff]">
                      Compromised Credentials
                    </div>
                    <div className="rounded-lg bg-[#0f173d] p-2 text-center text-[#b7c3ff]">Malware Sandbox</div>
                    <div className="rounded-lg bg-[#0f173d] p-2 text-center text-[#b7c3ff]">Security Advisories</div>
                  </div>
                </div>
              </div>

              {/* Column 2: Hyper Orchestration & Automation */}
              <div className="rounded-xl bg-[#212f73]/50 p-4 pb-6 shadow-[0_0_15px_rgba(33,47,115,0.5)]">
                <h2 className="mb-4 text-center text-[#dcdee4]">Intel Operationalization</h2>
                <div className="rounded-xl bg-black p-4 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  <h3 className="mb-6 text-center text-xl text-white">
                    Hyper Orchestration
                    <br />& Automation
                  </h3>

                  <div className="space-y-3">
                    <div className="rounded-lg bg-[#0f173d] p-2 text-center text-[#b7c3ff]">
                      Threat Actioning Platform
                    </div>
                    <div className="rounded-lg bg-[#0f173d] p-2 text-center text-[#b7c3ff]">
                      Low Code / No Code Playbooks
                    </div>
                    <div className="rounded-lg bg-[#0f173d] p-2 text-center text-[#b7c3ff]">Case Management</div>
                    <div className="rounded-lg bg-[#0f173d] p-2 text-center text-[#b7c3ff]">
                      Threat Remediation & Response
                    </div>
                    <div className="rounded-lg bg-[#0f173d] p-2 text-center text-[#b7c3ff]">Cyber Fusion</div>
                  </div>
                </div>
              </div>

              {/* Column 3: Threat Intel Sharing & Collaboration */}
              <div className="rounded-xl bg-[#212f73]/50 p-4 pb-6 shadow-[0_0_15px_rgba(33,47,115,0.5)]">
                <h2 className="mb-4 text-center text-[#dcdee4]">Analyst Collaboration</h2>
                <div className="rounded-xl bg-black p-4 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                  <h3 className="mb-6 text-center text-xl text-white">
                    Threat Intel Sharing
                    <br />& Collaboration
                  </h3>

                  <div className="space-y-3">
                    <div className="rounded-lg bg-[#0f173d] p-2 text-center text-[#b7c3ff]">
                      Analyst Collaboration Platform
                    </div>
                    <div className="rounded-lg bg-[#0f173d] p-2 text-center text-[#b7c3ff]">ISAC / ISAO Sharing</div>
                    <div className="rounded-lg bg-[#0f173d] p-2 text-center text-[#b7c3ff]">ISAC-to-ISAC Sharing</div>
                    <div className="rounded-lg bg-[#0f173d] p-2 text-center text-[#b7c3ff]">
                      Supplier Sharing Network
                    </div>
                    <div className="rounded-lg bg-[#0f173d] p-2 text-center text-[#b7c3ff]">
                      Automated Collective Defense
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cyware Quarterback AI */}
            <div className="absolute bottom-0 left-1/2 z-20 translate-y-1/2 -translate-x-1/2">
              <div className="rounded-full bg-[#4a035b] px-8 py-3 text-center shadow-[0_0_20px_rgba(74,3,91,0.5)]">
                <div className="mb-1 flex items-center justify-center gap-2">
                  <div className="relative">
                    <Image src="/stars-2.svg" alt="Cyware Logo" width={40} height={40} />
                  </div>
                  <h3 className="text-xl font-medium text-white">Cyware Quarterback AI</h3>
                </div>
                <p className="text-sm text-[#fcf1ff]">Multi Agent Fabric</p>
              </div>
            </div>
          </div>

          {/* Input Sources - Left Side - positioned on the green triangle */}
          <div className="absolute left-0 top-1/2 z-20 -translate-x-[150%] -translate-y-1/2 space-y-6">
            <div className="w-36 rounded-lg border border-[#00c689] bg-black/90 backdrop-blur-sm p-3 text-center text-white shadow-[0_0_25px_rgba(0,198,137,0.4)]">
              Commercial
              <br />
              Threat Feeds
            </div>
            <div className="w-36 rounded-lg border border-[#00c689] bg-black/90 backdrop-blur-sm p-3 text-center text-white shadow-[0_0_25px_rgba(0,198,137,0.4)]">
              Digital Risk
              <br />
              Data
            </div>
            <div className="w-36 rounded-lg border border-[#00c689] bg-black/90 backdrop-blur-sm p-3 text-center text-white shadow-[0_0_25px_rgba(0,198,137,0.4)]">
              CERTs, ISACs,
              <br />
              OSINT Intel
            </div>
          </div>

          {/* Output Destinations - Right Side - positioned on the green triangle */}
          <div className="absolute right-0 top-1/2 z-20 translate-x-[150%] -translate-y-1/2 space-y-6">
            <div className="w-36 rounded-lg border border-[#00c689] bg-black/90 backdrop-blur-sm p-3 text-center text-white shadow-[0_0_25px_rgba(0,198,137,0.4)]">
              CISO / SOC / IR
              <br />
              Teams
            </div>
            <div className="w-36 rounded-lg border border-[#00c689] bg-black/90 backdrop-blur-sm p-3 text-center text-white shadow-[0_0_25px_rgba(0,198,137,0.4)]">
              Subsidiaries &<br />
              Suppliers
            </div>
            <div className="w-36 rounded-lg border border-[#00c689] bg-black/90 backdrop-blur-sm p-3 text-center text-white shadow-[0_0_25px_rgba(0,198,137,0.4)]">
              ISACs / ISAOs
            </div>
          </div>

          {/* Bottom Security Domains - positioned on the green triangle */}
          <div className="absolute bottom-0 left-1/2 z-20 w-full translate-y-[250%] -translate-x-1/2">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-6">
              <div className="rounded-lg border-2 border-[#00c689] bg-black/90 backdrop-blur-sm p-3 text-center text-white shadow-[0_0_30px_rgba(0,198,137,0.5)]">
                Monitoring & Detection
              </div>
              <div className="rounded-lg border-2 border-[#00c689] bg-black/90 backdrop-blur-sm p-3 text-center text-white shadow-[0_0_30px_rgba(0,198,137,0.5)]">
                Endpoint Security
              </div>
              <div className="rounded-lg border-2 border-[#00c689] bg-black/90 backdrop-blur-sm p-3 text-center text-white shadow-[0_0_30px_rgba(0,198,137,0.5)]">
                Cloud Security
              </div>
              <div className="rounded-lg border-2 border-[#00c689] bg-black/90 backdrop-blur-sm p-3 text-center text-white shadow-[0_0_30px_rgba(0,198,137,0.5)]">
                Network Security
              </div>
              <div className="rounded-lg border-2 border-[#00c689] bg-black/90 backdrop-blur-sm p-3 text-center text-white shadow-[0_0_30px_rgba(0,198,137,0.5)]">
                IAM
              </div>
              <div className="rounded-lg border-2 border-[#00c689] bg-black/90 backdrop-blur-sm p-3 text-center text-white shadow-[0_0_30px_rgba(0,198,137,0.5)]">
                ITSM
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
