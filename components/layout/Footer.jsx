import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
      const navigate = useNavigate();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section with Company, Products, and Contact Us */}
        <div className="footer-top">
          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Products</h4>
            <ul className="footer-links">
              <li><a href="/products"
                                    onClick={() => navigate('/products')}>Fruits</a></li>
              <li><a href="/products"
                                                  onClick={() => navigate('/products')}>Vegetables</a></li>
              <li><a href="/products"
                                                  onClick={() => navigate('/products')}>Rice</a></li>
              <li><a href="/products"
                                                  onClick={() => navigate('/products')}>And many more...</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact Us</h4>
            <p>Email: sachitraders31@gmail.com</p>
            <p>Phone: +91 7420920992</p>
            <p>Address: Kasti (BK), Tal. Lohara, Dist. Dharashiv, India</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom-bar">
          <div className="bottom-content">
            <p className="copyright">© 2024 Sachi Traders. All rights reserved.</p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
