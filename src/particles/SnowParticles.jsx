"use client"; // Force Next.js to treat this as a Client Component

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const SnowParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // Disable full-screen effect
        particles: {
          number: { value: 30, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.8, random: true },
          size: { value: 2, random: true },
          move: { enable: true, speed: 1, direction: "bottom" },
        },
        background: { color: "transparent" },
      }}
      style={{ position: "absolute", width: "100%", height: "100%" }} // Constrain within the parent div
    />
  );
};

export default SnowParticles;
