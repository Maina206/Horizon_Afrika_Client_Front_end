import React, { useState, useEffect } from "react";
import "../styles/Home.css";
import { motion } from "framer-motion";

// Import all images
import heroImage1 from '../images/taras-chuiko-oPSXtUuPmjU-unsplash.jpg';
import heroImage2 from '../images/martijn-vonk-DkVcnJY2y0E-unsplash.jpg';
import heroImage3 from '../images/aiya.jpg';
import mombasaImage from '../images/harshil-gudka-77zGnfU_SFU-unsplash.jpg';
import nakuruImage from '../images/karen-uppal-zZKL-rzFvaE-unsplash.jpg';
import masaiImage from '../images/harshil-gudka-aKcVSSDotgo-unsplash.jpg';
import safariImage from '../images/Safari.jpg';
import dianiImage from '../images/michael-kyule-wK-I3D_XiDk-unsplash.jpg';
import mountKenyaImage from '../images/thai-an-t2Beq-N9_9g-unsplash.jpg';
import guideImage from '../images/guide.jpg';
import flockImage from '../images/flock.jpg';
import femaleAvatar from '../images/Female Avatar.jpeg';
import maleAvatar from '../images/Male Avatar.jpeg';
import youngFemaleAvatar from '../images/Young Female Avatar.jpeg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: heroImage1,
      title: "Discover the Magic of Kenya",
      subtitle: "Where Adventure Meets Luxury",
      text: "Experience unforgettable journeys through East Africa's most diverse landscapes"
    },
    {
      image: heroImage2,
      title: "Explore Wild Adventures",
      subtitle: "Safari Like Never Before",
      text: "Witness the great migration and encounter Africa's majestic wildlife"
    },
    {
      image: heroImage3,
      title: "Coastal Paradise",
      subtitle: "Relax in Tropical Bliss",
      text: "Discover pristine beaches and vibrant marine life along Kenya's coast"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const destinations = [
    { 
      id: 1, 
      name: "Mombasa", 
      image: mombasaImage,
      description: "Experience the vibrant coastal culture"
    },
    { 
      id: 2, 
      name: "Lake Nakuru", 
      image: nakuruImage,
      description: "Witness the majestic flamingo spectacle"
    },
    { 
      id: 3, 
      name: "Masai Mara", 
      image: masaiImage,
      description: "Discover the heart of African wildlife"
    },
  ];

  const packages = [
    {
      id: 1,
      title: "Maasai Mara Safari Escape",
      image: safariImage,
      price: "KSH 45,000",
      description: "Experience the thrill of the wild with our 3-day luxury safari package in the heart of Maasai Mara",
      highlights: ["Game drives", "Luxury tented camp", "Maasai village visit", "Bush dining"]
    },
    {
      id: 2,
      title: "Diani Beach Getaway",
      image: dianiImage,
      price: "KSH 35,000",
      description: "Unwind in paradise with our 2-day coastal retreat featuring pristine beaches and water activities",
      highlights: ["Snorkeling", "Beach dinner", "Water sports", "Spa treatment"]
    },
    {
      id: 3,
      title: "Mount Kenya Adventure",
      image: mountKenyaImage,
      price: "KSH 55,000",
      description: "Challenge yourself with a 4-day trek to Point Lenana, experiencing diverse landscapes and wildlife",
      highlights: ["Professional guide", "Equipment", "Mountain huts", "Park fees"]
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Aura Atarah",
      image: femaleAvatar,
      role: "Adventure Enthusiast",
      text: "I recently took a 3-day guided hiking tour of Tsavo National Park with Horizon Afrika. The attention to detail and professional service made this an unforgettable experience."
    },
    {
      id: 2,
      name: "James Kimani",
      image: maleAvatar,
      role: "Travel Photographer",
      text: "The coastal tour exceeded all expectations. The team's knowledge of local culture and hidden gems provided unique photo opportunities at every turn."
    },
    {
      id: 3,
      name: "Sarah Mitchell",
      image: youngFemaleAvatar,
      role: "Nature Lover",
      text: "From the moment we booked until the final goodbye, Horizon Afrika delivered excellence. The wildlife encounters were breathtaking and the accommodations perfect."
    }
  ];

  const features = [
    {
      icon: "🌍",
      title: "Expert Local Guides",
      description: "Our experienced guides ensure authentic and enriching experiences",
      image: guideImage
    },
    {
      icon: "💎",
      title: "Best Price Guarantee",
      description: "We offer competitive prices without compromising on quality",
      image: mombasaImage
    },
    {
      icon: "✨",
      title: "Customized Tours",
      description: "Tailor-made experiences to match your preferences",
      image: flockImage
    },
    {
      icon: "🛡️",
      title: "Safe Travel",
      description: "Your safety and comfort are our top priorities",
      image: guideImage
    }
  ];

  return (
    <div className="home">
      {/* Hero Section with Slides */}
      <section className="hero">
        <motion.div
          key={currentSlide}
          className="slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundImage: `url(${heroSlides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        >
          <div className="slide-content">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {heroSlides[currentSlide].text}
            </motion.p>
            <motion.button
              className="book-now"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
        <div className="slide-indicators">
          {heroSlides.map((_, index) => (
            <div 
              key={index} 
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="destinations">
        <div className="section-header">
          <h2>Popular <span>Destinations</span></h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Explore the stunning landscapes and diverse wildlife of Kenya, from pristine beaches to majestic savannas
          </p>
        </div>
        <div className="destination-grid">
          {destinations.map((dest) => (
            <div key={dest.id} className="destination-card">
              <div className="card-image">
                <img src={dest.image} alt={dest.name} />
              </div>
              <div className="card-overlay">
                <h3>{dest.name}</h3>
                <p>{dest.description}</p>
                <button className="explore-btn">Explore</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-header">
          <h2>Why Choose <span>Us</span></h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Discover what makes us the perfect choice for your Kenyan adventure
          </p>
        </div>
        <div className="options">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="option"
              style={{
                backgroundImage: `url(${feature.image})`
              }}
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="icon">{feature.icon}</div>
                <div className="info">
                  <div className="main">{feature.title}</div>
                  <div className="sub">{feature.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recommended Packages */}
      <section className="packages">
        <div className="section-header">
          <h2>Curated <span>Experiences</span></h2>
          <div className="section-line"></div>
        </div>
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="package-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="package-image">
                <img src={pkg.image} alt={pkg.title} />
                <div className="package-overlay">
                  <span className="package-price">{pkg.price}</span>
                </div>
              </div>
              <div className="package-content">
                <h3>{pkg.title}</h3>
                <p>{pkg.description}</p>
                <div className="package-highlights">
                  {pkg.highlights.map((highlight, idx) => (
                    <span key={idx} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
                <motion.button 
                  className="explore-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Package
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <motion.div 
          className="newsletter-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for exclusive travel updates and special offers</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Travel Reviews */}
      <section className="reviews">
        <div className="section-header">
          <h2>Traveller <span>Reviews</span></h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Hear what our travelers say about their unforgettable experiences
          </p>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="reviewer-profile">
                <img src={review.image} alt={review.name} />
                <div className="reviewer-info">
                  <h3>{review.name}</h3>
                  <span>{review.role}</span>
                </div>
              </div>
              <p>{review.text}</p>
              <div className="review-quote">"</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
