import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"
import type { LoginResponse } from "../../types"

interface AuthContextType {
  user: LoginResponse | null
  login: (user: LoginResponse) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  // initialize from localStorage so refresh doesn't log user out
  const [user, setUser] = useState<LoginResponse | null>(() => {
    const stored = localStorage.getItem("user")
    return stored ? JSON.parse(stored) : null
  })

  function login(userData: LoginResponse) {
    localStorage.setItem("user", JSON.stringify(userData))  // persist it
    setUser(userData)
  }

  function logout() {
    localStorage.removeItem("user")  // clear it
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider")
  return ctx
}