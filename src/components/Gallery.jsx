import { useEffect, useState } from 'react'
import './Gallery.css'

const images = [
  { src: '/images/gal1.png', label: 'The Starter', caption: 'Rogan Josh — Artisan Plating' },
  { src: '/images/gal2.png', label: 'The Ambiance', caption: 'SVARNARA Dining Room' },
  { src: '/images/hero.png', label: 'The Signature', caption: 'Hero Dish — Chef\'s Table' },
  { src: '/images/gal4.png', label: 'The Main', caption: 'Butter Chicken — Elevated' },
  { src: '/images/gal3.png', label: 'The Dessert', caption: 'Gulab Jamun Soufflé' },
  { src: '/images/chef.png', label: 'The Maestro', caption: 'Chef Arjun Mehta' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : ''

    const onKeyDown = e => {
      if (e.key === 'Escape') setLightbox(null)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [lightbox])

  const open  = img => setLightbox(img)
  const close = ()  => setLightbox(null)

  return (
    <section id="gallery" className="gallery" aria-labelledby="gallery-heading">
      <div className="gallery-bg-gradient" aria-hidden="true" />

      <div className="section-wrap">
        <div className="section-header reveal">
          <span className="label-text">Visual Journal</span>
          <div className="gold-line" />
          <h2 id="gallery-heading" className="gallery-heading">The SVARNARA Experience</h2>
        </div>
      </div>

      <div className="gallery-grid reveal d1">
        {images.map((img, i) => (
          <div
            className="gallery-item"
            key={i}
            onClick={() => open(img)}
            onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && open(img)}
            tabIndex={0}
            role="button"
            aria-label={`View: ${img.caption}`}
          >
            <img src={img.src} alt={img.caption} loading="lazy" />
            <div className="gallery-overlay">
              <span className="gallery-label">{img.label}</span>
              <span className="gallery-caption">{img.caption}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <div
        className={`gallery-lightbox${lightbox ? ' open' : ''}`}
        onClick={e => e.target === e.currentTarget && close()}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
      >
        {lightbox && (
          <div className="lightbox-inner">
            <button className="lightbox-close" onClick={close} aria-label="Close">✕ Close</button>
            <img src={lightbox.src} alt={lightbox.caption} />
            <div className="lightbox-caption">{lightbox.caption}</div>
          </div>
        )}
      </div>
    </section>
  )
}

