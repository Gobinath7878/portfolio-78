import React from 'react'
import './Contactme.css'
import ContactTitle from './t-contact/t-contact'
import {ContactForm}  from './c-contact/c-contact'
import Footer from '../footer/Footer'
// import ContactContent from './c-contact/c-contact'

const Contactme = () => {
  return (
    <div className='contactme' id="contactme">
    <ContactTitle/>
    <ContactForm/>
    <Footer/>
    {/* <ContactContent/> */}
    
    </div>
  )
}

export default Contactme