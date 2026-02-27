'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Smartphone, Zap, MessageSquare } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

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

export function DemoSection() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const appScreens = [
    {
      title: 'Login & Authentication',
      description: 'Secure user authentication with multi-language support',
      icon: '🔐',
      highlight: 'Multi-factor authentication',
    },
    {
      title: 'DASS-21 Assessment',
      description: 'Interactive psychological assessment that shows the DAS Label',
      icon: '📋',
      highlight: '21 targeted questions',
    },
    {
      title: 'Lifestyle Data Input',
      description: 'Comprehensive lifestyle and behavioral data collection',
      icon: '⚙️',
      highlight: '16 lifestyle factors',
    },
    {
      title: 'AI Prediction Result',
      description: 'Real-time mental health prediction and risk assessment',
      icon: '🤖',
      highlight: '97%+ accuracy',
    },
    {
      title: 'Personalized Recommendations',
      description: 'AI-generated Personalized Suggestions and intervention plans',
      icon: '💡',
      highlight: 'Culturally sensitive support',
    },
  ]

  const workflowSteps = [
    {
      title: 'User Input',
      description: 'Complete DASS-21 assessment and lifestyle questionnaire',
      icon: '📝',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'ML Prediction',
      description: 'Advanced ensemble models analyze patterns',
      icon: '⚙️',
      color: 'from-orange-500 to-orange-600',
    },
    {
      title: 'AI Recommendation',
      description: 'Meta-Llama generates personalized support',
      icon: '✨',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Intervention Delivery',
      description: 'User receives actionable mental health guidance',
      icon: '🎯',
      color: 'from-green-500 to-green-600',
    },
  ]

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % appScreens.length)
  }

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + appScreens.length) % appScreens.length)
  }

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
              <p className="text-sm font-medium text-primary">Application Demo</p>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Eternity App Walkthrough
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Experience the complete user journey from assessment to personalized intervention
          </p>
        </motion.div>

        {/* Mobile App Carousel */}
        <div className="mb-16 lg:mb-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Carousel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >
              <div className="relative h-96 w-64">
                {/* Phone Frame */}
                <motion.div
                  animate={{ scale: 1 }}
                  className="relative mx-auto h-full w-full rounded-3xl border-8 border-foreground/10 bg-gradient-to-br from-primary/5 to-accent/5 shadow-2xl overflow-hidden"
                >
                  {/* Screen Content */}
                  <AnimatePresence>
                    <motion.div
                      key={currentScreen}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                    >
                      <div className="text-6xl mb-4">{appScreens[currentScreen].icon}</div>
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {appScreens[currentScreen].title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-4">
                        {appScreens[currentScreen].description}
                      </p>
                      <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1">
                        <Zap className="h-3 w-3 text-primary" />
                        <span className="text-xs font-semibold text-primary">
                          {appScreens[currentScreen].highlight}
                        </span>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Screen indicators */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {appScreens.map((_, index) => (
                      <motion.div
                        key={index}
                        animate={{
                          scale: index === currentScreen ? 1.2 : 1,
                          backgroundColor:
                            index === currentScreen
                              ? 'rgb(0, 123, 255)'
                              : 'rgb(200, 200, 200)',
                        }}
                        className="h-2 w-2 rounded-full cursor-pointer"
                        onClick={() => setCurrentScreen(index)}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Navigation Buttons */}
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  onClick={prevScreen}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 rounded-full bg-primary/20 p-2 text-primary hover:bg-primary/30 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  onClick={nextScreen}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 rounded-full bg-primary/20 p-2 text-primary hover:bg-primary/30 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </motion.button>
              </div>
            </motion.div>

            {/* Screen Features */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Key Features
              </h3>

              {appScreens.map((screen, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  onClick={() => setCurrentScreen(index)}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className={`cursor-pointer rounded-lg border-2 p-4 transition-all ${
                    index === currentScreen
                      ? 'border-primary bg-primary/10'
                      : 'border-border/30 bg-white/30 hover:border-primary/50 hover:bg-white/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 text-2xl">{screen.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground">
                        {screen.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {screen.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        

        
      </div>
    </section>
  )
}

// Import AnimatePresence for carousel animations
import { AnimatePresence } from 'framer-motion'
