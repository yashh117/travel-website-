import "./Gallery.css";

const Gallery = () => {
  const images = [
    { id: 1, src: "/gallery/img1.jpg", alt: "Gallery image 1" },
    { id: 2, src: "/gallery/img2.jpg", alt: "Gallery image 2" },
    { id: 3, src: "/gallery/img3.jpg", alt: "Gallery image 3" },
    { id: 4, src: "/gallery/img4.jpg", alt: "Gallery image 4" },
    { id: 5, src: "/gallery/img5.jpg", alt: "Gallery image 5" },
    { id: 6, src: "/gallery/img6.jpg", alt: "Gallery image 6" },
    { id: 7, src: "/gallery/img7.jpg", alt: "Gallery image 7" },
    { id: 8, src: "/gallery/img8.jpg", alt: "Gallery image 8" },
    { id: 9, src: "/gallery/img9.jpg", alt: "Gallery image 9" },
    { id: 10, src: "/gallery/img10.jpg", alt: "Gallery image 10" },
    { id: 11, src: "/gallery/img11.jpg", alt: "Gallery image 11" },
    { id: 12, src: "/gallery/img13.jpg", alt: "Gallery image 13" },
  ];

  return (
    <div className="gallery-page">
      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="gallery-hero-content">
          <h1>Gallery</h1>
          <p>Moments from our tours, transport services, and events</p>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-grid">
            {images.map((image) => (
              <div className="gallery-card" key={image.id}>
                <div className="gallery-image">
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
