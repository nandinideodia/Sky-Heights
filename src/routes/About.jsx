import Hero from '../components/Hero'
import React from 'react'
import temple from '../assets/temple.jpg'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>      
      <Hero 
        cName="hero-about"
        heroImg ={temple}
        title="About Us"
        text = ""
      />
      <AboutContent />
    </div>
  )
}

export default About
