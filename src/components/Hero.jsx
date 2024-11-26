import React from 'react'
import './Hero.css'

const Hero = (props) => {
  return (
    <div>
        <div className={props.cName}>
        <img src={props.heroImg} alt="Hero image" />
        <div className='hero-text'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>
        </div>
      
    </div>
  )
}

export default Hero
