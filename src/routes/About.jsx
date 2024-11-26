import Hero from '../components/Hero'
import React from 'react'
import temple from '../assets/temple.jpg'

const About = () => {
  return (
    <div>      
      <Hero 
        cName="hero-about"
        heroImg ={temple}
        title="About Us"
        text = ""
      />
    </div>
  )
}

export default About
