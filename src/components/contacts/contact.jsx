import React, { useRef, useState } from 'react';
import './contact.css';
import gmail from '../../assets/email.png';
import phone from '../../assets/mobile.png';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ic6e6mk', 'template_l40xzeq', form.current, 'N_zB7QJt4YSPXyryW')
      .then((result) => {
        alert('form success')
        setIsFormSubmitted(true);
        form.current.reset(); // Reset the form
        window.scrollTo(0, 0); // Scroll to the top of the page
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

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
          <a href="briancheruiyot.h@gmail.com"><p>briancheruiyot.h@gmail.com</p></a>
        </div>
        <div className="contact">
          <img src={phone} alt="" />
          <p>+254702764907</p>
        </div>
      </div>
      <form action="#" ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder='Your Name' name="user_name" required />
        <input type="email" placeholder='Your Email' name="user_email" required />
        <textarea id="" cols="30" rows="10" placeholder='Your Message' name="message" required></textarea>
        <input type="submit" placeholder='' value='send' className='button' />
      </form>
      <div className="copy">
        <p>&copy; Brian Cheruiyot</p>
      </div>
    </div>
  );
}

export default Contact;
