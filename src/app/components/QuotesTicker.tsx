import { useEffect, useRef } from 'react';

export function QuotesTicker() {
  const tickerItems = [
    {
      title: 'TIMING IS SIGHT',
      quote: '“When is culture ready to hear something true?”'
    },
    {
      title: 'MAKING IS THINKING',
      quote: '“What are you creating today?”'
    },
    {
      title: 'STORIES MOVE PEOPLE',
      quote: '“Narrative is the ground a brand stands upon.”'
    },
    {
      title: 'TOOLS ARE TOOLS',
      quote: '“Speed without intention is noise.”'
    }
  ];

  // Triplicating items to ensure smooth continuous seamless looping marquee
  const itemsLoop = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <section 
      className="relative w-full py-2.5 sm:py-3 overflow-hidden border-y z-20 select-none group"
      style={{ 
        backgroundColor: '#0D0D0D', 
        borderColor: 'rgba(255, 255, 255, 0.1)' 
      }}
      aria-label="Editorial quotes ticker"
    >
      <style>{`
        @keyframes quotesMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-quotes-marquee {
          display: flex;
          width: max-content;
          animation: quotesMarquee 75s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-quotes-marquee {
            animation: none !important;
          }
        }
      `}</style>

      {/* Fade Gradients at Edges */}
      <div 
        className="absolute top-0 bottom-0 left-0 w-12 sm:w-20 pointer-events-none z-10" 
        style={{ background: 'linear-gradient(to right, #0D0D0D, transparent)' }}
      />
      <div 
        className="absolute top-0 bottom-0 right-0 w-12 sm:w-20 pointer-events-none z-10" 
        style={{ background: 'linear-gradient(to left, #0D0D0D, transparent)' }}
      />

      <div 
        className="animate-quotes-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]"
        tabIndex={0}
      >
        {itemsLoop.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 sm:gap-6 px-6 sm:px-10 whitespace-nowrap border-r border-white/10"
          >
            {/* Category Tag */}
            <span 
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-normal"
              style={{ fontFamily: 'var(--font-family-mono)', color: '#888888' }}
            >
              {item.title}
            </span>

            {/* Accent Dot */}
            <span className="text-[var(--accent-warm)] text-[10px] opacity-70">◆</span>

            {/* Quote */}
            <span 
              className="text-[13px] sm:text-[14px] italic text-white/90 tracking-tight"
              style={{ fontFamily: 'var(--font-family-serif)' }}
            >
              {item.quote}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
