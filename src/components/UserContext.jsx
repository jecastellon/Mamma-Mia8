import { createContext, useContext, useState, useEffect } from "react"

const UserContext = createContext()

export function UserProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token") || null)
  const [email, setEmail] = useState(() => localStorage.getItem("email") || null)


//useEffect(() => {
//    const storedToken = localStorage.getItem("token")
//    const storedEmail = localStorage.getItem("email")
//    if (storedToken) setToken(storedToken)
//    if (storedEmail) setEmail(storedEmail)
//  }, [])

const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

const data = await res.json()

  if (!res.ok) throw new Error(data.message || "Error al iniciar sesión");

  setToken(data.token)
  setEmail(data.email)
  localStorage.setItem("token", data.token)
  localStorage.setItem("email", data.email)

  return { success: true }
    } catch (error) {
      console.error("Error en login:", error)
      return { success: false, message: error.message }
    }
  }

const register = async (email, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

  const data = await res.json()

  if (!res.ok) throw new Error(data.message || "Error al registrarse");

  setToken(data.token)
  setEmail(data.email)
  localStorage.setItem("token", data.token)
  localStorage.setItem("email", data.email)

  return { success: true }
    } catch (error) {
      console.error("Error en register:", error)
      return { success: false, message: error.message }
    }
  }

  const logout = () => {
    setToken(null)
    setEmail(null)
    localStorage.removeItem("token")
    localStorage.removeItem("email")
  }

const getProfile = async () => {
  if (!token) {
    console.warn("El usuario no está autenticado.");
    return null;
  }

  try {
    const res = await fetch("http://localhost:5000/api/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await res.json()

    if (!res.ok) throw new Error(data.message || "Error al obtener el perfil")

    return data
  } catch (error) {
    console.error("Error en getProfile:", error)
    return null
  }
}


  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  return useContext(UserContext)
}
