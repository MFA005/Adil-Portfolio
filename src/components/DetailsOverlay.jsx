import React, { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';


const DetailsOverlay = ({ title, description, media = [], techStack, githubLink, onClose }) => {

    const [activeMedia, setActiveMedia] = useState(null);

    const isVideo = (src) => src.match(/\.(mp4|webm|ogg)$/i);
    const isImage = (src) => src.match(/\.(png|jpe?g|gif|svg)$/i);


    return (
        <div className='px-5'>
            <div className="bg-black shadow-[0_0_40px_rgba(255,255,255,0.3)] border-2 border-white/60 rounded-xl p-6 w-full max-w-3xl mx-auto">

                <FaX
                    onClick={onClose}
                    className="absolute rounded-full p-1 text-white hover:font-bold top-10 right-10 hover:scale-[220%] hover:bg-white/20 scale-[200%] transition-all duration-150"
                />
                {/* Header */}
                <div className="mb-4 ">
                    <h2 className="text-4xl font-norwester p-3 font-bold text-white/80">{title}</h2>
                    <p className="text-white/50 p-3 font-robotocnd text-sm mt-1 w-[50%]">{description}</p>

                </div>
                <hr className='border-white/50 align-middle ml-3 mt-5 w-[50%]' />
                {/* Video Gallery */}
                <h2 className="text-xl p-3 mt-3 font-bold font-robotocnd text-white/80">Gallery</h2>
                <span className='text-white px-3 font-mono text-sm tracking-tight'>Click Media to Fullscreen</span> 
                <div className="grid grid-cols-1 p-3 sm:grid-cols-2 modern-scrollbar lg:grid-cols-3  gap-8 overflow-y-auto" style={{ maxHeight: '14rem' }}>
                    {media.filter(Boolean).map((src, index) => (
                        <div
                            key={index}
                            className="rounded-lg overflow-hidden shadow-sm border border-gray-200 cursor-pointer group hover:scale-105 transition-all duration-150"
                            onClick={() => setActiveMedia(src)}
                        >
                            {isVideo(src) ? (
                                <video
                                    src={src}
                                    loop
                                    autoPlay
                                    muted
                                    playsInline
                                    poster=""
                                    className="w-full h-48 object-cover transition-transform duration-200"

                                />
                            ) : isImage(src) ? (
                                <img
                                    src={src}
                                    alt={`media-${index}`}
                                    className="w-full h-48 object-cover rounded-lg transition-transform duration-200 group-hover:scale-105"
                                    loading="lazy"
                                />
                            ) : null}
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-10 flex flex-wrap justify-end items-center text-sm text-white/50">

                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-robotocnd hover:scale-[107%] transition-all duration-100 "
                        >
                            View on GitHub
                        </a>
                    )}
                </div>
            </div>
            {activeMedia && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
                    onClick={() => setActiveMedia(null)}
                >
                    <div className="relative w-auto p-10 max-w-4xl">
                        <FaX
                            className='absolute mt-10 -top-12 right-0 text-white text-3xl'
                            onClick={() => setActiveMedia(null)}
                        />

                        {isVideo(activeMedia) ? (
                            <video
                                src={activeMedia}
                                controls
                                autoPlay
                                className="w-full max-h-[80vh] object-contain rounded-lg"
                                onClick={(e) => e.stopPropagation()}
                            />
                        ) : isImage(activeMedia) ? (
                            <img
                                src={activeMedia}
                                alt="fullscreen"
                                className="w-full  max-h-[80vh] object-contain rounded-lg"
                            />
                        ) : null}
                    </div>
                </div>
            )}
        </div>
    )
}

export default DetailsOverlay