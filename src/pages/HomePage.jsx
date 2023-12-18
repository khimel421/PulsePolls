import React from 'react'
import Container from '../container/Container'
import Navbar from '../main-components/Navbar'
import Hero from '../main-components/Hero'
import Slider from '../main-components/Slider'
import HowItWorks from '../main-components/HowItWorks'
import TestiMonials from '../main-components/TestiMonials'
import Footer from '../main-components/Footer'

export default function HomePage() {
  return (
    <div className=' font-inter max-w-7xl mx-auto'>
       
            <Navbar></Navbar>
            <Hero></Hero>
            <Slider></Slider>
            <HowItWorks></HowItWorks>
            <TestiMonials></TestiMonials>
            <Footer></Footer>
        
    </div>
  )
}
