'use client'

import { motion } from 'framer-motion'
import { User, Bell, Shield, Palette, Sparkles } from 'lucide-react'

export default function SettingsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-6 py-12"
    >
      <div className="mb-10">
        <h1 className="text-4xl font-display font-bold">Settings</h1>
        <p className="text-gray-400 mt-1">Manage your account and preferences</p>
      </div>

      <div className="space-y-6">
        {/* Profile Section */}
        <div className="glass p-6 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-space-blue" />
            Profile Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Full Name</label>
              <input className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-space-blue/50" placeholder="John Doe" defaultValue="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email</label>
              <input className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-space-blue/50" type="email" placeholder="john@example.com" defaultValue="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Age</label>
              <input className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-space-blue/50" type="number" placeholder="25" defaultValue="25" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Location</label>
              <input className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-space-blue/50" placeholder="New York, USA" defaultValue="New York, USA" />
            </div>
          </div>
          <button className="btn-primary mt-4 text-sm px-6 py-3">Save Profile</button>
        </div>

        {/* Appearance Section */}
        <div className="glass p-6 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Palette className="w-5 h-5 text-space-blue" />
            Appearance
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Dark Mode</span>
              <div className="w-12 h-6 bg-space-blue rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-all" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Glass Effect</span>
              <div className="w-12 h-6 bg-space-blue rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-all" />
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="glass p-6 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5 text-space-blue" />
            Notifications
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span>Weekly Progress Reports</span>
              <div className="w-12 h-6 bg-space-blue rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-all" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Community Updates</span>
              <div className="w-12 h-6 bg-gray-600 rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-all" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span>Challenge Reminders</span>
              <div className="w-12 h-6 bg-space-blue rounded-full relative cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-all" />
              </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="glass p-6 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-space-blue" />
            Security
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Current Password</label>
              <input className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-space-blue/50" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">New Password</label>
              <input className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-space-blue/50" type="password" placeholder="••••••••" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Confirm New Password</label>
              <input className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-space-blue/50" type="password" placeholder="••••••••" />
            </div>
            <button className="btn-primary text-sm px-6 py-3">Update Password</button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="glass p-6 rounded-2xl border border-red-500/20">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-red-400">
            <Sparkles className="w-5 h-5" />
            Danger Zone
          </h3>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Delete Account</div>
              <div className="text-sm text-gray-400">This action cannot be undone</div>
            </div>
            <button className="bg-transparent hover:bg-red-500/10 text-red-400 border border-red-500/30 px-6 py-2 rounded-xl text-sm transition-all">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}