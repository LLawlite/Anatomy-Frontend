import React from 'react';
import {
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaThreads,
} from 'react-icons/fa6'; // Social Icons
import '../styles/Footer.css'; // CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      {/* Left Section - Branding & Socials */}
      <div className="footer-section-left">
        <h1 className="logo">ANATOME</h1>
        <p className="tagline">Passion Worn Pride</p>
        <h1 className="connect">Connect with us</h1>
        <div className="social-icons">
          <FaInstagram className="icon" />
          <FaXTwitter className="icon" />
          <FaFacebook className="icon" />
          <FaThreads className="icon" />
        </div>
      </div>

      {/* Middle Section - About & Quick Links */}
      <div className="footer-section-middle">
        <h3 className="footer-aboutus">About Us</h3>
        <p className="about-text">
          To give medicos the identity they deserve—beyond the scrubs and
          stethoscopes. We blend anatomy with fashion, creating apparel that
          lets you wear your passion with pride.
        </p>

        <h3 className="quick-links-h3">Quick Links</h3>
        <div className="quick-links">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/collection">Collection</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-conditions">Terms & Conditions</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section - Contact */}
      <div className="footer-section-right">
        <h3>Contact Us</h3>
        <p>Email: support@anatome.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Fashion St, New York, NY</p>
      </div>
    </footer>
  );
};

export default Footer;
