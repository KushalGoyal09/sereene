"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const scrubOptions = [
  { 
    name: "Sereene Stretch", 
    hasSubOptions: true,
    subOptions: [
      { name: "4-Way Stretch", slug: "sereene-flex-4way" },
      { name: "2-Way Stretch", slug: "sereene-flex-2way" },
    ]
  },
  { name: "Premium Scrubs", slug: "premium-scrubs" },
  { name: "Executive Scrubs", slug: "executive-scrubs" },
  { name: "Essential Scrubs", slug: "essential-scrubs" },
  { name: "Everyday Scrubs", slug: "everyday-scrubs" },
];

const apronsOptions = [
  { name: "Long Length Doctor's Coat", slug: "long-length-doctors-coat" },
  { name: "Mid-Length Doctor Coats", slug: "mid-length-doctor-coats" },
  { name: "Consultation Doctor Jacket", slug: "consultation-doctor-jacket" },
];

const staffUniformsOptions = [
  { name: "Nursing Staff Uniforms", slug: "nursing-staff-uniforms" },
  { name: "Ward Boy Uniforms", slug: "ward-boy-uniforms" },
  { name: "Sanitation Staff Uniforms", slug: "sanitation-staff-uniforms" },
];

const corporateUniformsOptions = [
  { name: "Pants", slug: "corporate-pants" },
  { name: "Shirts", slug: "corporate-shirts" },
];

const patientApparelOptions = [
  { name: "Patient Dress (Pyjama & Shirt)", slug: "patient-dresses" },
  { name: "Patient Gown", slug: "patient-gown" },
];

const medicalBeddingOptions = [
  { name: "Bedsheet", slug: "bedsheet" },
  { name: "Pillow & Pillow Covers", slug: "pillow-pillow-covers" },
  { name: "Blankets", slug: "blankets" },
];

const surgicalSuppliesOptions = [
  {
    name: "Surgeon Gowns",
    hasSubOptions: true,
    subOptions: [
      { name: "Classical Surgeon Gown", slug: "classical-surgical-gown" },
      { name: "Overlap Surgeon Gown", slug: "overlap-surgical-gown" },
      { name: "Orthopedic Surgeon Gown", slug: "orthopedic-surgeon-gown" },
    ]
  },
  { name: "Drape Sheets", slug: "drape-sheets" },
  { name: "Cut Sheets", slug: "cut-sheets-hole-sheets" },
  { name: "Fenestrated Sheets", slug: "fenestrated-sheets" },
];

const hospitalAccessoriesOptions = [
  { name: "Door Curtain", slug: "door-curtain" },
  { name: "Window Curtain", slug: "window-curtain" },
  { name: "Cubical Curtain", slug: "cubical-side-screen-curtain" },
  { name: "Slide Screen Curtain", slug: "slide-screen-curtain" },
];

const products = [
  {
    title: "Scrubs",
    description:
      "Professional medical scrubs with antibacterial protection. Perfect for doctors, nurses, and clinical staff across all specialties.",
    hasSubOptions: true,
    subOptions: scrubOptions,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 7H18C18.5304 7 19.0391 7.21071 19.4142 7.58579C19.7893 7.96086 20 8.46957 20 9V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Sereene Stitch Aprons",
    description:
      "Premium protective garments for medical professionals. Long length, mid-length, and consultation jackets with advanced moisture-wicking technology.",
    hasSubOptions: true,
    subOptions: apronsOptions,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 21V5C16 4.46957 15.7893 3.96086 15.4142 3.58579C15.0391 3.21071 14.5304 3 14 3H10C9.46957 3 8.96086 3.21071 8.58579 3.58579C8.21071 3.96086 8 4.46957 8 5V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 7V11"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Staff Uniforms",
    description:
      "Specialized uniforms for nursing staff, ward boys, and sanitation personnel. Durable, functional designs with antimicrobial treatments.",
    hasSubOptions: true,
    subOptions: staffUniformsOptions,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C10.3431 2 9 3.34315 9 5V7H15V5C15 3.34315 13.6569 2 12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 7L6 9V21C6 21.5304 6.21071 22.0391 6.58579 22.4142C6.96086 22.7893 7.46957 23 8 23H16C16.5304 23 17.0391 22.7893 17.4142 22.4142C17.7893 22.0391 18 21.5304 18 21V9L15 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 11V15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Patient Apparel",
    description:
      "Comfortable, dignified hospital gowns and dresses for patient wear during examinations, procedures, and hospitalization. Soft cotton-polyester blends ensuring ease of movement and respect for patient dignity.",
    hasSubOptions: true,
    subOptions: patientApparelOptions,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C10.3431 2 9 3.34315 9 5V7H15V5C15 3.34315 13.6569 2 12 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 7L6 9V21C6 21.5304 6.21071 22.0391 6.58579 22.4142C6.96086 22.7893 7.46957 23 8 23H16C16.5304 23 17.0391 22.7893 17.4142 22.4142C17.7893 22.0391 18 21.5304 18 21V9L15 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Medical Bedding",
    description:
      "Hospital-standard linens engineered for durability and infection control. Bedsheets, pillows, pillow covers, and therapeutic blankets designed for patient comfort and rigorous commercial laundering cycles.",
    hasSubOptions: true,
    subOptions: medicalBeddingOptions,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 9V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21 12H3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 9H21V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V9Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 3V9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Surgical Supplies",
    description:
      "Sterile fabric barriers and surgical gowns establishing clean surgical fields. Surgeon gowns, drape sheets, cut sheets, and fenestrated sheets maintaining sterile environment integrity across all surgical specialties.",
    hasSubOptions: true,
    subOptions: surgicalSuppliesOptions,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 8L2 22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 15H9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Hospital Accessories",
    description:
      "Protective textile barriers and clinical-grade window coverings for hospital settings. Door curtains, window curtains, cubicle curtains, and slide screen curtains for infection control and patient privacy.",
    hasSubOptions: true,
    subOptions: hospitalAccessoriesOptions,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 3H21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 3V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 3V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 3V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 3V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Administration/Corporate Staff Uniforms",
    description:
      "Professional attire for hospital administrative and office staff. Corporate pants and shirts combining aesthetics with healthcare functionality for patient-facing administrative roles.",
    hasSubOptions: true,
    subOptions: corporateUniformsOptions,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 21V11C8 10.4696 8.21071 9.96086 8.58579 9.58579C8.96086 9.21071 9.46957 9 10 9H14C14.5304 9 15.0391 9.21071 15.4142 9.58579C15.7893 9.96086 16 10.4696 16 11V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 7V9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const ProductCard = ({ product, index, visibleCards, cardRef }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      ref={cardRef}
      data-index={index}
      className={`product-card-container ${
        visibleCards.includes(String(index)) ? "animate" : ""
      }`}
      onClick={handleClick}
    >
      <div className={`product-card ${isFlipped ? "flipped" : ""}`}>
        {/* Front Side */}
        <div className="product-card-front">
          <div className="product-icon">{product.icon}</div>
          <h3>{product.title}</h3>
          <div className="flip-hint">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12H20M20 12L14 6M20 12L14 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Click to learn more</span>
          </div>
        </div>

        {/* Back Side */}
        <div className="product-card-back">
          <div className="back-content">
            <h3>{product.title}</h3>
            {product.hasSubOptions && product.subOptions ? (
              <div className="sub-options-list">
                <p className="sub-options-title">Choose an option:</p>
                <ul className="sub-options">
                  {product.subOptions.map((option, idx) => (
                    <li key={idx}>
                      {option.hasSubOptions ? (
                        <div className="nested-sub-option-wrapper">
                          <span className="nested-sub-option-title">{option.name}</span>
                          <ul className="nested-sub-options">
                            {option.subOptions.map((subOption, subIdx) => (
                              <li key={subIdx}>
                                <Link 
                                  href={`/products/${subOption.slug}`}
                                  className="sub-option-link nested"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  {subOption.name}
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M5 12H19M19 12L12 5M19 12L12 19"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link 
                          href={`/products/${option.slug}`}
                          className="sub-option-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {option.name}
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 12H19M19 12L12 5M19 12L12 19"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>{product.description}</p>
            )}
            <div className="flip-hint">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 12H4M4 12L10 6M4 12L10 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Click to go back</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Products() {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, entry.target.dataset.index]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Range</span>
          <h2 className="section-title">Premium Healthcare Products</h2>
          <div className="title-underline"></div>
        </div>
        <div className="products-grid">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              index={index}
              visibleCards={visibleCards}
              cardRef={(el) => (cardsRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
