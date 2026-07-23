'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Small badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm">
            <Sparkles className="w-4 h-4 text-space-blue" />
            <span className="text-gray-400">AI-Powered Self-Improvement</span>
          </div>

          {/* BIG TITLE */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold leading-[1.05] tracking-tight">
            <span className="gradient-text">Ascend</span>
            <span className="text-white ml-2">Labs</span>
          </h1>

          {/* Subtitle with bold words */}
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            The <span className="text-white font-medium">evidence-based</span> self-improvement platform.
            <br />
            Zero gimmicks. Maximum results. Complete transformation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/analysis">
              <button className="btn-primary">
                Start Analysis <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/guides">
              <button className="btn-secondary">Learn More</button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
