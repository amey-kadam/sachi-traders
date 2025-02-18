import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-background">
        <div className="pattern-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">
            <span className="company-name">Sachi Traders</span>
            <br></br>
            <span className="title-subtitle">Integrity in Trade, Excellence in Service</span>
          </h1>
          
          <p className="hero-description">
          Delivering Global Excellence: India's Premium Products to the World's Doorstep
         
          </p>
          
          <div className="hero-cta-container">
            <button className="cta-button primary">
              Explore Products
            </button>
            <button className="cta-button secondary">
              Contact Us
            </button>
          </div>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">3145            +</span>
            <span className="stat-label">Organic Products</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">160+</span>
            <span className="stat-label">Qualified Farmers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">310+</span>
            <span className="stat-label">Agriculture Farm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;