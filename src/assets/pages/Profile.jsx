import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../components/UserContext'

export default function Profile() {
    const { email, logout, getProfile } = useUser()
    const [userEmail, setUserEmail] = useState(email)
    const navegar = useNavigate()

    useEffect(() => {
      if (!userEmail) {
      const fetchProfile = async () => {
        const profile = await getProfile()
        if (profile && profile.email) setUserEmail(profile.email)
      }
      fetchProfile()
    }
  }, [userEmail, getProfile])

  const handleLogout = () => {
    logout()
    navegar("/")
  }
  
  return (
    <>
    <div className='cart'>
    <h2>{userEmail || "Cargando..."}</h2>
    <Button onClick={() => { logout(); navegar("/"); }}>Cerrar Sesión</Button><br />
    <Button onClick={() => navegar("/")}>Volver</Button>
    
    </div>
    </>
  )
}
