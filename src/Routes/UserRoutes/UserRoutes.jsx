import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import JobList from '../../Pages/Userpages.jsx/UserHome';
import UserHome from '../../Pages/Userpages.jsx/UserHome';

function UserRoutes() {
  return (
    <div>
         <Router>
     
      
     <Routes>
     <Route path="/UserHome" element={<UserHome />} />
     
  
   
      
     </Routes>
   
 </Router>
    </div>
  )
}

export default UserRoutes