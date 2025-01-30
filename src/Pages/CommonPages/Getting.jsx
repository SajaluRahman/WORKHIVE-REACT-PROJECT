import React from "react";
import image2 from "../../images/pexels-sora-shimazaki-5673488.jpg";
import { Link } from "react-router-dom";

const Getting = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      
      <div className="bg-white w-full max-w-6xl shadow-lg rounded-lg overflow-hidden flex flex-wrap md:flex-nowrap">
        
        
        <img src={image2} alt="Workspace" className="w-full md:w-1/2 h-64 md:h-auto object-cover" />
        
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 p-6">
          
        <div className="bg-[#394867] text-xl text-white text-center py-12 px-6 w-full md:w-1/2 rounded-md shadow-md mx-auto md:ml-0">
            <p className="mb-6">Are You a Freelancer, looking for work</p>
            <Link to="/SignUp" className="bg-black text-white px-4 py-2 rounded">Click here</Link>
          </div>

          
          <div className="w-full">
            <div className="bg-[#394867] text-xl text-white text-center py-12 px-6 w-full md:w-1/2 rounded-md shadow-md mx-auto md:mr-0 md:float-right">
              <p className="mb-6">Are You a Client, hiring for a project</p>
              <Link to="/SignUp" className="bg-black text-white px-4 py-2 rounded">Click here</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Login Link */}
      <div className="text-center py-6 text-lg">
        Already have an account? <Link to="/Login" className="text-blue-600 hover:underline">login</Link>
      </div>
    </div>
  );
};

export default Getting;
