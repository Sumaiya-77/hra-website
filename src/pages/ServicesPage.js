import React from "react";
import "./ServicesPage.css";

const resumeServices = [
  {
    title: "Tailored Resume",
    desc: [
      "Job-specific targeting",
      "Impactful design & layout",
      "Content crafted to pass ATS",
    ],
    img: "/Images/resume1.png",
    btn: "Learn More",
  },
  {
    title: "ATS Resume",
    desc: [
      "Keyword optimized",
      "Scan & parser friendly",
      "Boosted discoverability",
    ],
    img: "/Images/resume1.png",
    btn: "Check Out",
  },
  {
    title: "Basic Resume",
    desc: [
      "Great for entry-level roles",
      "Straightforward formatting",
      "Concise summary & highlights",
    ],
    img: "/Images/resume1.png",
    btn: "Get Started",
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="hero fade-in fade-delay-1">
        <div className="hero-text">
          <h1>Our Services</h1>
          <p>Premium Career Solutions to Elevate Your Professional Brand</p>
        </div>
        <img src="/Images/atsresumes.jpg" alt="Hero" className="hero-img" />
      </section>

      {/* Resume Writing */}
      <section className="section">
        <h2 className="section-title">Professional Resume/CV Writing</h2>
        <div className="card-grid">
          {resumeServices.map((item, i) => (
            <div className={`card fade-in fade-delay-${i + 1}`} key={i}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <ul>
                {item.desc.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <button className="btn">{item.btn}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Job Portal Optimization */}
      <section className="section bg-light fade-in fade-delay-1">
        <div className="split-content">
          <div className="split-img">
            <img src="/Images/job.png" alt="Job Portal" />
          </div>
          <div className="split-text">
            <h2 className="section-title">Job Portal Optimization</h2>
            <ul>
              <li>Enhanced visibility on Naukri, Indeed, etc.</li>
              <li>Human headline & summaries</li>
              <li>SEO-focused keyword tuning</li>
            </ul>
            <button className="btn">Optimize Now</button>
          </div>
        </div>
      </section>

      {/* HRA Premium Package */}
      <section className="section bg-light fade-in premium-section">
        <div className="split-content reverse">
          <div className="split-img">
            <img src="/Images/website.png" alt="Premium" />
          </div>
          <div className="split-text">
            <h2 className="section-title">🌟 HRA Premium Package</h2>
            <h3>Your All-in-One Career Launchpad</h3>
            <ul>
              <li><strong>Tailored Resume</strong> – ATS-optimized formatting</li>
              <li><strong>LinkedIn Optimization</strong> – SEO-enhanced profile</li>
              <li><strong>Personal Portfolio Website</strong> – Responsive modern website</li>
            </ul>
            <p>
              Bundled to deliver <strong>maximum career impact</strong> — for professionals who want to stand out.
            </p>
            <button className="btn">Unlock Premium Access</button>
          </div>
        </div>
      </section>

      {/* Online Brand & Portfolio */}
      <section className="section">
        <h2 className="section-title">Online Brand & Portfolio</h2>
        <div className="card-grid">
          <div className="card fade-in fade-delay-1">
            <img src="/Images/portfolio.png" alt="LinkedIn Optimization" />
            <h3>LinkedIn Optimization</h3>
            <ul>
              <li>Headline & About revamp</li>
              <li>Keyword-rich structure</li>
              <li>Conversion-optimized profile</li>
            </ul>
            <button className="btn">Transform Profile</button>
          </div>

          <div className="card fade-in fade-delay-2">
            <img src="/Images/website.png" alt="Portfolio Website" />
            <h3>Portfolio Website</h3>
            <ul>
              <li>Showcase your expertise</li>
              <li>Responsive and SEO-friendly</li>
              <li>Built with React or WordPress</li>
            </ul>
            <button className="btn">View Plans</button>
          </div>
        </div>
      </section>

      {/* Design & Branding Section */}
      <section className="section">
        <h2 className="section-title">Design & Branding</h2>
        <div className="card-grid">
          <div className="card fade-in fade-delay-1">
            <img src="/Images/ui.png" alt="UI/UX Design" />
            <h3>UI/UX Design</h3>
            <ul>
              <li>Modern, user-friendly interfaces</li>
              <li>Optimized for usability & flow</li>
              <li>Wireframes to high-fidelity designs</li>
            </ul>
            <button className="btn">Explore UI/UX</button>
          </div>

          <div className="card fade-in fade-delay-2">
            <img src="/Images/logodesign.png" alt="Logo Design" />
            <h3>Logo Design</h3>
            <ul>
              <li>Unique brand-centric visuals</li>
              <li>Multiple design concepts</li>
              <li>Delivered in all formats</li>
            </ul>
            <button className="btn">View Logo Work</button>
          </div>
        </div>
      </section>

    </div>
  );
}
