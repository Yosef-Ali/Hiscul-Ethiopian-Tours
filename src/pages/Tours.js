import React, { useState } from 'react';
import TourCard from '../components/TourCard';
import { tours, categories } from '../data/tours';
import './Tours.css';

function Tours() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredTours = selectedCategory === 'all'
    ? tours
    : tours.filter(tour => tour.category === selectedCategory);

  return (
    <div className="tours-page">
      <section className="page-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Our Tours</h1>
          <p>Explore our carefully crafted Ethiopian adventures</p>
        </div>
      </section>

      <section className="tours-section">
        <div className="container">
          <div className="tour-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="tours-count">
            Showing {filteredTours.length} tour{filteredTours.length !== 1 ? 's' : ''}
          </div>

          <div className="tours-grid">
            {filteredTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="no-tours">
              <p>No tours found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="tours-cta">
        <div className="container">
          <h2>Can't find what you're looking for?</h2>
          <p>We specialize in creating custom itineraries tailored to your interests and schedule</p>
          <a href="/contact" className="btn btn-primary">Request Custom Tour</a>
        </div>
      </section>
    </div>
  );
}

export default Tours;
