import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { BookMarked, TrendingUp } from 'lucide-react'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Research | Eternity AI',
  description: 'Explore the research foundations, literature review, and academic context of the Eternity AI project.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function ResearchPage() {
  return (
    <main className="overflow-hidden bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative border-b border-border/20 bg-gradient-to-b from-primary/5 to-background px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            Research <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Foundations</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Understanding the academic foundation and literature context
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-16">
          {/* Literature Gap */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg bg-primary/10 p-3">
                <BookMarked className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Literature Gap</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Limited Integration',
                  points: [
                    'Few studies combine DASS-21 with comprehensive lifestyle data',
                    'Lack of holistic assessment approaches',
                    'Limited contextualization for university populations',
                  ],
                },
                {
                  title: 'AI Accessibility',
                  points: [
                    'Mental health AI tools underutilized in developing contexts',
                    'Limited culturally-adapted LLM applications',
                    'Gap between research and practical deployment',
                  ],
                },
                {
                  title: 'Resource Constraints',
                  points: [
                    'Insufficient counseling services in universities',
                    'High burden on mental health professionals',
                    'Need for scalable solutions',
                  ],
                },
                {
                  title: 'Student-Specific',
                  points: [
                    'Limited AI interventions tailored for students',
                    'Insufficient multilingual support',
                    'Lack of real-world validation at universities',
                  ],
                },
              ].map((item, index) => (
                <Card key={index} className="border-border/50 bg-white/50 p-6 backdrop-blur-sm">
                  <h3 className="mb-4 font-bold text-foreground">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Research Approach */}
          <div className="space-y-6 border-t border-border/20 pt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg bg-accent/10 p-3">
                <TrendingUp className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Approach</h2>
            </div>

            <Card className="border-border/50 bg-white/50 p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-foreground mb-3">Integration Strategy</h3>
                  <p className="text-muted-foreground">
                    We integrate validated psychological assessment (DASS-21) with multi-dimensional lifestyle data including sleep patterns, dietary habits, physical activity, screen time, and social engagement to create a comprehensive mental health profile.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3">ML-LLM Hybrid</h3>
                  <p className="text-muted-foreground">
                    Machine learning models handle pattern recognition and prediction tasks (achieving 97%+ accuracy), while fine-tuned large language models generate personalized, contextually appropriate recommendations that are culturally sensitive and conversational.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3">Culturalization</h3>
                  <p className="text-muted-foreground">
                    The system supports three languages (Sinhala, Tamil, English) and incorporates local cultural contexts in recommendations, recognizing the unique challenges of Sri Lankan university students.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3">Real-World Deployment</h3>
                  <p className="text-muted-foreground">
                    Validated through actual deployment at USJ with 1000+ student responses, ensuring practical effectiveness and acceptability in the target context.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Key Findings */}
          <div className="space-y-6 border-t border-border/20 pt-12">
            <h2 className="text-3xl font-bold text-foreground">Research Insights</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { stat: '1000+', label: 'Students Surveyed', insight: 'Comprehensive dataset representing diverse student profiles' },
                { stat: '16', label: 'Lifestyle Factors', insight: 'Multi-dimensional assessment of student wellbeing' },
                { stat: '97%+', label: 'Model Accuracy', insight: 'High-performance prediction of mental health conditions' },
                { stat: '3', label: 'Languages', insight: 'Inclusive support for diverse student populations' },
              ].map((item, index) => (
                <Card key={index} className="border-border/50 bg-gradient-to-br from-primary/5 to-accent/5 p-6 backdrop-blur-sm">
                  <p className="text-3xl font-bold text-primary mb-1">{item.stat}</p>
                  <p className="font-semibold text-foreground mb-2">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.insight}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Contribution */}
          <div className="space-y-6 border-t border-border/20 pt-12">
            <h2 className="text-3xl font-bold text-foreground">Contribution to Field</h2>

            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 p-8">
              <ul className="space-y-4">
                {[
                  { title: 'First integrated approach:', text: 'Combines DASS-21 with comprehensive lifestyle data for mental health assessment' },
                  { title: 'AI accessibility:', text: 'Demonstrates practical deployment of AI in university mental health contexts' },
                  { title: 'Cultural adaptation:', text: 'Shows effectiveness of culturally-informed AI interventions' },
                  { title: 'Scalability model:', text: 'Provides replicable framework for other universities and contexts' },
                  { title: 'Evidence-based:', text: 'Contributes validation data for AI-driven mental health interventions' },
                ].map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">{item.title}</strong> {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}