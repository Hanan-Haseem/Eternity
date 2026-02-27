'use client'

import { motion, Variants, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Users, Brain, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 16,
    },
  },
}

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  const stats = [
    { icon: Users, label: 'Students Surveyed', value: '1,000+' },
    { icon: Brain, label: 'ML Accuracy', value: '97%+' },
    { icon: Zap, label: 'Multilingual Support', value: '3 Languages' },
  ]

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#f0f4f8] min-h-screen flex flex-col"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Google Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Instrument+Serif&display=swap');

        .hero-title {
          font-family: 'Instrument Serif', serif;
          font-style: normal;
          font-weight: 700;
          letter-spacing: 0.01em;
          transform: scaleX(1.08);
          transform-origin: center;
          display: inline-block;
        }
        .hero-gradient-text {
          background: linear-gradient(135deg, #1a6b5c 0%, #2d9e7e 40%, #1a6b5c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .noise-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 128px;
          pointer-events: none;
        }
        .stat-card {
          background: rgba(255,255,255,0.7);
          border: 1px solid rgba(45, 158, 126, 0.15);
          backdrop-filter: blur(12px);
        }
        .stat-card:hover {
          background: rgba(255,255,255,0.9);
          border-color: rgba(45, 158, 126, 0.35);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(45, 158, 126, 0.12);
        }
      `}</style>

      {/* Noise texture */}
      <div className="noise-overlay" />

      {/* Large decorative circle — top right */}
      <div
        className="absolute -right-32 -top-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(45,158,126,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Decorative arc — bottom left */}
      <div
        className="absolute -left-40 bottom-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(26,107,92,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Thin horizontal rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2d9e7e]/30 to-transparent" />

      {/* ── Main content ── */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24 pb-12 sm:pt-32 sm:pb-16 flex flex-col items-center text-center"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="w-full">

          {/* Eyebrow badge */}
          <motion.div variants={item} className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2d9e7e]/25 bg-white/60 px-5 py-2 backdrop-blur-sm shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#2d9e7e] animate-pulse" />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }} className="text-sm text-[#1a6b5c] tracking-wide uppercase">
                AI-Driven Mental Health Innovation
              </p>
            </div>
          </motion.div>

          {/* Main title */}
          <motion.h1
            variants={item}
            className="hero-title mb-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[#0f2e27]"
          >
            Personalized{' '}
            <span className="hero-gradient-text">Mental Health</span>
            <br />
            Intervention System
          </motion.h1>

          {/* Sub-heading */}
          <motion.p
            variants={item}
            className="mb-4 text-base sm:text-lg text-[#3d6b5e]/80 max-w-2xl mx-auto"
            style={{ fontWeight: 400 }}
          >
            Fine-Tuned Large Language Model–Enabled Support
          </motion.p>

          {/* Description */}
          <motion.p
            variants={item}
            className="mb-10 text-sm sm:text-base text-[#3d6b5e]/60 max-w-xl mx-auto leading-relaxed"
            style={{ fontWeight: 300 }}
          >
            For USJ Students Using DASS-21 Scores and Lifestyle Data
          </motion.p>

          {/* CTA */}
          <motion.div variants={item} className="mb-16 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link href="/research">
              <Button
                size="lg"
                className="gap-2 rounded-full px-8 py-6 text-base font-medium shadow-lg shadow-[#2d9e7e]/20 transition-all hover:shadow-[#2d9e7e]/40 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #1a6b5c, #2d9e7e)',
                  color: 'white',
                  border: 'none',
                }}
              >
                Explore Research
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            
          </motion.div>

          {/* Stats — always 3 columns, compact on mobile */}
          <motion.div
            variants={container}
            className="grid grid-cols-3 gap-2 sm:gap-4 max-w-3xl mx-auto w-full"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="stat-card rounded-2xl transition-all duration-300"
                >
                  <div className="flex flex-col items-center justify-center gap-1.5 px-2 py-4 text-center sm:gap-3 sm:px-6 sm:py-7">
                    {/* Icon */}
                    <div
                      className="rounded-xl p-1.5 sm:p-2.5"
                      style={{ background: 'linear-gradient(135deg, rgba(45,158,126,0.15), rgba(26,107,92,0.08))' }}
                    >
                      <Icon className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-[#1a6b5c]" />
                    </div>
                    {/* Value */}
                    <p
                      className="text-base sm:text-2xl font-semibold text-[#0f2e27] leading-none"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      {stat.value}
                    </p>
                    {/* Label — shorter on mobile */}
                    <p className="text-[9px] sm:text-xs text-[#3d6b5e]/60 font-medium tracking-wide uppercase leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scrolling marquee strip ── */}
      <div className="relative z-10 w-full overflow-hidden border-y border-[#2d9e7e]/15 bg-white/40 backdrop-blur-sm py-3 mb-0">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[
            'DASS-21 Assessment', 'LLM Fine-Tuning', 'Mental Health AI',
            'USJ Students', 'Lifestyle Analysis', 'Multilingual Support',
            'Predictive Modeling', '97% Accuracy', 'Real-Time Insights',
            'DASS-21 Assessment', 'LLM Fine-Tuning', 'Mental Health AI',
            'USJ Students', 'Lifestyle Analysis', 'Multilingual Support',
            'Predictive Modeling', '97% Accuracy', 'Real-Time Insights',
          ].map((text, i) => (
            <span
              key={i}
              className="text-xs font-medium tracking-widest uppercase text-[#1a6b5c]/40"
            >
              {text}
              <span className="mx-6 text-[#2d9e7e]/30">·</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── App screenshot ── */}
      <motion.div style={{ y: imageY }} className="relative z-10 w-full mt-0">
        <div
          className="absolute top-0 left-0 right-0 h-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #f0f4f8, transparent)' }}
        />
        <Image
          src="/eternit.png"
          alt="Eternity App Screenshot – Personalized Mental Health Intervention System for USJ Students"
          width={6000}
          height={3375}
          className="w-full h-auto object-cover"
          priority
          quality={85}
        />
      </motion.div>
    </section>
  )
}