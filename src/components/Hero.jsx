import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./Hero.css";

/* ─── All images from public/images/heroimg ─────────────────────────── */
const SLIDES = [
  "/images/heroimg/9a2a35c1-3f7c-4694-a97b-ce7c97eef9b5.webp",
  "/images/heroimg/Mysore-Palace.jpg",
  "/images/heroimg/Places-to-Visit-in-India.jpg",
  "/images/heroimg/The-Best-of-South-India-Temples.webp",
  "/images/heroimg/chandni-chowk-delhi-2-attr-hero.jpg",
  "/images/heroimg/north-india-banner.webp",
  "/images/heroimg/premium_photo-1661919589683-f11880119fb7.avif",
  "/images/heroimg/best-places-to-visit-in-India.jpg",
  "/images/heroimg/360_F_282678242_thOpzrpvprGdSz0Bwp60cGWLfeavVC7E.jpg",
  "/images/heroimg/istockphoto-1164329797-612x612.jpg",
  "/images/heroimg/istockphoto-511119416-612x612.jpg",
];

const INTERVAL = 4500; // ms each slide stays visible

const Hero = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);

  /* Preload all images so the first crossfade is instant */
  useEffect(() => {
    SLIDES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  /* Crossfade cycle */
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % SLIDES.length);
        setNext((c) => (c + 2) % SLIDES.length);
        setFading(false);
      }, 1200); // crossfade duration
    }, INTERVAL);

    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (idx) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setNext((idx + 1) % SLIDES.length);
      setFading(false);
    }, 600);
  };

  return (
    <section className="hero" aria-label="Hero slideshow">
      {/* ── Background layers ── */}
      <div className="hero-bg-wrap">
        {/* Current slide — always visible */}
        <div
          className="hero-slide hero-slide-current"
          style={{ backgroundImage: `url(${SLIDES[current]})` }}
          aria-hidden="true"
        />
        {/* Next slide — fades in on top */}
        <div
          className={`hero-slide hero-slide-next ${fading ? "hero-slide-enter" : ""}`}
          style={{ backgroundImage: `url(${SLIDES[next]})` }}
          aria-hidden="true"
        />
        {/* Dark overlay for text readability */}
        <div className="hero-overlay" aria-hidden="true" />
        {/* Bottom fade */}
        <div className="hero-fade-bottom" aria-hidden="true" />
        {/* Ken-burns zoom on current */}
        <div
          className={`hero-kenburns ${fading ? "" : "hero-kenburns-active"}`}
          style={{ backgroundImage: `url(${SLIDES[current]})` }}
          aria-hidden="true"
        />
      </div>

      {/* ── Content ── */}
      <div className="hero-content">
        <div className="hero-badge">✈️ &nbsp; {t("hero.badge")}</div>

        <h1 className="hero-title">
          {t("hero.title")} <span>{t("hero.titleHighlight")}</span> {t("hero.titleAnd")}
        </h1>

        <p className="hero-subtitle">{t("hero.subtitle")}</p>

        {/* Stats */}
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-value">500+</span>
            <span className="hero-stat-label">{t("hero.stats.clients")}</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">50+</span>
            <span className="hero-stat-label">{t("hero.stats.destinations")}</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">10+</span>
            <span className="hero-stat-label">{t("hero.stats.experience")}</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-value">100%</span>
            <span className="hero-stat-label">{t("hero.stats.satisfaction")}</span>
          </div>
        </div>

        <div className="hero-buttons">
          <Link to="/contact" className="btn btn-primary">{t("hero.cta")}</Link>
          <Link to="/tours" className="btn btn-ghost">{t("hero.explore")} →</Link>
        </div>
      </div>

      {/* ── Dot navigation ── */}
      <div className="hero-dots" role="tablist" aria-label="Slide navigation">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            className={`hero-dot ${i === current ? "hero-dot-active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* ── Progress bar ── */}
      <div className="hero-progress" aria-hidden="true">
        <div
          className="hero-progress-bar"
          style={{ animationDuration: `${INTERVAL}ms` }}
          key={current}
        />
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-dot" />
        Scroll
      </div>
    </section>
  );
};

export default Hero;
