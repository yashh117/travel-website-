import { Link } from "react-router-dom";
import "./TravelServices.css";

const TravelServices = () => {
  const services = [
    {
      title: "Bus Rentals",
      icon: "🚌",
      description:
        "Comfortable and reliable bus rental services for group travel. Available in various sizes to accommodate your group.",
      features: [
        "AC & Non-AC options",
        "Multiple seating capacities",
        "Long-distance travel",
        "Experienced drivers",
        "Well-maintained fleet",
      ],
    },
    {
      title: "Tempo Traveller",
      icon: "🚐",
      description:
        "Perfect for medium-sized groups. Spacious and comfortable tempo travellers for short to medium distance trips.",
      features: [
        "12-17 seater options",
        "AC comfort",
        "Luggage space",
        "Ideal for family trips",
        "City & intercity travel",
      ],
    },
    {
      title: "Car Rentals",
      icon: "🚗",
      description:
        "Premium car rental services including sedans, SUVs, and luxury vehicles for personal and corporate use.",
      features: [
        "Sedan, SUV, Luxury options",
        "Self-drive & chauffeur-driven",
        "Hourly, daily, monthly packages",
        "Well-maintained vehicles",
        "24/7 support",
      ],
    },
    {
      title: "Group Travel",
      icon: "👥",
      description:
        "Comprehensive group travel solutions with customized itineraries and dedicated support for large groups.",
      features: [
        "Customized packages",
        "Group discounts",
        "Coordinated logistics",
        "Dedicated support team",
        "Flexible scheduling",
      ],
    },
  ];

  return (
    <div className="travel-services-page">
      <section className="page-hero">
        <div className="container">
          <h1>Travel & Transport Services</h1>
          <p>Reliable transport solutions for all your travel needs</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-subtitle">
            We offer a wide range of transport services to make your journey
            comfortable and hassle-free. All our vehicles are well-maintained
            and driven by experienced professionals.
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card-large">
                <div className="service-icon-large">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  <strong>Features:</strong>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="btn btn-primary service-btn">
                  Book Now / Enquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section info-section">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h3>Why Choose Us?</h3>
              <ul>
                <li>✓ Well-maintained fleet</li>
                <li>✓ Experienced drivers</li>
                <li>✓ Competitive pricing</li>
                <li>✓ 24/7 customer support</li>
                <li>✓ Flexible booking options</li>
                <li>✓ Transparent pricing</li>
              </ul>
            </div>
            <div className="info-card">
              <h3>Booking Process</h3>
              <ol>
                <li>Contact us via phone, email, or enquiry form</li>
                <li>Share your travel requirements</li>
                <li>Receive a customized quote</li>
                <li>Confirm your booking</li>
                <li>Enjoy your journey!</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need Transport for Your Next Trip?</h2>
            <p>Get in touch with us for the best rates and reliable service.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Send Enquiry
              </Link>
              <a href="tel:+919818080523" className="btn btn-secondary">
                Call:+91 98733 52002
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelServices;
