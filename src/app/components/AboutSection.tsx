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
        {/* 12-Column Grid creating perfect side-by-side image-to-text balance on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Biography Narrative Column (7 of 12 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full reveal">
            <div className="space-y-6 max-w-[640px]">
              <p 
                className="text-[19px] sm:text-[21px] md:text-[23px] not-italic leading-[1.45] tracking-tight text-white/95 font-normal" 
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                Most briefs tell me what to make.<br />
                I usually start by asking why we’re making it.
              </p>

              <p 
                className="text-[16px] sm:text-[17px] leading-[1.75] text-white/80 font-light" 
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                I work across advertising, branded films, startups, and feature scripts.<br />
                Different work, same habit: find the idea inside the brief, then turn it into a campaign, a film, an IP, or a launch. My ambition is often bigger than the budget. I like that.
              </p>

              <p 
                className="text-[16px] sm:text-[17px] leading-[1.75] text-white/80 font-light" 
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                I work best with people who ask good questions before paying for expensive answers. If that’s your table, save me a chair.
              </p>

              <p 
                className="text-[15px] sm:text-[16px] leading-[1.7] text-white/60 font-normal pt-2" 
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                I am based in <span className="text-[var(--accent)] font-medium">Mumbai</span>. Working everywhere.
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
              className="mt-3 flex items-center justify-end text-[14px] lg:text-[13px] uppercase tracking-[0.14em] text-white/40 select-none" 
              style={{ fontFamily: 'var(--font-family-mono)' }}
            >
              <span>25.2702° N, 91.7317° E</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
