import { Link } from 'react-router-dom'
import './CorporateBookings.css'

const CorporateBookings = () => {
  const services = [
    {
      title: 'Corporate Travel Management',
      description:
        'Comprehensive travel solutions for your corporate needs including flight bookings, hotel reservations, and ground transportation.',
      icon: '✈️',
    },
    {
      title: 'Group Transport Solutions',
      description:
        'Reliable transport services for corporate events, conferences, and employee transportation with dedicated fleet management.',
      icon: '🚌',
    },
    {
      title: 'Corporate Events & Conferences',
      description:
        'End-to-end event management for corporate conferences, seminars, product launches, and annual meetings.',
      icon: '🎯',
    },
    {
      title: 'Employee Outings & Team Building',
      description:
        'Organize memorable team outings and team-building activities that boost morale and strengthen team bonds.',
      icon: '👥',
    },
    {
      title: 'Client Entertainment',
      description:
        'Plan and execute client entertainment programs including corporate tours, hospitality events, and relationship building activities.',
      icon: '🍾',
    },
    {
      title: 'Dedicated Account Management',
      description:
        'Assigned account manager for personalized service, priority support, and customized solutions tailored to your business needs.',
      icon: '🤝',
    },
  ]

  const benefits = [
    'Competitive corporate rates',
    'Dedicated account manager',
    'Priority booking support',
    'Customized service packages',
    'Flexible payment terms',
    'Detailed reporting & analytics',
    '24/7 support for urgent requirements',
    'Bulk booking discounts',
  ]

  return (
    <div className="corporate-bookings-page">
      <section className="page-hero">
        <div className="container">
          <h1>Corporate Bookings</h1>
          <p>
            Tailored solutions for corporate clients with special packages and
            dedicated support
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Corporate Services</h2>
          <p className="section-subtitle">
            We understand the unique needs of corporate clients and offer
            specialized services designed to meet your business requirements
            efficiently and cost-effectively.
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="corporate-service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section benefits-section">
        <div className="container">
          <h2 className="section-title">Corporate Benefits</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <span className="benefit-icon">✓</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="process-grid">
            <div className="process-item">
              <div className="process-icon">1</div>
              <h3>Contact Us</h3>
              <p>
                Reach out via phone, email, or enquiry form with your corporate
                requirements.
              </p>
            </div>
            <div className="process-item">
              <div className="process-icon">2</div>
              <h3>Consultation</h3>
              <p>
                Our corporate team will understand your needs and provide
                customized solutions.
              </p>
            </div>
            <div className="process-item">
              <div className="process-icon">3</div>
              <h3>Proposal</h3>
              <p>
                Receive a detailed proposal with pricing, terms, and service
                details.
              </p>
            </div>
            <div className="process-item">
              <div className="process-icon">4</div>
              <h3>Account Setup</h3>
              <p>
                Once approved, we set up your corporate account with dedicated
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Partner With Us</h2>
            <p>
              Experience the difference of working with a dedicated corporate
              travel and event management partner.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Request Corporate Quote
              </Link>
              <a href="tel:+919818080523" className="btn btn-secondary">
                Call Corporate Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CorporateBookings
