import React from 'react';
import './ServicesSection.css';
import { FaCode, FaLinkedin, FaPaintBrush, FaFileAlt, FaLaptopCode, FaUserTie, FaPalette } from 'react-icons/fa';

const services = [
  {
    title: 'ATS Resume + Cover Letter',
    icon: <FaUserTie className="icon" />,
    description: 'Professional ATS-optimized resumes with compelling cover letters.',
  },
  {
    title: 'LinkedIn Optimization',
    icon: <FaLinkedin className="icon" />,
    description: 'Enhance your LinkedIn to attract top recruiters and clients.',
  },
  {
    title: 'Portfolio Creation',
    icon: <FaFileAlt className="icon" />,
    description: 'Professional portfolio sites to showcase your work and expertise.',
  },
  {
    title: 'Website Creation',
    icon: <FaLaptopCode className="icon" />,
    description: 'Custom websites built with responsive, clean code.',
  },
  {
    title: 'MERN Stack Mentoring',
    icon: <FaCode className="icon" />,
    description: 'Master MongoDB, Express, React & Node with expert 1-on-1 mentoring.',
  },
  {
    title: 'Logo Design',
    icon: <FaPaintBrush className="icon" />,
    description: 'Unique and creative logos tailored to your brand identity.',
  },
  {
    title: 'UI/UX Design',
    icon: <FaPalette className="icon" />,
    description: 'Modern interfaces and experiences crafted for optimal usability.',
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="services-modern-section">
      <h2 className="services-title">What We Offer</h2>
      <div className="services-card-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            {service.icon}
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
