// src/components/HowItWorks.jsx
import React from 'react';
import StepCard from './ui/StepCard';
import './HowItWorks.css';

const steps = [
  { number: '01', title: 'Discovery', description: 'We learn about your business and goals.' },
  { number: '02', title: 'Strategy', description: 'Create a tailored plan for success.' },
  { number: '03', title: 'Development', description: 'Build and iterate on solutions.' },
  { number: '04', title: 'Launch & Grow', description: 'Deploy and scale your results.' },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>How It Works</h2>
          <p>A simple 4-step process to get you results</p>
        </div>
        <div className="steps-container">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;