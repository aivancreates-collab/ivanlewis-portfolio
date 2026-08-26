export function InteractiveConnectSection() {
  const links = {
    call: {
      url: 'https://calendly.com/ivanlewis/30min',
      cta: 'Book a 30-Min Conversation ↗',
      title: 'LET’S TALK',
      description: 'For projects, ideas, scripts, and problems worth a good conversation.',
    },
    email: {
      url: 'mailto:thelastgoodtaste@gmail.com',
      cta: 'Send ↗',
      title: 'DIRECT EMAIL',
      description: 'Send a note, a thought, a brief, or a draft directly to my inbox.',
    },
  };

  return (
    <section className="py-16 sm:py-20 md:py-24" id="connect" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-[1000px] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Monospaced Header */}
        <div className="w-full py-3 mb-8">
          <span 
            className="text-[11px] sm:text-[12px] uppercase tracking-[0.2em] font-normal" 
            style={{ fontFamily: 'var(--font-family-mono)', color: '#888888' }}
          >
            CONTACT &amp; CONVERSATION
          </span>
        </div>

        {/* Direct Two-Card Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
          
          {/* Card A: Calendly */}
          <a
            href={links.call.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 sm:p-10 flex flex-col justify-between h-auto min-h-[260px] no-underline group border border-[#2A2A2A] hover:border-white transition-colors duration-200 bg-[#121212]"
          >
            <div>
              <h3 
                className="text-[20px] sm:text-[22px] font-normal leading-[1.3] mb-3 text-white tracking-tight" 
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                {links.call.title}
              </h3>
              <p 
                className="text-[14px] leading-[1.6] mb-8 text-[#AAAAAA]" 
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {links.call.description}
              </p>
            </div>
            
            <div
              className="w-full inline-flex items-center justify-center text-[12px] uppercase tracking-[0.14em] px-6 py-3.5 font-mono font-normal select-none no-underline transition-all duration-300 border border-[#333333] text-white group-hover:border-white bg-transparent"
            >
              {links.call.cta}
            </div>
          </a>

          {/* Card B: Direct Email */}
          <a
            href={links.email.url}
            className="p-8 sm:p-10 flex flex-col justify-between h-auto min-h-[260px] no-underline group border border-[#2A2A2A] hover:border-white transition-colors duration-200 bg-[#121212]"
          >
            <div>
              <h3 
                className="text-[20px] sm:text-[22px] font-normal leading-[1.3] mb-3 text-white tracking-tight" 
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                {links.email.title}
              </h3>
              <p 
                className="text-[14px] leading-[1.6] mb-8 text-[#AAAAAA]" 
                style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
              >
                {links.email.description}
              </p>
            </div>
            
            <div
              className="w-full inline-flex items-center justify-center text-[12px] uppercase tracking-[0.14em] px-6 py-3.5 font-mono font-normal select-none no-underline transition-all duration-300 border border-[#333333] text-white group-hover:border-white bg-transparent"
            >
              {links.email.cta}
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}
