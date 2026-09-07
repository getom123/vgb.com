// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AgencyHub</h3>
            <p>Transforming businesses through digital innovation.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>hello@agencyhub.com</p>
            <p>+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AgencyHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;