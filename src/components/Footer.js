import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footerRef.current.classList.add('fade-up');
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">Hra Solutions</h2>
          <p className="footer-tagline">Unlock Your Potential</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/checkout">Check Out</Link></li>
            <li><Link to="/support">Support Mentoring</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-list">
            <li><Link to="/terms">Terms & Conditions</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/cancellation">Cancellation & Refund</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Get in Touch</h3>
          <p><FaEnvelope className="icon" /> <a href="mailto:hraresumes@gmail.com">hraresumes@gmail.com</a></p>
          <p><FaPhoneAlt className="icon" /> <a href="tel:+919505937294">+91-9505937294</a></p>
          <p><FaLinkedin className="icon" /> <a href="https://www.linkedin.com/in/raja-kumari/" target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} <strong>Hra Solutions</strong>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
