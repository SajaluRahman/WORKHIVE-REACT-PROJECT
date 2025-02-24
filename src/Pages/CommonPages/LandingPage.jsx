import { faArrowRight, faBriefcase, faCircle, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { Navbarone } from "../../Components/Common/CommonComponents/Navbar";
import image from '../../images/commonimages/pexels-olly-925786.jpg';
import image1 from '../../images/commonimages/pexels-mart-production-8121794.jpg';

export default function LandingPage() {
  const [isHover, setIsHover] = useState(false);
  const [isHover1, setIsHover1] = useState(false);

  const features = [
    {
      icon: faBriefcase,
      title: "For Clients",
      text: "Find highly skilled freelancers for your projects with ease and efficiency.",
      frontColor: "bg-white text-gray-900",
      backColor: "bg-blue-600 text-white",
    },
    {
      icon: faUsers,
      title: "For Freelancers",
      text: "Showcase your expertise and get hired by verified clients.",
      frontColor: "bg-white text-gray-900",
      backColor: "bg-green-600 text-white",
    },
    {
      icon: faCircle,
      title: "Secure Transactions",
      text: "WorkHive ensures a smooth and secure payment process for all users.",
      frontColor: "bg-white text-gray-900",
      backColor: "bg-purple-600 text-white",
    },
  ];

  const cardVariants = {
    initial: { rotateY: 0 },
    hover: { rotateY: 180 },
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      {/* Navbar */}
      <Navbarone />

      {/* Hero Section */}
      <header className="text-center py-32 px-6 text-white bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}>
        <h1 className="text-5xl font-extrabold">Empowering Freelancers & Clients</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Join WorkHive to bridge your needs with <br />tailored freelance services. 
        </p>
        <section className="w-full flex justify-center mt-10">
          <Link to="/getting" className="button relative cursor-pointer flex items-center justify-center bg-[#213555] w-fit rounded-xl py-[19px] px-16 overflow-clip"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            <motion.div className="circle absolute left-[22px] w-[6px] h-[6px] bg-[#ffff] rounded-3xl"
              animate={{ scale: isHover ? 65 : 1, backgroundColor: "#ffff" }}
              transition={{ ease: "easeIn", duration: 0.3 }}>
            </motion.div>
            <motion.div className="title font-medium tracking-tighter text-[19px] z-10"
              animate={{ x: isHover ? -8 : 8, color: isHover ? "#213555" : "#ffff" }}>
              <p>Get Started</p>
            </motion.div>
            <motion.div className="absolute flex items-center right-[22px]"
              animate={{ x: isHover ? 0 : 24 }}>
              <FontAwesomeIcon className="w-[26px] h-[26px] text-[#213555]" icon={faArrowRight} />
            </motion.div>
          </Link>
        </section>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 grid md:grid-cols-3 gap-12 text-center">
      {features.map((feature, index) => (
  <motion.div key={index} className="relative w-full h-64 cursor-pointer rounded-lg shadow-xl perspective-1000"
    variants={cardVariants}
    initial="initial"
    whileHover="hover"
    transition={{ duration: 0.6 }}>
    
    {/* Front Side */}
    <motion.div className={`absolute inset-0 flex flex-col items-center justify-center rounded-lg ${feature.frontColor}`}
      variants={{
        initial: { rotateY: 0, opacity: 1 },
        hover: { rotateY: 180, opacity: 0 },
      }}
      transition={{ duration: 0.6 }}>
      <FontAwesomeIcon icon={feature.icon} className="text-5xl mb-4 text-blue-600" />
      <h2 className="text-2xl font-semibold">{feature.title}</h2>
      <p className="mt-3 text-lg px-6">{feature.text}</p>
    </motion.div>

    {/* Back Side (Fixed) */}
    <motion.div className={`absolute inset-0 flex flex-col items-center justify-center rounded-lg ${feature.backColor} transform scale-x-[-1]`}
      variants={{
        initial: { rotateY: -180, opacity: 0 },
        hover: { rotateY: 0, opacity: 1 },
      }}
      transition={{ duration: 0.6 }}>
      <div className="transform scale-x-[-1]"> {/* Flip content back to normal */}
        <FontAwesomeIcon icon={feature.icon} className="text-5xl mb-4 text-white" />
        <h2 className="text-2xl font-semibold">{feature.title}</h2>
        <p className="mt-3 text-lg px-6">{feature.text}</p>
      </div>
    </motion.div>
  </motion.div>
))}

      </section>

      {/* Call to Action */}
      <section id="about" className="text-white text-center bg-no-repeat bg-center bg-cover py-32"
        style={{ backgroundImage: `url(${image1})` }}>
        <h2 className="text-3xl font-bold">Join WorkHive Today</h2>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Start collaborating with top freelancers and clients on a platform designed for success.
        </p>
        <section className="w-full flex justify-center mt-8">
          <Link to="/getting" className="button relative cursor-pointer flex items-center justify-center bg-[#213555] w-fit rounded-xl py-[16px] px-20 overflow-clip"
            onMouseEnter={() => setIsHover1(true)}
            onMouseLeave={() => setIsHover1(false)}>
            <motion.div className="circle absolute left-[22px] w-[6px] h-[6px] bg-[#ffff] rounded-3xl"
              animate={{ scale: isHover1 ? 82 : 1, backgroundColor: "#ffff" }}
              transition={{ ease: "easeIn", duration: 0.3 }}>
            </motion.div>
            <motion.div className="title tracking-tighter font-semibold text-[22px] z-10"
              animate={{ x: isHover1 ? -8 : 8, color: isHover1 ? "#213555" : "#ffff" }}>
              <p>Join Now</p>
            </motion.div>
            <motion.div className="absolute flex items-center right-[22px]"
              animate={{ x: isHover1 ? 0 : 24 }}>
              <FontAwesomeIcon className="w-[24px] h-[24px] text-[#213555]" icon={faArrowRight} />
            </motion.div>
          </Link>
        </section>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} WorkHive. All rights reserved.</p>
      </footer>
    </div>
  );
}
