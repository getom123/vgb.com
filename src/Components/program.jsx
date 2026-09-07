
// src/components/Services.jsx

import React from 'react';
import ServiceCard from './ui/ServiceCard';
import './program.css';

const programs = [
  {
    icon: 'fas fa-tools',
    title: 'Skills Development',
    description:
      'We equip individuals with practical, vocational, digital, and entrepreneurial skills that create pathways to sustainable livelihoods.',
  },
  {
    icon: 'fas fa-person-dress',
    title: 'Women Empowerment',
    description:
      'We support women with skills, knowledge, resources, and opportunities that promote economic independence and self-reliance.',
  },
  {
    icon: 'fas fa-users',
    title: 'Youth Development',
    description:
      'We help young people develop practical skills, discover their potential, and access opportunities for personal and economic growth.',
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Entrepreneurship & Livelihoods',
    description:
      'We provide entrepreneurship knowledge and support that helps individuals turn their skills and ideas into sustainable sources of income.',
  },
  {
    icon: 'fas fa-hand-holding-heart',
    title: 'Community Outreach',
    description:
      'We organize outreach initiatives that respond to genuine community needs and provide support to people in need with dignity and compassion.',
  },
  {
    icon: 'fas fa-bullseye',
    title: 'Empowerment Opportunities',
    description:
      'We connect people with resources, training, mentorship, and opportunities that enable them to improve their livelihoods and create lasting impact.',
  },
];

const Services = () => {
  return (
    <section id="our-programs" className="services">
      <div className="container">

        <div className="section-title">
          <span className="section-tag">WHAT WE DO</span>

          <h2>
            Our <span>Programs</span>
          </h2>

          <p>
            Practical programs designed to equip people with the skills,
            resources, and opportunities they need to build better futures.
          </p>
        </div>

        <div className="services-grid">
          {programs.map((program, index) => (
            <ServiceCard
              key={index}
              {...program}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
