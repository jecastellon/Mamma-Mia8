import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const navegar = useNavigate()
  
  return (
    <>
    <div className='cart'>
    <h2>email@dominio.cl</h2>
    <Button>Cerrar Sesión</Button><br />
    <Button onClick={() => navegar("/")}>Volver</Button>
    
    </div>
    </>
  )
}
