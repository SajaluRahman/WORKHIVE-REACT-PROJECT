import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ClientHome from '../../Pages/Clientspages/ClientHome';
import ClientProfile from '../../Pages/Clientspages/ClientProfile';
function ClientsRoutes() {
  return (
    <div> <Router>
         
          
        <Routes>
        <Route path="/clienthome" element={<ClientHome />} />
        <Route path="/clientprofile" element={<ClientProfile />} />
       
      
         
        </Routes>
      
    </Router>
    </div>
  )
}

export default ClientsRoutes