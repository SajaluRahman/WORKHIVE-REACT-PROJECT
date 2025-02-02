import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBriefcase, faHome, faNoteSticky, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import img1 from "../../images/pexels-rfera-432059.jpg";
import { Link } from 'react-router-dom';


export const  Sidebar =() =>{
  return (
    <div> <div className="w-64 bg-[#12172d]   h-screen p-6 text-white fixed left-0 top-0 pt-16 flex flex-col space-y-6 shadow-lg">
          <div className="flex items-center space-x-3">
            <img src={img1} alt="User" className="w-12 h-12 rounded-full border border-[#00eaff]/50 shadow-md" />
            <span className="font-semibold text-lg">Freelancer</span>
          </div>
          <nav className="flex flex-col space-y-4">
            <a href="#" className="flex items-center space-x-3 hover:text-[#00eaff] transition">
              <FontAwesomeIcon icon={faHome} /> <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-[#00eaff] transition">
              <FontAwesomeIcon icon={faBriefcase} /> <span>Jobs</span>
            </a>
            <Link to='/notepad' className="flex items-center space-x-3 hover:text-[#00eaff] transition">
            <FontAwesomeIcon icon={faNoteSticky} className="cursor-pointer " />
            <span>NotePad</span>
            </Link>
            <a href="#" className="flex items-center space-x-3 hover:text-[#00eaff] transition">
              <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-red-500 hover:text-red-400 transition">
              <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
            </a>
            
          </nav>
        </div></div>
  )
}


export const  Sidebar2 =() =>{
  return (
    <div> <div className="w-64 bg-[#12172d]   h-screen p-6 text-white fixed left-0 top-0 pt-16 flex flex-col space-y-6 shadow-lg">
          <div className="flex items-center space-x-3">
            <img src={img1} alt="User" className="w-12 h-12 rounded-full border border-[#00eaff]/50 shadow-md" />
            <span className="font-semibold text-lg">Freelancer</span>
          </div>
          <nav className="flex flex-col space-y-4">
            <a href="#" className="flex items-center space-x-3 hover:text-[#00eaff] transition">
              <FontAwesomeIcon icon={faHome} /> <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-[#00eaff] transition">
              <FontAwesomeIcon icon={faBriefcase} /> <span>Jobs</span>
            </a>
            
            <a href="#" className="flex items-center space-x-3 hover:text-[#00eaff] transition">
              <FontAwesomeIcon icon={faUser} /> <span>Profile</span>
            </a>
            <a href="#" className="flex items-center space-x-3 text-red-500 hover:text-red-400 transition">
              <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
            </a>
            
          </nav>
        </div></div>
  )
}