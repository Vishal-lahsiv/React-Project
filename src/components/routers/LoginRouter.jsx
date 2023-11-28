import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loginpage from '../ReactProjectCC2/Loginpage';
import Register from '../ReactProjectCC2/Register';
import Navbar from '../ReactProjectCC2/Navbar';
import Sidebarhome from '../ReactProjectCC2/Sidebarhome';
import Home from '../ReactProjectCC2/Home';
import Studentusername from '../ReactProjectCC2/Studentusername';
import Academics from '../ReactProjectCC2/Academics/Academics';
import Exams from '../ReactProjectCC2/Exams/Exams';
import Administrator from '../ReactProjectCC2/Administrator/Administrator';
import PlacementDetailsPage from '../ReactProjectCC2/Placements/placements';
import ChooseUs from '../ReactProjectCC2/Choose/Choose';
import About from '../ReactProjectCC2/About';

const LoginRouting = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const location = useLocation();
  const isHomePage = ['/home', '/gostudentinformation', '/academics', '/exams', '/admin', '/placements', '/choose', '/about','/go']
    .includes(location.pathname);

  return (
    <>
      {isHomePage && (
        <>
          <Navbar toggleSidebar={toggleSidebar} />
          <Sidebarhome isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </>
      )}

      <Routes>
        <Route path='/' element={<Loginpage/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/go' element={<Studentusername />} />
        <Route path='/academics' element={<Academics />} />
        <Route path='/exams' element={<Exams />} />
        <Route path='/admin' element={<Administrator />} />
        <Route path='/placements' element={<PlacementDetailsPage />} />
        <Route path='/choose' element={<ChooseUs/>} />
        <Route path='/about' element={<About/>} />  
      </Routes>
    </>
  );
};

export default LoginRouting;
