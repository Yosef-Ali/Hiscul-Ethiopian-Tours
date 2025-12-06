import React from 'react';
import { Link } from 'react-router-dom';
import './TourCard.css';

function TourCard({ tour }) {
  return (
    <article className="tour-card">
      <div className="tour-card-image">
        <img src={tour.image} alt={tour.name} loading="lazy" />
        <span className="tour-card-category">{tour.category}</span>
      </div>
      <div className="tour-card-content">
        <h3 className="tour-card-title">{tour.name}</h3>
        <p className="tour-card-description">{tour.description}</p>
        <div className="tour-card-meta">
          <span className="tour-card-duration">{tour.duration}</span>
          <span className="tour-card-price">From ${tour.price}</span>
        </div>
        <Link to={`/tours/${tour.id}`} className="tour-card-btn">
          View Details
        </Link>
      </div>
    </article>
  );
}

export default TourCard;
