import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/signupclient.css";

const LoginClient = ({ closeModal, onAuthSuccess }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login/client", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        // Store token in local storage
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("isAuthenticated", "true");

        // Trigger Navbar update
        window.dispatchEvent(new Event("authChange"));

        // Trigger authentication success
        onAuthSuccess();

        // Close the modal
        closeModal();
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2>Log In</h2>
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button className="submit-button" type="submit">
            Log In
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

// PropTypes Validation
LoginClient.propTypes = {
  closeModal: PropTypes.func.isRequired,
  onAuthSuccess: PropTypes.func.isRequired,
};

export default LoginClient;
