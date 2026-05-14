import type { Metadata, Viewport } from 'next'
import { DM_Sans, Cormorant_Garamond, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Grain } from '@/components/landing/grain'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-caveat',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://byoks.co'

const TITLE = 'BYOKS · Open Me When'
const TAGLINE = 'be your own kind of sober.'
const DESCRIPTION =
  'A guided journal + survival kit for sober, sober-curious, cutting back, or rebuilding. For the moments you feel like drinking — or already have. No pressure. No shame. Just a place to come back to.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s · BYOKS',
  },
  description: DESCRIPTION,
  applicationName: 'BYOKS',
  authors: [{ name: 'Heda G.' }],
  creator: 'BYOKS',
  publisher: 'BYOKS',
  keywords: [
    'sober',
    'sober curious',
    'sobriety',
    'guided journal',
    'survival kit',
    'cut back drinking',
    'rebuilding',
    'mental health',
    'wellness journal',
    'BYOKS',
    'Open Me When',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'BYOKS',
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: TAGLINE,
    creator: '@byoks',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'wellness',
}

export const viewport: Viewport = {
  themeColor: '#f5f0e8',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable} ${caveat.variable} bg-background`}>
      <body className="font-sans antialiased relative">
        <Grain />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
