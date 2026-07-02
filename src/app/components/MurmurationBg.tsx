export function MurmurationBg() {
  // 18 dots, each with its own drift path and timing offset.
  // Sizes and opacities vary slightly so it reads as organic, not mechanical.
  const dots = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: 3 + (i % 4) * 1.5,
    delay: (i * 0.45) % 6,
    duration: 16 + (i % 5) * 3,
    startX: 5 + (i * 5.3) % 90,
    startY: 10 + (i * 7.1) % 70,
  }));

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {dots.map((d) => (
        <div
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.startX}%`,
            top: `${d.startY}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            backgroundColor: d.id % 2 === 0 ? 'var(--accent)' : 'var(--text-muted)',
            opacity: 0.45,
            animation: `murmur-drift-${d.id % 3} ${d.duration}s ease-in-out ${d.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
