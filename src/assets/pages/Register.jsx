import {useState} from 'react'
import Header from "../../components/Header";

export default function Register() {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [repassword, setRepassword] = useState("")

    const validarDatos = (e) => {
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
    alert("Registro exitoso")
  }
  return (
    <>
    <Header/>
    <div className='titulo'>
      <h2>Register</h2>
    </div>
    <form className='formulario' onSubmit={validarDatos}>
        <p>Email</p>
        <input type="text" name="Email" onChange={(e)=> {setMail(e.target.value)}}/><br/>
        <p>Contraseña</p>
        <input type="text" name="Password" onChange={(e)=> {setPassword(e.target.value)}}/><br/>
        <p>Confirmar contraseña</p>
        <input type="text" name="RePassword" onChange={(e)=> {setRepassword(e.target.value)}}/><br/><br/>
        <button type="submit">Enviar</button>
    </form>
    </>
  )
}
