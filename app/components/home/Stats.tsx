'use client'

import { motion } from 'framer-motion'
import { Users, Award, Sparkles, Clock } from 'lucide-react'

const stats = [
  { icon: Users, value: '10,000+', label: 'Active Users' },
  { icon: Award, value: '97%', label: 'Satisfaction Rate' },
  { icon: Sparkles, value: '500+', label: 'AI Analyses' },
  { icon: Clock, value: '24/7', label: 'Support' },
]

export default function Stats() {
  return (
    <section className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center glass p-8 rounded-2xl"
            >
              <stat.icon className="w-8 h-8 text-space-blue mx-auto mb-3" />
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
