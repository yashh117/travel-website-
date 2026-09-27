import { Link, useSearchParams, useNavigate } from "react-router-dom";
import "./Tours.css";
import { tourImages } from "../data/tourImages";
import { tourPackages } from "../data/tourPackages";

const Tours = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedTour = searchParams.get("tour");

  const nationalTours = [
    {
      id: "golden-triangle",
      slug: "golden-triangle",
      title: "Golden Triangle",
      duration: "5 Days",
      description:
        "Visit Delhi, Agra, and Jaipur — the most popular tourist circuit in India. Iconic monuments, royal heritage, and vibrant culture await.",
      highlights: ["Taj Mahal", "Amber Fort", "Red Fort", "Local Markets"],
      image: tourImages.national.goldenTriangle,
      badge: "Most Popular",
      packages: 4,
    },
    {
      id: "north-east",
      slug: "north-east",
      title: "North East ",
      duration: "8 Days",
      description:
        "Discover the unexplored beauty of Northeast India and Sikkim with pristine nature, monasteries, and stunning mountain landscapes.",
      highlights: ["Kaziranga National Park", "Monasteries", "Tea Gardens", "Tiger Hill"],
      image: "/images/tours/darjeeling.jpg",
      badge: "Adventure",
      packages: 2,
    },
  ];

  // ─── Package listing for a selected tour ───────────────────────────────
  if (selectedTour && tourPackages[selectedTour]) {
    const tourData = tourPackages[selectedTour];
    const heroStyle = {
      backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.55) 0%, rgba(15,23,42,0.70) 100%), url("${tourData.heroImage}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };

    return (
      <div className="tours-page">
        <section className="page-hero pkg-hero" style={heroStyle}>
          <div className="container">
            <Link to="/tours" className="hero-back-link">
              ← All Tours
            </Link>
            <h1>{tourData.name}</h1>
            <p>{tourData.description}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="packages-header">
              <span className="section-kicker">Choose Your Package</span>
              <h2 className="section-title">Available Tour Packages</h2>
              <p className="section-subtitle">
                Click any package to see full details, itinerary, and customisation options
              </p>
            </div>

            <div className="packages-grid">
              {tourData.packages.map((pkg, index) => (
                <div
                  key={pkg.id}
                  className="package-card clickable-card"
                  style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
                  onClick={() => navigate(`/tours/${selectedTour}/packages/${pkg.id}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && navigate(`/tours/${selectedTour}/packages/${pkg.id}`)}
                  aria-label={`View details for ${pkg.name}`}
                >
                  <div className="package-image-wrapper">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="package-image"
                      loading="lazy"
                    />
                    <div className="package-badge">{pkg.duration}</div>
                    {pkg.price && <div className="package-price">{pkg.price}</div>}
                    <div className="pkg-hover-overlay">
                      <span className="pkg-view-btn">View Details →</span>
                    </div>
                  </div>

                  <div className="package-card-content">
                    <h3>{pkg.name}</h3>
                    <p className="package-description">{pkg.description}</p>

                    <div className="package-highlights">
                      <ul>
                        {pkg.highlights.slice(0, 4).map((highlight, i) => (
                          <li key={i}>{highlight}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="pkg-card-footer">
                      <span className="pkg-includes-count">
                        ✓ {pkg.includes.length} inclusions
                      </span>
                      <span className="pkg-click-hint">Click for details →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // ─── Default view: All Tours ────────────────────────────────────────────
  return (
    <div className="tours-page">
      <section className="page-hero">
        <div className="container">
          <span className="hero-kicker">Explore India & Beyond</span>
          <h1>Tours & Packages</h1>
          <p>
            Discover amazing destinations with our carefully curated tour packages —
            each one designed for unforgettable memories.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="section-kicker">National Tours</span>
          <h2 className="section-title">Explore India</h2>
          <p className="section-subtitle">
            Immerse yourself in the diverse beauty, history, and culture of India
          </p>

          <div className="tours-grid modern-tours-grid">
            {nationalTours.map((tour, index) => (
              <div
                key={tour.id}
                className="tour-card modern-tour-card"
                style={{ animationDelay: `${index * 0.15 + 0.1}s` }}
                onClick={() => navigate(`/tours?tour=${tour.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && navigate(`/tours?tour=${tour.slug}`)}
                aria-label={`Explore ${tour.title} packages`}
              >
                {/* Image section */}
                <div className="tour-image-wrapper">
                  {tour.image && (
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="tour-image"
                      loading="lazy"
                    />
                  )}
                  <div className="tour-image-gradient" />
                  {tour.badge && (
                    <span className="tour-badge">{tour.badge}</span>
                  )}
                  <div className="tour-pkg-count">
                    {tour.packages} Packages
                  </div>
                  <div className="tour-hover-overlay">
                    <span className="tour-explore-btn">Explore Packages →</span>
                  </div>
                </div>

                {/* Content */}
                <div className="tour-card-content">
                  <div className="tour-header">
                    <h3>{tour.title}</h3>
                    <span className="tour-duration">{tour.duration}</span>
                  </div>
                  <p className="tour-description">{tour.description}</p>

                  <div className="tour-highlights">
                    <ul>
                      {tour.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="tour-card-footer">
                    <span className="tour-footer-label">View all packages</span>
                    <span className="tour-arrow">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Custom Tour Packages Available</h2>
            <p>
              Don&apos;t see what you&apos;re looking for? We can create a
              customized tour package tailored to your preferences and budget.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Request Custom Package
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tours;
