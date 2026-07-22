'use client'

import { motion } from 'framer-motion'
import { Search, Book, Sparkles } from 'lucide-react'

const guides = [
  { title: 'Skincare 101', category: 'Skincare', readTime: '5 min', level: 'Beginner' },
  { title: 'Haircare Routine', category: 'Haircare', readTime: '7 min', level: 'Intermediate' },
  { title: 'Beard Grooming Guide', category: 'Grooming', readTime: '6 min', level: 'Beginner' },
  { title: 'Fashion Fundamentals', category: 'Fashion', readTime: '8 min', level: 'Beginner' },
  { title: 'Fragrance Guide', category: 'Fragrance', readTime: '4 min', level: 'Beginner' },
  { title: 'Fitness for Beginners', category: 'Fitness', readTime: '10 min', level: 'Beginner' },
  { title: 'Nutrition Basics', category: 'Nutrition', readTime: '9 min', level: 'Intermediate' },
  { title: 'Building Confidence', category: 'Confidence', readTime: '6 min', level: 'All levels' },
]

export default function GuidesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Looks & Lifestyle <span className="gradient-text">Guides</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Evidence-based guides to help you improve every aspect of your appearance and lifestyle.
        </p>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              placeholder="Search guides..."
              className="w-full px-4 py-3 pl-10 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-space-blue/50"
            />
          </div>
        </div>
        <select className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-space-blue/50">
          <option value="">All Categories</option>
          <option value="skincare">Skincare</option>
          <option value="haircare">Haircare</option>
          <option value="grooming">Grooming</option>
          <option value="fashion">Fashion</option>
          <option value="fitness">Fitness</option>
          <option value="nutrition">Nutrition</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="glass glass-hover p-6 rounded-2xl cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-space-blue/10 flex items-center justify-center">
                <Book className="w-5 h-5 text-space-blue" />
              </div>
              <span className="text-xs px-2 py-1 bg-space-blue/20 rounded-full text-space-blue">
                {guide.category}
              </span>
            </div>
            <h3 className="font-semibold text-lg mb-1 group-hover:text-space-blue transition-colors">
              {guide.title}
            </h3>
            <p className="text-sm text-gray-400">
              {guide.readTime} read • {guide.level}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
