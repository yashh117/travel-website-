import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919873352002";

const defaultFormData = {
  name: "",
  phone: "",
  email: "",
  travelDate: "",
  duration: "",
  adults: "2",
  children: "0",
  hotelType: "",
  mealPlan: "",
  transportType: "",
  pickupCity: "",
  budget: "",
  remarks: "",
};

const TourCustomizationForm = ({
  sectionTitle = "Tours & Packages",
  packageName = "Customize Package",
  packageDuration = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    ...defaultFormData,
    duration: packageDuration,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggle = () => {
    if (!isOpen) {
      setSubmitted(false);
    }

    setIsOpen((prev) => !prev);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Please enter your name and phone number");
      return;
    }

    const message = `Customized Tour Requirement from Website

Section: ${sectionTitle}
Selected Package: ${packageName}

Customer Details
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not Provided"}

Travel Requirements
Travel Date: ${formData.travelDate || "Flexible"}
Duration: ${formData.duration || "Not Provided"}
Adults: ${formData.adults || "0"}
Children: ${formData.children || "0"}
Hotel Type: ${formData.hotelType || "Not Provided"}
Meal Plan: ${formData.mealPlan || "Not Provided"}
Transport Type: ${formData.transportType || "Not Provided"}
Pickup City: ${formData.pickupCity || "Not Provided"}
Budget / Rate: ${formData.budget || "Not Provided"}

Remarks / Extra Requirements:
${formData.remarks || "Not Provided"}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );

    setSubmitted(true);
  };

  return (
    <div className="customize-tour-panel tile-customize-panel">
      <button
        type="button"
        className="btn btn-outline customize-toggle"
        aria-expanded={isOpen}
        onClick={handleToggle}
      >
        {isOpen ? "Close Customization" : "Customize This Package"}
      </button>

      {isOpen && (
        <div className="customize-form-wrap">
          {submitted ? (
            <div className="customize-success customize-thank-you">
              <h4>Thank you!</h4>
              <p>
                Your requirement for {packageName} has been sent. We will
                contact you soon.
              </p>
            </div>
          ) : (
            <>
              <div className="customize-tour-header">
                <span className="customize-kicker">Personalize This Tile</span>
                <h4>{packageName}</h4>
                <p>
                  Add hotel, transport, date, budget/rate and remarks for this
                  selected package.
                </p>
              </div>

              <form className="customize-tour-form" onSubmit={handleSubmit}>
                <input
                  name="name"
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  name="phone"
                  placeholder="Phone / WhatsApp Number *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />

                <input
                  name="travelDate"
                  type="date"
                  value={formData.travelDate}
                  onChange={handleChange}
                />

                <input
                  name="duration"
                  placeholder="Trip Duration"
                  value={formData.duration}
                  onChange={handleChange}
                />

                <div className="traveller-counts">
                  <input
                    name="adults"
                    type="number"
                    min="1"
                    placeholder="Adults"
                    value={formData.adults}
                    onChange={handleChange}
                  />

                  <input
                    name="children"
                    type="number"
                    min="0"
                    placeholder="Children"
                    value={formData.children}
                    onChange={handleChange}
                  />
                </div>

                <select
                  name="hotelType"
                  value={formData.hotelType}
                  onChange={handleChange}
                >
                  <option value="">Hotel Type</option>
                  <option>Budget Hotel</option>
                  <option>3 Star Hotel</option>
                  <option>4 Star Hotel</option>
                  <option>5 Star Hotel</option>
                  <option>Heritage / Boutique Hotel</option>
                </select>

                <select
                  name="mealPlan"
                  value={formData.mealPlan}
                  onChange={handleChange}
                >
                  <option value="">Meal Plan</option>
                  <option>Breakfast Only</option>
                  <option>Breakfast and Dinner</option>
                  <option>All Meals</option>
                  <option>No Meals</option>
                </select>

                <select
                  name="transportType"
                  value={formData.transportType}
                  onChange={handleChange}
                >
                  <option value="">Transport Type</option>
                  <option>Sedan Car</option>
                  <option>SUV / Innova</option>
                  <option>Tempo Traveller</option>
                  <option>Coach / Bus</option>
                  <option>Flight / Train Assistance</option>
                </select>

                <input
                  name="pickupCity"
                  placeholder="Pickup City"
                  value={formData.pickupCity}
                  onChange={handleChange}
                />

                <input
                  name="budget"
                  placeholder="Budget / Rate Expectation"
                  value={formData.budget}
                  onChange={handleChange}
                />

                <textarea
                  name="remarks"
                  placeholder="Remarks / Extra Requirements"
                  rows="4"
                  value={formData.remarks}
                  onChange={handleChange}
                />

                <button className="btn btn-secondary customize-submit" type="submit">
                  <FaWhatsapp aria-hidden="true" />
                  Send on WhatsApp
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default TourCustomizationForm;
