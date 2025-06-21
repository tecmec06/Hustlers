import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

// Define the canonical domain (non-www version)
const canonicalDomain = 'https://cyware.vercel.app'

export const metadata: Metadata = {
  title: {
    default: "CYWARE - Cybersecurity Solutions",
    template: "%s | CYWARE"
  },
  description: "CYWARE provides advanced cybersecurity solutions and threat intelligence to protect your organization from evolving cyber threats.",
  metadataBase: new URL(canonicalDomain),
  keywords: ["cybersecurity", "threat intelligence", "security solutions", "cyber threats", "security platform"],
  authors: [{ name: "CYWARE" }],
  creator: "CYWARE",
  publisher: "CYWARE",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    url: canonicalDomain,
    siteName: 'CYWARE',
    locale: 'en_US',
    type: 'website',
    title: 'CYWARE - Cybersecurity Solutions',
    description: 'Advanced cybersecurity solutions and threat intelligence platform',
    images: [
      {
        url: `${canonicalDomain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'CYWARE Cybersecurity Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CYWARE - Cybersecurity Solutions',
    description: 'Advanced cybersecurity solutions and threat intelligence platform',
    images: [`${canonicalDomain}/og-image.jpg`],
    creator: '@cyware',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '0Dhg2WK-fZMzMPVrYsjvCEP4TSEpLvHmC_qyKsLBN7k',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/cyware-logo.svg" sizes="32x32" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
