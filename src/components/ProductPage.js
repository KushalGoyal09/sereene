'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ProductPage({ product }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [showSizeChart, setShowSizeChart] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)


  // Preload all product images
  useEffect(() => {
    const preloadImages = () => {
      product.images.forEach((imgSrc) => {
        const img = new window.Image()
        img.src = imgSrc
      })
    }
    preloadImages()
  }, [product.images])

  // Reset loaded state when image changes
  useEffect(() => {
    setImageLoaded(false)
  }, [selectedImage])

  // Update images when color changes
  const handleColorChange = (color) => {
    setSelectedColor(color)
    setSelectedImage(0) // Reset to first image when color changes
  }

  const handleImageChange = (index) => {
    setImageLoaded(false)
    setSelectedImage(index)
  }

  return (
    <main>
      <Navbar />
      <div className="product-page">
        <div className="container">
          <div className="product-wrapper">
            {/* Left Section - Product Images */}
            <div className="product-images">
              <div className="image-thumbnails">
                {product.images.map((img, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => handleImageChange(index)}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} - View ${index + 1}`}
                      width={80}
                      height={80}
                      style={{ objectFit: 'cover' }}
                      unoptimized
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/80x80?text=Image'
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="main-image">
                <div className={`image-container ${!imageLoaded ? 'loading' : ''}`}>
                  <Image
                    key={`img-${selectedImage}`}
                    src={product.images[selectedImage]}
                    alt={product.name}
                    width={600}
                    height={800}
                    style={{ 
                      objectFit: 'contain',
                      opacity: imageLoaded ? 1 : 0,
                      transition: 'opacity 0.4s ease-in-out'
                    }}
                    priority={selectedImage === 0}
                    unoptimized
                    onLoad={() => {
                      setImageLoaded(true)
                    }}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/600x800?text=Product+Image'
                      setImageLoaded(true)
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right Section - Product Details */}
            <div className="product-details">
              <h1 className="product-title">{product.name}</h1>

              {/* Color Selection */}
              <div className="product-option">
                <label>Color: <span className="selected-color-name">{selectedColor.name}</span></label>
                <div className="color-palette">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`color-option ${selectedColor.name === color.name ? 'active' : ''}`}
                      style={{ backgroundColor: color.value }}
                      onClick={() => handleColorChange(color)}
                      aria-label={`Select ${color.name} color`}
                      title={color.name}
                    >
                      {selectedColor.name === color.name && (
                        <span className="checkmark">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="product-option">
                <div className="size-header">
                  <label>Size: <span className="selected-size">{selectedSize}</span></label>
                  <button
                    className="size-chart-link"
                    onClick={() => setShowSizeChart(!showSizeChart)}
                  >
                    Size chart
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <div className="size-buttons">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-button ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {showSizeChart && (
                  <div className="size-chart-modal" onClick={() => setShowSizeChart(false)}>
                    <div className="size-chart-content" onClick={(e) => e.stopPropagation()}>
                      <div className="size-chart-header">
                        <h3>Size Chart</h3>
                        <button className="close-chart" onClick={() => setShowSizeChart(false)}>×</button>
                      </div>
                      <table className="size-chart-table">
                        <thead>
                          <tr>
                            <th>Size</th>
                            <th>Chest (inches)</th>
                            <th>Waist (inches)</th>
                            <th>Hip (inches)</th>
                            <th>Length (inches)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr><td>XS</td><td>34-36</td><td>28-30</td><td>36-38</td><td>26</td></tr>
                          <tr><td>S</td><td>36-38</td><td>30-32</td><td>38-40</td><td>27</td></tr>
                          <tr><td>M</td><td>38-40</td><td>32-34</td><td>40-42</td><td>28</td></tr>
                          <tr><td>L</td><td>40-42</td><td>34-36</td><td>42-44</td><td>29</td></tr>
                          <tr><td>XL</td><td>42-44</td><td>36-38</td><td>44-46</td><td>30</td></tr>
                          <tr><td>XXL</td><td>44-46</td><td>38-40</td><td>46-48</td><td>31</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>

              {/* Product Description */}
              <div className="product-description">
                <p>{product.description}</p>
              </div>

              {/* Key Features */}
              <div className="product-features">
                <h3>Key Features:</h3>
                <ul>
                  {product.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
