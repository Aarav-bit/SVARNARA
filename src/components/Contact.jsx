import { useState } from 'react'
import { submitLead } from '../submissions'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState({ show: false, msg: '', type: '' })
  const [submitting, setSubmitting] = useState(false)

  const onChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }))
  }

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your name'
    if (!form.email.trim()) newErrors.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email'
    if (!form.message.trim()) newErrors.message = 'Please enter your message'
    return newErrors
  }

  const onSubmit = async e => {
    e.preventDefault()
    const errs = validate()

    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      setToast({ show: true, msg: 'Please complete the required fields.', type: 'error' })
      setTimeout(() => setToast({ show: false, msg: '', type: '' }), 4000)
      return
    }

    setSubmitting(true)
    try {
      const result = await submitLead('contact', form)
      const localNote = result.mode === 'local' ? ' Saved to the local demo inbox.' : ''
      setToast({ show: true, msg: `🙏 Thank you for reaching out.${localNote} We will respond within 24 hours.`, type: 'success' })
      setForm({ name: '', email: '', subject: '', message: '' })
      setErrors({})
      setTimeout(() => setToast({ show: false, msg: '', type: '' }), 5000)
    } catch (error) {
      setToast({ show: true, msg: error.message, type: 'error' })
      setTimeout(() => setToast({ show: false, msg: '', type: '' }), 5000)
    } finally {
      setSubmitting(false)
    }
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
              <a href="mailto:reservations@svarnara.in">reservations@svarnara.in</a>
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
            title="SVARNARA Fine Dining — New Delhi"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
          <div className="map-overlay-label">
            <span className="label-text">SVARNARA</span>
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
                  onChange={onChange} placeholder="Your name" required aria-invalid={!!errors.name} />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="c-email">Email</label>
                <input id="c-email" name="email" type="email" value={form.email}
                  onChange={onChange} placeholder="you@email.com" required aria-invalid={!!errors.email} />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
              <div className="form-group" style={{gridColumn:'1/-1'}}>
                <label htmlFor="c-subject">Subject</label>
                <input id="c-subject" name="subject" type="text" value={form.subject}
                  onChange={onChange} placeholder="How can we assist?" />
              </div>
              <div className="form-group" style={{gridColumn:'1/-1'}}>
                <label htmlFor="c-message">Message</label>
                <textarea id="c-message" name="message" value={form.message}
                  onChange={onChange} rows={5} placeholder="Your message…" required aria-invalid={!!errors.message} />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>
              <div style={{gridColumn:'1/-1'}}>
                <button type="submit" className="btn btn-gold" id="contact-submit-btn" disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Toast */}
      <div className={`res-toast${toast.show ? ' show' : ''} ${toast.type}`} role="alert">
        {toast.msg}
      </div>
    </section>
  )
}

