'use client'

import Link from 'next/link'
import { Sparkles, Twitter, Youtube, Instagram, Github } from 'lucide-react'

const footerLinks = {
  Product: ['Analysis', 'Dashboard', 'Guides', 'Pricing'],
  Company: ['About', 'Blog', 'Careers', 'Contact'],
  Resources: ['Help Center', 'Community', 'Privacy Policy', 'Terms of Service'],
  Social: [
    { icon: Twitter, href: '#' },
    { icon: Youtube, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Github, href: '#' },
  ],
}

export function Footer() {
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

          {Object.entries(footerLinks).map(([title, links]) => {
            if (title === 'Social') return null
            return (
              <div key={title}>
                <h4 className="font-semibold mb-4">{title}</h4>
                <ul className="space-y-3">
                  {(links as string[]).map((link) => (
                    <li key={link}>
                      <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {footerLinks.Social.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:border-space-blue/50 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                </Link>
              ))}
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