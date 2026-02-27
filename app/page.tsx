// app/page.tsx
import type { Metadata, Viewport } from 'next'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ResearchHighlights } from '@/components/research-highlights'
import { TechStack } from '@/components/tech-stack'
import { ImpactSection } from '@/components/impact-section'
import { ResultsSection } from '@/components/results-section'
import { DemoSection } from '@/components/demo-section'
import { TeamSection } from '@/components/team-section'

export const metadata: Metadata = {
  title: 'Eternity | Mental Health Intervention System',
  description:
    'Fine-tuned Large Language Model-enabled personalized mental health intervention system for USJ students using DASS-21 scores and lifestyle data.',
  openGraph: {
    title: 'Eternity AI',
    description: 'AI-Driven Personalized Mental Health Support for USJ Students',
    type: 'website',
  },
  icons: {
    icon: '/logo.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ResearchHighlights />
      <ImpactSection />
      <ResultsSection />
      <DemoSection />
      <TechStack />
      <TeamSection />
     
    </main>
  )
}