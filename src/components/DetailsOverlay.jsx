import React from 'react'

const DetailsOverlay = ({ title, description, videos = [], techStack, githubLink }) => {
  return (
    <div>
        <div className="bg-black shadow-[0_0_40px_rgba(255,255,255,0.3)] border-2 border-white/60 rounded-xl p-6 w-full max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-4 ">
        <h2 className="text-4xl font-norwester p-3 font-bold text-white/80">{title}</h2>
        <p className="text-white/50 p-3 font-robotocnd text-sm mt-1 w-[50%]">{description}</p>
        
      </div>
        <hr className='border-white/50 align-middle ml-3 mt-5 w-[50%]'/>
      {/* Video Gallery */}
      <h2 className="text-xl r p-3 mt-3 font-bold font-robotocnd text-white/80">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((videoSrc, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-sm border border-gray-200"
          >
            <video
              src={videoSrc}
              controls
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
        <hr className=' align-middle ml-3 mt-5 w-[50%] border-white/50'/>
      {/* Footer */}
      <div className="mt-4 flex flex-wrap justify-between items-center text-sm text-white/50">
        <div className="flex flex-wrap gap-2">
          {techStack?.map((tech, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-robotocnd hover:scale-[107%] hover:font-bold transition-all duration-200"
          >
            View on GitHub
          </a>
        )}
      </div>
    </div>
    </div>
  )
}

export default DetailsOverlay