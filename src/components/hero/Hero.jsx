import React, { useState } from 'react';
import Header from '../header/Header';
import './hero.css';
import twitter from '../../assets/xlogo.png';
import facebook from '../../assets/brand-facebook.png';
import github from '../../assets/brand-github.png';
import linkedin from '../../assets/brand-linkedin.png';
import profile from '../../assets/profile.png';
import mail from '../../assets/mail.png';
import download from '../../assets/download.png';
import { SocialLinks } from '../../data/links';
import home from '../../assets/home.png'


const Hero = () => {
  const [activeButton, setActiveButton] = useState('home'); // Default to 'home' or the ID of the initial active section

  return (
    <div className='hero' id='home'>
        <Header />
      <div className="home container">
        <img src={profile} alt="" />
      <small>Hey! I'm <span>Brian Cheruiyot</span></small>
      <p>I'm a <span>frontend software engineer with a strong passion 
        for building responsive and performant web applications with great user
        experiences that positively impacts the world.</span></p>
      <div className="btn"><a href="#contact">
       <img src={mail} alt="" />Hire Me</a>
        <a href="./">Download CV <img src={download} alt="" /></a>
      </div>
      <div className="home__image">
        <img src={home} alt="" />
      </div>
      </div>
      <div className="hero__section">
        <div className="social__links">
          <a href={SocialLinks[0]}><img src={twitter} alt="" /></a>
          <a href={SocialLinks[1]}><img src={facebook} alt="" /></a>
          <a href={SocialLinks[2]}><img src={linkedin} alt="" /></a>
          <a href={SocialLinks[3]}><img src={github} alt="" /></a>
        </div>
        <div className="scroll__buttons">
          <a href="#home"><button onClick={() => setActiveButton('home')} className={activeButton === 'home' ? 'active' : ''}></button></a>
          <a href="#about"><button onClick={() => setActiveButton('about')} className={activeButton === 'about' ? 'active' : ''}></button></a>
          <a href="#work"><button onClick={() => setActiveButton('work')} className={activeButton === 'work' ? 'active' : ''}></button></a>
          <a href="#skills"><button onClick={() => setActiveButton('skills')} className={activeButton === 'skills' ? 'active' : ''}></button></a>
          <a href="#testimonials"><button onClick={() => setActiveButton('testimonials')} className={activeButton === 'testimonials' ? 'active' : ''}></button></a>
          <a href="#contact"><button onClick={() => setActiveButton('contact')} className={activeButton === 'contact' ? 'active' : ''}></button></a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
