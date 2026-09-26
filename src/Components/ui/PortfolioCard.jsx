import React from 'react';
import './PortfolioCard.css';

const PortfolioCard = ({
  title,
  category,
  date,
  image,
  featured,
}) => {
  return (
    <article className="portfolio-card">

      <div className="portfolio-card-image">
        <img
          src={image}
          alt={title}
        />

        {/* Event Tag */}
        <span
          className={`portfolio-card-tag ${
            featured ? 'recent-tag' : ''
          }`}
        >
          {featured ? 'MOST RECENT' : category}
        </span>
      </div>

      <div className="portfolio-card-content">

        <span className="portfolio-card-category">
          {category}
        </span>

        <h3>{title}</h3>

        <p>{date}</p>

      </div>

    </article>
  );
};

export default PortfolioCard;