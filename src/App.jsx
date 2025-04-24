import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  ProtectedRoute  from "./Routes/ProtectedRoute";

// Common Pages
import LandingPage from "./Pages/CommonPages/LandingPage";
import Getting from "./Pages/CommonPages/Getting";
import Login from "./Pages/CommonPages/Login";
import SignUp from "./Pages/CommonPages/SignUp";
import Chat from "./Pages/CommonPages/Chat";

// Client Pages
import ClientHome from "./Pages/CommonPages/ClientHome";
import ClientProfile from './Pages/Clientspages/ClientProfile';
import Freelancers from './Pages/Clientspages/Freelancers';
import FreelancersInfo from './Pages/Clientspages/FreelancersInfo';

// Freelancer Pages
const Works = lazy(() => import('./Pages/Freelancerpages.jsx/Works'));
import FreelancerHome from "./Pages/CommonPages/FreelancerHome";
import FreelancerProfile from './Pages/Freelancerpages.jsx/FreelancerProfile';
import ProgressionTracker from './Pages/Freelancerpages.jsx/ProgressionTracker';
import NotePad from './Pages/Freelancerpages.jsx/NotePad';
import Info from './Pages/Freelancerpages.jsx/Info';
import Unauthorized from "./Routes/Unauthorized";
import AddingPost from "./Pages/Clientspages/AddingPost";
import InfoAboutJobs from "./Pages/Clientspages/InfoAboutJobs";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="h-screen flex justify-center items-center text-3xl">Loading...</div>}>
        <Routes>

          {/* Common Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/getting" element={<Getting />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/unauthorized" element={<Unauthorized/>}/>


          {/* Client Routes */}
          <Route
            path="/clienthome"
            element={
              <ProtectedRoute allowedRoles={['client']}>
                <ClientHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/clientprofile"
            element={
              <ProtectedRoute allowedRoles={['client']}>
                <ClientProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/userinfo"
            element={
              <ProtectedRoute allowedRoles={['client']}>
                <Freelancers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/freelancersinfo"
            element={
              <ProtectedRoute allowedRoles={['client']}>
                <FreelancersInfo />
              </ProtectedRoute>
            }
          />
          <Route
          path="/addingpost"
          element={
            <ProtectedRoute allowedRoles={['client']}>
              <AddingPost />
            </ProtectedRoute>
          }
        />
         <Route
          path="/post-info/:id"
          element={
            <ProtectedRoute allowedRoles={['client']}>
              <InfoAboutJobs />
            </ProtectedRoute>
          }
        />

          {/* Freelancer Routes */}
          <Route
            path="/freelancehome"
            element={
              <ProtectedRoute allowedRoles={['freelancer']}>
                <FreelancerHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/freelanceworks"
            element={
              <ProtectedRoute allowedRoles={['freelancer']}>
                <Works />
              </ProtectedRoute>
            }
          />
          <Route
            path="/freelancerprofile"
            element={
              <ProtectedRoute allowedRoles={['freelancer']}>
                <FreelancerProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/progressiontracker"
            element={
              <ProtectedRoute allowedRoles={['freelancer']}>
                <ProgressionTracker />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notepad"
            element={
              <ProtectedRoute allowedRoles={['freelancer']}>
                <NotePad />
              </ProtectedRoute>
            }
          />
          <Route
            path="/info"
            element={
              <ProtectedRoute allowedRoles={['freelancer']}>
                <Info />
              </ProtectedRoute>
            }
          />
          

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
