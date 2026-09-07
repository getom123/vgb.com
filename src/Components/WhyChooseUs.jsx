// src/components/WhyChooseUs.jsx
import React from 'react';
import './WhyChooseUs.css';

const features = [
  { title: 'Expert Team', desc: 'Years of experience across industries' },
  { title: 'Fast Delivery', desc: 'Agile methodology, timely results' },
  { title: '24/7 Support', desc: 'Always here when you need us' },
  { title: 'Transparent Pricing', desc: 'No hidden fees, honest quotes' },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Us</h2>
          <p>What makes us different</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;