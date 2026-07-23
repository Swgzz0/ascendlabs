'use client'

import { motion } from 'framer-motion'
import { Camera, BarChart3, Calendar, Users2, Sparkles, Brain } from 'lucide-react'

const features = [
  { icon: Camera, title: 'Face Analysis', desc: 'AI-powered analysis of facial symmetry, skin quality, and proportions.' },
  { icon: BarChart3, title: 'Progress Tracking', desc: 'Track your transformation with photo comparisons and habit streaks.' },
  { icon: Brain, title: 'Personalized Plans', desc: 'Get custom roadmaps for skincare, fitness, nutrition, and style.' },
  { icon: Calendar, title: 'Habit Tracker', desc: 'Build daily habits with guided checklists for sleep, hydration, and exercise.' },
  { icon: Users2, title: 'Community', desc: 'Connect with like-minded individuals and share your progress.' },
  { icon: Sparkles, title: 'AI Coaching', desc: 'Premium AI coach providing personalized advice and motivation.' },
]

export default function Features() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="section-label">Premium Features</div>
          <h2 className="section-title">Everything you need for the<br /><span className="gradient-text">ultimate transformation</span></h2>
          <p className="section-subtitle mx-auto">Comprehensive tools designed to help you become the best version of yourself.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="glass glass-hover p-8 rounded-2xl text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-space-blue/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-space-blue" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
