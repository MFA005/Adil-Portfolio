
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from "react-icons/fa";


export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      {/* Landing Section */}
      <section className="relative h-screen w-full snap-start flex items-center justify-center">
        <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-50 pl-10 items-center">
          
          {/* Left Content */}
          <div className="md:ml-20 m-5 p-5 md:p-0 md:m-0 mt-20 md:mt-20">
            <span className="inline-block bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
              Hi everyone 👋, I’m Abdulrahman Adil
            </span>

            <h1 className="text-4xl mb-10 md:text-5xl font-bold text-white mt-4">
              Mechanical Engineer <br /> Based in KSA
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
              <a href="https://github.com/Orbweaver15" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-[110%] text-xl">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/abdulrahman-adil-28264a221/" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-[110%] text-xl">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative hidden lg:flex mt-10">
            {/* Decorative background shape */}
            <div className="absolute -z-1 top-4 left-6 w-72 h-90 border-[1px] bg-black border-white rounded-lg transform rotate-12 shadow-[0_0_25px_rgba(255,255,255,0.5)]"></div>
            <div className="absolute -z-11 top-7 left-10 w-72 h-90 border-[1px] bg-black border-white rounded-lg transform rotate-20 shadow-[0_0_25px_rgba(255,255,255,0.5)]"></div>

            {/* Profile Image */}
            <img
              src="/adil-main-pic.png"
              alt="Abdulrahman Adil"
              className="w-72 h-96 object-cover rounded-lg border-0 shadow-[0_0_25px_rgba(255,255,255,0.5)]"
            />
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <a 
          href="#about" 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-2 border border-white/20 rounded-full text-white/60 hover:text-white hover:border-white/60 hover:bg-white/5 transition-all duration-300 backdrop-blur-sm animate-bounce hover-pause group"
        >
          <span className="text-xs font-robotocnd tracking-[0.2em] font-light uppercase group-hover:-translate-y-1 transition-all duration-300">About Me</span>
          <FaArrowDown className="text-xs group-hover:translate-y-1 transition-all duration-300" />
        </a>
      </section>

      {/* About Me Section */}
      <section id="about" className="h-screen w-full snap-start flex flex-col items-center justify-center text-white px-4 md:px-10 overflow-hidden">
        <div className="relative p-6 mt-10 md:p-12 max-w-5xl w-full flex flex-col items-center text-center">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-lg rounded-3xl border border-white/10 shadow-2xl -z-10 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-2 font-norwester tracking-wider text-transparent bg-clip-text bg-white">
            ABOUT ME
          </h2>
          
          <h3 className="text-lg md:text-2xl text-white/90 mb-4 md:mb-6 font-robotocnd tracking-wider max-w-3xl font-bold mt-2 md:mt-4">
            Bridging the Gap Between Intelligent Robotics & Industrial Automation
          </h3>
          
          <div className="text-xs sm:text-sm md:text-lg leading-relaxed md:leading-8 font-robotocnd text-white/80 space-y-2 md:space-y-4 text-justify md:text-center max-w-4xl">
            <p>
              I am a <strong className="text-white">Mechatronics Engineer</strong> based in Riyadh, driven by a passion for making complex systems work efficiently. <br className="hidden md:block" />My engineering philosophy is simple: <strong className="text-white">understand the hardware, master the software, and optimize the process</strong>.
            </p>
            <p>
              My background is rooted in hands-on R&D. From diagnosing thermal failures in quadruped robots (Dingos) to designing autonomous drone delivery mechanisms, I have developed a resilience for troubleshooting and a proficiency in <strong className="text-white">ROS2, Python, and Embedded Systems.</strong> I don't just write code from a desk; I am comfortable in the field, soldering circuits, testing sensors, and ensuring the machine performs in the real world.
            </p>
            <p>
              Currently, I am pivoting this expertise toward <strong className="text-white">Industrial Automation and Control Systems.</strong> I have a strong professional interest in <strong className="text-white">Siemens PCS 7</strong> and PLC architectures, aiming to apply my knowledge of autonomous logic to large-scale industrial processes. My goal is to work at the intersection of modern R&D and established industrial control, helping facilities modernize and automate.
            </p>
            <p>
              As a <strong className="text-white">Saudi Premium Resident</strong>, I am available immediately for local roles, ready to bring technical precision, a "fix-it" mindset, and a hunger for learning to your engineering team.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
// about section