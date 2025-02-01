import React from "react";
import image from "../../images/pexels-cottonbro-4065876.jpg";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Navbarscnd } from "../../Components/Common/CommonComponents/Navbar";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Header - Fixed at Top */}
      <Navbarscnd/>

      {/* Login Box - Responsive & Adjusted for Mobile Order */}
      <div className="rounded-lg shadow-lg flex flex-col-reverse md:flex-row w-full max-w-5xl p-4 sm:p-8 mt-24">
        
        {/* Left Side: Login Form */}
        <div className="md:w-1/2 p-4 sm:p-8 flex flex-col justify-center">
          <h2 className="text-[#213555] text-3xl font-semibold mb-6 text-center md:text-left">
            Log in
          </h2>
          <input
            type="text"
            placeholder="UserName"
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none"
          />
          <p className="text-[#213555] text-lg text-center md:text-left">
            Don’t have an account?{" "}
            <Link to="/signUp" className="text-blue-400 font-semibold">Signup</Link>
          </p>
          
          {/* Social Login Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-4 space-y-2 md:space-y-0 md:space-x-2">
            <button className="w-full flex items-center justify-center border py-2 rounded-md text-gray-700 hover:bg-gray-100 transition">
              <FontAwesomeIcon className="mr-2 text-2xl" icon={faGoogle} /> Sign up with Google
            </button>
            <button className="w-full flex items-center justify-center border py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition">
              <FontAwesomeIcon icon={faFacebook} className="mr-2 text-2xl" /> Sign up with Facebook
            </button>
          </div>

          <NavLink to="/userHome" className="bg-[#0A2647] text-white text-center px-6 py-3 mt-6 rounded-lg w-full text-lg font-semibold hover:bg-[#081b31] transition">
            Submit
          </NavLink>
        </div>

        {/* Right Side: Image and Text (Appears First on Mobile) */}
        <div className="md:w-1/2 relative flex items-center justify-center mt-6 md:mt-0">
          <img
            src={image}
            alt="Workspace"
            className="w-full h-64 sm:h-full object-cover rounded-lg md:rounded-l-lg"
          />
          <div className="absolute top-8 left-8 text-white bg-black bg-opacity-50 p-4 rounded-lg">
            <h2 className="text-2xl sm:text-3xl font-semibold">WorkHive</h2>
            <p className="text-sm sm:text-lg mt-2">
              Where clients meet freelance services for efficient collaboration.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
