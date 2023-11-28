import React, { useState } from 'react';
import './Register.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import sunil from '../../assets/images/branding.png';

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:3001/users", {
      username: username,
      email: email,
      pass: pass
    });
    navigate('/home');
  };

  return (
    <div
      style={{
        backgroundImage: `url(${sunil})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <form onSubmit={handleSubmit} style={{ marginLeft: '65px', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
        <div className='container'>
          <div>
            <label>Username</label>
            <input type='text' onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
            <label>Email</label>
            <input type='text' onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Password</label>
            <input type='password' onChange={(e) => setPass(e.target.value)} required />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type='password' onChange={(e) => setConfirmPass(e.target.value)} required />
          </div>
          <div>
            <Button variant="contained" type='submit'>Register</Button>
          </div>
          <div>
            Already have an account?
            <Button variant="outlined" style={{ marginLeft: '5px' }} onClick={() => navigate('/login')}>Sign in</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register;
