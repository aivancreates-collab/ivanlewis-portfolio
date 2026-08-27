export function InteractiveConnectSection() {
  const emailAddress = 'thelastgoodtaste@gmail.com';

  const links = {
    call: {
      url: 'https://calendly.com/ivanlewis/30min',
      cta: 'Book a 30-Min Conversation ↗',
      title: 'LET’S TALK',
      description: 'For projects, ideas, scripts, and problems worth a good conversation.',
    },
    email: {
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
            className="text-[15px] sm:text-[16px] uppercase tracking-[0.2em] font-normal" 
            style={{ fontFamily: 'var(--font-family-mono)', color: '#888888' }}
          >
            CONTACT &amp; CONVERSATION
          </span>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch reveal">
          
          {/* Card A: Calendly */}
          <a
            href={links.call.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 sm:p-10 flex flex-col justify-between h-full min-h-[240px] no-underline group border border-[#2A2A2A] hover:border-white transition-colors duration-200 bg-[#121212]"
          >
            <div>
              <h3 
                className="text-[24px] sm:text-[26px] font-normal leading-[1.3] mb-3 text-white tracking-tight" 
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                {links.call.title}
              </h3>
              <p 
                className="text-[14px] sm:text-[15px] leading-[1.6] mb-8 text-white" 
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {links.call.description}
              </p>
            </div>
            
            <div
              className="w-full inline-flex items-center justify-center text-[13px] sm:text-[14px] uppercase tracking-[0.14em] px-6 py-3 font-mono font-normal select-none no-underline transition-all duration-300 border border-[#333333] text-white group-hover:border-white bg-transparent"
            >
              {links.call.cta}
            </div>
          </a>

          {/* Direct Email */}
          <div className="p-8 sm:p-10 flex flex-col justify-between h-full border border-[#2A2A2A]/40 bg-[#121212]/30">
            <div>
              <h3 
                className="text-[24px] sm:text-[26px] font-normal leading-[1.3] mb-3 text-white tracking-tight" 
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                {links.email.title}
              </h3>
              <p 
                className="text-[14px] sm:text-[15px] leading-[1.6] mb-8 text-white" 
                style={{ fontFamily: 'Lato, sans-serif' }}
              >
                {links.email.description}
              </p>
            </div>

            <div className="w-full inline-flex items-center justify-start py-3 border border-transparent">
              <a
                href={`mailto:${emailAddress}?subject=Project%20Inquiry%20%2F%20Conversation`}
                className="inline-block text-[14px] sm:text-[15px] md:text-[16px] text-[var(--accent)] hover:text-white transition-colors no-underline tracking-wide font-mono"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                {emailAddress}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
