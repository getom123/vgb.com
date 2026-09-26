// src/components/Navbar.jsx
import React, { useState } from 'react';
import Button from './ui/Button';
import './Navbar.css';
import logo from './../assets/vgb_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    'Home',
    'About Us',
    'Our Programs',
    'Impact'
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <a href="#home" className="logo" onClick={handleLinkClick}>
          <img src={logo} alt="VGB Foundation Logo" />
        </a>

        {/* Navigation */}
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link}>
                <a
                  href={`#${link
                    .toLowerCase()
                    .replace(/\s+/g, '-')}`}
                  onClick={handleLinkClick}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <Button variant="primary" size="small" href="#contact">
            Get Involved
          </Button>
        </div>

        {/* Mobile Menu */}
        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;