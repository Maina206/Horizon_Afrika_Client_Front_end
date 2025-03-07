import React from "react";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleBookNowClick = () => {
    navigate("/safari-packages"); // Navigate to safari-packages
  };

  const destinations = [
    { id: 1, name: "Mombasa", image: "src/images/Mombasa.jpeg" },
    { id: 2, name: "Flamingos", image: "src/images/Flamingos.jpg" },
    { id: 3, name: "Sunset Safari", image: "src/images/Sunset Safari.jpg" },
  ];

  const packages = [
    {
      id: 1,
      title: "2 Days 1 Night Beach Camping Trip",
      image: "src/images/Beach trip.jpg",
      price: "24,000",
      nights: "1 Night",
    },
    {
      id: 2,
      title: "3 Days 2 Nights Safari Adventure",
      image: "src/images/Safari Adventure.jpg",
      price: "35,000",
      nights: "2 Nights",
    },
    {
      id: 3,
      title: "4 Days 3 Nights Coastal Tour",
      image: "src/images/Coastal Tour.jpeg",
      price: "45,000",
      nights: "3 Nights",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Amazing Packages Available! </h1>
          <h2 className="home-h2">Enjoy Some Adventure In The Wild!</h2>
          <button className="book-now" onClick={handleBookNowClick}>
            Book Now
          </button>
        </div>
      </section>

      {/* Quick Links */}
      {/* <div className="quick-links">
        {destinations.slice(0, 4).map((dest) => (
          <img key={dest.id} src={dest.image} alt={dest.name} />
        ))}
      </div> */}

      {/* Popular Destinations */}
      <section className="destinations">
        <h2>
          Popular <span>Destinations</span>
        </h2>
        <hr className="hrline" />
        <p>
          Explore the stunning landscapes and diverse wildlife of Kenya, from
          national reserve safaris to traditional Swahili culture. <br />
          Immerse yourself in the unique experiences this destination has to
          offer.
        </p>
        <div className="destination-grid">
          {destinations.map((dest) => (
            <div key={dest.id} className="destination-card">
              <img src={dest.image} alt={dest.name} />
              <h3>{dest.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Packages */}
      <section className="packages">
        <h2>
          Recommended <span>Packages</span>
        </h2>
        <hr className="hrline" />
        <div className="package-grid">
          {packages.map((pkg) => (
            <div key={pkg.id} className="package-card">
              <img src={pkg.image} alt={pkg.title} />
              <div className="package-info">
                <h3>{pkg.title}</h3>
                <p>KSH {pkg.price}</p>
                <p>{pkg.nights}</p>
                <button className="book-now" onClick={handleBookNowClick}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Travel Reviews */}
      <section className="reviews">
        <h2>
          Travel <span>Reviews</span>
        </h2>
        <hr className="hrline" />
        <div className="review-grid">
          {[1, 2, 3].map((review) => (
            <div key={review} className="review-card">
              <div className="reviewer-profile">
                <img src="src/images/Female Avatar.jpeg" alt="Reviewer" />
                <h3>Aura Atarah</h3>
              </div>
              <p>
                I recently took a 3-day guided hiking tour of Tsavo National
                Park with Horizon Afrika. Overall, I had a fantastic experience
                and would highly recommend them to anyone looking for an
                immersive outdoor adventure
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
