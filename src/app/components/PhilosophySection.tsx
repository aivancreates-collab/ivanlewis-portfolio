import { PhilosophyBg } from './PhilosophyBg';

export function PhilosophySection() {
  return (
    <section className="relative py-24 sm:py-36 md:py-48 overflow-hidden" id="philosophy">
      {/* Dynamic atmospheric network + human question focus background animation */}
      <PhilosophyBg />

      <div className="relative z-10 max-w-[1150px] mx-auto px-6 sm:px-12">
        <div className="reveal">
          <p 
            className="text-[36px] sm:text-[52px] md:text-[68px] lg:text-[76px] italic leading-[1.15] tracking-[-0.02em] text-text max-w-[950px]" 
            style={{ fontFamily: 'var(--font-family-serif)', fontWeight: 'normal' }}
          >
            We use intelligence to accelerate execution. We rely on the <span className="font-semibold not-italic">human question</span> to know why it should exist.
          </p>
        </div>
      </div>
    </section>
  );
}
