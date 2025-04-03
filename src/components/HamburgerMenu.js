import React, { useState, useEffect, useRef } from 'react';
import '../styles/HamburgerMenu.css';
import MenuIcon from '@mui/icons-material/Menu';

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="hamburger-menu" ref={menuRef}>
      <button className="hamburger" onClick={toggleMenu}>
        <MenuIcon />
      </button>
      {isMenuOpen && (
        <div className="dropdown">
          <a href="#home" className="dropdown-item">
            Collection 1
          </a>
          <a href="#about" className="dropdown-item">
            Collection 2
          </a>
          <a href="#services" className="dropdown-item">
            Collection 3
          </a>
          <a href="#contact" className="dropdown-item">
            Collection 4
          </a>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
