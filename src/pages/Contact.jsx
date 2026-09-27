import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Map from "../components/Map";
import "./Contact.css";

const companyLocation = {
  name: "Plaza 106",
  sector: "103",
  city: "Gurugram",
  state: "Haryana",
  country: "India",
  latitude: 28.4746,
  longitude: 76.9881,
};

const WHATSAPP_NUMBER = "911234567890";

const Contact = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setFormData((prev) => ({
        ...prev,
        service: decodeURIComponent(serviceParam),
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please fill in all required fields");
      return;
    }

    const message = `New Enquiry from Website

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not Provided"}
Service: ${formData.service || "General"}

Message:
${formData.message}`;

    const whatsappURL =
      "https://wa.me/" +
      WHATSAPP_NUMBER +
      "?text=" +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* HERO */}
      <section className="page-hero contact-hero">
        <div className="container">
          <h1>{t("contact.title")}</h1>
          <p>{t("contact.subtitle")}</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="section">
        <div className="container">
          <div className="contact-wrapper">
            {/* LEFT */}
            <div className="contact-info">
              <h2>{t("contact.getInTouch")}</h2>
              <p>{t("contact.desc")}</p>

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h3>{t("contact.phone")}</h3>
                  <a href="tel:+911234567890">+91 12345 67890</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h3>{t("contact.email")}</h3>
                  <a href="mailto:info@example.com">info@example.com</a>
                  <br />
                  <a href="mailto:support@example.com">support@example.com</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">💬</span>
                <div>
                  <h3>{t("contact.whatsapp")}</h3>
                  <a href="https://wa.me/911234567890" target="_blank" rel="noreferrer">
                    +91 12345 67890
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="contact-form-wrapper">
              <h2>{t("contact.sendEnquiry")}</h2>

              {submitted ? (
                <div className="success-message">
                  <p>{t("contact.successTitle")}</p>
                  <p>{t("contact.successMsg")}</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <input
                    name="name"
                    placeholder={t("contact.name")}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    name="email"
                    type="email"
                    placeholder={t("contact.emailField")}
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <input
                    name="phone"
                    placeholder={t("contact.phoneField")}
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">{t("contact.selectService")}</option>
                    <option>{t("common.nationalTours")}</option>
                    <option>{t("common.internationalTours")}</option>
                    <option>{t("common.carRental")}</option>
                    <option>{t("common.groupTravel")}</option>
                  </select>

                  <textarea
                    name="message"
                    placeholder={t("contact.message")}
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                  <button className="btn btn-primary" type="submit">
                    {t("contact.send")}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* MAP */}
          <div className="contact-map-section">
            <Map location={companyLocation} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
