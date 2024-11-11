// src/components/InfoSection.js
import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-text">
        <h2>Watch Together, No Distance Needed</h2>
        <p>Easily sync videos with friends and enjoy a shared viewing experience from anywhere.</p>
        <div className="buttons">
          <a href="#" className="btn get-started">Get Started</a>
          <a href="#" className="btn learn-more">Learn More</a>
        </div>
      </div>
      <div className="info-image">
        <img src="wts.jpg" alt="Watching Together" />
      </div>
    </section>
  );
};

export default InfoSection;
