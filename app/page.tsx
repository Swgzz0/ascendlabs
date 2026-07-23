'use client'

import { motion } from 'framer-motion'
import { Hero } from './components/home/Hero'
import { Stats } from './components/home/Stats'
import { Features } from './components/home/Features'
import { Testimonials } from './components/home/Testimonials'
import { BeforeAfter } from './components/home/BeforeAfter'
import { FAQ } from './components/home/FAQ'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden"
    >
      <Hero />
      <Stats />
      <Features />
      <Testimonials />
      <BeforeAfter />
      <FAQ />
    </motion.div>
  )
}
