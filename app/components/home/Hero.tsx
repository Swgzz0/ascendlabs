'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient px-6">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] top-[-100px] left-[-100px] bg-space-blue/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute w-[400px] h-[400px] bottom-[-100px] right-[-100px] bg-space-light/10 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-3 glass px-5 py-2.5 rounded-full text-sm"
          >
            <Sparkles className="w-4 h-4 text-space-blue" />
            <span className="text-gray-300 font-medium">AI-Powered Self-Improvement</span>
            <span className="w-1.5 h-1.5 bg-space-blue rounded-full" />
            <span className="text-gray-500 text-xs">v2.0</span>
          </motion.div>

          {/* BIG TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[1.05] tracking-tight"
          >
            Become Your
            <br />
            <span className="gradient-text">Best Self.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Evidence-based tools and AI analysis to optimize your appearance, health, confidence, and lifestyle.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link href="/analysis">
              <button className="btn-primary group flex items-center gap-2 text-lg px-10 py-5">
                Start Analysis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </Link>
            <Link href="/guides">
              <button className="btn-secondary text-lg px-10 py-5">
                Explore Guides
              </button>
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-8 pt-6"
          >
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {['1','2','3','4'].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-dark bg-gradient-to-br from-space-blue/30 to-space-light/30" />
                ))}
              </div>
              <span><span className="text-white font-semibold">10K+</span> transformations</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-space-blue text-space-blue" />
                ))}
              </div>
              <span><span className="text-white font-semibold">4.9</span> (97% satisfaction)</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
