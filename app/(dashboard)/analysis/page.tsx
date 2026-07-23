'use client'

import { useState } from 'react'
import { Upload, Camera, Sparkles, Shield, CheckCircle2 } from 'lucide-react'

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
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
          AI Face <span style={{ color: '#4A9EFF' }}>Analysis</span>
        </h1>
        <p style={{ color: '#888', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Upload a clear photo for comprehensive analysis of facial symmetry, skin quality, and proportions.
        </p>
      </div>

      {!results && !analyzing && (
        <div style={{ maxWidth: '600px', margin: '0 auto', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '48px', textAlign: 'center', border: '2px dashed rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(74,158,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Camera style={{ width: '40px', height: '40px', color: '#4A9EFF' }} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>Upload your photo</h3>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>JPG, PNG or WebP (max 10MB)</p>
            </div>
            <label style={{ background: '#4A9EFF', color: '#000', padding: '12px 32px', borderRadius: '40px', fontWeight: 'bold', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', transition: 'transform 0.2s' }}>
              <Upload style={{ width: '20px', height: '20px' }} />
              Choose Photo
              <input type="file" accept="image/*" className="hidden" onChange={handleUpload} style={{ display: 'none' }} />
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: '#666' }}>
              <Shield style={{ width: '16px', height: '16px' }} />
              <span>Your images are encrypted and not stored permanently</span>
            </div>
          </div>
        </div>
      )}

      {analyzing && (
        <div style={{ maxWidth: '600px', margin: '0 auto', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '48px', textAlign: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: '4px solid rgba(74,158,255,0.2)', borderTopColor: '#4A9EFF', animation: 'spin 1s linear infinite' }} />
              <Sparkles style={{ width: '32px', height: '32px', color: '#4A9EFF', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '8px' }}>Analyzing your photo</h3>
              <p style={{ color: '#888', fontSize: '0.9rem' }}>Our AI is scanning for symmetry, skin quality, and more...</p>
            </div>
          </div>
        </div>
      )}

      {results && (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '32px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Analysis Results</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles style={{ width: '20px', height: '20px', color: '#4A9EFF' }} />
                <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#4A9EFF' }}>{results.overall}</span>
                <span style={{ color: '#666' }}>/100</span>
              </div>
            </div>

            {[
              { label: 'Facial Symmetry', value: results.symmetry },
              { label: 'Skin Quality', value: results.skinQuality },
              { label: 'Eye Area', value: results.eyeArea },
              { label: 'Jawline Definition', value: results.jawline },
              { label: 'Hairline', value: results.hairline },
              { label: 'Facial Proportions', value: results.proportions },
            ].map((item, index) => (
              <div key={index} style={{ marginBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '4px' }}>
                  <span>{item.label}</span>
                  <span style={{ color: '#4A9EFF' }}>{item.value}%</span>
                </div>
                <div style={{ width: '100%', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', background: 'linear-gradient(90deg, #4A9EFF, #6BB5FF)', borderRadius: '4px', width: ${item.value}%, transition: 'width 1s' }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '24px', padding: '32px', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles style={{ width: '20px', height: '20px', color: '#4A9EFF' }} />
              Improvement Suggestions
            </h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {results.suggestions.map((suggestion: string, index: number) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '8px', color: '#aaa', fontSize: '0.9rem' }}>
                  <CheckCircle2 style={{ width: '16px', height: '16px', color: '#4A9EFF', marginTop: '2px', flexShrink: 0 }} />
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>

          <button style={{ width: '100%', background: '#4A9EFF', color: '#000', padding: '16px', borderRadius: '40px', fontWeight: 'bold', fontSize: '1.1rem', border: 'none', cursor: 'pointer', transition: 'transform 0.2s' }}>
            Generate Personalized Plan
          </button>
        </div>
      )}
    </div>
  )
}
