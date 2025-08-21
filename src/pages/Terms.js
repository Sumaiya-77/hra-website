// src/pages/Terms.js
import React from 'react';

const Terms = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Terms & Conditions</h1>
        <p style={styles.date}><strong>HraSolutions@2025</strong></p>

        {sections.map((section, index) => (
          <div key={index} style={styles.section}>
            <h2 style={styles.subheading}>{section.title}</h2>
            <p style={styles.text}>{section.content}</p>
          </div>
        ))}

        <div style={styles.section}>
          <h2 style={styles.subheading}>Contact Us</h2>
          <p style={styles.text}>
            If you have any questions about these Terms & Conditions, please reach out:
          </p>
          <ul style={styles.list}>
            <li><strong>Email:</strong> <a href="mailto:hraresumes@gmail.com" style={styles.link}>hraresumes@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+919505937294" style={styles.link}>+91-9505937294</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Terms;

// --- Data & Styles ---

const sections = [
  {
    title: "1. Use of Services",
    content:
      "You agree to use our services only for lawful purposes and in compliance with all applicable laws. Misuse, abuse, or unauthorized use is strictly prohibited.",
  },
  {
    title: "2. Intellectual Property",
    content:
      "All content including logos, text, graphics, and service designs are the intellectual property of Hra Solutions and may not be used without permission.",
  },
  {
    title: "3. Payment Terms",
    content:
      "All services are prepaid. Customizations or add-ons requested beyond the defined scope may incur additional charges.",
  },
  {
    title: "4. Service Delivery",
    content:
      "Delivery timelines vary by service type. Clients are expected to cooperate by providing necessary details and timely feedback.",
  },
  {
    title: "5. Limitation of Liability",
    content:
      "Hra Solutions is not liable for any direct or indirect damages. We do not guarantee interview calls or job placement.",
  },
  {
    title: "6. Third-Party Links",
    content:
      "Our website may contain links to external websites. We are not responsible for their content or privacy practices.",
  },
  {
    title: "7. Termination",
    content:
      "We reserve the right to terminate access to our services if these terms are violated.",
  },
  {
    title: "8. Modifications",
    content:
      "These terms may be updated without prior notice. You are advised to review them periodically.",
  },
];

const styles = {
  wrapper: {
    backgroundColor: '#f8f9fa',
    padding: '4rem 1rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: 'white',
    padding: '3rem',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  },
  heading: {
    fontSize: '2.8rem',
    color: '#05445E',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  date: {
    fontSize: '1rem',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#666',
  },
  section: {
    marginBottom: '2rem',
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#189AB4',
    marginBottom: '0.8rem',
  },
  text: {
    fontSize: '1rem',
    color: '#333',
    lineHeight: '1.7',
  },
  list: {
    paddingLeft: '1.2rem',
    lineHeight: '1.6',
  },
  link: {
    color: '#05445E',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
