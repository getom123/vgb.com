// src/components/Services.jsx
import React from 'react';
import ServiceCard from './ui/ServiceCard';
import './Services.css';

const services = [
  {
    icon: '🚀',
    title: 'Digital Strategy',
    description: 'Data-driven strategies to accelerate your business growth.',
  },
  {
    icon: '🎨',
    title: 'Web Design',
    description: 'Beautiful, conversion-focused websites that engage users.',
  },
  {
    icon: '📱',
    title: 'App Development',
    description: 'Native and cross-platform mobile applications.',
  },
  {
    icon: '📈',
    title: 'SEO Marketing',
    description: 'Rank higher and drive organic traffic to your site.',
  },
  {
    icon: '💡',
    title: 'Brand Identity',
    description: 'Create a memorable brand that stands out.',
  },
  {
    icon: '🤝',
    title: 'Social Media',
    description: 'Grow your audience and engage with customers.',
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive solutions tailored to your needs</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;