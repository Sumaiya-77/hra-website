import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="fade-in">Contact Us</h1>
      <p className="fade-in fade-delay-1">
        Have questions or want to know more about our services? Connect with us on{' '}
        <a
          href="https://www.linkedin.com/in/raja-kumari/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{' '}
        or send us a message below.
      </p>

      <div className="contact-info fade-in fade-delay-2">
        <p><strong>Email:</strong> <a href="mailto:hraresumes@gmail.com">hraresumes@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+919505937294">+91 9505937294</a>, <a href="tel:+917569922967">+91 75699 22967</a></p>
      </div>

      <form
        className="contact-form fade-in fade-delay-3"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Thank you for your message! We’ll get back to you soon.');
        }}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required />
        <button type="submit">Send Message</button>
      </form>

      <div className="map-section fade-in fade-delay-4">
        <h2>Our Location</h2>
        <iframe
          title="HRA Location"
          src="https://www.bing.com/maps/embed?h=400&w=800&cp=12.888247~77.560814&lvl=11&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
        />
        <p>
          <a
            href="https://www.bing.com/maps?where=Bengaluru+South%2C+Karnataka+560011%2C+IN&cp=12.888247~77.560814&lvl=11"
            target="_blank"
            rel="noopener noreferrer"
          >
            View larger map
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
