import { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

interface CurrentEngagementsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CurrentEngagementsModal({ isOpen, onClose }: CurrentEngagementsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const engagements = [
    {
      id: 'eng-1',
      client: 'BOUTIQUE COMMUNICATIONS',
      location: 'DUBAI, UAE',
      role: 'Brand Narrator & Advisory Lead',
      project: 'Heritage & Modernity Narrative',
      status: 'Active Consulting',
      desc: 'Defining the founding positioning and brand philosophy for an up-and-coming premium creative agency bridging European design legacy and Middle Eastern market dynamics. Translating core values into high-impact narrative strategies and tone-of-voice frameworks.',
    },
    {
      id: 'eng-2',
      client: 'OROMA INDIAN SPICES',
      location: 'MUMBAI, INDIA',
      role: 'Tone of Voice & Copy Strategy',
      project: 'Launch Messaging & Packaging Identity',
      status: 'In Development',
      desc: 'Conceptualizing the core brand voice, storytelling copy for artisanal spice collections, and designing the launch communication strategy. Translating ancient culinary traditions into a clean, modern aesthetic for global audiences.',
    },
    {
      id: 'eng-3',
      client: 'CULINARY INCEPTION FOOD CO.',
      location: 'SINGAPORE',
      role: 'Narrative Consultant',
      project: 'Sustainable Culinary Manifesto',
      status: 'Ongoing Engagement',
      desc: 'Assisting a progressive farm-to-table culinary collective in clarifying its mission. Designing clear, compelling brand manifestos and investor storytelling to communicate the future of sustainable urban dining and community-focused agriculture.',
    },
  ];

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 sm:p-6 md:p-10 select-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-dark-bg/80 backdrop-blur-md transition-opacity duration-300"
        style={{ backgroundColor: 'rgba(22, 17, 14, 0.8)' }}
        onClick={onClose}
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl h-[85vh] bg-bg border shadow-2xl flex flex-col z-10 overflow-hidden transform transition-all duration-500 ease-out animate-in fade-in zoom-in-95 rounded-none"
        style={{ cursor: 'default', backgroundColor: 'var(--bg)', borderColor: 'var(--border)' }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b z-20" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-raised)' }}>
          <div className="flex flex-col">
            <span className="text-[10px] tracking-[0.2em] font-medium text-text-muted" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
              ACTIVE ENGAGEMENTS // CALENDAR YEAR 2026
            </span>
            <span className="text-[16px] font-normal text-text" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)' }}>
              Three Clients. Three Objectives.
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full transition-colors relative z-30"
            style={{ color: 'var(--text-muted)', backgroundColor: 'transparent' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.backgroundColor = 'rgba(247, 249, 250, 0.08)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content (scrollable) */}
        <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-12 sm:py-12 custom-scrollbar selection:bg-accent/30" style={{ backgroundColor: 'var(--bg)' }}>
          <div className="max-w-3xl mx-auto space-y-12 select-text">
            
            {/* Introductory Statement */}
            <div className="border-b pb-8 mb-8" style={{ borderColor: 'var(--border)' }}>
              <p className="text-[16px] italic leading-[1.65] text-text-secondary" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text-secondary)' }}>
                "Every brand problem is a story problem. I work with founders, directors, and creative bureaus to articulate what they stand for before they start speaking to the world."
              </p>
              <span className="block mt-4 text-[10px] tracking-[0.15em] uppercase text-text-muted" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                — IVAN LEWIS, NARRATIVE ADVISORY
              </span>
            </div>

            {/* Grid list of engagements */}
            <div className="space-y-12">
              {engagements.map((eng, idx) => (
                <div key={eng.id} className="group border-b last:border-0 pb-10 last:pb-0" style={{ borderColor: 'var(--border)' }}>
                  <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-6 items-start">
                    
                    {/* Left details pane */}
                    <div className="space-y-3">
                      <span className="inline-block text-[10px] tracking-[0.12em] font-bold" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                        0{idx + 1} // {eng.location}
                      </span>
                      <h3 className="text-[18px] font-medium tracking-tight" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)' }}>
                        {eng.client}
                      </h3>
                      <div className="space-y-1 text-[11px] uppercase tracking-wider" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                          <span className="font-medium" style={{ color: 'var(--text)' }}>{eng.status}</span>
                        </div>
                        <div>ROLE: {eng.role}</div>
                      </div>
                    </div>

                    {/* Right description pane */}
                    <div className="space-y-4">
                      <h4 className="text-[15px] font-medium flex items-center gap-1.5" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)' }}>
                        {eng.project} <ArrowUpRight className="w-4 h-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{ color: 'var(--text-muted)' }} />
                      </h4>
                      <p className="text-[14px] leading-[1.65]" style={{ color: 'var(--text-secondary)' }}>
                        {eng.desc}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Footer bar */}
        <div className="px-6 py-4 border-t text-center select-none text-[10px] tracking-[0.12em]" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg-raised)', color: 'var(--text-muted)', fontFamily: 'var(--font-family-mono)' }}>
          PRESS <span className="font-semibold text-text" style={{ color: 'var(--text)' }}>ESC</span> OR CLICK OUTSIDE TO RETURN
        </div>
      </div>
    </div>
  );
}
