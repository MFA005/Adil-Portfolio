import React from 'react'
import PortfolioItem from '../../components/PortfolioItem'
import portfolio from '../../data/portfolioData'

const page = () => {
  return (
    <div className='px-20 pb-20 pt-32'>
      
      <h1 className='md:pl-10 pb-10 text-center md:text-start text-white tracking-wide text-6xl md:text-7xl'>
        PROJECTS
      </h1>
      <hr className='border-[0.5] border-white/40 md:ml-10 w-[50%] mx-auto mt-5'/>
      <div className='mt-10 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 items-start'>
      {portfolio.map((project, index) => (
        <PortfolioItem
            key={index}
            media={project.media}
            img = {project.img}
            title = {project.title}
            description={project.description}
            
        />
        // make details overlay for each project
    ))}
    </div>
    </div>
  )
}

export default page