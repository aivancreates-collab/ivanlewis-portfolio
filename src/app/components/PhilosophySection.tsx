import { PhilosophyKineticTypography } from './PhilosophyKineticTypography';

export function PhilosophySection() {
  return (
    <section className="relative py-24 sm:py-36 md:py-48 overflow-hidden border-b border-white/5" id="philosophy">
      <div className="relative z-10 max-w-[1150px] mx-auto px-6 sm:px-12">
        <PhilosophyKineticTypography />
      </div>
    </section>
  );
}
