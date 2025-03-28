import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-section">
          <h3>HorizonAfrika</h3>
          <p>
            Kenya's leading tour and travels booking website. Over 30,000
            packages worldwide.
          </p>
        </div>

        {/* Middle Section */}
        {/* <div className="footer-section">
          <h4>QUICK ACCESS</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/packages">Packages</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div> */}

        {/* Right Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>
            Join the thousands of other followers on our social platforms and
            get our latest offers
          </p>
          <div className="social-links">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="mailto:info@horizonafrika.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
