import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const body=document.body;
  let lastScroll=0;
  window.addEventListener('scroll',()=>{
    const currentScroll=window.pageYOffset;
    
    if(currentScroll<=0){
      body.classList.remove("scroll-up")
    }

    lastScroll=currentScroll
  })
  return (
    <div>
         <nav className="bg-[#213555] z-50 scroll-down transform:translate3d(0,-100%,0) fixed w-full text-white transition-all delay-300 ease-in-out py-6 px-8 md:flex justify-between items-center hidden">
      <div className="text-3xl font-bold">
        Work<span className="text-gray-400">Hive</span>
      </div>
      <ul className="flex space-x-6">
        <li>
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-400">
            About
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-gray-400">
            Services
          </a>
        </li>
        <li>
         
        </li> 
        <div>
        <button className="text-xl">
          <span className="material-icons"><FontAwesomeIcon icon={faUser} /></span>
        </button>
      </div>
      </ul>
     
    </nav>
    </div>
  )
}

export default Navbar