import { useEffect, useState } from "react"
import { useAuth } from "../hooks/useAuth"
import type { LoginResponse } from "../../types"

export default function Login() {
  const { login } = useAuth()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const res = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      })

      if (!res.ok) {
        const data = await res.json()
        setError(data.detail ?? "Login failed")
        return
      }

      const data: LoginResponse = await res.json()
      login(data)
    } catch {
      setError("Could not reach server")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-root">
      <div className="login-window">
        <div className="login-titlebar">
          <span>Sign In</span>
        </div>
        <div className="login-body">
          <h1 className="login-site-title">HOME</h1>
          <p className="login-site-sub">Personal dashboard</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <label>
              Username
              <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoComplete="username"
                required
              />
            </label>

            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </label>

            {error && <p className="login-error">{error}</p>}

            <button type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}