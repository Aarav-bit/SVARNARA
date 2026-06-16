import { useEffect, useRef } from 'react'
import './Hero.css'

export default function Hero() {
  const bgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `scale(1.1) translateY(${window.scrollY * 0.3}px)`
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 88, behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      {/* Parallax background */}
      <div className="hero-bg" ref={bgRef} role="img" aria-label="Luxurious Indian fine dining dish" />

      {/* Gradient overlays */}
      <div className="hero-gradient" />
      <div className="hero-gradient-bottom" />

      {/* Floating spice particles */}
      <div className="hero-particles" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      <div className="hero-content">
        <span className="label-text hero-label">Established 2009 · New Delhi</span>

        <h1 className="hero-title">
          Where Every Plate<br />
          <em>Tells a Story</em>
        </h1>

        <p className="hero-subtitle">
          A sanctuary of royal Indian flavours — where ancient spice wisdom<br className="hide-mobile" />
          meets modern culinary artistry. Every evening, a new rasa.
        </p>

        <div className="hero-ctas">
          <a href="#reservations" className="btn btn-gold" id="hero-reserve-btn" onClick={e => scrollTo(e, '#reservations')}>
            Reserve a Table
          </a>
          <a href="#menu" className="btn btn-ghost" id="hero-menu-btn" onClick={e => scrollTo(e, '#menu')}>
            Explore Menu
          </a>
        </div>

        {/* Awards strip */}
        <div className="hero-awards">
          <div className="award-item">
            <span className="award-star">✦</span>
            <span>Michelin Recommended</span>
          </div>
          <div className="award-sep" />
          <div className="award-item">
            <span className="award-star">✦</span>
            <span>#1 Fine Dining · Delhi NCR</span>
          </div>
          <div className="award-sep" />
          <div className="award-item">
            <span className="award-star">✦</span>
            <span>India's 50 Best Restaurants</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="scroll-line" />
      </div>
    </section>
  )
}
