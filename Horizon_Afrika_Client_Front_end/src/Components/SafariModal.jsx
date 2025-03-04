import { useEffect, useState } from "react";
import "../styles/safarimodal.css";

export default function SafariModal({ packageData, onClose }) {
  const [safariData, setSafariData] = useState(null);

  useEffect(() => {
    if (packageData) {
      console.log("Fetching package data for ID:", packageData.id); // Debugging
      fetch(`http://127.0.0.1:5000/packages/${packageData.id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched Safari Data:", data); // Debugging
          setSafariData(data);
        })
        .catch((error) => console.error("Error fetching safari data:", error));
    }
  }, [packageData]);

  if (!packageData || !safariData) {
    console.log("Modal not rendering: packageData or safariData is null");
    return null;
  }

  // Safely handle undefined or null properties
  const photos = safariData.photos || [];
  const inclusions = safariData.inclusions
    ? safariData.inclusions.split(", ")
    : [];
  const exclusions = safariData.exclusions
    ? safariData.exclusions.split(", ")
    : [];

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{safariData.package_name}</h2>
        <div className="price">
          <span>Price: Ksh{safariData.price}</span>
        </div>

        <h3>Photo Gallery</h3>
        <div className="gallery">
          {photos.map((photo, index) => (
            <img
              key={index}
              src={photo.photo_url}
              alt={`Gallery ${index}`}
              className="gallery-img"
            />
          ))}
        </div>

        <h3>About The Tour</h3>
        <div className="about-tour">
          <p>{safariData.description || "No description available."}</p>
          <ul>
            {inclusions.map((item, index) => (
              <li key={index}>✅ {item}</li>
            ))}
          </ul>
        </div>

        <h3>Exclusions</h3>
        <div className="exclusions">
          <ul>
            {exclusions.map((item, index) => (
              <li key={index}>❌ {item}</li>
            ))}
          </ul>
        </div>

        <button className="book-now">Book Now</button>
      </div>
    </div>
  );
}
