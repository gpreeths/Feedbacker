import React from 'react'
import {Menu3} from '../Components/menu1'
import { Link } from 'react-router-dom'

function userLogin() {
  return (
    <div>
        <Menu3/>
        <div className='loginContainer'>
        <form action="">
          <table>
          
            
            <tr><th><label htmlFor="">Email</label></th>
            <td><input type="text" /></td></tr>
            <tr><th><label htmlFor="">Password</label></th>
            <td><input type="text" /></td></tr>
          <br /><br />
          <tr><th><Link to="/signup">No account? Create one!</Link> </th>
          <td><Link to="/forgotpassword">Forgot password? No worries</Link></td></tr>

           
          
          </table>

          <input type="submit" />
          </form>
        </div>

    </div>
  )
}

export default userLogin