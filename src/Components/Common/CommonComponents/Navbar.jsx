import React, { useEffect, useState } from "react";
import { faComment,  faNoteSticky,  faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark,faSearch,   faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


export const Navbarone =() =>{
  const [scrollDirection, setScrollDirection] = useState("scroll-up");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        setScrollDirection("scroll-up");
        setIsScrolled(false);
        return;
      }

      setIsScrolled(true);

      if (currentScroll > lastScroll) {
        setScrollDirection("scroll-down");
      } else if (currentScroll < lastScroll) {
        setScrollDirection("scroll-up");
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`bg-[#213555] z-50 fixed w-full text-white transition-transform duration-300 ease-in-out py-6 px-8 ${
          scrollDirection === "scroll-down" ? "-translate-y-full" : "translate-y-0"
        } ${scrollDirection === "scroll-up" && isScrolled ? "shadow-2xl shadow-black" : ""}`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-bold">
            Work<span className="text-gray-400">Hive</span>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="text-2xl md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-icons">{isMenuOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}</span>
          </button>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex space-x-6 text-lg ${
              isMenuOpen ? "animate-open-menu" : ""
            }`}
          >
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
              <Link to="/SignUp" className="text-xl">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`absolute bg-[#213555] w-full left-0 top-20 transition-all duration-500 ease-in-out overflow-hidden md:hidden ${
            isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
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
              <button className="text-xl">
                <FontAwesomeIcon icon={faUser} />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}


export const Navbarscnd=()=>{
  const [scrollDirection, setScrollDirection] = useState("scroll-up");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        setScrollDirection("scroll-up");
        setIsScrolled(false);
        return;
      }

      setIsScrolled(true);

      if (currentScroll > lastScroll) {
        setScrollDirection("scroll-down");
      } else if (currentScroll < lastScroll) {
        setScrollDirection("scroll-up");
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return(
   <>
   <div className={`fixed top-0 w-full bg-[#213555] text-white py-4 px-8 text-lg font-semibold z-10 shadow-md transition-transform duration-300 ease-in-out ${
          scrollDirection === "scroll-down" ? "-translate-y-full" : "translate-y-0"
        } ${scrollDirection === "scroll-up" && isScrolled ? "shadow-2xl shadow-black" : ""}`}>
           <Link to="/">WORKHIVE</Link>
         </div>
   </>
  )
}




export const Navbar3 = () => {
  const [scrollDirection, setScrollDirection] = useState("scroll-up");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        setScrollDirection("scroll-up");
        setIsScrolled(false);
        return;
      }

      setIsScrolled(true);

      if (currentScroll > lastScroll) {
        setScrollDirection("scroll-down");
      } else if (currentScroll < lastScroll) {
        setScrollDirection("scroll-up");
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-[#1E3A5F] text-white px-6 py-3 flex items-center justify-between w-full shadow-md fixed top-0 z-50 transition-transform duration-300 ease-in-out 
        ${scrollDirection === "scroll-down" ? "-translate-y-full" : "translate-y-0"} 
        ${scrollDirection === "scroll-up" && isScrolled ? "shadow-2xl shadow-black" : ""}`}
    >
      {/* Logo */}
      <h1 className="text-2xl font-semibold tracking-wide">
        Work<span className="text-gray-300">Hive</span>
      </h1>

      {/* Search Bar (Hidden on Mobile) */}
      <div className="hidden md:flex relative w-full max-w-xs">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 pl-10 rounded-md text-gray-800 focus:outline-none bg-gray-200"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
      </div>

      {/* Desktop Icons with Hover Tooltips */}
      <div className="hidden md:flex space-x-6 text-xl">
        {/* Chat Icon */}
        <div className="relative group">
          <Link to='/chat'>
          <FontAwesomeIcon icon={faComment} className="cursor-pointer hover:text-gray-300" /></Link>
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#333333] text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chat
          </span>
        </div>

        {/* Notepad Icon */}
        <div className="relative group">
          <FontAwesomeIcon icon={faNoteSticky} className="cursor-pointer hover:text-gray-300" />
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#333] text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Notepad
          </span>
        </div>

        {/* Profile Icon */}
        <div className="relative group">
          <Link to="/freelancerprofile"><FontAwesomeIcon icon={faUser} className="cursor-pointer hover:text-gray-300" /></Link>
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#333] text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Profile
          </span>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[#1E3A5F] text-white flex flex-col items-center space-y-4 py-4 transition-all duration-300 ease-in-out md:hidden
          ${isMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible"}`}
      >
        {/* Mobile Search Bar */}
        <div className="relative pl-5 w-full max-w-xs">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 pl-6   rounded-md text-gray-800 focus:outline-none bg-gray-200"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </div>

        {/* Mobile Icons with Labels */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
           <Link to="/chat"> <FontAwesomeIcon icon={faComment} className="cursor-pointer hover:text-gray-300   text-2xl" /> 
            <span>Chat</span></Link>
          </div>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faNoteSticky} className="cursor-pointer hover:text-gray-300  text-2xl" />
            <span>Notepad</span>
          </div>
          <div className="flex items-center space-x-2">
           <Link to='/freelancerprofile' > <FontAwesomeIcon icon={faUser} className="cursor-pointer hover:text-gray-300  text-2xl" />
            <span>Profile</span></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};




export const Navbar4 = () => {
  const [scrollDirection, setScrollDirection] = useState("scroll-up");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        setScrollDirection("scroll-up");
        setIsScrolled(false);
        return;
      }

      setIsScrolled(true);

      if (currentScroll > lastScroll) {
        setScrollDirection("scroll-down");
      } else if (currentScroll < lastScroll) {
        setScrollDirection("scroll-up");
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-[#1E3A5F] text-white px-6 py-3 flex items-center justify-between w-full shadow-md fixed top-0 z-50 transition-transform duration-300 ease-in-out 
        ${scrollDirection === "scroll-down" ? "-translate-y-full" : "translate-y-0"} 
        ${scrollDirection === "scroll-up" && isScrolled ? "shadow-2xl shadow-black" : ""}`}
    >
      {/* Logo */}
      <h1 className="text-2xl font-semibold tracking-wide">
        Work<span className="text-gray-300">Hive</span>
      </h1>

      {/* Search Bar (Hidden on Mobile) */}
      <div className="hidden md:flex relative w-full max-w-xs">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 pl-10 rounded-md text-gray-800 focus:outline-none bg-gray-200"
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
      </div>

      {/* Desktop Icons with Hover Tooltips */}
      <div className="hidden md:flex space-x-6 text-xl">
        {/* Chat Icon */}
        <div className="relative group">
          <Link to='/chat'>
          <FontAwesomeIcon icon={faComment} className="cursor-pointer hover:text-gray-300" /></Link>
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#333333] text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chat
          </span>
        </div>

        {/* Notepad Icon */}
        

        {/* Profile Icon */}
        <div className="relative group">
          <Link to="/clientprofile"><FontAwesomeIcon icon={faUser} className="cursor-pointer hover:text-gray-300" /></Link>
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#333] text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Profile
          </span>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[#1E3A5F] text-white flex flex-col items-center space-y-4 py-4 transition-all duration-300 ease-in-out md:hidden
          ${isMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible"}`}
      >
        {/* Mobile Search Bar */}
        <div className="relative pl-5 w-full max-w-xs">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 pl-6   rounded-md text-gray-800 focus:outline-none bg-gray-200"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500"
          />
        </div>

        {/* Mobile Icons with Labels */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
           <Link to="/chat"> <FontAwesomeIcon icon={faComment} className="cursor-pointer hover:text-gray-300   text-2xl" /> 
            <span>Chat</span></Link>
          </div>
          
          <div className="flex items-center space-x-2">
          <Link to="/clientprofile"><FontAwesomeIcon icon={faUser} className="cursor-pointer hover:text-gray-300  text-2xl" />
            <span>Profile</span></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};