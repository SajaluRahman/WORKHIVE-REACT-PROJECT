import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
function Button(Props) {
  const [isHover,setIsHover]=useState(false);

  return (
    <section> 
    <div className='button relative cursor-pointer flex items-center justify-center bg-[#213555] w-fit rounded-xl py-[15px] px-24 overflow-clip'
     onMouseEnter={(e)=>setIsHover(true)}
     onMouseLeave={(e)=>setIsHover(false)}>
        <motion.div className='circle absolute left-[22px] w-[6px] h-[6px] bg-[#ffff] rounded-3xl ' 
        animate ={{
          scale:isHover ? 55: 1,
          backgroundColor:isHover?"#ffff":"#ffff",
          
        }}
        transition={{ease:"easeIn",
          duration:0.2,
        }}> </motion.div>
        <motion.div className='title font-medium tracking-tighter text-[16px] z-10 ' 
        animate={{x:isHover?-8:8,
          color:isHover?"#00000":"#ffff",
        }}> <p>{Props.name}</p>
        
        </motion.div>
        <motion.div className='absolute  flex items-center  right-[22px]'
        animate={{x:isHover?0 :24,}}>
       <FontAwesomeIcon className='w-[16px] h-[16px] text-[#213555] stroke-<2> ' icon={faArrowRight} />
        </motion.div>
    </div>
  </section>
  )
}

export default Button