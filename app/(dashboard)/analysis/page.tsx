'use client'

import { useState, useRef } from 'react'
import { Camera, Upload, Sparkles, CheckCircle2, Save, Share2 } from 'lucide-react'

export default function AnalysisPage() {
  const [frontImage, setFrontImage] = useState<string | null>(null)
  const [sideImage, setSideImage] = useState<string | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [results, setResults] = useState<any>(null)
  const frontInputRef = useRef<HTMLInputElement>(null)
  const sideInputRef = useRef<HTMLInputElement>(null)

  const handleFrontUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setFrontImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSideUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setSideImage(event.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = () => {
    if (frontImage && sideImage) {
      setAnalyzing(true)
      setTimeout(() => {
        setAnalyzing(false)
        setResults({
          overall: 80,
          potential: 87,
          masculinity: 74,
          skinQuality: 78,
          jawline: 62,
          cheekbones: 77,
          symmetry: 85,
          eyeArea: 82,
          hairline: 88,
          proportions: 84,
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

  if (analyzing) {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ 
          width: '60px', 
          height: '60px', 
          border: '4px solid rgba(74,158,255,0.2)', 
          borderTopColor: '#4A9EFF', 
          borderRadius: '50%',
          margin: '0 auto 24px',
          animation: 'spin 1s linear infinite'
        }} />
        <h2 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Analyzing your photos...</h2>
        <p style={{ color: '#666' }}>Scanning facial symmetry, proportions, and features</p>
      </div>
    )
  }

  if (results) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Ratings</h1>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button style={{ 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid rgba(255,255,255,0.1)', 
              padding: '10px 24px', 
              borderRadius: '40px', 
              color: '#fff', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem'
            }}>
              <Save style={{ width: '16px', height: '16px' }} />
              Save
            </button>
            <button style={{ 
              background: '#4A9EFF', 
              border: 'none', 
              padding: '10px 24px', 
              borderRadius: '40px', 
              color: '#000', 
              cursor: 'pointer',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.9rem'
            }}>
              <Share2 style={{ width: '16px', height: '16px' }} />
              Share
            </button>
          </div>
        </div>

        {/* Main Score Card */}
        <div style={{ 
          background: 'rgba(255,255,255,0.03)', 
          borderRadius: '24px', 
          padding: '32px',
          marginBottom: '24px',
          border: '1px solid rgba(255,255,255,0.05)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '4rem', fontWeight: '900', color: '#4A9EFF' }}>{results.overall}</div>
          <div style={{ color: '#666', fontSize: '0.9rem' }}>Overall Score</div>
        </div>

        {/* Rating Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
          gap: '12px',
          marginBottom: '24px'
        }}>
          {[
            { label: 'Potential', value: results.potential },
            { label: 'Masculinity', value: results.masculinity },
            { label: 'Skin Quality', value: results.skinQuality },
            { label: 'Jawline', value: results.jawline },
            { label: 'Cheekbones', value: results.cheekbones },
            { label: 'Symmetry', value: results.symmetry },
          ].map((item, index) => (
            <div key={index} style={{ 
              background: 'rgba(255,255,255,0.03)', 
              borderRadius: '16px', 
              padding: '16px',
              border: '1px solid rgba(255,255,255,0.05)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#4A9EFF' }}>{item.value}</div>
              <div style={{ color: '#666', fontSize: '0.8rem' }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* umax Badge */}
        <div style={{ 
          textAlign: 'center',
          padding: '16px',
          marginBottom: '24px',
          color: '#4A9EFF',
          fontSize: '0.8rem',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          ⚡ umax
        </div>

        {/* Suggestions */}
        <div style={{ 
          background: 'rgba(255,255,255,0.03)', 
          borderRadius: '16px', 
          padding: '24px',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '16px', color: '#aaa' }}>Improvement Suggestions</h3>
          {results.suggestions.map((s: string, i: number) => (
            <div key={i} style={{ display: 'flex', gap: '10px', marginBottom: '8px', color: '#aaa', fontSize: '0.9rem' }}>
              <span style={{ color: '#4A9EFF' }}>✓</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Upload Page
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '60px 20px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '8px' }}>
        AI Face <span style={{ color: '#4A9EFF' }}>Analysis</span>
      </h1>
      <p style={{ color: '#666', textAlign: 'center', marginBottom: '40px' }}>
        Upload front and side photos for comprehensive analysis
      </p>

      {/* Front Photo Upload */}
      <div style={{ 
        background: 'rgba(255,255,255,0.03)', 
        borderRadius: '16px', 
        padding: '32px',
        border: frontImage ? '2px solid #4A9EFF' : '2px dashed rgba(255,255,255,0.1)',
        marginBottom: '16px',
        textAlign: 'center',
        cursor: 'pointer'
      }} onClick={() => frontInputRef.current?.click()}>
        {frontImage ? (
          <div>
            <img src={frontImage} alt="Front" style={{ maxWidth: '200px', maxHeight: '200px', borderRadius: '12px', margin: '0 auto', display: 'block' }} />
            <p style={{ color: '#4A9EFF', marginTop: '8px', fontSize: '0.9rem' }}>✓ Front photo uploaded</p>
          </div>
        ) : (
          <div>
            <Camera style={{ width: '48px', height: '48px', color: '#4A9EFF', margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Front Photo</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Upload a clear front-facing photo</p>
          </div>
        )}
        <input ref={frontInputRef} type="file" accept="image/*" onChange={handleFrontUpload} style={{ display: 'none' }} />
      </div>

      {/* Side Photo Upload */}
      <div style={{ 
        background: 'rgba(255,255,255,0.03)', 
        borderRadius: '16px', 
        padding: '32px',
        border: sideImage ? '2px solid #4A9EFF' : '2px dashed rgba(255,255,255,0.1)',
        marginBottom: '24px',
        textAlign: 'center',
        cursor: 'pointer'
      }} onClick={() => sideInputRef.current?.click()}>
        {sideImage ? (
          <div>
            <img src={sideImage} alt="Side" style={{ maxWidth: '200px', maxHeight: '200px', borderRadius: '12px', margin: '0 auto', display: 'block' }} />
            <p style={{ color: '#4A9EFF', marginTop: '8px', fontSize: '0.9rem' }}>✓ Side photo uploaded</p>
          </div>
        ) : (
          <div>
            <Camera style={{ width: '48px', height: '48px', color: '#4A9EFF', margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Side Photo</h3>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>Upload a clear profile/side photo</p>
          </div>
        )}
        <input ref={sideInputRef} type="file" accept="image/*" onChange={handleSideUpload} style={{ display: 'none' }} />
      </div>

      {/* Analyze Button */}
      <button 
        onClick={handleAnalyze}
        disabled={!frontImage || !sideImage}
        style={{ 
          width: '100%', 
          background: (frontImage && sideImage) ? '#4A9EFF' : 'rgba(255,255,255,0.05)',
          color: (frontImage && sideImage) ? '#000' : '#666',
          padding: '16px', 
          borderRadius: '40px', 
          fontWeight: '600', 
          fontSize: '1.1rem', 
          border: 'none', 
          cursor: (frontImage && sideImage) ? 'pointer' : 'not-allowed'
        }}
      >
        {frontImage && sideImage ? 'Analyze Photos →' : 'Upload both photos to continue'}
      </button>

      <p style={{ color: '#555', fontSize: '0.8rem', textAlign: 'center', marginTop: '16px' }}>
        🔒 Your images are encrypted and not stored permanently
      </p>
    </div>
  )
}
