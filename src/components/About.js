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
              Sereene is a leading manufacturer and supplier of comprehensive
              disposable healthcare and hygiene products, committed to
              excellence and innovation.
            </p>
            <p>
              With state-of-the-art facilities and international standards, we
              deliver premium quality medical textiles and performance fabrics
              in the infection control arena. Our products are manufactured
              using imported machinery under strict quality control to ensure
              the highest standards.
            </p>
            <p>
              We serve healthcare professionals worldwide, providing solutions
              that prioritize safety, comfort, and reliability in medical
              environments.
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
                  <h4>Quality Assured</h4>
                  <p>International standards and strict quality control</p>
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
                      d="M13 10V3L4 14H11V21L20 10H13Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Innovation Driven</h4>
                  <p>State-of-the-art facilities and cutting-edge technology</p>
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
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12H22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="feature-content">
                  <h4>Global Reach</h4>
                  <p>Serving healthcare professionals worldwide</p>
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
