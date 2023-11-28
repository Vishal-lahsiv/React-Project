import React, { useState, createContext } from 'react';
import './Loginpage.css';
import './first.css';
import { Button, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import sunil from '../../assets/images/branding.png';

export const AppContext = createContext(null);

const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [pass, setPass] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const onHandleRegister = () => {
    navigate('/register');
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const handleLogin = () => {
    localStorage.setItem('loggedIn', 'true'); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get("http://localhost:3001/users").then(result => {
      const userFound = result.data.find(user => user.username === username && user.pass === pass);
      if (userFound) {
        handleLogin();
        navigate('/home');
        alert('Login successful');
      } else {
        setSnackbarOpen(true);
      }
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  };

  const contextValue = {
    handleLogin,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div style={{ backgroundImage: `url(${sunil})`, backgroundSize: 'cover', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form onSubmit={handleSubmit} style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
          <div className='containerlogin'>
            <div>
              <label>Enter username</label>
              <input type='text' onChange={(event) => { setUsername(event.target.value) }} required />
            </div>
            <div>
              <label>Enter password</label>
              <input type='password' onChange={(event) => { setPass(event.target.value) }} required />
            </div>
            <div>
              <Button variant="contained" type='submit'>Login</Button>
            </div>
            <div>
              Don't Have an Account?
              <Button variant="contained" style={{ marginLeft: '5px' }} onClick={onHandleRegister}>Register</Button>
            </div>
          </div>
        </form>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Incorrect username or password"
        />
      </div>
    </AppContext.Provider>
  );
};

export default Loginpage;
