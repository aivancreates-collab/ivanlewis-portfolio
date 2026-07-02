import { useEffect, useState, useRef } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);
  const trailingPos = useRef({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsPointerFine(window.matchMedia('(pointer: fine)').matches);
  }, []);

  useEffect(() => {
    if (!isPointerFine) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsExpanded(true);
    const handleMouseLeave = () => setIsExpanded(false);

    document.addEventListener('mousemove', handleMouseMove);

    // Periodically search for interactive items to attach hover listeners (to support dynamic items)
    const attachListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [data-interactive], input, select, textarea');
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    attachListeners();
    const interval = setInterval(attachListeners, 1500);

    // Trailing frame loop for the outer ring to create a buttery smooth organic lag
    let animationFrameId: number;
    const updateTrail = () => {
      const ease = 0.16; // smooth lag factor
      const dx = position.x - trailingPos.current.x;
      const dy = position.y - trailingPos.current.y;
      
      trailingPos.current.x += dx * ease;
      trailingPos.current.y += dy * ease;
      
      setTrail({ x: trailingPos.current.x, y: trailingPos.current.y });
      animationFrameId = requestAnimationFrame(updateTrail);
    };
    animationFrameId = requestAnimationFrame(updateTrail);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPointerFine, position]);

  if (!isPointerFine) return null;

  return (
    <>
      {/* Tiny Sharp Center Dot */}
      <div
        className="fixed rounded-full pointer-events-none z-[9999] transition-transform duration-[220ms] ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isExpanded ? 0.3 : 1})`,
          width: '5px',
          height: '5px',
          backgroundColor: '#ffffff',
          mixBlendMode: 'difference',
        }}
      />
      {/* Buttery Smooth Trailing Outer Ring */}
      <div
        className="fixed rounded-full pointer-events-none z-[9998]"
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
          transform: 'translate(-50%, -50%)',
          width: isExpanded ? '38px' : '18px',
          height: isExpanded ? '38px' : '18px',
          border: '1px solid rgba(255, 255, 255, 0.75)',
          mixBlendMode: 'difference',
          transition: 'width 0.22s cubic-bezier(0.16, 1, 0.3, 1), height 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </>
  );
}
