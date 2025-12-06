import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Hiscul Ethiopian Tours</h3>
          <p>
            Discover the beauty, history, and culture of Ethiopia with our expertly crafted tours.
            From ancient churches to tribal villages, we bring you authentic Ethiopian experiences.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/tours">Our Tours</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Popular Tours</h4>
          <nav className="footer-nav">
            <Link to="/tours/1">Historic Route</Link>
            <Link to="/tours/2">Danakil Depression</Link>
            <Link to="/tours/3">Omo Valley</Link>
            <Link to="/tours/4">Bale Mountains</Link>
          </nav>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <p>Bole Road, Addis Ababa</p>
            <p>Ethiopia</p>
            <p>+251 11 123 4567</p>
            <p>info@hiscultours.com</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hiscul Ethiopian Tours. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
