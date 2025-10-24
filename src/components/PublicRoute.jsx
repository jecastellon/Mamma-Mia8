import { Navigate } from "react-router-dom"
import { useUser } from "./UserContext"

export default function PublicRoute ({ children }) {
  const { token } = useUser()
  return token ? <Navigate to="/" replace /> : children
}