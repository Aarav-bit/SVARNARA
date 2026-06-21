import { useState, useEffect } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    stars: 5,
    text: "SVARNARA has done what no restaurant in India has done before — elevated our cuisine without stripping its soul. The Dum Pukht Gosht brought me to tears. I have dined in the world's finest restaurants, and this belongs among them.",
    name: "Vikram Nair",
    role: "Founder, The Leela Group · 22 Visits"
  },
  {
    stars: 5,
    text: "Chef Arjun is a genius. The Malabar Prawn Curry was a revelation — all the comfort of my grandmother's kitchen, but with a precision I have never encountered before. The saffron sharbat alone is worth the trip.",
    name: "Priya Krishnamurthy",
    role: "Food Critic · The Hindu"
  },
  {
    stars: 5,
    text: "We hosted our engagement dinner here and SVARNARA transformed it into something from a dream. The team remembered our names the moment we arrived. The Gulab Jamun Soufflé was pure theatre. Utterly unforgettable.",
    name: "Rohan & Meera Kapoor",
    role: "Private Dining Event · New Delhi"
  },
  {
    stars: 5,
    text: "As someone who writes about food for a living, SVARNARA has silenced me. The Gilafi Seekh Kebab starter, the Dal Makhani cooked for eighteen hours, the Shahi Tukda at the end — every single element perfection.",
    name: "Aditi Sharma",
    role: "Culinary Editor · Condé Nast Traveller India"
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 5500)
    return () => clearInterval(timer)
  }, [])

  const goTo = i => setCurrent(i)
  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(c => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section id="testimonials" className="testimonials" aria-labelledby="testimonials-heading">
      <div className="testimonials-bg" aria-hidden="true" />

      <div className="testimonials-inner">
        <div className="section-header reveal">
          <span className="label-text">Voices of our Guests</span>
          <div className="gold-line" />
          <h2 id="testimonials-heading" className="testimonials-heading">The Experience</h2>
        </div>

        <div className="testimonial-body reveal d1">
          <div className="quote-mark" aria-hidden="true">"</div>

          <div className="testimonial-slide" key={current} aria-live="polite">
            <div className="stars" aria-label={`${t.stars} out of 5 stars`}>
              {'★'.repeat(t.stars)}
            </div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author">
              <strong>{t.name}</strong>
              <span>{t.role}</span>
            </div>
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prev} aria-label="Previous">&#8592;</button>
            <div className="carousel-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot${current === i ? ' active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className="carousel-btn" onClick={next} aria-label="Next">&#8594;</button>
          </div>
        </div>
      </div>
    </section>
  )
}

