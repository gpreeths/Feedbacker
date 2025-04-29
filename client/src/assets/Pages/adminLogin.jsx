import React, { useState } from 'react';
import { Menu3 } from '../Components/menu1';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = { email, password };
      
      // IMPORTANT: backend is running on localhost:2000
      const response = await axios.post('http://localhost:2000/admin/login', formData);

      // Save token to localStorage
      localStorage.setItem('adminToken', response.data.token);

      console.log('Admin login successful');

      // Redirect to admin review page
      navigate('/adminreview');

    } catch (error) {
      console.error('Admin login error:', error.response?.data || error.message);
      alert('Login failed. Please check your email and password.');
    }
  };

  return (
    <div>
      <Menu3 />
      <div className="loginContainer">
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <th><label htmlFor="email">Email</label></th>
                <td>
                  <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                  />
                </td>
              </tr>

              <tr>
                <th><label htmlFor="password">Password</label></th>
                <td>
                  <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
