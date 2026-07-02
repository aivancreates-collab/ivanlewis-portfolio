import { useState } from 'react';

interface NavigationProps {
  scrolled: boolean;
  theme?: 'dark' | 'light';
}

export function Navigation({ scrolled, theme = 'dark' }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center px-4 sm:px-8 lg:px-12 py-3 sm:py-4 transition-all duration-500"
        style={{
          background: theme === 'light'
            ? (scrolled ? 'rgba(245, 230, 211, 1)' : 'rgba(245, 230, 211, 0.92)')
            : (scrolled ? 'rgba(31, 19, 10, 1)' : 'rgba(31, 19, 10, 0.92)'),
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: theme === 'light'
            ? '1px solid var(--border)'
            : '1px solid rgba(224, 194, 162, 0.15)',
        }}
      >
        <div className="flex items-center gap-4">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[14px] sm:text-[16px] font-semibold no-underline tracking-[0.5px] transition-colors duration-500 flex items-center"
            style={{
              fontFamily: 'var(--font-family-serif)',
              color: theme === 'light' ? 'var(--text)' : 'var(--dark-text)',
            }}
          >
            Ivan Lewis
          </a>
 
          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <span
              className="w-5 h-[2px] transition-colors duration-500"
              style={{ backgroundColor: theme === 'light' ? 'var(--text)' : 'var(--dark-text)' }}
            ></span>
            <span
              className="w-5 h-[2px] transition-colors duration-500"
              style={{ backgroundColor: theme === 'light' ? 'var(--text)' : 'var(--dark-text)' }}
            ></span>
            <span
              className="w-5 h-[2px] transition-colors duration-500"
              style={{ backgroundColor: theme === 'light' ? 'var(--text)' : 'var(--dark-text)' }}
            ></span>
          </button>
        </div>
 
        <ul className="hidden lg:flex list-none gap-6 xl:gap-8 items-center">
          {['reel', 'philosophy', 'studio', 'services', 'thinking', 'about', 'connect'].map((item) => (
            <li key={item} className="flex items-center">
              <a
                href={`#${item}`}
                className="text-[10px] xl:text-[11px] uppercase no-underline transition-colors duration-500 tracking-[0.5px] font-light"
                style={{
                  fontFamily: 'var(--font-family-mono)',
                  fontWeight: 300,
                  color: theme === 'light' ? 'var(--text-secondary)' : 'var(--dark-text-secondary)',
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="fixed top-[60px] left-0 right-0 z-[999] bg-[rgba(0,0,0,0.95)] backdrop-blur-md lg:hidden">
          <ul className="flex flex-col list-none">
            {['reel', 'philosophy', 'studio', 'services', 'thinking', 'about', 'connect'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-6 py-4 text-[11px] uppercase no-underline transition-colors duration-300 tracking-[0.5px] font-light text-white/90 hover:text-white border-b border-white/10"
                  style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 300 }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
