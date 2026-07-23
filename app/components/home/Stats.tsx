'use client'

import { motion } from 'framer-motion'
import { Users, Award, Sparkles, Clock, TrendingUp, Star } from 'lucide-react'

const stats = [
  { icon: Users, value: '10,000+', label: 'Active Users', change: '+22%' },
  { icon: Award, value: '97%', label: 'Satisfaction Rate', change: '+5%' },
  { icon: Sparkles, value: '500+', label: 'AI Analyses', change: '+18%' },
  { icon: TrendingUp, value: '87%', label: 'Improvement Rate', change: '+12%' },
]

export default function Stats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="divider-gradient mb-16" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass p-8 rounded-2xl text-center group hover:border-space-blue/10 transition-all"
            >
              <stat.icon className="w-8 h-8 text-space-blue mx-auto mb-3 opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
              <div className="text-xs text-green-400/60 mt-2">{stat.change}</div>
            </motion.div>
          ))}
        </div>
        <div className="divider-gradient mt-16" />
      </div>
    </section>
  )
}
