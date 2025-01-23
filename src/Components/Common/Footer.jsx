import React from 'react'

function Footer() {
  return (
    <div><footer className="bg-[#213555] text-white py-8">
    <div className="max-w-6xl mx-auto px-4">
      {/* Footer Top */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Branding */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">WorkHive</h2>
          <p className="mt-2 text-gray-400">
            Bridging the gap between freelancers and clients with a reliable, centralized platform.
          </p>
        </div>
  
        {/* Links Section */}
        <div className="flex flex-col md:flex-row md:gap-12">
          {/* Quick Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="text-gray-400 space-y-2 cursor-pointer">
              <li><a className="hover:underline ">Home</a></li>
              <li><a   className="hover:underline">About</a></li>
              <li><a  className="hover:underline">Services</a></li>
            </ul>       </div>
  
          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-2">Resources</h3>
            <ul className="text-gray-400 space-y-2 cursor-pointer">
              <li><a className="hover:underline">FAQ</a></li>
              <li><a className="hover:underline">Terms & Conditions</a></li>
              <li><a    className="hover:underline">Privacy Policy</a></li>
            </ul>    
               </div>
        </div>
      </div>
  
      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-400">
        &copy; 2025 WorkHive. All Rights Reserved.
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer