import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import { links } from '../../data/links';
import bars from '../../assets/baseline-density-small.png';
import x from '../../assets/x.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header'>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {isMenuOpen ? (
          <ul className='menu__items'>
            <li><a href="#home">{links[0]}</a></li>
            <li><a href="#about">{links[1]}</a></li>
            <li><a href="#work">{links[2]}</a></li>
            <li><a href="#skills">{links[3]}</a></li>
            <li><a href="#contact">{links[4]}</a></li>
          </ul>
        ) : null}
      </nav>
      <img
        src={bars}
        className='menu__btn'
        id='openButton'
        alt=""
        onClick={toggleMenu}

      />
      {isMenuOpen && (
        <img
          src={x}
          className='menu__btn'
          id='closeButton'
          alt=""
          onClick={toggleMenu}
        />
      )}
    </div>
  );
};

export default Header;
