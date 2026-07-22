import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { prisma } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { weight, bodyFat, muscleMass, photoUrl, notes, score } = body

    const progress = await prisma.progress.create({
      data: {
        userId,
        weight: weight ? parseFloat(weight) : null,
        bodyFat: bodyFat ? parseFloat(bodyFat) : null,
        muscleMass: muscleMass ? parseFloat(muscleMass) : null,
        photoUrl: photoUrl || null,
        notes: notes || null,
        score: score ? parseInt(score) : null,
      }
    })

    return NextResponse.json({ success: true, progress })
  } catch (error) {
    console.error('Progress save error:', error)
    return NextResponse.json(
      { error: 'Failed to save progress' },
      { status: 500 }
    )
  }
}

export async function GET(request: Request) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const progress = await prisma.progress.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
      take: 30
    })

    return NextResponse.json({ progress })
  } catch (error) {
    console.error('Fetch progress error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch progress' },
      { status: 500 }
    )
  }
}