import { useState, useEffect } from 'react'
import './AdminDashboard.css'

const STORAGE_KEY = 'svarnara-submissions'

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    setSubmissions(data)
  }, [])

  const deleteSubmission = id => {
    const updated = submissions.filter(s => s.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    setSubmissions(updated)
  }

  const filtered = submissions.filter(s =>
    s.payload?.name?.toLowerCase().includes(search.toLowerCase()) ||
    s.payload?.email?.toLowerCase().includes(search.toLowerCase())
  )

  const totalGuests = submissions.reduce((sum, s) => sum + parseInt(s.payload?.party || 0, 10), 0)

  return (
    <div className="admin-dashboard">
      <div className="admin-container">
        <header className="admin-header">
          <div>
            <h1 className="admin-title">AURUM Admin</h1>
            <p className="admin-subtitle">Reservation Management Portal</p>
          </div>
          <a href="/" className="btn btn-ghost admin-back-btn">← View Site</a>
        </header>

        {/* Stats Grid */}
        <div className="admin-stats">
          <div className="stat-card">
            <span className="stat-label">Total Bookings</span>
            <span className="stat-value">{submissions.length}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Expected Guests</span>
            <span className="stat-value">{totalGuests}</span>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="admin-filter-bar">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="admin-search-input"
          />
        </div>

        {/* Table */}
        <div className="admin-table-wrap">
          {filtered.length === 0 ? (
            <div className="admin-empty">No reservations found.</div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Guest</th>
                  <th>Date & Time</th>
                  <th>Party</th>
                  <th>Zone</th>
                  <th>Contact</th>
                  <th>Special Requests</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map(sub => {
                  const p = sub.payload || {}
                  return (
                    <tr key={sub.id}>
                      <td>
                        <div className="guest-name">{p.name}</div>
                      </td>
                      <td>
                        <div>{p.date}</div>
                        <div className="guest-time">{p.time}</div>
                      </td>
                      <td>{p.party} Guests</td>
                      <td className="zone-tag">{p.zone || 'mainhall'}</td>
                      <td>
                        <div>{p.email}</div>
                        <div className="guest-phone">{p.phone}</div>
                      </td>
                      <td className="requests-cell">{p.requests || '—'}</td>
                      <td>
                        <button
                          onClick={() => deleteSubmission(sub.id)}
                          className="admin-delete-btn"
                          aria-label="Delete reservation"
                        >
                          Cancel
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
