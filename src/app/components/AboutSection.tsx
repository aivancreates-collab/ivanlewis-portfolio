import ivanImage from '../../imports/ivan_about.jpeg';

export function AboutSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-dark-bg" id="about">
      {/* Cinematic background gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-surface) 50%, var(--dark-bg) 100%)',
        }}
      />
 
      <div className="relative z-10 max-w-[1050px] mx-auto px-5 sm:px-10 lg:px-16">
        
        {/* Section label (Guaranteed >= 14px on mobile) */}
        <p
          className="text-[14px] lg:text-[13px] uppercase tracking-[0.2em] mb-8 md:mb-12 reveal font-normal"
          style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--dark-text-secondary)' }}
        >
          Not what I do. <span className="text-white font-semibold">Why.</span>
        </p>

        {/* 12-Column Grid creating perfect side-by-side image-to-text balance on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Biography Narrative Column (7 of 12 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full reveal">
            <div className="space-y-6 max-w-[640px]">
              <p 
                className="text-[20px] sm:text-[24px] md:text-[28px] italic leading-[1.35] tracking-tight text-white/95 font-light text-balance" 
                style={{ fontFamily: 'var(--font-family-serif)', fontWeight: 'normal' }}
              >
                The question has always been the same. Not what to make, but <span className="font-semibold not-italic">why this</span>, why now, why will anyone care a year from now. Everything else gets figured out when the <span className="font-semibold not-italic">why</span> gets answered honestly.
              </p>

              <p 
                className="text-[17px] sm:text-[18px] leading-[1.7] text-white/70 font-light" 
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                The work moves across film, writing, brand, and strategy. The problem underneath is always the same. Something needs a <span className="font-semibold not-italic text-white">reason to exist</span> beyond the obvious. That's where I come in.
              </p>

              <p 
                className="text-[17px] sm:text-[18px] leading-[1.7] text-[var(--dark-text-secondary)] font-normal italic border-l-2 border-[var(--accent)]/40 pl-4 py-0.5" 
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                I write, direct, and consult on projects that still begin with the question.
              </p>

              <p 
                className="text-[15px] sm:text-[16px] leading-[1.7] text-white/50 font-normal pt-1" 
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                Currently based in Mumbai, India, open to work everywhere.
              </p>
            </div>

            {/* Social Links placed cleanly underneath the biography */}
            <div className="mt-8 md:mt-12 pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-x-6 gap-y-3 text-[16px] md:text-[14px] select-none" style={{ fontFamily: 'var(--font-family-mono)' }}>
                <a
                  href="https://www.linkedin.com/in/ivan-lewis/"
                  target="_blank"
                  rel="noopener"
                  className="no-underline transition-colors duration-300 hover:text-white border-b border-white/20 hover:border-white pb-1 inline-flex items-center"
                  style={{ color: 'var(--dark-text-secondary)' }}
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/itzivanl/"
                  target="_blank"
                  rel="noopener"
                  className="no-underline transition-colors duration-300 hover:text-white border-b border-white/20 hover:border-white pb-1 inline-flex items-center"
                  style={{ color: 'var(--dark-text-secondary)' }}
                >
                  Instagram
                </a>
                <a
                  href="https://substack.com/@lastgoodtaste"
                  target="_blank"
                  rel="noopener"
                  className="no-underline transition-colors duration-300 hover:text-white border-b border-white/20 hover:border-white pb-1 inline-flex items-center"
                  style={{ color: 'var(--dark-text-secondary)' }}
                >
                  Substack
                </a>
                <a
                  href="https://letterboxd.com/NomadicLion/"
                  target="_blank"
                  rel="noopener"
                  className="no-underline transition-colors duration-300 hover:text-white border-b border-white/20 hover:border-white pb-1 inline-flex items-center"
                  style={{ color: 'var(--dark-text-secondary)' }}
                >
                  Letterboxd
                </a>
              </div>
            </div>
          </div>

          {/* Portrait Image Column (5 of 12 columns) */}
          <div className="lg:col-span-5 relative reveal w-full max-w-[320px] lg:max-w-full justify-self-start lg:justify-self-end mt-4 lg:mt-0 px-2 py-2">
            {/* Viewfinder corner brackets */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-white/25 pointer-events-none z-20" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white/25 pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white/25 pointer-events-none z-20" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-white/25 pointer-events-none z-20" />
 
            <div className="relative overflow-hidden aspect-[3/4] border border-white/10 bg-dark-bg">
              {/* Mesh grain overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.2] mix-blend-overlay z-10"
                style={{
                  backgroundImage: `
                    radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px),
                    linear-gradient(rgba(255,255,255,0.01) 1.5px, transparent 1.5px)
                  `,
                  backgroundSize: '4px 4px, 16px 16px',
                }}
              />
 
              <img
                src={ivanImage}
                alt="Ivan Lewis"
                className="w-full h-full block object-cover transition-transform duration-700 hover:scale-[1.015]"
                loading="lazy"
                referrerPolicy="no-referrer"
                style={{
                  filter: 'grayscale(0.1) saturate(0.85) contrast(1.08) brightness(0.9)',
                  objectPosition: 'center center',
                }}
              />
 
              {/* Vignette */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: 'radial-gradient(circle at center, transparent 40%, rgba(10,10,10,0.5) 100%)',
                }}
              />
            </div>
 
            {/* Micro-editorial description (Guaranteed >= 14px on mobile) */}
            <div 
              className="mt-3 flex items-center justify-between text-[14px] lg:text-[13px] uppercase tracking-[0.14em] text-white/40 select-none" 
              style={{ fontFamily: 'var(--font-family-mono)' }}
            >
              <span>FIG. 1.0 — IVAN LEWIS</span>
              <span>25.2702° N, 91.7317° E</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
