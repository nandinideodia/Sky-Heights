import React from 'react'
import './Destination.css'
import khajuraho1 from '../assets/KHAJURAHO1.jpg'
import khajuraho2 from '../assets/KHAJURAHO2.jpg'
import DestinationData from './DestinationData'
import pachmarhi from '../assets/pachmarhi.jpg'
import pachmarhi1 from '../assets/pachmarhi1.jpg'
import gwalior1 from '../assets/gwalior1.jpg'
import gwalior2 from '../assets/gwalior2.jpg'


const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destinations</h1>
        <p>Tours give the opportunity to explore the world.</p>

        <DestinationData 
        className = "first-des"
        heading = "Khajuraho"
        text = "Khajuraho, nestled in the heart of Madhya Pradesh, is a UNESCO World Heritage Site renowned for its exquisite temples adorned with intricate carvings and sculptures. A perfect blend of art, history, and spirituality, Khajuraho offers travelers a glimpse into India's rich cultural heritage. The temples, built between the 10th and 12th centuries, depict tales of love, life, and devotion, making it a must-visit destination for history enthusiasts and art lovers. Surrounded by natural beauty and a serene atmosphere, Khajuraho provides a captivating escape into the grandeur of India's past."
        img1 = {khajuraho1}
        img2 = {khajuraho2}
        />

        <DestinationData 
        className = 'first-des-reverse'
        heading = "Pachmarhi"
        text = "Pachmarhi, the Queen of Satpura, is a serene hill station in Madhya Pradesh, known for its lush greenery, waterfalls, and ancient caves. Nestled in the Satpura Range, it offers natural beauty, rich history, and a peaceful retreat for nature and adventure lovers alike."
        img1 = {pachmarhi}
        img2 = {pachmarhi1}
        />

        <DestinationData 
        className = "first-des"
        heading = "Gwalior"
        text = "Gwalior, a historic city in Madhya Pradesh, is renowned for its majestic Gwalior Fort, often called the Gibraltar of India. With its rich cultural heritage, stunning palaces, and vibrant music traditions, Gwalior offers a perfect blend of history and charm for every traveler."
        img1 = {gwalior1}
        img2 = {gwalior2}
        />
      
    </div>

    
  )
}

export default Destination
