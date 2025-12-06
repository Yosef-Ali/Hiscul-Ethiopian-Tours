import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <section className="page-hero contact-hero">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you and help plan your Ethiopian adventure</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Have questions about our tours or want to create a custom itinerary?
                Our team is here to help you plan the perfect Ethiopian experience.
              </p>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">&#128205;</div>
                  <h3>Visit Us</h3>
                  <p>Bole Road, Atlas Building</p>
                  <p>4th Floor, Office 402</p>
                  <p>Addis Ababa, Ethiopia</p>
                </div>

                <div className="info-card">
                  <div className="info-icon">&#128222;</div>
                  <h3>Call Us</h3>
                  <p>+251 11 123 4567</p>
                  <p>+251 91 234 5678</p>
                  <p className="info-note">Available 24/7</p>
                </div>

                <div className="info-card">
                  <div className="info-icon">&#9993;</div>
                  <h3>Email Us</h3>
                  <p>info@hiscultours.com</p>
                  <p>bookings@hiscultours.com</p>
                  <p className="info-note">Response within 24 hours</p>
                </div>
              </div>

              <div className="office-hours">
                <h3>Office Hours</h3>
                <ul>
                  <li><span>Monday - Friday:</span> 8:00 AM - 6:00 PM</li>
                  <li><span>Saturday:</span> 9:00 AM - 4:00 PM</li>
                  <li><span>Sunday:</span> By appointment</li>
                </ul>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">&#10004;</div>
                  <h3>Thank You!</h3>
                  <p>
                    Your message has been sent successfully. Our team will get back
                    to you within 24 hours.
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (123) 456-7890"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="booking">Tour Booking</option>
                      <option value="custom">Custom Tour Request</option>
                      <option value="group">Group Travel</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell us about your travel plans, questions, or how we can help..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What is the best time to visit Ethiopia?</h3>
              <p>
                The best time to visit is during the dry season from October to May.
                However, different regions and experiences may have optimal times.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do I need a visa to visit Ethiopia?</h3>
              <p>
                Most nationalities can obtain an e-visa online before travel.
                We can assist with visa guidance for your specific country.
              </p>
            </div>
            <div className="faq-item">
              <h3>Are your tours suitable for solo travelers?</h3>
              <p>
                Absolutely! We welcome solo travelers and can arrange private tours
                or help you join small group departures.
              </p>
            </div>
            <div className="faq-item">
              <h3>What vaccinations do I need?</h3>
              <p>
                Yellow fever vaccination is required. We recommend consulting your
                doctor about malaria prophylaxis and other recommended vaccines.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
