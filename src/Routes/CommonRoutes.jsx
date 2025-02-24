import React from 'react'


import Getting from '../Pages/CommonPages/Getting';
import Login from '../Pages/CommonPages/Login';
import SignUp from '../Pages/CommonPages/SignUp';
import Chat from '../Pages/CommonPages/Chat';
import { Routes, Route } from 'react-router-dom';
import ClientHome from '../Pages/CommonPages/ClientHome';
import FreelancerHome from '../Pages/CommonPages/FreelancerHome';
import LandingPage from '../Pages/CommonPages/LandingPage';


function CommonRoutes() {
  return (
    <div> <>
     
      
    <Routes>
    <Route path="/" element={<LandingPage />} />

    <Route path="/freelancehome" element={<FreelancerHome />} />
    <Route path="/clienthome" element={<ClientHome />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/getting" element={<Getting />} />
    <Route path="/login" element={<Login />} />
    <Route path="/chat" element={<Chat />} />
  
     
    </Routes>
  
</></div>
  )
}

export default CommonRoutes