export function ServicesSection() {
  const services = [
    {
      index: '01',
      title: 'Creative Concepts',
      badge: 'STRATEGY',
      hook: 'A great execution can’t save a small idea.',
      description: 'So I start where the work should start... with the idea! Campaigns, launches, narratives, formats — finding the thought that makes everything that follows more interesting.',
      hasConnect: true,
    },
    {
      index: '02',
      title: 'Writing & Development',
      badge: 'DEVELOPMENT',
      hook: 'An idea can only travel as far as its words.',
      description: 'I find the words, structure and voice that let an idea become what it wants to be; whether it’s a line, a script, a film, a series or something that doesn’t have a name yet.',
      hasConnect: true,
    },
    {
      index: '03',
      title: 'Brand Building',
      badge: 'STRATEGY',
      hook: 'A brand becomes what it keeps doing.',
      description: 'So I help make those choices count: from positioning and voice to campaigns, launches and the creative decisions that, over time, become the brand.',
      hasConnect: true,
    },
    {
      index: '04',
      title: 'Film Direction',
      badge: 'PRODUCTION',
      hook: 'We believe stories when we believe the people in them.',
      description: 'Long-form nonfiction taught me to sense the story that’s already there - in people, in behavior, and in the moments you could never have written.',
      hasConnect: true,
    },
    {
      index: '05',
      title: 'Creative Advisory',
      badge: 'RETAINER',
      hook: 'The closer you are to the work, the less you see.',
      description: 'Sometimes what a project needs isn’t more work. It’s another way of seeing it. I bring an experienced outside eye to ideas, writing, brands, campaigns and production, especially when something isn’t quite working and nobody can say why.',
      hasConnect: true,
      isFlagship: true,
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24" style={{ backgroundColor: 'var(--bg-primary)' }} id="services">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Editorial Section Header */}
        <div className="mb-10 md:mb-12">
          <span
            className="block text-[14px] lg:text-[13px] uppercase font-normal tracking-[0.16em] text-[var(--text-muted)]"
            style={{ fontFamily: 'var(--font-family-mono)' }}
          >
            WHAT I DO
          </span>
          <p className="text-[17px] sm:text-[18px] italic mt-1.5 text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-family-serif)' }}>
            available, selectively
          </p>
        </div>

        <div 
          className="text-[18px] sm:text-[20px] leading-[1.65] text-[var(--text-secondary)] mb-12 md:mb-16 max-w-[700px] reveal" 
          style={{ fontFamily: 'var(--font-family-serif)' }}
        >
          Strategy, writing, direction, film. The work changes. The question doesn’t.
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
