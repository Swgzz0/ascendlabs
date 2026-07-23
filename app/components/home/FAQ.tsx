'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  { q: 'Is AscendLabs free?', a: 'AscendLabs offers a free tier with basic analysis. Premium starts at .99/month for unlimited features.' },
  { q: 'How does face analysis work?', a: 'Our AI analyzes facial symmetry, skin quality, jawline definition, and proportions with actionable insights.' },
  { q: 'Is my data secure?', a: 'Absolutely. All images are encrypted, not stored permanently, and never shared with third parties.' },
  { q: 'How long to see results?', a: 'Most users notice improvements within 4-8 weeks of following their personalized plan.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.3 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium">{faq.q}</span>
                <ChevronDown className={'w-5 h-5 text-space-blue transition-transform duration-300 ' + (openIndex === index ? 'rotate-180' : '')} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-400 text-sm">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
