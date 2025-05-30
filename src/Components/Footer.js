import React from 'react'
import './Footer.css';

export default function Footer() {
  return (
       <footer id="contact" className="footer">
      <div className="footer-container">
        {/* Left section */}
        <div className="footer-left">
          <h2 className="footer-logo">Nutrihub</h2>
          <p className="footer-description">
            Lorem ipsum dolor sit amet, ut dolor consul consequat hasrem ipsum dolor sit amet, ut
            dolor consul consequat has
          </p>
        </div>

        {/* Links section */}
        <div className="footer-links">
          <div className="link-group">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Homepage</a></li>
              <li><a href="#">Diet Menu Plans</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="link-group">
            <h3>Other Links</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">404 Page</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Pine. All rights reserved.
      </div>
    </footer>
  )
}
