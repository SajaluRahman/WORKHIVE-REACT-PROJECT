import React from 'react'
import { Routes, Route } from "react-router-dom";
import ClientHome from '../../Pages/Clientspages/ClientHome';
import ClientProfile from '../../Pages/Clientspages/ClientProfile';
function ClientsRoutes() {
  return (
    <div>
         
          
        <Routes>
        <Route path="/clienthome" element={<ClientHome />} />
        <Route path="/clientprofile" element={<ClientProfile />} />
       
      
         
        </Routes>
      
   
    </div>
  )
}

export default ClientsRoutes