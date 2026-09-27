import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          {/* ── Brand ── */}
          <div className="footer-section footer-brand">
            <div className="footer-logo-row">
              <div className="footer-logo-text">
                <h3>Travel Website</h3>
              </div>
            </div>
            <p className="footer-brand-desc">{t("footer.description")}</p>
          </div>

          {/* ── Quick Links ── */}
          <div className="footer-section">
            <h4>{t("footer.quickLinks")}</h4>
            <ul>
              <li><Link to="/">{t("nav.home")}</Link></li>
              <li><Link to="/tours">{t("nav.tours")}</Link></li>
              <li><Link to="/travel-services">{t("nav.travelServices")}</Link></li>
              <li><Link to="/event-management">{t("nav.eventManagement")}</Link></li>
              <li><Link to="/corporate-bookings">{t("nav.corporateBookings")}</Link></li>
              <li><Link to="/gallery">{t("nav.gallery")}</Link></li>
              <li><Link to="/contact">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* ── Services ── */}
          <div className="footer-section">
            <h4>{t("footer.services")}</h4>
            <ul>
              <li><a href="/tours?tour=golden-triangle">{t("footer.services_list.golden")}</a></li>
              <li><a href="/tours?tour=north-east">{t("footer.services_list.northEast")}</a></li>
              <li><a href="/travel-services">{t("footer.services_list.bus")}</a></li>
              <li><a href="/travel-services">{t("footer.services_list.tempo")}</a></li>
              <li><a href="/travel-services">{t("footer.services_list.car")}</a></li>
              <li><a href="/event-management">{t("footer.services_list.event")}</a></li>
              <li><a href="/corporate-bookings">{t("footer.services_list.corporate")}</a></li>
            </ul>
          </div>

          {/* ── Contact ── */}
          <div className="footer-section">
            <h4>{t("footer.contactUs")}</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <div className="footer-contact-info">
                <span className="footer-contact-label">{t("contact.phone")}</span>
                <a href="tel:+911234567890" className="footer-contact-val">+91 12345 67890</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <div className="footer-contact-info">
                <span className="footer-contact-label">{t("contact.email")}</span>
                <a href="mailto:info@example.com" className="footer-contact-val">info@example.com</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">💬</span>
              <div className="footer-contact-info">
                <span className="footer-contact-label">{t("contact.whatsapp")}</span>
                <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="footer-contact-val">+91 12345 67890</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <div className="footer-contact-info">
                <span className="footer-contact-label">{t("footer.address")}</span>
                <span className="footer-contact-val">Plaza 106, Sector 103,<br/>Gurugram, Haryana</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Travel Website. {t("footer.copyright")}</p>
          <div className="footer-bottom-links">
            <Link to="/contact">{t("footer.privacy")}</Link>
            <Link to="/contact">{t("footer.terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
