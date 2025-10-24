import Header from '../../components/Header'
import {useState} from 'react'
import {useUser} from '../../components/UserContext'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const { login } = useUser()
    const navigate = useNavigate()

    const validarDatos = async (e) => {
    e.preventDefault()
    if (!mail.trim() || !password.trim()) {
      alert("Todos los campos son obligatorios")
      return
    }
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres")
      return
    }

    const result = await login(mail, password)

    if (result.success) {
      alert("Ingreso exitoso")
      navigate("/profile")
    } else {
      alert(`Error: ${result.message}`)
    }
  
  }

  return (
    <>
    <Header/>
    <div className='titulo'>
        <h2>Login</h2>
    </div>
    <form className='formulario' onSubmit={validarDatos}>
        <p>Email</p>
        <input type="text" name="Email" value={mail} onChange={(e)=> {setMail(e.target.value)}}/><br/>
        <p>Contraseña</p>
        <input type="text" name="Password" value={password} onChange={(e)=> {setPassword(e.target.value)}}/><br/><br/>
        <button type="submit">Enviar</button>
    </form>
    </>
  )
}
