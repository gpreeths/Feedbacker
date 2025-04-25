import React from 'react'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'

function Menu1() {
  return (
    <div className="menuContainer1">
      <img src={logo} alt='logo' className='logoMenu1' />
      <ul className='menuList1'>
        <li><Link to="/">Home</Link></li>
        <li><Link to={'/login'}>Login</Link></li> 
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/branches">Branches</Link></li>
</ul>
    </div>
  )
}

export default Menu1
