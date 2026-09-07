// src/components/ui/ServiceCard.jsx
import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="#" className="service-link">Learn More →</a>
    </div>
  );
};

export default ServiceCard;