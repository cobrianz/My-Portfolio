import React from 'react';
import './contact.css';
import gmail from '../../assets/email.png';
import phone from '../../assets/mobile.png';
import { motion } from 'framer-motion'; // Import Framer Motion

const Contact = () => {
  return (
    <div className='contact__section' id='contact'>
      <div className="title">
        <h1>
          Take A Coffee <span>& </span> Chat With Me
        </h1>
      </div>
      <div className="contact__section-1">
        <div className="contact">
          <img src={gmail} alt="" />
          <p>briancheruiyot.h@gmail.com</p>
        </div>
        <div className="contact">
          <img src={phone} alt="" />
          <p>+254702764907</p>
        </div>
      </div>
      <form action="#">
        <input type="text" placeholder='Your Name' />
        <input type="email" placeholder='Your Email' />
        <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
        <motion.button
          whileHover={{ backgroundColor: '#892be2c1', color: 'white' }} // Hover animation
        >
          Send Message
        </motion.button>
      </form>
      <div className="copy">
        <p>&copy; Brian Cheruiyot</p>
      </div>
    </div>
  );
}

export default Contact;
