import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../Imgs/logo.png';
import logo2 from '../Imgs/settings-svgrepo-com.png';

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
        {location.pathname !== '/' && location.pathname !== '/settings' && (
          <Link to="/settings">
            <button className="menu-button">
              <img src={logo2} alt="Settings" />
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
