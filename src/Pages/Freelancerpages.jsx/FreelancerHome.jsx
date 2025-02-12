import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import img from "../../images/Screenshot 2025-01-16 160134.png";
import img1 from "../../images/pexels-rfera-432059.jpg";
import { Navbar3 } from "../../Components/Common/CommonComponents/Navbar";
import { Sidebar } from "../../Components/FreelancerComponents/Sidebar";
import "../../App.css";
import Footer from "../../Components/Common/CommonComponents/Footer";

function FreelancerHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Best Selling");

  const jobsData = [
    { id: 1, image: img, userImage: img1, user: "Anna Bell", title: "AI Art Character", description: "I will create AI art character from your images and prompts", rating: 5, price: 59.99 },
    { id: 2, image: img, userImage: img1, user: "Lannie Coleman", title: "High-Quality AI Character", description: "I will create ultra high-quality character art with AI", rating: 5, price: 79.99 },
    { id: 3, image: img, userImage: img1, user: "Carol Steve", title: "MidJourney AI Art", description: "I will create unique AI-generated artworks using MidJourney", rating: 5, price: 112.99 },
    { id: 4, image: img, userImage: img1, user: "Don Weber", title: "Custom AI Artwork", description: "I will create custom AI-generated artwork using your photos", rating: 4, price: 99.99 },
    { id: 5, image: img, userImage: img1, user: "Emma Rose", title: "Illustrated AI Portraits", description: "I will design beautiful AI-illustrated portraits", rating: 5, price: 89.99 },
    { id: 6, image: img, userImage: img1, user: "Mike Johnson", title: "AI Avatar Creation", description: "I will generate stunning AI avatars for you", rating: 4, price: 69.99 },
    { id: 7, image: img, userImage: img1, user: "Mike Johnson", title: "AI Avatar Creation", description: "I will generate stunning AI avatars for you", rating: 4, price: 109.99 },
    { id: 8, image: img, userImage: img1, user: "Mike Johnson", title: "AI Avatar Creation", description: "I will generate stunning AI avatars for you", rating: 4, price: 45.99 },
  ];

  const sortedJobs = [...jobsData].sort((a, b) => {
    if (sortBy === "Highest Rated") return b.rating - a.rating;
    if (sortBy === "Lowest Price") return a.price - b.price;
    if (sortBy === "Highest Price") return b.price - a.price;
    return 0; // Default (Best Selling) - No sorting applied
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar3 />

      {/* Sidebar Toggle Button (for mobile) */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="text-xl fixed top-8 left-0 z-50 text-white p-2 px-4 bg-blue-500 rounded-r-xl shadow-md "
      >
        {sidebarOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out w-64 bg-blue-900 text-white  `}>
        <Sidebar />
      </div>

      {/* Sort By Dropdown */}
      <div className="p-4 flex flex-col md:flex-row md:justify-end mt-16 md:mt-20 space-y-3 md:space-y-0 md:space-x-3">
        <label className="text-gray-600 font-medium text-base md:text-lg">Sort by:</label>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className=" text-gray-700 p-2 bg-transparent rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:bg-white w-full md:w-auto"
        >
          <option value="Best Selling">Best Selling</option>
          <option value="Highest Rated">Highest Rated</option>
          <option value="Lowest Price">Lowest Price</option>
          <option value="Highest Price">Highest Price</option>
        </select>
      </div>

      {/* Content Area with Responsive Grid */}
      <div className="flex-1 p-4  md:px-52 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedJobs.map((job) => (
          <div key={job.id} className="bg-white cursor-pointer shadow-md rounded-lg overflow-hidden p-3">
            <img src={job.image} alt={job.title} className="w-full h-40 sm:h-48 object-cover rounded-md" />
            <div className="p-3">
              <div className="flex items-center space-x-2">
                <img src={job.userImage} alt={job.user} className="w-8 h-8 rounded-full border border-gray-300" />
                <h3 className="text-sm font-semibold text-gray-900">{job.user}</h3>
              </div>
              <p className="text-gray-600 mt-1 text-xs sm:text-sm">{job.description}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center text-yellow-500">
                  {[...Array(job.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="text-xs" />
                  ))}
                </div>
                <span className="text-gray-800 font-semibold text-sm">${job.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default FreelancerHome;
