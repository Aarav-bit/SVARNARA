import { useEffect, useRef, useState } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const raf  = useRef(null)

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMove = e => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (!visible) setVisible(true)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const animateRing = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      raf.current = requestAnimationFrame(animateRing)
    }

    const onEnterLink = () => {
      dotRef.current?.classList.add('cursor--hover')
      ringRef.current?.classList.add('cursor--hover')
    }
    const onLeaveLink = () => {
      dotRef.current?.classList.remove('cursor--hover')
      ringRef.current?.classList.remove('cursor--hover')
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf.current = requestAnimationFrame(animateRing)

    // Hover state on interactive elements
    const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnterLink)
        el.removeEventListener('mouseleave', onLeaveLink)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className={`cursor-dot${visible ? ' cursor-visible' : ''}`}  aria-hidden="true" />
      <div ref={ringRef} className={`cursor-ring${visible ? ' cursor-visible' : ''}`} aria-hidden="true" />
    </>
  )
}
