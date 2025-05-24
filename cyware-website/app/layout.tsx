import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

// Define the canonical domain (non-www version)
const canonicalDomain = 'https://cyware.vercel.app'

export const metadata: Metadata = {
  title: "CYWARE",
  description: "CYWARE website",
  metadataBase: new URL(canonicalDomain),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: canonicalDomain,
    siteName: 'CYWARE',
    locale: 'en_US',
    type: 'website',
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
        <link rel="canonical" href={canonicalDomain} />
        <meta name="google-site-verification" content="rwUdlrc9e1M9tS0FgIsu_aue0clcFhayP3BGOC9IkqY" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
