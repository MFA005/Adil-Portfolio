
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


export default function Home() {
  return (
  
      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-50 pl-10 items-center">
        
        {/* Left Content */}
        <div className="ml-20 mt-20">
          <span className="inline-block bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
            Hi everyone 👋, I’m Abdulrahman Adil
          </span>

          <h1 className="text-4xl mb-10 md:text-5xl font-bold text-white mt-4">
            Mechanical Engineer <br />Based in Malaysia
          </h1>

          <p className="text-white/60 mt-4 max-w-md">
            I’m a mechanical engineer passionate about designing, analyzing, 
            and optimizing mechanical systems that deliver efficiency, 
            durability, and innovation.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href="contact"
              className="bg-white text-black px-5 py-3 rounded-lg shadow hover:scale-[105%] transition"
            >
              Get In Touch →
            </a>
            <a
              href="/adil-cv.pdf"
              className="border border-white text-white px-5 py-3 rounded-lg hover:bg-white/30 transition"
              download
            >
              Download CV ⬇
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex ml-3 items-center gap-6 mt-12">
            <a href="mailto:sabdulrahman.adil@gmail.com" className="text-white hover:scale-[110%] text-xl">
              <FaEnvelope />
            </a>
            <a href="https://github.com/Orbweaver15" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-[110%] text-xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/abdulrahman-adil-28264a221/" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-[110%] text-xl">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="relative mt-10">
          {/* Decorative background shape */}
          <div className="absolute -z-10 top-6 left-6 w-72 h-90 bg-white rounded-lg transform rotate-12"></div>

          {/* Profile Image */}
          <img
            src="/adil-main-pic.jpg"
            alt="Abdulrahman Adil"
            className="w-72 h-96 object-cover rounded-lg shadow-lg border-0 border-white"
          />
        </div>
      </div>
    
  );
}
