import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-container">
      <div className="about-pattern-overlay"></div>
      
      <div className="about-content">
       

        {/* Section 2: Who We Are */}
        <div className="about-section animate-slideUp">
          <h2 className="section-title">Who We Are?</h2>
          <div className="section-content">
            <p className="highlight-text">
              Established in 2024, Sachi Traders bridges agricultural excellence with global demand through 
              sustainable practices and unwavering quality commitment.
            </p>
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">5</span>
                <span className="stat-label">Dedicated Professionals</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">100kg-1000T</span>
                <span className="stat-label">Order Flexibility</span>
              </div>
            </div>
          </div>
        </div>


        {/* Section 4: Our Promise */}
        <div className="about-section animate-slideUp">
          <h2 className="section-title">Our Ethical Pillars</h2>
          <div className="pillar-grid">
            <div className="pillar-card">
              <h3>Sustainable Sourcing</h3>
              <p>Partnering with local farmers for eco-friendly cultivation</p>
            </div>
            <div className="pillar-card">
              <h3>Quality Assurance</h3>
              <p>Stringent quality control at every production stage</p>
            </div>
            <div className="pillar-card">
              <h3>Global Standards</h3>
              <p>Meeting international food safety regulations</p>
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;