  import React from 'react';
  import './Navbar.css';

  export default function Navbar(props) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <div className='Heading'>
              <span style={{ color: '#00b894' }}>Aarogya</span><span style={{ color: '#2d3436' }}>mitra</span>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link" href="#">{props.menu}</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">{props.about}</a></li>
              <li className="nav-item"><a className="nav-link" href="#">{props.service}</a></li>
              <li className="nav-item"><a className="nav-link" href="#">{props.blog}</a></li>
              <li className="nav-item"><a className="nav-link" href="#faq">{props.faq}</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">{props.contact}</a></li>
            </ul>
          <div className="d-flex ms-3">
                  <a href="#consultation" className="nav-btn primary me-2">Get Started</a>
                  <a href="#about" className="nav-btn outline">Learn More</a>
          </div>
          </div>
        </div>
      </nav>
    );
  }

//   import React from "react";
// import "./Navbar.css";

// const Navbar: React.FC = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo Section */}
//         <div className="navbar-logo">
//           <div className="logo-icon">
//             <svg
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M12 2L3.09 8.26L4 21L12 18L20 21L20.91 8.26L12 2Z"
//                 fill="#10B981"
//                 stroke="#10B981"
//                 strokeWidth="2"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </div>
//           <span className="logo-text">Aarogyamitra</span>
//         </div>

//         {/* Navigation Menu */}
//         <div className="navbar-menu">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <a href="#menu" className="nav-link">
//                 Menu
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#about" className="nav-link">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#service" className="nav-link">
//                 Service
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#blog" className="nav-link">
//                 Blog
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#faq" className="nav-link">
//                 FAQ
//               </a>
//             </li>
//             <li className="nav-item">
//               <a href="#contact" className="nav-link">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Action Buttons */}
//         <div className="navbar-actions">
//           <button className="btn btn-primary">Get Started</button>
//           <button className="btn btn-secondary">Learn More</button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button className="mobile-menu-toggle">
//           <span className="hamburger-line"></span>
//           <span className="hamburger-line"></span>
//           <span className="hamburger-line"></span>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

