'use client'

import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Award, 
  Calendar, 
  Activity,
  Target,
  Sparkles,
  Clock,
  CheckCircle2
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-6 py-12"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-display font-bold">Dashboard</h1>
          <p className="text-gray-400 mt-1">Track your progress and stay consistent.</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="glass px-4 py-2 rounded-xl text-sm">
            <span className="text-space-blue font-medium">Streak:</span> 12 days 🔥
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: TrendingUp, value: '85', label: 'Overall Score', change: '+5%' },
          { icon: Award, value: '24', label: 'Achievements', change: '+2' },
          { icon: Calendar, value: '12', label: 'Day Streak', change: '🔥' },
          { icon: Activity, value: '68%', label: 'Habit Completion', change: '+8%' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="glass glass-hover p-6 rounded-2xl"
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

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Habits */}
        <div className="lg:col-span-2 glass rounded-2xl p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-space-blue" />
            Daily Habits
          </h3>
          <div className="space-y-3">
            {[
              { habit: '💧 Drink 8 glasses of water', done: true },
              { habit: '😴 7-8 hours of sleep', done: true },
              { habit: '🏋️ Exercise (30 min)', done: false },
              { habit: '🧴 Skincare routine', done: true },
              { habit: '☀️ Apply sunscreen', done: false },
              { habit: '🥗 Healthy meals', done: true },
              { habit: '📚 Reading (20 min)', done: false },
              { habit: '🧘 Meditation', done: true },
            ].map((habit, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 glass rounded-xl hover:border-space-blue/30 transition-colors"
              >
                <span className="text-sm">{habit.habit}</span>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                  habit.done ? 'bg-green-500/20 text-green-400' : 'bg-gray-700/30 text-gray-500'
                }`}>
                  {habit.done && <CheckCircle2 className="w-4 h-4" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-space-blue" />
              Goals
            </h3>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Skin clarity</span>
                  <span className="text-space-blue">70%</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-space-blue to-space-light rounded-full" style={{ width: '70%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Fitness level</span>
                  <span className="text-space-blue">55%</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-space-blue to-space-light rounded-full" style={{ width: '55%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Confidence</span>
                  <span className="text-space-blue">80%</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-space-blue to-space-light rounded-full" style={{ width: '80%' }} />
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-space-blue" />
              Quick Actions
            </h3>
            <div className="space-y-2">
              <Link href="/analysis">
                <button className="w-full btn-primary text-sm px-4 py-2 rounded-xl">
                  New Analysis
                </button>
              </Link>
              <Link href="/progress">
                <button className="w-full btn-secondary text-sm px-4 py-2 rounded-xl">
                  View Progress
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}