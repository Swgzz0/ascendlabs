'use client'

import { motion } from 'framer-motion'

const transformations = [
  { before: 'https://via.placeholder.com/400x400/1a1a1a/4A9EFF?text=Before', after: 'https://via.placeholder.com/400x400/1a1a1a/6BB5FF?text=After', title: 'Facial Symmetry Improvement', description: 'Enhanced jawline definition and skin clarity through consistent routine.' },
  { before: 'https://via.placeholder.com/400x400/1a1a1a/4A9EFF?text=Before', after: 'https://via.placeholder.com/400x400/1a1a1a/6BB5FF?text=After', title: 'Skin Quality Transformation', description: 'Reduced blemishes and improved skin texture over 90 days.' },
]

export default function BeforeAfter() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Real <span className="gradient-text">Transformations</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Visual proof that consistent effort and evidence-based advice create real results.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div className="grid grid-cols-2">
                <div className="relative h-64">
                  <img src={item.before} alt="Before" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-2 bg-red-500/80 px-3 py-1 rounded text-xs font-semibold">Before</div>
                </div>
                <div className="relative h-64">
                  <img src={item.after} alt="After" className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 right-2 bg-green-500/80 px-3 py-1 rounded text-xs font-semibold">After</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
