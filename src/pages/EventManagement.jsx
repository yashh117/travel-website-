import { Link } from 'react-router-dom'
import './EventManagement.css'

const EventManagement = () => {
  const services = [
    {
      title: 'Seminars',
      icon: '🎓',
      description:
        'Professional seminar management from venue selection to execution. We handle all aspects to ensure your seminar runs smoothly.',
      features: [
        'Venue selection & booking',
        'Audio-visual setup',
        'Catering arrangements',
        'Registration management',
        'Event coordination',
      ],
    },
    {
      title: 'Product Launches',
      icon: '🚀',
        description:
          "Make a lasting impression with our comprehensive product launch services. From planning to execution, we've got you covered.",
      features: [
        'Event planning & design',
        'Media management',
        'Branding & marketing',
        'Guest management',
        'Post-event follow-up',
      ],
    },
    {
      title: 'Corporate Tours',
      icon: '🏢',
      description:
        'Organize memorable corporate tours that combine business with leisure. Perfect for team building and client engagement.',
      features: [
        'Itinerary planning',
        'Accommodation booking',
        'Transport arrangements',
        'Activity coordination',
        'Budget management',
      ],
    },
    {
      title: 'Office Offsites',
      icon: '🏕️',
      description:
        'Plan successful office offsites that boost team morale and productivity. We handle all logistics so you can focus on your team.',
      features: [
        'Destination selection',
        'Team building activities',
        'Accommodation & meals',
        'Transport coordination',
        'Entertainment arrangements',
      ],
    },
    {
      title: 'Trade Shows & Exhibitions',
      icon: '🎪',
      description:
        'Maximize your presence at trade shows and exhibitions with our end-to-end event management services.',
      features: [
        'Booth design & setup',
        'Staff coordination',
        'Marketing materials',
        'Lead management',
        'Post-event analysis',
      ],
    },
  ]

  return (
    <div className="event-management-page">
      <section className="page-hero">
        <div className="container">
          <h1>Event Management Services</h1>
          <p>
            Professional event planning and execution for all your corporate and
            social events
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-subtitle">
            We provide comprehensive event management services, handling every
            detail from initial planning to post-event follow-up. Our experienced
            team ensures your events are executed flawlessly.
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card-large">
                <div className="service-icon-large">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  <strong>Our Services Include:</strong>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="btn btn-primary service-btn">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">Our Event Management Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>
                We understand your event requirements, objectives, and budget
                through detailed consultation.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>
                Our team creates a comprehensive event plan with timelines,
                budgets, and resource allocation.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Execution</h3>
              <p>
                On the event day, we manage all aspects ensuring smooth execution
                and seamless experience.
              </p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Follow-up</h3>
              <p>
                Post-event, we gather feedback and provide detailed reports for
                future improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Plan Your Next Event?</h2>
            <p>
              Let us handle all the details while you focus on what matters most.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Request a Quote
              </Link>
              <a href="mailto:info@example.com" className="btn btn-secondary">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EventManagement
