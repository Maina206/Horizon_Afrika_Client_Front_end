import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTemperatureHigh,
} from "react-icons/fa";
import "../styles/DestinationPage.css";

const destinations = [
  {
    image: "src/images/eelco-bohtlingk-0qMtkAwqQTw-unsplash.jpg",
    name: "Mount Kenya",
    description: "Experience the majesty of Africa's second-highest peak",
    location: "Central Kenya",
    bestTime: "December to March",
    weather: "15°C",
    category: "Adventure",
  },
  {
    image: "src/images/hari-nandakumar-OanogeRGrGQ-unsplash.jpg",
    name: "Masai Mara",
    description: "Witness the great migration in nature's theater",
    location: "Southwest Kenya",
    bestTime: "July to October",
    weather: "25°C",
    category: "Safari",
  },
  {
    image: "src/images/eelco-bohtlingk-kaD9-g6hLLs-unsplash.jpg",
    name: "Amboseli",
    description: "Where elephants roam beneath Kilimanjaro",
    location: "Southern Kenya",
    bestTime: "June to October",
    weather: "22°C",
    category: "Safari",
  },
  {
    image: "src/images/michael-kyule-wK-I3D_XiDk-unsplash.jpg",
    name: "Diani Beach",
    description: "Crystal waters meet pristine white sands",
    location: "Coastal Kenya",
    bestTime: "December to March",
    weather: "28°C",
    category: "Beach",
  },
];

const exploreCards = [
  {
    id: 1,
    title: "Safari Adventures",
    description:
      "Embark on an unforgettable journey through Kenya's most spectacular wildlife reserves.",
    image: "src/images/guide.jpg",
    details:
      "Track lions in the Masai Mara, witness the great migration, and experience luxury camping under the stars.",
  },
  {
    id: 2,
    title: "Coastal Paradise",
    description:
      "Discover pristine beaches and crystal-clear waters along Kenya's stunning coastline.",
    image: "src/images/harshil-gudka-77zGnfU_SFU-unsplash.jpg",
    details:
      "Dive into coral reefs, sail on traditional dhows, and enjoy fresh seafood on white sand beaches.",
  },
  {
    id: 3,
    title: "Mountain Expeditions",
    description:
      "Challenge yourself with treks through Kenya's majestic mountains.",
    image: "src/images/damn.jpg",
    details:
      "Scale Mount Kenya's peaks, explore diverse ecosystems, and witness breathtaking alpine landscapes.",
  },
  {
    id: 4,
    title: "Cultural Immersion",
    description: "Experience the rich heritage of Kenya's diverse communities.",
    image: "src/images/flock.jpg",
    details:
      "Visit traditional villages, learn ancient crafts, and participate in cultural ceremonies.",
  },
];

const DestinationPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % destinations.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (cardId) => {
    setActiveCard(activeCard === cardId ? null : cardId);
  };

  return (
    <div className="destination-page">
      <section className="hero-section">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="hero-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="slide-background"
              style={{
                backgroundImage: `url(${destinations[currentSlide].image})`,
              }}
            />
            <div className="hero-content">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {destinations[currentSlide].name}
              </motion.h1>
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="hero-description"
              >
                {destinations[currentSlide].description}
              </motion.p>
              <div className="destination-info">
                <div className="info-item">
                  <FaMapMarkerAlt />
                  <span>{destinations[currentSlide].location}</span>
                </div>
                <div className="info-item">
                  <FaCalendarAlt />
                  <span>Best Time: {destinations[currentSlide].bestTime}</span>
                </div>
                <div className="info-item">
                  <FaTemperatureHigh />
                  <span>{destinations[currentSlide].weather}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="slide-controls">
          {destinations.map((_, index) => (
            <button
              key={index}
              className={`slide-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="explore-section">
        <div className="section-title">
          <h2>Explore Kenya</h2>
          <p>Discover the magic of East Africa's most diverse destination</p>
        </div>
        <div className="explore-grid">
          {exploreCards.map((card) => (
            <motion.div
              key={card.id}
              className={`explore-card ${
                activeCard === card.id ? "active" : ""
              }`}
              onClick={() => handleCardClick(card.id)}
              whileHover={{ y: -10 }}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${card.image})`,
              }}
            >
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>
                  {activeCard === card.id ? card.details : card.description}
                </p>
                <button className="explore-btn">
                  {activeCard === card.id ? "Show Less" : "Explore More"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DestinationPage;
