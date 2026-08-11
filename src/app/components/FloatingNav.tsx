import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.85 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[1200]"
        >
          <button
            onClick={scrollToTop}
            className="group flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 shadow-[0_12px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:border-white/40 hover:scale-110 active:scale-95 focus:outline-none"
            style={{
              backgroundColor: 'rgba(18, 14, 11, 0.85)',
            }}
            aria-label="Back to landing page"
            title="Back to landing page"
          >
            <ArrowUp
              size={18}
              className="text-white/80 group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-200"
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
