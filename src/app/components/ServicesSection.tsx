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
      badge: 'IDEATION',
      hook: 'A great execution can’t save a small idea.',
      description: 'So I start where the work should start... with the idea! Campaigns, launches, narratives, formats — finding the thought that makes everything that follows more interesting.',
      hasConnect: true,
    },
    {
      index: '02',
      title: 'Writing & Development',
      badge: 'NARRATIVE DESIGN & STRUCTURAL BLUEPRINTING',
      hook: 'An idea can only travel as far as its words.',
      description: 'I find the words, structure and voice that let an idea become what it wants to be; whether it’s a line, a script, a film, a series or something that doesn’t have a name yet.',
      hasConnect: true,
    },
    {
      index: '03',
      title: 'Brand Building',
      badge: 'STRATEGY & POSITIONING',
      hook: 'A brand becomes what it keeps doing.',
      description: 'So I help make those choices count: from positioning and voice to campaigns, launches and the creative decisions that, over time, become the brand.',
      hasConnect: true,
    },
    {
      index: '04',
      title: 'Film Direction',
      badge: 'CREATIVE LEADERSHIP & EXECUTION',
      hook: 'We believe stories when we believe the people in them.',
      description: 'Long-form nonfiction taught me to sense the story that’s already there - in people, in behavior, and in the moments you could never have written.',
      hasConnect: true,
    },
    {
      index: '05',
      title: 'Creative Advisory',
      badge: 'CONSULTING & GUIDANCE',
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
        <div className="mb-8">
          <span
            className="block text-[15px] sm:text-[16px] uppercase font-normal tracking-[0.2em] text-[var(--text-muted)]"
            style={{ fontFamily: 'var(--font-family-mono)' }}
          >
            WHAT I DO
          </span>
          <p className="text-[19px] sm:text-[20px] italic mt-1 text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-family-serif)' }}>
            available, selectively
          </p>
        </div>

        {/* Quiet, Single-Tier Discipline Index */}
        <div className="border-t border-b border-[#222222] divide-y divide-[#222222] reveal">
          {services.map((service, i) => {
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
                className="py-5 px-1 sm:px-2 transition-colors duration-200 cursor-pointer select-none group"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-3">
                    <span 
                      className="text-[14px] font-mono text-[var(--text-muted)] w-6 shrink-0"
                      style={{ fontFamily: 'var(--font-family-mono)' }}
                    >
                      {service.index}
                    </span>
                    <h3 
                      className="text-[21px] sm:text-[22px] text-white font-normal leading-[1.3] group-hover:text-[var(--accent-warm)] transition-colors"
                      style={{ fontFamily: 'var(--font-family-serif)' }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 self-start sm:self-auto pl-9 sm:pl-0">
                    <span 
                      className="text-[13px] uppercase font-mono tracking-wider text-[var(--text-muted)] border border-[#2A2A2A] px-2.5 py-0.5"
                      style={{ fontFamily: 'var(--font-family-mono)' }}
                    >
                      {service.badge}
                    </span>
                    <span className="text-[16px] font-mono text-[var(--text-muted)] group-hover:text-white transition-colors">
                      {isExpanded ? '—' : '+'}
                    </span>
                  </div>
                </div>

                {/* Collapsible Details */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key={`content-${i}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="pt-4 pl-9 pr-2 space-y-3">
                        <p 
                          className="text-[18px] text-white/90 italic font-normal"
                          style={{ fontFamily: 'var(--font-family-serif)' }}
                        >
                          “{service.hook}”
                        </p>
                        <p 
                          className="text-[17px] sm:text-[18px] leading-[1.65] text-[#AAAAAA]"
                          style={{ fontFamily: 'Lato, sans-serif' }}
                        >
                          {service.description}
                        </p>
                        <div className="pt-2">
                          <a
                            href="#connect"
                            className="text-[15px] uppercase tracking-[0.14em] text-[var(--accent-warm)] hover:text-white transition-colors inline-flex items-center gap-1 font-mono"
                            style={{ fontFamily: 'var(--font-family-mono)' }}
                          >
                            Inquire <ArrowRight size={14} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

