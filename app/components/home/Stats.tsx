'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '99.9%', label: 'Uptime', detail: 'Reliability' },
  { value: '2,847', label: 'Active Users', detail: 'Growing daily' },
  { value: '100%', label: 'Privacy', detail: 'Your data is safe' },
]

export default function Stats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="divider mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text">{stat.value}</div>
              <div className="text-gray-300 font-medium mt-1">{stat.label}</div>
              <div className="text-gray-500 text-sm">{stat.detail}</div>
            </motion.div>
          ))}
        </div>
        <div className="divider mt-16" />
      </div>
    </section>
  )
}
