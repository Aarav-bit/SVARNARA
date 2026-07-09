import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
import Cursor from './components/Cursor'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import ChefSpecial from './components/ChefSpecial'
import Reservations from './components/Reservations'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  // Scroll reveal — re-observe after loader disappears
  useEffect(() => {
    const observe = () => {
      const observer = new IntersectionObserver(
        entries => entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        }),
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
      )
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
      return observer
    }

    // Initial observe
    const obs = observe()

    // Re-observe once loader is gone (after ~3s)
    const t = setTimeout(() => {
      obs.disconnect()
      observe()
    }, 3200)

    return () => { obs.disconnect(); clearTimeout(t) }
  }, [])

  return (
    <>
      {/* Splash loader */}
      <Loader />

      {/* Custom gold cursor (desktop only) */}
      <Cursor />

      <Navbar />
      <main>
        <Hero />

        {/* Editorial flourishes — mirror the menu's ◆ — ◆ rhythm */}
        <About />
        <div className="divider reveal" aria-hidden="true">
          <span className="divider-line" />
          <span className="divider-diamond">◆ ◆ ◆</span>
          <span className="divider-line" />
        </div>

        <ChefSpecial />

        <div className="divider reveal" aria-hidden="true">
          <span className="divider-line" />
          <span className="divider-diamond">◆ ◆ ◆</span>
          <span className="divider-line" />
        </div>

        <Menu />
        <Reservations />

        <div className="divider reveal" aria-hidden="true">
          <span className="divider-line" />
          <span className="divider-diamond">◆ ◆ ◆</span>
          <span className="divider-line" />
        </div>

        <Gallery />

        <div className="divider reveal" aria-hidden="true">
          <span className="divider-line" />
          <span className="divider-diamond">◆ ◆ ◆</span>
          <span className="divider-line" />
        </div>

        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* Cinematic overlays — above content, below chrome. pointer-events:none. */}
      <div className="vignette" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
    </>
  )
}

export default App
