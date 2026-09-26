
// src/components/Footer.jsx

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-content">

          {/* Foundation Info */}
          <div className="footer-section footer-about">

            <img
              src="/src/assets/vgb_logo.png"
              alt="VGB Foundation Logo"
              className="footer-logo"
            />

            <p>
              Empowering youth and women with practical skills, resources,
              and opportunities to build sustainable livelihoods and create
              positive change in their communities.
            </p>

            {/* Social Media */}
            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

          </div>


          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>

            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#our-programs">Our Programs</a></li>
              <li><a href="#impact">Impact</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>


        


          {/* Contact */}
          <div className="footer-section">
            <h4>Get In Touch</h4>

            <p>
              <strong>Email</strong><br />
              info@vgbfoundation.org
            </p>

            <p>
              <strong>Phone</strong><br />
              +234 704 290 7904
            </p>

            <a href="#contact" className="footer-donate">
              Support Us
            </a>
          </div>

        </div>


        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} VGB Foundation.
            All rights reserved.
          </p>

          <p>
            Empowering People. Creating Impact.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
