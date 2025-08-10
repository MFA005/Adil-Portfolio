'use client'
import React, { useState, useRef } from 'react';
// import { useIsVisible } from '../data';
import { GithubLogoYellow } from '../data/image';
import DetailsOverlay from "./DetailsOverlay";


function PortfolioItem({ title, imgUrl, stack, description, githubLink }) {
  
    // const refProject = useRef(null);
    //   const isVisibleProject = useIsVisible(refProject);

    const [isOpen, setIsOpen] = useState(false); 

  const handleProjectClick = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; 
  };

  const handleCloseFullscreen = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; 
  };

    return (
    <div  className={`mt-20 flex flex-col m-10 items-center md:border-hidden border-2 border-white/20 shadow-md shadow-black/50 md:shadow-none bg-black/40 md:bg-transparent rounded-lg gap-10 transition-opacity duration-1500 
         
      `}>
        
      {/* Project Card */}
      <div onClick={handleProjectClick} className="relative w-full p-8 pb-2 md:mb-14 md:pb-8 md:border-2 shadow-black/50 md:shadow-md border-white/10 md:bg-black/40  hover:border-white/70 transition-all duration-160 md:hover:scale-[102%] rounded-lg bg-transparent  ">
      
       {/* make details overlay for each project */}

        <div className="w-full h-52 flex items-center justify-center bg-white/50 rounded-lg cursor-pointer">
          <img src={imgUrl} alt={title} className="w-full h-full object-cover rounded-lg" />
        </div>
        
        <h3 className="text-white  tracking-wider font-norwester text-lg py-4 pb-6 md:pb-3 mt-4 ">{title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {stack.map((item, index) => (
            <span key={index} className="bg-white/60 hover:bg-white hover:scale-[110%] transition-all duration-160  text-black px-3 py-1 font-norwester rounded-md text-sm">
              {item}
            </span>
          ))}
        </div>
    </div>
      {/* <div className="w-[60%] border-t border-1 md:hidden rounded-2xl border-white/20"></div> */}
      
      

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/70 z-50 cursor-pointer"
        onClick={handleCloseFullscreen} // Close when clicked on the GIF
        >
          <div
            className="relative"   
          >
            <DetailsOverlay className='max-w-[90vw] max-h-[90vh] object-contain rounded-lg' title={title} description={description} videos={[]} techStack={[]} githubLink={"asd"}/>
            
          </div>
        </div>
      )}
    </div>
  )
}

export default PortfolioItem