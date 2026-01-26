"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [counters, setCounters] = useState({
    clients: 0,
    years: 0,
    products: 0,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
  const mountRef = useRef(null);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // Import Three.js dynamically to avoid SSR issues
    let THREE;
    import("three").then(module => {
      THREE = module;
      initThree(THREE);
    });

    let frameId;
    let renderer, scene, camera, particles;

    const initThree = (THREE) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Scene setup
      scene = new THREE.Scene();
      // Add subtle fog for depth
      scene.fog = new THREE.FogExp2(0x000000, 0.0008); // Dark fog matching overlay gradient start

      // Camera setup
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 100;

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Performance optimization

      if (mountRef.current) {
        // Clear previous canvas if any
        while (mountRef.current.firstChild) {
          mountRef.current.removeChild(mountRef.current.firstChild);
        }
        mountRef.current.appendChild(renderer.domElement);
      }

      // Particles setup
      const particleGeometry = new THREE.BufferGeometry();
      const particleCount = 150; // Adjust count for density

      const posArray = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i++) {
        // Spread particles across a wide area
        posArray[i] = (Math.random() - 0.5) * 300;
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

      // Material for dots
      const material = new THREE.PointsMaterial({
        size: 2,
        color: 0xffffff,
        transparent: true,
        opacity: 0.6,
      });

      // Material for lines
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.15,
      });

      particles = new THREE.Points(particleGeometry, material);
      scene.add(particles);

      // Animation Loop
      const animate = () => {
        frameId = requestAnimationFrame(animate);

        particles.rotation.y += 0.0005;
        particles.rotation.x += 0.0002;

        // Optional: Add some gentle movement/wave effect later here

        renderer.render(scene, camera);
      };

      animate();

      // Handle Resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener('resize', handleResize);

      // Store cleanup function
      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(frameId);
        if (mountRef.current && renderer.domElement) {
          // We might need to check if mountRef.current still exists
          try {
            mountRef.current.removeChild(renderer.domElement);
          } catch (e) {
            console.log("Canvas already removed");
          }
        }

        // Dispose resources
        particleGeometry.dispose();
        material.dispose();
        lineMaterial.dispose();
        renderer.dispose();
      };
    };
  }, []);

  useEffect(() => {
    const animateCounter = (key, target) => {
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const update = () => {
        current += increment;
        if (current < target) {
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
          requestAnimationFrame(update);
        } else {
          setCounters((prev) => ({ ...prev, [key]: target }));
        }
      };

      update();
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter("clients", 500);
          animateCounter("years", 25);
          animateCounter("products", 1000);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div ref={mountRef} style={{ position: "absolute", inset: 0, zIndex: 1 }}></div>
        {/* <div className="hero-pattern"></div> */}
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="line">Excellence in</span>
              <span className="line">Healthcare Solutions</span>
            </h1>
            <p className="hero-subtitle">
              Leading the future of medical innovation with comprehensive
              disposable healthcare, hygiene, and wellness solutions
            </p>
            <div className="hero-buttons">
              <a
                href="#products"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("products");
                }}
              >
                Explore Products
              </a>
              <a
                href="#contact"
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>
          {/* <div className="hero-stats" ref={statsRef}>
            <div className="stat-item">
              <div className="stat-number">{counters.clients}+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counters.years}+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counters.products}+</div>
              <div className="stat-label">Products</div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
}
