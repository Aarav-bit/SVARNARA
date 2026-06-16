import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile nav open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (!target) return
    const navH = 88
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' })
  }

  return (
    <>
      <nav id="navbar" className={`navbar${scrolled ? ' scrolled' : ''}`} role="navigation">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo" onClick={e => scrollTo(e, '#hero')}>
            AURUM
            <span>Fine Dining · India</span>
          </a>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={e => scrollTo(e, l.href)}>{l.label}</a>
              </li>
            ))}
          </ul>

          <a href="#reservations" className="nav-reserve" onClick={e => scrollTo(e, '#reservations')}>
            Reserve
          </a>

          <button
            className={`hamburger${mobileOpen ? ' active' : ''}`}
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={e => scrollTo(e, l.href)}>{l.label}</a>
        ))}
        <a href="#reservations" className="btn btn-gold" style={{marginTop:'1rem'}} onClick={e => scrollTo(e, '#reservations')}>
          Reserve a Table
        </a>
      </div>
    </>
  )
}
