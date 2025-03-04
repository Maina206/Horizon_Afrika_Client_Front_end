import "../styles/paymentpage.css";
import { FaPhone } from "react-icons/fa";

const MpesaPayment = () => {
  return (
    <div className="payment-container">
      <div className="payment-content">
        <h2>
          Payment <span className="highlight">Method</span>
        </h2>
        <h3>M-PESA</h3>
        <div className="payment-box">
          <label htmlFor="phone-number">Enter Phone Number</label>
          <div className="input-group">
            <FaPhone className="input-icon" />
            <input
              type="text"
              id="phone-number"
              placeholder="e.g. 254712345678"
            />
          </div>
          <p className="customer-message">
            <strong>Dear Customer,</strong>
            <br />
            Shortly you'll receive an M-PESA prompt on your phone to enter your
            M-PESA pin to complete payment. Thank You.
          </p>
          <p>You can also go to M-PESA and follow the following steps:</p>
          <ol>
            <li>Go to the M-PESA menu.</li>
            <li>Select Lipa na Mpesa.</li>
            <li>Select the Paybill option.</li>
            <li>Enter business number 247247.</li>
            <li>Enter the account number 0717403603.</li>
            <li>Enter the amount.</li>
            <li>Enter PIN and Press OK.</li>
            <li>
              You'll receive a confirmation message with your payment reference
              number.
            </li>
          </ol>
          <div className="payment-button">
            <button className="pay-button">
              Pay <span>via</span> Mobile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MpesaPayment;
