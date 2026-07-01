import { useEffect, useRef, useState } from 'react';
import thinkingVideo from '../../imports/thinking_bg.mp4';

interface ThinkingFragment {
  title: string;
  lead: string;
  body: string;
  renderIcon: () => React.ReactNode;
}

export function SimplifiedThinkingSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, [shouldLoad]);

  const fragments: ThinkingFragment[] = [
    {
      title: 'Timing is sight',
      lead: 'A story told too early feels premature. Told too late, it is a\u00A0post-mortem.',
      body: 'Instinct is knowing the precise moment culture is ready to hear something true. That is not prediction. That is\u00A0listening.',
      renderIcon: () => (
        <svg className="w-5 h-5 text-[var(--dark-text-secondary)] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="12" cy="12" r="8" strokeDasharray="2 2" />
          <line x1="12" y1="12" x2="12" y2="4" style={{ animation: 'sweep 3s infinite linear', transformOrigin: '12px 12px' }} />
        </svg>
      ),
    },
    {
      title: 'Making is thinking',
      lead: 'The script changes when you write it. The film changes when you\u00A0direct it.',
      body: 'Ideas live in abstraction until they hit material and fight back. That physical resistance is where the real work\u00A0starts.',
      renderIcon: () => (
        <svg className="w-5 h-5 text-[var(--dark-text-secondary)] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M 8 6 L 4 6 L 4 18 L 8 18" style={{ animation: 'shift-left 2.2s infinite ease-in-out' }} />
          <path d="M 16 6 L 20 6 L 20 18 L 16 18" style={{ animation: 'shift-right 2.2s infinite ease-in-out' }} />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Stories move people',
      lead: 'A brand needs permission to speak. That permission is earned, not\u00A0bought.',
      body: 'True authority comes from being honest about what problem you solve and where you fall short. Narrative is the ground you\u00A0stand on.',
      renderIcon: () => (
        <svg className="w-5 h-5 text-[var(--dark-text-secondary)] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M 4 12 Q 8 6, 12 12 T 20 12" strokeDasharray="24" strokeDashoffset="0" style={{ animation: 'draw-path 3.2s infinite ease-in-out' }} />
          <circle cx="20" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: 'Tools are tools',
      lead: 'Generative AI is fast and useful. But speed without intention is\u00A0noise.',
      body: "The question isn't what the technology can do. It's the same question it's always been: what does this specific story\u00A0need?",
      renderIcon: () => (
        <svg className="w-5 h-5 text-[var(--dark-text-secondary)] group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <g style={{ animation: 'spin-gear 12s infinite linear', transformOrigin: '12px 12px' }}>
            <circle cx="12" cy="12" r="6" />
            <line x1="12" y1="3" x2="12" y2="5" />
            <line x1="12" y1="19" x2="12" y2="21" />
            <line x1="3" y1="12" x2="5" y2="12" />
            <line x1="19" y1="12" x2="21" y2="12" />
            <line x1="5.64" y1="5.64" x2="7.05" y2="7.05" />
            <line x1="16.95" y1="16.95" x2="18.36" y2="18.36" />
            <line x1="5.64" y1="18.64" x2="7.05" y2="17.23" />
            <line x1="16.95" y1="7.05" x2="18.36" y2="8.46" />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-16 sm:py-24 lg:py-28 overflow-hidden bg-dark-bg" style={{ backgroundColor: 'var(--dark-bg)' }} id="thinking">
      <style>{`
        @keyframes sweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes shift-left {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-3px); }
        }
        @keyframes shift-right {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(3px); }
        }
        @keyframes draw-path {
          0%, 100% { stroke-dashoffset: 24; }
          50% { stroke-dashoffset: 0; }
        }
        @keyframes spin-gear {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      {/* Video Background with heavy cinematic blur and contrast correction */}
      {shouldLoad ? (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          src={thinkingVideo}
          className="absolute top-0 left-0 w-full h-full object-cover select-none"
          style={{
            objectPosition: 'center',
            filter: 'saturate(0.5) contrast(1.15) brightness(0.35) blur(4px)',
          }}
        />
      ) : (
        <div className="absolute inset-0" style={{ backgroundColor: 'var(--dark-bg)' }} />
      )}

      {/* Dark overlay with vertical gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(31, 19, 10, 0.75) 0%, rgba(31, 19, 10, 0.9) 100%)',
        }}
      />

      {/* Sharp High-Resolution Digital Micro-Mesh Overlay to perfectly mask any pixelation */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-overlay"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.025) 1.5px, transparent 1.5px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '4px 4px, 24px 24px, 24px 24px',
          backgroundPosition: 'center center',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 90%)',
        }}
      />

      <div className="relative z-10 max-w-[960px] mx-auto px-6 sm:px-10 lg:px-12">
        <span className="block text-[13px] uppercase font-light tracking-[0.16em] reveal" style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 400, color: 'var(--dark-text-secondary)' }}>
          THINKING
        </span>
        <p className="text-[16px] italic mt-2 mb-8 reveal" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--dark-text-secondary)' }}>
          still arguing with myself
        </p>

        {/* 2x2 Grid with high-end cards to split textual heaviness */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6">
          {fragments.map((fragment, i) => (
            <div
              key={i}
              className="group relative p-7 sm:p-8 bg-white/[0.012] border border-white/[0.07] hover:border-white/[0.18] hover:bg-white/[0.03] transition-all duration-[450ms] ease-out flex flex-col justify-between reveal rounded-none"
              style={{
                transitionDelay: `${i * 100}ms`,
                backdropFilter: 'blur(3px)',
                WebkitBackdropFilter: 'blur(3px)',
              }}
            >
              <div>
                {/* Header with animated matching icon */}
                <div className="flex items-center justify-between mb-5 border-b border-white/[0.06] pb-4">
                  <span
                    className="text-[11px] uppercase tracking-[0.14em]"
                    style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--dark-text-secondary)' }}
                  >
                    {fragment.title}
                  </span>
                  <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {fragment.renderIcon()}
                  </div>
                </div>

                {/* Highly structured typographic layers to prevent visual bloat */}
                <h4
                  className="text-[16px] sm:text-[17px] font-normal leading-[1.6] text-white mb-4"
                  style={{ fontFamily: 'var(--font-family-serif)' }}
                >
                  "{fragment.lead}"
                </h4>

                <p
                  className="text-[17px] text-white/55 leading-[1.75] font-light"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {fragment.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
