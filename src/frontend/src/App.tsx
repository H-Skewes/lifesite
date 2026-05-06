import { AuthProvider, useAuth } from "./hooks/useAuth"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

function AppInner() {
  const { user } = useAuth()
  return user ? <Dashboard /> : <Login />
}

export default function App() {
  return (
    <AuthProvider>
      <AppInner />
    </AuthProvider>
  )
}