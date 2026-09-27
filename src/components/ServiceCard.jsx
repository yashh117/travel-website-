import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = ({
  title,
  description,
  icon,
  link,
  linkText = "Learn More",
  image,
}) => {
  return (
    <div className="service-card">
      <div className="service-image-wrapper">
        {image && (
          <img src={image} alt={title} className="service-image" loading="lazy" />
        )}
        <div className="service-image-overlay" />
        <span className="service-icon-bubble">{icon}</span>
      </div>
      <div className="service-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <Link to={link} className="service-link">
            {linkText}
            <span className="service-link-arrow">→</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
