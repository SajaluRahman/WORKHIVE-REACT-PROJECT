import React from 'react'
import { Routes, Route } from "react-router-dom";

import ClientProfile from '../../Pages/Clientspages/ClientProfile';
import Freelancers from '../../Pages/Clientspages/Freelancers';
import FreelancersInfo from '../../Pages/Clientspages/FreelancersInfo';
function ClientsRoutes() {
  return (
    <div>
         
          
        <Routes>
        <Route path="/userinfo" element={<Freelancers />} />
        <Route path="/clientprofile" element={<ClientProfile />} />
        <Route path="/freelancersinfo" element={<FreelancersInfo />} />
       
      
         
        </Routes>
      
   
    </div>
  )
}

export default ClientsRoutes