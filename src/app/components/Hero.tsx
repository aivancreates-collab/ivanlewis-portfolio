import { useEffect, useRef } from 'react';
import bgVideo from '../../imports/hero_bg.mp4';

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video plays on load (some browsers require this)
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Auto-play was prevented, user interaction needed
        // Video will play when user interacts with page
      });
    }
  }, []);

  return (
    <section 
      className="relative h-[100dvh] flex items-center md:items-end justify-center overflow-hidden"
      style={{ minHeight: '100svh', backgroundColor: 'var(--dark-bg)' }}
    >
      {/* Video Background with Cinematic Treatment */}
      {/* TODO: add poster */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        src={bgVideo}
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          objectPosition: 'center 20%',
          filter: 'saturate(0.85) contrast(1.05) brightness(0.92)',
        }}
      />

      {/* Cinematic Letterbox Bars - hidden on mobile */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-[8vh] pointer-events-none z-[5]" style={{ backgroundColor: 'var(--dark-bg)' }} />
      <div className="hidden md:block absolute bottom-0 left-0 w-full h-[8vh] pointer-events-none z-[5]" style={{ backgroundColor: 'var(--dark-bg)' }} />

      {/* Vignette Effect */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      {/* Dark overlay for text readability */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      {/* Stronger bottom scrim on mobile */}
      <div
        className="md:hidden absolute bottom-0 left-0 w-full pointer-events-none"
        style={{
          height: '50%',
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.75) 100%)',
        }}
      />

      <div className="relative z-10 text-center max-w-3xl px-6 pb-12 md:pb-20 md:px-8 w-full flex flex-col justify-end md:justify-center h-full md:h-auto">
        <h1 className="text-[26px] sm:text-[40px] md:text-[48px] lg:text-[52px] leading-[1.2] font-normal italic tracking-[-0.5px] mb-4 sm:mb-12 text-white" style={{ fontFamily: 'var(--font-family-serif)' }}>
          Tools change.
          <br />
          The human question does not.
        </h1>

        <div className="flex justify-center items-center mt-8 sm:mt-12">
          <a
            href="#connect"
            className="text-[11px] uppercase tracking-[0.16em] transition-all duration-300 text-white/60 hover:text-white border-b border-white/20 hover:border-white pb-1 inline-flex items-center"
            style={{ fontFamily: 'var(--font-family-mono)' }}
          >
            initiate brief
          </a>
        </div>
      </div>
    </section>
  );
}
