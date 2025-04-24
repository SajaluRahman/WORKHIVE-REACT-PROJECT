import React, { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightToBracket, faStar } from "@fortawesome/free-solid-svg-icons";
import { Navbar3, Navbar4 } from "../../Components/Common/CommonComponents/Navbar";
import { Sidebar } from "../../Components/FreelancerComponents/Sidebar";
import "../../App.css";
import img from "../../images/ClientImages/pexels-moose-photos-170195-1036623.jpg";
import img1 from "../../images/pexels-rfera-432059.jpg";
import img2 from "../../images/ClientImages/pexels-creationhill-1681010.jpg";
import imgs1 from "../../images/pexels-thisisengineering-3861967.jpg";
import img3 from "../../images/ClientImages/pexels-olly-712513.jpg";
import img4 from "../../images/ClientImages/pexels-olly-832998.jpg";
import img5 from "../../images/ClientImages/pexels-olly-840916.jpg";
import img6 from "../../images/ClientImages/pexels-olly-840996.jpg";
import img7 from "../../images/ClientImages/pexels-stefanstefancik-91227.jpg";
import img8 from "../../images/ClientImages/pexels-moose-photos-170195-1036623.jpg";
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
      description: "I am an AI artist!", 
      description1: "I create innovative and visually compelling AI-generated art. With expertise in artificial intelligence and machine learning, I use advanced tools like GANs and neural networks to craft unique digital artworks. My passion lies in blending creativity with technology, exploring new artistic styles, and pushing the boundaries of generative art. I am dedicated to experimenting with AI tools to deliver high-quality, inspiring pieces that captivate audiences.",
      rating: 5, 
      price: "$59.99", 
      category: "AI Art",
      pay: "$59.99", 
      hourlyRate: "$30/hr", 
      duration: "3 months",
      services: [
        "Creating AI-generated artworks",
        "Enhancing designs with AI techniques",
        "Experimenting with generative art styles",
        "Delivering high-quality digital art"
      ],
      skills: [
        "Adobe Photoshop & Illustrator",
        "AI-generated artwork techniques",
        "Deep learning & Neural Networks",
        "Python (TensorFlow, PyTorch preferred)"
      ],
      qualification: "Bachelor’s or Master’s in Fine Arts, Computer Science, or AI-related fields",
      images: [img, imgs1],
      paymentStructure: "Hourly Pay",
      bonus: "Performance-based bonuses up to $500",
      paymentMethod: "Bank Transfer",
      paymentFrequency: "Bi-weekly"
    },
    { 
      id: 2, 
      image: img2, 
      userImage: img1, 
      user: "Lannie Coleman", 
      title: "Graphic Designer", 
      description: "I am a graphic designer!", 
      description1: "I create visually compelling and user-friendly designs for digital and print media. With expertise in Adobe Creative Suite and a keen eye for design aesthetics, I specialize in crafting designs that align with the latest trends in digital marketing. My passion lies in collaborating with marketing teams to deliver high-quality, innovative designs that captivate audiences and drive engagement.",
      rating: 5, 
      price: "$79.99", 
      category: "Design",
      pay: "$79.99", 
      hourlyRate: "$30/hr", 
      duration: "4 months",
      services: [
        "Creating visually compelling designs",
        "Designing for digital and print media",
        "Collaborating with marketing teams",
        "Staying updated with design trends"
      ],
      skills: [
        "Adobe Photoshop, Illustrator, and InDesign",
        "UI/UX Design",
        "Branding & Marketing Graphics",
        "Typography & Layout"
      ],
      qualification: "Bachelor’s in Graphic Design, Visual Arts, or a related field",
      images: [img2, imgs1],
      paymentStructure: "Hourly Pay",
      bonus: "Performance-based bonuses up to $500",
      paymentMethod: "Bank Transfer",
      paymentFrequency: "Bi-weekly"
    },
    { 
      id: 3, 
      image: img3, 
      userImage: img1, 
      user: "Carol Steve", 
      title: "MERN Stack Developer", 
      description: "I am a MERN stack developer!", 
      description1: "I develop, test, and deploy scalable web applications using React, Node.js, and MongoDB. With a deep understanding of RESTful APIs and database management, I specialize in building robust and efficient web solutions. My passion lies in solving complex problems and delivering high-quality, user-friendly applications that meet client needs.",
      rating: 5, 
      price: "$112.99", 
      category: "Development",
      pay: "$112.99", 
      hourlyRate: "$45/hr", 
      duration: "6 months",
      services: [
        "Developing scalable web applications",
        "Testing and deploying applications",
        "Managing RESTful APIs and databases",
        "Collaborating with cross-functional teams"
      ],
      skills: [
        "JavaScript (ES6+)",
        "React.js & Next.js",
        "Node.js & Express.js",
        "MongoDB & Mongoose",
        "RESTful API & GraphQL"
      ],
      qualification: "Bachelor’s in Computer Science or related field",
      images: [img3, imgs1],
      paymentStructure: "Fixed + Performance Bonus",
      bonus: "Additional $1000 for exceptional performance",
      paymentMethod: "PayPal",
      paymentFrequency: "Monthly"
    },
    { 
      id: 4, 
      image: img4, 
      userImage: img1, 
      user: "Don Weber", 
      title: "UI/UX Designer", 
      description: "I am a UI/UX designer!", 
      description1: "I create user-centered designs for web and mobile applications. With expertise in wireframing, prototyping, and UI development, I specialize in crafting intuitive and visually appealing interfaces. My passion lies in understanding user needs and delivering designs that enhance user experience and drive engagement.",
      rating: 4, 
      price: "$99.99", 
      category: "Design",
      pay: "$99.99", 
      hourlyRate: "$40/hr", 
      duration: "5 months",
      services: [
        "Creating user-centered designs",
        "Wireframing and prototyping",
        "Developing intuitive and responsive designs",
        "Collaborating with developers and product managers"
      ],
      skills: [
        "Figma & Adobe XD",
        "User Research & Wireframing",
        "HTML, CSS (Tailwind), JavaScript basics",
        "Design Thinking & Problem Solving"
      ],
      qualification: "Bachelor’s in Graphic Design, HCI, or a related field",
      images: [img4, imgs1],
      paymentStructure: "Project-Based Pay",
      bonus: "Quarterly performance bonuses",
      paymentMethod: "Direct Deposit",
      paymentFrequency: "Bi-weekly"
    },
    { 
      id: 5, 
      image: img5, 
      userImage: img1, 
      user: "Emma Rose", 
      title: "Frontend Developer", 
      description: "I am a frontend developer!", 
      description1: "I build dynamic, responsive, and visually appealing web applications using React.js and Tailwind CSS. With a strong focus on user experience, I specialize in creating seamless and interactive interfaces. My passion lies in collaborating with cross-functional teams to deliver high-quality, scalable solutions.",
      rating: 5, 
      price: "$89.99", 
      category: "Development",
      pay: "$89.99", 
      hourlyRate: "$35/hr", 
      duration: "4 months",
      services: [
        "Building dynamic web applications",
        "Developing responsive designs",
        "Integrating REST APIs",
        "Collaborating with backend teams"
      ],
      skills: [
        "React.js & Next.js",
        "JavaScript (ES6+)",
        "CSS Frameworks (Tailwind, Bootstrap)",
        "REST API Integration"
      ],
      qualification: "Bachelor’s in Computer Science or equivalent experience",
      images: [img5, imgs1],
      paymentStructure: "Hourly Pay",
      bonus: "Referral bonuses available",
      paymentMethod: "Crypto or Bank Transfer",
      paymentFrequency: "Weekly"
    },
    { 
      id: 6, 
      image: img6, 
      userImage: img1, 
      user: "Sophia Clarke", 
      title: "Content Writer", 
      description: "I am a content writer!", 
      description1: "I produce high-quality blog posts, articles, and web content that engage and inform readers. With a strong command of the English language and a knack for storytelling, I specialize in creating content that resonates with audiences. My passion lies in crafting compelling narratives and optimizing content for SEO to drive traffic and engagement.",
      rating: 5, 
      price: "$49.99", 
      category: "Writing",
      pay: "$49.99", 
      hourlyRate: "$25/hr", 
      duration: "2 months",
      services: [
        "Writing high-quality blog posts",
        "Creating engaging articles",
        "Optimizing content for SEO",
        "Editing and proofreading content"
      ],
      skills: [
        "SEO & Keyword Research",
        "Content Marketing",
        "Copywriting & Editing",
        "WordPress & Blogging Platforms"
      ],
      qualification: "Bachelor’s in English, Journalism, or a related field",
      images: [img6, imgs1],
      paymentStructure: "Per Article",
      bonus: "Performance-based bonuses up to $200",
      paymentMethod: "PayPal",
      paymentFrequency: "Weekly"
    },
    { 
      id: 7, 
      image: img7, 
      userImage: img1, 
      user: "James Allen", 
      title: "Video Editor", 
      description: "I am a video editor!", 
      description1: "I create and edit engaging videos for YouTube, social media, and commercial ads. With expertise in Adobe Premiere Pro and After Effects, I specialize in crafting visually stunning content that captivates audiences. My passion lies in storytelling through video, combining motion graphics, color grading, and special effects to deliver impactful results.",
      rating: 4, 
      price: "$109.99", 
      category: "Multimedia",
      pay: "$109.99", 
      hourlyRate: "$40/hr", 
      duration: "3 months",
      services: [
        "Editing engaging videos",
        "Creating motion graphics",
        "Color grading and special effects",
        "Collaborating with creative teams"
      ],
      skills: [
        "Adobe Premiere Pro & After Effects",
        "Color Grading & Visual Effects",
        "Motion Graphics",
        "Storytelling & Editing Techniques"
      ],
      qualification: "Degree in Film Production, Multimedia, or equivalent experience",
      images: [img7, imgs1],
      paymentStructure: "Project-Based Pay",
      bonus: "Incentives for viral content",
      paymentMethod: "Direct Deposit",
      paymentFrequency: "Bi-weekly"
    },
    { 
      id: 8, 
      image: img8, 
      userImage: img1, 
      user: "Oliver Green", 
      title: "SEO Specialist", 
      description: "I am an SEO specialist!", 
      description1: "I improve website rankings and optimize digital content for better visibility and engagement. With expertise in keyword research, backlink building, and technical SEO, I specialize in driving organic traffic and enhancing online presence. My passion lies in analyzing data and implementing strategies that deliver measurable results.",
      rating: 5, 
      price: "$129.99", 
      category: "Marketing",
      pay: "$129.99", 
      hourlyRate: "$50/hr", 
      duration: "5 months",
      services: [
        "Improving website rankings",
        "Optimizing digital content",
        "Conducting keyword research",
        "Building backlinks"
      ],
      skills: [
        "SEO Strategy & Implementation",
        "Google Analytics & Keyword Research",
        "Technical SEO & Performance Optimization",
        "Content Optimization & Link Building"
      ],
      qualification: "Bachelor’s in Marketing, Digital Media, or equivalent experience",
      images: [img8, imgs1],
      paymentStructure: "Performance-Based Pay",
      bonus: "Bonus for achieving ranking goals",
      paymentMethod: "Bank Transfer",
      paymentFrequency: "Monthly"
    },
    { 
      id: 9, 
      image: img5, 
      userImage: img1, 
      user: "Michael Brown", 
      title: "Cybersecurity Consultant", 
      description: "I am a cybersecurity consultant!", 
      description1: "I assess security risks and implement protective measures to safeguard systems and data. With expertise in penetration testing, vulnerability analysis, and network security, I specialize in identifying and mitigating threats. My passion lies in ensuring the safety and integrity of digital assets through proactive and innovative solutions.",
      rating: 5, 
      price: "$149.99", 
      category: "Security",
      pay: "$149.99", 
      hourlyRate: "$60/hr", 
      duration: "6 months",
      services: [
        "Assessing security risks",
        "Conducting penetration testing",
        "Enhancing network security",
        "Implementing protective measures"
      ],
      skills: [
        "Penetration Testing & Ethical Hacking",
        "Network Security & Firewalls",
        "Security Audits & Risk Management",
        "Incident Response & Threat Intelligence"
      ],
      qualification: "Certified Ethical Hacker (CEH) or equivalent certification",
      images: [img5, imgs1],
      paymentStructure: "Retainer + Hourly Rate",
      bonus: "Performance-based bonuses available",
      paymentMethod: "Crypto or Wire Transfer",
      paymentFrequency: "Monthly"
    },
    { 
      id: 10, 
      image: img2, 
      userImage: img1, 
      user: "Grace Mitchell", 
      title: "Data Analyst", 
      description: "I am a data analyst!", 
      description1: "I analyze business trends, generate reports, and provide actionable insights to drive decision-making. With expertise in data visualization tools and SQL, I specialize in transforming raw data into meaningful information. My passion lies in uncovering patterns and trends that help businesses grow and succeed.",
      rating: 5, 
      price: "$119.99", 
      category: "Analytics",
      pay: "$119.99", 
      hourlyRate: "$55/hr", 
      duration: "5 months",
      services: [
        "Analyzing business trends",
        "Generating reports",
        "Providing actionable insights",
        "Visualizing data"
      ],
      skills: [
        "SQL & Database Management",
        "Data Visualization & Reporting",
        "Python for Data Analysis",
        "Statistical Modeling & Forecasting"
      ],
      qualification: "Bachelor’s in Data Science, Statistics, or related field",
      images: [img2, imgs1],
      paymentStructure: "Hourly + Performance Bonus",
      bonus: "Incentives for accurate forecasting",
      paymentMethod: "PayPal",
      paymentFrequency: "Bi-weekly"
    },
    { 
      id: 11, 
      image: img3, 
      userImage: img1, 
      user: "Daniel Scott", 
      title: "Social Media Manager", 
      description: "I am a social media manager!", 
      description1: "I create and manage engaging content for various platforms, driving brand awareness and engagement. With expertise in content scheduling, analytics, and social media trends, I specialize in crafting strategies that resonate with audiences. My passion lies in building online communities and delivering impactful campaigns.",
      rating: 5, 
      price: "$89.99", 
      category: "Marketing",
      pay: "$89.99", 
      hourlyRate: "$40/hr", 
      duration: "4 months",
      services: [
        "Creating engaging content",
        "Managing social media accounts",
        "Analyzing social media performance",
        "Planning marketing campaigns"
      ],
      skills: [
        "Social Media Marketing",
        "Content Strategy & Creation",
        "Analytics & Performance Tracking",
        "Community Engagement"
      ],
      qualification: "Bachelor’s in Marketing, Communications, or equivalent experience",
      images: [img3, imgs1],
      paymentStructure: "Hourly Pay",
      bonus: "Performance-based growth incentives",
      paymentMethod: "Crypto or PayPal",
      paymentFrequency: "Weekly"
    }
  
  
];

const categories = ["All", "AI", "Development", "Design", "Marketing","Analytics", "Security", "Writing","Multimedia", ];

function Freelancers() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Best Selling");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const navigate = useNavigate();


  // Inside FreelancerHome component
  
  const infoPage = (job) => navigate(`/freelancersinfo`, { state: { job } });

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
      <Navbar4 />

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
            <img src={job.image} alt={`Job: ${job.title}`} className="w-full h-80 sm:h-48 object-cover  rounded-md" />
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
                <span className="text-gray-800 font-semibold text-sm">{job.pay}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Freelancers;
