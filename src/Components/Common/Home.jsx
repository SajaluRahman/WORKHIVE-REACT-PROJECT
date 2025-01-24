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
import Navbar  from './Navbar';
import Footer from './Footer';
import { useInView } from 'react-intersection-observer';

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

  
  const [ref, inView] = useInView({
    threshold: 0.40, 
    triggerOnce: true,
  });
  const [ref1, inView1] = useInView({
    threshold: 0.40, 
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
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <div  className="relative  text-white py-44"  >
        
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
            <button className="bg-[#213555] text-white font-semibold py-4 px-12 rounded-lg hover:text-[#213555] hover:bg-gray-100 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <section>
      <div >
      <div className=" flex flex-col md:flex-row w-screen">
        
        <div ref={ref} className={`flex py-20 md:w-1/2 lg:px-40 bg-[#D8C4B6] justify-center transform duration-1000 ease-out transition-all delay-300 overflow-hidden ${
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
            WorkHive connects clients and freelancers seamlessly. With
            admin-led operations, you get quality and reliability in every
            interaction.
          </p>
        </div>
      </div>
    </div>
      </section>
      <section>
        <div className="md:p-10 mt-20">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
            {grid.map((item, index) => {
              const [ref, inView] = useInView({
                threshold: 0.3, 
                triggerOnce: true,
              });

              return (
                <div
                  key={item.id}
                  ref={ref}
                  className={`py-8 shadow-xl w-[70%] mx-auto transition-all duration-700 delay-${index * 100} ease-in-out ${
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
         <div className='w-full flex justify-center mt-36 '><button className='rounded-xl px-20 py-5 font-semibold text-white text-2xl hover:bg-white hover:text-[#213555] delay-400 ease-in-out bg-[#213555]'>Join now</button></div></div> </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Home;
