import React from 'react'
import Home from './main/home/Home'
import './App.css'
import Aboutme from './main/aboutme/Aboutme'
import Skills from './main/skills/Skills'
import Projects from './main/projects/Projects'
import Contactme from './main/contactme/Contactme'
import Services from './main/Services-1/Services'

const App = () => {
  return (
    <div className="App">

         <Home/>
         <Aboutme />
         <Skills />
         <Projects />
         <Services/> 
         <Contactme/>   
         
    </div>
  )
}

export default App;