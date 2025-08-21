// src/pages/Cancellation.js
import React from 'react';

const Cancellation = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Cancellation & Refund Policy</h1>

        {sections.map((section, index) => (
          <div key={index} style={styles.section}>
            <h2 style={styles.subheading}>{section.title}</h2>
            <p style={styles.text}>{section.content}</p>
          </div>
        ))}

        <div style={styles.section}>
          <h2 style={styles.subheading}>Need Help?</h2>
          <p style={styles.text}>
            If you have any questions or concerns regarding our Cancellation & Refund Policy, feel free to reach out:
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

export default Cancellation;

// --- Sections ---
const sections = [
  {
    title: "1. Order Cancellation",
    content:
      "Orders can be cancelled within 1 hour of placing the request, provided work has not yet commenced. Once work begins, cancellations will not be entertained.",
  },
  {
    title: "2. Refund Policy",
    content:
      "Due to the personalized nature of our services, refunds are not provided once the resume writing or consultation process has started. We encourage clients to carefully review service details before making a purchase.",
  },
  {
    title: "3. Exceptional Cases",
    content:
      "Refunds may be considered only in exceptional cases where no service was delivered due to unforeseen issues on our end. Each case will be reviewed individually.",
  },
  {
    title: "4. Changes to Policy",
    content:
      "We reserve the right to modify this policy at any time. Updated versions will be posted on this page with the latest effective date.",
  },
];

// --- Styling ---
const styles = {
  wrapper: {
    backgroundColor: '#f0f4f8',
    padding: '4rem 1rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
    backgroundColor: '#fff',
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
