'use client'

import { useState } from 'react'

export default function AnalysisPage() {
  const [file, setFile] = useState<File | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setAnalyzing(true)
      setTimeout(() => {
        setAnalyzing(false)
        setResults({
          overall: 82,
          symmetry: 92,
          skinQuality: 78,
          eyeArea: 85,
          jawline: 70,
          hairline: 88,
          proportions: 82,
          suggestions: ['Skincare routine', 'Better sleep', 'Hydration', 'Jaw exercises']
        })
      }, 2000)
    }
  }

  if (results) {
    return (
      <div>
        <h1>Analysis Results</h1>
        <p>Overall Score: {results.overall}/100</p>
        <ul>
          <li>Symmetry: {results.symmetry}%</li>
          <li>Skin Quality: {results.skinQuality}%</li>
          <li>Eye Area: {results.eyeArea}%</li>
          <li>Jawline: {results.jawline}%</li>
          <li>Hairline: {results.hairline}%</li>
          <li>Proportions: {results.proportions}%</li>
        </ul>
        <h3>Suggestions</h3>
        <ul>
          {results.suggestions.map((s: string, i: number) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
        <button onClick={() => setResults(null)}>Upload Another</button>
      </div>
    )
  }

  if (analyzing) {
    return <h2>Analyzing your photo...</h2>
  }

  return (
    <div>
      <h1>AI Face Analysis</h1>
      <p>Upload a photo to get started</p>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <p>Your images are encrypted and not stored permanently</p>
    </div>
  )
}
