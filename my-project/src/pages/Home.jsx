import React from 'react'
import Navbar from '../compoenents/Navbar'
import About from '../compoenents/About'
import './home.css'

const Home = () => {
  return (
    <>
    <Navbar/>
    <h1 className='home'>this is home page </h1>


    <div id="about-section">
    <About/>
    </div>

    </>
  )
}

export default Home