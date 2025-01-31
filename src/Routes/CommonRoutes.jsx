import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/Getting" element={<Getting />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Chat" element={<Chat />} />
  
     
    </Routes>
  
</Router></div>
  )
}

export default CommonRoutes