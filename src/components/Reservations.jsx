import { useState } from 'react'
import './Reservations.css'

function Toast({ msg, show }) {
  return (
    <div className={`res-toast${show ? ' show' : ''}`} role="alert">
      {msg}
    </div>
  )
}

export default function Reservations() {
  const [form, setForm] = useState({
    name: '', date: '', time: '', party: '', email: '', phone: '', requests: ''
  })
  const [toast, setToast] = useState({ show: false, msg: '' })

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = e => {
    e.preventDefault()
    setToast({ show: true, msg: '🙏 Dhanyavaad! Your reservation has been received. We will confirm within 2 hours.' })
    setForm({ name: '', date: '', time: '', party: '', email: '', phone: '', requests: '' })
    setTimeout(() => setToast({ show: false, msg: '' }), 5000)
  }

  return (
    <section id="reservations" className="reservations" aria-labelledby="res-heading">
      <div className="res-bg-gradient" aria-hidden="true" />

      <div className="reservation-wrap">
        <div className="section-header reveal">
          <span className="label-text">Book Your Evening</span>
          <div className="gold-line" />
          <h2 id="res-heading" className="res-heading">Reserve a Table</h2>
          <p className="res-subtext">
            Each table is tended with the care of a guest in our home. Share your preferences below 
            and we will craft the perfect evening for you.
          </p>
        </div>

        <form className="reservation-form reveal d1" onSubmit={onSubmit} noValidate>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="res-name">Full Name</label>
              <input id="res-name" name="name" type="text" value={form.name}
                onChange={onChange} placeholder="Your name" required autoComplete="name" />
            </div>
            <div className="form-group">
              <label htmlFor="res-party">Party Size</label>
              <select id="res-party" name="party" value={form.party} onChange={onChange} required>
                <option value="" disabled>Select guests</option>
                {[1,2,3,4,5,6,7,8].map(n => (
                  <option key={n} value={n}>{n} Guest{n > 1 ? 's' : ''}</option>
                ))}
                <option value="9+">9+ (Private Dining)</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="res-date">Preferred Date</label>
              <input id="res-date" name="date" type="date" value={form.date} onChange={onChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="res-time">Preferred Time</label>
              <select id="res-time" name="time" value={form.time} onChange={onChange} required>
                <option value="" disabled>Select time</option>
                <option value="19:00">7:00 PM</option>
                <option value="19:30">7:30 PM</option>
                <option value="20:00">8:00 PM</option>
                <option value="20:30">8:30 PM</option>
                <option value="21:00">9:00 PM</option>
                <option value="21:30">9:30 PM</option>
                <option value="22:00">10:00 PM</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="res-email">Email Address</label>
              <input id="res-email" name="email" type="email" value={form.email}
                onChange={onChange} placeholder="you@email.com" required autoComplete="email" />
            </div>
            <div className="form-group">
              <label htmlFor="res-phone">Phone Number</label>
              <input id="res-phone" name="phone" type="tel" value={form.phone}
                onChange={onChange} placeholder="+91 98XXX XXXXX" autoComplete="tel" />
            </div>
          </div>

          <div className="form-group full">
            <label htmlFor="res-requests">Special Requests</label>
            <textarea id="res-requests" name="requests" value={form.requests} onChange={onChange}
              rows={4} placeholder="Dietary requirements, celebrations, allergies, seating preferences, anniversary set-up…" />
          </div>

          <div className="form-submit">
            <button type="submit" className="btn btn-gold" id="res-submit-btn">
              Book My Table
            </button>
            <p className="res-note">
              We confirm within 2 hours · Cancellations accepted up to 24 hours prior · Dress code: Smart Casual
            </p>
          </div>
        </form>
      </div>

      <Toast msg={toast.msg} show={toast.show} />
    </section>
  )
}
