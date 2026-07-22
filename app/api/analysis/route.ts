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
    const { imageUrl } = body

    // Simulate AI analysis
    const analysis = {
      symmetry: Math.floor(Math.random() * 30) + 70,
      skinQuality: Math.floor(Math.random() * 30) + 65,
      eyeArea: Math.floor(Math.random() * 30) + 70,
      jawline: Math.floor(Math.random() * 30) + 60,
      hairline: Math.floor(Math.random() * 30) + 70,
      proportions: Math.floor(Math.random() * 30) + 75,
      overallScore: Math.floor(Math.random() * 20) + 75,
      suggestions: [
        'Consider a consistent skincare routine with vitamin C serum',
        'Sleep 7-8 hours for better skin recovery',
        'Stay hydrated for improved skin quality',
        'Incorporate jaw exercises for definition',
      ]
    }

    const savedAnalysis = await prisma.analysis.create({
      data: {
        userId,
        imageUrl,
        symmetry: analysis.symmetry,
        skinQuality: analysis.skinQuality,
        eyeArea: analysis.eyeArea,
        jawline: analysis.jawline,
        hairline: analysis.hairline,
        proportions: analysis.proportions,
        overallScore: analysis.overallScore,
        suggestions: analysis.suggestions,
      }
    })

    return NextResponse.json({ 
      success: true, 
      analysis: savedAnalysis 
    })
  } catch (error) {
    console.error('Analysis error:', error)
    return NextResponse.json(
      { error: 'Failed to analyze image' },
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

    const analyses = await prisma.analysis.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      take: 10
    })

    return NextResponse.json({ analyses })
  } catch (error) {
    console.error('Fetch analyses error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch analyses' },
      { status: 500 }
    )
  }
}