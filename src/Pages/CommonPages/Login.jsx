import React from "react";
import image from "../../images/pexels-cottonbro-4065876.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Navbarscnd } from "../../Components/Common/CommonComponents/Navbar";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Add your authentication logic here
 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Header - Fixed at Top */}
      <Navbarscnd />

      {/* Login Box - Responsive & Adjusted for Mobile Order */}
      <div className="rounded-lg shadow-lg flex flex-col-reverse md:flex-row w-full max-w-5xl p-4 sm:p-8 mt-24">
        
        {/* Left Side: Login Form */}
        <div className="md:w-1/2 p-4 sm:p-8 flex flex-col justify-center">
          <h2 className="text-[#213555] text-3xl font-semibold mb-6 text-center md:text-left">
            Log in
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <input
              type="text"
              placeholder="UserName"
              {...register("username", { required: "Username is required" })}
              className="w-full px-4 py-3 mb-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            {errors.username && (
              <span className="text-red-500 mb-2">{errors.username.message}</span>
            )}

            <input
              type="email"
              placeholder="E-mail"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format"
                }
              })}
              className="w-full px-4 py-3 mb-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            {errors.email && (
              <span className="text-red-500 mb-2">{errors.email.message}</span>
            )}

            <input
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-4 py-3 mb-2 border border-gray-300 rounded-lg focus:outline-none"
            />
            {errors.password && (
              <span className="text-red-500 mb-2">{errors.password.message}</span>
            )}

            <p className="text-[#213555] text-lg text-center md:text-left mt-2">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-400 font-semibold">
                Signup
              </Link>
            </p>
            
            {/* Social Login Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-4 space-y-2 md:space-y-0 md:space-x-2">
              <button
                type="button"
                className="w-full flex items-center justify-center border py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
              >
                <FontAwesomeIcon className="mr-2 text-2xl" icon={faGoogle} /> Sign up with Google
              </button>
              <Link to='/clienthome'
                type="Link"
                className="w-full flex items-center justify-center border py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
              >
                <FontAwesomeIcon className="mr-2 text-2xl" icon={faFacebook} /> Sign up with Facebook
              </Link>
            </div>

            <Link
            to='/freelancehome'
              type="submit"
              className="bg-[#0A2647] text-white text-center px-6 py-3 mt-6 rounded-lg w-full text-lg font-semibold hover:bg-[#081b31] transition"
            >
              Submit
            </Link>
          </form>
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
