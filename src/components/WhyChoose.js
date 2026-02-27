'use client'

import { useEffect, useRef, useState } from 'react'

const values = [
  {
    number: '01',
    title: 'Medical Textile Expertise',
    description: 'Specialized knowledge of healthcare requirements.'
  },
  {
    number: '02',
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control at every stage.'
  },
  {
    number: '03',
    title: 'Cost-Effective Solutions',
    description: 'Premium quality at competitive pricing.'
  },
  {
    number: '04',
    title: 'Customization Capability',
    description: 'Tailored solutions for unique hospital needs.'
  },
  {
    number: '05',
    title: 'Reliable Delivery',
    description: 'Consistent supply chain management.'
  },
  {
    number: '06',
    title: 'Customer Support',
    description: 'Dedicated account management and after-sales service.'
  }
]

export default function WhyChoose() {
  const [visibleValues, setVisibleValues] = useState([])
  const [isVisualVisible, setIsVisualVisible] = useState(false)
  const valuesRef = useRef([])
  const visualRef = useRef(null)

  useEffect(() => {
    const valueObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleValues(prev => [...prev, entry.target.dataset.index])
            }, index * 200)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const visualObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisualVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    valuesRef.current.forEach(value => {
      if (value) valueObserver.observe(value)
    })

    if (visualRef.current) {
      visualObserver.observe(visualRef.current)
    }

    return () => {
      valueObserver.disconnect()
      visualObserver.disconnect()
    }
  }, [])

  return (
    <section className="why-choose" id="solutions">
      <div className="container">
        <div className="why-choose-content">
          <div className="why-choose-text">
            <div className="section-header left-align">
              <span className="section-subtitle">Why Choose Us</span>
              <h2 className="section-title">Why Choose Sereene?</h2>
              <div className="title-underline"></div>
            </div>
            <p className="lead-text">
              Our mission is to meet the evolving needs of the healthcare sector with innovative, high-quality products that contribute to customer satisfaction, safety, and the protection of human health.
            </p>
            <div className="values-list">
              {values.map((value, index) => (
                <div
                  key={index}
                  ref={el => valuesRef.current[index] = el}
                  data-index={index}
                  className={`value-item ${visibleValues.includes(String(index)) ? 'animate' : ''}`}
                >
                  <div className="value-number">{value.number}</div>
                  <div className="value-content">
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div 
            ref={visualRef}
            className={`why-choose-visual ${isVisualVisible ? 'animate' : ''}`}
          >
            <div className="visual-card">
              <div className="visual-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Comprehensive Solutions</h3>
              <p>End-to-end healthcare products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
