export interface User {
  id: string
  email: string
  name: string | null
  createdAt: Date
  updatedAt: Date
}

export interface Analysis {
  id: string
  userId: string
  imageUrl: string
  symmetry: number
  skinQuality: number
  eyeArea: number
  jawline: number
  hairline: number
  proportions: number
  overallScore: number
  suggestions: string[]
  createdAt: Date
}

export interface Habit {
  id: string
  userId: string
  name: string
  description?: string
  completed: boolean
  date: Date
  streak: number
}

export interface Progress {
  id: string
  userId: string
  date: Date
  weight?: number
  bodyFat?: number
  muscleMass?: number
  photoUrl?: string
  notes?: string
  score?: number
}

export interface Plan {
  id: string
  userId: string
  name: string
  description?: string
  goals: string[]
  createdAt: Date
  updatedAt: Date
}

export interface Subscription {
  id: string
  userId: string
  stripeId: string
  status: 'active' | 'canceled' | 'expired'
  plan: 'free' | 'premium' | 'pro'
  expiresAt?: Date
  createdAt: Date
  updatedAt: Date
}