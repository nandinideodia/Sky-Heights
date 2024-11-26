import Hero from '../components/Hero'
import React from 'react'
import maheshwar from '../assets/maheshwar1.jpg'
import Destination from '../components/Destination'


const Home = () => {
  return (
    <div>
        <Hero 
        cName="hero"
        heroImg ={maheshwar}
        title="Your Journey Your Story"
        text = "Choose your destination and we make it better for you."
        />
      <Destination />
    </div>
  )
}

export default Home
