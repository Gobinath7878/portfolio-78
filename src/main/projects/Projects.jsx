import React from 'react'
import './Projects.css'
import ProjectsContent from './c-projects/c-projects'
import ProjectsTitle from './t-projects/t-projects'

const Projects = () => {
  return (
    <div className='projects' id="projects">
      <ProjectsTitle/>
      <ProjectsContent/>
    </div>
  )
}

export default Projects