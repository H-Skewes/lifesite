import { useEffect, useState } from "react"
import { useAuth } from "../hooks/useAuth"
import type { DashboardData } from "../../types"
import "./Dashboard.css"

export default function Dashboard() {
  const { user, logout } = useAuth()
  const [data, setData] = useState<DashboardData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("http://localhost:8000/api/dashboard/")
      .then(res => {
        if (!res.ok) throw new Error("Failed to load dashboard")
        return res.json()
      })
      .then(setData)
      .catch(err => setError(err.message))
  }, [])

  async function handleLogout() {
    await fetch("http://localhost:8000/api/auth/logout", { method: "POST" })
    logout()
  }

  return (
    <div className="dash-root">

      {/* ── Top bar ── */}
      <div className="dash-topbar">
        <div className="dash-topbar-spacer" />
        <button className="dash-avatar-btn" title={user?.username ?? "Profile"}>
          {user?.username?.[0]?.toUpperCase() ?? "U"}
        </button>
      </div>

      {/* ── Header ── */}
      <header className="dash-header">
        <h1 className="dash-title">HOME</h1>
        <nav className="dash-nav">
          <a href="/budget">Budget</a>
          <a href="/calendar">Calendar</a>
          <a href="/todo">Todo</a>
          <a href="/notes">Notes</a>
          <a href="/fashion">Fashion</a>
        </nav>
      </header>

      {/* ── Main content ── */}
      <main className="dash-main">
        {error && <p className="dash-error">{error}</p>}

        {!data ? (
          <p className="dash-loading">Loading...</p>
        ) : (
          <>
            {/* ── Widget grid ── */}
            <div className="dash-grid">

              {/* Calendar widget — left */}
              <section className="dash-widget dash-widget--calendar">
                <div className="widget-titlebar">Calendar</div>
                <div className="widget-body">
                  {data.events.length === 0 ? (
                    <p className="widget-empty">No upcoming events</p>
                  ) : (
                    <ul className="event-list">
                      {data.events.map(ev => (
                        <li key={ev.id} className="event-item">
                          <span className="event-date">{ev.date}</span>
                          <span className="event-title">{ev.title}</span>
                          {ev.time && <span className="event-time">{ev.time}</span>}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>

              {/* Todos widget — center */}
              <section className="dash-widget dash-widget--todos">
                <div className="widget-titlebar">Top 5 Todos</div>
                <div className="widget-body">
                  {data.todos.length === 0 ? (
                    <p className="widget-empty">All clear</p>
                  ) : (
                    <ul className="todo-list">
                      {data.todos.slice(0, 5).map(todo => (
                        <li key={todo.id} className={`todo-item${todo.done ? " todo-item--done" : ""}`}>
                          <span className="todo-check">{todo.done ? "■" : "□"}</span>
                          <span className="todo-text">{todo.text}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>

              {/* Recent note widget — right */}
              <section className="dash-widget dash-widget--note">
                <div className="widget-titlebar">Recent Note</div>
                <div className="widget-body">
                  {!data.recent_note ? (
                    <p className="widget-empty">No notes yet</p>
                  ) : (
                    <>
                      <p className="note-title">{data.recent_note.title}</p>
                      <p className="note-preview">{data.recent_note.preview}</p>
                      <p className="note-date">Updated {data.recent_note.updated_at}</p>
                    </>
                  )}
                </div>
              </section>

            </div>

            {/* ── Email alert bar ── */}
            <section className="dash-widget dash-widget--emails">
              <div className="widget-titlebar">Recent System Emails</div>
              <div className="widget-body widget-body--row">
                {data.recent_emails.length === 0 ? (
                  <p className="widget-empty">No emails sent</p>
                ) : (
                  data.recent_emails.map(email => (
                    <div key={email.id} className="email-item">
                      <span className="email-subject">{email.subject}</span>
                      <span className="email-meta">{email.sent_at} → {email.recipient}</span>
                    </div>
                  ))
                )}
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="dash-footer">
        <button className="dash-logout-btn" onClick={handleLogout}>Log out</button>
      </footer>

    </div>
  )
}