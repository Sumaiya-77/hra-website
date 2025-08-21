import React, { useState } from 'react';
import './Checkout.css';

const CheckOut = () => {
  const [currency, setCurrency] = useState('INR');

  const services = [
    {
      name: 'ATS Friendly Resume + Cover Letter',
      priceINR: '₹5,500',
      priceUSD: '$90',
    },
    {
      name: 'ATS Friendly Resume (Only)',
      priceINR: '₹4,000',
      priceUSD: '$40',
    },
    {
      name: 'Complete Career Package (Resume + Cover Letter + LinkedIn)',
      priceINR: '₹6,500',
      priceUSD: '$120',
    },
    {
      name: 'Job Portfolio',
      priceINR: '₹7,000',
      priceUSD: '$140',
    },
    {
      name: 'HRA Complete Career Package (All Services)',
      priceINR: '₹12,500',
      priceUSD: '$250',
    },
  ];

  return (
    <div className="checkout-container">
      <h1 className="checkout-heading">HRA Solutions - Checkout</h1>

      {/* Step-by-Step Info */}
      <div className="checkout-steps">
        <h2>Our Simple & Transparent Process</h2>
        <ol>
          <li><strong>Choose Your Service:</strong> Select from our carefully designed career services tailored to your goals.</li>
          <li><strong>Make Payment:</strong> Pay securely via UPI, Cards, PayPal, or Net Banking.</li>
          <li><strong>Get Connected:</strong> Our team will reach you via WhatsApp/email for next steps.</li>
          <li><strong>Expert Assigned:</strong> A specialist in your domain will be assigned for personalized service.</li>
          <li><strong>Final Delivery:</strong> We’ll deliver your documents after revisions & approval.</li>
        </ol>
      </div>

      {/* Currency Toggle */}
      <div className="currency-toggle">
        <button className={currency === 'INR' ? 'active' : ''} onClick={() => setCurrency('INR')}>₹ INR</button>
        <button className={currency === 'USD' ? 'active' : ''} onClick={() => setCurrency('USD')}>$ USD</button>
      </div>

      {/* Pricing Table */}
      <div className="pricing-table">
        {services.map((service, idx) => (
          <div key={idx} className="pricing-card">
            <h3>{service.name}</h3>
            <p className="price">
              {currency === 'INR' ? service.priceINR : service.priceUSD}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Info */}
      <div className="checkout-contact">
        <p><strong>Contact to Proceed:</strong></p>
        <p>Email: <a href="mailto:hraresumes@gmail.com">hraresumes@gmail.com</a></p>
        <p>Phone: <a href="tel:+919505937294">+91 9505937294</a>, <a href="tel:+917569922967">+91 75699 22967</a></p>
        <small>After selecting your service, our team will contact you to begin the process.</small>
      </div>
    </div>
  );
};

export default CheckOut;
