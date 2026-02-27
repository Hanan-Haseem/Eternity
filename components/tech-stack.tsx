'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
  },
}

export function TechStack() {

  const technologies = [
    { name: 'Python', category: 'Language', logo: '/logo/python.png' },
    { name: 'Scikit-learn', category: 'ML Framework', logo: '/logo/scikitlearn.png' },
    { name: 'XGBoost', category: 'ML Model', logo: '/logo/xgb.png' },
    { name: 'LightGBM', category: 'ML Model', logo: '/logo/lightgbm.png' },
    { name: 'Random Forest', category: 'Algorithm', logo: '/logo/randomforest.png' },
    { name: 'Extra Trees', category: 'Algorithm', logo: '/logo/extratree.png' },
    { name: 'Flutter', category: 'Mobile Dev', logo: '/logo/fluter.png' },
    { name: 'Firebase', category: 'Backend', logo: '/logo/fire-base.png' },
    { name: 'Spring Boot', category: 'Framework', logo: '/logo/springboot.png' },
    { name: 'FastAPI', category: 'Framework', logo: '/logo/fastapi.svg' },
    { name: 'Meta Llama 3.1', category: 'LLM', logo: '/logo/meta llm.webp' },
    { name: 'LoRA', category: 'Fine-tuning', logo: '/logo/qlora.svg' },
  ]

  return (
    <section className="relative bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <div className="inline-flex mb-4">
            <div className="rounded-full bg-primary/10 px-5 py-2">
              <p className="text-sm font-medium text-primary">
                Technology Stack
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            AI & Development Stack
          </h2>

          <p className="mt-4 text-muted-foreground sm:text-lg">
            Powering Eternity using modern AI, Machine Learning and Mobile Technologies
          </p>
        </motion.div>

        {/* ================= TECH GRID ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 220 }}
              className="group"
            >
              <Card
                className="
                  relative h-full
                  rounded-2xl
                  border border-border/40
                  bg-white/60
                  backdrop-blur-xl
                  p-6
                  text-center
                  transition-all duration-300
                  hover:border-primary/40
                  hover:shadow-xl
                  hover:shadow-primary/10
                "
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-primary/5 to-accent/10" />

                {/* LOGO */}
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  className="relative flex justify-center mb-4"
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={64}
                    height={64}
                    className="
                      object-contain
                      h-14 w-14
                      p-1
                      drop-shadow-sm
                    "
                  />
                </motion.div>

                {/* NAME */}
                <h3 className="font-semibold text-foreground text-sm">
                  {tech.name}
                </h3>

                {/* CATEGORY */}
                <p className="mt-1 text-xs text-muted-foreground">
                  {tech.category}
                </p>

              </Card>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}