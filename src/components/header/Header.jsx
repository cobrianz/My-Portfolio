import React from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import { links } from '../../data/links';
import bars from '../../assets/baseline-density-small.png';
import x from '../../assets/x.png';

const Header = () => {

  return (
    <div className='header'>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className='menu__items'>
          <li><a href="#home">{links[0]}</a></li>
          <li><a href="#about">{links[1]}</a></li>
          <li><a href="#work">{links[2]}</a></li>
          <li><a href="#skills">{links[3]}</a></li>
          <li><a href="#contact">{links[4]}</a></li>
        </ul>
      </nav>
      <img
        src={bars}
        className='menu__btn'
        id='openButton'
        alt=""

      />
      <img
        src={x}
        className='menu__btn'
        id='closeButton'
        alt=""

      />
    </div>
  );
};

export default Header;
