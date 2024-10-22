import React from 'react';
import '../styles/Footer.css';

const Footer = ({ links }) => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <ul className="footer-bottom-links">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
