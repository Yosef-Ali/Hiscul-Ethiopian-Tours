import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="page-hero about-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>About Us</h1>
          <p>Your trusted partner for authentic Ethiopian experiences</p>
        </div>
      </section>

      <section className="about-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <h2>Welcome to Hiscul Ethiopian Tours</h2>
              <p>
                Founded in Addis Ababa, Hiscul Ethiopian Tours is a locally-owned and operated tour
                company dedicated to sharing the wonders of Ethiopia with travelers from around the world.
                Our deep roots in Ethiopian culture and our extensive knowledge of the country's diverse
                landscapes allow us to create meaningful, transformative travel experiences.
              </p>
              <p>
                We believe that travel should be more than sightseeing - it should be an opportunity
                to connect with people, understand different ways of life, and create memories that
                last a lifetime. That's why every tour we design emphasizes authentic encounters,
                sustainable practices, and genuine cultural exchange.
              </p>
            </div>
            <div className="intro-image">
              <img
                src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600"
                alt="Ethiopian landscape"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="our-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">&#127759;</div>
              <h3>Authenticity</h3>
              <p>
                We create genuine experiences that go beyond tourist attractions, connecting you with
                the real Ethiopia and its people.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">&#127793;</div>
              <h3>Sustainability</h3>
              <p>
                We are committed to responsible tourism that benefits local communities and preserves
                Ethiopia's natural and cultural heritage.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">&#128101;</div>
              <h3>Community</h3>
              <p>
                We employ local guides, partner with community-owned accommodations, and ensure tourism
                benefits reach Ethiopian communities.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">&#11088;</div>
              <h3>Excellence</h3>
              <p>
                From planning to execution, we maintain the highest standards to ensure your Ethiopian
                adventure exceeds expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <div className="why-grid">
            <div className="why-image">
              <img
                src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600"
                alt="Ethiopian culture"
              />
            </div>
            <div className="why-content">
              <h2>Why Choose Us</h2>
              <div className="why-items">
                <div className="why-item">
                  <h4>Local Expertise</h4>
                  <p>Our team consists of Ethiopian natives with deep knowledge of local culture, history, and hidden gems.</p>
                </div>
                <div className="why-item">
                  <h4>Customized Itineraries</h4>
                  <p>We tailor every tour to your interests, fitness level, and travel style for a personalized experience.</p>
                </div>
                <div className="why-item">
                  <h4>Small Group Focus</h4>
                  <p>We keep groups small to ensure quality experiences and minimize environmental impact.</p>
                </div>
                <div className="why-item">
                  <h4>24/7 Support</h4>
                  <p>Our team is available around the clock to assist you before, during, and after your journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Meet Our Team</h2>
          <p className="section-subtitle">
            Passionate locals dedicated to sharing Ethiopia's wonders
          </p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <div className="team-placeholder">AT</div>
              </div>
              <h3>Abebe Teshome</h3>
              <span className="team-role">Founder & Lead Guide</span>
              <p>
                With 15+ years of guiding experience, Abebe has led thousands of travelers through
                Ethiopia's historic routes.
              </p>
            </div>
            <div className="team-card">
              <div className="team-image">
                <div className="team-placeholder">HG</div>
              </div>
              <h3>Hana Girma</h3>
              <span className="team-role">Operations Manager</span>
              <p>
                Hana ensures every tour runs smoothly, from logistics to accommodations, creating
                seamless travel experiences.
              </p>
            </div>
            <div className="team-card">
              <div className="team-image">
                <div className="team-placeholder">DM</div>
              </div>
              <h3>Daniel Mekonnen</h3>
              <span className="team-role">Cultural Expert</span>
              <p>
                An anthropologist by training, Daniel specializes in Omo Valley tribal tours and
                cultural immersion experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <h2>Ready to Explore Ethiopia?</h2>
          <p>Let us help you plan your perfect Ethiopian adventure</p>
          <div className="cta-buttons">
            <Link to="/tours" className="btn btn-primary">Browse Tours</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
