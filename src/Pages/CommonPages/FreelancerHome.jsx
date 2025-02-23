import React, { useEffect, useState } from 'react';
import img from '../../images/woman-sitting-chair-desk.jpg';
import img2 from '../../images/portrait-young-blond-woman-modern-female-model-sitting-outdoor-cafe-drinking-coffee-connects.jpg';
import img3 from '../../images/pexels-mart-production-7252283.jpg';
import grid1  from '../../images/still-life-red-thread-connection.jpg';
import grid2 from '../../images/pexels-olly-3823488.jpg';
import grid3 from '../../images/top-view-game-domino.jpg';
import grid4 from '../../images/credit-card-security-concept.jpg';
import grid5 from '../../images/top-view-women-working-together-office.jpg';
import grid6 from '../../images/pexels-picjumbo-com-55570-210644.jpg';

import image from '../../images/pexels-fauxels-3183131.jpg';
import image2 from '../../images/pexels-monoar-rahman-22660-114907.jpg';
import image3 from '../../images/pexels-divinetechygirl-1181244.jpg';
import image4 from '../../images/pexels-shkrabaanthony-4348401.jpg';
import image5 from '../../images/pexels-mareklevak-2265482.jpg';
import image6 from '../../images/pexels-asphotograpy-887751.jpg';
import image7 from '../../images/pexels-tima-miroshnichenko-5380670.jpg';
import image8 from '../../images/pexels-thisisengineering-3861967.jpg';

import Footer from '../../Components/Common/CommonComponents/Footer';
import { useInView } from 'react-intersection-observer';

import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Navbarone } from '../../Components/Common/CommonComponents/Navbar';

function Home() {
  const [show, setShow] = useState(false);
    useEffect(() => {
      // Trigger the animation after the component mounts
      const timer = setTimeout(() => setShow(true), 100); // Add slight delay for smoother effect
      return () => clearTimeout(timer); // Cleanup if component unmounts
    }, []);
  useEffect(() => {
    // Trigger the animation after the component mounts
    const timer = setTimeout(() => setShow(true), 100); // Add slight delay for smoother effect
    return () => clearTimeout(timer); // Cleanup if component unmounts
  }, []);

    const [isHover,setIsHover]=useState(false);
    const [isHover1,setIsHover1]=useState(false);
  
  const [ref, inView] = useInView({
    threshold: 0.20, 
    triggerOnce: true,
  });
  const [ref1, inView1] = useInView({
    threshold: 0.20, 
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.20, 
    triggerOnce: true,
  });
 
  const grid=[
    {id:1,
      image:grid1,
      heading:"Centralized Management",
      bg:'bg-[#F5EFE7]',
      hover:" hover:bg-[#3E5879]",
      texhover:"group-hover:text-[#D6D3D3]",
      textclr:"text-[#6A6A6A]",
      note:"Streamlined operations handled by a dedicated admin for seamless collaboration.",
    },
    {id:2,
      image:grid2,
     heading:"Client Support",
      bg:'bg-[#3E5879]',
      textclr:"text-[#D6D3D3]",
      hover:" hover:bg-[#F5EFE7]",
      texhover:"group-hover:text-[#6A6A6A]",
      note:"Easily connect with the right service for your needs, backed by 24/7 support.",},
    {id:3,
      image:grid3,
     heading:"Simplified Process",
      hover:" hover:bg-[#3E5879]",
      texhover:"group-hover:text-[#D6D3D3]",
      bg:'bg-[#F5EFE7]',
      textclr:"text-[#6A6A6A]",
      note:"A user-friendly interface for hassle-free and intuitive interactions.",},
    {id:4,
      image:grid4,
     heading:"Secure Transactions",
      hover:" hover:bg-[#F5EFE7]",
      texhover:"group-hover:text-[#6A6A6A]",
      bg:'bg-[#3E5879]',
      textclr:"text-[#D6D3D3]",
      note:"Safe and reliable payment options for both clients and freelancers.",},
    {id:5,
      image:grid5,
     heading:"Custom Project Matching",
      hover:"] hover:bg-[#3E5879]",
      texhover:"group-hover:text-[#D6D3D3]",
      bg:'bg-[#F5EFE7]',
      textclr:"text-[#6A6A6A]",
      note:"Automatically match clients with the right freelancer based on project needs.",},
    {id:6,
      image:grid6,
     heading:"Real-Time Communication",
      hover:" hover:bg-[#F5EFE7]",
      texhover:"group-hover:text-[#6A6A6A]",
      bg:'bg-[#3E5879]',
      textclr:"text-[#D6D3D3]",
      note:"Enhances collaboration and builds trust by ensuring prompt responses and updates",},
  ];

  const carouselItems = [
   
    {
      title: "Data Analyst Looking for Freelance Projects",
      subtitle: "Expert in data analysis and insights",
      image: image,
    },
    {
      title: "Web Developer Available for Freelance Work",
      subtitle: "Building modern and responsive websites",
      image: image2,
    },
    {
      title: "MERN Stack Developer Seeking Freelance Opportunities",
      subtitle: "Full-stack web development specialist",
      image: image3,
    },
    {
      title: "Graphic Designer Open for Freelance Projects",
      subtitle: "Creating visually appealing designs",
      image: image4,
    },
    {
      title: "UI/UX Designer Looking for Freelance Work",
      subtitle: "Enhancing user experience with great design",
      image: image5,
    },
    {
      title: "Mobile App Developer Available for Freelance Jobs",
      subtitle: "Developing high-quality mobile applications",
      image: image6,
    },
    {
      title: "Cybersecurity Specialist Seeking Freelance Projects",
      subtitle: "Protecting digital assets with security expertise",
      image: image7,
    },
    {
      title: "Software Engineer Open for Freelance Work",
      subtitle: "Innovating with technology and software solutions",
      image: image8,
    }
    


  ];
  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollLeft = () => {
    setScrollIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRight = () => {
    setScrollIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
  };
  const navigate=useNavigate();
  const goto=()=>{navigate('/userhome')}
  return (
    <div className='overflow-x-hidden no-scrollbar '>
      <Navbarone />
      <div id='home'  className="relative  text-white py-44"  >
        
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className={`absolute md:w-1/2 inset-0 bg-[#213555] bg-opacity-50 transform duration-700 ease-out transition-all ${
            show
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-44"
          } `}></div>
        </div>

        
        <div className="relative flex items-center h-full px-8 lg:px-24">
          <div className={`max-w-1/2 transform duration-[1.5s] ease-out transition-all ${
            show
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-44"
          }`}>
            <h1 className="text-3xl xl:text-[58px] font-bold mb-2 leading-tight">
              Empowering Freelancers,
              <br />
              Connecting Clients
            </h1>
            <p className="text-md xl:text-2xl mb-4 xl:ml-52">
              Join WorkHive to bridge your needs with <br />tailored freelance services.
            </p>
           
             <section> 
               <Link to="/getting" className='button relative cursor-pointer flex items-center justify-center bg-[#213555] w-fit rounded-xl py-[19px] px-16 overflow-clip'
                onMouseEnter={(e)=>setIsHover(true)}
                onMouseLeave={(e)=>setIsHover(false)}>
                   <motion.div className='circle absolute left-[22px] w-[6px] h-[6px] bg-[#ffff] rounded-3xl ' 
                   animate ={{
                     scale:isHover ? 65: 1,
                     backgroundColor:isHover?"#ffff":"#ffff",
                     
                   }}
                   transition={{ease:"easeIn",
                     duration:0.3,
                   }}> </motion.div>
                   <motion.div className='title font-medium tracking-tighter text-[19px] z-10 ' 
                   animate={{x:isHover?-8:8,
                     color:isHover?"#213555":"#ffff",
                   }}> <p>Get Started</p>
                   
                   </motion.div>
                   <motion.div className='absolute  flex items-center  right-[22px]'
                   animate={{x:isHover?0 :24,}}>
                  <FontAwesomeIcon className='w-[26px] h-[26px] text-[#213555] stroke-<2> ' icon={faArrowRight} />
                   </motion.div>
               </Link>
             </section>
          </div>
        </div>
      </div>
      <section id='about'>
      <div >
      <div className=" flex flex-col md:flex-row w-screen">
        
        <div ref={ref} className={`flex py-20 md:w-1/2 lg:px-40 bg-[#D8C4B6] justify-center transform duration-1000 ease-out transition-all delay-200 overflow-hidden ${
        inView
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-44"
      } `}>
          <img
            src={img2}
            className=" shadow-md object-cover max-w-xs xl:max-w-2xl "
          />
        </div>

        
        <div ref={ref1} className={` lg:text-left ml-8 md:w-1/2  flex flex-col justify-center transform duration-1000 ease-out transition-all delay-300 overflow-hidden ${
        inView
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-44"
      }`}>
          <h2 className="text-2xl lg:text-3xl ml-6 font-bold mb-4">
            Why Choose WorkHive?
          </h2>
          <p className="text-gray-800 text-lg ml-12 md:w-1/2 font-bold leading-relaxed">
  WorkHive connects clients and freelancers seamlessly. With admin-led operations, you get quality and reliability in every interaction. Our platform ensures that projects are managed efficiently and securely. Whether you're a freelancer looking for opportunities or a client searching for the right talent, WorkHive provides the perfect solution to meet your needs.
</p>

        </div>
      </div>
    </div>
      </section>

      <section>
  <div  className="relative w-[98%] overflow-auto no-scrollbar p-10">
    {/* Carousel Wrapper */}
    <motion.div
      className="flex  active:cursor-grabbing"
      drag="x"
      dragConstraints={{ left: -((carouselItems.length - 1) * 300), right: 0 }}
      
      style={{ gap: "20px" }}
    >
      {carouselItems.map((item, index) => (
        <motion.div
        onClick={goto}
          key={index}
          className="w-[300px] cursor-pointer flex-shrink-0 relative"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-5 text-white">
            <p className="text-sm">{item.subtitle}</p>
            <h2 className="text-lg font-semibold">{item.title}</h2>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      <section id='services'>
        <div className="md:p-10 mt-20">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {grid.map((item, index) => {
              const [ref, inView] = useInView({
                 threshold: 0.2, 
                triggerOnce: true,
              });

              return (
                <div
                  key={item.id}
                  ref={ref}
                  className={`py-8 shadow-xl w-[70%] mx-auto transition-all rounded duration-700 delay-${index * 100} ease-in-out ${
                    inView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  } ${item.hover} group hover:scale-105 hover:shadow-2xl hover:bg-opacity-90 ${item.bg}`}
                >
                  <img src={item.image} className="max-w-44 mx-auto" alt="" />
                  <h2 className="text-center font-bold text-xl">{item.heading}</h2>
                  <p
                    className={`text-center text-lg mx-auto ${item.texhover} ${item.textclr}`}
                  >
                    {item.note}
                  </p>
                </div>
              );
            })}
          </div>
            
        </div>

      </section>

      

      <section>
        <div ref={ref2} className={`mt-10 transform duration-1000 ease-out transition-all delay-300 overflow-hidden ${
        inView2
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-y-44"
      }`} style={{backgroundImage:`url(${img3})`,
         backgroundSize: 'cover',
            backgroundPosition: 'center',}}>
         <div className=' bg-[#213555] bg-opacity-50 h-full py-20 w-full'>
         <h1 className='text-6xl text-white font-semibold text-center'>READY TO GET STARTED?</h1> 
         <div className='w-full flex justify-center mt-36 '>
         <section> 
    <Link to="/getting" className='button relative cursor-pointer flex items-center justify-center bg-[#213555] w-fit rounded-xl py-[16px] px-20 overflow-clip'
     onMouseEnter={(e)=>setIsHover1(true)}
     onMouseLeave={(e)=>setIsHover1(false)}>
        <motion.div className='circle absolute left-[22px] w-[6px] h-[6px] bg-[#ffff] rounded-3xl ' 
        animate ={{
          scale:isHover1 ? 82: 1,
          backgroundColor:isHover?"#ffff":"#ffff",
          
        }}
        transition={{ease:"easeIn",
          duration:0.3,
        }}> </motion.div>
        <motion.div className='title  tracking-tighter font-semibold text-[22px] z-10 ' 
        animate={{x:isHover1?-8:8,
          color:isHover1?"#213555":"#ffff",
        }}> <p>Join Now</p>
        
        </motion.div>
        <motion.div className='absolute  flex items-center  right-[22px]'
        animate={{x:isHover1?0 :24,}}>
       <FontAwesomeIcon className='w-[24px] h-[24px] text-[#213555]  stroke-<2> ' icon={faArrowRight} />
        </motion.div>
    </Link>
  </section>
  </div></div> </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Home;