'use client'

import { motion } from 'framer-motion'
import { Check, Sparkles, Crown } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '',
    description: 'Start your journey',
    features: [
      'Basic face analysis (1x)',
      '5 habit tracking',
      'Basic guides access',
      'Community access'
    ],
    popular: false
  },
  {
    name: 'Premium',
    price: '.99',
    description: 'Unlock full potential',
    features: [
      'Unlimited face analysis',
      'Unlimited habit tracking',
      'All guides access',
      'Personalized plans',
      'Progress tracking',
      'AI coaching',
      'Priority support'
    ],
    popular: true
  },
  {
    name: 'Pro',
    price: '.99',
    description: 'Maximum optimization',
    features: [
      'Everything in Premium',
      'Advanced AI analysis',
      'Custom plan creation',
      'Group sessions',
      '1-on-1 coach calls',
      'Exclusive community',
      'Early access features'
    ],
    popular: false
  }
]

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Choose Your <span className="gradient-text">Plan</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Invest in yourself with the plan that fits your goals.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className={glass glass-hover p-8 rounded-2xl text-center relative }
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-space-blue to-space-light rounded-full text-xs font-semibold">
                Most Popular
              </div>
            )}
            
            <div className="flex justify-center mb-4">
              {plan.name === 'Pro' ? (
                <Crown className="w-10 h-10 text-yellow-400" />
              ) : (
                <Sparkles className="w-10 h-10 text-space-blue" />
              )}
            </div>

            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <div className="mt-2 mb-4">
              <span className="text-4xl font-bold gradient-text">{plan.price}</span>
              <span className="text-gray-400 text-sm">/month</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">{plan.description}</p>

            <ul className="space-y-3 text-left mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-space-blue mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className={w-full  text-sm px-6 py-3 rounded-xl}>
              {plan.cta || 'Get Started'}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
