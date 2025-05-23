'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function Banner() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#004efc] text-white py-2 px-4 text-center text-sm flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 shadow-lg">
      <div className="flex items-center gap-1">
        <span className="font-bold">RSAC</span>
        <span className="text-xs opacity-80">2025 CONFERENCE</span>
      </div>
      <span className="text-sm text-white/90 text-center sm:text-left">
        Register now to meet Cyware at the ISAC 2025 Annual Meeting
      </span>
      <Link
        href="https://www.rsaconference.com/usa"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 hover:underline hover:text-white"
      >
        Check out <ChevronRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
