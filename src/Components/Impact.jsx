
// src/components/Impact.jsx

import React from 'react';
import PortfolioCard from './ui/PortfolioCard';
import './Impact.css';
// src/components/Impact.jsx
import beyondImage from '../assets/beyond_the_uniform.jpg';

const events = [
  {
    title: 'Beyond The Uniform',
    category: 'Empowerment',
    date: 'September 2026',
    image: beyondImage,
    featured: true,
  },
  {
    title: 'Community Skills Development Training',
    category: 'Skills Development',
    date: 'August 2026',
    image: '/images/event-2.jpg',
    featured: false,
  },
  {
    title: 'Community Outreach Program',
    category: 'Community Outreach',
    date: 'July 2026',
    image: '/images/event-3.jpg',
    featured: false,
  },
  {
    title: 'Youth Development Initiative',
    category: 'Youth Development',
    date: 'June 2026',
    image: '/images/event-4.jpg',
    featured: false,
  },
];

const Impact = () => {
  return (
    <section id="impact" className="portfolio">
      <div className="container">

        <div className="section-title">
          <span className="section-tag">OUR IMPACT</span>

          <h2>
            Creating <span>Impact</span> Through Action
          </h2>

          <p>
            From empowerment programs to community outreach, we are taking
            practical steps to improve lives and create opportunities for
            individuals and communities.
          </p>
        </div>

        {/* Most Recent Event */}
        <div className="latest-event">
          <div className="latest-event-image">
            <img
              src={events[0].image}
              alt={events[0].title}
            />
          </div>

          <div className="latest-event-content">
            <span className="event-label">MOST RECENT</span>

            <span className="event-category">
              {events[0].category}
            </span>

            <h3 className='event-title'>{events[0].title}</h3>

            <p>
              {events[0].date}
            </p>

            <a href="#contact" className="event-button">
              Learn More
            </a>
          </div>
        </div>

        {/* All Events */}
        <div className="events-header">
          <div>
            <span className="section-tag">OUR ACTIVITIES</span>
            <h3>Events & Activities</h3>
          </div>

          <p>
            Explore some of the programs, outreaches, and empowerment
            activities through which we create meaningful change.
          </p>
        </div>

        <div className="portfolio-grid">
          {events.slice(1).map((event, index) => (
            <PortfolioCard
              key={index}
              {...event}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Impact;
