import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

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

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, [isPointerFine]);

  if (!isPointerFine) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999]"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate(-2px, -2px) scale(${isExpanded ? 1.2 : 1})`,
        width: '24px',
        height: '24px',
        transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 3L21 9L13.5 12.5L10 20L3 3Z"
          fill={isExpanded ? 'var(--accent-warm)' : '#FFFFFF'}
          stroke="#0D0D0D"
          strokeWidth="1.5"
          strokeLinejoin="round"
          className="transition-colors duration-200"
        />
      </svg>
    </div>
  );
}

