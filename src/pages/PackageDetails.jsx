import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import TourCustomizationForm from "../components/TourCustomizationForm";
import { tourPackages } from "../data/tourPackages";
import "./PackageDetails.css";

/* ─── Itinerary renderer ─────────────────────────────────────────────────── */
const ItineraryRenderer = ({ itinerary }) => {
  const [openIndex, setOpenIndex] = useState(0);

  if (!itinerary) {
    return (
      <p className="pd-body-text">
        Detailed itinerary will be shared on request.
      </p>
    );
  }

  // Parse lines into day groups
  const lines = itinerary.split("\n").map((l) => l.trim()).filter(Boolean);
  const days = [];
  let current = null;

  lines.forEach((line) => {
    if (line.startsWith("Day ") || line.startsWith("Departure")) {
      if (current) days.push(current);
      current = { title: line, body: [] };
    } else {
      if (current) current.body.push(line);
      else days.push({ title: line, body: [] });
    }
  });
  if (current) days.push(current);

  if (days.length === 0) {
    return <p className="pd-body-text">{itinerary}</p>;
  }

  return (
    <div className="pd-itinerary-accordion">
      {days.map((day, idx) => (
        <div
          key={idx}
          className={`pd-accordion-item${openIndex === idx ? " pd-accordion-open" : ""}`}
        >
          <button
            className="pd-accordion-header"
            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            aria-expanded={openIndex === idx}
          >
            <div className="pd-accordion-header-inner">
              <span className="pd-day-dot">{idx + 1}</span>
              <span className="pd-day-title">{day.title}</span>
            </div>
            <span className="pd-accordion-chevron">
              {openIndex === idx ? "▲" : "▼"}
            </span>
          </button>
          {openIndex === idx && (
            <div className="pd-accordion-body">
              {day.body.map((line, i) => (
                <p key={i} className="pd-body-text">
                  {line}
                </p>
              ))}
              {day.body.length === 0 && (
                <p className="pd-body-text pd-body-muted">
                  Details will be shared on request.
                </p>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

/* ─── Main Component ─────────────────────────────────────────────────────── */
const PackageDetails = () => {
  const { tourSlug, packageId } = useParams();
  const tourData = tourPackages[tourSlug];
  const packageData = tourData?.packages.find(
    (pkg) => String(pkg.id) === packageId
  );

  if (!tourData || !packageData) {
    return (
      <div className="pd-page">
        <section className="pd-empty">
          <div className="container">
            <h1>Package Not Found</h1>
            <p>The package you are looking for is not available.</p>
            <Link to="/tours" className="btn btn-primary">
              Back to Tours
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const heroStyle = {
    backgroundImage: `linear-gradient(
      160deg,
      rgba(15,23,42,0.55) 0%,
      rgba(15,23,42,0.70) 100%
    ), url("${packageData.image}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="pd-page">
      {/* ── Hero ── */}
      <section className="pd-hero" style={heroStyle}>
        <div className="container">
          <Link to={`/tours?tour=${tourSlug}`} className="pd-back">
            ← Back to {tourData.name}
          </Link>
          <span className="pd-kicker">{tourData.name}</span>
          <h1>{packageData.name}</h1>
          <p className="pd-hero-desc">{packageData.description}</p>
          <div className="pd-meta-chips">
            <span className="pd-chip">
              <span className="pd-chip-icon">🕐</span>
              {packageData.duration}
            </span>
            {packageData.price && (
              <span className="pd-chip pd-chip-price">
                <span className="pd-chip-icon">₹</span>
                {packageData.price}
              </span>
            )}
            <span className="pd-chip">
              <span className="pd-chip-icon">📍</span>
              {tourData.name}
            </span>
          </div>
        </div>
      </section>

      {/* ── Highlight bar ── */}
      <div className="pd-highlight-bar">
        <div className="container">
          <ul className="pd-highlight-list">
            {packageData.highlights.map((h, i) => (
              <li key={i}>
                <span className="pd-hl-check">✓</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Main content ── */}
      <section className="pd-section">
        <div className="container pd-layout">
          {/* Left: main article */}
          <article className="pd-main">
            {/* Overview */}
            <div className="pd-panel">
              <h2 className="pd-panel-title">
                <span className="pd-panel-icon">📋</span> Package Overview
              </h2>
              <p className="pd-body-text">{packageData.description}</p>
              <div className="pd-info-grid">
                <div className="pd-info-item">
                  <span className="pd-info-label">Duration</span>
                  <span className="pd-info-value">{packageData.duration}</span>
                </div>
                <div className="pd-info-item">
                  <span className="pd-info-label">Tour Type</span>
                  <span className="pd-info-value">Daily Tour</span>
                </div>
                <div className="pd-info-item">
                  <span className="pd-info-label">Group Size</span>
                  <span className="pd-info-value">Flexible</span>
                </div>
                <div className="pd-info-item">
                  <span className="pd-info-label">Languages</span>
                  <span className="pd-info-value">English, Hindi</span>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="pd-panel">
              <h2 className="pd-panel-title">
                <span className="pd-panel-icon">⭐</span> Highlights
              </h2>
              <ul className="pd-check-list">
                {packageData.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="pd-panel">
              <h2 className="pd-panel-title">
                <span className="pd-panel-icon">🗺️</span> Day-by-Day Itinerary
              </h2>
              <ItineraryRenderer itinerary={packageData.itinerary} />
            </div>

            {/* Inclusions */}
            <div className="pd-panel">
              <h2 className="pd-panel-title">
                <span className="pd-panel-icon">✅</span> What&apos;s Included
              </h2>
              <ul className="pd-dot-list">
                {packageData.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          {/* Right: sidebar */}
          <aside className="pd-sidebar">
            {/* Price & enquiry card */}
            <div className="pd-enquiry-card">
              {packageData.price && (
                <div className="pd-price-header">
                  <span className="pd-price-from">from</span>
                  <span className="pd-price-value">{packageData.price}</span>
                </div>
              )}

              <div className="pd-sidebar-detail-rows">
                <div className="pd-detail-row">
                  <span className="pd-detail-label">Package</span>
                  <span className="pd-detail-val">{packageData.name}</span>
                </div>
                <div className="pd-detail-row">
                  <span className="pd-detail-label">Duration</span>
                  <span className="pd-detail-val">{packageData.duration}</span>
                </div>
                <div className="pd-detail-row">
                  <span className="pd-detail-label">Category</span>
                  <span className="pd-detail-val">{tourData.name}</span>
                </div>
              </div>

              <Link
                to={`/contact?service=${encodeURIComponent(packageData.name)}`}
                className="btn btn-primary pd-enquiry-btn"
              >
                Enquire Now
              </Link>
            </div>

            {/* Customization form */}
            <div className="pd-customize-wrapper">
              <TourCustomizationForm
                sectionTitle={tourData.name}
                packageName={packageData.name}
                packageDuration={packageData.duration}
              />
            </div>

            {/* Contact info */}
            <div className="pd-contact-card">
              <h3>Information Contact</h3>
              <a
                href="mailto:sushil@radialtoursindia.com"
                className="pd-contact-link"
              >
                ✉️ sushil@radialtoursindia.com
              </a>
              <a href="tel:+911234567890" className="pd-contact-link">
                📞 +91 12345 67890
              </a>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default PackageDetails;
