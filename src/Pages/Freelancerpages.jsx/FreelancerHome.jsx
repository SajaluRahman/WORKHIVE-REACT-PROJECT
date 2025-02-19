import React, { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightToBracket, faStar } from "@fortawesome/free-solid-svg-icons";
import { Navbar3 } from "../../Components/Common/CommonComponents/Navbar";
import { Sidebar } from "../../Components/FreelancerComponents/Sidebar";
import "../../App.css";
import img from "../../images/Screenshot 2025-01-16 160134.png";
import img1 from "../../images/pexels-rfera-432059.jpg";
import img2 from "../../images/1c77f8e4-3fb3-4131-be95-424e2e3510db.jpg";
import imgs1 from "../../images/pexels-thisisengineering-3861967.jpg";
import img3 from "../../images/2feb1.jpg";
import img4 from "../../images/6db67416-39dc-4c96-a7f1-084656950e0f.jpg";
import img5 from "../../images/cfee8312-3139-4130-893e-e957dd53f329.jpg";
import img6 from "../../images/f121c9f9-a78c-4381-9989-a57dc2a666bf.jpg";
import img7 from "../../images/3200112e-7d7a-42b1-a1d9-3df876619eb1.jpg";
import img8 from "../../images/ee46bcc2-9d6f-4019-bd9d-a2fe8b302833.jpg";
import Footer from "../../Components/Common/CommonComponents/Footer";
import { useNavigate } from "react-router-dom";

// Job data with categories
const jobsData = [
  { 
    id: 1, 
    image: img, 
    userImage: img1, 
    user: "Anna Bell", 
    title: "AI Artist", 
    description: "We are hiring AI artists!", 
    description1: "We are seeking a creative and innovative AI Artist to join our team. The ideal candidate will have a strong understanding of artificial intelligence and machine learning techniques, specifically in the realm of generative art. You should be skilled at using AI tools, such as GANs or other neural network-based software, to create visually compelling and unique artworks. A passion for pushing the boundaries of art and technology is essential, as well as the ability to experiment and iterate on creative ideas. The role will involve working with AI to generate original pieces, exploring new styles, and producing high-quality digital art that engages and inspires viewers.",
    rating: 5, 
    price: 59.99, 
    category: "AI",
    pay: "$59.99", 
    hourlyRate: "$30/hr", 
    duration: "3 months",
    requirements: ["Proficient in AI tools", "Experience in generative art", "Creativity"],
    images: [img, imgs1],
    paymentStructure: "Hourly Pay",
    bonus: "Performance-based bonuses up to $500",
    paymentMethod: "Bank Transfer",
    paymentFrequency: "Bi-weekly",
  },
  
  { id: 2, image: img2, userImage: img1, user: "Lannie Coleman", title: "Graphic Designer", description: "We need creative graphic designers!", rating: 5, price: 79.99, category: "Design" },
  { id: 3, image: img3, userImage: img1, user: "Carol Steve", title: "MERN Stack Developer", description: "Hiring MERN developers!", rating: 5, price: 112.99, category: "Development" },
  { id: 4, image: img4, userImage: img1, user: "Don Weber", title: "UI/UX Designer", description: "Looking for UI/UX designers!", rating: 4, price: 99.99, category: "Design" },
  { id: 5, image: img5, userImage: img1, user: "Emma Rose", title: "Frontend Developer", description: "Join us as a frontend developer!", rating: 5, price: 89.99, category: "Development" },
  { id: 6, image: img6, userImage: img1, user: "Mike Johnson", title: "Backend Developer", description: "Backend developers wanted!", rating: 4, price: 69.99, category: "Development" },
  { id: 7, image: img7, userImage: img1, user: "Mike Johnson", title: "AI Engineer", description: "Hiring AI engineers!", rating: 4, price: 109.99, category: "AI" },
  { id: 8, image: img8, userImage: img1, user: "Mike Johnson", title: "Full-Stack Developer", description: "We need full-stack developers!", rating: 3, price: 45.99, category: "Development" },
  { id: 1, image: img, userImage: img1, user: "Anna Bell", title: "AI Artist", description: "We are hiring AI artists!", rating: 5, price: 59.99, category: "AI" },
  { id: 2, image: img2, userImage: img1, user: "Lannie Coleman", title: "Graphic Designer", description: "We need creative graphic designers!", rating: 5, price: 79.99, category: "Design" },
  { id: 3, image: img3, userImage: img1, user: "Carol Steve", title: "MERN Stack Developer", description: "Hiring MERN developers!", rating: 5, price: 112.99, category: "Development" },
];

const categories = ["All", "AI", "Development", "Design"];

function FreelancerHome() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Best Selling");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();


  // Inside FreelancerHome component
  
  const infoPage = (job) => navigate(`/info`, { state: { job } });

  // Filter jobs based on selected category
  const filteredJobs = useMemo(() => {
    return selectedCategory === "All"
      ? jobsData
      : jobsData.filter((job) => job.category === selectedCategory);
  }, [selectedCategory]);

  // Sort filtered jobs
  const sortedJobs = useMemo(() => {
    return [...filteredJobs].sort((a, b) => {
      if (sortBy === "Highest Rated") return b.rating - a.rating;
      if (sortBy === "Lowest Price") return a.price - b.price;
      if (sortBy === "Highest Price") return b.price - a.price;
      return 0;
    });
  }, [sortBy, filteredJobs]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar3 />

      {/* Sidebar Toggle Button */}
      <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-xl fixed top-12 left-0 z-50 text-white p-2 px-3 bg-[#141b36] rounded-r-lg shadow-md">
        {sidebarOpen ? <FontAwesomeIcon icon={faRightToBracket} /> : <FontAwesomeIcon icon={faBars} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out w-64 bg-blue-900 text-white`}>
        <Sidebar />
      </div>

      {/* Filters */}
      <div className="p-4 flex flex-col md:flex-row md:justify-between mt-16 md:mt-20 space-y-3 md:space-y-0">
        {/* Category Filter */}
        <div className="flex space-x-3">
          <label className="text-gray-600 font-medium text-base md:text-lg">Category:</label>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="text-gray-700 p-2 bg-transparent rounded-md border focus:ring-2 focus:ring-blue-500 transition-all hover:bg-white w-full md:w-auto">
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

       
        <div className="flex space-x-3">
          <label className="text-gray-600 font-medium text-base md:text-lg">Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="text-gray-700 p-2 bg-transparent rounded-md border focus:ring-2 focus:ring-blue-500 transition-all hover:bg-white w-full md:w-auto">
            <option value="Best Selling">Best Selling</option>
            <option value="Highest Rated">Highest Rated</option>
            <option value="Lowest Price">Lowest Price</option>
            <option value="Highest Price">Highest Price</option>
          </select>
        </div>
      </div>

      {/* Job Listings */}
      <div className="flex-1 p-4 md:px-52 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  max-h-[80vh] no-scrollbar overflow-scroll">
        {sortedJobs.map((job) => (
          <div onClick={() => infoPage(job)} key={job.id} className="bg-white cursor-pointer hover:scale-105 transition-all hover:shadow-xl ease-in-out shadow-md rounded-lg overflow-hidden p-3">
            <img src={job.image} alt={`Job: ${job.title}`} className="w-full h-40 sm:h-48 object-cover rounded-md" />
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
