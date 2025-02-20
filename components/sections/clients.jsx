import React from 'react';
import { useNavigate } from 'react-router-dom';

import './clients.css';

const ClientsSection = () => {
    const navigate = useNavigate();
  
  const clients = [
    {
      name: "BANANA",
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?q=80&w=800"
    },
    {
      name: "CORN",
      image: "https://images.unsplash.com/photo-1634467524884-897d0af5e104?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dq=80&w=800"
      
    },
    {
      name: "POMEGRANATE",
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
                backgroundImage: `url(${client.image})`,
                opacity: 0.9,  // Add this line                
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <h3 className="client-name">{client.name}</h3>
              <p className="client-description">{client.description}</p>
            </div>
          ))}
        </div>

        <button className="cS-button primary"
                      onClick={() => navigate('/products')}
>
          More Products
        </button>
      </div>
    </section>
  );
};

export default ClientsSection;