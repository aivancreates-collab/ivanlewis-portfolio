import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'motion/react';

interface WordProps {
  text: string;
  highlighted: boolean;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ text, highlighted, progress, range }: WordProps) {
  // Smoothly transform scroll progress into opacity, positioning, and subtle scaling
  const opacity = useTransform(progress, range, [0.18, 1.0]);
  const y = useTransform(progress, range, [8, 0]);
  const scale = useTransform(progress, range, [0.99, 1.0]);

  return (
    <motion.span
      style={{ 
        opacity, 
        y, 
        scale, 
        display: 'inline-block',
        transformOrigin: 'bottom left'
      }}
      className={`mr-[0.22em] mb-[0.1em] select-none ${
        highlighted 
          ? 'font-semibold not-italic text-[var(--accent)]' 
          : 'font-light italic text-[var(--text-muted)]'
      }`}
    >
      {text}
    </motion.span>
  );
}

export function PhilosophyKineticTypography() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Monitor scroll progress of the container as it passes through the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"]
  });

  // Apply spring physics for buttery-smooth kinetic updates
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 26,
    stiffness: 95,
    restDelta: 0.001
  });

  // The actual philosophy copy, preserving all capitalization and formatting
  const words = [
    { text: "The", highlighted: false },
    { text: "brush", highlighted: false },
    { text: "became", highlighted: false },
    { text: "a", highlighted: false },
    { text: "machine.", highlighted: false },
    { text: "But", highlighted: false },
    { text: "the", highlighted: false },
    { text: "burden", highlighted: false },
    { text: "of", highlighted: false },
    { text: "having", highlighted: false },
    { text: "something", highlighted: true },
    { text: "worth", highlighted: true },
    { text: "saying,", highlighted: true },
    { text: "something", highlighted: true },
    { text: "worth", highlighted: true },
    { text: "seeing,", highlighted: true },
    { text: "is", highlighted: false },
    { text: "still", highlighted: false },
    { text: "ours.", highlighted: false }
  ];

  const startOffset = 0.1;
  const endOffset = 0.9;
  const totalRange = endOffset - startOffset;
  const step = totalRange / words.length;

  return (
    <div ref={containerRef} className="w-full relative py-2">
      <p 
        className="text-[28px] sm:text-[42px] md:text-[54px] lg:text-[62px] italic leading-[1.3] tracking-[-0.02em] text-[var(--text-secondary)] max-w-[900px] flex flex-wrap" 
        style={{ fontFamily: 'var(--font-family-serif)', fontWeight: 'normal' }}
      >
        {words.map((word, index) => {
          // Overlap factor (2.8) ensures fluid wave transition instead of mechanical steps
          const start = startOffset + index * step;
          const end = Math.min(endOffset, start + step * 2.8);
          
          return (
            <Word
              key={index}
              text={word.text}
              highlighted={word.highlighted}
              progress={smoothProgress}
              range={[start, end]}
            />
          );
        })}
      </p>
    </div>
  );
}
