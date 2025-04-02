import React, { useState } from "react";
import image1 from "../../images/pexels-ekaterina-bolovtsova-5393503.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Navbarscnd } from "../../Components/Common/CommonComponents/Navbar";
import { useForm } from "react-hook-form";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:4004/api/user/register", data, {
        headers: { "Content-Type": "application/json" },
      });
      alert(response.data.msg);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data); // Debugging: Log full backend response
  
        const message = error.response.data.msg || error.response.data.error || "Something went wrong";
  
        if (message.toLowerCase().includes("email")) {
          setErrorMessage("This email is already registered. Please use a different one.");
        } else if (message.toLowerCase().includes("username")) {
          setErrorMessage("This username is already taken. Please choose another.");
        } else {
          setErrorMessage(message);
        }
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };
  
  {Object.values(errors).map((error, index) => (
    <p key={index} className="text-red-500 text-xs text-center">
      {error.message}
    </p>
  ))}
  ;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Navbarscnd />
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        <div
          className="md:w-1/2 flex flex-col justify-between bg-cover bg-blue-600 text-white p-8"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <h2 className="text-2xl font-semibold mt-6">Signup</h2>
          <h2 className="text-xl font-semibold mb-6">Bridging the gap between freelancers and clients</h2>
        </div>

        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
          <div>
  {Object.values(errors).map((error, index) => (
    <p key={index} className="text-red-500 text-xs text-center">
      {error.message}
    </p>
  ))}
</div>

          {errorMessage && <p className="text-red-500 text-center mb-2">{errorMessage}</p>}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  id="Firstname"
                  placeholder="First Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  {...register("FirstName", { required: "First Name is required" })}
                />
                {errors.FirstName && <span className="text-red-500 text-xs">{errors.FirstName.message}</span>}
              </div>
              <div>
                <input
                  type="text"
                  id="Lastname"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  {...register("LastName", { required: "Last Name is required" })}
                />
                {errors.LastName && <span className="text-red-500 text-xs">{errors.LastName.message}</span>}
              </div>
            </div>

            <input
              type="text"
              placeholder="Username"
              id="UserName"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("UserName", {
                required: "Username is required",
                pattern: {
                  value: /^[A-Z][A-Za-z0-9]*$/,
                  message: "Username must start with an uppercase letter and contain only letters and numbers",
                },
              })}
            />
            {errors.UserName && <span className="text-red-500 text-xs">{errors.UserName.message}</span>}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="email"
                  id="email"
                  placeholder="E-mail"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  {...register("email", {
                    required: "E-mail is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
              </div>
              <div>
                <input
                  type="date"
                  id="date"
                  placeholder="Date of Birth"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  {...register("dob", { required: "Date of Birth is required" })}
                />
                {errors.dob && <span className="text-red-500 text-xs">{errors.dob.message}</span>}
              </div>
            </div>

            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Password must be at least 8 characters" },
                maxLength: { value: 12, message: "Password must not exceed 12 characters" },
              })}
            />
            {errors.password && <span className="text-red-500 text-xs">{errors.password.message}</span>}

            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) => value === watch("password") || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword.message}</span>}

            {/* <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Create Account</button> */}
            
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" {...register("checkbox", { required: "You must agree to continue" })} />
              <span className="text-sm">
                I agree to the <a href="#" className="text-blue-600">Terms and Privacy Policy</a>
              </span>
            </div>
            {errors.checkbox && <span className="text-red-500 text-xs block">{errors.checkbox.message}</span>}

            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Create Account</button>
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
            Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
