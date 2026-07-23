'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '99.9%', label: 'Uptime', detail: 'Reliability' },
  { value: '2,847', label: 'Active Users', detail: 'Growing daily' },
  { value: '100%', label: 'Privacy', detail: 'Your data is safe' },
]

export default function Stats() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="divider-light mb-14" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold gradient-text">{stat.value}</div>
              <div className="text-white font-medium text-lg mt-1">{stat.label}</div>
              <div className="text-gray-500 text-sm">{stat.detail}</div>
            </motion.div>
          ))}
        </div>
        <div className="divider-light mt-14" />
      </div>
    </section>
  )
}
