import { useEffect, useState } from 'react'
import './Loader.css'

export default function Loader() {
  const [phase, setPhase] = useState('visible') // visible → fading → gone

  useEffect(() => {
    // Start fade after 2.2 s
    const t1 = setTimeout(() => setPhase('fading'), 2200)
    // Remove from DOM after fade completes
    const t2 = setTimeout(() => setPhase('gone'), 3000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (phase === 'gone') return null

  return (
    <div className={`loader${phase === 'fading' ? ' loader--fade' : ''}`} aria-hidden="true">
      <div className="loader-inner">
        <div className="loader-logo">
          <span className="loader-brand">SVARNARA</span>
          <span className="loader-sub">Fine Dining · New Delhi</span>
        </div>
        <div className="loader-bar">
          <div className="loader-bar-fill" />
        </div>
      </div>
    </div>
  )
}

