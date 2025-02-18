import React from "react";

function Footer() {
  return (
    <footer className="bg-[#213555] text-white py-10 relative overflow-hidden ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Branding Section */}
          <div>
            <h2 className="text-3xl font-bold">WorkHive</h2>
            <p className="mt-4 text-gray-400 max-w-md">
              Bridging the gap between freelancers and clients with a reliable, centralized platform.
            </p>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="hover:text-gray-300 transition duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-300 transition duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-gray-300 transition duration-300">
                    Services
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#faq" className="hover:text-gray-300 transition duration-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-gray-300 transition duration-300">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="hover:text-gray-300 transition duration-300">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 text-center text-gray-400">
          &copy; 2025 WorkHive. All Rights Reserved.
        </div>
      </div>

      {/* Bubbles Animation */}
      <div className="absolute inset-0 pointer-events-none ">
        {Array.from({ length: 40 }).map((_, index) => (
          <div
            key={index}
            className="absolute bg-blue-400 rounded-full opacity-70 animate-bubble"
            style={{
              width: `${2 + Math.random() * 4}rem`,
              height: `${2 + Math.random() * 4}rem`,
              bottom: `${-10 + Math.random() * 10}vh`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${4 + Math.random() * 4}s`,
              animationDelay: `${-Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
