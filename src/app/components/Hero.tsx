import { useEffect, useRef } from 'react';
import bgVideo from '../../imports/hero_bg.mp4';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, []);

  return (
    <section 
      className="relative h-[100dvh] flex items-center md:items-end justify-center overflow-hidden"
      style={{ minHeight: '100svh', backgroundColor: 'var(--dark-bg)' }}
      id="top"
    >
      {/* Video Background with Cinematic Treatment */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src={bgVideo}
        className="absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none z-[0]"
        style={{
          objectPosition: 'center 30%',
          filter: 'saturate(0.8) contrast(1.1) brightness(0.85)',
        }}
      />

      {/* Digital Mesh Filter Overlay */}
      <div
        className="digital-mesh-filter absolute top-0 left-0 w-full h-full pointer-events-none z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '3px 3px',
          mixBlendMode: 'screen',
          opacity: 0.12,
        }}
      />

      {/* Cinematic Letterbox Bars - hidden on mobile */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-[6vh] pointer-events-none z-[5]" style={{ backgroundColor: 'var(--dark-bg)' }} />
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-[6vh] pointer-events-none z-[5]" style={{ backgroundColor: 'var(--dark-bg)' }} />

      {/* Vignette Effect */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-[2]"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 15%, rgba(0,0,0,0.35) 65%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Strong dark overlay for superior contrast */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]"
        style={{
          background: 'linear-gradient(180deg, rgba(22, 17, 14, 0.4) 0%, rgba(22, 17, 14, 0.7) 100%)',
        }}
      />

      {/* Stronger bottom scrim for flawless section transition to Reel section */}
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none z-[3]"
        style={{
          height: '35%',
          background: 'linear-gradient(180deg, rgba(22, 17, 14, 0) 0%, rgba(22, 17, 14, 1) 100%)',
        }}
      />

      <div className="relative z-10 text-center max-w-4xl px-6 pb-16 md:pb-28 md:px-12 w-full flex flex-col justify-end md:justify-center h-full md:h-auto select-none">
        <h1 
          className="text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.2] font-normal not-italic tracking-[-0.02em] text-[var(--text)] text-balance" 
          style={{ fontFamily: 'var(--font-family-serif)' }}
        >
          From pencil to prompt, the work still begins with <span className="italic" style={{ color: 'var(--accent)' }}>a question</span>.
        </h1>
      </div>
    </section>
  );
}
