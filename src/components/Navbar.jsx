import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { NavLink, useNavigate } from 'react-router-dom'
import { useCart } from './CartContext'
import { formatNumber } from '../assets/pages/Cart'
import { useUser } from './UserContext'

export default function Navbar() {
  const { total } = useCart()
  const { token, logout } = useUser()
  const navigate = useNavigate()
  const setActiveClass = ({isActive}) => (isActive ? "active" : undefined)
  const cierraSesion = () => {
    logout()
    navigate('/')
  }

  return (
        <>
        <div className='menu'>
            <div className='menu-left'>
            <p>Pizzería Mamma Mia!</p>
      <NavLink className={setActiveClass} to="/">
        <Button variant="dark">🍕Home</Button>
      </NavLink>
      {token ? (
          <>
      <NavLink className={setActiveClass} to="/profile">
        <Button variant="dark">🔓Profile</Button>
      </NavLink>
        <Button variant="dark" onClick={cierraSesion}>🔒Logout</Button>
        </>
      ) : (
          <>
      <NavLink className={setActiveClass} to="/login">
        <Button variant="dark">🔐Login</Button>
      </NavLink>
      <NavLink className={setActiveClass} to="/register">
        <Button variant="dark">🔐Register</Button>
      </NavLink>
        </>
      )}
        </div>
        <div>
      <NavLink className={setActiveClass} to="/cart">
        <Button variant="dark">🛒Total: ${formatNumber(total)}</Button>
      </NavLink>
      </div>
      </div>
    </>
  )
}
