import React from 'react';
import './clients.css';

const ClientsSection = () => {
  const clients = [
    {
      name: "BANANA",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=800"
    },
    {
      name: "SOYABEAN",
      // Updated with a clearer soyabean image
      image: "https://images.unsplash.com/photo-1612257999580-af3cb8bb8492?q=80&w=800"
    },
    {
      name: "POMEGRANATE",
      // Updated with a clearer pomegranate image
      image: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?q=80&w=800"
    },
    {
      name: "GREEN CHILI",
      image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?q=80&w=800"
    }
  ];

  return (
    <section className="clients-container">
      <div className="clients-pattern-overlay"></div>
      <div className="clients-content">
        <div className="clients-title">
          <h2 className="clients-heading">Our Products</h2>
        </div>
        
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="client-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url(${client.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h3 className="client-name">{client.name}</h3>
              <p className="client-description">{client.description}</p>
            </div>
          ))}
        </div>

        <button className="cS-button primary">
          More Products
        </button>
      </div>
    </section>
  );
};

export default ClientsSection;