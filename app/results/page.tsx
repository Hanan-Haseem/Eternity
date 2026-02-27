import { ResultsSection } from '@/components/results-section'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Results & Evaluation | Eternity AI Research',
  description: 'Comprehensive evaluation results, model performance metrics, and key findings from the Eternity AI research project.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-accent/5 px-4 py-20 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex">
            <div className="rounded-full bg-primary/10 px-4 py-2">
              <p className="text-sm font-medium text-primary">🎯 Research Outcomes</p>
            </div>
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Results & Evaluation
            </span>
          </h1>

          <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
            Comprehensive analysis of model performance, accuracy metrics, and key findings
          </p>

          <Link href="/methodology">
            <Button size="lg" variant="outline" className="gap-2 hover:bg-primary/5">
              View Methodology
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Results Component */}
      <ResultsSection />

      {/* Additional Insights */}
      <section className="relative bg-background px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 sm:p-10">
              <div className="mb-4 text-4xl">📊</div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">Dataset Composition</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent" /> 1000+ USJ students surveyed</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent" /> 16 lifestyle behavioral factors analyzed</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent" /> DASS-21 psychological assessment data</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-accent" /> Balanced distribution across conditions</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 to-primary/5 p-8 sm:p-10">
              <div className="mb-4 text-4xl">⚙️</div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">Model Optimization</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Hyperparameter tuning via GridSearch</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Cross-validation (5-fold strategy)</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Class imbalance handling</li>
                <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary" /> Feature normalization and scaling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="relative border-t border-border/20 bg-gradient-to-b from-background to-primary/5 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">Explore More</h2>
          <p className="mb-8 text-muted-foreground">
            Dive deeper into the technical details and research methodology behind our results
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/methodology">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/30">
                Research Methodology
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/research">
              <Button size="lg" variant="outline" className="gap-2 hover:bg-primary/5">
                Research Details
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}