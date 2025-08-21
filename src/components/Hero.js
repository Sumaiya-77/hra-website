import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <section className="hero-content">
        <div className="hero-text">
          <h2 className="fade-in-up">Professional Resume Writers</h2>
          <h2 className="fade-in-up delay-1">ATS Optimization Experts</h2>
          <p className="fade-in-up delay-2">
            Resumes That Get Noticed. <br />
            Results That Get Hired.
          </p>
          <div className="hero-buttons fade-in-up delay-3">
            <Link to="/services">
              <button className="hero-btn primary">Learn more</button>
            </Link>
            <Link to="/contact">
              <button className="hero-btn secondary">Contact us</button>
            </Link>
          </div>
        </div>
        <div className="hero-image-wrapper fade-in-zoom">
          <img
            src="/Images/Resume.png"
            alt="Resume Illustration"
            className="resume-image"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
