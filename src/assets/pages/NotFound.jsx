import React from 'react'
import { Button, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
    const navegar = useNavigate()
  return (
    <>
    <Alert>Error 404: Page Not Found</Alert>
    <div className='cart'>
    <h2>🚨 La página no existe ⚠️</h2>
    <Button onClick={() => navegar("/")}>Volver</Button>
    </div>
    </>
  )
}
