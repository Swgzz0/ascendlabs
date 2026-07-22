'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  { name: 'Alex Chen', role: 'Software Engineer', content: 'AscendLabs completely transformed my approach to self-improvement. The face analysis gave me insights I never considered before.', rating: 5, avatar: 'https://i.pravatar.cc/100?img=1' },
  { name: 'Sarah Johnson', role: 'Fitness Coach', content: 'The habit tracker and personalized plans are game-changers. My clients have seen remarkable results using this platform.', rating: 5, avatar: 'https://i.pravatar.cc/100?img=2' },
  { name: 'Marcus Rivera', role: 'Medical Student', content: 'Evidence-based advice with no fake promises. This is exactly what the self-improvement space needs.', rating: 5, avatar: 'https://i.pravatar.cc/100?img=3' },
]

export function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">What Our Community Says</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Real stories from real people who are on their journey to becoming their best selves.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass glass-hover p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-space-blue/20" />
              <div className="flex items-center gap-4 mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-space-blue text-space-blue" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">&quot;{testimonial.content}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}