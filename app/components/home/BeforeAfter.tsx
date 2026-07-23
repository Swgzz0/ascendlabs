'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const transformations = [
  {
    before: 'https://via.placeholder.com/400x400/1a1a1a/4A9EFF?text=Before',
    after: 'https://via.placeholder.com/400x400/1a1a1a/6BB5FF?text=After',
    title: 'Facial Symmetry Improvement',
    description: 'Enhanced jawline definition and skin clarity through consistent routine.',
    improvement: '+42%'
  },
  {
    before: 'https://via.placeholder.com/400x400/1a1a1a/4A9EFF?text=Before',
    after: 'https://via.placeholder.com/400x400/1a1a1a/6BB5FF?text=After',
    title: 'Skin Quality Transformation',
    description: 'Reduced blemishes and improved skin texture over 90 days.',
    improvement: '+38%'
  },
]

export default function BeforeAfter() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label">Transformations</span>
          <h2 className="section-title mb-4">
            Real <span className="gradient-text">Results</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Visual proof that consistent effort and evidence-based advice create real change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="glass overflow-hidden rounded-2xl group"
            >
              <div className="grid grid-cols-2">
                <div className="relative h-72">
                  <img src={item.before} alt="Before" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 bg-red-500/80 px-3 py-1 rounded-lg text-xs font-semibold backdrop-blur-sm">Before</div>
                </div>
                <div className="relative h-72">
                  <img src={item.after} alt="After" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 right-3 bg-emerald-500/80 px-3 py-1 rounded-lg text-xs font-semibold backdrop-blur-sm">After</div>
                </div>
              </div>
              <div className="p-6 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-400 text-sm font-light">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-400 text-sm font-semibold bg-emerald-400/10 px-3 py-1.5 rounded-full">
                    <Sparkles className="w-3.5 h-3.5" />
                    {item.improvement}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
