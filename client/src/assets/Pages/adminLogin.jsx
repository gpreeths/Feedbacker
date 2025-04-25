import React from 'react'
import { Menu3 } from '../Components/menu1'

function adminLogin() {
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

       
      
      </table>

      <input type="submit" />
      </form>
    </div>

</div>
  )
}

export default adminLogin