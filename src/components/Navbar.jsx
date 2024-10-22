import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../Imgs/logo.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="menu">
        {location.pathname !== '/' && ( // Check if the current path is not home
          <Link to="/settings">
            <button className="menu-button">
              <img src="/path/to/settings-icon.png" alt="Settings" />
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
