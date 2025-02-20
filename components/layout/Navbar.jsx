import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Products', href: '/products' }, 
    { title: 'About', href: '/About' },
    { title: 'Contact', href: '/contact' }
  ];

  return (
    <nav>
      <div className="max-w-7xl">
        <div className="flex">
          <Link to="/" className="brand-name">Sachi Traders</Link>

          {/* Desktop Navigation */}
          <div className="nav-links">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="mobile-nav">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;