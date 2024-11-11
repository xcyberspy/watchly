import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="social-links">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/facebook.png" alt="Facebook" className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/instagram.png" alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://www.x.com/">
                        <img src="/x.png" alt="X" className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src="/linkedin.png" alt="LinkedIn" className="social-icon" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="/youtube.png" alt="YouTube" className="social-icon" />
                    </a>
                </div>
                <div className="footer-nav">
                    <div>
                        <a href="#">About Us</a>
                        <a href="#">Support Center</a>
                        <a href="#">FAQs</a>
                        <a href="#">Blog Posts</a>
                        <a href="#">Careers</a>
                    </div>
                    <div>
                        <a href="#">Contact Us</a>
                        <a href="#">Community Forum</a>
                        <a href="#">User Guide</a>
                        <a href="#">Feedback</a>
                        <a href="#">Newsletter</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Relume. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                    <a href="#">Cookies Settings</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
