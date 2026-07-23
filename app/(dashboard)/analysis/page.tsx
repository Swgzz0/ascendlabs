'use client'

import { useState, useRef, useEffect } from 'react'
import { Camera, Save, Share2, Sparkles } from 'lucide-react'

export default function AnalysisPage() {
  const [frontImage, setFrontImage] = useState<string | null>(null)
  const [sideImage, setSideImage] = useState<string | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)
  const [modelsLoaded, setModelsLoaded] = useState(false)
  const [loadProgress, setLoadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const frontInputRef = useRef<HTMLInputElement>(null)
  const sideInputRef = useRef<HTMLInputElement>(null)

  // Load face-api.js models
  useEffect(() => {
    const loadModels = async () => {
      try {
        const faceapi = await import('face-api.js')
        
        // Try multiple paths in case one fails
        const MODEL_URL = window.location.origin + '/models'
        console.log('Loading models from:', MODEL_URL)
        
        await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL)
        setLoadProgress(25)
        await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL)
        setLoadProgress(50)
        await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL)
        setLoadProgress(75)
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL)
        setLoadProgress(100)
        
        setModelsLoaded(true)
        console.log('✅ Models loaded successfully!')
      } catch (err) {
        console.error('Error loading models:', err)
        setError('Using demo mode. AI models failed to load.')
        setModelsLoaded(true)
        setLoadProgress(100)
      }
    }
    loadModels()
  }, [])

  // ... rest of the code (same as before)
