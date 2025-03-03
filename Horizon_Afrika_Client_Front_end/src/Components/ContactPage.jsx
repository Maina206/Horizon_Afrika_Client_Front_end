import React from "react";
import { MapPin, Phone } from "lucide-react";
import "../styles/ContactPage.css";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="contact-grid">
      <div className="contact-info">
        <h3 className="section-title">Our Contacts</h3>
        <div className="contact-item">
          <Phone className="icon" size={20} />
          <span>+254 758 391642</span>
        </div>
        <div className="contact-item">
          <MapPin className="icon" size={20} />
          <div className="address">
            <p>KENYA</p>
            <p>Behind IFG, 10th st</p>
            <p>Block E Room 5 101</p>
          </div>
        </div>
      </div>

      <div className="contact-form-container">
        <h3 className="section-title">Send Us A Message</h3>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Name"
            required
            className="form-input"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="form-input"
          />
          <input
            type="tel"
            placeholder="Phone"
            required
            className="form-input"
          />
          <textarea
            placeholder="Leave a Comment"
            rows={4}
            required
            className="form-textarea"
          ></textarea>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="page-container">
      <main>
        <div className="hero-section">
          <div className="overlay"></div>
          <div className="hero-content">
            <h1>Contact The Travel Pros</h1>
            <p>
              Your journey starts here - connect with us to start planning your
              next adventure!
            </p>
          </div>
        </div>
        <ContactForm />
      </main>
    </div>
  );
};

export default ContactPage;
