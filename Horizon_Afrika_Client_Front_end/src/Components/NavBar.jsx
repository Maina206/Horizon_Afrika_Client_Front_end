import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import "../styles/NavBar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h1>
          Travel<span>Africa</span>
        </h1>
      </div>

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="/">Home</a>
        <a href="/destinations">Destinations</a>
        <a href="/safari-packages">Safari Packages</a>
        <a href="/contact">Contact</a>
        <button className="book-now">Book Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
