import React, { useEffect, useState } from "react";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
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
              <button className="text-xl">
                <FontAwesomeIcon icon={faUser} />
              </button>
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

export default Navbar;
