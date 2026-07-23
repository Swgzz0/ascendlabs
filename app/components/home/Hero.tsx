'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Shield, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Orbs */}
      <div className="absolute inset-0">
        <div className="orb orb-blue w-[600px] h-[600px] top-[-200px] left-[-100px] animate-float" />
        <div className="orb orb-purple w-[500px] h-[500px] bottom-[-200px] right-[-100px] animate-float-slow" />
        <div className="orb orb-cyan w-[400px] h-[400px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.02) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-20">
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
            className="inline-flex items-center gap-3 glass-light px-5 py-2.5 rounded-full text-sm"
          >
            <Sparkles className="w-4 h-4 text-space-blue" />
            <span className="text-gray-300 font-medium">AI-Powered Self-Improvement</span>
            <span className="w-1.5 h-1.5 bg-space-blue rounded-full" />
            <span className="text-gray-500">v2.0</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-7xl md:text-8xl lg:text-9xl font-display font-bold leading-[1.05] tracking-tight"
          >
            Become Your
            <br />
            <span className="gradient-text">Best Self.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Evidence-based tools and AI analysis to optimize your appearance,
            health, confidence, and lifestyle.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <Link href="/analysis">
              <button className="btn-primary group flex items-center gap-3 text-lg px-10 py-5">
                Start Analysis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </Link>
            <Link href="/guides">
              <button className="btn-secondary text-lg px-10 py-5 flex items-center gap-2">
                Explore Guides
              </button>
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex items-center justify-center gap-10 pt-6 flex-wrap"
          >
            <div className="flex items-center gap-2.5 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {['https://i.pravatar.cc/40?img=1', 'https://i.pravatar.cc/40?img=2', 'https://i.pravatar.cc/40?img=3', 'https://i.pravatar.cc/40?img=4'].map((src, i) => (
                  <img key={i} src={src} className="w-8 h-8 rounded-full border-2 border-dark" />
                ))}
              </div>
              <span className="ml-1"><span className="text-white font-semibold">10K+</span> transformations</span>
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
