'use client'

import { motion } from 'framer-motion'
import { Heart, Shield, Brain, Leaf } from 'lucide-react'
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

export function ImpactSection() {
  const impacts = [
    {
      icon: Heart,
      title: 'Early Mental Health Detection',
      description: 'Identify depression, anxiety, and stress conditions at early stages through AI-powered predictive analysis',
      gradient: 'from-red-500 to-red-600',
      color: 'text-red-600',
    },
    {
      icon: Shield,
      title: 'Stigma-Free Digital Support',
      description: 'Provide anonymous, confidential mental health interventions in a safe digital environment without social judgment',
      gradient: 'from-blue-500 to-blue-600',
      color: 'text-blue-600',
    },
    {
      icon: Brain,
      title: 'AI Decision Support for Universities',
      description: 'Enable educational institutions to make informed decisions about student mental health interventions and resource allocation',
      gradient: 'from-purple-500 to-purple-600',
      color: 'text-purple-600',
    },
    {
      icon: Leaf,
      title: 'Student Empowerment and Self-Management',
      description: 'Equip USJ undergraduates with reliable, personalized AI tools for proactive self-management, improving academic performance, retention, and well-being amid campus stressors.',
      gradient: 'from-green-500 to-green-600',
      color: 'text-green-600',
    },
  ]

  return (
    <section className="relative bg-gradient-to-b from-background to-primary/5 py-16 sm:py-24">
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
              <p className="text-sm font-medium text-primary">Impact & Contribution</p>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Real-World Impact
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Transforming mental healthcare through AI innovation
          </p>
        </motion.div>

        {/* Impact Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {impacts.map((impact, index) => {
            const Icon = impact.icon
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <Card className="relative h-full overflow-hidden border-border/50 bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:bg-white/70 hover:shadow-lg">
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5 bg-gradient-to-br from-primary to-accent" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`mb-4 inline-flex rounded-lg bg-gradient-to-br ${impact.gradient} p-3`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="mb-2 font-bold text-foreground text-lg">
                      {impact.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {impact.description}
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
      </div>
    </section>
  )
}
