'use client'

import { useState } from 'react'

export default function AnalysisPage() {
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
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
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 20px', color: '#fff' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>
        AI Face <span style={{ color: '#4A9EFF' }}>Analysis</span>
      </h1>
      <p style={{ color: '#888', textAlign: 'center', marginBottom: '40px' }}>
        Upload a clear photo for comprehensive analysis
      </p>

      {!results && !analyzing && (
        <div style={{ 
          background: 'rgba(255,255,255,0.03)', 
          borderRadius: '24px', 
          padding: '48px', 
          textAlign: 'center',
          border: '2px dashed rgba(255,255,255,0.1)'
        }}>
          <div style={{ marginBottom: '20px', fontSize: '48px' }}>📸</div>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Upload your photo</h3>
          <p style={{ color: '#666', marginBottom: '24px' }}>JPG, PNG or WebP (max 10MB)</p>
          <label style={{ 
            background: '#4A9EFF', 
            color: '#000', 
            padding: '12px 32px', 
            borderRadius: '40px', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            display: 'inline-block'
          }}>
            Choose Photo
            <input type="file" accept="image/*" onChange={handleUpload} style={{ display: 'none' }} />
          </label>
          <p style={{ color: '#555', fontSize: '0.8rem', marginTop: '16px' }}>
            🔒 Your images are encrypted and not stored permanently
          </p>
        </div>
      )}

      {analyzing && (
        <div style={{ 
          background: 'rgba(255,255,255,0.03)', 
          borderRadius: '24px', 
          padding: '48px', 
          textAlign: 'center'
        }}>
          <div style={{ 
            width: '60px', 
            height: '60px', 
            border: '4px solid rgba(74,158,255,0.2)', 
            borderTopColor: '#4A9EFF', 
            borderRadius: '50%',
            margin: '0 auto 20px',
            animation: 'spin 1s linear infinite'
          }} />
          <h3>Analyzing your photo...</h3>
          <p style={{ color: '#666' }}>Scanning for symmetry, skin quality, and more</p>
        </div>
      )}

      {results && (
        <div>
          <div style={{ 
            background: 'rgba(255,255,255,0.03)', 
            borderRadius: '24px', 
            padding: '32px',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.3rem' }}>Results</h3>
              <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4A9EFF' }}>{results.overall}/100</span>
            </div>
            
            {['Facial Symmetry', 'Skin Quality', 'Eye Area', 'Jawline Definition', 'Hairline', 'Facial Proportions'].map((label, i) => {
              const values = [results.symmetry, results.skinQuality, results.eyeArea, results.jawline, results.hairline, results.proportions]
              return (
                <div key={i} style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '4px' }}>
                    <span>{label}</span>
                    <span style={{ color: '#4A9EFF' }}>{values[i]}%</span>
                  </div>
                  <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                    <div style={{ height: '100%', background: '#4A9EFF', borderRadius: '4px', width: ${values[i]}% }} />
                  </div>
                </div>
              )
            })}
          </div>

          <div style={{ 
            background: 'rgba(255,255,255,0.03)', 
            borderRadius: '24px', 
            padding: '32px',
            marginBottom: '20px'
          }}>
            <h3 style={{ marginBottom: '16px' }}>💡 Improvement Suggestions</h3>
            {results.suggestions.map((s: string, i: number) => (
              <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', color: '#aaa' }}>
                <span style={{ color: '#4A9EFF' }}>✓</span>
                <span>{s}</span>
              </div>
            ))}
          </div>

          <button style={{ 
            width: '100%', 
            background: '#4A9EFF', 
            color: '#000', 
            padding: '16px', 
            borderRadius: '40px', 
            fontWeight: 'bold', 
            fontSize: '1.1rem', 
            border: 'none', 
            cursor: 'pointer' 
          }}>
            Generate Personalized Plan
          </button>
        </div>
      )}
    </div>
  )
}
