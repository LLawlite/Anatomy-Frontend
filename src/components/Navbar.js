import React from 'react';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Hamburger from './HamburgerMenu';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="left">
        <Hamburger />
      </div>
      <div className="center">
        <h1 className="logo">ANATOME</h1>
      </div>
      <div className="right">
        <span className="icon" onClick={() => navigate('/profile')}>
          <AccountBoxOutlinedIcon style={{ fontSize: 30 }} />
        </span>
        <span className="icon" onClick={() => navigate('/cart')}>
          <ShoppingBagOutlinedIcon style={{ fontSize: 30 }} />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
