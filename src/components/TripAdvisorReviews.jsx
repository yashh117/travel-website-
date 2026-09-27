import React from "react";
import "./TripAdvisorReviews.css";

const TripAdvisorReviews = ({ widgetUrl, tripAdvisorUrl }) => {
  const sampleReviews = [
    {
      id: 1,
      name: "Asha K.",
      rating: 5,
      date: "Jan 2025",
      text: "Excellent service and punctual transport. Highly recommend Travel Website!",
    },
    {
      id: 2,
      name: "Rahul S.",
      rating: 5,
      date: "Dec 2024",
      text: "Very smooth booking and great tour arrangement. The driver was professional.",
    },
    {
      id: 3,
      name: "Priya M.",
      rating: 4,
      date: "Nov 2024",
      text: "Good experience overall. Hotel choices were nice and itinerary was on time.",
    },
  ];

  return (
    <div className="tripadvisor-reviews">
      {widgetUrl ? (
        <div className="tripadvisor-widget">
          <iframe
            src={widgetUrl}
            title="TripAdvisor Reviews"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      ) : (
        <div className="reviews-grid">
          {sampleReviews.map((r) => (
            <div className="review-card" key={r.id}>
              <div className="review-header">
                <strong className="review-name">{r.name}</strong>
                <div className="review-rating">
                  {"★".repeat(r.rating)}
                  {"☆".repeat(5 - r.rating)}
                </div>
              </div>
              <div className="review-date">{r.date}</div>
              <p className="review-text">{r.text}</p>
            </div>
          ))}
        </div>
      )}

      <div className="tripadvisor-cta">
        <a
          href={tripAdvisorUrl || "https://www.tripadvisor.com/"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          View more on TripAdvisor
        </a>
        <p className="widget-note">
          Tip: If you have an official TripAdvisor widget URL you can pass it to
          the component via the widgetUrl prop to embed live reviews.
        </p>
      </div>
    </div>
  );
};

export default TripAdvisorReviews;
