import React from 'react'
import { BrowserRouter } from "react-router-dom"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './components/CartContext.jsx'
import { UserProvider } from './components/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <CartProvider>
    <UserProvider>
      <App />
    </UserProvider>
    </CartProvider>
    </BrowserRouter>
  </StrictMode>
)
