import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Pages/CommonPages/Home';

import Getting from '../Pages/CommonPages/Getting';
import Login from '../Pages/CommonPages/Login';
import SignUp from '../Pages/CommonPages/SignUp';
import Chat from '../Pages/CommonPages/Chat';

function CommonRoutes() {
  return (
    <div> <Router>
     
      
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/getting" element={<Getting />} />
    <Route path="/login" element={<Login />} />
    <Route path="/chat" element={<Chat />} />
  
     
    </Routes>
  
</Router></div>
  )
}

export default CommonRoutes