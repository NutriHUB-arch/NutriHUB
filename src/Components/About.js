    // Components/About.js
import React from 'react';
    //  import './About.css';


export default function About() {
  return (
    <div id="about" className="about-section container my-5 py-5">
      <h2 className="text-center fw-bold mb-3">About Nutrihub</h2>
      <p className="text-center text-muted mb-5">
        Nutrihub is your trusted partner in achieving optimal health through personalized nutrition guidance
      </p>

      <div className="row align-items-center">
        {/* Vision Section */}
        <div className="col-md-6 mb-4">
          <div className="p-4 rounded-4 shadow" style={{ background: 'linear-gradient(to right, #00c9a7, #92fe9d)', transform: 'rotate(-3deg)' }}>
            <h5 className="fw-bold text-white">Our Vision</h5>
            <p className="text-white">
              To empower individuals with evidence-based nutrition strategies that promote long-term health and wellness.
              We believe in sustainable lifestyle changes rather than quick fixes.
            </p>
          </div>
        </div>

        {/* Credentials Section */}
        <div className="col-md-6">
          <div className="text-center fw-bold mb-3" style={{
            transform: 'rotate(-5deg)',
            color: '#fff',
            backgroundColor: '#00b894',
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}>
            Megha Chandel’s Credentials
          </div>
          <ul className="list-unstyled mt-3">
            <li className="mb-3 p-3 bg-success text-white rounded-3 shadow-sm">✔ Certified Clinical Nutritionist</li>
            <li className="mb-3 p-3 bg-success text-white rounded-3 shadow-sm">✔ 5+ Years of Experience</li>
            <li className="mb-3 p-3 bg-success text-white rounded-3 shadow-sm">✔ Specialized in PCOS & Diabetes Management</li>
            <li className="mb-3 p-3 bg-success text-white rounded-3 shadow-sm">✔ 500+ Successful Transformations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
