import React,{lazy, Suspense} from 'react'
import { Routes, Route } from "react-router-dom";

const UserHome = lazy(()=> import( '../../Pages/Freelancerpages.jsx/FreelancerHome'));
import FreelancerProfile from '../../Pages/Freelancerpages.jsx/FreelancerProfile';
import ProgressionTracker from '../../Pages/Freelancerpages.jsx/ProgressionTracker';
import NotePad from '../../Pages/Freelancerpages.jsx/NotePad';
import FreelancerHome from '../../Pages/Freelancerpages.jsx/FreelancerHome';


function FreelancerRoutes() {
  return (
    <div>
         
     
      
     <Routes>
     <Route path="/userhome" element={
      <Suspense fallback={<div className=' h-screen text-4xl flex justify-center items-center'>Loading...</div>}>
      <FreelancerHome /></Suspense>
      } />
     <Route path="/freelancerprofile" element={<FreelancerProfile />} />
     <Route path="/progressiontracker" element={<ProgressionTracker />} />
     <Route path="/notepad" element={<NotePad />} />
     
  
   
      
     </Routes>
   
 
    </div>
  )
}

export default FreelancerRoutes