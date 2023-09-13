import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import logo from '../../assets/logo.png';
import { links } from '../../data/links';
import bars from '../../assets/baseline-density-small.png';
import x from '../../assets/x.png';
import telegram from '../../assets/brand-telegram.png';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Function to close the menu
  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Add event listener to close the menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    }

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className={`container header ${isMenuOpen ? 'menu-open' : ''}`} id='home' ref={menuRef}>
      <nav>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className={`menu__items ${isMenuOpen ? 'open' : ''}`}>
          {links.map((link, index) => (
            <li key={index}>
              <a onClick={closeMenu} href={`#${link.toLowerCase()}`}>{link}</a>
            </li>
          ))}
        </ul>
      </nav>
      <img
        src={bars}
        className={`menu__btn ${isMenuOpen ? 'hide' : 'openbars'}`}
        id='openButton'
        alt="Open Menu"
        onClick={toggleMenu}
      />
      <img
        src={x}
        className={`menu__btn ${isMenuOpen ? 'openbars' : 'hide'}`}
        id='closeButton'
        alt="Close Menu"
        onClick={toggleMenu}
      />
    </div>
  );
};

export default Header;
