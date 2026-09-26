// src/components/Impact.jsx

import React, { useState } from 'react';
import PortfolioCard from './ui/PortfolioCard';
import './Impact.css';
import beyondImage from '../assets/beyond_the_uniform.jpg';
import bithdayOrphanageImage from '../assets/vgb_orphanage.jpg';
import carepackImage from '../assets/vgb_carpack.jpg';

const events = [
  {
    title: 'Beyond The Uniform',
    category: 'Empowerment',
    date: 'September 2026',
    location: 'Osun State',
    image: beyondImage,
    featured: true,
    description:
      'Beyond The Uniform is an empowerment initiative designed to equip young people with practical skills, knowledge, and opportunities beyond their traditional educational or career paths.',
    howToJoin:
      'Contact VGB Foundation through our contact page or social media platforms to register your interest and receive participation details.',
  },
  {
    title: 'Orphanage Visit & Birthday Celebration',
    category: 'Orphanage Visit',
    date: '17th, July 2026',
    location: 'Osun State',
    image: bithdayOrphanageImage,
    featured: false,
    description:
      'Join Us To Spread Love And Hope! Every Gift Counts! Whether Big Or Small, Your Support Can Brighten A Child’s Life.',
    howToJoin:
      'Interested participants can contact VGB Foundation for information about upcoming training sessions and registration.',
  },
  {
    title: 'Care Pack initiative',
    category: 'Community Outreach',
    date: '23rd, May 2026',
    location: 'OsunState',
    image: carepackImage,
    featured: false,
    description:
      'Some Elderly People In Our Community Go Days Without Proper Meals...Not Because They Don’t Matter, But Because Help Hasn’t Reached Them Yet. Join us and let us feed and give to them.',
    howToJoin:
      'You can participate by volunteering, supporting the outreach, or contacting VGB Foundation to learn about upcoming activities.',
  }
];

const Impact = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <section id="impact" className="portfolio">
      <div className="container">

        {/* Section Heading */}
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

        {/* Events */}
        <div className="portfolio-grid">
          {events.map((event, index) => (
            <div
              key={index}
              className="event-card-wrapper"
              onClick={() => setSelectedEvent(event)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedEvent(event);
                }
              }}
            >
              <PortfolioCard {...event} />
            </div>
          ))}
        </div>

      </div>

      {/* =========================================
          EVENT MODAL
      ========================================= */}

      {selectedEvent && (
        <div
          className="event-modal-overlay"
          onClick={closeModal}
        >
          <div
            className="event-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              className="event-modal-close"
              onClick={closeModal}
              aria-label="Close event details"
            >
              &times;
            </button>

            {/* Modal Image */}
            <div className="event-modal-image">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
              />

              <span
                className={`modal-event-tag ${
                  selectedEvent.featured ? 'recent-tag' : ''
                }`}
              >
                {selectedEvent.featured
                  ? 'MOST RECENT'
                  : selectedEvent.category}
              </span>
            </div>

            {/* Modal Content */}
            <div className="event-modal-content">

              <span className="modal-category">
                {selectedEvent.category}
              </span>

              <h2>{selectedEvent.title}</h2>

              <div className="event-details">

                <div className="event-detail">
                  <span className="detail-icon">📅</span>

                  <div>
                    <small>Date</small>
                    <strong>{selectedEvent.date}</strong>
                  </div>
                </div>

                <div className="event-detail">
                  <span className="detail-icon">📍</span>

                  <div>
                    <small>Location</small>
                    <strong>{selectedEvent.location}</strong>
                  </div>
                </div>

              </div>

              <div className="event-description">
                <h4>About This Event</h4>

                <p>
                  {selectedEvent.description}
                </p>
              </div>

              <div className="event-join">
                <h4>How to Join</h4>

                <p>
                  {selectedEvent.howToJoin}
                </p>
              </div>

              <a
                href="#contact"
                className="event-modal-button"
                onClick={closeModal}
              >
                Get Involved
              </a>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Impact;