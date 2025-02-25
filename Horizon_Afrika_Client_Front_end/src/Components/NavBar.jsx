import React from 'react';
// import { Link } from 'react-router-dom';
import '../assets/images/NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
         <Link to="/" className="logo">
          HorizonAfrika
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/destinations" className="nav-item">Destinations</Link>
        <Link to="/safari-packages" className="nav-item">Safari Packages</Link>
        <Link to="/about" className="nav-item">About Us</Link>
      </div>

      <div className="nav-buttons">
        <Link to="/contact" className="contact-btn">Contact</Link>
        <button className="profile-btn">
          <i className="fas fa-user-circle"></i>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;