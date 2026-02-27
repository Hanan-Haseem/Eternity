'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Target, TrendingDown } from 'lucide-react'
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

export function AboutSection() {
  const mentalHealthStats = [
    { label: 'Depression', range: '35.1 – 63.8%' },
    { label: 'Anxiety', range: '40.5 – 60%' },
    { label: 'Stress', range: '27.7 – 87.9%' },
  ]

  const challenges = [
    { icon: '📚', title: 'Academic Pressure', desc: 'High stress from coursework and exams' },
    { icon: '⚖️', title: 'Lifestyle Imbalance', desc: 'Poor sleep, nutrition, and work-life balance' },
    { icon: '🎓', title: 'Ragging Impact', desc: 'Senior-junior relationship challenges' },
    { icon: '🏥', title: 'Limited Access', desc: 'Insufficient counseling services available' },
  ]

  return (
    <section className="relative bg-background py-16 sm:py-24">
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
              <p className="text-sm font-medium text-primary">Mental Health Challenge</p>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Why Eternity ?
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Understanding the mental health crisis among university students
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Stats and Info */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Mental Health Statistics */}
            <motion.div variants={item}>
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
                <AlertCircle className="h-6 w-6 text-primary" />
                Prevalence among Sri Lankan University Students
              </h3>
              <div className="space-y-3">
                {mentalHealthStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="rounded-lg border border-border/50 bg-card/50 p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{stat.label}</span>
                      <span className="rounded-full bg-accent/20 px-3 py-1 text-sm font-bold text-accent">
                        {stat.range}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Challenges */}
            <motion.div variants={item}>
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
                <TrendingDown className="h-6 w-6 text-primary" />
                Contributing Factors
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {challenges.map((challenge, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="rounded-lg border border-border/50 bg-white/50 p-4 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-white/70"
                  >
                    <div className="text-2xl mb-2">{challenge.icon}</div>
                    <p className="text-sm font-medium text-foreground">{challenge.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{challenge.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Research Objective */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-8 sm:p-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">Research Objective</h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
              Develop and evaluate a fine-tuned LLM-enabled system to predict and support mental health using DASS-21 and lifestyle data via mobile app.
              
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">
                    <strong>Accurate prediction</strong> of mental health conditions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">
                    <strong>Personalized interventions</strong> tailored to individual needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">
                    <strong>Culturally sensitive</strong> support in local languages
                  </span>
                </li>
                
              </ul>
            </Card>

            {/* Infographic Placeholder */}
           
          </motion.div>
        </div>
      </div>
    </section>
  )
}
