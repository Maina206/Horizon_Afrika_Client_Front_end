import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/signupclient.css";

const SignUpClient = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for Password Match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone_number: formData.phone,
        gender: formData.gender,
        password: formData.password,
      };

      const response = await fetch(`http://localhost:5000/register/client`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();

        // Store token in local storage
        localStorage.setItem("token", data.token);

        // Trigger Navbar update
        window.dispatchEvent(new Event("authChange"));

        // Close the modal
        closeModal();

        // Reset form data
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          gender: "",
          password: "",
          confirmPassword: "",
        });

        setSuccessMessage("Sign up successful!");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Sign up failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="signup-modal-overlay">
      <div className="signup-modal-container">
        <div className="modal-header">
          <h2>Sign Up</h2>
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
        </div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <div className="gender-options">
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                required
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                required
              />
              Female
            </label>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button className="submit-button" type="submit">
            Sign Up
          </button>
          {error && <p className="error-message">{error}</p>}
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
        </form>
        <div className="modal-footer">
          <p>
            Already have an Account? <a href="/login">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

// PropTypes Validation
SignUpClient.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default SignUpClient;
