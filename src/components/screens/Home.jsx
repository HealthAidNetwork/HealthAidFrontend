import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import About from '../About'
import AllinOne from '../AllinOne'
import axios from 'axios'

const Home = () => {

  
  return (
    <div>
   
        <Navbar />
        <Hero />
        <About />
        <AllinOne />

   
    </div>
  )
}

export default Home