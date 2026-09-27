import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Map from "../components/Map";
import "./Home.css";

const companyLocation = {
  name: "Plaza 106",
  sector: "103",
  city: "Gurugram",
  state: "Haryana",
  country: "India",
  latitude: 28.4746,
  longitude: 76.9881,
};

const Home = () => {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  const services = [
    {
      title: t("home.services_list.tours.title"),
      description: t("home.services_list.tours.desc"),
      icon: "✈️",
      link: "/tours",
      linkText: t("home.services_list.tours.cta"),
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=400&fit=crop",
    },
    {
      title: t("home.services_list.travel.title"),
      description: t("home.services_list.travel.desc"),
      icon: "🚌",
      link: "/travel-services",
      linkText: t("home.services_list.travel.cta"),
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
    },
    {
      title: t("home.services_list.events.title"),
      description: t("home.services_list.events.desc"),
      icon: "🎉",
      link: "/event-management",
      linkText: t("home.services_list.events.cta"),
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
    },
    {
      title: t("home.services_list.corporate.title"),
      description: t("home.services_list.corporate.desc"),
      icon: "🏢",
      link: "/corporate-bookings",
      linkText: t("home.services_list.corporate.cta"),
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    },
  ];

  const whyUs = [
    { icon: "🏅", title: t("home.whyUs.experience.title"), desc: t("home.whyUs.experience.desc") },
    { icon: "🤝", title: t("home.whyUs.personalised.title"), desc: t("home.whyUs.personalised.desc") },
    { icon: "💰", title: t("home.whyUs.price.title"), desc: t("home.whyUs.price.desc") },
    { icon: "📞", title: t("home.whyUs.support.title"), desc: t("home.whyUs.support.desc") },
  ];

  const aboutFeatures = t("home.about.features", { returnObjects: true });

  return (
    <div className="home">
      {/* ── Contact Popup ── */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setShowPopup(false)} aria-label="Close">×</button>
            <div className="popup-icon">📞</div>
            <h3>{t("home.popup.connect")}</h3>
            <p className="popup-tagline">{t("home.popup.tagline")}</p>
            <div className="popup-details">
              <a href="tel:+911234567890" className="popup-contact-item">
                <span className="popup-contact-icon">📱</span>
                <div>
                  <span className="popup-contact-label">{t("home.popup.phone")}</span>
                  <span className="popup-contact-val">+91 12345 67890</span>
                </div>
              </a>
              <a href="mailto:info@example.com" className="popup-contact-item">
                <span className="popup-contact-icon">✉️</span>
                <div>
                  <span className="popup-contact-label">{t("home.popup.email")}</span>
                  <span className="popup-contact-val">info@example.com</span>
                </div>
              </a>
            </div>
            <a
              href="https://wa.me/911234567890"
              className="btn btn-secondary popup-wa-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 &nbsp; {t("home.popup.whatsapp")}
            </a>
          </div>
        </div>
      )}

      {/* ── Hero ── */}
      <Hero />



      {/* ── Why Us ── */}
      <section className="section why-us-section">
        <div className="container">
          <span className="section-eyebrow">{t("home.whyUs.eyebrow")}</span>
          <h2 className="section-title">{t("home.whyUs.title")}</h2>
          <p className="section-subtitle">{t("home.whyUs.subtitle")}</p>
          <div className="why-us-grid">
            {whyUs.map((item, i) => (
              <div key={i} className="why-us-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="why-us-icon">{item.icon}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section services-section">
        <div className="container">
          <span className="section-eyebrow">{t("home.services.eyebrow")}</span>
          <h2 className="section-title">{t("home.services.title")}</h2>
          <p className="section-subtitle">{t("home.services.subtitle")}</p>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section about-section">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-text">
              <span className="section-eyebrow">{t("home.about.eyebrow")}</span>
              <h2 className="about-heading">{t("home.about.heading")}</h2>
              <p>{t("home.about.p1")}</p>
              <p>{t("home.about.p2")}</p>
              <div className="about-features">
                {Array.isArray(aboutFeatures)
                  ? aboutFeatures.map((f, i) => (
                      <div key={i} className="feature-item">
                        <span className="feature-icon">✓</span>
                        <span>{f}</span>
                      </div>
                    ))
                  : null}
              </div>
              <Link to="/contact" className="btn btn-primary about-cta">
                {t("home.about.cta")}
              </Link>
            </div>
            <div className="about-visual">
              <div className="about-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop"
                  alt="Travel and Tourism"
                  className="about-image"
                />
                <div className="about-image-badge">
                  <span className="about-badge-num">10+</span>
                  <span className="about-badge-txt">{t("home.about.badge")}</span>
                </div>
              </div>
            </div>
          </div>
          <Map location={companyLocation} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <span className="cta-badge">🌍 &nbsp; {t("home.cta.badge")}</span>
            <h2>{t("home.cta.title")}</h2>
            <p>{t("home.cta.subtitle")}</p>
            <div className="cta-buttons">
              <button onClick={() => setShowPopup(true)} className="btn btn-primary">
                {t("home.cta.getInTouch")}
              </button>
              <a href="tel:+911234567890" className="btn btn-ghost">
                📞 &nbsp; {t("home.cta.callNow")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
