import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaPhone } from "react-icons/fa";
import LoginClient from "./LoginClient";
import "../styles/paymentpage.css";

const MpesaPayment = () => {
  const location = useLocation();
  const price = location.state?.price ?? 0;
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [isPaid, setIsPaid] = useState(false); // Track payment status
  const [showLogin, setShowLogin] = useState(false); // State for login modal
  const navigate = useNavigate();

  const handlePayment = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setShowLogin(true); // Show login modal if user is not authenticated
      return;
    }

    if (!phone) {
      setMessage("Please enter a valid phone number.");
      return;
    }

    const package_id = location.state?.package_id; // Ensure package_id is provided

    if (!package_id) {
      setMessage("Package ID is missing. Please select a package first.");
      return;
    }

    setLoading(true);
    try {
      console.log("Token:", token);
      console.log(
        "Sending request to:",
        `${import.meta.env.VITE_BACKEND_URL}/packages/initiate-payment`
      );
      console.log("Payload:", {
        phone_number: phone,
        package_id,
        amount: price,
      });

      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/packages/initiate-payment`,
        { phone_number: phone, package_id, amount: price },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);
      setMessage(response.data.ResponseDescription || "Payment successful!");
      setIsPaid(true);
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data);
        setMessage(error.response.data.message || "Payment Failed");
      } else {
        console.error("Network error:", error);
        setMessage("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-container">
      {showLogin && (
        <LoginClient
          closeModal={() => setShowLogin(false)}
          onAuthSuccess={() => setShowLogin(false)}
        />
      )}

      <div className="Mpesa-logo"></div>
      <div className="payment-content">
        <h2>
          Payment <span className="highlight">Method</span>
        </h2>
        <hr className="hrline-mpesa" />
        <h3>M-PESA</h3>
        <div className="payment-box">
          <label htmlFor="phone-number">Enter Phone Number</label>
          <div className="input-group">
            <FaPhone className="input-icon" />
            <input
              type="text"
              id="phone-number"
              placeholder="e.g. 254712345678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={isPaid}
            />
          </div>
          <p className="customer-message">
            <strong>Dear Customer,</strong>
            <br />
            You'll receive an M-PESA prompt shortly to complete your payment.
          </p>
          <p>
            <strong>Amount: Ksh {price}</strong>
          </p>
          <button onClick={handlePayment} disabled={loading || isPaid}>
            {isPaid
              ? "Processed "
              : loading
              ? "Processing..."
              : "Pay with M-Pesa"}
          </button>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default MpesaPayment;
