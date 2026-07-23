'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Sparkles, Camera, BarChart3, Calendar, Users2, Brain,
  Shield, Zap, Star, Check, ArrowRight, Menu, X
} from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: any[] = []
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: gba(74, 158, 255, )
      })
    }

    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of particles) {
        p.x += p.speedX
        p.y += p.speedY
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      }
    }
    animate()

    return () => window.removeEventListener('resize', resize)
  }, [])

  const features = [
    { icon: Camera, title: 'Face Analysis', desc: 'AI-powered analysis of facial symmetry, skin quality, and proportions.' },
    { icon: BarChart3, title: 'Progress Tracking', desc: 'Track your transformation with photo comparisons and habit streaks.' },
    { icon: Brain, title: 'Personalized Plans', desc: 'Get custom roadmaps for skincare, fitness, nutrition, and style.' },
    { icon: Calendar, title: 'Habit Tracker', desc: 'Build daily habits with guided checklists for sleep, hydration, and exercise.' },
    { icon: Users2, title: 'Community', desc: 'Connect with like-minded individuals and share your progress.' },
    { icon: Sparkles, title: 'AI Coaching', desc: 'Premium AI coach providing personalized advice and motivation.' },
  ]

  const reviews = [
    { name: 'Alex Chen', handle: '@alexchen', text: 'The face analysis gave me insights I never considered before. My skincare routine is now 10x better.', rating: 5 },
    { name: 'Sarah Johnson', handle: '@sarahj', text: 'My clients have seen remarkable results using this platform. The habit tracker is a game-changer.', rating: 5 },
    { name: 'Marcus Rivera', handle: '@marcusr', text: 'Evidence-based advice with no fake promises. Exactly what the self-improvement space needs.', rating: 5 },
  ]

  const faqs = [
    { q: 'Is AscendLabs free to use?', a: 'AscendLabs offers a free tier with basic analysis and limited guides. Premium membership starts at .99/month.' },
    { q: 'How does the face analysis work?', a: 'Our AI analyzes uploaded photos for facial symmetry, skin quality, eye area, jawline definition, hairline, and facial proportions.' },
    { q: 'Is my data secure?', a: 'Absolutely. All images are encrypted and not stored permanently. Your data is private and never shared with third parties.' },
    { q: 'How long does it take to see results?', a: 'Most users notice improvements within 4-8 weeks of following their personalized plan. Consistency is key.' },
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      {/* Particles Canvas */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* NAVBAR */}
        <nav className="py-6 flex justify-between items-center border-b border-white/5 flex-wrap gap-4">
          <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold">
            <Sparkles className="w-6 h-6 text-space-blue" />
            <span>ASCEND<span className="text-space-blue">LABS</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-gray-500 hover:text-white text-sm transition">Features</Link>
            <Link href="#reviews" className="text-gray-500 hover:text-white text-sm transition">Reviews</Link>
            <Link href="#faq" className="text-gray-500 hover:text-white text-sm transition">FAQ</Link>
            <Link href="/analysis">
              <button className="bg-space-blue text-black px-6 py-2 rounded-full text-sm font-bold hover:scale-105 transition">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass p-6 rounded-2xl mt-4 space-y-4">
            <Link href="#features" className="block text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link href="#reviews" className="block text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
            <Link href="#faq" className="block text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <Link href="/analysis" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full bg-space-blue text-black px-6 py-3 rounded-full font-bold">Get Started</button>
            </Link>
          </div>
        )}

        {/* HERO */}
        <section className="py-16 md:py-24 text-center">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4 text-space-blue" />
            <span className="text-gray-400">AI-Powered Self-Improvement</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight">
            <span className="gradient-text">Ascend</span>
            <span className="text-white ml-2">Labs</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mt-4">
            The <span className="text-white font-medium">evidence-based</span> self-improvement platform.<br />
            Zero gimmicks. Maximum results. Complete transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/analysis">
              <button className="bg-space-blue text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition inline-flex items-center gap-2">
                Start Analysis <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="#features">
              <button className="border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:border-space-blue hover:text-space-blue transition">
                Learn More
              </button>
            </Link>
          </div>
        </section>

        {/* STATS */}
        <div className="border-y border-white/5 py-10 my-4 flex justify-center gap-12 md:gap-20 flex-wrap">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black gradient-text">99.9%</div>
            <div className="text-white font-medium">Uptime</div>
            <div className="text-gray-500 text-sm">Reliability</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black gradient-text">2,847</div>
            <div className="text-white font-medium">Active Users</div>
            <div className="text-gray-500 text-sm">Growing daily</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-black gradient-text">100%</div>
            <div className="text-white font-medium">Privacy</div>
            <div className="text-gray-500 text-sm">Your data is safe</div>
          </div>
        </div>

        {/* FEATURES */}
        <section id="features" className="py-20">
          <div className="text-center mb-12">
            <div className="text-space-blue text-sm font-bold tracking-widest uppercase">Premium Features</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Everything you need for the<br /><span className="gradient-text">ultimate transformation</span>
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto mt-3">
              Comprehensive tools designed to help you become the best version of yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass p-8 rounded-2xl text-center hover:border-space-blue/30 transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-space-blue/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-space-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="py-20 border-t border-white/5">
          <div className="text-center mb-12">
            <div className="text-space-blue text-sm font-bold tracking-widest uppercase">Testimonials</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              What our <span className="gradient-text">community</span> says
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto mt-3">Real stories from real people on their journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass p-6 rounded-2xl"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-space-blue text-space-blue" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">&quot;{review.text}&quot;</p>
                <div className="mt-4">
                  <div className="font-semibold text-sm">{review.name}</div>
                  <div className="text-gray-500 text-xs">{review.handle}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 border-t border-white/5">
          <div className="text-center mb-12">
            <div className="text-space-blue text-sm font-bold tracking-widest uppercase">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="glass rounded-2xl overflow-hidden border border-white/5">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition"
                >
                  <span className="font-medium">{faq.q}</span>
                  <span className="text-space-blue text-xl">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400 text-sm">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-space-blue" />
            AscendLabs — The Evidence-Based Self-Improvement Platform
          </p>
          <p className="mt-2">© {new Date().getFullYear()} AscendLabs. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
