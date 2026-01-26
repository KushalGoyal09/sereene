'use client'

import { useEffect, useRef, useState } from 'react'

const values = [
  {
    number: '01',
    title: 'Customer Focus',
    description: 'Understanding and exceeding customer expectations through personalized solutions and responsive service.'
  },
  {
    number: '02',
    title: 'Environmental Awareness',
    description: 'Committed to sustainable manufacturing practices that minimize environmental impact.'
  },
  {
    number: '03',
    title: 'Sustainability',
    description: 'Building a better future through responsible sourcing and eco-friendly production methods.'
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
              <h2 className="section-title">Commitment to Excellence</h2>
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
