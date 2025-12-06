import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { tours } from '../data/tours';
import './TourDetail.css';

function TourDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tour = tours.find(t => t.id === parseInt(id));

  if (!tour) {
    return (
      <div className="tour-not-found">
        <div className="container">
          <h1>Tour Not Found</h1>
          <p>The tour you're looking for doesn't exist.</p>
          <Link to="/tours" className="btn btn-primary">View All Tours</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="tour-detail">
      <section className="tour-hero" style={{ backgroundImage: `url(${tour.image})` }}>
        <div className="tour-hero-overlay"></div>
        <div className="tour-hero-content">
          <button className="back-btn" onClick={() => navigate(-1)}>
            &larr; Back
          </button>
          <span className="tour-category">{tour.category}</span>
          <h1>{tour.name}</h1>
          <div className="tour-meta">
            <span className="tour-duration">{tour.duration}</span>
            <span className="tour-price">From ${tour.price} per person</span>
          </div>
        </div>
      </section>

      <section className="tour-content">
        <div className="container">
          <div className="tour-grid">
            <div className="tour-main">
              <div className="tour-section">
                <h2>Overview</h2>
                <p>{tour.longDescription}</p>
              </div>

              <div className="tour-section">
                <h2>Tour Highlights</h2>
                <ul className="highlights-list">
                  {tour.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="tour-section">
                <h2>What's Included</h2>
                <div className="included-grid">
                  <div className="included-item">
                    <span className="included-icon">&#10004;</span>
                    <span>Professional English-speaking guide</span>
                  </div>
                  <div className="included-item">
                    <span className="included-icon">&#10004;</span>
                    <span>All accommodations (hotels/lodges)</span>
                  </div>
                  <div className="included-item">
                    <span className="included-icon">&#10004;</span>
                    <span>All meals as per itinerary</span>
                  </div>
                  <div className="included-item">
                    <span className="included-icon">&#10004;</span>
                    <span>All entrance fees</span>
                  </div>
                  <div className="included-item">
                    <span className="included-icon">&#10004;</span>
                    <span>Private transportation</span>
                  </div>
                  <div className="included-item">
                    <span className="included-icon">&#10004;</span>
                    <span>Airport transfers</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="tour-sidebar">
              <div className="booking-card">
                <h3>Book This Tour</h3>
                <div className="booking-price">
                  <span className="price-label">Starting from</span>
                  <span className="price-amount">${tour.price}</span>
                  <span className="price-per">per person</span>
                </div>
                <ul className="booking-details">
                  <li>
                    <strong>Duration:</strong> {tour.duration}
                  </li>
                  <li>
                    <strong>Group Size:</strong> 2-12 people
                  </li>
                  <li>
                    <strong>Difficulty:</strong> Moderate
                  </li>
                </ul>
                <Link to="/contact" className="btn btn-primary btn-block">
                  Inquire Now
                </Link>
                <p className="booking-note">
                  Have questions? <Link to="/contact">Contact us</Link> for a custom quote.
                </p>
              </div>

              <div className="help-card">
                <h4>Need Help?</h4>
                <p>Our travel experts are here to assist you.</p>
                <p className="help-phone">+251 11 123 4567</p>
                <p className="help-email">info@hiscultours.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="related-tours">
        <div className="container">
          <h2>You Might Also Like</h2>
          <div className="related-grid">
            {tours
              .filter(t => t.id !== tour.id && t.category === tour.category)
              .slice(0, 2)
              .map(relatedTour => (
                <Link to={`/tours/${relatedTour.id}`} key={relatedTour.id} className="related-card">
                  <img src={relatedTour.image} alt={relatedTour.name} />
                  <div className="related-info">
                    <h3>{relatedTour.name}</h3>
                    <span>{relatedTour.duration} | From ${relatedTour.price}</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TourDetail;
