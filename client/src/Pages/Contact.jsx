import React from 'react';
import coin from '../Assets/coin.png';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <img src={coin}  alt="Company Logo" className="logo" />
      <h2>Contact Us</h2>
      <div className="contact-info">
        <p><strong>Address:</strong> 123 Main Street, Anytown, Sri Lanka</p>
        <p><strong>Telephone:</strong> (123) 456-7890</p>
        <p><strong>Email:</strong> contact@360solutions.com</p>
        <p><strong>Website:</strong> <a href="https://www.360solutions.com">www.360solutions.com</a></p>
      </div>
    </div>
  );
};

export default ContactUs;
