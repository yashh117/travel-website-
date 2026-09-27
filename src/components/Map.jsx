import "./Map.css";

const Map = ({ location }) => {
  const { name, sector, city, state, country, latitude, longitude } = location;

  // Google Maps embed URL - using coordinates directly
  // Format: https://www.google.com/maps?q=latitude,longitude
  const address = `${name}, Sector ${sector}, ${city}, ${state}, ${country}`;
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=en&z=15&output=embed`;

  // Google Maps directions link
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  return (
    <div className="map-container">
      <div className="map-header">
        <h3>📍 Our Location</h3>
        <div className="location-details">
          <p>
            <strong>{name}</strong>
          </p>
          <p>
            Sector {sector}, {city}
          </p>
          <p>
            {state}, {country}
          </p>
        </div>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary map-directions-btn"
        >
          Get Directions
        </a>
      </div>
      <div className="map-wrapper">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
