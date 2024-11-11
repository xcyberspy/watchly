// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Watch Videos Together, Anytime, Anywhere</h1>
        <p>Experience a new way to watch videos with friends, no matter where they are. Our app lets you sync videos in real-time, so you can laugh, react, and enjoy your favorite content together, even when you're apart.</p>
        <div className="buttons">
          <a href="#" className="btn sign-up">Sign Up</a>
          <a href="#" className="btn log-in">Log In</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
