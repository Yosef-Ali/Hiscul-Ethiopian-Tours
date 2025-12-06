import React from 'react';
import { Link } from 'react-router-dom';
import TourCard from '../components/TourCard';
import { tours } from '../data/tours';
import './Home.css';

function Home() {
  const featuredTours = tours.slice(0, 3);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Discover Ethiopia</h1>
          <p>Experience the cradle of humanity, ancient civilizations, and breathtaking landscapes</p>
          <div className="hero-buttons">
            <Link to="/tours" className="btn btn-primary">Explore Tours</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">&#127968;</div>
              <h3>Historic Sites</h3>
              <p>Visit UNESCO World Heritage Sites including Lalibela's rock-hewn churches and Gondar's castles</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#127758;</div>
              <h3>Unique Landscapes</h3>
              <p>From the Danakil Depression to the Simien Mountains - Ethiopia's geography is unparalleled</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#127917;</div>
              <h3>Rich Culture</h3>
              <p>Immerse yourself in diverse traditions, coffee ceremonies, and vibrant festivals</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">&#128054;</div>
              <h3>Endemic Wildlife</h3>
              <p>Spot Ethiopian wolves, gelada baboons, and hundreds of unique bird species</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-tours">
        <div className="container">
          <div className="section-header">
            <h2>Featured Tours</h2>
            <p>Handpicked experiences to showcase the best of Ethiopia</p>
          </div>
          <div className="tours-grid">
            {featuredTours.map(tour => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/tours" className="btn btn-primary">View All Tours</Link>
          </div>
        </div>
      </section>

      <section className="why-ethiopia">
        <div className="container">
          <div className="why-grid">
            <div className="why-content">
              <h2>Why Visit Ethiopia?</h2>
              <p>
                Ethiopia stands apart as Africa's most historically significant and culturally rich destination.
                As the only African country never colonized, it has preserved its ancient traditions, unique
                alphabet, and centuries-old Orthodox Christian heritage.
              </p>
              <ul className="why-list">
                <li>Home to 9 UNESCO World Heritage Sites</li>
                <li>Birthplace of coffee and humanity</li>
                <li>Diverse landscapes from deserts to mountains</li>
                <li>Over 80 ethnic groups with unique cultures</li>
                <li>Authentic experiences away from mass tourism</li>
              </ul>
              <Link to="/about" className="btn btn-outline">Learn More About Us</Link>
            </div>
            <div className="why-image">
              <img
                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600"
                alt="Ethiopian landscape"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Travelers Say</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"The Historic Route tour exceeded all expectations. Our guide's knowledge brought the ancient sites to life in ways I never imagined."</p>
              <div className="testimonial-author">
                <strong>Sarah M.</strong>
                <span>United Kingdom</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"Visiting the Omo Valley tribes was a life-changing experience. Hiscul arranged everything perfectly and with great respect for local cultures."</p>
              <div className="testimonial-author">
                <strong>Michael K.</strong>
                <span>Germany</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"The Danakil Depression tour was challenging but absolutely worth it. The landscapes were unlike anything I've ever seen on Earth."</p>
              <div className="testimonial-author">
                <strong>Emma L.</strong>
                <span>Australia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Ready to Explore Ethiopia?</h2>
          <p>Let us craft your perfect Ethiopian adventure</p>
          <Link to="/contact" className="btn btn-primary btn-large">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
