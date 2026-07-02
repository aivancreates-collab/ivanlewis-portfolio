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
            The brush became a machine. But the burden of having <span className="font-semibold not-italic">something worth saying</span>, <span className="font-semibold not-italic">something worth seeing</span> is still ours.
          </p>
        </div>
      </div>
    </section>
  );
}
