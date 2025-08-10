'use client'
import React, { useState, useRef } from 'react';
// import { useIsVisible } from '../data';



function SkillItem({ title, imgUrl, description }) {
  

    return (
    <div className='m-10'>
        
      {/* Project Card */}
      <div className=" border-2 p-5 border-white/60 flex flex-col h-[250px] rounded-lg hover:scale-[105%] hover:border-white transition-all duration-200">
      
        <div className="bg-white/90 p-5 h-[70%] rounded-sm">
          <img src={imgUrl} alt={title} className="w-full h-full object-cover rounded-lg" />
        </div>
        
        <h3 className="text-white text-center tracking-wider font-norwester text-md py-4 pb-6 md:pb-3 mt-4 ">{title}</h3>
        
    </div>
    
    </div>
  )
}

export default SkillItem