import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/safarimodal.css";
import ReviewsModal from "./ReviewsModal";

export default function SafariModal({ packageData, onClose }) {
  const [safariData, setSafariData] = useState(null);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (packageData) {
      console.log("Fetching package data for ID:", packageData.id); // Debugging
      fetch(
        `https://horizonafrika-backend.onrender.com/packages/${packageData.id}`
      )
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
          ×
        </button>
        <h2 className="safarimodal-h2">{safariData.package_name}</h2>

        <div className="modal-content">
          <div className="left-section">
            <div className="photo-gallery">
              <h3>Photo Gallery</h3>
              <div className="main-image">
                {photos.length > 0 && (
                  <img src={photos[0].photo_url} alt="Main gallery" />
                )}
              </div>
              <div className="thumbnail-gallery">
                {photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo.photo_url}
                    alt={`Gallery ${index}`}
                    className="gallery-img"
                  />
                ))}
              </div>
            </div>

            <div className="about-tour-section">
              <h3>About The Tour</h3>
              <div className="inclusions-exclusions">
                <div className="inclusions table-header">
                  <h4>Inclusions</h4>
                  <ul>
                    {inclusions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="exclusions table-header">
                  <h4>Exclusions</h4>
                  <ul>
                    {exclusions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="right-section">
            <div className="price">
              <p>Price:</p>
              <span>Ksh{safariData.price}</span>
            </div>

            <div className="trip-information">
              <h4>Trip Information</h4>
              <ul>
                <li>Location: {safariData.location}</li>
                <li>Day Count: {safariData.day_count}</li>
                <li>Package: {safariData.package_type}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button
            className="book-now-button"
            onClick={() =>
              navigate("/payment", {
                state: {
                  price: safariData?.price,
                  package_id: safariData?.id, // Ensure this is the correct property
                },
              })
            }
          >
            Book Now
          </button>

          <p className="review-text">
            Already experienced this adventure? Share your thoughts with us by
            <a
              href="safari-packages"
              onClick={(e) => {
                e.preventDefault(); // Prevents the page from jumping
                setIsReviewModalOpen(true); // Open ReviewsModal
              }}
            >
              {" "}
              leaving a review
            </a>
            .
          </p>
        </div>
      </div>
      {isReviewModalOpen && (
        <ReviewsModal
          packageId={safariData.id}
          onClose={() => {
            setIsReviewModalOpen(false);
            onClose(); // Close SafariModal AFTER ReviewsModal closes
          }}
        />
      )}
    </div>
  );
}
