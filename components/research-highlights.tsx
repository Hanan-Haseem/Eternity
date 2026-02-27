'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Brain, Zap, MessageSquare } from 'lucide-react'
import { Card } from '@/components/ui/card'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
  },
}

export function ResearchHighlights() {
  const features = [
    {
      icon: Lightbulb,
      title: 'DASS-21 Psychological Assessment',
      description: 'Validated mental health measurement tool for depression, anxiety, and stress assessment',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Brain,
      title: 'Lifestyle Behaviour Analysis',
      description: 'Comprehensive analysis of sleep patterns, diet, activity levels, screen time, and social factors',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Zap,
      title: 'Machine Learning Prediction',
      description: 'Trained four ML models; selected best (XGBoost, LightGBM) with 97% accuracy',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: MessageSquare,
      title: 'Personalized AI Recommendations',
      description: 'Fine-tuned Meta-Llama-3.1-8B generating Personalized Suggestions',
      color: 'from-purple-500 to-purple-600',
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-background via-background to-primary/5 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16"
        >
          <div className="inline-flex mb-4">
            <div className="rounded-full bg-primary/10 px-4 py-2">
              <p className="text-sm font-medium text-primary">Core Features</p>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Research Highlights
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Innovative approaches combining psychology, lifestyle data, and AI
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="relative h-full overflow-hidden border-border/50 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/70 hover:shadow-lg">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 bg-gradient-to-br from-primary to-accent" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${feature.color} p-3`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="mb-2 font-bold text-foreground">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>

                    {/* Bottom accent line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="mt-4 h-1 w-8 bg-gradient-to-r from-primary to-accent origin-left"
                    />
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ML Models Highlight */}
        {/* ML Models Highlight */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.4 }}
  className="mt-12 sm:mt-16"
>
  <Card className="border-accent/30 bg-gradient-to-r from-accent/10 to-primary/10 p-8 sm:p-10">
    <h3 className="mb-6 text-2xl font-bold text-foreground text-center">
      Machine Learning Models
    </h3>

    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
      {[
        { name: 'Random Forest', accuracy: '77.78%' },
        { name: 'Extra Trees', accuracy: '95.96%' },
        { name: 'XGBoost', accuracy: '97%' },
        { name: 'LightGBM', accuracy: '97%' },
      ].map((model, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="relative group rounded-2xl border-2 border-transparent bg-white/40 p-6 text-center backdrop-blur-sm shadow-md transition-all hover:border-gradient-to-r hover:from-primary hover:to-accent hover:bg-white/70"
        >
          {/* Top Gradient Accent */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <p className="text-lg font-semibold text-foreground">{model.name}</p>
          <p className="mt-2 text-sm font-bold text-accent">{model.accuracy} Accuracy</p>

          {/* Interactive Bottom Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 h-1 w-10 bg-gradient-to-r from-primary to-accent origin-left mx-auto rounded-full"
          />
        </motion.div>
      ))}
    </div>
  </Card>
</motion.div>
      </div>
    </section>
  )
}
