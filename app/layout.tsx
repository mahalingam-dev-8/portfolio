import type { Metadata } from 'next'
import { Outfit, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { SocialRail } from '@/components/SocialRail'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Toaster } from '@/components/ui/sonner'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mahalingam R — Software Engineer',
  description: 'Software engineer with 2 years of production experience in distributed systems, AI engineering, and secure cloud infrastructure. Open to backend, full-stack, AI, and platform roles.',
  metadataBase: new URL('https://mahalingam-portfolio.vercel.app'),
  openGraph: {
    title: 'Mahalingam R — Software Engineer',
    description: 'Software engineer with 2 years of production experience in distributed systems, AI engineering, and secure cloud infrastructure. Open to backend, full-stack, AI, and platform roles.',
    url: 'https://mahalingam.dev',
    siteName: 'Mahalingam R',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Mahalingam R — Backend & AI Engineer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahalingam R — Software Engineer',
    description: 'Software engineer with 2 years of production experience in distributed systems, AI engineering, and secure cloud infrastructure.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:ring-2 focus:ring-primary"
        >
          Skip to content
        </a>
        <Navigation />
        <SocialRail />
        <main id="main-content">{children}</main>
        <ScrollToTop />
        <Toaster />
        {/* import { Analytics } from '@vercel/analytics/react' */}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
