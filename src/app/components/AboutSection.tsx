import ivanImage from '../../imports/ivan_about.jpeg';

export function AboutSection() {
  return (
    <section className="relative py-24 sm:py-36 md:py-48 overflow-hidden bg-dark-bg" id="about">
      {/* Cinematic background gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-surface) 50%, var(--dark-bg) 100%)',
        }}
      />
 
      <div className="relative z-10 max-w-[1150px] mx-auto px-6 sm:px-12">
        <p
          className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[34px] italic leading-[1.2] tracking-[-0.01em] mb-12 sm:mb-16 reveal"
          style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--dark-text-secondary)', fontWeight: 'normal' }}
        >
          Not what I do. <span className="font-semibold not-italic text-white">Why?</span>
        </p>

        {/* The massive Philosophy-like text block */}
        <div className="reveal mb-16 sm:mb-24">
          <p 
            className="text-[30px] sm:text-[44px] md:text-[58px] lg:text-[64px] italic leading-[1.15] tracking-[-0.02em] text-white max-w-[1000px] mb-8" 
            style={{ fontFamily: 'var(--font-family-serif)', fontWeight: 'normal' }}
          >
            We are drowning in execution. What we lack is the discipline to ask what we are actually building, and <span className="font-semibold not-italic">why it deserves to exist.</span>
          </p>
          <p 
            className="text-[14px] sm:text-[18px] md:text-[21px] lg:text-[25px] italic leading-[1.2] tracking-[-0.01em] text-[var(--dark-text-secondary)] max-w-none sm:whitespace-nowrap" 
            style={{ fontFamily: 'var(--font-family-serif)', fontWeight: 'normal' }}
          >
            I write, direct, and consult on projects that still begin with the question.
          </p>
        </div>

        {/* Lower layout with Image and Links to keep it grounded */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-end mt-16 sm:mt-24">
          {/* Portrait Image Frame */}
          <div className="md:col-span-5 relative reveal px-3 py-3 w-full max-w-[280px]">
            {/* Viewfinder corner brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/25 pointer-events-none z-20" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/25 pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/25 pointer-events-none z-20" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/25 pointer-events-none z-20" />
 
            <div className="relative overflow-hidden aspect-[3/4] border border-white/10 bg-dark-bg">
              {/* Ultra-fine high-resolution mesh/grain overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.24] mix-blend-overlay z-10"
                style={{
                  backgroundImage: `
                    radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px),
                    linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px)
                  `,
                  backgroundSize: '3px 3px, 16px 16px',
                }}
              />
 
              <img
                src={ivanImage}
                alt="Ivan Lewis"
                className="w-full h-full block object-cover transition-transform duration-700 hover:scale-[1.03]"
                loading="lazy"
                referrerPolicy="no-referrer"
                style={{
                  filter: 'grayscale(0.12) saturate(0.88) contrast(1.1) brightness(0.9)',
                  objectPosition: 'center center',
                }}
              />
 
              {/* Cinematic Vignette */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: 'radial-gradient(circle at center, transparent 30%, rgba(10,10,10,0.55) 100%)',
                }}
              />
 
              {/* Viewfinder Center Reticle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 z-10">
                <div className="w-6 h-6 border border-white/40 rounded-full flex items-center justify-center">
                  <div className="w-1 h-1 bg-white/60 rounded-full" />
                </div>
              </div>
            </div>
 
            {/* Micro-editorial description */}
            <div className="mt-4 flex items-center justify-between text-[9px] uppercase tracking-[0.14em] text-white/40 select-none" style={{ fontFamily: 'var(--font-family-mono)' }}>
              <span>FIG. 1.0 — IVAN LEWIS</span>
              <span>25.2702° N, 91.7317° E</span>
            </div>
          </div>

          {/* Social Links on the right */}
          <div className="md:col-span-7 flex flex-col justify-end h-full pb-4">
            <div className="flex flex-wrap gap-6 sm:gap-8 text-[13px] reveal" style={{ fontFamily: 'var(--font-family-mono)' }}>
              <a
                href="https://www.linkedin.com/in/ivan-lewis/"
                target="_blank"
                rel="noopener"
                className="no-underline transition-colors duration-300 hover:text-white border-b border-white/20 hover:border-white pb-1 py-2 inline-flex items-center"
                style={{ color: 'var(--dark-text-secondary)' }}
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/itzivanl/"
                target="_blank"
                rel="noopener"
                className="no-underline transition-colors duration-300 hover:text-white border-b border-white/20 hover:border-white pb-1 py-2 inline-flex items-center"
                style={{ color: 'var(--dark-text-secondary)' }}
              >
                Instagram
              </a>
              <a
                href="https://substack.com/@lastgoodtaste"
                target="_blank"
                rel="noopener"
                className="no-underline transition-colors duration-300 hover:text-white border-b border-white/20 hover:border-white pb-1 py-2 inline-flex items-center"
                style={{ color: 'var(--dark-text-secondary)' }}
              >
                Substack
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
