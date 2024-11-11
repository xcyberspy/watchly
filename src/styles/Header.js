// src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src="Watchly V3 no bg.png" alt="Watchly Logo" />
        </div>
        <ul className="nav-links">
          <li><a href="#">Home Page</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
