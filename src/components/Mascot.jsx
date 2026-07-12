import { useState, useEffect } from 'react'
import './Mascot.css'

export default function Mascot() {
  const [scrollRotate, setScrollRotate] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Reveal mascot after splash loader fades out
    const t = setTimeout(() => setLoaded(true), 3200)

    const handleScroll = () => {
      // Clean sine-wave waddle rotation based on scroll position
      const tilt = Math.sin(window.scrollY / 120) * 12
      setScrollRotate(tilt)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      clearTimeout(t)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`mascot-floating${loaded ? ' visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{ transform: `rotate(${scrollRotate}deg)` }}
    >
      <img src="/images/mascot.png" alt="Chef Mascot" />
      <span className="mascot-tooltip">Back to Top</span>
    </button>
  )
}
