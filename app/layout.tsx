import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Eternity AI | Mental Health Intervention System for USJ',
  description: 'Fine-tuned LLM-enabled personalized mental health intervention system combining DASS-21 assessment with lifestyle data for university students.',
  generator: 'v0.app',
  keywords: [
    'Mental Health',
    'AI',
    'University',
    'DASS-21',
    'Machine Learning',
    'Personalized Intervention',
    'USJ',
  ],
  authors: [
    { name: 'Hanan M.H.' },
    { name: 'Hettiarachchi I.S.' },
    { name: 'Kalubovila S.A.' },
  ],
  icons: {
    icon: [
      { url: '/logo.png', media: '(prefers-color-scheme: light)' },
      { url: '/logo.png', media: '(prefers-color-scheme: dark)' },
      { url: '/logo.png', type: 'image/svg+xml' },
    ],
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Eternity AI | Mental Health Intervention System',
    description: 'AI-Driven Personalized Mental Health Support for USJ Students',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}