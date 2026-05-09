import { useState } from 'react'
import { createUser } from './api'

export default function App() {
  const [result, setResult] = useState<string>("")

  async function handleTest() {
    try {
      const data = await createUser("testuser", "testpass123")
      setResult(JSON.stringify(data))
    } catch (err) {
      setResult("error: " + err)
    }
  }

  return (
    <div>
      <button onClick={handleTest}>Test Create User</button>
      <p>{result}</p>
    </div>
  )
}