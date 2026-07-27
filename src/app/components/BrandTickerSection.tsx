export function BrandTickerSection() {
  const brands = [
    {
      name: 'LG',
      svg: (
        <svg viewBox="0 0 110 32" className="h-6 w-auto fill-current">
          <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M16 9v8h6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="11.5" cy="12.5" r="1.8" fill="currentColor" />
          <text x="38" y="22" fontFamily="var(--font-family-sans)" fontWeight="700" fontSize="18" letterSpacing="1" fill="currentColor">LG</text>
        </svg>
      )
    },
    {
      name: 'OnePlus',
      svg: (
        <svg viewBox="0 0 135 32" className="h-6 w-auto fill-current">
          <rect x="2" y="4" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" />
          <text x="7" y="19" fontFamily="var(--font-family-mono)" fontWeight="700" fontSize="12" fill="currentColor">1</text>
          <path d="M22 2v6M19 5h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <rect x="30" y="5" width="100" height="20" fill="currentColor" rx="1" />
          <text x="36" y="19" fontFamily="var(--font-family-sans)" fontWeight="700" fontSize="12" letterSpacing="1.2" fill="#0A0A0A">ONEPLUS</text>
        </svg>
      )
    },
    {
      name: 'Logitech',
      svg: (
        <svg viewBox="0 0 140 32" className="h-7 w-auto fill-current">
          <path d="M4 16C4 9.4 9.4 4 16 4c3 0 5.8 1.1 7.9 3l-3.5 3.5C18.9 9.2 17.5 8.5 16 8.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5c3.2 0 6-2 7.1-4.8H16v-4.2h11.5c.2.8.3 1.7.3 2.5 0 6.6-5.4 12-12 12C9.4 28 4 22.6 4 16z" />
          <circle cx="18" cy="16" r="3" fill="none" stroke="currentColor" strokeWidth="2" />
          <text x="34" y="21" fontFamily="var(--font-family-sans)" fontWeight="600" fontSize="16" letterSpacing="-0.3" fill="currentColor">Logitech</text>
        </svg>
      )
    },
    {
      name: 'Mi',
      svg: (
        <svg viewBox="0 0 70 32" className="h-6 w-auto fill-current">
          <rect x="2" y="3" width="26" height="26" rx="5" fill="currentColor" />
          <path d="M8 21V11h3.5v10H8zm5 0V11h3.5v7H19V11h3.5v10H13z" fill="#0A0A0A" />
          <circle cx="9.75" cy="8.5" r="1.2" fill="#0A0A0A" />
        </svg>
      )
    },
    {
      name: 'Airtel',
      svg: (
        <svg viewBox="0 0 110 32" className="h-6 w-auto fill-current">
          <path d="M6 25C6 13 13 6 22 6v4.5c-6.5 0-11.5 4.5-11.5 14.5H6z" />
          <circle cx="20" cy="22.5" r="2.8" fill="currentColor" />
          <text x="34" y="22" fontFamily="var(--font-family-sans)" fontWeight="600" fontSize="18" letterSpacing="-0.5" fill="currentColor">airtel</text>
        </svg>
      )
    },
    {
      name: 'ONDC',
      svg: (
        <svg viewBox="0 0 95 32" className="h-6 w-auto fill-current">
          <text x="0" y="23" fontFamily="var(--font-family-mono)" fontWeight="800" fontSize="19" letterSpacing="2.5" fill="currentColor">ONDC</text>
        </svg>
      )
    },
    {
      name: 'Intel',
      svg: (
        <svg viewBox="0 0 100 32" className="h-6.5 w-auto fill-current">
          <ellipse cx="28" cy="16" rx="26" ry="13" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-8 28 16)" />
          <text x="12" y="21" fontFamily="var(--font-family-sans)" fontWeight="700" fontSize="18" letterSpacing="-0.8" fill="currentColor">intel</text>
        </svg>
      )
    },
    {
      name: 'Google',
      svg: (
        <svg viewBox="0 0 110 32" className="h-6 w-auto fill-current">
          <path d="M10 16c0-5.5 4.5-10 10-10 2.8 0 5.2 1.1 7 2.8l-2.8 2.8c-1.1-1.1-2.6-1.7-4.2-1.7-3.3 0-6 2.7-6 6s2.7 6 6 6c2.5 0 4.6-1.5 5.5-3.6H20v-3.8h9.2c.1.5.2 1.1.2 1.8 0 5.8-3.9 10.1-9.4 10.1-5.5 0-10-4.5-10-10z" />
          <text x="34" y="21" fontFamily="var(--font-family-sans)" fontWeight="600" fontSize="17" letterSpacing="-0.5" fill="currentColor">Google</text>
        </svg>
      )
    },
    {
      name: 'Adobe',
      svg: (
        <svg viewBox="0 0 105 32" className="h-6 w-auto fill-current">
          <polygon points="2,26 10,2 18,26" fill="currentColor" />
          <polygon points="10,2 18,26 14,26" fill="#0A0A0A" />
          <polygon points="6,15 14,15 10,2" fill="#0A0A0A" />
          <text x="26" y="21" fontFamily="var(--font-family-sans)" fontWeight="700" fontSize="17" letterSpacing="0.8" fill="currentColor">Adobe</text>
        </svg>
      )
    },
    {
      name: 'Jet Airways',
      svg: (
        <svg viewBox="0 0 150 32" className="h-6 w-auto fill-current">
          <text x="0" y="21" fontFamily="var(--font-family-serif)" fontWeight="700" fontSize="15" letterSpacing="1" fill="currentColor">JET AIRWAYS</text>
          <ellipse cx="138" cy="16" rx="8" ry="5" fill="currentColor" transform="rotate(-25 138 16)" />
        </svg>
      )
    },
    {
      name: 'Raw & Ruckus',
      svg: (
        <svg viewBox="0 0 150 46" className="h-7.5 w-auto fill-current">
          {/* Left Leaf */}
          <path d="M 3 22 C -1 16 8 8 21 16 C 24 23 11 29 3 22 Z" fill="currentColor" />
          <path d="M 21 16 Q 26 18 29 20" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />

          {/* Top Right Leaf */}
          <path d="M 125 13 C 122 4 130 -2 137 1 C 139 10 131 16 125 13 Z" fill="currentColor" />
          <path d="M 125 13 Q 121 16 120 20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Middle Right Leaf */}
          <path d="M 108 22 C 112 12 135 10 146 15 C 148 27 124 31 108 22 Z" fill="currentColor" />
          <path d="M 108 22 Q 100 25 94 27" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* RAW (Top) */}
          <g fill="currentColor">
            {/* R */}
            <path d="M 32 6 c 0 0 3 -1 6 -1 c 4 0 7 2 7 5 c 0 3 -2 5 -5 6 l 5 8 h -4.5 l -4.5 -7 h -1.5 v 7 h -4 Z m 4 3.5 v 3.5 h 2 c 2 0 3 -0.8 3 -1.8 c 0 -1 -1 -1.7 -3 -1.7 Z" />
            {/* A */}
            <path d="M 49 23 l 5.5 -18 h 4 l 5.5 18 h -4.2 l -1 -3.5 h -4.6 l -1 3.5 Z m 5.1 -7 h 3.2 l -1.6 -6.2 Z" />
            {/* W */}
            <path d="M 66 5 h 4.2 l 2.8 12 l 3 -12 h 3.5 l 3 12 l 2.8 -12 h 4.2 l -4.8 18 h -4 l -3 -11.5 l -3 11.5 h -4 Z" />
          </g>

          {/* & RUCKUS (Bottom) */}
          <g fill="currentColor">
            {/* & */}
            <path d="M 17 31 c -1.5 0 -2.8 1 -2.8 2.3 c 0 1.2 0.8 2 2.2 3.2 l 2.5 2.1 c -1.2 2 -3.2 3.4 -5.4 3.4 c -2.8 0 -4.5 -2 -4.5 -4.5 c 0 -3.2 2.8 -6.2 6.5 -9.2 l -2.5 -3.3 c -2.2 1.8 -3.8 4.2 -3.8 7 c 0 4.2 3.2 7 7.5 7 c 3.5 0 6.2 -2 8 -4.8 l 1.8 1.8 h 2.5 l -3 -3.2 l -2 -2 c 1.2 -1.2 2 -2.8 2 -4.5 c 0 -2.5 -2 -4.2 -4.5 -4.2 c -2.2 0 -4.2 1.5 -4.5 3.8 l 2.8 0.6 c 0.2 -1 1 -1.6 1.8 -1.6 c 1.2 0 2 0.8 2 2 c 0 1 -0.5 2 -1.5 3 Z" />
            
            {/* R */}
            <path d="M 28 27 h 4 v 5 h 2 c 2.5 0 4 -1 4 -2.8 c 0 -1.8 -1.2 -2.2 -3.5 -2.2 h -6.5 v 15 h 4 v -5 h 1.5 l 3.5 5 h 4.8 l -4.2 -6 c 2.2 -1 3.5 -2.8 3.5 -5.5 c 0 -3.8 -2.8 -5.5 -7.2 -5.5 h -7.9 Z" />

            {/* U */}
            <path d="M 45 27 h 4 v 9 c 0 2 1.2 3 2.8 3 c 1.6 0 2.8 -1 2.8 -3 v -9 h 4 v 9 c 0 4.2 -2.8 6.5 -6.8 6.5 c -4 0 -6.8 -2.3 -6.8 -6.5 Z" />

            {/* C */}
            <path d="M 72.5 30.5 c -1 -1 -2.2 -1.5 -3.8 -1.5 c -3 0 -5.2 2.5 -5.2 6 c 0 3.5 2.2 6 5.2 6 c 1.6 0 2.8 -0.5 3.8 -1.5 l 2.5 2.8 c -1.8 1.8 -3.8 2.7 -6.5 2.7 c -5.5 0 -9.2 -4 -9.2 -10 c 0 -6 3.7 -10 9.2 -10 c 2.7 0 4.7 0.9 6.5 2.7 Z" />

            {/* K */}
            <path d="M 77 27 h 4 v 5.5 l 5 -5.5 h 5.2 l -6.2 6.5 l 6.8 8.5 h -5.2 l -4.8 -6.2 l -0.8 0.8 v 5.4 h -4 Z" />

            {/* U (with Rock/Horns Hand 🤘 Gesture inside!) */}
            <g transform="translate(93, 26)">
              <path d="M 1 1 h 3.5 v 4 h -0.5 v -2 h -1 v 8 c 0 2.2 1.5 3.5 3.5 3.5 s 3.5 -1.3 3.5 -3.5 v -8 h -1 v 2 h -0.5 v -4 h 3.5 v 8 c 0 4.2 -2.8 6.8 -6.5 6.8 s -6.5 -2.6 -6.5 -6.8 Z" />
              <path d="M 3 0 h 2 v 6 h -2 Z" />
              <path d="M 8.5 0 h 2 v 6 h -2 Z" />
              <path d="M 5.2 4 h 3.2 v 4 h -3.2 Z" />
            </g>

            {/* S */}
            <path d="M 112 30.2 c -1.2 -1 -2.5 -1.5 -4 -1.5 c -1.8 0 -2.8 0.8 -2.8 1.8 c 0 1 0.8 1.5 2.8 2 l 2.2 0.6 c 3.2 0.8 5 2.2 5 4.8 c 0 3.5 -2.8 5.6 -7 5.6 c -2.8 0 -5.2 -0.9 -7 -2.6 l 2.2 -2.8 c 1.4 1.4 3 2 4.8 2 c 2 0 3 -0.8 3 -1.8 c 0 -1 -0.8 -1.5 -2.8 -2 l -2.2 -0.6 c -3.2 -0.8 -5 -2.2 -5 -4.8 c 0 -3.2 2.6 -5.2 6.5 -5.2 c 2.5 0 4.8 0.8 6.2 2.3 Z" />
          </g>
        </svg>
      )
    },
    {
      name: 'Oppo',
      svg: (
        <svg viewBox="0 0 95 32" className="h-6 w-auto fill-current">
          <text x="0" y="21" fontFamily="var(--font-family-sans)" fontWeight="500" fontSize="20" letterSpacing="-0.5" fill="currentColor">oppo</text>
        </svg>
      )
    },
    {
      name: 'Jeep',
      svg: (
        <svg viewBox="0 0 85 32" className="h-6.5 w-auto fill-current">
          <text x="0" y="22" fontFamily="var(--font-family-sans)" fontWeight="900" fontSize="22" letterSpacing="1.5" fill="currentColor">Jeep</text>
        </svg>
      )
    },
    {
      name: 'Pernod Ricard',
      svg: (
        <svg viewBox="0 0 170 32" className="h-6 w-auto fill-current">
          <polygon points="10,2 13,10 21,10 15,15 17,23 10,18 3,23 5,15 0,10 8,10" fill="currentColor" transform="scale(0.8) translate(0, 3)" />
          <text x="22" y="21" fontFamily="var(--font-family-sans)" fontWeight="700" fontSize="14" letterSpacing="1.2" fill="currentColor">PERNOD RICARD</text>
        </svg>
      )
    },
    {
      name: 'Tata Motors',
      svg: (
        <svg viewBox="0 0 145 32" className="h-6 w-auto fill-current">
          <ellipse cx="12" cy="16" rx="10" ry="7" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M7 13h10M12 13v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <text x="28" y="21" fontFamily="var(--font-family-sans)" fontWeight="700" fontSize="14" letterSpacing="1.2" fill="currentColor">TATA MOTORS</text>
        </svg>
      )
    },
    {
      name: 'Hyundai',
      svg: (
        <svg viewBox="0 0 135 32" className="h-6 w-auto fill-current">
          <ellipse cx="12" cy="16" rx="10" ry="8" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-15 12 16)" />
          <path d="M8 11v10M16 11v10M8 16h8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" transform="rotate(-10 12 16)" />
          <text x="28" y="21" fontFamily="var(--font-family-sans)" fontWeight="800" fontSize="14" letterSpacing="1.5" fill="currentColor">HYUNDAI</text>
        </svg>
      )
    },
    {
      name: 'Devil\'s Circuit',
      svg: (
        <svg viewBox="0 0 165 32" className="h-6 w-auto fill-current">
          <path d="M4 6l8 18 8-18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <text x="26" y="21" fontFamily="var(--font-family-mono)" fontWeight="800" fontSize="13" letterSpacing="1" fill="currentColor">DEVIL'S CIRCUIT</text>
        </svg>
      )
    },
    {
      name: 'Sony LIV',
      svg: (
        <svg viewBox="0 0 115 32" className="h-6 w-auto fill-current">
          <text x="0" y="21" fontFamily="var(--font-family-sans)" fontWeight="800" fontSize="16" letterSpacing="1" fill="currentColor">SONY</text>
          <text x="56" y="21" fontFamily="var(--font-family-sans)" fontWeight="300" fontSize="16" letterSpacing="1.5" fill="currentColor">LIV</text>
        </svg>
      )
    },
    {
      name: 'Wikipedia',
      svg: (
        <svg viewBox="0 0 140 32" className="h-6 w-auto fill-current">
          <circle cx="12" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <text x="7" y="21" fontFamily="var(--font-family-serif)" fontWeight="700" fontSize="14" fill="currentColor">W</text>
          <text x="28" y="21" fontFamily="var(--font-family-serif)" fontWeight="600" fontSize="16" letterSpacing="0.8" fill="currentColor">WIKIPEDIA</text>
        </svg>
      )
    },
    {
      name: 'Sanofi',
      svg: (
        <svg viewBox="0 0 105 32" className="h-6 w-auto fill-current">
          <circle cx="9" cy="16" r="5" fill="currentColor" opacity="0.6" />
          <circle cx="15" cy="12" r="4.5" fill="currentColor" opacity="0.9" />
          <text x="26" y="21" fontFamily="var(--font-family-sans)" fontWeight="600" fontSize="16" letterSpacing="0.5" fill="currentColor">sanofi</text>
        </svg>
      )
    },
    {
      name: 'Banyan Group',
      svg: (
        <svg viewBox="0 0 155 32" className="h-6.5 w-auto fill-current">
          <text x="0" y="15" fontFamily="var(--font-family-sans)" fontWeight="700" fontSize="13" letterSpacing="-0.3" fill="currentColor">banyan</text>
          <text x="0" y="27" fontFamily="var(--font-family-sans)" fontWeight="300" fontSize="13" letterSpacing="-0.3" fill="currentColor">group</text>
        </svg>
      )
    }
  ];

  // Triplicating array for continuous, seamless, glitch-free marquee loop
  const brandLoop = [...brands, ...brands, ...brands];

  return (
    <section 
      className="relative py-10 sm:py-14 overflow-hidden border-y select-none group"
      style={{ backgroundColor: '#0A0A0A', borderColor: 'rgba(255, 255, 255, 0.08)' }}
      id="brands"
    >
      <style>{`
        @keyframes brandMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.3333%, 0, 0);
          }
        }
        .animate-brand-marquee {
          display: flex;
          width: max-content;
          animation: brandMarquee 50s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-brand-marquee {
            animation: none !important;
          }
        }
      `}</style>

      {/* Editorial Header Tag */}
      <div className="max-w-[1000px] mx-auto px-5 sm:px-10 lg:px-16 mb-8 text-center sm:text-left">
        <span 
          className="inline-block text-[11px] uppercase tracking-[0.25em] font-normal"
          style={{ fontFamily: 'var(--font-family-mono)', color: '#888888' }}
        >
          BRAND EXPERIENCE &amp; COLLABORATIONS
        </span>
      </div>

      {/* Fade Edge Gradient Overlays for Seamless Fading */}
      <div 
        className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to right, #0A0A0A 15%, transparent 100%)' }}
      />
      <div 
        className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to left, #0A0A0A 15%, transparent 100%)' }}
      />

      {/* Ticker Container */}
      <div 
        className="relative z-10 w-full overflow-hidden py-3"
        tabIndex={0}
        aria-label="Monochrome brand experience logo ticker. Hover to pause."
      >
        <div className="animate-brand-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] items-center">
          {brandLoop.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center px-8 sm:px-12 opacity-60 hover:opacity-100 transition-all duration-300 text-white cursor-pointer transform hover:scale-105"
              title={brand.name}
            >
              {brand.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
