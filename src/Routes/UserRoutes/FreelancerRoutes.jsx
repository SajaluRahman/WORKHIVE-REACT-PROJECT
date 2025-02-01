import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserHome from '../../Pages/Freelancerpages.jsx/FreelancerHome';
import FreelancerProfile from '../../Pages/Freelancerpages.jsx/FreelancerProfile';
import ProgressionTracker from '../../Pages/Freelancerpages.jsx/ProgressionTracker';

function UserRoutes() {
  return (
    <div>
         <Router>
     
      
     <Routes>
     <Route path="/userHome" element={<UserHome />} />
     <Route path="/freelancerProfile" element={<FreelancerProfile />} />
     <Route path="/progressionTracker" element={<ProgressionTracker />} />
     
  
   
      
     </Routes>
   
 </Router>
    </div>
  )
}

export default UserRoutes