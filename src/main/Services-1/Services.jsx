import React from 'react'
import './Services.css'
import ServicesContent from './c-services/c-services'
import ServicesTitle from './t-services/t-services'

const Services = () => {
  return (
    <div className='services' id="Services">
      <ServicesTitle/>
      <ServicesContent/>
    </div>
  )
}

export default Services