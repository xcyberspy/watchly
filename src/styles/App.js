// App.js
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;