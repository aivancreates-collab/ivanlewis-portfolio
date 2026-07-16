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
        className="absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none"
        style={{
          objectPosition: 'center 30%',
          filter: 'saturate(0.8) contrast(1.1) brightness(0.85)',
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
          className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[62px] leading-[1.15] font-normal italic tracking-[-0.02em] mb-8 sm:mb-12 text-[var(--text)] text-balance" 
          style={{ fontFamily: 'var(--font-family-serif)' }}
        >
          Tools change.
          <br />
          The human question does not.
        </h1>

        <div className="flex justify-center items-center mt-6 sm:mt-8">
          <a
            href="#connect"
            className="text-[16px] md:text-[15px] tracking-[0.06em] font-normal transition-all duration-300 text-[var(--text-secondary)] hover:text-[var(--text)] border-b border-[var(--text-secondary)]/30 hover:border-[var(--text)] pb-1.5 inline-flex items-center"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Initiate a Brief
          </a>
        </div>
      </div>
    </section>
  );
}
