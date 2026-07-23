'use client'

import { motion } from 'framer-motion'
import { Users, Award, Sparkles, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Users, value: '10,000+', label: 'Active Users', change: '+22%' },
  { icon: Award, value: '97%', label: 'Satisfaction Rate', change: '+5%' },
  { icon: Sparkles, value: '500+', label: 'AI Analyses', change: '+18%' },
  { icon: TrendingUp, value: '87%', label: 'Improvement Rate', change: '+12%' },
]

export default function Stats() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="section-divider mb-20" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="glass p-8 rounded-2xl text-center"
            >
              <stat.icon className="w-7 h-7 text-space-blue mx-auto mb-3 opacity-60" />
              <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
              <div className="text-xs text-emerald-400/70 mt-2">{stat.change}</div>
            </motion.div>
          ))}
        </div>
        <div className="section-divider mt-20" />
      </div>
    </section>
  )
}
