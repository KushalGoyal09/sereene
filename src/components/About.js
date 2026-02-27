"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Who We Are</span>
          <h2 className="section-title">Trusted Healthcare Partner</h2>
          <div className="title-underline"></div>
        </div>
        <div className="about-content">
          <div className={`about-text ${isVisible ? "animate" : ""}`}>
            <p className="lead-text">
              Sereene Medical Textiles is a specialized healthcare textile
              manufacturer dedicated to providing premium quality medical
              apparel and uniforms for hospitals, clinics, diagnostic centers,
              and healthcare facilities across India.
            </p>
            <p>
              With expertise in medical-grade fabric selection and garment
              construction, Sereene delivers hospital uniforms that combine
              comfort, durability, infection control, professional appearance,
              and regulatory compliance.
            </p>
            <p>
              Our commitment is to be the preferred partner for hospitals
              seeking reliable, cost-effective medical textile solutions
              without compromising quality.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Comfort & Durability</h4>
                  <p>Extended wear life and comfort for long shifts</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Infection Control</h4>
                  <p>Easy to clean and maintain hygiene standards</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 7H20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Professional Appearance</h4>
                  <p>Designed to enhance staff identity and hospital branding</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Regulatory Compliance</h4>
                  <p>Meets Indian healthcare facility standards</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`about-image ${isVisible ? "animate" : ""}`}>
            <div style={{ position: "relative", width: "100%" }}>
              <Image
                src="/image.png"
                alt="Healthcare professional"
                width={600}
                height={800}
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
