export function ServicesSection() {
  const services = [
    {
      index: '01',
      title: 'Creative Concepts',
      badge: 'STRATEGY',
      hook: 'Most brands do not have an execution problem. They have an idea problem.',
      description: 'I work with founders, brands, and creative teams to develop campaign ideas, launch concepts, narrative directions, and original formats—bringing two decades of creative experience to the thinking.',
      hasConnect: true,
    },
    {
      index: '02',
      title: 'Writing & Development',
      badge: 'DEVELOPMENT',
      hook: 'Good ideas are often weakened by the way they are written.',
      description: 'I write and develop brand copy, scripts, films, episodic concepts, campaign narratives and IPs, helping shape the structure, language, tone, and emotional core of the work.',
      hasConnect: true,
    },
    {
      index: '03',
      title: 'Brand Building',
      badge: 'STRATEGY',
      hook: 'A brand is shaped by every decision it repeats.',
      description: 'I collaborate with teams on positioning, voice, campaigns, launches, and long-term creative direction, drawing on years of experience building brands across markets and categories.',
      hasConnect: true,
    },
    {
      index: '04',
      title: 'Film Direction',
      badge: 'PRODUCTION',
      hook: 'A scene only works when the behaviour inside it feels true.',
      description: 'I direct long-form, documentary, and narrative content, working closely with cast, crew, agencies, and clients on performance, tone, rhythm, and visual storytelling.',
      hasConnect: true,
    },
    {
      index: '05',
      title: 'Creative Advisory',
      badge: 'RETAINER',
      hook: 'Creative teams often need perspective more than another presentation.',
      description: 'I offer ongoing support across ideas, writing, brand direction, campaigns, and production—bringing experienced judgement to the areas where it is most useful.',
      hasConnect: false,
      isFlagship: true,
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24" style={{ backgroundColor: 'var(--bg-primary)' }} id="services">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-10 lg:px-16">
        
        {/* Editorial Section Header */}
        <div className="mb-10 md:mb-12">
          <span
            className="block text-[11px] uppercase font-normal tracking-[0.16em] text-[var(--text-tertiary)]"
            style={{ fontFamily: 'var(--font-family-mono)' }}
          >
            SERVICES INDEX
          </span>
          <p className="text-[17px] sm:text-[18px] italic mt-1.5 text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-family-serif)' }}>
            available, selectively
          </p>
        </div>

        <div 
          className="text-[18px] sm:text-[20px] leading-[1.65] text-[var(--text-secondary)] mb-12 md:mb-16 max-w-[700px] reveal" 
          style={{ fontFamily: 'var(--font-family-serif)' }}
        >
          Strategy, direction, writing, and film. Work varies; the starting question does&nbsp;not.
        </div>

        {/* Asymmetric Numbered Index Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
          {services.map((service, i) => {
            const isAdvisory = service.isFlagship;
            return (
              <div
                key={i}
                className={`reveal flex flex-col justify-between h-full relative transition-all duration-200 border rounded-none group ${
                  isAdvisory 
                    ? 'md:col-span-2' 
                    : ''
                }`}
                style={{
                  backgroundColor: isAdvisory ? '#1A1A1A' : '#141414',
                  borderColor: isAdvisory ? '#444444' : '#282828',
                  padding: '2rem',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = isAdvisory ? '#444444' : '#282828';
                }}
              >
                {/* Header Row with Index and Category Badge */}
                <div className="flex items-center justify-between gap-4 mb-8">
                  <span 
                    className="text-[11px] uppercase tracking-[0.12em] font-normal" 
                    style={{ fontFamily: 'var(--font-family-mono)', color: '#888888' }}
                  >
                    {service.index} // {service.title.toUpperCase()}
                  </span>
                  
                  <span 
                    className="text-[10px] uppercase font-mono tracking-wider border text-white"
                    style={{ 
                      borderColor: '#333333', 
                      padding: '4px 8px',
                      lineHeight: '1',
                      borderRadius: '0px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {service.badge}
                  </span>
                </div>

                {/* Content Body */}
                <div className="space-y-4 mb-8 flex-grow">
                  <p 
                    className="text-[17px] sm:text-[18px] text-white font-normal leading-[1.45] italic"
                    style={{ fontFamily: 'var(--font-family-serif)' }}
                  >
                    {service.hook}
                  </p>
                  <p 
                    className="text-[14px] sm:text-[15px] leading-[1.6]"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#CCCCCC' }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Card Footer with CTA */}
                {service.hasConnect ? (
                  <div className="pt-4 border-t" style={{ borderColor: isAdvisory ? '#444444' : '#282828' }}>
                    <a
                      href="#connect"
                      className="text-[13px] uppercase tracking-[0.12em] font-normal text-[var(--accent-warm)] hover:text-white border-b border-[var(--accent-warm)]/30 hover:border-white pb-0.5 transition-all duration-300 inline-flex items-center gap-1 group/cta"
                      style={{ fontFamily: 'var(--font-family-mono)' }}
                    >
                      Connect <span className="inline-block transform transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
                    </a>
                  </div>
                ) : (
                  <div className="pt-4 border-t flex items-center justify-between" style={{ borderColor: isAdvisory ? '#444444' : '#282828' }}>
                    <span 
                      className="text-[11px] uppercase tracking-[0.12em] font-mono text-white/40"
                    >
                      Flagship Advisory Offer
                    </span>
                    <a
                      href="#connect"
                      className="text-[13px] uppercase tracking-[0.12em] font-normal text-[var(--accent-warm)] hover:text-white border-b border-[var(--accent-warm)]/30 hover:border-white pb-0.5 transition-all duration-300 inline-flex items-center gap-1 group/cta"
                      style={{ fontFamily: 'var(--font-family-mono)' }}
                    >
                      Inquire <span className="inline-block transform transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
                    </a>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
