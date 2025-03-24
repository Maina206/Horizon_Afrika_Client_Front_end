import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/reviews.css";

export default function ReviewsModal({ packageId, onClose }) {
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You need to be signed in to submit a review.");
      return;
    }

    const response = await fetch("http://127.0.0.1:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        package_id: packageId,
        rating,
        review_texts: reviewText,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      onClose(); // Close the modal
      navigate("/safari-packages"); // Navigate back to the packages page
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="reviews-modal-overlay">
      <div className="reviews-modal-container">
        <button
          className="reviews-close-btn"
          onClick={() => {
            onClose(); // Close ReviewsModal
          }}
        >
          ×
        </button>
        <h2>Leave a Review</h2>

        <form onSubmit={handleSubmit}>
          <label>Rating:</label>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((num) => (
              <label key={num}>
                <input
                  type="radio"
                  name="rating"
                  value={num}
                  checked={rating === num}
                  onChange={() => setRating(num)}
                />
                {num}
              </label>
            ))}
          </div>

          <label>Review:</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          ></textarea>

          <button type="submit">Submit Review</button>
        </form>
      </div>
    </div>
  );
}
