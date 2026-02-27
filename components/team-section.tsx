'use client'

import { motion } from 'framer-motion'
import { Mail, BookOpen } from 'lucide-react'
import { Card } from '@/components/ui/card'
import Image from 'next/image'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export function TeamSection() {

  /* ================= TEAM ================= */
  const teamMembers = [
    {
      name: 'Hanan M.H.',
      role: 'Software Technology',
      index: 'ICT/21/847',
      email: 'ict21847@fot.sjp.ac.lk',
      image: '/team/hanann.png',
    },
    {
      name: 'Hettiarachchi I.S.',
      role: 'Software Technology',
      index: 'ICT/21/848',
      email: 'ict21848@fot.sjp.ac.lk',
      image: '/team/isuruu.png',
    },
    {
      name: 'Kalubovila S.A.',
      role: 'Software Technology',
      index: 'ICT/21/864',
      email: 'ict21864@fot.sjp.ac.lk',
      image: '/team/ashann.png',
    },
  ]

  /* ================= SUPERVISOR ================= */
  const supervisors = [
    {
      name: 'Mrs. Sankani Heenkenda',
      role: 'Academic Supervisor',
      title: 'Lecturer',
      email: 'sankaniheenkenda@sjp.ac.lk',
      image: '/team/madamm.png',
    },
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
                Research Team
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Meet Our Team & Supervisor
          </h2>

          <p className="mt-4 text-muted-foreground sm:text-lg max-w-2xl mx-auto">
            A collaborative research team developing an AI-powered system
            for predicting and managing student mental health conditions.
          </p>
        </motion.div>

        {/* ================= TEAM MEMBERS ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group"
            >
              <Card
                className="
                relative text-center
                rounded-2xl
                border border-border/40
                bg-white/60
                backdrop-blur-xl
                p-8
                transition-all duration-300
                hover:border-primary/40
                hover:shadow-xl
                hover:shadow-primary/10
              "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-primary/5 to-accent/10" />

                {/* PHOTO */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="flex justify-center mb-5"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full object-cover h-28 w-28 border-4 border-white shadow-md"
                  />
                </motion.div>

                {/* INFO */}
                <h4 className="text-lg font-semibold text-foreground">
                  {member.name}
                </h4>

                <p className="text-sm text-primary font-medium">
                  {member.role}
                </p>

                <p className="text-xs text-muted-foreground mt-1">
                  {member.index}
                </p>

                {/* EMAIL CENTERED */}
                <div className="flex justify-center mt-4">
                  <motion.a
                    href={`mailto:${member.email}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition"
                  >
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </motion.a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= SUPERVISOR ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 mt-16 sm:grid-cols-1 lg:grid-cols-1 max-w-md mx-auto"
        >
          {supervisors.map((sup, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group"
            >
              <Card
                className="
                text-center
                rounded-2xl
                border border-accent/40
                bg-gradient-to-br from-accent/10 to-primary/10
                backdrop-blur-xl
                p-8
                transition-all duration-300
                hover:shadow-xl
              "
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  className="flex justify-center mb-5"
                >
                  <Image
                    src={sup.image}
                    alt={sup.name}
                    width={120}
                    height={120}
                    className="rounded-full object-cover h-28 w-28 border-4 border-white shadow-md"
                  />
                </motion.div>

                <h4 className="text-lg font-semibold">
                  {sup.name}
                </h4>

                <p className="text-primary font-medium text-sm">
                  {sup.role}
                </p>

                <p className="text-xs text-muted-foreground">
                  {sup.title}
                </p>

                <div className="flex justify-center mt-4">
                  <motion.a
                    href={`mailto:${sup.email}`}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-sm text-accent"
                  >
                    <Mail className="h-4 w-4" />
                    {sup.email}
                  </motion.a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        

      </div>
    </section>
  )
}