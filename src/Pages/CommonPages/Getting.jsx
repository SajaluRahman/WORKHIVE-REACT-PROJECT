import React, { useState } from "react";
import image2 from "../../images/pexels-sora-shimazaki-5673488.jpg";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Getting  ()  {

  const [role, setRole] = useState("");
  const navigate =useNavigate();

  const handleFreelancerClick =() => {
    setRole("freelancer");
    Cookies.set('role', 'freelancer');
    navigate('/signup')
  }
const handleClientClick =() => {
    setRole("client");
    Cookies.set('role', 'client');
    navigate('/signup')
  }
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      
      <div className="bg-white w-full max-w-6xl shadow-lg rounded-lg overflow-hidden flex flex-wrap md:flex-nowrap">
        
        
        <img src={image2} alt="Workspace" className="w-full md:w-1/2 h-64 md:h-auto object-cover" />
        
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 p-6">
          
        <div className="bg-[#394867] text-xl text-white text-center py-12 px-6 w-full md:w-1/2 rounded-md shadow-md mx-auto md:ml-0">
            <p className="mb-6">Are You a Freelancer, looking for work</p>
            <button
  onClick={handleFreelancerClick}
  className={`px-6 py-2 rounded-md font-medium transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2
    ${role === "freelancer"
      ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
      : "bg-black text-white hover:bg-green-700 focus:ring-green-500"
    }`}
>
  Click here
</button>

          </div>

          
          <div className="w-full">
            <div className="bg-[#394867] text-xl text-white text-center py-12 px-6 w-full md:w-1/2 rounded-md shadow-md mx-auto md:mr-0 md:float-right">
              <p className="mb-6">Are You a Client, hiring for a project</p>
              <button onClick={handleClientClick} className={`bg-black text-white px-4 py-2 rounded ${
                role === "client"
                ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
                : "bg-black text-white hover:bg-green-700 focus:ring-green-500"
              }`}>Click here</button>
            </div>
          </div>
        </div>
      </div>

      {/* Login Link */}
      <div className="text-center py-6 text-lg">
        Already have an account? <Link to="/login" className="text-blue-600 hover:underline">login</Link>
      </div>
    </div>
  );
};

export default Getting;
