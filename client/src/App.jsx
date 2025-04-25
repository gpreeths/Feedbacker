import React from 'react'
import Home from './assets/Pages/Home'
import Login from './assets/Pages/login'
import Signup from './assets/Pages/Signup'
import { Routes,Route } from 'react-router-dom'
import './style.css'
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

  )
}

export default App