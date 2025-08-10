import React from 'react'
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
     <div className="flex justify-center mt-15 items-center px-4">
      <div className="rounded-lg shadow-[0_0_40px_10px_rgba(255,255,255,0.2)] border-1 border-white bg-white/10 gap-20  flex flex-col justify-center md:flex-row items-center p-12 max-w-5xl w-full scale-110">
        {/* Left: Image + Name */}
        <div className="flex flex-col items-center justify-center text-white">
          <img
            src="/adil-main-pic.jpg"
            alt="AbdulRahman Adil"
            className="w-60 rounded-full shadow-lg mb-5"
          />
          <h2 className="text-3xl font-semibold text-center">
            AbdulRahman Adil
            <br />
            <span className="text-white text-center text-xl font-light">Mechanical Engineer</span>
          </h2>
        </div>

        {/* Right: Contact info */}
        <div className="flex flex-col ml-20 text-white space-y-10 text-xl">
          <a href="https://www.linkedin.com/in/abdulrahman-adil-28264a221/"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center space-x-6 hover:scale-[105%] transition">
            <FaLinkedin size={36} className="text-white" />
            <div className="tracking-wide">
              LinkedIn | Profile
            </div>
          </a>
          <div className="flex items-center space-x-6">
            <FaEnvelope size={36} className="text-white" />
            <span className="tracking-wide">sabdulrahman.adil@gmail.com</span>
          </div>
          <div className="flex items-center space-x-6">
            <FaPhone size={36} className="text-white" />
            <span className="font-mono tracking-wide">+966 50 985 9544</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
