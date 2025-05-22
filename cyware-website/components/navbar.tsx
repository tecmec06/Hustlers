"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="w-full bg-gradient-to-r from-[#0e1218] to-[#2d1a3f] border-b border-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10 mr-2">
                <div className="absolute inset-0 bg-blue-500 rotate-45 transform origin-center rounded-sm"></div>
                <div className="absolute inset-[3px] bg-[#0e1218] rotate-45 transform origin-center"></div>
                <div className="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rotate-45 transform origin-center"></div>
                <div className="absolute top-[40%] left-[60%] h-2 w-2 bg-green-400 rotate-45 transform origin-center"></div>
              </div>
              <span className="text-white text-2xl font-bold tracking-tight">
                CYWARE<span className="text-xs align-top">™</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavItem text="Platform" />
            <NavItem text="Solutions" />
            <NavItem text="Partners" />
            <NavItem text="Resources" />
            <Link
              href="/quarterback-ai"
              className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <Sparkles className="h-4 w-4 mr-2" />
              Quarterback AI
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/demo"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-[#1a5d3a] hover:bg-[#1e6b43] transition-colors"
            >
              Get a Demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={cn("h-6 w-6", mobileMenuOpen ? "hidden" : "block")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={cn("h-6 w-6", mobileMenuOpen ? "block" : "hidden")}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <MobileNavItem text="Platform" />
          <MobileNavItem text="Solutions" />
          <MobileNavItem text="Partners" />
          <MobileNavItem text="Resources" />
          <Link
            href="/quarterback-ai"
            className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium flex items-center"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Quarterback AI
          </Link>
          <Link
            href="/demo"
            className="flex items-center justify-between text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium mt-4"
          >
            Get a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}

function NavItem({ text }: { text: string }) {
  return (
    <div className="relative group">
      <button className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium flex items-center">
        {text}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="py-1">
          <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Option 1
          </Link>
          <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Option 2
          </Link>
          <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Option 3
          </Link>
        </div>
      </div>
    </div>
  )
}

function MobileNavItem({ text }: { text: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium w-full flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        {text}
        <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen ? "rotate-180" : "")} />
      </button>
      {isOpen && (
        <div className="pl-4">
          <Link href="#" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-sm">
            Option 1
          </Link>
          <Link href="#" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-sm">
            Option 2
          </Link>
          <Link href="#" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-sm">
            Option 3
          </Link>
        </div>
      )}
    </div>
  )
}
