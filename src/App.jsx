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
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'

function App() {

  return (
    <UserProvider>
    <div className="contenedor">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
        <Route path='/login' element={<PublicRoute><LoginPage/></PublicRoute>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pizza/:id' element={<Pizza/>}/>
        <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
        <Route path='/404' element={<NotFound/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
        <Footer />
    </div>
    </UserProvider>
  )
}

export default App
