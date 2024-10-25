import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import '../styles/LandingPage.css';
import Navbar from '../components/Navbar';
const LandingPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };
  const handleLogin = async (formData) => {
    console.log('Login attempt with:', formData);
  };

  const handleSignUp = async (formData) => {
    console.log('Sign up attempt with:', formData);
  };


  return (
    <div className="landing-page">
      <Navbar className="navbar" />
      <HeroSection 
        isSignUp={isSignUp} 
        toggleForm={toggleForm} 
        onLogin={handleLogin}
        onSignUp={handleSignUp}
        className="hero-section"/>
    </div>

  );
};

export default LandingPage;
