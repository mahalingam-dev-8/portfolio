import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navigation } from '@/components/Navigation'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mahalingam R — Software Engineer',
  description: 'Software engineer with 2 years of production experience in distributed systems, AI engineering, and secure cloud infrastructure. Open to backend, full-stack, AI, and platform roles.',
  metadataBase: new URL('https://mahalingam.dev'),
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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable + ' font-sans antialiased'}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:ring-2 focus:ring-primary"
          >
            Skip to content
          </a>
          <Navigation />
          <main id="main-content">{children}</main>
          <Toaster />
          {/* import { Analytics } from '@vercel/analytics/react' */}
          {/* <Analytics /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
