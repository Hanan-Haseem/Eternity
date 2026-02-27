'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const footerSections = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Research', href: '/research' },
      { label: 'Methodology', href: '/methodology' },
      { label: 'Results', href: '/results' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Download Thesis', href: '/thesis.pdf' },
    ],
  },
  {
    title: 'Organization',
    links: [
      {
        label: 'University of Sri Jayewardenepura',
        href: 'https://www.sjp.ac.lk/',
      },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/30 bg-background">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* ================= TOP GRID ================= */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 items-start">
          
          {/* BRAND WITH LOGO */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative h-10 w-10">
                <Image
                  src="/logo.jpeg"
                  alt="Eternity AI Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <span className="text-lg font-bold">
                ETERNITY 
              </span>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-Powered Mental Health Prediction and Personalized Support System
              developed for university students using Machine Learning and Large
              Language Models.
            </p>
          </motion.div>

          {/* LINK SECTIONS */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-foreground">
                {section.title}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href}>
                      <motion.span
                        whileHover={{ x: 6 }}
                        className="text-sm text-muted-foreground transition hover:text-primary cursor-pointer"
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="my-10 border-t border-border/30" />

        {/* ================= BOTTOM – CENTERED UNIVERSITY INFO ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-2"
        >
         

          <p className="font-semibold text-sm text-foreground text-center">
            Department of Information Communication Technology
          </p>

          <p className="text-sm text-muted-foreground text-center">
            Faculty of Technology · University of Sri Jayewardenepura
          </p>

          <p className="mt-3 text-xs text-muted-foreground text-center">
            © 2026 Eternity — Research Group 07
          </p>
        </motion.div>
      </div>
    </footer>
  )
}