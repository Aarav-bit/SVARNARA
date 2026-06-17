import { useState } from 'react'
import './Reservations.css'

const TIME_SLOTS = [
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
  '9:00 PM', '9:30 PM', '10:00 PM'
]

const REQUIRED = ['name', 'email', 'date', 'time', 'party']

function Toast({ msg, show, type }) {
  return (
    <div className={`res-toast${show ? ' show' : ''} ${type || ''}`} role="alert">
      {msg}
    </div>
  )
}

export default function Reservations() {
  const [form, setForm] = useState({
    name: '', date: '', time: '', party: 1, email: '', phone: '', requests: ''
  })
  const [errors, setErrors] = useState({})
  const [toast, setToast] = useState({ show: false, msg: '', type: '' })

  // Generic field change
  const onChange = e => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: '' }))
  }

  // Time pill selection
  const onSelectTime = time => {
    setForm(f => ({ ...f, time }))
    if (errors.time) setErrors(e => ({ ...e, time: '' }))
  }

  // Guest stepper
  const adjustParty = delta => {
    setForm(f => ({ ...f, party: Math.min(12, Math.max(1, f.party + delta)) }))
    if (errors.party) setErrors(e => ({ ...e, party: '' }))
  }

  // Validate before submit
  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Please enter your full name'
    if (!form.email.trim()) newErrors.email = 'Please enter your email address'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email address'
    if (!form.date) newErrors.date = 'Please select a date'
    else {
      const selected = new Date(form.date)
      const today = new Date(); today.setHours(0,0,0,0)
      if (selected < today) newErrors.date = 'Date cannot be in the past'
    }
    if (!form.time) newErrors.time = 'Please select a dining time'
    return newErrors
  }

  const onSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      setToast({ show: true, msg: '⚠️ Please fill all required fields correctly.', type: 'error' })
      setTimeout(() => setToast({ show: false, msg: '', type: '' }), 4000)
      return
    }
    // Success
    setToast({
      show: true,
      type: 'success',
      msg: `🙏 Dhanyavaad, ${form.name.split(' ')[0]}! Your table for ${form.party} on ${form.date} at ${form.time} has been received. We'll confirm within 2 hours.`
    })
    setForm({ name: '', date: '', time: '', party: 1, email: '', phone: '', requests: '' })
    setErrors({})
    setTimeout(() => setToast({ show: false, msg: '', type: '' }), 6000)
  }

  // Min date = today
  const today = new Date().toISOString().split('T')[0]

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

          {/* Row 1: Name + Email */}
          <div className="form-row">
            <div className={`form-group${errors.name ? ' has-error' : ''}`}>
              <label htmlFor="res-name">Full Name <span className="req-star">*</span></label>
              <input
                id="res-name" name="name" type="text" value={form.name}
                onChange={onChange} placeholder="Your name" autoComplete="name"
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>
            <div className={`form-group${errors.email ? ' has-error' : ''}`}>
              <label htmlFor="res-email">Email Address <span className="req-star">*</span></label>
              <input
                id="res-email" name="email" type="email" value={form.email}
                onChange={onChange} placeholder="you@email.com" autoComplete="email"
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
          </div>

          {/* Row 2: Date + Phone */}
          <div className="form-row">
            <div className={`form-group${errors.date ? ' has-error' : ''}`}>
              <label htmlFor="res-date">Preferred Date <span className="req-star">*</span></label>
              <input
                id="res-date" name="date" type="date" value={form.date}
                onChange={onChange} min={today}
              />
              {errors.date && <span className="field-error">{errors.date}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="res-phone">Phone Number</label>
              <input
                id="res-phone" name="phone" type="tel" value={form.phone}
                onChange={onChange} placeholder="+91 98XXX XXXXX" autoComplete="tel"
              />
            </div>
          </div>

          {/* Time Slots — custom pill picker */}
          <div className={`form-group full${errors.time ? ' has-error' : ''}`}>
            <label>Preferred Time <span className="req-star">*</span></label>
            <div className="time-pills" role="group" aria-label="Select dining time">
              {TIME_SLOTS.map(slot => (
                <button
                  key={slot}
                  type="button"
                  className={`time-pill${form.time === slot ? ' active' : ''}`}
                  onClick={() => onSelectTime(slot)}
                  aria-pressed={form.time === slot}
                >
                  {slot}
                </button>
              ))}
            </div>
            {errors.time && <span className="field-error">{errors.time}</span>}
          </div>

          {/* Guest Stepper */}
          <div className="form-group full">
            <label>Number of Guests <span className="req-star">*</span></label>
            <div className="guest-stepper">
              <button
                type="button"
                className="stepper-btn"
                onClick={() => adjustParty(-1)}
                aria-label="Decrease guests"
                disabled={form.party <= 1}
              >−</button>
              <span className="stepper-value" aria-live="polite">
                {form.party} {form.party === 1 ? 'Guest' : 'Guests'}
                {form.party >= 9 && <span className="stepper-tag"> · Private Dining</span>}
              </span>
              <button
                type="button"
                className="stepper-btn"
                onClick={() => adjustParty(1)}
                aria-label="Increase guests"
                disabled={form.party >= 12}
              >+</button>
            </div>
          </div>

          {/* Special Requests */}
          <div className="form-group full">
            <label htmlFor="res-requests">Special Requests</label>
            <textarea
              id="res-requests" name="requests" value={form.requests} onChange={onChange}
              rows={4}
              placeholder="Dietary requirements, celebrations, allergies, seating preferences, anniversary set-up…"
            />
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

      <Toast msg={toast.msg} show={toast.show} type={toast.type} />
    </section>
  )
}
