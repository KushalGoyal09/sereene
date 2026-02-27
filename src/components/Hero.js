"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function Hero() {
  const mountRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    let frameId;
    let cleanup;

    import("three").then((THREE) => {
      if (!mountRef.current) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      // Scene
      const scene = new THREE.Scene();

      // Camera
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 120;

      // Renderer
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      while (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
      mountRef.current.appendChild(renderer.domElement);

      // --- Rotating Particles ---
      const particleCount = 300;
      const positions = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
        // Spread particles in a spherical volume
        const radius = Math.random() * 150 + 20;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);

        sizes[i] = Math.random() * 2.5 + 0.8;
      }

      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

      // Custom shader for glowing particles
      const particleMaterial = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        },
        vertexShader: `
          attribute float size;
          uniform float uTime;
          uniform float uPixelRatio;
          varying float vOpacity;
          void main() {
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            float dist = length(mvPosition.xyz);
            vOpacity = smoothstep(280.0, 40.0, dist) * (0.35 + 0.25 * sin(uTime * 0.5 + position.x * 0.05));
            gl_PointSize = size * uPixelRatio * (120.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying float vOpacity;
          void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float glow = 1.0 - smoothstep(0.0, 0.5, d);
            gl_FragColor = vec4(1.0, 1.0, 1.0, vOpacity * glow);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      const particlesMesh = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particlesMesh);

      // --- Mouse tracking ---
      const onMouseMove = (e) => {
        mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseRef.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("mousemove", onMouseMove);

      // --- Animation ---
      const clock = new THREE.Clock();

      const animate = () => {
        frameId = requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        particleMaterial.uniforms.uTime.value = elapsed;

        // Slow continuous rotation
        particlesMesh.rotation.y = elapsed * 0.06;
        particlesMesh.rotation.x = elapsed * 0.02;

        // Mouse-reactive camera offset
        const targetX = mouseRef.current.x * 8;
        const targetY = mouseRef.current.y * 5;
        camera.position.x += (targetX - camera.position.x) * 0.02;
        camera.position.y += (targetY - camera.position.y) * 0.02;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      };

      animate();

      // Resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        particleMaterial.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
      };
      window.addEventListener("resize", handleResize);

      cleanup = () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", onMouseMove);
        cancelAnimationFrame(frameId);
        try {
          if (mountRef.current && renderer.domElement) {
            mountRef.current.removeChild(renderer.domElement);
          }
        } catch (e) {}
        particleGeometry.dispose();
        particleMaterial.dispose();
        renderer.dispose();
      };
    });

    return () => {
      if (cleanup) cleanup();
      else if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

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
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-tag">Sereene Medical Textiles</span>
            <h1 className="hero-title">
              <span className="line">Excellence in</span>
              <span className="line highlight">Healthcare Textiles</span>
            </h1>
            <p className="hero-subtitle">
              Premium quality medical apparel and uniforms for hospitals,
              clinics, and healthcare facilities across India
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
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-line"></div>
        <p>Scroll</p>
      </div>
    </section>
  );
}
