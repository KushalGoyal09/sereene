'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)

      // Update active section
      const sections = document.querySelectorAll('section')
      let current = ''

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= (sectionTop - 100)) {
          current = section.getAttribute('id')
        }
      })

      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <Link href="/" className="logo">
            <Image
              src="/textLogo.png"
              alt="Sereene Healthcare"
              width={180}
              height={60}
              priority
            />
          </Link>
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a
                href="#home"
                className={activeSection === 'home' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('home')
                }}
              >
                Home
              </a>
            </li>
            <li className="dropdown">
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('products')
                }}
              >
                Products
              </a>
              <ul className="dropdown-menu">
                <li className="dropdown-submenu">
                  <a href="#scrubs">Scrubs</a>
                  <ul className="sub-dropdown-menu">
                    <li className="dropdown-submenu">
                      <a href="#sereene-stretch">Sereene Stretch</a>
                      <ul className="sub-dropdown-menu nested">
                        <li>
                          <Link href="/products/sereene-flex-4way" onClick={() => setIsMobileMenuOpen(false)}>
                            4-Way Stretch
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/sereene-flex-2way" onClick={() => setIsMobileMenuOpen(false)}>
                            2-Way Stretch
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/products/executive-scrubs" onClick={() => setIsMobileMenuOpen(false)}>
                        Executive Scrubs
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/essential-scrubs" onClick={() => setIsMobileMenuOpen(false)}>
                        Essential Scrubs
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/everyday-scrubs" onClick={() => setIsMobileMenuOpen(false)}>
                        Everyday Scrubs
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/premium-scrubs" onClick={() => setIsMobileMenuOpen(false)}>
                        Premium Scrubs
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a href="#aprons">Sereene Stitch Aprons</a>
                  <ul className="sub-dropdown-menu">
                    <li>
                      <Link href="/products/long-length-doctors-coat" onClick={() => setIsMobileMenuOpen(false)}>
                        Long Length Doctor's Coat
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/mid-length-doctor-coats" onClick={() => setIsMobileMenuOpen(false)}>
                        Mid-Length Doctor Coats
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/consultation-doctor-jacket" onClick={() => setIsMobileMenuOpen(false)}>
                        Consultation Doctor Jacket
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a href="#staff-uniforms">Staff Uniforms</a>
                  <ul className="sub-dropdown-menu">
                    <li>
                      <Link href="/products/nursing-staff-uniforms" onClick={() => setIsMobileMenuOpen(false)}>
                        Nursing Staff Uniforms
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/ward-boy-uniforms" onClick={() => setIsMobileMenuOpen(false)}>
                        Ward Boy Uniforms
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/sanitation-staff-uniforms" onClick={() => setIsMobileMenuOpen(false)}>
                        Sanitation Staff Uniforms
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a href="#patient-apparel">Patient Apparel</a>
                  <ul className="sub-dropdown-menu">
                    <li>
                      <Link href="/products/patient-dresses" onClick={() => setIsMobileMenuOpen(false)}>
                        Patient Dress (Pyjama & Shirt)
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/patient-gown" onClick={() => setIsMobileMenuOpen(false)}>
                        Patient Gown
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a href="#medical-bedding">Medical Bedding</a>
                  <ul className="sub-dropdown-menu">
                    <li>
                      <Link href="/products/bedsheet" onClick={() => setIsMobileMenuOpen(false)}>
                        Bedsheet
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/pillow-pillow-covers" onClick={() => setIsMobileMenuOpen(false)}>
                        Pillow & Pillow Covers
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/blankets" onClick={() => setIsMobileMenuOpen(false)}>
                        Blankets
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a href="#surgical-supplies">Surgical Supplies</a>
                  <ul className="sub-dropdown-menu">
                    <li className="dropdown-submenu">
                      <a href="#surgeon-gowns">Surgeon Gowns</a>
                      <ul className="sub-dropdown-menu nested">
                        <li>
                          <Link href="/products/classical-surgical-gown" onClick={() => setIsMobileMenuOpen(false)}>
                            Classical Surgeon Gown
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/overlap-surgical-gown" onClick={() => setIsMobileMenuOpen(false)}>
                            Overlap Surgeon Gown
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/orthopedic-surgeon-gown" onClick={() => setIsMobileMenuOpen(false)}>
                            Orthopedic Surgeon Gown
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/products/drape-sheets" onClick={() => setIsMobileMenuOpen(false)}>
                        Drape Sheets
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/cut-sheets-hole-sheets" onClick={() => setIsMobileMenuOpen(false)}>
                        Cut Sheets
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/fenestrated-sheets" onClick={() => setIsMobileMenuOpen(false)}>
                        Fenestrated Sheets
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a href="#hospital-accessories">Hospital Accessories</a>
                  <ul className="sub-dropdown-menu">
                    <li>
                      <Link href="/products/door-curtain" onClick={() => setIsMobileMenuOpen(false)}>
                        Door Curtain
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/window-curtain" onClick={() => setIsMobileMenuOpen(false)}>
                        Window Curtain
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/cubical-side-screen-curtain" onClick={() => setIsMobileMenuOpen(false)}>
                        Cubical Curtain
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/slide-screen-curtain" onClick={() => setIsMobileMenuOpen(false)}>
                        Slide Screen Curtain
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a href="#corporate-uniforms">Administration/Corporate Staff Uniforms</a>
                  <ul className="sub-dropdown-menu">
                    <li>
                      <Link href="/products/corporate-pants" onClick={() => setIsMobileMenuOpen(false)}>
                        Pants
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/corporate-shirts" onClick={() => setIsMobileMenuOpen(false)}>
                        Shirts
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('about')
                }}
              >
                About Us
              </a>
              <ul className="dropdown-menu">
                <li><a href="#company">Our Company</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#mission">Mission & Vision</a></li>
              </ul>
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
      </div>
    </nav>
  )
}
