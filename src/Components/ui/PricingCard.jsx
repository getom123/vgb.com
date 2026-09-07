// src/components/ui/PricingCard.jsx
import React from 'react';
import Button from './Button';
import './PricingCard.css';

const PricingCard = ({ name, price, features, popular }) => {
  return (
    <div className={`pricing-card ${popular ? 'popular' : ''}`}>
      {popular && <div className="popular-badge">Most Popular</div>}
      <h3>{name}</h3>
      <div className="price">
        <span className="amount">{price}</span>
        {price !== 'Custom' && <span className="period">/month</span>}
      </div>
      <ul className="features-list">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <Button variant={popular ? 'primary' : 'outline'}>Get Started</Button>
    </div>
  );
};

export default PricingCard;