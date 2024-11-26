import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <div className='form-container'>
      <h1>Send a Message to us!</h1>
      <form action="">
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Subject' />
        <textarea type="text" placeholder='Message' rows='4' />
        <button> Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
