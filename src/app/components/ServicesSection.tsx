export function ServicesSection() {
  const services = [
    {
      title: 'Creative Concepts',
      hook: 'Most brands do not have an execution problem. They have an idea problem.',
      description: 'I work with founders, brands, and creative teams to develop campaign ideas, launch concepts, narrative directions, and original formats—bringing two decades of creative experience to the thinking.',
      hasConnect: true,
    },
    {
      title: 'Writing & Development',
      hook: 'Good ideas are often weakened by the way they are written.',
      description: 'I write and develop brand copy, scripts, films, episodic concepts, campaign narratives and IPs, helping shape the structure, language, tone, and emotional core of the work.',
      hasConnect: true,
    },
    {
      title: 'Brand Building',
      hook: 'A brand is shaped by every decision it repeats.',
      description: 'I collaborate with teams on positioning, voice, campaigns, launches, and long-term creative direction, drawing on years of experience building brands across markets and categories.',
      hasConnect: true,
    },
    {
      title: 'Film Direction',
      hook: 'A scene only works when the behaviour inside it feels true.',
      description: 'I direct long-form, documentary, and narrative content, working closely with cast, crew, agencies, and clients on performance, tone, rhythm, and visual storytelling.',
      hasConnect: true,
    },
    {
      title: 'Creative Advisory',
      hook: 'Creative teams often need perspective more than another presentation.',
      description: 'I offer ongoing support across ideas, writing, brand direction, campaigns, and production—bringing experienced judgement to the areas where it is most useful.',
      hasConnect: false,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: 'var(--bg-raised)' }} id="services">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Editorial Section Header */}
        <div className="mb-8 md:mb-10">
          <span
            className="block text-[14px] uppercase font-normal tracking-[0.16em] text-[var(--text-muted)]"
            style={{ fontFamily: 'var(--font-family-mono)' }}
          >
            SERVICES
          </span>
          <p className="text-[17px] sm:text-[18px] italic mt-1.5 text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-family-serif)' }}>
            available, selectively
          </p>
        </div>

        <div 
          className="text-[18px] sm:text-[20px] leading-[1.65] text-[var(--text-secondary)] mb-10 md:mb-12 max-w-[700px] reveal" 
          style={{ fontFamily: 'var(--font-family-serif)' }}
        >
          Strategy, direction, writing, and film. Work varies; the starting question does&nbsp;not.
        </div>

        {/* Flat Editorial Index Layout with Thin Dividers & Controlled Spacing */}
        <div className="border-t border-[var(--border)] divide-y divide-[var(--border)] border-b">
          {services.map((service, i) => (
            <div
              key={i}
              className="reveal py-6 sm:py-8 group transition-colors duration-300 hover:bg-black/[0.015]"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                
                {/* Title column (4 out of 12 columns) */}
                <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col sm:items-center md:items-start justify-between sm:justify-start md:justify-between gap-2">
                  <h3
                    className="text-[20px] sm:text-[22px] md:text-[24px] font-normal tracking-tight text-[var(--text)]"
                    style={{
                      fontFamily: 'var(--font-family-serif)',
                    }}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Description column (8 out of 12 columns) */}
                <div className="md:col-span-8 flex flex-col items-start gap-4">
                  <div className="space-y-3">
                    <p
                      className="text-[17px] sm:text-[18px] text-[var(--text)] font-normal leading-[1.45] italic"
                      style={{ fontFamily: 'var(--font-family-serif)' }}
                    >
                      {service.hook}
                    </p>
                    <p
                      className="text-[15px] sm:text-[16px] text-[var(--text-secondary)] leading-[1.7] max-w-[750px] font-normal"
                      style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                    >
                      {service.description}
                    </p>
                  </div>
                  {service.hasConnect && (
                    <a
                      href="#connect"
                      className="text-[13px] uppercase tracking-[0.12em] font-normal text-[var(--text-secondary)] hover:text-[var(--text)] border-b border-[var(--text-secondary)]/20 hover:border-[var(--text)]/60 pb-0.5 transition-all duration-300 inline-flex items-center gap-1 group/cta mt-1"
                      style={{ fontFamily: 'var(--font-family-mono)' }}
                    >
                      Connect <span className="inline-block transform transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
