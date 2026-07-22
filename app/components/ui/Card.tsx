'use client'

import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
}

export function Card({ children, className = '', hover = false, glass = true }: CardProps) {
  return (
    <div className={`
      ${glass ? 'glass' : 'bg-dark-100'}
      rounded-2xl p-6
      ${hover ? 'glass-hover' : ''}
      ${className}
    `}>
      {children}
    </div>
  )
}