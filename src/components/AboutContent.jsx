import React from 'react';
import './AboutContent.css';

const AboutContent = () => {
  return (
    <div className="about-us">
      <div className="about-us-container">
        <p className="about-us-text">
          Welcome to <strong>Sky Heights Taxi Services</strong>, your trusted travel partner in 
          <strong> Madhya Pradesh</strong>. We take pride in being one of the most reliable and efficient 
          taxi service providers, catering to your transportation needs across the heart of India. Whether 
          you're exploring the historic cities of <strong>Bhopal</strong>, <strong>Indore</strong>, 
          <strong> Gwalior</strong>, or the scenic beauty of <strong>Pachmarhi</strong>, we've got you covered.
        </p>
        <h2 className="about-us-subtitle">Why Choose Sky Heights?</h2>
        <ul className="about-us-list">
          <li><strong>Highly Skilled and Reliable Drivers:</strong> Our team of experienced and professional drivers is dedicated to ensuring your journey is safe, comfortable, and timely.</li>
          <li><strong>Convenient and Affordable Services:</strong> A variety of taxi options including sedans, SUVs, and luxury cars, all at competitive rates.</li>
          <li><strong>24/7 Availability:</strong> Whether you need an airport transfer, a business trip, or a family vacation ride, our services are available round the clock to meet your requirements.</li>
          <li><strong>Customer-Centric Approach:</strong> Your satisfaction is our top priority. We strive to exceed your expectations with clean, well-maintained vehicles and easy booking options.</li>
        </ul>
        <h2 className="about-us-subtitle">Our Coverage</h2>
        <p className="about-us-text">
          Sky Heights Taxi Services is proud to serve all major cities and towns in 
          <strong> Madhya Pradesh</strong>, including:
        </p>
        <ul className="about-us-list">
          <li><strong>Bhopal:</strong> Explore the rich heritage of the city of lakes.</li>
          <li><strong>Indore:</strong> Experience the charm of the cleanest city in India.</li>
          <li><strong>Ujjain:</strong> Embark on a spiritual journey to the famous Mahakaleshwar Temple.</li>
          <li><strong>Khajuraho:</strong> Witness the breathtaking sculptures of this UNESCO World Heritage Site.</li>
        </ul>
        <p className="about-us-text">
          With Sky Heights Taxi Services, traveling in <strong>Madhya Pradesh</strong> has never been easier. Book your ride today and experience the perfect blend of reliability, affordability, and exceptional service.
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
