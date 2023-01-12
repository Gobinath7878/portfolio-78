import React from 'react'
import './t-projects.css'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

const ProjectsTitle = () => {
  return (
    <div className='projects-title'> 
     <h1 className="home-title"><span>pro</span>j<span>ects</span><BubbleChartIcon sx={{color:"black",fontSize:"45px"}}/></h1> 
    </div>
  )
}

export default ProjectsTitle;