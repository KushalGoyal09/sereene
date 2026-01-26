'use client'

import Image from 'next/image'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <Image 
                src="/logo.png" 
                alt="Sereene Healthcare" 
                width={150} 
                height={150}
              />
            </div>
            <p>
              Leading the future of healthcare with innovative, high-quality products that prioritize safety, comfort, and reliability.
            </p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a 
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('about')
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('products')
                  }}
                >
                  Products
                </a>
              </li>
              <li>
                <a 
                  href="#solutions"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('solutions')
                  }}
                >
                  Solutions
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('contact')
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Products</h4>
            <ul>
              <li><a href="#">Medical Apparels</a></li>
              <li><a href="#">Hygiene Products</a></li>
              <li><a href="#">Medical Packaging</a></li>
              <li><a href="#">Wound Care</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">E-Catalogues</a></li>
              <li><a href="#">Quality Assurance</a></li>
              <li><a href="#">Certifications</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Sereene Healthcare. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
