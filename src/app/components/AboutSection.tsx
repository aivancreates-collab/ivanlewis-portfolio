import ivanImage from '../../imports/ivan_about.jpeg';

export function AboutSection() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 overflow-hidden bg-dark-bg" id="about">
      {/* Cinematic background gradient */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-surface) 50%, var(--dark-bg) 100%)',
        }}
      />
 
      <div className="relative z-10 max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-12">
        <span className="block text-[13px] uppercase font-light tracking-[0.16em] reveal" style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 400, color: 'var(--dark-text-secondary)' }}>
          ABOUT
        </span>
        <p className="text-[16px] italic mt-2 mb-12 reveal" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--dark-text-secondary)' }}>
          not what I do. why.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,336px)_1fr] gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Cinematic Image Frame */}
          <div className="relative reveal px-3 py-3 max-w-[336px] mx-auto lg:mx-0 w-full">
            {/* Viewfinder corner brackets to make it look incredibly designed and relevant to film direction */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/25 pointer-events-none z-20" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/25 pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/25 pointer-events-none z-20" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/25 pointer-events-none z-20" />
 
            <div className="relative overflow-hidden aspect-[3/4] border border-white/10 bg-dark-bg">
              {/* Ultra-fine high-resolution mesh/grain overlay specifically on the image to mask pixelation and add professional texture */}
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
 
            {/* Micro-editorial description below the image */}
            <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.14em] text-white/40 select-none" style={{ fontFamily: 'var(--font-family-mono)' }}>
              <span>FIG. 1.0 — IVAN LEWIS</span>
              <span>25.2702° N, 91.7317° E</span>
            </div>
          </div>
 
          {/* Content */}
          <div>
            <p className="text-[17px] sm:text-[18px] leading-[1.85] mb-5 sm:mb-6 reveal" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--dark-text-secondary)' }}>
              We are drowning in execution. What we lack is the discipline to ask what we are actually building, and why it should exist.
            </p>
 
            <p className="text-[17px] sm:text-[18px] leading-[1.85] mb-5 sm:mb-6 reveal" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--dark-text-secondary)' }}>
              I write, direct, and consult on projects that preserve that distinction.
            </p>
 
            <div className="mt-8 sm:mt-10 flex flex-wrap gap-6 sm:gap-8 text-[13px] reveal" style={{ fontFamily: 'var(--font-family-mono)' }}>
              <a
                href="https://www.linkedin.com/in/ivan-lewis/"
                target="_blank"
                rel="noopener"
                className="no-underline transition-colors duration-300 hover:text-white border-b border-white/20 hover:border-white pb-1 py-3 inline-flex items-center"
                style={{ color: 'var(--dark-text-secondary)' }}
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/itzivanl/"
                target="_blank"
                rel="noopener"
                className="no-underline transition-colors duration-300 hover:text-white border-b border-white/20 hover:border-white pb-1 py-3 inline-flex items-center"
                style={{ color: 'var(--dark-text-secondary)' }}
              >
                Instagram
              </a>
              <a
                href="https://substack.com/@lastgoodtaste"
                target="_blank"
                rel="noopener"
                className="no-underline transition-colors duration-300 hover:text-white border-b border-white/20 hover:border-white pb-1 py-3 inline-flex items-center"
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
