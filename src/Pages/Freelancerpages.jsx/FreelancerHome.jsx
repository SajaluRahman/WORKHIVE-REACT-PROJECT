import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faStar, faPaperPlane, faBars } from "@fortawesome/free-solid-svg-icons";
import img from "../../images/Screenshot 2025-01-16 160134.png";
import img1 from "../../images/pexels-rfera-432059.jpg";
import { Navbar3 } from "../../Components/Common/CommonComponents/Navbar";
import { Sidebar } from "../../Components/FreelancerComponents/Sidebar";
import '../../App.css';
import { Link } from "react-router-dom";

function FreelancerHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [Click, setClick] = useState(false);
  const [isClick, setIsClick] = useState(null);

  const jobs = [
    { id: 1, image: img, userImage: img1, user: "Usman", title: "Graphic Designer", description: "Looking for a creative designer..." },
    { id: 2, image: img, userImage: img1, user: "Sarah", title: "UI/UX Designer", description: "We need a passionate UI/UX designer..." },
    { id: 3, image: img, userImage: img1, user: "Michael", title: "Frontend Developer", description: "Seeking an experienced frontend developer..." },
    { id: 4, image: img, userImage: img1, user: "Usman", title: "UI/UX Designer", description: "Seeking a UI/UX designer to improve..." },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Navbar3 />
      {/* Sidebar Toggle Button (for mobile) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-8 left-4 z-50 text-white p-2 rounded-full shadow-md"
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>
      {/* Sidebar (Hidden on small screens, toggled on click) */}
      <div className={`fixed inset-y-0 left-0 z-40 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-[#0a0f1f] md:block`}>
        <Sidebar />
      </div>
      {/* Content Area */}
      <div className="flex-1 flex bg-[#0a0f1f] flex-col items-center py-12 text-white w-full px-4 sm:px-6">
        <div className="space-y-6 w-full max-w-4xl mt-10">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-[#0a0f1f] shadow-2xl backdrop-blur-lg rounded-2xl p-6 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 w-full border border-[#00eaff]/30 hover:shadow-neon transition duration-300 transform hover:-translate-y-1"
            >
              <img
                src={job.image}
                alt={job.title}
                className="w-full sm:w-44 h-40 sm:h-56 object-cover rounded-lg border border-[#00eaff]/40 shadow-md"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3">
                    <img
                      src={job.userImage}
                      alt={job.user}
                      className="w-10 h-10 rounded-full border border-[#00eaff]/50 shadow-md"
                    />
                    <h3 className="font-semibold text-[#00eaff] text-lg">{job.user}</h3>
                  </div>
                  <p className="text-gray-300 mt-2 text-sm leading-relaxed">{job.description}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <Link
                    to="/chat"
                    className="px-5 py-2 bg-[#00eaff] text-black font-semibold text-sm rounded-lg flex items-center space-x-2 hover:bg-[#00aacc] transition"
                  >
                    <FontAwesomeIcon icon={faMessage} /> <span>Message</span>
                  </Link>
                  <button
                    onClick={() => {
                      setIsClick(job);
                      setClick(true);
                    }}
                    className="px-5 py-2 bg-blue-600 text-white font-semibold text-sm rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} /> <span>Apply</span>
                  </button>
                  <FontAwesomeIcon icon={faStar} className="text-gray-400 hover:text-[#ffd700] cursor-pointer ml-auto text-xl transition" />
                </div>
              </div>
            </div>
          ))}
          {Click && isClick && (
            <div className="h-screen w-screen fixed backdrop-blur-sm top-0 left-0 flex justify-center items-center">
              <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-lg">
                {/* Close Button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setClick(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                  >
                    Close
                  </button>
                </div>

                {/* Publisher/User Details */}
                <div className="flex flex-col sm:flex-row items-center mt-4">
                  <img
                    src={isClick.userImage} // Use isClick.userImage instead of a hardcoded image
                    alt="User Photo"
                    className="w-24 h-24 rounded-full mr-0 sm:mr-4 mb-4 sm:mb-0"
                  />
                  <div className="text-center sm:text-left">
                    <h2 className="text-xl text-blue-600 font-bold">{isClick.user}</h2>
                    <p className="text-gray-600">{isClick.description}</p>
                  </div>
                </div>

                {/* Job and Payment Details */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">Job Details</h3>
                  <p className="text-black" >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula,
                    sapien in placerat sollicitudin, erat libero tristique lorem, non pretium
                    purus sapien a metus.
                  </p>
                  <p className="mt-2 text-green-600 font-bold">$100 p/hr</p>
                </div>

                {/* Message Button */}
                <div className="mt-4 flex justify-end">
                  <Link to='/chat' className="bg-blue-600 text-center text-white px-4 py-2 rounded-lg">
                    Message
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FreelancerHome;
  