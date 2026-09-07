// src/components/Portfolio.jsx
import React from 'react';
import PortfolioCard from './ui/PortfolioCard';
import './Portfolio.css';

const projects = [
  { title: 'FinTech Dashboard', category: 'Web App', image: '#1e3a8a' },
  { title: 'E-commerce Platform', category: 'Development', image: '#2563eb' },
  { title: 'Brand Identity Suite', category: 'Design', image: '#ea580c' },
  { title: 'Mobile Banking App', category: 'Mobile', image: '#fed7aa' },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Featured Work</h2>
          <p>Some of our best projects</p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;