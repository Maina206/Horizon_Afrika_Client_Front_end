import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
// import { loginUser } from "../components/api";
import "../styles/clientlogin.css";

const LoginClient = ({ closeModal }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Uncomment when integrating API
      // const response = await loginUser(loginData.email, loginData.password);
      // localStorage.setItem("token", response.data.access_token);
      // localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/packages");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-modal-overlay">
      <div className="login-modal-container">
        <button className="login-modal-close" onClick={closeModal}>
          &times;
        </button>
        <h1 className="login-brand-name">HorizonAfrika</h1>
        <h2 className="login-welcome-message">Good to see you again</h2>
        <h3 className="login-user-role">Agent</h3>
        <form className="login-modal-form" onSubmit={handleSubmit}>
          {error && <p className="login-error-message">{error}</p>}
          <label>Email address</label>
          <div className="login-input-group">
            <span className="login-input-icon">
              <FaUser />
            </span>
            <input
              type="email"
              name="email"
              placeholder="e.g. elon@tesla.com"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>

          <label>Password</label>
          <div className="login-input-group">
            <span className="login-input-icon">
              <FaLock />
            </span>
            <input
              type="password"
              name="password"
              placeholder="e.g. ILoveMoringa@23"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-signin-button">
            Sign in
          </button>
        </form>
        <p className="login-signup-link">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

// Prop Validation
LoginClient.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default LoginClient;
