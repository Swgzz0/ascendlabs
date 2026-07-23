'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Particles
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const particles: any[] = []
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: 'rgba(74, 158, 255, ' + (Math.random() * 0.3) + ')'
      })
    }

    let animationId: number

    function animate() {
      if (!ctx || !canvas) return
      animationId = requestAnimationFrame(animate)
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

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  const features = [
    { icon: '🛡️', title: 'Face Analysis', desc: 'AI-powered analysis of facial symmetry, skin quality, and proportions.' },
    { icon: '⚡', title: 'Progress Tracking', desc: 'Track your transformation with photo comparisons and habit streaks.' },
    { icon: '🔒', title: 'Personalized Plans', desc: 'Get custom roadmaps for skincare, fitness, nutrition, and style.' },
    { icon: '🔄', title: 'Habit Tracker', desc: 'Build daily habits with guided checklists for sleep, hydration, and exercise.' },
    { icon: '🎮', title: 'Community', desc: 'Connect with like-minded individuals and share your progress.' },
    { icon: '💎', title: 'AI Coaching', desc: 'Premium AI coach providing personalized advice and motivation.' },
  ]

  const reviews = [
    { name: 'Alex Chen', handle: '@alexchen', text: 'The face analysis gave me insights I never considered before. My skincare routine is now 10x better.', avatar: 'AC' },
    { name: 'Sarah Johnson', handle: '@sarahj', text: 'My clients have seen remarkable results using this platform. The habit tracker is a game-changer.', avatar: 'SJ' },
    { name: 'Marcus Rivera', handle: '@marcusr', text: 'Evidence-based advice with no fake promises. Exactly what the self-improvement space needs.', avatar: 'MR' },
  ]

  const faqs = [
    { q: 'Is AscendLabs free to use?', a: 'AscendLabs offers a free tier with basic analysis and limited guides. Premium membership starts at .99/month.' },
    { q: 'How does the face analysis work?', a: 'Our AI analyzes uploaded photos for facial symmetry, skin quality, eye area, jawline definition, hairline, and facial proportions.' },
    { q: 'Is my data secure?', a: 'Absolutely. All images are encrypted and not stored permanently. Your data is private and never shared with third parties.' },
    { q: 'How long does it take to see results?', a: 'Most users notice improvements within 4-8 weeks of following their personalized plan. Consistency is key.' },
  ]

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <canvas ref={canvasRef} id="particles" />

      <div className="container">
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="logo"><span>✦</span> <span>ASCENDLABS</span></div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#reviews">Reviews</a>
            <a href="#faq">FAQ</a>
            <Link href="/analysis" className="btn-glow">Start Analysis</Link>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="bolt">✦</div>
          <h1 className="fade-up"><span>Ascend</span>Labs</h1>
          <p className="fade-up tagline">
            The <strong>evidence-based</strong> self-improvement platform. <br />
            Zero gimmicks. Maximum results. Complete transformation.
          </p>
          <div className="hero-buttons fade-up">
            <Link href="/analysis" className="btn-glow">Start Analysis →</Link>
            <a href="#features" className="btn-outline">Learn More</a>
          </div>
        </section>

        {/* STATS */}
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Uptime</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" id="userCount">2,847</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Privacy</div>
          </div>
        </div>

        {/* FEATURES */}
        <section id="features">
          <h2 className="section-title">Premium Features</h2>
          <p className="section-subtitle">Everything you need for the ultimate transformation</p>
          <div className="features-grid">
            {features.map((feature, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews">
          <h2 className="section-title">What Our Community Says</h2>
          <p className="section-subtitle">Trusted by thousands of users worldwide</p>
          <div className="reviews-grid">
            {reviews.map((review, i) => (
              <div key={i} className="review-card">
                <div className="stars">✦✦✦✦✦</div>
                <div className="review-text">&quot;{review.text}&quot;</div>
                <div className="reviewer">
                  <div className="avatar">{review.avatar}</div>
                  <div>
                    <div className="name">{review.name}</div>
                    <div className="handle">{review.handle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Everything you need to know about AscendLabs</p>
          <div className="faq-grid">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item">
                <div className="faq-q" onClick={() => toggleFAQ(i)}>
                  {faq.q}
                  <span>{openFaq === i ? '−' : '+'}</span>
                </div>
                <div className={'faq-a' + (openFaq === i ? ' open' : '')}>{faq.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <p>✦ AscendLabs — The Evidence-Based Self-Improvement Platform ✦</p>
          <p style={{ marginTop: '10px' }}>© {new Date().getFullYear()} AscendLabs. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
