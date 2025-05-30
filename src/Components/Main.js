import React from 'react';
import './Main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Main() {
  return (
    <div className="bg">
      {/* Social Icons Container */}
      <div className="social-icons">
        <a href="https://www.youtube.com/@dieticianmeghachandel5061" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.instagram.com/dieticianmegha/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://wa.me/9301902225" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="https://www.facebook.com/dieticianmegha/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>

      <div className="container text-center">
        <div className="header">
        <h1 className="display-4 text-white fw-bold  ">
          Transform Your Health with <span style={{ color: '#00b894' }}>Megha</span>{' '}
          <span style={{ color: '#00b894' }}>Chandel</span>
        </h1>
        </div>
        <p className="lead text-muted mt-10">
         <span className='para text-black'> Professional Dietician providing personalized nutrition plans for weight management, PCOS,
          diabetes, and overall wellness. </span>
        </p>

        <div className="container1">
          <img className="middleimage" src={require('../Images/Center1.png')} alt="" />
          <img src={require('../Images/Orange.png')} alt="Orange" className="floating-image orange" />
          <img src={require('../Images/tomato.png')} alt="Tomato" className="floating-image tomato" />
          <img src={require('../Images/pomo.png')} alt="Pomogranate" className="floating-image pomogranate" />
          <img src={require('../Images/broccoli.png')} alt="Broccoli" className="floating-image broccoli" />
        </div>
      </div>
    </div>
  );
}
