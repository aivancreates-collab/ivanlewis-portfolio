import { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function ServicesSection() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleCard = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

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
            const isExpanded = !!expanded[i];

            return (
              <div
                key={i}
                id={`service-card-${i}`}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onClick={() => toggleCard(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleCard(i);
                  }
                }}
                className={`reveal flex flex-col justify-between relative transition-all duration-300 border rounded-none text-left cursor-pointer select-none group ${
                  isAdvisory 
                    ? 'md:col-span-2' 
                    : ''
                }`}
                style={{
                  backgroundColor: isAdvisory ? '#1A1A1A' : '#141414',
                  borderColor: isExpanded ? '#FFFFFF' : isAdvisory ? '#444444' : '#282828',
                  padding: '2rem',
                }}
                onMouseEnter={(e) => {
                  if (!isExpanded) e.currentTarget.style.borderColor = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  if (!isExpanded) e.currentTarget.style.borderColor = isAdvisory ? '#444444' : '#282828';
                }}
              >
                {/* Header Row with Index and Category Badge */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span 
                      className="text-[12px] sm:text-[11px] uppercase tracking-[0.12em] font-normal" 
                      style={{ fontFamily: 'var(--font-family-mono)', color: isExpanded ? '#FFFFFF' : '#888888' }}
                    >
                      {service.index} // {service.title.toUpperCase()}
                    </span>
                    
                    <div className="flex items-center gap-2.5">
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

                      <span 
                        className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 text-white/60 group-hover:text-white group-hover:border-white/30"
                        style={{
                          backgroundColor: isExpanded ? '#2A2A2A' : '#1E1E1E',
                        }}
                      >
                        {isExpanded ? <Minus size={12} /> : <Plus size={12} />}
                      </span>
                    </div>
                  </div>

                  {/* Headline / Hook */}
                  <h3 
                    className="text-[18px] sm:text-[19px] text-white font-normal leading-[1.4] italic"
                    style={{ fontFamily: 'var(--font-family-serif)' }}
                  >
                    {service.hook}
                  </h3>
                </div>

                {/* Collapsible Details: Description + CTA */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={`content-${i}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="pt-5 space-y-5">
                        <p 
                          className="text-[14px] sm:text-[15px] leading-[1.65]"
                          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#CCCCCC' }}
                        >
                          {service.description}
                        </p>

                        {/* Card Footer with CTA */}
                        <div className="pt-4 border-t" style={{ borderColor: isAdvisory ? '#444444' : '#282828' }}>
                          <a
                            href="#connect"
                            className="text-[13px] uppercase tracking-[0.12em] font-normal text-[var(--accent-warm)] hover:text-white border-b border-[var(--accent-warm)]/30 hover:border-white pb-0.5 transition-all duration-300 inline-flex items-center gap-1 group/cta"
                            style={{ fontFamily: 'var(--font-family-mono)' }}
                          >
                            {isAdvisory ? 'Inquire' : 'Connect'}{' '}
                            <ArrowRight size={13} className="inline-block transform transition-transform duration-300 group-hover/cta:translate-x-1" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Subtle affordance when collapsed */}
                {!isExpanded && (
                  <div className="mt-4 pt-3 flex items-center justify-between text-[11px] font-mono text-[var(--text-muted)] group-hover:text-white/70 transition-colors">
                    <span>Click to view details</span>
                    <span>+</span>
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

