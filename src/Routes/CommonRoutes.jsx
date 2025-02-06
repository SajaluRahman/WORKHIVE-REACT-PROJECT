import React from 'react'

import Home from '../Pages/CommonPages/Home';

import Getting from '../Pages/CommonPages/Getting';
import Login from '../Pages/CommonPages/Login';
import SignUp from '../Pages/CommonPages/SignUp';
import Chat from '../Pages/CommonPages/Chat';
import { Routes, Route } from 'react-router-dom';

function CommonRoutes() {
  return (
    <div> <>
     
      
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/getting" element={<Getting />} />
    <Route path="/login" element={<Login />} />
    <Route path="/chat" element={<Chat />} />
  
     
    </Routes>
  
</></div>
  )
}

export default CommonRoutes