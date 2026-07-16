import { PhilosophyKineticTypography } from './PhilosophyKineticTypography';

export function PhilosophySection() {
  return (
    <section 
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden border-b border-white/5" 
      style={{ backgroundColor: 'var(--bg)' }}
      id="philosophy"
    >
      <div className="relative z-10 max-w-[1150px] mx-auto px-5 sm:px-10 lg:px-16">
        <PhilosophyKineticTypography />
      </div>
    </section>
  );
}
