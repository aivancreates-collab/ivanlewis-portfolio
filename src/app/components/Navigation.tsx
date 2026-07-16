import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  scrolled: boolean;
  theme?: 'dark' | 'light';
}

export function Navigation({ scrolled, theme = 'dark' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 80) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 120) {
        // Scrolling down, hide header
        if (!mobileMenuOpen) {
          setVisible(false);
        }
      } else {
        // Scrolling up, show header
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = ['reel', 'philosophy', 'studio', 'services', 'about', 'connect'];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center px-6 sm:px-10 lg:px-16 py-4 transition-all duration-300 border-b"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(-100%)',
          background: scrolled ? 'rgba(22, 17, 14, 0.96)' : 'rgba(22, 17, 14, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderColor: 'rgba(247, 249, 250, 0.08)',
        }}
      >
        <div className="flex items-center justify-between w-full lg:w-auto">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[17px] sm:text-[18px] font-semibold no-underline tracking-[-0.2px] transition-colors duration-300 flex items-center select-none"
            style={{
              fontFamily: 'var(--font-family-serif)',
              color: 'var(--text)',
            }}
          >
            Ivan Lewis
          </a>

          {/* Hamburger Menu Button - Mobile Only - guaranteed 44px+ touch target */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-12 h-12 p-3 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
            aria-label="Open full-screen menu"
          >
            <span
              className="w-6 h-[1.5px] transition-all duration-300"
              style={{ backgroundColor: 'var(--text)' }}
            ></span>
            <span
              className="w-6 h-[1.5px] transition-all duration-300"
              style={{ backgroundColor: 'var(--text)' }}
            ></span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex list-none gap-8 xl:gap-10 items-center">
          {navItems.map((item) => (
            <li key={item} className="flex items-center">
              <a
                href={`#${item}`}
                className="text-[14px] uppercase no-underline transition-colors duration-300 tracking-[0.1em] font-normal hover:text-opacity-100"
                style={{
                  fontFamily: 'var(--font-family-mono)',
                  color: 'var(--text)',
                  opacity: 0.72,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.72';
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[2000] flex flex-col justify-between px-6 py-6"
            style={{
              backgroundColor: 'var(--dark-bg)',
              color: 'var(--dark-text)',
            }}
          >
            {/* Header Area inside menu */}
            <div className="flex justify-between items-center">
              <span
                className="text-[17px] font-semibold tracking-[-0.2px] select-none"
                style={{
                  fontFamily: 'var(--font-family-serif)',
                  color: 'var(--dark-text)',
                }}
              >
                Ivan Lewis
              </span>

              {/* Close button - guaranteed 44px+ touch target */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-12 h-12 p-3 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
                aria-label="Close menu"
              >
                <div className="relative w-6 h-6">
                  <span className="absolute block w-6 h-[1.5px] bg-white rotate-45 top-3" />
                  <span className="absolute block w-6 h-[1.5px] bg-white -rotate-45 top-3" />
                </div>
              </button>
            </div>

            {/* Menu Links List */}
            <nav className="flex flex-col justify-center flex-1 my-12">
              <ul className="flex flex-col list-none gap-6 sm:gap-8">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 + 0.1, duration: 0.4 }}
                  >
                    <a
                      href={`#${item}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="inline-block py-2 text-[20px] sm:text-[24px] uppercase no-underline transition-colors duration-300 tracking-[0.12em] font-normal"
                      style={{
                        fontFamily: 'var(--font-family-mono)',
                        color: 'var(--dark-text)',
                      }}
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer Area inside menu */}
            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-[14px]" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--dark-text-secondary)' }}>
              <span>© 2026</span>
              <span>Mumbai</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
