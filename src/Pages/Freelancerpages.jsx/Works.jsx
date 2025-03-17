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
    requirements: [
      "Proficient in AI tools like GANs, DALL·E, or MidJourney",
      "Experience in generative art and deep learning",
      "Strong creativity and artistic vision",
      "Familiarity with neural network-based software",
      "Ability to iterate on designs and create unique art"
    ],
    skillsNeeded: [
      "Adobe Photoshop & Illustrator",
      "AI-generated artwork techniques",
      "Deep learning & Neural Networks",
      "Python (TensorFlow, PyTorch preferred)"
    ],
    qualifications: "Bachelor’s or Master’s in Fine Arts, Computer Science, or AI-related fields",
    images: [img, imgs1],
    paymentStructure: "Hourly Pay",
    bonus: "Performance-based bonuses up to $500",
    paymentMethod: "Bank Transfer",
    paymentFrequency: "Bi-weekly",
  },
  { 
    id: 2, 
    image: img2, 
    userImage: img1, 
    user: "Lannie Coleman", 
    title: "Graphic Designer", 
    description: "We need creative graphic designers!", 
    description1: "We are looking for an experienced graphic designer to create visually compelling and user-friendly designs for our digital and print media. The ideal candidate should be proficient in Adobe Creative Suite, have a keen eye for design aesthetics, and understand the latest trends in digital marketing.",
    rating: 5,
    price: 79.99,
    category: "Design",
    pay: "$79.99", 
    hourlyRate: "$30/hr", 
    duration: "4 months",
    requirements: [
      "Strong portfolio showcasing creative designs",
      "Proficiency in Adobe Photoshop, Illustrator, and InDesign",
      "Experience in branding, social media graphics, and UI/UX",
      "Understanding of typography, color theory, and layout principles",
      "Ability to collaborate with marketing and development teams"
    ],
    skillsNeeded: [
      "Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
      "UI/UX Design",
      "Branding & Marketing Graphics",
      "Typography & Layout"
    ],
    qualifications: "Bachelor’s in Graphic Design, Visual Arts, or a related field",
    images: [img2, imgs1],
    paymentStructure: "Hourly Pay",
    bonus: "Performance-based bonuses up to $500",
    paymentMethod: "Bank Transfer",
    paymentFrequency: "Bi-weekly",
  },
  { 
    id: 3, 
    image: img3, 
    userImage: img1, 
    user: "Carol Steve", 
    title: "MERN Stack Developer", 
    description: "Hiring MERN developers!", 
    description1: "We are looking for a highly skilled MERN Stack Developer who will be responsible for developing, testing, and deploying scalable web applications. The ideal candidate must have experience in React, Node.js, and MongoDB, with a deep understanding of RESTful APIs and database management.",
    rating: 5, 
    price: 112.99, 
    category: "Development",
    pay: "$112.99", 
    hourlyRate: "$45/hr", 
    duration: "6 months",
    requirements: [
      "Proficiency in MongoDB, Express.js, React.js, and Node.js",
      "Experience in REST APIs and GraphQL",
      "Understanding of state management (Redux, Context API)",
      "Familiarity with authentication methods (JWT, OAuth)",
      "Ability to write clean, maintainable, and scalable code"
    ],
    skillsNeeded: [
      "JavaScript (ES6+)",
      "React.js & Next.js",
      "Node.js & Express.js",
      "MongoDB & Mongoose",
      "RESTful API & GraphQL"
    ],
    qualifications: "Bachelor’s in Computer Science or related field",
    images: [img3, imgs1],
    paymentStructure: "Fixed + Performance Bonus",
    bonus: "Additional $1000 for exceptional performance",
    paymentMethod: "PayPal",
    paymentFrequency: "Monthly",
  },
  // Similar format for ID 4 - 11
  { 
    id: 4, 
    image: img4, 
    userImage: img1, 
    user: "Don Weber", 
    title: "UI/UX Designer", 
    description: "Looking for UI/UX designers!", 
    description1: "We are hiring an experienced UI/UX Designer to create user-centered designs for web and mobile applications. The ideal candidate will have strong knowledge of wireframing, prototyping, and UI development.",
    rating: 4, 
    price: 99.99, 
    category: "Design",
    pay: "$99.99", 
    hourlyRate: "$40/hr", 
    duration: "5 months",
    requirements: [
      "Expertise in Figma, Sketch, or Adobe XD",
      "Experience in wireframing and prototyping",
      "Understanding of user psychology and behavior",
      "Ability to create intuitive and responsive designs",
      "Collaboration with developers and product managers"
    ],
    skillsNeeded: [
      "Figma & Adobe XD",
      "User Research & Wireframing",
      "HTML, CSS (Tailwind), JavaScript basics",
      "Design Thinking & Problem Solving"
    ],
    qualifications: "Bachelor’s in Graphic Design, HCI, or a related field",
    images: [img4, imgs1],
    paymentStructure: "Project-Based Pay",
    bonus: "Quarterly performance bonuses",
    paymentMethod: "Direct Deposit",
    paymentFrequency: "Bi-weekly",
  },
  { 
    id: 5, 
    image: img5, 
    userImage: img1, 
    user: "Emma Rose", 
    title: "Frontend Developer", 
    description: "Join us as a frontend developer!", 
    description1: "We are hiring a frontend developer to build dynamic, responsive, and visually appealing web applications using React.js and Tailwind CSS.",
    rating: 5, 
    price: 89.99, 
    category: "Development",
    pay: "$89.99", 
    hourlyRate: "$35/hr", 
    duration: "4 months",
    requirements: [
      "Proficiency in React.js and Next.js",
      "Experience with Tailwind CSS, Material UI, or Bootstrap",
      "Familiarity with REST API integration",
      "Understanding of state management (Redux, Context API)",
      "Good problem-solving and debugging skills"
    ],
    skillsNeeded: [
      "React.js & Next.js",
      "JavaScript (ES6+)",
      "CSS Frameworks (Tailwind, Bootstrap)",
      "REST API Integration"
    ],
    qualifications: "Bachelor’s in Computer Science or equivalent experience",
    images: [img5, imgs1],
    paymentStructure: "Hourly Pay",
    bonus: "Referral bonuses available",
    paymentMethod: "Crypto or Bank Transfer",
    paymentFrequency: "Weekly",
  },
  { 
    id: 6, 
    image: img6, 
    userImage: img1, 
    user: "Sophia Clarke", 
    title: "Content Writer", 
    description: "We need experienced content writers!", 
    description1: "We are looking for a talented content writer to produce high-quality blog posts, articles, and web content. The ideal candidate should have a strong command of the English language and a knack for storytelling.",
    rating: 5, 
    price: 49.99, 
    category: "Writing",
    pay: "$49.99", 
    hourlyRate: "$25/hr", 
    duration: "2 months",
    requirements: [
      "Excellent writing and editing skills",
      "Experience with SEO optimization",
      "Ability to research and write on various topics",
      "Strong grammar and proofreading skills",
      "Knowledge of content management systems (WordPress preferred)"
    ],
    skillsNeeded: [
      "SEO & Keyword Research",
      "Content Marketing",
      "Copywriting & Editing",
      "WordPress & Blogging Platforms"
    ],
    qualifications: "Bachelor’s in English, Journalism, or a related field",
    images: [img6, imgs1],
    paymentStructure: "Per Article",
    bonus: "Performance-based bonuses up to $200",
    paymentMethod: "PayPal",
    paymentFrequency: "Weekly",
  },
  { 
    id: 7, 
    image: img7, 
    userImage: img1, 
    user: "James Allen", 
    title: "Video Editor", 
    description: "Hiring video editors for creative projects!", 
    description1: "We are searching for a skilled video editor to create and edit engaging videos for YouTube, social media, and commercial ads. The ideal candidate should have experience with Adobe Premiere Pro, After Effects, and other editing software.",
    rating: 4, 
    price: 109.99, 
    category: "Multimedia",
    pay: "$109.99", 
    hourlyRate: "$40/hr", 
    duration: "3 months",
    requirements: [
      "Proficiency in Adobe Premiere Pro & After Effects",
      "Experience in video editing and motion graphics",
      "Ability to color grade and add special effects",
      "Strong storytelling and pacing skills",
      "Knowledge of various video formats and resolutions"
    ],
    skillsNeeded: [
      "Adobe Premiere Pro & After Effects",
      "Color Grading & Visual Effects",
      "Motion Graphics",
      "Storytelling & Editing Techniques"
    ],
    qualifications: "Degree in Film Production, Multimedia, or equivalent experience",
    images: [img7, imgs1],
    paymentStructure: "Project-Based Pay",
    bonus: "Incentives for viral content",
    paymentMethod: "Direct Deposit",
    paymentFrequency: "Bi-weekly",
  },
  { 
    id: 8, 
    image: img8, 
    userImage: img1, 
    user: "Oliver Green", 
    title: "SEO Specialist", 
    description: "We need an expert in SEO optimization!", 
    description1: "We are hiring an SEO specialist to improve website rankings and optimize digital content. The ideal candidate must have experience in keyword research, backlink building, and technical SEO.",
    rating: 5, 
    price: 129.99, 
    category: "Marketing",
    pay: "$129.99", 
    hourlyRate: "$50/hr", 
    duration: "5 months",
    requirements: [
      "Expertise in on-page and off-page SEO",
      "Knowledge of keyword research tools (SEMrush, Ahrefs)",
      "Experience with Google Analytics & Search Console",
      "Ability to optimize website performance",
      "Understanding of link-building strategies"
    ],
    skillsNeeded: [
      "SEO Strategy & Implementation",
      "Google Analytics & Keyword Research",
      "Technical SEO & Performance Optimization",
      "Content Optimization & Link Building"
    ],
    qualifications: "Bachelor’s in Marketing, Digital Media, or equivalent experience",
    images: [img8, imgs1],
    paymentStructure: "Performance-Based Pay",
    bonus: "Bonus for achieving ranking goals",
    paymentMethod: "Bank Transfer",
    paymentFrequency: "Monthly",
  },
  { 
    id: 9, 
    image: img5, 
    userImage: img1, 
    user: "Michael Brown", 
    title: "Cybersecurity Consultant", 
    description: "Looking for cybersecurity professionals!", 
    description1: "We are seeking an experienced cybersecurity consultant to assess security risks and implement protective measures. The role involves penetration testing, vulnerability analysis, and network security enhancement.",
    rating: 5, 
    price: 149.99, 
    category: "Security",
    pay: "$149.99", 
    hourlyRate: "$60/hr", 
    duration: "6 months",
    requirements: [
      "Strong knowledge of cybersecurity principles",
      "Experience in penetration testing and threat analysis",
      "Familiarity with SIEM tools and firewalls",
      "Ability to conduct security audits",
      "Understanding of compliance standards (GDPR, ISO 27001)"
    ],
    skillsNeeded: [
      "Penetration Testing & Ethical Hacking",
      "Network Security & Firewalls",
      "Security Audits & Risk Management",
      "Incident Response & Threat Intelligence"
    ],
    qualifications: "Certified Ethical Hacker (CEH) or equivalent certification",
    images: [img5, imgs1],
    paymentStructure: "Retainer + Hourly Rate",
    bonus: "Performance-based bonuses available",
    paymentMethod: "Crypto or Wire Transfer",
    paymentFrequency: "Monthly",
  },
  { 
    id: 10, 
    image: img2, 
    userImage: img1, 
    user: "Grace Mitchell", 
    title: "Data Analyst", 
    description: "Hiring data analysts for business insights!", 
    description1: "We are looking for a data analyst to analyze business trends, generate reports, and provide actionable insights. The ideal candidate must be proficient in data visualization tools and SQL.",
    rating: 5, 
    price: 119.99, 
    category: "Analytics",
    pay: "$119.99", 
    hourlyRate: "$55/hr", 
    duration: "5 months",
    requirements: [
      "Proficiency in SQL and data querying",
      "Experience with data visualization tools (Tableau, Power BI)",
      "Strong analytical and problem-solving skills",
      "Ability to interpret business trends",
      "Knowledge of statistical analysis and machine learning"
    ],
    skillsNeeded: [
      "SQL & Database Management",
      "Data Visualization & Reporting",
      "Python for Data Analysis",
      "Statistical Modeling & Forecasting"
    ],
    qualifications: "Bachelor’s in Data Science, Statistics, or related field",
    images: [img2, imgs1],
    paymentStructure: "Hourly + Performance Bonus",
    bonus: "Incentives for accurate forecasting",
    paymentMethod: "PayPal",
    paymentFrequency: "Bi-weekly",
  },
  { 
    id: 11, 
    image: img3, 
    userImage: img1, 
    user: "Daniel Scott", 
    title: "Social Media Manager", 
    description: "Join us as a social media manager!", 
    description1: "We are hiring a social media manager to create and manage engaging content for various platforms. The role requires knowledge of content scheduling, analytics, and social media trends.",
    rating: 5, 
    price: 89.99, 
    category: "Marketing",
    pay: "$89.99", 
    hourlyRate: "$40/hr", 
    duration: "4 months",
    requirements: [
      "Experience managing social media accounts",
      "Strong copywriting and content creation skills",
      "Knowledge of social media analytics tools",
      "Ability to plan and execute marketing campaigns",
      "Understanding of audience engagement strategies"
    ],
    skillsNeeded: [
      "Social Media Marketing",
      "Content Strategy & Creation",
      "Analytics & Performance Tracking",
      "Community Engagement"
    ],
    qualifications: "Bachelor’s in Marketing, Communications, or equivalent experience",
    images: [img3, imgs1],
    paymentStructure: "Hourly Pay",
    bonus: "Performance-based growth incentives",
    paymentMethod: "Crypto or PayPal",
    paymentFrequency: "Weekly",
  }
];

const categories = ["All", "AI", "Development", "Design", "Marketing","Analytics", "Security", "Writing","Multimedia", ];

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
            <img src={job.image} alt={`Job: ${job.title}`} className="w-full h-80 sm:h-48 object-cover rounded-md" />
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
