import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { GitBranch, Workflow } from 'lucide-react'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Methodology | Eternity AI',
  description: 'Learn about the system architecture, research methodology, and implementation approach of Eternity AI.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function MethodologyPage() {
  const workflowSteps = [
    {
      number: '01',
      title: 'Data Collection',
      description: 'Collected anonymous responses from 1000+ USJ students using DASS-21 assessment and lifestyle questionnaire',
    },
    {
      number: '02',
      title: 'Data Preprocessing',
      description: 'Cleaned, normalized, and prepared data for machine learning. Handled missing values and balanced datasets.',
    },
    {
      number: '03',
      title: 'ML Model Training',
      description: 'Trained multiple ensemble models: Random Forest, Extra Trees, XGBoost, and LightGBM. Achieved 97%+ accuracy.',
    },
    {
      number: '04',
      title: 'LLM Fine-Tuning',
      description: 'Fine-tuned Meta-Llama-3.1-8B using LoRA for generating culturally sensitive intervention recommendations.',
    },
    {
      number: '05',
      title: 'Mobile App Dev',
      description: 'Developed Flutter application with Firebase backend for real-time predictions and user engagement.',
    },
    {
      number: '06',
      title: 'Deployment',
      description: 'Deployed system at USJ with validation, documentation, and user guidance materials in 3 languages.',
    },
  ]

  return (
    <main className="overflow-hidden bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative border-b border-border/20 bg-gradient-to-b from-primary/5 to-background px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            Research <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Methodology</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Technical implementation and system architecture details
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-16">
          {/* System Architecture */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg bg-primary/10 p-3">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">System Architecture</h2>
            </div>

            <Card className="border-border/50 bg-white/50 p-8 backdrop-blur-sm">
              <div className="space-y-4 mb-8">
                <h3 className="font-bold text-foreground">Architecture Overview</h3>
                <p className="text-muted-foreground">The system follows a modular three-tier architecture:</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { layer: 'Frontend', tech: ['Flutter', 'Mobile UI', 'User Input'], description: 'User-facing mobile application' },
                  { layer: 'Backend', tech: ['FastAPI', 'Spring Boot', 'Firebase'], description: 'API services and business logic' },
                  { layer: 'ML/AI Pipeline', tech: ['Python', 'ML Models', 'LLM'], description: 'Prediction and recommendation engine' },
                ].map((item, index) => (
                  <Card key={index} className="border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 p-4">
                    <p className="font-semibold text-foreground mb-2">{item.layer}</p>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                    <div className="space-y-1">
                      {item.tech.map((tech, techIndex) => (
                        <p key={techIndex} className="text-xs text-accent font-medium">{tech}</p>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Diagram placeholder */}
            <div className="h-64 rounded-2xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-2">🏗️</div>
                <p className="text-sm text-muted-foreground">System Architecture Diagram</p>
              </div>
            </div>
          </div>

          {/* Workflow */}
          <div className="space-y-6 border-t border-border/20 pt-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg bg-accent/10 p-3">
                <Workflow className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Research Workflow</h2>
            </div>

            <div className="space-y-4">
              {workflowSteps.map((step, index) => (
                <Card key={index} className="border-border/50 bg-white/50 p-6 backdrop-blur-sm hover:bg-white/70 transition-all">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground">{step.title}</h3>
                      <p className="mt-1 text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}