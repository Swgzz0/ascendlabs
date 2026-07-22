'use client'

import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
  blur?: 'sm' | 'md' | 'lg'
  border?: boolean
}

export function GlassCard({ 
  children, 
  className = '', 
  blur = 'md',
  border = true 
}: GlassCardProps) {
  const blurs = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg'
  }

  return (
    <div className={`
      bg-white/5
      ${blurs[blur]}
      ${border ? 'border border-white/10' : ''}
      rounded-2xl p-6
      transition-all duration-300
      hover:bg-white/10
      ${className}
    `}>
      {children}
    </div>
  )
}