'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, Camera, Sparkles, Shield, CheckCircle2 } from 'lucide-react'

export default function AnalysisPage() {
  const [uploaded, setUploaded] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setUploaded(true)
      setAnalyzing(true)
      setTimeout(() => {
        setAnalyzing(false)
        setResults({
          symmetry: 92,
          skinQuality: 78,
          eyeArea: 85,
          jawline: 70,
          hairline: 88,
          proportions: 82,
          overall: 82,
          suggestions: [
            'Consider a consistent skincare routine with vitamin C serum',
            'Sleep 7-8 hours for better skin recovery',
            'Stay hydrated for improved skin quality',
            'Incorporate jaw exercises for definition',
          ]
        })
      }, 3000)
    }
  }

  return (
    <div className="container py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          AI Face <span style={{ color: '#4A9EFF' }}>Analysis</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Upload a clear photo for comprehensive analysis of facial symmetry, skin quality, and proportions.
        </p>
      </div>

      {!results && !analyzing && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white/5 rounded-3xl p-12 text-center border-2 border-dashed border-white/10 hover:border-space-blue/30 transition-colors"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-space-blue/10 flex items-center justify-center">
              <Camera className="w-10 h-10 text-space-blue" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Upload your photo</h3>
              <p className="text-gray-400 text-sm">JPG, PNG or WebP (max 10MB)</p>
            </div>
            <label className="bg-space-blue text-black px-8 py-3 rounded-full font-bold cursor-pointer hover:scale-105 transition inline-flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Choose Photo
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleUpload}
              />
            </label>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              <span>Your images are encrypted and not stored permanently</span>
            </div>
          </div>
        </motion.div>
      )}

      {analyzing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-2xl mx-auto bg-white/5 rounded-3xl p-12 text-center"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-4 border-space-blue/20 border-t-space-blue animate-spin" />
              <Sparkles className="w-8 h-8 text-space-blue absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Analyzing your photo</h3>
              <p className="text-gray-400 text-sm">Our AI is scanning for symmetry, skin quality, and more...</p>
            </div>
          </div>
        </motion.div>
      )}

      {results && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <div className="bg-white/5 rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Analysis Results</h3>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-space-blue" />
                <span className="text-3xl font-bold" style={{ color: '#4A9EFF' }}>{results.overall}</span>
                <span className="text-gray-400">/100</span>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Facial Symmetry', value: results.symmetry },
                { label: 'Skin Quality', value: results.skinQuality },
                { label: 'Eye Area', value: results.eyeArea },
                { label: 'Jawline Definition', value: results.jawline },
                { label: 'Hairline', value: results.hairline },
                { label: 'Facial Proportions', value: results.proportions },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.label}</span>
                    <span style={{ color: '#4A9EFF' }}>{item.value}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-space-blue to-space-light rounded-full transition-all duration-1000"
                      style={{ width: ${item.value}% }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-3xl p-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-space-blue" />
              Improvement Suggestions
            </h3>
            <ul className="space-y-2">
              {results.suggestions.map((suggestion: string, index: number) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-space-blue mt-0.5 flex-shrink-0" />
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full bg-space-blue text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition text-lg">
            Generate Personalized Plan
          </button>
        </motion.div>
      )}
    </div>
  )
}
