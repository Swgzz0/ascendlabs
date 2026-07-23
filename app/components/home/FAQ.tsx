'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { question: 'Is AscendLabs free to use?', answer: 'AscendLabs offers a free tier with basic analysis and limited guides. Premium membership unlocks unlimited analyses, detailed reports, AI coaching, and custom plans starting at .99/month.' },
  { question: 'How does the face analysis work?', answer: 'Our AI analyzes uploaded photos for facial symmetry, skin quality, eye area, jawline definition, hairline, and facial proportions. The analysis provides scores, confidence metrics, and actionable improvement suggestions based on scientific research.' },
  { question: 'Is my data secure?', answer: 'Absolutely. All images are encrypted and not stored permanently. Your data is private and never shared with third parties. We prioritize your privacy and security.' },
  { question: 'How long does it take to see results?', answer: 'Results vary based on consistency and individual factors. Most users notice improvements within 4-8 weeks of following their personalized plan. Remember, self-improvement is a journey, not a destination.' },
  { question: 'What makes AscendLabs different?', answer: 'AscendLabs combines AI technology with evidence-based advice, focusing on holistic improvement across appearance, health, confidence, and lifestyle. We provide actionable, realistic guidance without unrealistic promises.' },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-6 bg-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="text-gray-400 text-lg">Everything you need to know before starting your journey.</p>
        </motion.div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown className={'w-5 h-5 text-space-blue transition-transform duration-300 ' + (openIndex === index ? 'rotate-180' : '')} />
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
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
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
