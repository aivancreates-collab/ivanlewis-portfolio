import { useState } from 'react';

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  const toggleService = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-24" style={{ backgroundColor: 'var(--bg-raised)' }} id="services">
      <div className="max-w-[900px] mx-auto px-12">
        <span className="block text-[13px] uppercase font-light tracking-[0.16em] reveal" style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 400, color: 'var(--text-muted)' }}>
          SERVICES
        </span>
        <p className="text-[16px] italic mt-2 mb-8 reveal" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text-secondary)' }}>
          available, selectively
        </p>
 
        <div className="text-[17px] leading-[1.75] text-text-secondary mb-12 max-w-[600px] reveal" style={{ fontFamily: 'var(--font-family-serif)' }}>
          Strategy, direction, writing, and film. Work varies; the starting question does&nbsp;not.
        </div>
 
        {services.map((service, i) => (
          <div
            key={i}
            className="border-t-[0.5px] last:border-b-[0.5px] reveal"
            style={{ borderColor: 'var(--border)', transitionDelay: `${i * 60}ms` }}
          >
            <div
              className="py-[2rem] flex justify-between items-center cursor-pointer transition-all duration-[380ms] hover:pl-3"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
              onClick={() => toggleService(i)}
              data-interactive
            >
              <h3
                className="text-[clamp(18px,2.2vw,24px)] font-normal tracking-[-0.01em]"
                style={{
                  fontFamily: 'var(--font-family-serif)',
                  color: 'var(--text)',
                }}
              >
                {service.title}
              </h3>
 
              <div className="flex items-center gap-6">
                {service.paid && (
                  <span
                    className="text-[10px] uppercase tracking-[0.1em] border px-2 py-[2px] hidden sm:inline"
                    style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)', borderColor: 'var(--border)' }}
                  >
                    paid engagement
                  </span>
                )}
                <span
                  className={`text-[18px] font-light inline-flex items-center justify-center w-[30px] h-[30px] transition-all duration-[420ms] ${
                    openIndex === i ? 'rotate-45' : ''
                  }`}
                  style={{
                    fontFamily: 'var(--font-family-mono)',
                    fontWeight: 400,
                    color: openIndex === i ? 'var(--text-secondary)' : 'var(--text-muted)',
                    transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
                  }}
                >
                  +
                </span>
              </div>
            </div>
 
            {openIndex === i && (
              <div className="pb-8 transition-all duration-500 animate-fadeIn">
                <p
                  className="text-[17px] text-text-secondary leading-[1.75] whitespace-pre-line max-w-[750px]"
                  style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
                >
                  {service.description}
                </p>
                {service.paid && (
                  <p
                    className="text-[11px] mt-4 uppercase tracking-[0.05em] sm:hidden"
                    style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}
                  >
                    Paid engagement.
                  </p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
