import React, { useState } from 'react'
import { Menu3 } from '../Components/menu1'
import { Link } from 'react-router-dom'
import axios from 'axios'

function UserLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()


    try {
      const response = await axios.post('http://localhost:2000/user/login', { email, password })
      console.log(response.data);

    }
    catch (error) {
      setErrorMessage(error.response?.datas?.message || 'login failed')
    }

  }




    return (
      <div>
        <Menu3 />
        <div className='loginContainer'>
          <form onSubmit={handleSubmit}>
            <table>
              <tbody>


                <tr><th><label htmlFor="">Email</label></th>
                  <td><input type="text" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></td></tr>
                <tr><th><label htmlFor="">Password</label></th>
                  <td><input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/></td></tr>

                <tr><th><Link to="/signup">No account? Create one!</Link> </th>
                  <td><Link to="/forgotpassword">Forgot password? No worries</Link></td></tr>


              </tbody>

            </table>

            <button type="submit">Submit</button>
          </form>
          {errorMessage && <div className="error">{errorMessage}</div>}
        </div>

      </div>
    )
  }

  export default UserLogin