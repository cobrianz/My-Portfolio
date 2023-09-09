import React from 'react'
import Header from '../header/Header'
import './hero.css'
import twitter from '../../assets/brand-twitter-filled.png'
import facebook from '../../assets/brand-facebook-filled.png'
import github from '../../assets/brand-github-filled.png'
import profile from '../../assets/profile.png'
const hero = () => {
  return (
    <div className='hero'>
      <div className='navbar'>
        <Header />
      </div>
      <div className="hero__text">
        <div className="hero__text-1">
          <h3>        Hi, I am <span>Brian Cheruiyot</span> <br /> A Developer & Freelancer
          </h3>
        </div>
        <div className="hero__text-2">
          <h4>Based in Kenya</h4>
        </div>
      </div>
      <div className="hero__section">
        <div className="social__links">
          <img src={twitter} alt="" />
          <img src={facebook} alt="" />
          <img src={github} alt="" />
        </div>
        <div className="hero__section-profile">
          <img src={profile} className='hero__details' />
          <div className="circle hero__details`"></div>
        </div>
        <div className="scroll__buttons">
          <a href="#"><button className='active'></button></a>
          <a href="#"><button></button></a>
          <a href="#"><button></button></a>
          <a href="#"><button></button></a>
          <a href="#"><button></button></a>
          <a href="#"><button></button></a>
        </div>
      </div>
    </div>
  )
}

export default hero