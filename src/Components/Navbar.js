  import React from 'react';
  import './Navbar.css';
  import logo from '../Images/l.svg';
   import txt from '../Images/text.svg';

  export default function Navbar(props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
         <div className="flex1">
           <a className="navbar-brand d-flex align-items-center" href="#">
            <div className='Heading'>
              <img src={logo} alt="Logo Icon" className="navbar-logo" />
              <img src={txt} alt="Logo Text" className="navbar-logo2" />
            </div>
          </a>  
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
         </div>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#">{props.menu}</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">{props.about}</a></li>
              <li className="nav-item"><a className="nav-link" href="#specialities">{props.service}</a></li>
              <li className="nav-item"><a className="nav-link" href="#testimonials">{props.blog}</a></li>
              <li className="nav-item"><a className="nav-link" href="#faq">{props.faq}</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">{props.contact}</a></li>
            </ul>
          </div>
          <div className="navbar-right">
              <a href="#consultation" className="nav-btn primary">Get Started</a>
         </div>

        </div>
      </nav>
    );
  }



