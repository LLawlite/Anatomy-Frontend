import React, { useState } from 'react';
import '../styles/HamburgerMenu.css';
import MenuIcon from '@mui/icons-material/Menu';

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger" onClick={toggleMenu}>
        <MenuIcon />
      </button>
      {isMenuOpen && (
        <div className="dropdown">
          <a href="#home" className="dropdown-item">
            Home
          </a>
          <a href="#about" className="dropdown-item">
            About
          </a>
          <a href="#services" className="dropdown-item">
            Services
          </a>
          <a href="#contact" className="dropdown-item">
            Contact
          </a>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
