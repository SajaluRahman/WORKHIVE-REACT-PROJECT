import React from "react";
import image1 from "../../images/pexels-ekaterina-bolovtsova-5393503.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Navbarscnd } from "../../Components/Common/CommonComponents/Navbar";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <Navbarscnd/>
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Section (Image & Quote) */}
        <div className="md:w-1/2 flex flex-col justify-between bg-cover bg-blue-600 text-white p-8"
          style={{ backgroundImage: `url(${image1})` }}>
          
          <h2 className="text-2xl font-semibold text-left mt-6">
            Signup
          </h2>
          <h2 className="text-xl font-semibold text-left mb-6">
            Bridging the gap between freelancers and clients
          </h2>
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input type="text" placeholder="Last Name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="email" placeholder="E-mail" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
              <input type="date" placeholder="Date of Birth" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
            <input type="password" placeholder="Confirm Password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />

            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">I agree to the <a href="#" className="text-blue-600">Terms and Privacy Policy</a></span>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Create Account
            </button>
          </form>

          {/* Social Signup Options */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-4 space-y-2 md:space-y-0 md:space-x-2">
            <button className="w-full flex items-center justify-center border py-2 rounded-md text-gray-700 hover:bg-gray-100">
              <FontAwesomeIcon className="mr-2 text-2xl" icon={faGoogle} /> Sign up with Google
            </button>
            <button className="w-full flex items-center justify-center border py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700">
              <FontAwesomeIcon icon={faFacebook} className="mr-2 text-2xl" /> Sign up with Facebook
            </button>
          </div>

          <div className="text-sm text-center mt-4">
            Already have an account?  <Link to="/Login"  className="text-blue-600">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
