'use client'

import { motion } from 'framer-motion'
import { Camera, BarChart3, Calendar, Users2, Sparkles, Brain } from 'lucide-react'

const features = [
  { icon: Camera, title: 'Face Analysis', description: 'AI-powered analysis of facial symmetry, skin quality, and proportions with actionable insights.', color: 'from-blue-500 to-cyan-400' },
  { icon: BarChart3, title: 'Progress Tracking', description: 'Track your transformation with photo comparisons, habit streaks, and improvement charts.', color: 'from-purple-500 to-pink-400' },
  { icon: Brain, title: 'Personalized Plans', description: 'Get custom roadmaps for skincare, fitness, nutrition, and style based on your goals.', color: 'from-green-500 to-teal-400' },
  { icon: Calendar, title: 'Habit Tracker', description: 'Build daily habits with guided checklists for sleep, hydration, exercise, and more.', color: 'from-orange-500 to-red-400' },
  { icon: Users2, title: 'Community', description: 'Connect with like-minded individuals, share progress, and participate in challenges.', color: 'from-pink-500 to-rose-400' },
  { icon: Sparkles, title: 'AI Coaching', description: 'Premium AI coach providing personalized advice and motivation throughout your journey.', color: 'from-yellow-500 to-amber-400' },
]

export function Features() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Everything You Need to <span className="gradient-text">Ascend</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive tools and features designed to help you become the best version of yourself.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass glass-hover p-8 rounded-2xl group"
            >
              <div className={'w-14 h-14 rounded-xl bg-gradient-to-br ' + feature.color + ' p-3 mb-4 group-hover:scale-110 transition-transform'}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}