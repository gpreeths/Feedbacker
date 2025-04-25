import React from 'react'
import customerIcon from '../Images/customerIcon.jpg'
import admin from '../Images/admin.jpg'
import {Menu2} from '../Components/menu1'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
    <Menu2/>
    <div className='loginContainer'>
    <Link to='/userlogin'><img src={customerIcon} alt="CustomerIcon"className='CustomerIcon' /></Link>
    <Link to='/adminlogin'><img src={admin} alt="Admin" className='adminIcon'/></Link>
        </div>
        </>
  )
}

export default Login