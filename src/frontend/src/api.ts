const BASE_URL = import.meta.env.VITE_API_URL

export async function apiFetch(
  path: string,
  options: RequestInit = {}
): Promise<Response> {
  const stored = localStorage.getItem("user")
  const token = stored ? JSON.parse(stored).access_token : null

  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  })

  if (res.status === 401) {
    localStorage.removeItem("user")
    window.location.href = "/login"
    throw new Error("Session expired")
  }

  return res
}

export async function createUser(username: string, password: string) {
  const res = await apiFetch("/login/createuser", {
    method: "POST",
    body: JSON.stringify({ username, password })
  })
  return res.json()
}

export async function loginUser(username: string, password: string) {
  const res = await apiFetch("/login/checklogin", {
    method: "POST",
    body: JSON.stringify({ username, password })
  })
  return res.json()
}