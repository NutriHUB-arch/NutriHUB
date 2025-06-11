import React, { useEffect, useRef } from 'react'; // Import useRef
import './Main.css';

export default function Main() {
  const timeoutRef = useRef(null); // Ref to store the timeout ID

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const floatingImages = document.querySelectorAll('.floating-image');

      // Clear any existing reset timeout to prevent conflict
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      floatingImages.forEach((image, index) => {
        // Calculate movement based on scroll position, without randomness
        // Use a slight offset based on index or position for variety, but keep it consistent
        // Adjust these multipliers for desired sensitivity
        const movementX = scrollY * 0.02 * ((index % 2 === 0 ? 1 : -1)); // Alternating direction
        const movementY = scrollY * 0.015 * ((index % 3 === 0 ? 1 : -1)); // Alternating direction

        // Apply the transform immediately and smoothly
        image.style.transition = 'transform 0.05s linear'; // Very quick transition for immediate reaction
        image.style.transform = `translate(${movementX}px, ${movementY}px)`;
      });

      // Set a single timeout to reset ALL images after scrolling stops (or slows down)
      // This timeout will be cleared and reset if scrolling continues
      timeoutRef.current = setTimeout(() => {
        floatingImages.forEach(image => {
          image.style.transition = 'transform 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)'; // Slower ease-out for reset
          image.style.transform = `translate(0, 0)`;
        });
      }, 150); // Increased delay for reset. Adjust this value (e.g., 100-300ms)
               // This acts as a debouncer: the reset only happens X ms *after* the last scroll event.
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener and any pending timeout when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once after initial render


  return (
    <div className="main-section-wrapper">
      <div className="container text-center">
        <div className="header">
          <h1 className="display-4 text-black fw-bold flex2">
            <span style={{ color: '#003d33' }}>Transform Your Health with</span>{' '} <br />
            <span style={{ color: '#9acd32' }}>Megha Chandel</span>
          </h1>
        </div>
        <p className="lead text-muted mt-10">
          <span className='para text-black'>
            Professional Dietician providing personalized nutrition plans for <br />
            weight management, PCOS, diabetes, and overall wellness.
          </span>
        </p>

        <div className="button-container">
          <button className="get-started-btn">Get Started</button>
          <button className="learn-more-btn">Learn More</button>
        </div>

        <div className="container1">
          {/* These divs seem to be part of the circular background, not distinct elements as per the original image.
              If they are meant to be separate, they need specific styling to be visible.
              Assuming they are part of a larger background effect for now.
              Original image shows one circular blur.
          */}
          <div className='circle-background'></div>

          <img className="middleimage" src={require('../Images/aunty.png')} alt="Megha Chandel" />

          {/* Floating Images (small cards) */}
          <img className="floating-image icon-top-left" src={require('../Images/icon1.jpg')} alt="Icon 1" />
          <img className="floating-image icon-mid-left" src={require('../Images/icon2.jpg')} alt="Icon 2" />
          <img className="floating-image icon-bottom-left" src={require('../Images/icon3.jpg')} alt="Icon 3" />
          <img className="floating-image icon-top-right" src={require('../Images/icon4.jpg')} alt="Icon 4" />
          <img className="floating-image icon-mid-right" src={require('../Images/icon5.jpg')} alt="Icon 5" />
          <img className="floating-image icon-bottom-right" src={require('../Images/icon6.jpg')} alt="Icon 6" />

        </div>
      </div>
    </div>
  );
}