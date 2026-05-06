import { useEffect, useState } from "react"

interface HelloResponse {
  message: string
}

export default function Home() {
  const [data, setData] = useState<HelloResponse | null>(null)

  useEffect(() => {
    fetch("http://localhost:8000/api/hello")
      .then(res => res.json())
      .then(setData)
  }, [])

  return <h1>{data ? data.message : "Loading..."}</h1>
}
