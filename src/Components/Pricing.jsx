// src/components/Pricing.jsx
import React from 'react';
import PricingCard from './ui/PricingCard';
import './Pricing.css';

const plans = [
  { name: 'Starter', price: '$299', features: ['Basic SEO', '5 Pages', 'Email Support'], popular: false },
  { name: 'Professional', price: '$599', features: ['Advanced SEO', '15 Pages', 'Priority Support', 'Analytics'], popular: true },
  { name: 'Enterprise', price: 'Custom', features: ['Full SEO', 'Unlimited Pages', '24/7 Support', 'Dedicated Manager'], popular: false },
];

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <div className="section-title">
          <h2>Pricing Plans</h2>
          <p>Choose the perfect plan for your business</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;