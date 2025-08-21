// src/components/WhyUsSection.js
import React from 'react';
import './WhyUsSection.css';

const timelineData = [
  {
    title: 'Team Collaboration',
    description: 'Built on trust, talent & teamwork — our experts collaborate across specialties.',
    icon: '🤝',
  },
  {
    title: 'Decades of Experience',
    description: 'We bring decades of real-world industry experience to every project.',
    icon: '🧠',
  },
  {
    title: '5000+ Documents Delivered',
    description: 'Resumes, cover letters, LinkedIn profiles — all tailored and optimized.',
    icon: '📄',
  },
  {
    title: 'Portfolio & Website Creation',
    description: 'From portfolios to live websites, deployed on AWS infrastructure.',
    icon: '🌐',
  },
  {
    title: 'ATS-Friendly Guaranteed',
    description: 'We ensure your resumes pass Applicant Tracking Systems with ease.',
    icon: '🤖',
  },
  {
    title: 'Clean & Modern Design',
    description: 'Not just functional, but beautifully crafted with a professional polish.',
    icon: '🎨',
  },
];

const WhyUsSection = () => {
  return (
    <section className="whyus-timeline-section">
      <h2 className="section-title">Why HRA Solutions?</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">{item.icon}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
