import React from 'react'
import './t-projects.css'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

const ProjectsTitle = () => {
  return (
    <div className='title-pro'>

    <div className='projects-title'> 
     <h1 className="home-title"><span>pro</span>j<span>ects</span><BubbleChartIcon sx={{color:"black",fontSize:"45px"}}/></h1>
    </div>
    <h5 className='credentials-text'>User EMail:user@gmail.com & password:user78 || Admin Email- chegoa@gmail.com & password- chegoa</h5>
    </div>
    )
}

export default ProjectsTitle;
