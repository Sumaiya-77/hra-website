import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`hero-header ${isOpen ? 'blur' : ''}`}>
      <RouterLink to="/" className="logo-text-link" onClick={closeMenu}>
        <div className="logo-text fade-in">
          <img src="/Images/logo.jpg" alt="logo" className="logo" />
          <div>
            <h2 className="brand-name">Hra Solutions</h2>
            <p className="tagline">Unlock Your Potential</p>
          </div>
        </div>
      </RouterLink>

      <div className="menu-toggle" onClick={toggleMenu}>
        {isOpen ? (
          <span className="close-btn">&times;</span>
        ) : (
          <>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </>
        )}
      </div>

      <nav className={`hero-nav ${isOpen ? 'open' : ''}`}>
        <RouterLink to="/" onClick={closeMenu}>Home</RouterLink>
        <RouterLink to="/services" onClick={closeMenu}>Services</RouterLink>
        <RouterLink to="/contact" onClick={closeMenu}>Contact us</RouterLink>
        <RouterLink to="/checkout" onClick={closeMenu}>Check out</RouterLink>
        <RouterLink to="/support" onClick={closeMenu}>Support Mentoring</RouterLink>
      </nav>
    </header>
  );
};

export default Header;
