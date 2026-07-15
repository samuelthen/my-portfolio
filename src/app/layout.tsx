import type { Metadata, Viewport } from 'next'
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
    default: 'Samuel Then | AI Researcher & Software Engineer',
    template: '%s | Samuel Then',
  },
  description:
    'Online CV of Samuel Then, an NUS Computer Science student and AI researcher working on multimodal learning, computational imaging, foundation models, and software systems.',
  keywords: [
    'Samuel Then',
    'software engineer',
    'AI researcher',
    'machine learning engineer',
    'computer science student',
    'NUS',
    'National University of Singapore',
    'multimodal learning',
    'computational imaging',
    'computer vision',
    'natural language processing',
    'foundation models',
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
    title: 'Samuel Then | AI Researcher & Software Engineer',
    description:
      'NUS Computer Science student working on multimodal learning, computational imaging, foundation models, and software systems.',
    images: [
      {
        url: '/og.png',
        width: 1731,
        height: 909,
        alt: 'Samuel Then — AI Research and Software Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samuel Then | AI Researcher & Software Engineer',
    description:
      'NUS Computer Science student working on multimodal learning, computational imaging, foundation models, and software systems.',
    images: ['/og.png'],
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
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f7f7f5',
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
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
