import React from 'react'
import './Trip.css'
import TripData from './TripData'
import maheshwar from '../assets/maheshwar1.jpg'
import temple from '../assets/temple.jpg'
import DestinationData from './DestinationData'
import rajwada from '../assets/rajwada.jpg'
import rajabhoj from '../assets/rajabhoj.jpg'



const Trip = () => {
  return (
    <div className='trip'>
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using google maps, and we'll make it possible for you.</p>    
        <div className='tripcard'>
        <TripData 
        image = {rajwada}
        heading = "Rajwada Palace"
        text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad ut similique minima, officia voluptatibus mollitia voluptatum porro, voluptates sequi excepturi fugiat, fuga nesciunt maiores iusto ullam modi officiis corrupti?"
        /> 

        <TripData 
        image = {rajabhoj}
        heading = "Bada Talaab"
        text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad ut similique minima, officia voluptatibus mollitia voluptatum porro, voluptates sequi excepturi fugiat, fuga nesciunt maiores iusto ullam modi officiis corrupti?"
        /> 

        <TripData 
        image = {maheshwar}
        heading = "Maheshwar Ghaat"
        text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad ut similique minima, officia voluptatibus mollitia voluptatum porro, voluptates sequi excepturi fugiat, fuga nesciunt maiores iusto ullam modi officiis corrupti?"
        /> 
        </div>
         
    </div>

    
  )
}

export default Trip
