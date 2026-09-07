
// src/components/CTA.jsx

import React from 'react';
import Button from './ui/Button';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="container cta-container">

        <span className="cta-tag">MAKE A DIFFERENCE</span>

        <h2>
          Your Support Can <span>Change a Life</span>
        </h2>

        <p>
          Every contribution helps us provide skills, resources, and
          opportunities that empower youth, women, and communities to build
          sustainable livelihoods.
        </p>

        <Button variant="primary" size="large">
          Donate Now →
        </Button>

      </div>
    </section>
  );
};

export default CTA;
