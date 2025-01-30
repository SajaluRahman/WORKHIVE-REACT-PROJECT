import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Pages/CommonPages/Home';
import SignUp from '../Pages/CommonPages/Signup';
import Getting from '../Pages/CommonPages/Getting';
import Login from '../Pages/CommonPages/Login';

function CommonRoutes() {
  return (
    <div> <Router>
     
      
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/SignUp" element={<SignUp />} />
    <Route path="/Getting" element={<Getting />} />
    <Route path="/Login" element={<Login />} />
  
     
    </Routes>
  
</Router></div>
  )
}

export default CommonRoutes