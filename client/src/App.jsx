import React from 'react'
import Home from './assets/Pages/home'
import Login from './assets/Pages/login'
import Signup from './assets/Pages/signup'
import Userlogin from './assets/Pages/userLogin'
import AdminLogin from './assets/Pages/adminLogin'
import AdminReview from './assets/Pages/adminReview'
import { Routes,Route } from 'react-router-dom'
import CustomerReview from './assets/Pages/customerReview'
import './style.css'
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
       <Route path="/userlogin" element={<Userlogin/>}/>
       <Route path="/adminlogin" element={<AdminLogin/>}/>
       <Route path='/customerreview' element={<CustomerReview/>}/>
       <Route path='/adminReview' element={<AdminReview/>}/>
      </Routes>

  )
}

export default App