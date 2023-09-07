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
      <Header />
      <div className="home">
        <div className='home__profile'>
          <div className='circle'></div>
          <img src={profile} alt="" />
        </div>
        <div className="home__name">
          <p>👋🏼</p>
          <small>Hello, I am <br /><span>BRIAN</span></small>
        </div>
        <div className="home__name-1">
          <p>WEB DEVELOPER <br />FREELANCER</p>
        </div>
        <div className="scroll__dots">
          <a href="#"><button className='active'></button></a>
          <a href="#"><button></button></a>
          <a href="#"><button></button></a>
          <a href="#"><button></button></a>
          <a href="#"><button></button></a>
          <a href="#"><button></button></a>
        </div>
        <div className="social__links">
          <a href="#twitter"> <img src={twitter} alt="" /></a>
          <a href="#facebook"><img src={facebook} alt="" /></a>
          <a href="#github"><img src={github} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default hero