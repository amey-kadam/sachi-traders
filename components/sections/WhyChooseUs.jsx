import React from 'react';
import { Leaf, Package, Truck, Users, Shield, Award } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-teal-600" />,
      title: "Premium Quality",
      description: "We offer fresh, high-quality agricultural products that meet global standards, ensuring value in every transaction."
    },
    {
      icon: <Leaf className="w-8 h-8 text-teal-600" />,
      title: "Diverse Portfolio",
      description: "From fruits to grains, we cater to diverse needs with our extensive and carefully curated product portfolio."
    },
    {
      icon: <Package className="w-8 h-8 text-teal-600" />,
      title: "Flexible Orders",
      description: "We accommodate orders of all sizes, from 100 kg to 1000 tons, with a customer-first approach."
    },
    {
      icon: <Users className="w-8 h-8 text-teal-600" />,
      title: "Ethical Sourcing",
      description: "Partnering with local farmers, we ensure ethical sourcing and environmentally friendly operations."
    },
    {
      icon: <Truck className="w-8 h-8 text-teal-600" />,
      title: "Reliable Delivery",
      description: "With flexible payment modes and timely delivery, we are a dependable partner for all your agricultural needs."
    },
    {
      icon: <Award className="w-8 h-8 text-teal-600" />,
      title: "Certified Products",
      description: "Our products are certified to international standards, ensuring compliance with global food safety and quality regulations."
    }
  ];

  return (
    <div className="why-choose-us-container py-20">
      <div className="features-background">
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative content-wrapper">
        <h3 className="text-2xl font-semibold text-center mb-16 text-teal-600">Why Choose Sachi Traders</h3>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-box">
              <div className="icon-wrapper">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;