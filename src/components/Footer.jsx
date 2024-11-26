import './Footer.css'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'> 
      <div className='top'>
        <div>
            <h3>Sky Heights</h3>
            <p>Your Journey Your Story</p>
        </div>
        <div>
            <a href="tel:+919827029519">
                <i className='fa-solid fa-phone'> +91-9827029519</i>
            </a>
            <a href="tel:+919827019519">
                <i className='fa-solid fa-phone'> +91-9827019519</i>
            </a>
        </div>
      </div>
    </div>
  )
}

export default Footer 
