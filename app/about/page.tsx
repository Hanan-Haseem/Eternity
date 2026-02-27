import { Navbar } from '@/components/navbar'
import { Card } from '@/components/ui/card'
import { BookOpen, Users, Lightbulb } from 'lucide-react'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'About Eternity AI | Research Project',
  description: 'Learn about the Eternity AI project, its scope, motivation, and significance for mental health intervention at USJ.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative border-b border-border/20 bg-gradient-to-b from-primary/5 to-background px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
            About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Eternity AI</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Understanding our mission, motivation, and the significance of our research
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl space-y-16">
          {/* Project Scope */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg bg-primary/10 p-3">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Project Scope</h2>
            </div>
            <Card className="border-border/50 bg-white/50 p-8 backdrop-blur-sm">
              <p className="leading-relaxed text-muted-foreground">
                The Eternity project develops a comprehensive AI-driven mental health intervention system specifically designed for University of Sri Jayewardenepura (USJ) students. The system combines standardized psychological assessment tools (DASS-21) with lifestyle behavioral data to provide accurate mental health predictions and personalized interventions. Scope includes data collection, ML model development, LLM fine-tuning, and mobile app deployment.
              </p>
            </Card>
          </div>

          {/* Motivation */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg bg-accent/10 p-3">
                <Lightbulb className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Motivation</h2>
            </div>
            <Card className="border-border/50 bg-white/50 p-8 backdrop-blur-sm">
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">High prevalence of mental health issues:</strong> Depression (35.1–63.8%), anxiety (40.5–60%), stress (27.7–87.9%) among USJ students.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Limited accessibility:</strong> Insufficient counseling services and stigma prevent students from seeking help.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Need for personalization:</strong> Generic interventions are less effective; personalized approaches yield better outcomes.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Technology potential:</strong> AI and ML can bridge the gap between demand and resources.
                  </span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Significance */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-lg bg-primary/10 p-3">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Significance</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: 'Early Detection', description: 'Enable early identification of mental health conditions' },
                { title: 'Scalability', description: 'Support many students with limited resources' },
                { title: 'Personalization', description: 'Tailored interventions per student profile' },
                { title: 'Cultural Relevance', description: 'Sensitive to local culture and context' },
                { title: 'Stigma Reduction', description: 'Confidential digital support' },
                { title: 'Policy Impact', description: 'Inform university mental health policies' },
              ].map((item, index) => (
                <Card key={index} className="border-border/50 bg-white/50 p-6 backdrop-blur-sm hover:bg-white/70 transition-all">
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="space-y-4 border-t border-border/20 pt-12">
            <h2 className="text-3xl font-bold text-foreground">Research Team</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { name: 'Hanan M.H.', role: 'Researcher' },
                { name: 'Hettiarachchi I.S.', role: 'Researcher' },
                { name: 'Kalubovila S.A.', role: 'Researcher' },
              ].map((member, index) => (
                <Card key={index} className="border-border/50 bg-white/50 p-6 text-center backdrop-blur-sm">
                  <div className="mb-3 inline-block rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                </Card>
              ))}
            </div>
            <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 p-6 mt-6">
              <h3 className="font-bold text-foreground mb-2">Supervisor</h3>
              <p className="text-muted-foreground">Mrs. Sankani Heenkenda, Lecturer, Faculty of Technology, USJ</p>
              <h3 className="font-bold text-foreground mt-4 mb-2">Clinical Guidance</h3>
              <p className="text-muted-foreground">Ms. S.V.R.A De Silva, Clinical Psychologist (SLMC Reg No: 50)</p>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}