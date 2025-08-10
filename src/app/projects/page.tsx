import React from 'react'
import PortfolioItem from '../../components/PortfolioItem'
import portfolio from '../../data/portfolioData'

const page = () => {
  return (
    <div className='p-20'>
      
      <h1 className='font-anton pl-10 pb-10 text-white tracking-wide text-7xl'>
        PROJECTS
      </h1>
      <hr className='border-[0.5] border-white/40 ml-10 w-[50%] mt-10'/>
      <div className='mt-30 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 items-start'>
      {portfolio.map((project, index) => (
        <PortfolioItem
            key={index}
            imgUrl = {project.imgUrl}
            title = {project.title}
            stack = {project.stack}
            githubLink = {project.githubLink}
            description={project.description}
            
        />
        // make details overlay for each project
    ))}
    </div>
    </div>
  )
}

export default page