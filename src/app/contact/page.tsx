import React from 'react'
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
     <div className="flex justify-center m-10 md:mx-20 items-center px-4">
      <div className="rounded-lg px-5 shadow-[0_0_40px_10px_rgba(255,255,255,0.2)] border-1 border-white bg-white/10 gap-20  flex flex-col justify-center md:flex-row items-center p-12 max-w-5xl w-full scale-110">
        {/* Left: Image + Name */}
        <div className="flex flex-col m-5 items-center justify-center text-white">
          <img
            src="/adil-main-pic.jpg"
            alt="AbdulRahman Adil"
            className="w-30 lg:w-60 rounded-full shadow-lg mb-5"
          />
          <h2 className="text-xl lg:text-3xl font-semibold text-center">
            AbdulRahman Adil
            <br />
            <span className="text-white text-center text-lg lg:text-xl font-light">Mechatronics Engineer</span>
          </h2>
        </div>

        {/* Right: Contact info */}
        <div className="flex flex-col mr-20 pl-5 text-white space-y-10 text-xl">
          <a href="https://www.linkedin.com/in/abdulrahman-adil-28264a221/"
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center space-x-6 hover:scale-[105%] transition">
            <FaLinkedin className="text-white lg:text-4xl text-2xl" />
            <div className="text-lg lg:text-2xl tracking-wide">
              LinkedIn | Profile
            </div>
          </a>
          <div className="flex items-center space-x-6">
            <FaEnvelope className="text-white lg:text-4xl text-2xl" />
            <span className="tracking-wide text-lg lg:text-2xl">sabdulrahman.adil@gmail.com</span>
          </div>
          <div className="flex items-center lg:text-4xl text-2xl space-x-6">
            <FaPhone className="text-white" />
            <span className="font-mono text-lg lg:text-2xl tracking-wide">+966 50 985 9544</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
