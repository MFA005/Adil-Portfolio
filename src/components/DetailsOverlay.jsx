import React, { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// DetailsOverlay as adil said
const DetailsOverlay = ({ title, description, media = [], techStack, githubLink, onClose }) => {

    const [activeMedia, setActiveMedia] = useState(null);

    const isVideo = (src) => src.match(/\.(mp4|webm|ogg)$/i);
    const isImage = (src) => src.match(/\.(png|jpe?g|gif|svg)$/i);


    return (
        <div className='px-5 w-full max-w-7xl mx-auto'>
            <div className="bg-[#101014] p-15 shadow-[0_0_40px_rgba(255,255,255,0.3)] border-2 border-white rounded-3xl w-full relative flex flex-col lg:flex-row gap-8 h-[80vh]">

                <FaX
                    onClick={onClose}
                    className="absolute rounded-full p-1 text-white hover:font-bold top-6 right-6 hover:scale-[120%] hover:bg-white/20 text-3xl transition-all duration-150 z-50 cursor-pointer"
                />

                {/* Left Column: Gallery */}
                <div className="w-full lg:w-1/3 flex flex-col h-full lg:border-r border-white/30 lg:pr-6">
                    <h2 className="text-3xl font-bold font-norwester text-white mb-1">Gallery</h2>
                    <p className="text-white/50 text-sm mb-6 font-mono tracking-wide">Click media to full screen</p>
                    
                    <div className="grid grid-cols-2 gap-4 overflow-y-auto modern-scrollbar pr-2 content-start pb-4">
                        {media.filter(Boolean).map((src, index) => (
                            <div
                                key={index}
                                className="aspect-square rounded-lg overflow-hidden shadow-sm  border-white/10 cursor-pointer group border-2 hover:border-white transition-all duration-150 bg-white/5"
                                onClick={() => setActiveMedia(src)}
                            >
                                {isVideo(src) ? (
                                    <video
                                        src={src}
                                        loop
                                        autoPlay
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover opacity-100 group-hover:scale-[105%] transition-all duration-200"
                                    />
                                ) : isImage(src) ? (
                                    <img
                                        src={src}
                                        alt={`media-${index}`}
                                        className="w-full h-full object-cover opacity-100 group-hover:scale-[105%] transition-all shadow-black drop-shadow-2xl duration-200"
                                        loading="lazy"
                                    />
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Project Info */}
                <div className="w-full lg:w-2/3 flex flex-col h-full lg:pl-2 pt-2">
                    <h2 className="text-4xl font-bold font-norwester text-white mb-6">{title}</h2>
                    
                    <div className="bg-white/10 rounded-xl p-6 overflow-y-auto modern-scrollbar flex-grow border border-white/10 shadow-inner">
                        <div className="text-white/90 font-robotocnd text-md leading-relaxed space-y-4">
                            {typeof description === 'string' ? (
                                <ReactMarkdown 
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        h1: ({node, ...props}) => <h1 className="text-2xl font-bold mt-4 mb-2 text-white" {...props} />,
                                        h2: ({node, ...props}) => <h2 className="text-xl font-bold mt-3 mb-2 text-white" {...props} />,
                                        h3: ({node, ...props}) => <h3 className="text-lg font-bold mt-2 mb-1 text-white" {...props} />,
                                        ul: ({node, ...props}) => <ul className="list-disc list-inside ml-4 space-y-1" {...props} />,
                                        ol: ({node, ...props}) => <ol className="list-decimal list-inside ml-4 space-y-1" {...props} />,
                                        li: ({node, ...props}) => <li className="text-white/90" {...props} />,
                                        a: ({node, ...props}) => <a className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer" {...props} />,
                                        blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-white/30 pl-4 italic my-4 text-white/70" {...props} />,
                                        code: ({node, inline, className, children, ...props}) => {
                                            return inline ? (
                                                <code className="bg-white/20 rounded px-1 py-0.5 text-sm font-mono text-white" {...props}>{children}</code>
                                            ) : (
                                                <code className="block bg-black/50 rounded p-3 text-sm font-mono overflow-x-auto my-2 text-white" {...props}>{children}</code>
                                            )
                                        },
                                        p: ({node, ...props}) => <p className="mb-4 last:mb-0" {...props} />,
                                        strong: ({node, ...props}) => <strong className="font-bold text-white" {...props} />,
                                    }}
                                >
                                    {description}
                                </ReactMarkdown>
                            ) : (
                                description
                            )}
                        </div>
                    </div>
                </div>

            </div>

            {/* Fullscreen Media Modal */}
            {activeMedia && (
                <div
                    className="fixed inset-0 bg-black/95 flex items-center justify-center z-[60]"
                    onClick={() => setActiveMedia(null)}
                >
                    <div className="relative w-full h-full flex items-center justify-center p-10">
                        <FaX
                            className='absolute top-10 right-10 text-white text-4xl cursor-pointer hover:scale-110 transition-transform'
                            onClick={() => setActiveMedia(null)}
                        />

                        {isVideo(activeMedia) ? (
                            <video
                                src={activeMedia}
                                controls
                                autoPlay
                                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-white/10"
                                onClick={(e) => e.stopPropagation()}
                            />
                        ) : isImage(activeMedia) ? (
                            <img
                                src={activeMedia}
                                alt="fullscreen"
                                className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-white/10"
                            />
                        ) : null}
                    </div>
                </div>
            )}
        </div>
    )
}

export default DetailsOverlay