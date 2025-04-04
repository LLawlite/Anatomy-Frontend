import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HamburgerMenu.css';
import MenuIcon from '@mui/icons-material/Menu';
import apiconfig from '../config/apiconfig';

function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [loading, setIsloading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

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

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsloading(true);
        console.log('Hellow world');
        const response = await apiconfig.get('/api/public/categories'); // Base URL already set in api.js
        setCategories(response.data.content);
        console.log(response.data.content);
      } catch (err) {
        setError(err.message || 'Failed to fetch categories');
      } finally {
        setIsloading(false);
      }
    };

    fetchCategories();
  }, []);

  // Handle category click → Redirect to collection page
  const handleCategoryClick = (categoryId) => {
    setIsMenuOpen(false); // Close menu
    navigate(`/collection/${categoryId}`); // Redirect with category ID in URL
  };

  return (
    <div className="hamburger-menu" ref={menuRef}>
      <button className="hamburger" onClick={toggleMenu}>
        <MenuIcon />
      </button>
      {isMenuOpen && (
        <div className="dropdown">
          {loading && <p className="dropdown-item">Loading...</p>}
          {error && <p className="dropdown-item error">{error}</p>}
          {categories.map((category) => (
            <span
              key={category.categoryId}
              className="dropdown-item"
              onClick={(e) => {
                e.preventDefault(); // Prevent full page reload
                handleCategoryClick(category.categoryId);
              }}
            >
              {category.categoryName}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
