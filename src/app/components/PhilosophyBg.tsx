import { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  pulseSpeed: number;
  pulsePhase: number;
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

    // Responsive resize handler
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(canvas);

    // Generate nodes representing "execution / logic nodes"
    // Keep density balanced to avoid cluttering (highly aesthetic spacing)
    const nodeCount = Math.min(32, Math.floor((width * height) / 35000) + 12);
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        // Extremely slow, poetic drift
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        baseRadius: 1 + Math.random() * 2,
        radius: 1,
        pulseSpeed: 0.01 + Math.random() * 0.02,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Human focus parameters - "The Human Question"
    // Automatically floats in a smooth, continuous infinity loop (Lissajous curve)
    // when mouse is not active, creating an organic, autonomous breathing motion
    let lissajousTime = 0;
    const humanLocus = { x: width / 2, y: height / 2, radius: 180, targetRadius: 180 };

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

    // Animation loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      lissajousTime += 0.0012;

      // Update and smooth-interpolate human focus point
      if (mouse.active) {
        // Soft lag following mouse
        humanLocus.x += (mouse.x - humanLocus.x) * 0.06;
        humanLocus.y += (mouse.y - humanLocus.y) * 0.06;
      } else {
        // Floating Lissajous pattern representing an autonomous "breathing query"
        const targetX = width / 2 + Math.sin(lissajousTime * 2) * (width * 0.25);
        const targetY = height / 2 + Math.cos(lissajousTime * 3.5) * (height * 0.2);
        humanLocus.x += (targetX - humanLocus.x) * 0.04;
        humanLocus.y += (targetY - humanLocus.y) * 0.04;
      }

      // Human question radial breath amplitude
      const breath = Math.sin(lissajousTime * 8) * 20;
      humanLocus.radius = humanLocus.targetRadius + breath;

      // Draw "The Human Question" Warm Luminous Core
      // A large, incredibly subtle radial gradient that creates a warm, soft atmospheric glow on the light cream background
      const warmGlow = ctx.createRadialGradient(
        humanLocus.x,
        humanLocus.y,
        0,
        humanLocus.x,
        humanLocus.y,
        humanLocus.radius
      );
      // Soft caramel tone (--accent: #b67a3d at very low opacities)
      warmGlow.addColorStop(0, 'rgba(182, 122, 61, 0.095)');
      warmGlow.addColorStop(0.5, 'rgba(182, 122, 61, 0.035)');
      warmGlow.addColorStop(1, 'rgba(245, 230, 211, 0)');
      
      ctx.fillStyle = warmGlow;
      ctx.beginPath();
      ctx.arc(humanLocus.x, humanLocus.y, humanLocus.radius, 0, Math.PI * 2);
      ctx.fill();

      // Subtle human focal core circle
      ctx.strokeStyle = 'rgba(182, 122, 61, 0.12)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.arc(humanLocus.x, humanLocus.y, 45 + Math.sin(lissajousTime * 5) * 5, 0, Math.PI * 2);
      ctx.stroke();

      // Draw faint connections (The structured networks of "Intelligence")
      ctx.lineWidth = 0.55;
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect if close
          if (dist < 135) {
            // Determine proximity to the human locus
            const midX = (n1.x + n2.x) / 2;
            const midY = (n1.y + n2.y) / 2;
            const hDistX = midX - humanLocus.x;
            const hDistY = midY - humanLocus.y;
            const hDist = Math.sqrt(hDistX * hDistX + hDistY * hDistY);

            // Compute line opacity
            const baseAlpha = (1 - dist / 135) * 0.11;
            
            if (hDist < humanLocus.radius) {
              // Highlighted bronze-caramel connection when inside the human scope
              const influence = 1 - hDist / humanLocus.radius;
              ctx.strokeStyle = `rgba(182, 122, 61, ${baseAlpha + influence * 0.13})`;
            } else {
              // Standard desaturated line
              ctx.strokeStyle = `rgba(106, 68, 34, ${baseAlpha * 0.65})`;
            }

            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Draw and update Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // POETIC DRIFT
        n.x += n.vx;
        n.y += n.vy;

        // Soft elastic boundaries
        if (n.x < 0) n.x = width;
        if (n.x > width) n.x = 0;
        if (n.y < 0) n.y = height;
        if (n.y > height) n.y = 0;

        // Micro-pulsing size
        n.pulsePhase += n.pulseSpeed;
        n.radius = n.baseRadius + Math.sin(n.pulsePhase) * 0.5;

        // Interaction with "Human Locus"
        const hDx = n.x - humanLocus.x;
        const hDy = n.y - humanLocus.y;
        const hDist = Math.sqrt(hDx * hDx + hDy * hDy);

        let color = 'rgba(138, 106, 74, 0.25)'; // standard muted brown
        let glowSize = 0;

        if (hDist < humanLocus.radius) {
          const influence = 1 - hDist / humanLocus.radius;
          // Transition node into caramel bronze color
          color = `rgba(182, 122, 61, ${0.28 + influence * 0.52})`;
          glowSize = influence * 6;

          // Poetic subtle gravity pull - particles gently drift toward the center of the question
          n.x -= (hDx / hDist) * influence * 0.12;
          n.y -= (hDy / hDist) * influence * 0.12;
        }

        // Render node glow
        if (glowSize > 0) {
          ctx.fillStyle = 'rgba(182, 122, 61, 0.08)';
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius + glowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        // Render node core
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
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
      className="absolute inset-0 w-full h-full pointer-events-auto z-0 opacity-80"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
}
