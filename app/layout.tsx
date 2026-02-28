import type { Metadata, Viewport } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { GeistPixelGrid } from 'geist/font/pixel'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Overcast | RL Agents for Reliability Intelligence',
  description:
    'RL agents for reliability intelligence. Forecast production issues before they break. The dev platform that closes the development cycle gap.',
  keywords: [
    'Overcast',
    'RL agents',
    'reliability intelligence',
    'production forecasting',
    'dev platform',
    'incident response',
    'AI operations',
    'codebase analysis',
    'log curation',
    'production monitoring',
  ],
  authors: [{ name: 'Overcast' }],
  creator: 'Overcast',
  publisher: 'Overcast',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Overcast | RL Agents for Reliability Intelligence',
    description:
      'RL agents for reliability intelligence. Forecast production issues before they break. The dev platform that closes the development cycle gap.',
    siteName: 'Overcast',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Overcast | RL Agents for Reliability Intelligence',
    description:
      'RL agents for reliability intelligence. Forecast production issues before they break. The dev platform that closes the development cycle gap.',
    creator: '@overcast',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${GeistPixelGrid.variable} dark`} suppressHydrationWarning>
      <body className="font-mono antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
