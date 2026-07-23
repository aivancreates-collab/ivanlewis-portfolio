export function InteractiveConnectSection() {
  const links = {
    call: {
      url: 'https://calendly.com/ivanlewis/30min',
      cta: 'Launch Calendar Sync ↗',
      title: '30-MIN DISCOVERY CALL',
      description: 'For quick alignment, screenplay pitches, or advisory chats.',
    },
    enquiry: {
      url: 'https://docs.google.com/forms/d/1a9raKLvtxup6TMqBxU0cJJDh-tk7LHVs3XjM0q6cUTI/viewform',
      cta: 'Open Brief Form ↗',
      title: 'STRUCTURED PROJECT BRIEF',
      description: 'For production, retainer advisory, or full brand strategy.',
    },
  };

  return (
    <section className="py-16 sm:py-20 md:py-24" id="connect" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[1000px] mx-auto px-5 sm:px-10 lg:px-16">
        
        {/* Prominent Monospaced Header Banner */}
        <div className="w-full border-t border-b py-3 text-center mb-16" style={{ borderColor: '#2A2A2A' }}>
          <span 
            className="text-[11px] sm:text-[12px] uppercase tracking-[0.25em] font-normal" 
            style={{ fontFamily: 'var(--font-family-mono)', color: '#A0A0A0' }}
          >
            SERIOUS ENQUIRIES ONLY
          </span>
        </div>

        {/* Two-Tiered Decision Matrix Grid (1fr 1fr on desktop, 1fr on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
          
          {/* Card A (Fast Track) */}
          <a
            href={links.call.url}
            target="_blank"
            rel="noopener noreferrer"
            className="clickable-card p-8 sm:p-10 flex flex-col justify-between h-auto min-h-[300px] no-underline group"
            style={{ borderColor: '#2A2A2A' }}
          >
            <div>
              <span 
                className="block text-[11px] uppercase tracking-[0.15em] mb-4 font-normal" 
                style={{ fontFamily: 'var(--font-family-mono)', color: '#A0A0A0' }}
              >
                FAST TRACK
              </span>
              <h3 
                className="text-[20px] sm:text-[22px] font-normal leading-[1.3] mb-3 text-white tracking-tight" 
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                {links.call.title}
              </h3>
              <p 
                className="text-[14px] sm:text-[15px] leading-[1.6] mb-8" 
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#CCCCCC' }}
              >
                {links.call.description}
              </p>
            </div>
            
            {/* Ghost Button style */}
            <div
              className="w-full inline-flex items-center justify-center text-[13px] uppercase tracking-[0.12em] px-6 py-4 font-mono font-normal select-none no-underline transition-all duration-300 border border-[#2A2A2A] text-white bg-transparent group-hover:border-white"
              style={{ borderRadius: '0px' }}
            >
              {links.call.cta}
            </div>
          </a>

          {/* Card B (Deep Dive) */}
          <a
            href={links.enquiry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="clickable-card p-8 sm:p-10 flex flex-col justify-between h-auto min-h-[300px] no-underline group"
            style={{ borderColor: '#2A2A2A' }}
          >
            <div>
              <span 
                className="block text-[11px] uppercase tracking-[0.15em] mb-4 font-normal" 
                style={{ fontFamily: 'var(--font-family-mono)', color: '#A0A0A0' }}
              >
                DEEP DIVE
              </span>
              <h3 
                className="text-[20px] sm:text-[22px] font-normal leading-[1.3] mb-3 text-white tracking-tight" 
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                {links.enquiry.title}
              </h3>
              <p 
                className="text-[14px] sm:text-[15px] leading-[1.6] mb-8" 
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#CCCCCC' }}
              >
                {links.enquiry.description}
              </p>
            </div>
            
            {/* Solid White high-contrast button style */}
            <div
              className="w-full inline-flex items-center justify-center text-[13px] uppercase tracking-[0.12em] px-6 py-4 font-mono font-normal select-none no-underline transition-all duration-300 bg-white text-[#0D0D0D] border border-white hover:bg-opacity-90"
              style={{ borderRadius: '0px' }}
            >
              {links.enquiry.cta}
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
