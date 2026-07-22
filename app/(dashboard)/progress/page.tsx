'use client'

import { motion } from 'framer-motion'
import { Calendar, Upload, TrendingUp, Camera, CheckCircle2 } from 'lucide-react'

export default function ProgressPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 py-12"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-display font-bold">Progress Tracker</h1>
          <p className="text-gray-400 mt-1">Track your transformation over time</p>
        </div>
        <button className="btn-primary mt-4 md:mt-0 flex items-center gap-2 text-sm px-6 py-3">
          <Upload className="w-4 h-4" />
          Upload Progress
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { icon: TrendingUp, value: '82', label: 'Overall Progress', change: '+12%' },
          { icon: Camera, value: '24', label: 'Photos Uploaded', change: '+4' },
          { icon: Calendar, value: '67', label: 'Days Tracked', change: '📈' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between">
              <stat.icon className="w-6 h-6 text-space-blue" />
              <span className="text-sm text-green-400">{stat.change}</span>
            </div>
            <div className="mt-3">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass p-6 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-space-blue" />
            Recent Progress
          </h3>
          <div className="space-y-3">
            {[
              { date: 'Dec 15, 2024', weight: '72kg', bodyFat: '15%', score: 85 },
              { date: 'Dec 8, 2024', weight: '73kg', bodyFat: '16%', score: 78 },
              { date: 'Dec 1, 2024', weight: '74kg', bodyFat: '17%', score: 72 },
            ].map((entry, index) => (
              <div key={index} className="glass p-4 rounded-xl flex items-center justify-between">
                <div>
                  <div className="font-medium">{entry.date}</div>
                  <div className="text-sm text-gray-400">
                    {entry.weight} • {entry.bodyFat} body fat
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-space-blue font-bold">{entry.score}%</div>
                  <div className="text-xs text-gray-400">Score</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-6 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-space-blue" />
            Goals & Milestones
          </h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Target weight: 70kg</span>
                <span className="text-space-blue">72kg</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-space-blue to-space-light rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Body fat goal: 12%</span>
                <span className="text-space-blue">15%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-space-blue to-space-light rounded-full" style={{ width: '40%' }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Skin clarity improvement</span>
                <span className="text-space-blue">70%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-space-blue to-space-light rounded-full" style={{ width: '70%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}