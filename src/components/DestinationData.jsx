import './Destination.css'
import React from 'react'


const DestinationData = (props) => {
  return (
    <div className={props.className}>
            <div className='des-text'>
                <h2>{props.heading}</h2>
                <p>{props.text}</p>
                           
            </div>
            <div className='image'>
                <img src={props.img1} alt="maheshwar photo" />
                <img src={props.img2} alt="temple" />

            </div>
    </div>
  )
}

export default DestinationData
