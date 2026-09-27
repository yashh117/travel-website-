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
              <img src="/images/logo.png" alt="VKSRADIAL SOLUTIONS Logo" className="footer-logo-img" />
              <div className="footer-logo-text">
                <h3>VKSRADIAL SOLUTIONS</h3>
                <span>PVT. LTD.</span>
              </div>
            </div>
            <p className="footer-brand-desc">{t("footer.description")}</p>
            <div className="footer-social-row">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-icon instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-icon facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.309c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-icon linkedin">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452H17.24V14.8c0-1.355-.027-3.099-1.888-3.099-1.89 0-2.18 1.477-2.18 3v5.75H9.032V9h3.06v1.56h.043c.426-.807 1.466-1.66 3.018-1.66 3.227 0 3.824 2.125 3.824 4.888v6.264zM5.337 7.433A1.771 1.771 0 115.336 3.89a1.771 1.771 0 01.001 3.543zM6.998 20.452H3.675V9h3.323v11.452z"/>
                </svg>
              </a>
            </div>
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
                <a href="tel:+919873352002" className="footer-contact-val">+91 98733 52002</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <div className="footer-contact-info">
                <span className="footer-contact-label">{t("contact.email")}</span>
                <a href="mailto:sushil@radialtoursindia.com" className="footer-contact-val">sushil@radialtoursindia.com</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">💬</span>
              <div className="footer-contact-info">
                <span className="footer-contact-label">{t("contact.whatsapp")}</span>
                <a href="https://wa.me/919873352002" target="_blank" rel="noopener noreferrer" className="footer-contact-val">+91 98733 52002</a>
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
          <p>© {new Date().getFullYear()} VKSRADIAL SOLUTIONS PVT. LTD. {t("footer.copyright")}</p>
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
