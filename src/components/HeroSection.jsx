import React from 'react';
import '../styles/HeroSection.css';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const HeroSection = ({ isSignUp, toggleForm, onLogin, onSignUp }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Watch Videos Together, Anytime, Anywhere</h1>
        <p>
          Experience a new way to watch videos with friends, no matter where they are. Our app lets you sync videos in real-time, so you can laugh, react, and enjoy your favorite content together.
        </p>
      </div>
      <div className="form-container">
        {isSignUp ? (
          <SignUpForm onSignUp={onSignUp} onSwitchToLogin={() => toggleForm(false)} />
        ) : (
          <LoginForm onLogin={onLogin} onSwitchToSignUp={() => toggleForm(true)} />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
