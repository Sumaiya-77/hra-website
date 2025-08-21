// src/components/WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '7569922967';
  const message = encodeURIComponent("Hi, I'm interested in your services. Please provide more details!");
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${message}`;

  const buttonStyle = {
    position: 'fixed',
    bottom: '25px',
    right: '25px',
    zIndex: '1000',
    backgroundColor: '#25D366',
    borderRadius: '20px',
    width: '60px',
    height: '60px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer'
  };

  const iconStyle = {
    width: '35px',
    height: '35px'
  };

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = 'scale(1.1)';
    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.4)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.3)';
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={buttonStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      title="Chat with us on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={iconStyle}
      />
    </a>
  );
};

export default WhatsAppButton;
