import React from 'react'
import SkillsContent from './s-content/s-content'
import SkillsTitle from './s-title/s-title'
import './Skills.css'
const Skills = () => {
  return (
    <div className='skills' id="skills">
      <SkillsTitle/>
      <SkillsContent/>
    </div>
  )
}

export default Skills