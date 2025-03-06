import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import { Link } from "react-router-dom";
import SignUpClient from "./SignUpClient";
import LoginClient from "./LoginClient";
import "../styles/NavBar.css";

const Navbar = () => {
  // State for the dropdown, modals, and user authentication
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status from localStorage on component mount
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(userLoggedIn);
  }, []);

  // Listen for authentication changes
  useEffect(() => {
    const handleAuthChange = () => {
      const userLoggedIn = localStorage.getItem("isAuthenticated") === "true";
      setIsAuthenticated(userLoggedIn);
    };

    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  // Handle successful sign-up or login
  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
    setIsSignUpModalOpen(false);
    setIsSignInModalOpen(false);
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("authChange"));
  };

  // Toggle dropdown
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Open and close modals
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
          {/* Replace <a> tags with <Link> */}
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/safari-packages">Safari Packages</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div className="right-links">
          <Link to="/contact" className="contact-button">
            Contact
          </Link>
          <div className="avatar" onClick={toggleDropdown}>
            {isAuthenticated ? (
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>

      {/* Render Modals */}
      {isSignUpModalOpen && (
        <SignUpClient
          closeModal={closeSignUpModal}
          onAuthSuccess={handleAuthSuccess}
        />
      )}
      {isSignInModalOpen && (
        <LoginClient
          closeModal={closeSignInModal}
          onAuthSuccess={handleAuthSuccess}
        />
      )}
    </nav>
  );
};

export default Navbar;
