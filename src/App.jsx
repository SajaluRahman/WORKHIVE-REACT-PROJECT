import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Register from "./Pages/Register";

import SignUp from "./Pages/SignUp";
import Home from "./Components/Common/Home";



function App() {
  return (
    <div>
      <Router>
     
      
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp/>} />
        
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      
    </Router>
    </div>
  )
}

export default App