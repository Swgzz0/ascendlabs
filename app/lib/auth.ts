import { auth } from '@clerk/nextjs'
import { prisma } from './db'

export async function getCurrentUser() {
  const { userId } = auth()
  if (!userId) return null

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      profile: true,
      analyses: true,
      habits: true,
      progress: true
    }
  })

  return user
}

export async function requireAuth() {
  const { userId } = auth()
  if (!userId) throw new Error('Unauthorized')
  return userId
}