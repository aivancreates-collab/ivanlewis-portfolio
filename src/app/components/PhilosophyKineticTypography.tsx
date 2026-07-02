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
  const opacity = useTransform(progress, range, [0.12, 1.0]);
  const y = useTransform(progress, range, [12, 0]);
  const scale = useTransform(progress, range, [0.98, 1.0]);

  return (
    <motion.span
      style={{ 
        opacity, 
        y, 
        scale, 
        display: 'inline-block',
        transformOrigin: 'bottom left'
      }}
      className={`mr-[0.24em] select-none ${
        highlighted 
          ? 'font-semibold not-italic text-white' 
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
    damping: 24,
    stiffness: 90,
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
    { text: "seeing", highlighted: true },
    { text: "is", highlighted: false },
    { text: "still", highlighted: false },
    { text: "ours.", highlighted: false }
  ];

  // We want the text to start revealing after the block is well into the viewport, 
  // and complete the reveal slightly before it hits the center.
  const startOffset = 0.1;
  const endOffset = 0.9;
  const totalRange = endOffset - startOffset;
  const step = totalRange / words.length;

  return (
    <div ref={containerRef} className="w-full relative py-4">
      <p 
        className="text-[32px] sm:text-[46px] md:text-[58px] lg:text-[66px] italic leading-[1.2] tracking-[-0.02em] text-white max-w-[950px] flex flex-wrap" 
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
