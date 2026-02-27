import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { GitBranch, Workflow } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Methodology | Eternity AI',
  description: 'Learn about the system architecture, research methodology, and implementation approach of Eternity AI.',
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
                <p className="text-muted-foreground">
                  The system follows a modular three-tier architecture:
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    layer: 'Frontend',
                    tech: ['Flutter', 'Mobile UI', 'User Input'],
                    description: 'User-facing mobile application',
                  },
                  {
                    layer: 'Backend',
                    tech: ['FastAPI', 'Spring Boot', 'Firebase'],
                    description: 'API services and business logic',
                  },
                  {
                    layer: 'ML/AI Pipeline',
                    tech: ['Python', 'ML Models', 'LLM'],
                    description: 'Prediction and recommendation engine',
                  },
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

          {/* Data Specifications */}
          <div className="space-y-6 border-t border-border/20 pt-12">
            <h2 className="text-3xl font-bold text-foreground">Data Specifications</h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-border/50 bg-white/50 p-6 backdrop-blur-sm">
                <h3 className="font-bold text-foreground mb-4">DASS-21 Assessment</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>21 questions on depression, anxiety, stress</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>7-point Likert scale responses</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Validated assessment tool</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Severity scoring system</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-border/50 bg-white/50 p-6 backdrop-blur-sm">
                <h3 className="font-bold text-foreground mb-4">Lifestyle Factors (16 dimensions)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Sleep patterns & duration</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Diet and eating habits</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Physical activity levels</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">•</span>
                    <span>Screen time & digital habits</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Model Details */}
          <div className="space-y-6 border-t border-border/20 pt-12">
            <h2 className="text-3xl font-bold text-foreground">Machine Learning Models</h2>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  name: 'Random Forest',
                  accuracy: '95.96%',
                  features: ['Ensemble method', 'Multiple trees', 'Feature importance'],
                },
                {
                  name: 'Extra Trees',
                  accuracy: '95.96%',
                  features: ['Reduced variance', 'Random splits', 'Parallelizable'],
                },
                {
                  name: 'XGBoost',
                  accuracy: '97%',
                  features: ['Gradient boosting', 'Regularization', 'Fast training'],
                },
                {
                  name: 'LightGBM',
                  accuracy: '97%',
                  features: ['Leaf-wise growth', 'Memory efficient', 'GPU support'],
                },
              ].map((model, index) => (
                <Card key={index} className="border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 p-6">
                  <div className="mb-4">
                    <h3 className="font-bold text-foreground">{model.name}</h3>
                    <p className="text-2xl font-bold text-primary mt-1">{model.accuracy}</p>
                  </div>
                  <ul className="space-y-1">
                    {model.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-muted-foreground flex gap-2">
                        <span className="text-accent">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* LLM Details */}
          <div className="space-y-6 border-t border-border/20 pt-12">
            <h2 className="text-3xl font-bold text-foreground">LLM Fine-Tuning</h2>

            <Card className="border-accent/20 bg-gradient-to-r from-accent/10 to-primary/10 p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-bold text-foreground mb-3">Base Model</h3>
                  <p className="text-muted-foreground text-sm">
                    Meta-Llama-3.1-8B-Instruct: 8 billion parameter instruction-following language model optimized for multi-turn conversations
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3">Fine-Tuning Technique</h3>
                  <p className="text-muted-foreground text-sm">
                    LoRA (Low-Rank Adaptation): Efficient parameter adaptation enabling cultural and contextual customization
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3">Training Data</h3>
                  <p className="text-muted-foreground text-sm">
                    Curated intervention examples, cultural context, local idioms, and student-specific scenarios
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-3">Output</h3>
                  <p className="text-muted-foreground text-sm">
                    Personalized, culturally appropriate coping strategies and mental health recommendations in 3 languages
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

     
    </main>
  )
}
