import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [toast, setToast] = useState(false)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = e => {
    e.preventDefault()
    setToast(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setToast(false), 5000)
  }

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="contact-bg" aria-hidden="true" />

      <div className="section-wrap">
        <div className="section-header reveal">
          <span className="label-text">Find Us</span>
          <div className="gold-line" />
          <h2 id="contact-heading" className="contact-heading">Contact & Location</h2>
        </div>

        {/* Three-column info */}
        <div className="contact-info-grid reveal">
          <div className="contact-info-col">
            <div className="info-icon">📍</div>
            <h4>Address</h4>
            <p>
              14 Prithviraj Road<br />
              Lutyens' Bungalow Zone<br />
              New Delhi — 110 011<br />
              India
            </p>
            <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="info-link">
              Get Directions ↗
            </a>
          </div>

          <div className="contact-v-divider" aria-hidden="true" />

          <div className="contact-info-col center">
            <div className="info-icon">✆</div>
            <h4>Reservations</h4>
            <p>
              <a href="tel:+911140001234">+91 11 4000 1234</a><br /><br />
              <a href="tel:+919810001234">+91 98100 01234</a><br /><br />
              <a href="mailto:reservations@aurum.in">reservations@aurum.in</a>
            </p>
          </div>

          <div className="contact-v-divider" aria-hidden="true" />

          <div className="contact-info-col right">
            <div className="info-icon">🕐</div>
            <h4>Hours</h4>
            <p>
              Tuesday – Friday<br />
              7:00 PM – 11:00 PM<br /><br />
              Saturday & Sunday<br />
              6:30 PM – 11:30 PM<br /><br />
              Monday<br />
              <em>Closed</em>
            </p>
          </div>
        </div>
      </div>

      {/* Map + Form */}
      <div className="contact-bottom">
        <div className="contact-map reveal">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.18%2C28.59%2C77.22%2C28.61&layer=mapnik&marker=28.600%2C77.201"
            title="AURUM Fine Dining — New Delhi"
            loading="lazy"
            allowFullScreen
          />
          <div className="map-overlay-label">
            <span className="label-text">AURUM</span>
            <span>14 Prithviraj Road, New Delhi</span>
          </div>
        </div>

        <div className="contact-form-wrap reveal d2">
          <span className="label-text">Send a Message</span>
          <div className="gold-line left" />
          <h3 className="contact-form-title">We'd love to hear from you</h3>

          <form id="contact-form" onSubmit={onSubmit} noValidate>
            <div className="contact-form-grid">
              <div className="form-group">
                <label htmlFor="c-name">Name</label>
                <input id="c-name" name="name" type="text" value={form.name}
                  onChange={onChange} placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label htmlFor="c-email">Email</label>
                <input id="c-email" name="email" type="email" value={form.email}
                  onChange={onChange} placeholder="you@email.com" required />
              </div>
              <div className="form-group" style={{gridColumn:'1/-1'}}>
                <label htmlFor="c-subject">Subject</label>
                <input id="c-subject" name="subject" type="text" value={form.subject}
                  onChange={onChange} placeholder="How can we assist?" />
              </div>
              <div className="form-group" style={{gridColumn:'1/-1'}}>
                <label htmlFor="c-message">Message</label>
                <textarea id="c-message" name="message" value={form.message}
                  onChange={onChange} rows={5} placeholder="Your message…" required />
              </div>
              <div style={{gridColumn:'1/-1'}}>
                <button type="submit" className="btn btn-gold" id="contact-submit-btn">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Toast */}
      <div className={`res-toast${toast ? ' show' : ''}`} role="alert">
        🙏 Thank you for reaching out. We will respond within 24 hours.
      </div>
    </section>
  )
}
