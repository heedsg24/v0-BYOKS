import type { Metadata, Viewport } from 'next'
import { DM_Sans, Cormorant_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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

export const metadata: Metadata = {
  title: 'BYOKS — Be Your Own Kind of Sober',
  description: 'Open Me When is a guided journal + survival kit for anyone sober, sober-curious, cutting back, or rebuilding. No pressure. No shame. Just a place to come back to.',
  keywords: ['sober', 'sober-curious', 'journal', 'wellness', 'mental health', 'self-help'],
  openGraph: {
    title: 'BYOKS — Be Your Own Kind of Sober',
    description: 'A guided journal + survival kit for the moments that matter most.',
    type: 'website',
  },
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
    <html lang="en" className={`${dmSans.variable} ${cormorant.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
