// src/components/CTA.jsx
import React from 'react';
import Button from './ui/Button';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta">
      <div className="container cta-container">
        <h2>Ready to Grow Your Business?</h2>
        <p>Let's create something amazing together. Book a free consultation today.</p>
        <Button variant="primary" size="large">Get Started Now →</Button>
      </div>
    </section>
  );
};

export default CTA;