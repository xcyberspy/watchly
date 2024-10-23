import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import '../styles/LandingPage.css';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleLogin = async (formData) => {
    // Implement your login logic here
    console.log('Login attempt with:', formData);
  };

  const handleSignUp = async (formData) => {
    // Implement your sign up logic here
    console.log('Sign up attempt with:', formData);
  };

  const footerLinks = [
    { href: "#", text: "Privacy Policy" },
    { href: "#", text: "Terms of Service" },
    { href: "#", text: "Contact Us" },
  ];

  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection 
        isSignUp={isSignUp} 
        toggleForm={toggleForm} 
        onLogin={handleLogin}
        onSignUp={handleSignUp}
      />
      <Footer links={footerLinks} />
    </div>
  );
};

export default LandingPage;
