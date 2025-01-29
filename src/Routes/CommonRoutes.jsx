import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Pages/CommonPages/Home';
import SignUp from '../Pages/CommonPages/Signup';

function CommonRoutes() {
  return (
    <div> <Router>
     
      
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/SignUp" element={<SignUp />} />
  
     
    </Routes>
  
</Router></div>
  )
}

export default CommonRoutes