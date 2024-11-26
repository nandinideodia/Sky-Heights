import React from 'react'
import Hero from '../components/Hero'
import temple from '../assets/temple.jpg'
import Trip from '../components/Trip'

const Service = () => {
  return (
    <div>
      <Hero 
        cName="hero-service"
        heroImg ={temple}
        title="Services"
        text = ""
      />

      <Trip />
    </div>
  )
}

export default Service
