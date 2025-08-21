// src/pages/Privacy.js
import React from 'react';

const Privacy = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Privacy Policy</h1>

        {sections.map((section, index) => (
          <div key={index} style={styles.section}>
            <h2 style={styles.subheading}>{section.title}</h2>
            <p style={styles.text}>{section.content}</p>
          </div>
        ))}

        <div style={styles.section}>
          <h2 style={styles.subheading}>Contact Us</h2>
          <p style={styles.text}>
            If you have any questions about this Privacy Policy, please contact us:
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

export default Privacy;

// --- Page Content Data ---
const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We collect personal details you voluntarily provide through forms, including your name, email, phone number, and resume details. We may also collect anonymous usage data such as browser type and time spent on the website.",
  },
  {
    title: "2. Use of Information",
    content:
      "Your information is used to provide personalized resume writing services, communicate with you, and improve our website. We may use your feedback for marketing purposes with your permission.",
  },
  {
    title: "3. Sharing of Information",
    content:
      "We never sell your personal information. We may share it with trusted partners or freelancers who assist in delivering our services, under strict confidentiality.",
  },
  {
    title: "4. Cookies & Tracking",
    content:
      "We may use cookies and similar technologies to track user activity on our website and collect certain information to enhance your user experience.",
  },
  {
    title: "5. Data Security",
    content:
      "We implement standard industry measures to protect your personal data. However, no method of transmission over the Internet is 100% secure.",
  },
  {
    title: "6. Your Rights",
    content:
      "You have the right to request access, correction, or deletion of your data. To exercise these rights, please contact us.",
  },
  {
    title: "7. Changes to this Policy",
    content:
      "We reserve the right to update this policy. Any changes will be reflected on this page with a revised effective date.",
  },
];

// --- Styling ---
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
