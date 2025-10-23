import {useState} from 'react'
import Header from '../../components/Header';

export default function LoginPage() {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    const validarDatos = (e) => {
    e.preventDefault()
    if (!mail.trim() || !password.trim()) {
      alert("Todos los campos son obligatorios")
      return
    }
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres")
      return
    }
    alert("Ingreso exitoso")
  }

  return (
    <>
    <Header/>
    <div className='titulo'>
        <h2>Login</h2>
    </div>
    <form className='formulario' onSubmit={validarDatos}>
        <p>Email</p>
        <input type="text" name="Email" onChange={(e)=> {setMail(e.target.value)}}/><br/>
        <p>Contraseña</p>
        <input type="text" name="Password" onChange={(e)=> {setPassword(e.target.value)}}/><br/>
        <button type="submit">Enviar</button>
    </form>
    </>
  )
}
