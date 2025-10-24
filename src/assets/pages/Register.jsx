import Header from "../../components/Header"
import {useState} from 'react'
import { useUser } from "../../components/UserContext"
import { useNavigate } from "react-router-dom"

export default function Register() {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")
    const { register } = useUser()
    const navigate = useNavigate()

    const validarDatos = async (e) => {
    e.preventDefault()
    if (!mail.trim() || !password.trim() || !repassword.trim()) {
      alert("Todos los campos son obligatorios")
      return
    }
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres")
      return
    }
    if (password !== repassword) {
      alert("Las contraseñas no coinciden")
      return
    }

    const result = await register(mail, password)

    if (result.success) {
      alert("Registro exitoso")
      navigate("/profile")
    } else {
      alert(`Error: ${result.message}`)
    }
  }

  return (
    <>
    <Header/>
    <div className='titulo'>
      <h2>Register</h2>
    </div>
    <form className='formulario' onSubmit={validarDatos}>
        <p>Email</p>
        <input type="text" name="Email" value={mail}  onChange={(e)=> {setMail(e.target.value)}}/><br/>
        <p>Contraseña</p>
        <input type="text" name="Password" value={password}  onChange={(e)=> {setPassword(e.target.value)}}/><br/>
        <p>Confirmar contraseña</p>
        <input type="text" name="RePassword" value={repassword} onChange={(e)=> {setRepassword(e.target.value)}}/><br/><br/>
        <button type="submit">Enviar</button>
    </form>
    </>
  )
}
