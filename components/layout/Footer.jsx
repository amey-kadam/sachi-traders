import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Quick Links Section */}
        <div className="footer-sections-grid">
          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Products</h4>
            <ul className="footer-links">
              <li><a href="#">Fruits </a></li>
              <li><a href="#">Vegetables</a></li>
              <li><a href="#">Rice</a></li>
              <li><a href="#">And many more...</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Support Center</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-content">
          <div className="contact-info">
            <h4 className="contact-heading">Contact Us</h4>
            <p>Email: sachitraders31@gmail.com</p>
            <p>Phone: +91 7420920992</p>
            <p>Address: kasti (bk), Tal. Lohara, Dist. Dharashiv, India</p>
          </div>
          <div className="newsletter">
            <h4 className="newsletter-heading">Subscribe to Our Newsletter</h4>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" className="newsletter-input" />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        <div className="bottom-content">
          <p className="copyright">© 2024 Sachi Traders. All rights reserved.</p>
          <div className="bottom-links">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

