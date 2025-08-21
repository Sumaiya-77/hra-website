import React from "react";
import "./Support.css";

export default function Support() {
  return (
    <div className="support-container">
      {/* Hero Section */}
      <section className="support-hero fade-in fade-delay-1">
        <div className="hero-left">
          <h1>
            Online <span>1:1 Mentoring</span> & Job Support
          </h1>
          <p>
            Wherever you are — we support your growth with expert guidance in
            Frontend and MERN Stack development.
          </p>
        </div>
        <div className="hero-right">
          <img src="/Images/mentor.png" alt="Mentoring" />
        </div>
      </section>

      {/* Frontend Mentoring */}
      <section className="support-section fade-in fade-delay-2">
        <div className="support-card">
          <div className="support-text">
            <h2>Frontend Development Mentoring</h2>
            <ul>
              <li>Technologies Covered: HTML, CSS, JavaScript</li>
              <li>Powerful Tools: React.js / Angular, Tailwind CSS, GitHub</li>
              <li>Interview Preparation & Freelancing Support</li>
              <li>Learn to Handle Projects via Freelancing</li>
              <li>Resume Writing & Job Application Strategy</li>
              <li>Duration: 2 Months</li>
            </ul>
          </div>
          <div className="support-img">
            <img src="/Images/code.png" alt="Frontend Mentoring" />
          </div>
        </div>
      </section>

      {/* MERN Stack Mentoring */}
      <section className="support-section alt-bg fade-in fade-delay-3">
        <div className="support-card reverse">
          <div className="support-text">
            <h2>MERN Stack Development Mentoring</h2>
            <ul>
              <li>Frontend: HTML, CSS, JavaScript</li>
              <li>Advanced Tools: React.js / Angular, Tailwind CSS, GitHub</li>
              <li>Backend: Node.js, MongoDB, Express.js</li>
              <li>Project Deployment Training</li>
              <li>Interview Preparation & Freelancing Support</li>
              <li>Real Project Handling via Freelancing</li>
              <li>Resume Writing & Job Application Strategy</li>
              <li>Duration: 3.5 Months</li>
            </ul>
          </div>
          <div className="support-img">
            <img src="/Images/growth.png" alt="MERN Stack Mentoring" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="support-cta fade-in fade-delay-2">
        <h2>Ready to Level Up Your Career?</h2>
        <p>
          Book a 1:1 mentoring session and get job-ready support tailored to
          your goals.
        </p>
        <a
          href="https://wa.me/919505937294?text=Hi%20HRA%20Team,%20I%20am%20interested%20in%20your%201:1%20mentoring%20program."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Start Mentoring</button>
        </a>
      </section>
    </div>
  );
}
