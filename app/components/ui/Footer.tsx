'use client'

import Link from 'next/link'
import { Sparkles, Twitter, Youtube, Instagram, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-space-blue" />
              <span className="text-xl font-display font-bold">
                Ascend<span className="gradient-text">Labs</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Evidence-based self-improvement tools to help you become your best self.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link href="/analysis" className="text-sm text-gray-400 hover:text-white transition-colors">Analysis</Link></li>
              <li><Link href="/dashboard" className="text-sm text-gray-400 hover:text-white transition-colors">Dashboard</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:border-space-blue/50 transition-colors">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:border-space-blue/50 transition-colors">
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:border-space-blue/50 transition-colors">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:border-space-blue/50 transition-colors">
                <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AscendLabs. All rights reserved.</p>
          <p className="mt-1">Made with ❤️ for the self-improvement community.</p>
        </div>
      </div>
    </footer>
  )
}
