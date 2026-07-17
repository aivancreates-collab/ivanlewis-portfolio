export function InteractiveConnectSection() {
  const links = {
    call: {
      url: 'https://calendly.com/ivanlewis/30min',
      cta: 'Book a Call',
      title: 'Book a Call',
      description: 'Schedule a 30-minute calendar slot to discuss your project, explore screenplay ideas, or map out creative direction.',
    },
    enquiry: {
      url: 'https://docs.google.com/forms/d/1a9raKLvtxup6TMqBxU0cJJDh-tk7LHVs3XjM0q6cUTI/viewform',
      cta: 'Open Enquiry Form',
      title: 'Project Enquiry Form',
      description: 'Submit a structured creative brief. Best for production, screenwriting, narrative strategy, or retainer advisory.',
    },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20" id="connect" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-[900px] mx-auto px-5 sm:px-10 lg:px-16">
        <div className="mb-10 md:mb-12">
          <p
            className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[44px] italic leading-[1.25] tracking-[-0.02em] mb-6 reveal max-w-[720px]"
            style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)', fontWeight: 'normal' }}
          >
            The best projects start with <span className="font-semibold not-italic">one honest question</span>. If you have one, <span className="font-semibold not-italic text-[var(--accent)]">send it.</span>
          </p>
          <p className="text-[17px] sm:text-[18px] text-[var(--text-secondary)] leading-[1.7] max-w-[600px] mb-4 reveal" style={{ fontFamily: 'var(--font-family-serif)' }}>
            Serious enquiries only. Strategy, writing, and film.
          </p>
        </div>

        {/* Clear pathways */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
          <div
            className="p-8 border flex flex-col justify-between h-auto min-h-[260px] rounded-none transition-all duration-300 hover:border-current"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-raised)' }}
          >
            <div>
              <span className="block text-[11px] uppercase tracking-[0.15em] mb-3" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                CALENDAR SYNC
              </span>
              <h3 className="text-[22px] font-normal leading-[1.3] mb-4" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)' }}>
                {links.call.title}
              </h3>
              <p className="text-[14px] leading-[1.6] mb-8" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--text-secondary)' }}>
                {links.call.description}
              </p>
            </div>
            <a
              href={links.call.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center text-[14px] uppercase tracking-[0.12em] px-6 py-4 transition-all duration-300 font-medium select-none no-underline hover:opacity-90 rounded-none"
              style={{ fontFamily: 'var(--font-family-mono)', backgroundColor: 'var(--accent)', color: '#16110E' }}
              data-interactive
            >
              {links.call.cta} ↗
            </a>
          </div>

          <div
            className="p-8 border flex flex-col justify-between h-auto min-h-[260px] rounded-none transition-all duration-300 hover:border-current"
            style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-raised)' }}
          >
            <div>
              <span className="block text-[11px] uppercase tracking-[0.15em] mb-3" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                STRUCTURED BRIEF
              </span>
              <h3 className="text-[22px] font-normal leading-[1.3] mb-4" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)' }}>
                {links.enquiry.title}
              </h3>
              <p className="text-[14px] leading-[1.6] mb-8" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: 'var(--text-secondary)' }}>
                {links.enquiry.description}
              </p>
            </div>
            <a
              href={links.enquiry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center text-[14px] uppercase tracking-[0.12em] px-6 py-4 transition-all duration-300 font-medium select-none no-underline hover:opacity-90 rounded-none"
              style={{ fontFamily: 'var(--font-family-mono)', backgroundColor: 'var(--accent)', color: '#16110E' }}
              data-interactive
            >
              {links.enquiry.cta} ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
