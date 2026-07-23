'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  { name: 'Alex Chen', role: 'Software Engineer', text: 'The face analysis gave me insights I never considered before. My skincare routine is now 10x better.', rating: 5 },
  { name: 'Sarah Johnson', role: 'Fitness Coach', text: 'My clients have seen remarkable results using this platform. The habit tracker is a game-changer.', rating: 5 },
  { name: 'Marcus Rivera', role: 'Medical Student', text: 'Evidence-based advice with no fake promises. Exactly what the self-improvement space needs.', rating: 5 },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="section-label">Testimonials</div>
          <h2 className="section-title">What our <span className="gradient-text">community</span> says</h2>
          <p className="section-subtitle mx-auto">Real stories from real people on their journey.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="glass glass-hover p-8 rounded-2xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-space-blue text-space-blue" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">&quot;{t.text}&quot;</p>
              <div className="mt-4">
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-gray-500 text-xs">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
