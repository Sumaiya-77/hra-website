import React from "react";
import "./ClientLinkedinTestimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Nagesh Krishnamurthy",
    image: "/Images/nagesh.jpg",
    linkedin: "https://www.linkedin.com/in/nageshkrishnamurthy-iam-sso-techlead/",
    review:
      "The resume and LinkedIn updates added clear value and helped present my experience better.",
  },
  {
    name: "Nirupama Balu",
    image: "/Images/nirupama.jpg",
    linkedin: "https://www.linkedin.com/in/nirupama-balu/",
    review:
      "Excellent job on resume, cover letter and LinkedIn profile. Highly recommend HRA Solutions.",
  },
  {
    name: "Shaifali Gupta",
    image: "/Images/shaifali.jpg",
    linkedin: "https://www.linkedin.com/in/sgupta15/",
    review:
      "Timely project delivery and great suggestions. You added great value to my work.",
  },
  {
    name: "Shaik Kaleelur Rahman",
    image: "/Images/kaleelur.jpg",
    linkedin: "https://www.linkedin.com/in/shaik-mohamed-kaleelur-rahman/",
    review: "Thank you very much for your services. Truly appreciate it.",
  },
  {
    name: "Nijin Prakash, (PMP)",
    image: "/Images/nijin.jpg",
    linkedin: "https://www.linkedin.com/in/nijin-prakash-pmp/",
    review: "I wanted to express my sincere gratitude for the outstanding work HRA Solution did...",
  },
  {
    name: "Eslam Hanafy",
    image: "/Images/eslam.png",
    linkedin: "https://www.linkedin.com/in/eslam-hanafy/",
    review:
      "HRA Solutions is professional and sets clear expectations. They give you a chance to give feedback before the final version. I am satisfied and would recommend them.",
  },
  {
    name: "Rupanwita Mohanty",
    image: "/Images/rupanwita.png",
    linkedin: "https://www.linkedin.com/in/rupanwita-mohanty-51851a1b/",
    review:
      "The experience with HRA Solutions was seamless and professional. They delivered high-quality work with impressive turnaround.",
  },
  {
    name: "Persetti Vishal",
    image: "/Images/persetti.png",
    linkedin: "https://www.linkedin.com/in/persetti-vishal-500185178/",
    review:
      "Best experience with resume in a professional layout, organized and real-world ready.",
  },
  {
    name: "Ashish Chaturvedy",
    image: "/Images/ashish.jpg",
    linkedin: "https://www.linkedin.com/in/ashishchaturvedy/",
    review:
      "Thank you for the incredible work on my resume. It reflects my actual skills and achievements.",
  },
  {
    name: "Terse Daka",
    image: "/Images/terseedaka.jpg",
    linkedin: "https://www.linkedin.com/in/tersee-daka-51496736/",
    review:
      "Clean, professional, and aligned with target roles. The LinkedIn optimization was also great.",
  },
  {
    name: "Soumya Kapoor",
    image: "/Images/soumya.jpg",
    linkedin: "https://www.linkedin.com/in/soumya-kapoor/",
    review:
      "HRA did an excellent job on my resume, cover letter, and LinkedIn profile.",
  },
  {
    name: "Suchita Penubothu",
    image: "/Images/suchita.jpg",
    linkedin: "https://www.linkedin.com/in/suchita-dataqa-analyst/",
    review: "I couldn’t be happier with how everything turned out. HRA Solution really elevated my profile...",
  },
  {
    name: "Alex Burley",
    image: "/Images/alex.jpg",
    linkedin: "https://www.linkedin.com/in/alexburley-cxops-leader/",
    review: "I highly recommend HRA Solution! They did an excellent job...",
  },
  {
    name: "Redha Alsada",
    image: "/Images/redha.jpg",
    linkedin: "https://www.linkedin.com/in/redha-alsada/",
    review: "HRA Solution delivers outstanding resume writing services with professionalism and precision...",
  },
  {
    name: "Vanaja Vasireddy",
    image: "/Images/vanaja.jpg",
    linkedin: "https://www.linkedin.com/in/vanaja-vasireddy/",
    review: "Thank you to HRA Solution for your exceptional service...",
  },
];

const ClientLinkedinTestimonials = () => {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <h3 className="testimonial-subtitle">Trusted by Professionals Worldwide</h3>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((person, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <div className="testimonial-header">
                <img src={person.image} alt={person.name} className="testimonial-avatar" />
                <div>
                  <h3 className="testimonial-name">{person.name}</h3>
                  <div className="star-rating">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
              <p className="review-text">"{person.review}"</p>
              <a href={person.linkedin} target="_blank" rel="noreferrer" className="linkedin-btn">
                View on LinkedIn
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};


export default ClientLinkedinTestimonials;
