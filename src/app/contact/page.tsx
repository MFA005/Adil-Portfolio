import React from 'react'
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
     <div className="flex justify-center mt-15 items-center px-4">
      <div className="rounded-lg gap-20 shadow-lg flex flex-col justify-center md:flex-row items-center p-12 max-w-5xl w-full scale-110">
        {/* Left: Image + Name */}
        <div className="flex flex-col items-center md:items-start text-white">
          <img
            src="/adil-main-pic.jpg"
            alt="AbdulRahman Adil"
            className="w-60 rounded-full shadow-lg mb-5"
          />
          <h2 className="text-3xl font-semibold text-center md:text-left">
            AbdulRahman Adil
            <br />
            <span className="text-white text-center text-xl font-light">Mechanical Engineer</span>
          </h2>
        </div>

        {/* Right: Contact info */}
        <div className="flex flex-col ml-20 text-white space-y-10 text-xl">
          <div className="flex items-center space-x-6">
            <FaLinkedin size={36} className="text-white" />
            <a
              href="https://www.linkedin.com/in/abdulrahman-adil-28264a221/"
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-wide hover:scale-[105%] transition"
            >
              LinkedIn | Profile
            </a>
          </div>
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
