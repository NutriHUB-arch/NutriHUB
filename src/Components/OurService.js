import React from 'react';
import './OurService.css';

const serviceCards = [
  {
    icon: '📋',
    title: '100% Personalized Plans',
    description: 'Every plan is tailored to your unique body type, lifestyle, and preferences',
  },
  {
    icon: '👨‍⚕️',
    title: 'Expert Guidance',
    description: 'Professional support from a certified clinical nutritionist',
  },
  {
    icon: '🔄',
    title: 'Easy-to-Follow',
    description: 'Simple, practical meal plans that fit into your daily routine',
  },
  {
    icon: '📈',
    title: 'Proven Results',
    description: '500+ successful transformations with evidence-based nutrition strategies',
  },
  {
    icon: '🔁',
    title: 'Regular Follow-ups',
    description: 'Continuous monitoring and plan adjustments for optimal results',
  },
  {
    icon: '🏷️',
    title: 'Affordable Packages',
    description: 'Quality nutrition guidance at competitive prices for everyone',
  },
];

const OurService = () => {
  return (
    <div className="our-service-container">
      <h2 className="service-title"><span> Our Service</span></h2>
      <span className="service-subtitle">Comprehensive nutrition solutions for all your health needs</span>
      <div className="service-content">
        <div className="cards-grid">
          {serviceCards.map((card, index) => (
            <div key={index} className="service-card">
              <div className="card-icon">{card.icon}</div>
              <div className="card-title">{card.title}</div>
              <div className="card-desc">{card.description}</div>
            </div>
          ))}
        </div>
        <div className="service-image" />
      </div>
    </div>
  );
};

export default OurService;
