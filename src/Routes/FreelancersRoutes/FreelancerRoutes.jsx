// import React, { lazy, Suspense } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import ProtectedRoute from './ProtectedRoute';

// const FreelancerHome = lazy(() => import('../../Pages/Freelancerpages.jsx/Works'));
// import FreelancerProfile from '../../Pages/Freelancerpages.jsx/FreelancerProfile';
// import ProgressionTracker from '../../Pages/Freelancerpages.jsx/ProgressionTracker';
// import NotePad from '../../Pages/Freelancerpages.jsx/NotePad';
// import Info from '../../Pages/Freelancerpages.jsx/Info';

// function FreelancerRoutes() {
//   return (
//     <Routes>
//       <Route
//         path="/freelanceworks"
//         element={
//           <ProtectedRoute allowedRoles={['freelancer']}>
//             <Suspense fallback={<div className="h-screen text-4xl flex justify-center items-center">Loading...</div>}>
//               <FreelancerHome />
//             </Suspense>
//           </ProtectedRoute>
//         }
//       />
//       <Route path="/freelancerprofile" element={<ProtectedRoute allowedRoles={['freelancer']}><FreelancerProfile /></ProtectedRoute>} />
//       <Route path="/progressiontracker" element={<ProtectedRoute allowedRoles={['freelancer']}><ProgressionTracker /></ProtectedRoute>} />
//       <Route path="/notepad" element={<ProtectedRoute allowedRoles={['freelancer']}><NotePad /></ProtectedRoute>} />
//       <Route path="/info" element={<ProtectedRoute allowedRoles={['freelancer']}><Info /></ProtectedRoute>} />
//     </Routes>
//   );
// }

// export default FreelancerRoutes;
