import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://samuel-then-portfolio.netlify.app'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Samuel Then | Software Engineer & Computer Science Student',
    template: '%s | Samuel Then',
  },
  description:
    'Portfolio of Samuel Then, an NUS Computer Science student building reliable software systems and intelligent tools.',
  keywords: [
    'Samuel Then',
    'software engineer',
    'full stack developer',
    'computer science student',
    'NUS',
    'artificial intelligence',
  ],
  authors: [{ name: 'Samuel Then', url: siteUrl }],
  creator: 'Samuel Then',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: '/',
    siteName: 'Samuel Then',
    title: 'Samuel Then | Software Engineer & Computer Science Student',
    description:
      'Explore Samuel Then’s software engineering projects, experience, and work in AI, data, and systems.',
    images: [
      {
        url: '/images/profile.jpeg',
        width: 1280,
        height: 1280,
        alt: 'Samuel Then',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Then | Software Engineer & Computer Science Student',
    description:
      'Explore Samuel Then’s software engineering projects, experience, and work in AI, data, and systems.',
    images: ['/images/profile.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
