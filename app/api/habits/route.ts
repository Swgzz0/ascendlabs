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
    const { name, description } = body

    const habit = await prisma.habit.create({
      data: {
        userId,
        name,
        description: description || null,
        completed: false,
        date: new Date(),
      }
    })

    return NextResponse.json({ success: true, habit })
  } catch (error) {
    console.error('Habit creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create habit' },
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

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const habits = await prisma.habit.findMany({
      where: {
        userId,
        date: {
          gte: today,
        }
      },
      orderBy: { createdAt: 'asc' }
    })

    return NextResponse.json({ habits })
  } catch (error) {
    console.error('Fetch habits error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch habits' },
      { status: 500 }
    )
  }
}

export async function PUT(request: Request) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { habitId, completed } = body

    const habit = await prisma.habit.update({
      where: { id: habitId },
      data: {
        completed,
        ...(completed ? { streak: { increment: 1 } } : {})
      }
    })

    return NextResponse.json({ success: true, habit })
  } catch (error) {
    console.error('Habit update error:', error)
    return NextResponse.json(
      { error: 'Failed to update habit' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const url = new URL(request.url)
    const habitId = url.searchParams.get('id')

    if (!habitId) {
      return NextResponse.json(
        { error: 'Habit ID required' },
        { status: 400 }
      )
    }

    await prisma.habit.delete({
      where: { id: habitId }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Habit deletion error:', error)
    return NextResponse.json(
      { error: 'Failed to delete habit' },
      { status: 500 }
    )
  }
}