// import React from 'react';
// import { Routes, Route } from 'react-router-dom';

// import LandingPage from '../Pages/CommonPages/LandingPage';
// import Getting from '../Pages/CommonPages/Getting';
// import Login from '../Pages/CommonPages/Login';
// import SignUp from '../Pages/CommonPages/SignUp';
// import Chat from '../Pages/CommonPages/Chat';
// import ClientHome from '../Pages/CommonPages/ClientHome';
// import FreelancerHome from '../Pages/CommonPages/FreelancerHome';
// import ProtectedRoute from './ProtectedRoute'; // Import here

// function CommonRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<LandingPage />} />
//       <Route path="/getting" element={<Getting />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/signup" element={<SignUp />} />
//       <Route path="/chat" element={<Chat />} />

//       {/* Role-based protected routes */}
//       <Route
//         path="/freelancehome"
//         element={
//           <ProtectedRoute allowedRoles={['freelancer']}>
//             <FreelancerHome />
//           </ProtectedRoute>
//         }
//       />
//       <Route
//         path="/clienthome"
//         element={
//           <ProtectedRoute allowedRoles={['client']}>
//             <ClientHome />
//           </ProtectedRoute>
//         }
//       />
//     </Routes>
//   );
// }

// export default CommonRoutes;
