// AuthContext.js
import React, { useState, createContext, useContext } from 'react';
import axios from 'axios';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    localStorage.setItem('loggedIn', 'true');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('loggedIn');
  };

  const authenticateUser = async (username, pass, navigate, setSnackbarOpen) => {
    try {
      const result = await axios.get("http://localhost:3001/users");
      const userFound = result.data.find(user => user.username === username && user.pass === pass);

      if (userFound) {
        handleLogin();
        navigate('/home');
        alert('Login successful');
      } else {
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const contextValue = {
    loggedIn,
    handleLogin,
    handleLogout,
    authenticateUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
