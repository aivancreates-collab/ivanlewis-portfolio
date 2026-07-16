export function ServicesSection() {
  const services = [
    {
      title: 'Strategy Consultation',
      description: 'Most brands talk too much because they don\'t know who they are. We run intensive, diagnostic consultations for founders to define the single core argument that makes all subsequent marketing noise redundant.',
      paid: true,
    },
    {
      title: 'Campaign Concept',
      description: 'We do not pitch ideas that look like ads. We build campaign concepts rooted in genuine cultural tension—creating launch briefs, visual directions, and narrative anchors that earn attention rather than buying it.',
    },
    {
      title: 'Screenwriting & Development',
      description: 'The script is where the budget is saved or wasted. We develop cinematic screenplays—from short films to episodic concepts—stripping out the ornament to protect the emotional architecture.',
    },
    {
      title: 'Film Direction',
      description: 'Visual scale cannot rescue a hollow scene. We direct commercial and documentary projects with an extreme discipline on human behavior, quiet pacing, and atmospheric reality.',
    },
    {
      title: 'Creative Advisory',
      description: 'A great narrative is a daily practice, not a slide deck. We partner with select brand leaders on a long-term advisory basis, acting as a direct filter for positioning, IP development, and creative execution.',
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
                
                {/* Title & Badge column (4 out of 12 columns) */}
                <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col sm:items-center md:items-start justify-between sm:justify-start md:justify-between gap-2">
                  <h3
                    className="text-[20px] sm:text-[22px] md:text-[24px] font-normal tracking-tight text-[var(--text)]"
                    style={{
                      fontFamily: 'var(--font-family-serif)',
                    }}
                  >
                    {service.title}
                  </h3>

                  {service.paid && (
                    <span
                      className="inline-block text-[14px] lg:text-[13px] uppercase tracking-[0.1em] border px-2.5 py-0.5 text-[var(--text-muted)] select-none font-mono"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      paid engagement
                    </span>
                  )}
                </div>

                {/* Description column (8 out of 12 columns) */}
                <div className="md:col-span-8 flex flex-col items-start gap-4">
                  <p
                    className="text-[17px] text-[var(--text-secondary)] leading-[1.7] max-w-[750px] font-normal"
                    style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                  >
                    {service.description}
                  </p>
                  <a
                    href="#connect"
                    className="text-[13px] uppercase tracking-[0.12em] font-normal text-[var(--text-secondary)] hover:text-[var(--text)] border-b border-[var(--text-secondary)]/20 hover:border-[var(--text)]/60 pb-0.5 transition-all duration-300 inline-flex items-center gap-1 group/cta"
                    style={{ fontFamily: 'var(--font-family-mono)' }}
                  >
                    Connect <span className="inline-block transform transition-transform duration-300 group-hover/cta:translate-x-1">→</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
