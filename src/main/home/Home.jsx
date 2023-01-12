import React from 'react'
import Navbar from './navbar/Navbar'
import Content from './content/Content'
import "./Home.css"

const Home = () => {
  return (
    <div className='home' id="home">
      <Navbar/>
      <Content/>
    </div>
  )
}

export default Home