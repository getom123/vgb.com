// src/components/Testimonials.jsx
import React, { useState } from 'react';
import './Testimonials.css';

const testimonials = [
  { name: 'Sarah Johnson', role: 'CEO, TechStart', text: 'Incredible work! Transformed our online presence completely.' },
  { name: 'Michael Chen', role: 'Marketing Director', text: 'The team delivered beyond expectations. Highly recommend!' },
  { name: 'Emma Davis', role: 'Founder, Creative Co', text: 'Professional, creative, and results-driven. A pleasure to work with.' },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-title">
          <h2>What Clients Say</h2>
          <p>Trusted by businesses worldwide</p>
        </div>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="quote">"</div>
            <p className="testimonial-text">{testimonials[current].text}</p>
            <h4>{testimonials[current].name}</h4>
            <p className="client-role">{testimonials[current].role}</p>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${current === idx ? 'active' : ''}`}
                onClick={() => setCurrent(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;