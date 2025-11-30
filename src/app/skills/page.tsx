'use client'
import React, { useState } from 'react'
import SkillItem from '../../components/SkillItem.jsx'
import skill from '../../data/skillData.jsx'
import SearchBar from '@/components/searchBar'

const Skills = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skill.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='pt-32 px-10 pb-10'>

      <h1 className=' md:pl-10 text-center md:text-start pb-10 text-white tracking-wide text-6xl md:text-7xl'>
        SKILLS
      </h1>
      <SearchBar value={searchQuery} onChange={setSearchQuery} />
      <hr className='border-[0.5] border-white/40 md:ml-10 w-[50%] m-auto mt-5' />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3'>
        {filteredSkills.map((project, index) => (
          <SkillItem
            key={index}
            imgUrl={project.imgUrl}
            title={project.title}
          />
        ))}
      </div>

    </div>
  )
}

export default Skills