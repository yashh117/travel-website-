import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tourDropdownOpen, setTourDropdownOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const isActive = (path) => location.pathname === path;
  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const closeMenu = () => { setIsMenuOpen(false); setTourDropdownOpen(false); };

  const tourDestinations = {
    "golden-triangle": { name: "GOLDEN TRIANGLE TOUR" },
    "north-east":      { name: "NORTH EAST & SIKKIM"  },
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">

          {/* Logo */}
          <Link to="/" className="logo" onClick={closeMenu}>
            <div className="logo-text">
              <h2>Travel Website</h2>
            </div>
          </Link>

          {/* Hamburger */}
          <button
            className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          {/* Nav links */}
          <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" className={isActive("/") ? "active" : ""} onClick={closeMenu}>
                {t("nav.home")}
              </Link>
            </li>

            {/* Tours dropdown */}
            <li
              className="nav-item-dropdown"
              onMouseEnter={() => !window.matchMedia("(max-width: 1200px)").matches && setTourDropdownOpen(true)}
              onMouseLeave={() => !window.matchMedia("(max-width: 1200px)").matches && setTourDropdownOpen(false)}
            >
              <Link
                to="/tours"
                className={isActive("/tours") ? "active" : ""}
                onClick={(e) => {
                  if (window.matchMedia("(max-width: 1200px)").matches) {
                    e.preventDefault();
                    setTourDropdownOpen((v) => !v);
                  } else {
                    closeMenu();
                  }
                }}
              >
                {t("nav.tours")} <span className="dropdown-arrow">▼</span>
              </Link>
              {tourDropdownOpen && (
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    <div className="tour-categories">
                      {Object.entries(tourDestinations).map(([key, dest]) => (
                        <Link
                          key={key}
                          to={`/tours?tour=${key}`}
                          className="tour-category-link"
                          onClick={closeMenu}
                        >
                          {dest.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>

            <li>
              <Link to="/travel-services" className={isActive("/travel-services") ? "active" : ""} onClick={closeMenu}>
                {t("nav.travelServices")}
              </Link>
            </li>
            <li>
              <Link to="/event-management" className={isActive("/event-management") ? "active" : ""} onClick={closeMenu}>
                {t("nav.eventManagement")}
              </Link>
            </li>
            <li>
              <Link to="/corporate-bookings" className={isActive("/corporate-bookings") ? "active" : ""} onClick={closeMenu}>
                {t("nav.corporateBookings")}
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={isActive("/gallery") ? "active" : ""} onClick={closeMenu}>
                {t("nav.gallery")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className={isActive("/contact") ? "active" : ""} onClick={closeMenu}>
                {t("nav.contact")}
              </Link>
            </li>

            {/* Language selector — appears in sidebar on mobile too */}
            <li className="nav-lang-item">
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
