'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Alex Chen',
    role: 'Software Engineer',
    content: 'The face analysis gave me insights I never considered before. My skincare routine is now 10x better.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=1'
  },
  {
    name: 'Sarah Johnson',
    role: 'Fitness Coach',
    content: 'My clients have seen remarkable results using this platform. The habit tracker is a game-changer.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=2'
  },
  {
    name: 'Marcus Rivera',
    role: 'Medical Student',
    content: 'Evidence-based advice with no fake promises. Exactly what the self-improvement space needs.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=3'
  },
]

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title mb-4">
            What Our <span className="gradient-text">Community</span> Says
          </h2>
          <p className="section-subtitle mx-auto">
            Real stories from real people on their journey to becoming their best selves.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-premium relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-space-blue/10" />
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white/5"
                />
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-400">{testimonial.role}</div>
                </div>
              </div>
              <div className="flex mb-3.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-space-blue text-space-blue" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                &quot;{testimonial.content}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
