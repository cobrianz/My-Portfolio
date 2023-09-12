import React, { useState } from 'react';
import Header from '../header/Header';
import './hero.css';
import twitter from '../../assets/brand-twitter.png';
import facebook from '../../assets/brand-facebook.png';
import github from '../../assets/brand-github.png';
import linkedin from '../../assets/brand-linkedin.png';
import profile from '../../assets/profile.png';
import sass from '../../assets/sass.png';
import react from '../../assets/react.png';
import git from '../../assets/git.png';
import js from '../../assets/javascript.png';
import { SocialLinks } from '../../data/links';

const Hero = () => {
  const [activeButton, setActiveButton] = useState('home'); // Default to 'home' or the ID of the initial active section

  return (
    <div className='hero' id='home'>
      <div className='navbar'>
        <Header />
      </div>
      <div className="hero__text">
        <div className="hero__text-1">
          <h3>Hi, I am <span>Brian Cheruiyot</span> <br /> A Developer & Freelancer</h3>
        </div>
        <div className="hero__text-2">
          <h4>Based in Kenya</h4>
        </div>
      </div>
      <img src={sass} alt="" className="job__image sass" />
      <img src={react} alt="" className="job__image react" />
      <img src={git} alt="" className="job__image git" />
      <img src={js} alt="" className="job__image js" />
      <div className="hero__section">
        <div className="social__links">
          <a href={SocialLinks[0]}><img src={twitter} alt="" /></a>
          <a href={SocialLinks[1]}><img src={facebook} alt="" /></a>
          <a href={SocialLinks[2]}><img src={linkedin} alt="" /></a>
          <a href={SocialLinks[3]}><img src={github} alt="" /></a>
        </div>
        <div className="hero__section-profile">
          <img src={profile} className='hero__details' />
          <div className="circle hero__details"></div>
        </div>
        <div className="scroll__buttons">
          <a href="#home"><button onClick={() => setActiveButton('home')} className={activeButton === 'home' ? 'active' : ''}></button></a>
          <a href="#about"><button onClick={() => setActiveButton('about')} className={activeButton === 'about' ? 'active' : ''}></button></a>
          <a href="#work"><button onClick={() => setActiveButton('work')} className={activeButton === 'work' ? 'active' : ''}></button></a>
          <a href="#skills"><button onClick={() => setActiveButton('skills')} className={activeButton === 'skills' ? 'active' : ''}></button></a>
          <a href="#contact"><button onClick={() => setActiveButton('contact')} className={activeButton === 'contact' ? 'active' : ''}></button></a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
