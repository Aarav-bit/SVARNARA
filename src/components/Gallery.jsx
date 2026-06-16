import { useState } from 'react'
import './Gallery.css'

const images = [
  { src: '/images/gal1.png', label: 'The Starter', caption: 'Rogan Josh — Artisan Plating' },
  { src: '/images/gal2.png', label: 'The Ambiance', caption: 'AURUM Dining Room' },
  { src: '/images/hero.png', label: 'The Signature', caption: 'Hero Dish — Chef\'s Table' },
  { src: '/images/gal4.png', label: 'The Main', caption: 'Butter Chicken — Elevated' },
  { src: '/images/gal3.png', label: 'The Dessert', caption: 'Gulab Jamun Soufflé' },
  { src: '/images/chef.png', label: 'The Maestro', caption: 'Chef Arjun Mehta' },
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const open  = img => { setLightbox(img); document.body.style.overflow = 'hidden' }
  const close = ()  => { setLightbox(null); document.body.style.overflow = '' }

  return (
    <section id="gallery" className="gallery" aria-labelledby="gallery-heading">
      <div className="gallery-bg-gradient" aria-hidden="true" />

      <div className="section-wrap">
        <div className="section-header reveal">
          <span className="label-text">Visual Journal</span>
          <div className="gold-line" />
          <h2 id="gallery-heading" className="gallery-heading">The AURUM Experience</h2>
        </div>
      </div>

      <div className="gallery-grid reveal d1">
        {images.map((img, i) => (
          <div
            className="gallery-item"
            key={i}
            onClick={() => open(img)}
            onKeyDown={e => e.key === 'Enter' && open(img)}
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
