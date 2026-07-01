export function PhilosophySection() {
  return (
    <section className="py-16 md:py-28" id="philosophy">
      <div className="max-w-[900px] mx-auto px-12">
        <span className="block text-[13px] uppercase font-light tracking-[0.16em] reveal" style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 400, color: 'var(--text-muted)' }}>
          PHILOSOPHY
        </span>
        <p className="text-[16px] italic mt-2 mb-8 reveal" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text-secondary)' }}>
          what survives the cut
        </p>
        
        <div className="reveal">
          <p className="text-[32px] md:text-[36px] italic leading-[1.3] text-text mb-10 max-w-[640px]" style={{ fontFamily: 'var(--font-family-serif)', fontWeight: 700 }}>
            Generative AI can create a thousand images in seconds.
          </p>

          <div className="border-l-[1.5px] pl-8" style={{ borderColor: 'var(--border)' }}>
            <blockquote className="text-[18px] leading-[1.85] italic text-text max-w-[640px]" style={{ fontFamily: 'var(--font-family-serif)' }}>
              But it doesn't know why a child lies face-down in the grass, completely absorbed in an earthworm. It doesn't know why we keep texting numbers belonging to people who are gone.
            </blockquote>
            <blockquote className="text-[18px] leading-[1.85] italic text-text max-w-[640px] mt-10" style={{ fontFamily: 'var(--font-family-serif)', fontWeight: 600 }}>
              We use intelligence to accelerate execution. We rely on the human question to know what we're making.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
