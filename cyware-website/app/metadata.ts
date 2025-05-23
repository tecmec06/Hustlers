import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://cyware-website.vercel.app'),
  title: {
    default: 'Cyware - Threat Intelligence & Security Operations Platform',
    template: '%s | Cyware'
  },
  description: 'Cyware provides threat intelligence and security operations platform for enterprises and MSSPs to build, deploy, and manage security operations at scale.',
  keywords: ['threat intelligence', 'security operations', 'cybersecurity', 'MSSP', 'enterprise security'],
  authors: [{ name: 'Cyware' }],
  creator: 'Cyware',
  publisher: 'Cyware',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cyware-website.vercel.app',
    siteName: 'Cyware',
    title: 'Cyware - Threat Intelligence & Security Operations Platform',
    description: 'Cyware provides threat intelligence and security operations platform for enterprises and MSSPs to build, deploy, and manage security operations at scale.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cyware - Threat Intelligence & Security Operations Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyware - Threat Intelligence & Security Operations Platform',
    description: 'Cyware provides threat intelligence and security operations platform for enterprises and MSSPs to build, deploy, and manage security operations at scale.',
    images: ['/og-image.jpg'],
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
    google: 'your-google-site-verification', // Add your Google Search Console verification code
  },
}; 