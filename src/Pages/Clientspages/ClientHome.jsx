import React, { useState } from "react";
import {  Navbar4 } from "../../Components/Common/CommonComponents/Navbar";
import img1 from "../../images/pexels-rfera-432059.jpg";
import { Sidebar2 } from "../../Components/FreelancerComponents/Sidebar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightToBracket, faXmark } from "@fortawesome/free-solid-svg-icons";


function ClientHome() {
      const [sidebarOpen, setSidebarOpen] = useState(false);
    
  const profiles = [
    {
      id: 1,
      name: "Maymoodh",
      role: "MERN Stack Developer",
      description: "Experienced in building scalable web applications using MongoDB, Express.js, React, and Node.js.",
      linkedin: "http://lnk/sfns",
      github: "http://git/sfns",
      image: img1
    },
    {
      id: 2,
      name: "John Doe",
      role: "Full Stack Developer",
      description: "Passionate about building software that makes a difference, with expertise in front-end and back-end technologies.",
      linkedin: "http://lnk/sfns",
      github: "http://git/sfns",
      image: img1
    },
    {
      id: 3,
      name: "Sarah Smith",
      role: "UI/UX Designer",
      description: "Crafting stunning user experiences with a keen eye for design and usability.",
      linkedin: "http://lnk/sfns",
      github: "http://git/sfns",
      image: img1
    },
  ];

  return (
    <>
      <Navbar4 />
      <button
             onClick={() => setSidebarOpen(!sidebarOpen)}
             className="text-xl fixed top-12 left-0 z-50 text-white p-2 px-3 bg-[#141b36] rounded-r-lg shadow-md "
           >
             {sidebarOpen ? <FontAwesomeIcon icon={faRightToBracket } />: <FontAwesomeIcon icon={faBars} />}
           </button>
     
           {/* Sidebar */}
           <div className={`fixed inset-y-0 left-0 z-40 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out w-64 bg-blue-900 text-white  `}>
             <Sidebar2 />
           </div>
      <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen flex flex-col items-center py-16 px-6">
        <h1 className="text-4xl font-bold text-white mb-10 text-center">Meet Our Talented Freelancers</h1>

        <div className="w-full max-w-3xl flex flex-col space-y-6">
          {profiles.map((profile) => (
            <div key={profile.id} className="bg-gray-800 rounded-xl shadow-lg p-6 w-full transition transform hover:scale-105 hover:shadow-2xl">
              <div className="flex items-center space-x-4">
                <img src={profile.image} alt={profile.name} className="w-16 h-16 rounded-full border-4 border-blue-400" />
                <div>
                  <h3 className="text-2xl font-semibold text-white">{profile.name}</h3>
                  <p className="text-blue-400 text-sm">{profile.role}</p>
                </div>
              </div>

              <p className="text-gray-300 mt-4">{profile.description}</p>

              <div className="mt-4 text-sm">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition block">
                  🔗 LinkedIn
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition block">
                  🔗 GitHub
                </a>
              </div>

              <div className="flex justify-between mt-6">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition">
                  View Profile
                </button>
                <Link to='/chat' className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition">
                  Message
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default ClientHome;
