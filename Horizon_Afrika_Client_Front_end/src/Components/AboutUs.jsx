import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.span
            className="pre-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Discover the Beauty of
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Horizon Africa
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the untamed beauty of Kenya through our curated
            adventures
          </motion.p>
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              y: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            <span>Scroll to discover</span>
            <div className="scroll-arrow"></div>
          </motion.div>
        </div>
        <div className="hero-shapes">
          <motion.div
            className="shape shape-1"
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>
          <motion.div
            className="shape shape-2"
            animate={{
              rotate: -360,
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>
        </div>
      </section>

      {/* Adventure Section */}
      <section className="adventure-section">
        <div className="adventure-grid">
          <div className="adventure-image">
            <img src="/src/images/Hiking.jpg" alt="Hiking adventure" />
          </div>
          <div className="adventure-text">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Adventure Travel</h2>
              <p>
                Experience the thrill of exploring Kenya's most breathtaking
                landscapes and hidden gems with our expert guides.
              </p>
              <Link to="/destinations" className="learn-more">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <img src="/src/images/damn.jpg" alt="Mountain view" />
            <div className="feature-content">
              <h3>Mountain Climbing</h3>
              <p>
                Scale the heights of Mt. Kenya and experience stunning views
                from the summit.
              </p>
            </div>
          </div>
          <div className="feature-text">
            <h2>We Offer The Best Adventure Travel</h2>
            <p>
              Our experienced team crafts unique adventures that combine
              thrilling experiences with cultural immersion.
            </p>
          </div>
          <div className="feature-card">
            <img src="/src/images/Safari.jpg" alt="Safari adventure" />
            <div className="feature-content">
              <h3>Safari Adventures</h3>
              <p>
                Witness the incredible wildlife in their natural habitat across
                Kenya's national parks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-overlay"></div>
        <div className="stats-grid">
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="stat-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2v20M2 12h20"></path>
              </svg>
            </div>
            <motion.h3
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              15+
            </motion.h3>
            <p>Years of Experience</p>
          </motion.div>
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="stat-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <motion.h3
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              5000+
            </motion.h3>
            <p>Happy Travelers</p>
          </motion.div>
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="stat-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <motion.h3
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              100+
            </motion.h3>
            <p>Destinations</p>
          </motion.div>
          <motion.div
            className="stat-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="stat-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <motion.h3
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              24/7
            </motion.h3>
            <p>Support Available</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery-grid">
          <div className="gallery-text">
            <h2>Discover Our Adventures</h2>
            <p>
              From mountain peaks to coastal paradises, we offer diverse
              experiences for every type of adventurer.
            </p>
            <Link to="/gallery" className="view-gallery">
              View Gallery
            </Link>
          </div>
          <div className="gallery-images">
            <img src="/src/images/culture.jpg" alt="Adventure 1" />
            <img src="src/images/girrafe.jpg" alt="Adventure 2" />
            <img src="src/images/guide.jpg" alt="Adventure 3" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-content">
          <h2>Ready for Your Next Adventure?</h2>
          <p>
            Contact us to start planning your unforgettable journey through
            Kenya.
          </p>
          <Link to="/contact" className="contact-btn">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
