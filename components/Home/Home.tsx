"use client"

import React, { useEffect } from 'react'

import About from '../About/About'
import OurServices from '../OurServices/OurServices'
import Projects from '../Projects/Projects'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos")
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: 'top-bottom'
      });
    };
    initAOS()
  }, [])
  return (
    <div className='overflow-hidden  '>

      <About />
      <OurServices />
      <Projects />
    </div>
  )
}

export default Home
