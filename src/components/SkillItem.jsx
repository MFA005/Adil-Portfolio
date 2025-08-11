'use client'
import React, { useState, useRef } from 'react';
// import { useIsVisible } from '../data';



function SkillItem({ title, imgUrl}) {
  

    return (
    <div className='m-10 flex justify-center items-start'>
        
      {/* Project Card */}
      <div className=" border-2 p-5 w-[70%] sm:w-max  border-white/60 flex flex-col rounded-lg hover:scale-[105%] hover:border-white transition-all duration-200">
      
        <div className="bg-white w-auto flex items-center justify-center rounded-sm">
          <img src={imgUrl} alt={title} className="max-w-40 p-5 object-cover rounded-lg" />
        </div>
        
        <h3 className="text-white text-center tracking-wider font-norwester text-md py-4 pb-6 md:pb-3 mt-4 ">{title}</h3>
        
    </div>
    
    </div>
  )
}

export default SkillItem