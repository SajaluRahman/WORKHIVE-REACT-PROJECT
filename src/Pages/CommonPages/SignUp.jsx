import React, { useEffect, useState } from "react";
import image1 from "../../images/pexels-ekaterina-bolovtsova-5393503.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Navbarscnd } from "../../Components/Common/CommonComponents/Navbar";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [storedUsers, setStoredUsers] = useState([]);
  const password = watch("password");

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    setStoredUsers(Array.isArray(users) ? users : []);
  }, []);

  const onSubmit = (data) => {
    let existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (!Array.isArray(existingUsers)) {
      existingUsers = [];
    }

    if (existingUsers.some((user) => user.email === data.email)) {
      alert("Email already exists. Please choose another email.");
      return;
    }
    if (existingUsers.some((user) => user.UserName === data.UserName)) {
      alert("Username already exists. Please choose another username.");
      return;
    }

    existingUsers.push(data);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    setStoredUsers([...existingUsers]);

    alert("Signup successful!");
    reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Navbarscnd />
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Section (Image & Quote) */}
        <div
          className="md:w-1/2 flex flex-col justify-between bg-cover bg-blue-600 text-white p-8"
          style={{ backgroundImage: `url(${image1})` }}
        >
          <h2 className="text-2xl font-semibold mt-6">Signup</h2>
          <h2 className="text-xl font-semibold mb-6">
            Bridging the gap between freelancers and clients
          </h2>
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("FirstName", { required: "First Name is required" })}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("LastName", { required: "Last Name is required" })}
              />
            </div>
            {errors.FirstName && <span className="text-red-500 text-xs">{errors.FirstName.message}</span>}
            {errors.LastName && <span className="text-red-500 text-xs">{errors.LastName.message}</span>}

            <input
              type="text"
              placeholder="Username"
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
              <input
                type="email"
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
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                {...register("dob", { required: "Date of Birth is required" })}
              />
            </div>
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
            {errors.dob && <span className="text-red-500 text-xs">{errors.dob.message}</span>}

            <input
              type="password"
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
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) => value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && <span className="text-red-500 text-xs">{errors.confirmPassword.message}</span>}

            <div className="flex items-center">
              <input type="checkbox" className="mr-2" {...register("checkbox", { required: "You must agree to continue" })} />
              <span className="text-sm">
                I agree to the <a href="#" className="text-blue-600">Terms and Privacy Policy</a>
              </span>
            </div>
            {errors.checkbox && <span className="text-red-500 text-xs">{errors.checkbox.message}</span>}

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
            Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
