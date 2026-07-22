'use client'

import { motion } from 'framer-motion'
import { Users, MessageCircle, Trophy, Flame, Sparkles } from 'lucide-react'

export default function CommunityPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Community <span className="gradient-text">Hub</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Connect, share, and grow together with like-minded individuals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Users, value: '2,847', label: 'Members' },
          { icon: MessageCircle, value: '1.2k', label: 'Posts' },
          { icon: Trophy, value: '47', label: 'Challenges' },
          { icon: Flame, value: '89', label: 'Active Streaks' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass p-6 rounded-2xl text-center"
          >
            <stat.icon className="w-8 h-8 text-space-blue mx-auto mb-2" />
            <div className="text-2xl font-bold gradient-text">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="glass p-8 rounded-2xl text-center">
        <Sparkles className="w-12 h-12 text-space-blue mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Coming Soon!</h3>
        <p className="text-gray-400">Community features are being built. Stay tuned!</p>
      </div>
    </motion.div>
  )
}
