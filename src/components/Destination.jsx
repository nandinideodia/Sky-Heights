import React from 'react'
import './Destination.css'
import maheshwar from '../assets/maheshwar1.jpg'
import temple from '../assets/temple.jpg'
import DestinationData from './DestinationData'
import rajwada from '../assets/rajwada.jpg'
import rajabhoj from '../assets/rajabhoj.jpg'

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destinations</h1>
        <p>Tours give the opportunity to explore the world.</p>

        <DestinationData 
        className = "first-des"
        heading = "Maheshwar Ghaat"
        text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad ut similique minima, officia voluptatibus mollitia voluptatum porro, voluptates sequi excepturi fugiat, fuga nesciunt maiores iusto ullam modi officiis corrupti?"
        img1 = {maheshwar}
        img2 = {temple}
        />

        <DestinationData 
        className = 'first-des-reverse'
        heading = "Mahakaleshwar Mandir"
        text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad ut similique minima, officia voluptatibus mollitia voluptatum porro, voluptates sequi excepturi fugiat, fuga nesciunt maiores iusto ullam modi officiis corrupti?"
        img1 = {rajwada}
        img2 = {rajabhoj}
        />
      
    </div>

    
  )
}

export default Destination
