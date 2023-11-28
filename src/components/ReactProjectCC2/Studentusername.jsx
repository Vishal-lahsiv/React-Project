import React, { useState } from 'react';
import {  Typography, Grid, Snackbar, Button } from '@mui/material';
import { Information } from '../SharedData';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const [studentData, setStudentData] = useState({
    Name: '',
    dob: '',
    email: '',
    address: '',
    gender: '',
    phone: '',
  });
  const [showSnackbar, setShowSnackbar] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const handleBackToLogin = () => {
    setIsLoggedIn(false);
    setStudentData({
      Name: '',
      dob: '',
      email: '',
      address: '',
      gender: '',
      phone: '',
    });
    setUsername('');
    setPassword('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isAuthenticated = true; 

    if (isAuthenticated) {
      const found = Information.find((item) => item.name === username && item.password === password);
      if (found) {
        setStudentData({
          NAME: found.name,
          DOB: found.dob,
          EMAIL: found.email,
          ADDRESS: found.address,
          GENDER: found.gender,
          PHONE: found.phone,
        });
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setShowSnackbar(true);
      }
    } else {
      setIsLoggedIn(false);
      setShowSnackbar(true);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', marginLeft: '100px', marginTop: '100px',marginRight: '150px',backgroundColor:'ghostwhite'}}>
          <Typography variant="h5" gutterBottom>
            Student Information
          </Typography>

          <Grid container spacing={2}>
            {Object.keys(studentData).map((key, index) => (
              <Grid item xs={4} key={index}>
                <Typography variant="subtitle1" gutterBottom>
                  {key.replace('_', '-')}
                </Typography>
                <Typography variant="body1">{studentData[key]}</Typography>
              </Grid>
            ))}
          </Grid>
          <Button variant="contained" onClick={handleBackToLogin} style={{ marginTop: '20px' }}>
            Back
          </Button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', width: '300px', margin: 'auto', marginTop: '200px', padding: '20px', border: '1.5px solid black', borderRadius: '10px' ,backgroundColor:'ghostwhite'}}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Student Login</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="username" style={{ marginBottom: '5px', display: 'block' }}>Username:</label>
              <input type="text" id="username" value={username} onChange={handleUsernameChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1.5px solid black' }} required />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="password" style={{ marginBottom: '5px', display: 'block' }}>Password:</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1.5px solid black' }} required />
            </div>
            <div style={{ textAlign: 'center' }}>
              <button type="submit" style={{ padding: '8px 20px', borderRadius: '3px', border: '1px solid #ccc', backgroundColor: '#f0f0f0', cursor: 'pointer' }}>Submit</button>
            </div>
          </form>
          <Snackbar
            open={showSnackbar}
            autoHideDuration={2000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            message="Invalid username/password Entered"
          />
        </div>

      )}
      <>
      <p style={{marginBottom:'100px',height:'50px', width:'100%',backgroundColor:'gray',marginTop:'330px'}}>Copyright © 2012 - 2023 TermsFeed®. All rights reserved.</p>

      </>
    </>
  );
};

export default LoginForm;


