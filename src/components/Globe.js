"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const GlobeComponent = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0a1628 0%, #1a2744 100%)",
        borderRadius: "12px",
      }}
    >
      <div style={{ textAlign: "center", color: "#64b5f6" }}>
        <div
          style={{
            width: "40px",
            height: "40px",
            border: "3px solid #64b5f6",
            borderTopColor: "transparent",
            borderRadius: "50%",
            margin: "0 auto 16px",
            animation: "spin 1s linear infinite",
          }}
        ></div>
        <p>Loading Globe...</p>
      </div>
    </div>
  ),
});

export default function Globe() {
  const globeEl = useRef();
  const containerRef = useRef();
  const [arcsData, setArcsData] = useState([]);
  const [pointsData, setPointsData] = useState([]);
  const [hoverPoint, setHoverPoint] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  // Delhi, India coordinates
  const DELHI_LAT = 28.7041;
  const DELHI_LNG = 77.1025;

  // Major destination cities from Delhi
  const destinations = [
    { city: "New York", lat: 40.7128, lng: -74.006, region: "Americas" },
    { city: "London", lat: 51.5074, lng: -0.1278, region: "Europe" },
    { city: "Dubai", lat: 25.2048, lng: 55.2708, region: "Middle East" },
    { city: "Singapore", lat: 1.3521, lng: 103.8198, region: "Asia Pacific" },
    { city: "Tokyo", lat: 35.6762, lng: 139.6503, region: "Asia Pacific" },
    { city: "Sydney", lat: -33.8688, lng: 151.2093, region: "Oceania" },
    { city: "South Africa", lat: -30.5595, lng: 22.9375, region: "Africa" },
    { city: "Moscow", lat: 55.7558, lng: 37.6173, region: "Russia" },
    { city: "Ottawa", lat: 45.4215, lng: -75.6972, region: "Canada" },
  ];

  // Handle responsive dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = window.innerWidth <= 768 ? 450 : 600;
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    // Generate arcs data from Delhi to all destinations
    const arcs = destinations.map((dest, i) => ({
      startLat: DELHI_LAT,
      startLng: DELHI_LNG,
      endLat: dest.lat,
      endLng: dest.lng,
      color: [
        ["rgba(100, 181, 246, 0.8)", "rgba(255, 138, 101, 0.8)"],
        ["rgba(129, 212, 250, 0.8)", "rgba(255, 112, 67, 0.8)"],
        ["rgba(79, 195, 247, 0.8)", "rgba(255, 87, 34, 0.8)"],
      ][i % 3],
    }));

    // Add points for Delhi and all destinations with enhanced visual data
    const points = [
      {
        lat: DELHI_LAT,
        lng: DELHI_LNG,
        size: 1.5,
        color: "#ff6b35",
        label: "Delhi, India",
        city: "Delhi",
      },
      ...destinations.map((dest) => ({
        lat: dest.lat,
        lng: dest.lng,
        size: 0.7,
        color: "#64b5f6",
        label: `${dest.city}, ${dest.region}`,
        city: dest.city,
      })),
    ];

    setArcsData(arcs);
    setPointsData(points);

    // Configure globe - center on Delhi/India on load with a small delay to ensure globe is initialized
    const timer = setTimeout(() => {
      if (globeEl.current) {
        // Set initial point of view to focus on India
        globeEl.current.pointOfView(
          {
            lat: DELHI_LAT,
            lng: DELHI_LNG,
            altitude: 2.5,
          },
          1000 // 1 second animation to India
        );

        // Rotate globe
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.5;
        globeEl.current.controls().enableZoom = true;
        globeEl.current.controls().minDistance = 200;
        globeEl.current.controls().maxDistance = 600;
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="globe-wrapper">
      <div className="globe-container" ref={containerRef}>
        <style jsx>{`
          .globe-wrapper {
            position: relative;
            width: 100%;
          }

          .globe-container {
            width: 100%;
            height: 600px;
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
            background: linear-gradient(135deg, #0a1628 0%, #1a2744 100%);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .globe-container :global(canvas) {
            outline: none !important;
          }

          .globe-info {
            position: absolute;
            top: 24px;
            left: 24px;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(10px);
            padding: 16px 24px;
            border-radius: 8px;
            color: white;
            z-index: 10;
          }

          .globe-info h3 {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 4px;
            color: #64b5f6;
          }

          .globe-info p {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.8);
            margin: 0;
          }

          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }

          @media (max-width: 768px) {
            .globe-container {
              height: 450px;
            }

            .globe-info {
              font-size: 14px;
            }
          }
        `}</style>
        <div className="globe-info">
          <h3>Global Reach</h3>
          <p>Healthcare solutions across 20+ countries</p>
        </div>
        <GlobeComponent
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          arcsData={arcsData}
          arcColor="color"
          arcDashLength={0.4}
          arcDashGap={0.2}
          arcDashAnimateTime={2000}
          arcStroke={0.5}
          arcsTransitionDuration={0}
          pointsData={pointsData}
          pointColor="color"
          pointAltitude={0.01}
          pointRadius="size"
          pointLabel="label"
          onPointClick={(point) => console.log("Clicked:", point.city)}
          onPointHover={(point) => setHoverPoint(point)}
          atmosphereColor="#64b5f6"
          atmosphereAltitude={0.25}
          width={dimensions.width}
          height={dimensions.height}
          backgroundColor="rgba(0,0,0,0)"
        />
      </div>
    </div>
  );
}
