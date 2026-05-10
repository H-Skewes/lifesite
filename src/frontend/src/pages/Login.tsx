import { useState } from 'react'
import { createUser } from '../api'
import './CreateUser.css'

export default function CreateUser() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const data = await createUser(username, password)
      setMessage('Account created successfully')
      console.log(data)
    } catch (err) {
      setMessage('Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page-root">
      <div className="header">LifeSite</div>
      <div className="page-content">
        <div className="window">
          <div className="createuser-titlebar">Login</div>
          <div className="window-body">
            <form onSubmit={handleSubmit}>
              <label>
                Username
                <input
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </label>
              {message && <p className="message">{message}</p>}
              <button type="submit" disabled={loading} className="createuser-button">
                {loading ? 'Creating...' : 'Create Account'}
              </button>
            </form>
        </div>
      </div>
    </div>
    </div>
  )
}