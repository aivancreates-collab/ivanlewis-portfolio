import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  maxSpeed: number;
  maxForce: number;
  angle: number;
  targetAngle: number;
  formationTargetIndex: number; // Index of the target point in the curated formation
}

export function PhilosophyBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mouse, setMouse] = useState({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    // High particle density of ultra-fine micro dots to simulate a flock/fluid stream
    const particleCount = 380;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 1.0 + Math.random() * 2.0;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 0.6 + Math.random() * 0.7, // Ultra-fine micro-dots
        maxSpeed: 2.5 + Math.random() * 1.5,
        maxForce: 0.08 + Math.random() * 0.06,
        angle: angle,
        targetAngle: angle,
        formationTargetIndex: i % 180, // Distribute evenly across formation slots
      });
    }

    // Pre-calculate target points on concentric curated rings (The "Formed Structure")
    // This creates the visual effect of a high-precision geometric instrument/constellation
    const ringCount = 3;
    const pointsPerRing = 60;
    const ringRadii = [45, 90, 135];
    const targetPoints: { x: number; y: number; ringIndex: number }[] = [];

    // Continuous float of the human locus representing autonomous inquiry
    let time = 0;
    const humanLocus = { x: width / 2, y: height / 2, radius: 220, targetRadius: 220 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      });
    };

    const handleMouseLeave = () => {
      setMouse({ x: -1000, y: -1000, active: false });
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      // Create a smooth trailing motion blur using the site's exact light warm cream background
      ctx.fillStyle = 'rgba(245, 230, 211, 0.09)';
      ctx.fillRect(0, 0, width, height);

      time += 0.001;

      // Update and smooth-interpolate human locus point
      if (mouse.active) {
        humanLocus.x += (mouse.x - humanLocus.x) * 0.05;
        humanLocus.y += (mouse.y - humanLocus.y) * 0.05;
      } else {
        // Floating Lissajous pattern representing an autonomous "breathing query"
        const targetX = width / 2 + Math.sin(time * 1.8) * (width * 0.22);
        const targetY = height / 2 + Math.cos(time * 2.8) * (height * 0.18);
        humanLocus.x += (targetX - humanLocus.x) * 0.025;
        humanLocus.y += (targetY - humanLocus.y) * 0.025;
      }

      // Smooth breathe oscillation for the locus field
      const breath = Math.sin(time * 6.0) * 12;
      humanLocus.radius = humanLocus.targetRadius + breath;

      // Dynamic rotation angle of the curated structure inside the human focus
      const structureRotation = time * 0.25;

      // Draw the delicate human cursor/locus boundaries to set a museum look
      ctx.strokeStyle = 'rgba(182, 122, 61, 0.04)';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.arc(humanLocus.x, humanLocus.y, humanLocus.radius, 0, Math.PI * 2);
      ctx.stroke();

      // Subtle warm radial atmospheric aura behind the formation
      const warmGlow = ctx.createRadialGradient(
        humanLocus.x,
        humanLocus.y,
        0,
        humanLocus.x,
        humanLocus.y,
        humanLocus.radius
      );
      warmGlow.addColorStop(0, 'rgba(182, 122, 61, 0.065)');
      warmGlow.addColorStop(0.5, 'rgba(182, 122, 61, 0.02)');
      warmGlow.addColorStop(1, 'rgba(245, 230, 211, 0)');
      ctx.fillStyle = warmGlow;
      ctx.beginPath();
      ctx.arc(humanLocus.x, humanLocus.y, humanLocus.radius, 0, Math.PI * 2);
      ctx.fill();

      // Generate the instant target coordinates for the curated concentric geometry
      const currentTargets: { x: number; y: number }[] = [];
      for (let r = 0; r < ringCount; r++) {
        const radius = ringRadii[r];
        // Rotate alternating rings in opposite directions for dynamic mechanical complexity
        const rot = r % 2 === 0 ? structureRotation : -structureRotation * 0.7;
        
        for (let p = 0; p < pointsPerRing; p++) {
          const angle = (p / pointsPerRing) * Math.PI * 2 + rot;
          currentTargets.push({
            x: humanLocus.x + Math.cos(angle) * radius,
            y: humanLocus.y + Math.sin(angle) * radius,
          });
        }
      }

      // Draw thin structural guidance lines for the formation (glowing concentric orbits)
      ctx.strokeStyle = 'rgba(182, 122, 61, 0.045)';
      ctx.lineWidth = 0.5;
      for (let r = 0; r < ringCount; r++) {
        ctx.beginPath();
        ctx.arc(humanLocus.x, humanLocus.y, ringRadii[r], 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw faint crosshairs at the center of curation
      ctx.strokeStyle = 'rgba(182, 122, 61, 0.08)';
      ctx.beginPath();
      ctx.moveTo(humanLocus.x - 8, humanLocus.y);
      ctx.lineTo(humanLocus.x + 8, humanLocus.y);
      ctx.moveTo(humanLocus.x, humanLocus.y - 8);
      ctx.lineTo(humanLocus.x, humanLocus.y + 8);
      ctx.stroke();

      // Particles physics and drawing
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Distance from the human curation center
        const dx = p.x - humanLocus.x;
        const dy = p.y - humanLocus.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let forceX = 0;
        let forceY = 0;
        let speedMultiplier = 1.0;
        let color = 'rgba(106, 68, 34, 0.11)'; // Quiet, desaturated micro dots

        if (dist < humanLocus.radius) {
          // 1. INSIDE CURATION FIELD: Re-organize, slow down, and crystallize into the structured geometry
          const influence = 1 - dist / humanLocus.radius;
          speedMultiplier = 0.3 + (1 - influence) * 0.7; // Gradual decay of speed as it is curated

          // Get assigned target in the concentric rings
          const target = currentTargets[p.formationTargetIndex];
          if (target) {
            // Steering force toward the specific curated slot
            const desiredX = target.x - p.x;
            const desiredY = target.y - p.y;
            const desiredDist = Math.sqrt(desiredX * desiredX + desiredY * desiredY);

            if (desiredDist > 1) {
              const snapStrength = 0.08 * influence;
              forceX += (desiredX / desiredDist) * snapStrength;
              forceY += (desiredY / desiredDist) * snapStrength;
            }
          }

          // Warm bronze/gold hue transition as particles are "curated"
          color = `rgba(182, 122, 61, ${0.16 + influence * 0.62})`;

          // Draw micro-connections to nearby curated nodes to make it look like "Something is forming"
          if (influence > 0.45 && i % 4 === 0) {
            for (let j = i + 1; j < particles.length; j += 7) {
              const p2 = particles[j];
              const odx = p2.x - p.x;
              const ody = p2.y - p.y;
              const odist = Math.sqrt(odx * odx + ody * ody);
              if (odist < 35) {
                ctx.strokeStyle = `rgba(182, 122, 61, ${0.015 * influence})`;
                ctx.lineWidth = 0.4;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            }
          }
        } else {
          // 2. OUTSIDE CURATION FIELD: Standard high-speed fluid murmuration (AI Acceleration)
          // Add a subtle turbulent flow field representing unstructured computational speed
          const noiseAngle = Math.sin(p.x * 0.004) * Math.cos(p.y * 0.004) * Math.PI * 2;
          forceX += Math.cos(noiseAngle) * 0.025;
          forceY += Math.sin(noiseAngle) * 0.025;

          // Simple local separation forces to prevent overlapping when murmuring
          let sepX = 0, sepY = 0, sepCount = 0;
          for (let j = 0; j < particles.length; j += 6) {
            if (i === j) continue;
            const other = particles[j];
            const odx = p.x - other.x;
            const ody = p.y - other.y;
            const odist = Math.sqrt(odx * odx + ody * ody);
            if (odist > 0 && odist < 18) {
              sepX += odx / odist;
              sepY += ody / odist;
              sepCount++;
            }
          }
          if (sepCount > 0) {
            forceX += (sepX / sepCount) * 0.06;
            forceY += (sepY / sepCount) * 0.06;
          }

          // Flocking alignment: steer in the general direction of neighbors
          let alignX = 0, alignY = 0, alignCount = 0;
          for (let j = 0; j < particles.length; j += 10) {
            if (i === j) continue;
            const other = particles[j];
            const odist = Math.sqrt((p.x - other.x) ** 2 + (p.y - other.y) ** 2);
            if (odist < 45) {
              alignX += other.vx;
              alignY += other.vy;
              alignCount++;
            }
          }
          if (alignCount > 0) {
            alignX /= alignCount;
            alignY /= alignCount;
            const alignLen = Math.sqrt(alignX * alignX + alignY * alignY);
            if (alignLen > 0) {
              forceX += (alignX / alignLen) * 0.03;
              forceY += (alignY / alignLen) * 0.03;
            }
          }
        }

        // Apply forces to velocity
        p.vx += forceX;
        p.vy += forceY;

        // Limit speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const limit = p.maxSpeed * speedMultiplier;
        if (speed > limit) {
          p.vx = (p.vx / speed) * limit;
          p.vy = (p.vy / speed) * limit;
        }

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Soft wrap limits
        const pad = 10;
        if (p.x < -pad) p.x = width + pad;
        if (p.x > width + pad) p.x = -pad;
        if (p.y < -pad) p.y = height + pad;
        if (p.y > height + pad) p.y = -pad;

        // Render the micro-dot
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (canvas) {
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [mouse]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-0 opacity-[0.9]"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
}
