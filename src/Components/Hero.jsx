// src/components/Hero.jsx
import React from 'react';
import Button from './ui/Button';
import './Hero.css';
import heroImg from './../assets/hero_image.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">

        <div className="hero-content">
          <h1>
            Empowering <span className="highlight">Youth & Women</span>
            <br />
            for a Better Future
          </h1>

          <p className="hero-subtext">
            We equip individuals with practical skills, entrepreneurship
            knowledge, resources, and opportunities to build sustainable
            livelihoods and contribute meaningfully to their communities.
          </p>

          <div className="hero-buttons">
            <Button variant="primary">Get Involved</Button>
            <Button variant="none" className="btn-outline">Learn More</Button>
          </div>

          <div className="hero-impact">
            <div className="impact-item">
              <strong>Skills</strong>
              <span>Development</span>
            </div>

            <div className="impact-item">
              <strong>Women</strong>
              <span>Empowerment</span>
            </div>

            <div className="impact-item">
              <strong>Youth</strong>
              <span>Development</span>
            </div>
          </div>

        </div>

        <div className="hero-image">

           <img
              src={heroImg}
              alt="VGB Foundation community empowerment"
            />

        </div>

      </div>
    </section>
  );
};

export default Hero;