import React from 'react'
import './Aboutme.css'
import AboutContent from '../aboutme/a-content/a-content'
import AboutTitle from '../aboutme/a-title/a-title'

const Aboutme = () => {
  return (
    <div className='aboutme' id="Aboutme">
      <AboutTitle/>
      <AboutContent/>
    </div>
  )
}

export default Aboutme;