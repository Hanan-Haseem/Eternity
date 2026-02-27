'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/research', label: 'Research' },
  { href: '/methodology', label: 'Methodology' },
  { href: '/results', label: 'Results' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ backdropFilter: 'blur(0px)', backgroundColor: 'rgba(255, 255, 255, 0)' }}
      animate={{ backdropFilter: 'blur(20px)', backgroundColor: 'rgba(255, 255, 255, 0.95)' }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-[100] border-b border-border/30 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div whileHover={{ scale: 1.05 }} className="relative h-10 w-10">
              <Image
                src="/logo.jpeg"
                alt="Eternity AI Logo"
                fill
                className="object-contain rounded-full"
              />
            </motion.div>
            <span className="text-lg font-bold text-foreground">ETERNITY</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-2 md:flex">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.div
                  whileHover={{ backgroundColor: 'rgba(0, 123, 255, 0.05)' }}
                  className="relative px-3 py-2 text-sm font-medium text-foreground transition-colors rounded-md"
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Download Thesis Button (Desktop) */}
          <motion.a
            href="/Thesis.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="hidden sm:block"
          >
            <button className="group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-300 border border-gray-200 active:scale-[0.97]">
              <Download className="h-4 w-4" />
              Download Thesis
            </button>
          </motion.a>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 top-16 z-50 bg-white/95 backdrop-blur-md border-t border-border/30 shadow-xl rounded-b-lg md:hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-base font-medium text-foreground hover:text-primary transition-colors rounded-md px-2"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Download Button */}
              <motion.a
                href="/Thesis.pdf"
                className="mt-4"
                whileHover={{ scale: 1.02 }}
              >
                <button className="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-black shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300 border border-gray-200 active:scale-[0.97]">
                  <Download className="h-5 w-5" />
                  Download Thesis
                </button>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}