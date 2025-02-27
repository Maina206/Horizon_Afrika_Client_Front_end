import { useState } from "react";
import { Menu, X, User } from "lucide-react";
import SignUpClient from "./SignUpClient";
import LoginClient from "./LoginClient";
import "../styles/NavBar.css";

const Navbar = () => {
  // State for the dropdown and modals
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle functions
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
    setDropdownOpen(false);
  };

  const closeSignUpModal = () => setIsSignUpModalOpen(false);

  const openSignInModal = () => {
    setIsSignInModalOpen(true);
    setDropdownOpen(false);
  };

  const closeSignInModal = () => setIsSignInModalOpen(false);

  return (
    <nav className="navbar">
      <hr className="hr-line" />
      <div className="nav-brand">
        <h1 className="logo">
          Horizon<span>Afrika</span>
        </h1>
      </div>

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <div className="center-links">
          <a href="/">Home</a>
          <a href="/destinations">Destinations</a>
          <a href="/safari-packages">Safari Packages</a>
          <a href="/about">About Us</a>
        </div>
        <div className="right-links">
          <button className="contact-button">Contact</button>
          <div className="avatar" onClick={toggleDropdown}>
            <User size={24} />
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button className="dropdown-item" onClick={openSignUpModal}>
                  Sign Up
                </button>
                <button className="dropdown-item" onClick={openSignInModal}>
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Render Modals */}
      {isSignUpModalOpen && <SignUpClient closeModal={closeSignUpModal} />}
      {isSignInModalOpen && <LoginClient closeModal={closeSignInModal} />}
    </nav>
  );
};

export default Navbar;
