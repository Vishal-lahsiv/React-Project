import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';

const Navbar = ({ toggleSidebar }) => {

  const navigate=useNavigate();
  const onchange=()=>{
      navigate('/home');
  }
  const onchoose=()=>{
      navigate('/choose');
  }
  const signout=()=>{
      navigate('/');
  }

  return (
    <>
    <AppBar position="fixed" style={{backgroundColor:'darkgrey',borderRadius:'10px',color:'black'}}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          edge="start"
        >
          <MenuIcon />
        </IconButton>

        <Typography style={{marginLeft:'15px'}} variant="h6" noWrap>
            Student Information Management System
        </Typography>
          <SchoolIcon style={{marginLeft:'10px'}}/>
        <Button onClick={onchange} style={{color:'black',marginLeft:'700px'}}>Home</Button>
        <Button onClick={onchoose} style={{color:'black'}}>Contact US</Button>
        <Button onClick={signout} style={{color:'black'}}>Sign Out</Button>
      </Toolbar>
    </AppBar>
    </>

  );
};
export default Navbar;

