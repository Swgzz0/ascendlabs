'use client'

import { motion } from 'framer-motion'

const transformations = [
  { before: 'https://via.placeholder.com/400x400/1a1a1a/4A9EFF?text=Before', after: 'https://via.placeholder.com/400x400/1a1a1a/6BB5FF?text=After', title: 'Facial Symmetry', improvement: '+42%' },
  { before: 'https://via.placeholder.com/400x400/1a1a1a/4A9EFF?text=Before', after: 'https://via.placeholder.com/400x400/1a1a1a/6BB5FF?text=After', title: 'Skin Quality', improvement: '+38%' },
]

export default function BeforeAfter() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="section-label">Transformations</div>
          <h2 className="section-title">Real <span className="gradient-text">results</span></h2>
          <p className="section-subtitle mx-auto">Visual proof that consistent effort creates real change.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="glass overflow-hidden rounded-2xl"
            >
              <div className="grid grid-cols-2">
                <div className="relative h-64">
                  <img src={item.before} alt="Before" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 bg-red-500/80 px-3 py-1 rounded text-xs font-semibold">Before</div>
                </div>
                <div className="relative h-64">
                  <img src={item.after} alt="After" className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 right-3 bg-emerald-500/80 px-3 py-1 rounded text-xs font-semibold">After</div>
                </div>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-400 text-sm">Improvement</p>
                </div>
                <span className="text-emerald-400 font-bold text-lg">{item.improvement}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
