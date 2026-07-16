import { useEffect, useRef, useState } from 'react';
import thinkingVideo from '../../imports/thinking_bg.mp4';

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

  // Exact headlines as specified in the instructions with corrected punctuation
  const tickerItems = [
    {
      title: 'Timing is Sight',
      quote: '“When is culture ready to hear something true?”'
    },
    {
      title: 'Making is Thinking',
      quote: '“What are you creating today?”'
    },
    {
      title: 'Stories Move People',
      quote: '“Narrative is the ground a brand stands upon. Be honest about the problems you solve and where you fall short.”'
    },
    {
      title: 'Tools are Tools',
      quote: '“Speed without intention is noise. What does your story need that tech can provide?”'
    }
  ];

  // Triplicating items to ensure smooth continuous seamless looping marquee
  const itemsLoop = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 overflow-hidden bg-dark-bg border-y"
      style={{ backgroundColor: 'var(--dark-bg)', borderColor: 'rgba(247, 249, 250, 0.08)' }}
      id="thinking"
    >
      <style>{`
        @keyframes slowMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.3333%, 0, 0);
          }
        }
        .animate-slow-marquee {
          display: flex;
          width: max-content;
          animation: slowMarquee 45s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-slow-marquee {
            animation: none !important;
          }
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
          className="absolute top-0 left-0 w-full h-full object-cover select-none pointer-events-none"
          style={{
            objectPosition: 'center',
            filter: 'saturate(0.45) contrast(1.1) brightness(0.25) blur(6px)',
          }}
        />
      ) : (
        <div className="absolute inset-0" style={{ backgroundColor: 'var(--dark-bg)' }} />
      )}

      {/* Dark overlay with vertical gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(22, 17, 14, 0.85) 0%, rgba(22, 17, 14, 0.95) 100%)',
        }}
      />

      {/* Grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18] mix-blend-overlay"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(rgba(255,255,255,0.015) 1.5px, transparent 1.5px)
          `,
          backgroundSize: '4px 4px, 24px 24px',
        }}
      />

      {/* Ambient Vignette */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)',
        }}
      />

      {/* Ticker Container - focusable for accessibility and keyboard pause */}
      <div 
        className="relative z-10 w-full overflow-hidden py-4 select-none group"
        tabIndex={0}
        aria-label="Thinking section ticker. Hover or focus to pause scrolling."
      >
        <div 
          className="animate-slow-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] group-focus:[animation-play-state:paused] focus:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
        >
          {itemsLoop.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-6 sm:gap-8 px-12 sm:px-16 whitespace-nowrap border-r border-white/10"
            >
              {/* Headline Category (Sans-Serif) */}
              <span 
                className="text-[14px] sm:text-[15px] uppercase tracking-[0.14em] font-normal select-none"
                style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--dark-text-secondary)' }}
              >
                {item.title}
              </span>

              {/* En-dash Separator */}
              <span className="text-white/30 text-[14px]">—</span>

              {/* Exact Quote (Editorial Serif Italic) */}
              <span 
                className="text-[16px] sm:text-[18px] md:text-[20px] font-light italic text-white/90 select-none tracking-tight"
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                {item.quote}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
