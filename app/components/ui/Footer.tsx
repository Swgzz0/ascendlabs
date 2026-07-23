'use client'

import Link from 'next/link'
import { Sparkles, Twitter, Youtube, Instagram, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <Sparkles className="w-5 h-5 text-space-blue" />
              <span>ASCEND<span style={{ color: '#4A9EFF' }}>LABS</span></span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Evidence-based self-improvement tools to help you become your best self.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/analysis" className="text-sm text-gray-500 hover:text-white transition">Analysis</Link></li>
              <li><Link href="/dashboard" className="text-sm text-gray-500 hover:text-white transition">Dashboard</Link></li>
              <li><Link href="/pricing" className="text-sm text-gray-500 hover:text-white transition">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition">About</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition">
                <Twitter className="w-4 h-4 text-gray-400" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition">
                <Youtube className="w-4 h-4 text-gray-400" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition">
                <Instagram className="w-4 h-4 text-gray-400" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition">
                <Github className="w-4 h-4 text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AscendLabs. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Made with ❤️ for the self-improvement community.
          </p>
        </div>
      </div>
    </footer>
  )
}
