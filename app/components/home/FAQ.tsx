'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  { question: 'Is AscendLabs free to use?', answer: 'AscendLabs offers a free tier with basic analysis and limited guides. Premium membership unlocks unlimited analyses, detailed reports, AI coaching, and custom plans starting at .99/month.' },
  { question: 'How does the face analysis work?', answer: 'Our AI analyzes uploaded photos for facial symmetry, skin quality, eye area, jawline definition, hairline, and facial proportions. The analysis provides scores, confidence metrics, and actionable improvement suggestions based on scientific research.' },
  { question: 'Is my data secure?', answer: 'Absolutely. All images are encrypted and not stored permanently. Your data is private and never shared with third parties. We prioritize your privacy and security.' },
  { question: 'How long does it take to see results?', answer: 'Results vary based on consistency and individual factors. Most users notice improvements within 4-8 weeks of following their personalized plan. Self-improvement is a journey, not a destination.' },
  { question: 'What makes AscendLabs different?', answer: 'AscendLabs combines AI technology with evidence-based advice, focusing on holistic improvement across appearance, health, confidence, and lifestyle. We provide actionable, realistic guidance without unrealistic promises.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-28 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-badge">FAQ</span>
          <h2 className="section-title mx-auto max-w-3xl">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Everything you need to know before starting your journey.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              className="glass rounded-2xl overflow-hidden border border-white/5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-4 h-4 text-space-blue/60 flex-shrink-0" />
                  <span className="font-medium text-sm">{faq.question}</span>
                </div>
                <ChevronDown
                  className={'w-5 h-5 text-space-blue transition-transform duration-300 flex-shrink-0 ' + (openIndex === index ? 'rotate-180' : '')}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-gray-400 text-sm leading-relaxed font-light pl-7">{faq.answer}</p>
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
