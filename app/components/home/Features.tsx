'use client'

import { motion } from 'framer-motion'
import { Camera, BarChart3, Calendar, Users2, Sparkles, Brain } from 'lucide-react'

const features = [
  { icon: Camera, title: 'Face Analysis', description: 'AI-powered analysis of facial symmetry, skin quality, and proportions with actionable insights.', color: 'from-blue-500 to-cyan-400' },
  { icon: BarChart3, title: 'Progress Tracking', description: 'Track your transformation with photo comparisons, habit streaks, and improvement charts.', color: 'from-purple-500 to-pink-400' },
  { icon: Brain, title: 'Personalized Plans', description: 'Get custom roadmaps for skincare, fitness, nutrition, and style based on your goals.', color: 'from-emerald-500 to-teal-400' },
  { icon: Calendar, title: 'Habit Tracker', description: 'Build daily habits with guided checklists for sleep, hydration, exercise, and more.', color: 'from-orange-500 to-amber-400' },
  { icon: Users2, title: 'Community', description: 'Connect with like-minded individuals, share progress, and participate in challenges.', color: 'from-rose-500 to-pink-400' },
  { icon: Sparkles, title: 'AI Coaching', description: 'Premium AI coach providing personalized advice and motivation throughout your journey.', color: 'from-yellow-500 to-amber-400' },
]

export default function Features() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="section-badge">Features</span>
          <h2 className="section-title mx-auto max-w-3xl">
            Everything You Need to <span className="gradient-text">Ascend</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Comprehensive tools designed to help you become the best version of yourself.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.5 }}
              className="glass glass-hover p-8 rounded-2xl"
            >
              <div className={'w-14 h-14 rounded-2xl bg-gradient-to-br ' + feature.color + ' p-3.5 mb-5'}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2.5">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
