import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Pizza from './assets/pages/Pizza'
import Home from './assets/pages/Home'
import Cart from './assets/pages/Cart'
import Register from './assets/pages/Register'
import LoginPage from './assets/pages/LoginPage'
import Profile from './assets/pages/Profile'
import NotFound from './assets/pages/NotFound'
import { Routes, Route, Navigate } from "react-router-dom"
import { UserProvider, useUser } from './components/UserContext'

function App() {

  return (
    <UserProvider>
    <div className="contenedor">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={useUser().token ? <Navigate to="/"/> : <Register/>}/>
        <Route path='/login' element={useUser().token ? <Navigate to="/"/> : <LoginPage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pizza/:id' element={<Pizza/>}/>
        <Route path='/profile' element={useUser().token ? <Profile/> : <Navigate to="/login"/>}/>
        <Route path='/404' element={<NotFound/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
        <Footer />
    </div>
    </UserProvider>
  )
}

export default App
