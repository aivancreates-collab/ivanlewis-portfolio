import { useEffect, useState } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Grain } from './components/Grain';
import { Navigation } from './components/Navigation';
import { FloatingNav } from './components/FloatingNav';
import { Hero } from './components/Hero';
import { ReelSection } from './components/ReelSection';
import { ThinkingPreviewSection } from './components/ThinkingPreviewSection';
import { WorkSection } from './components/WorkSection';
import { ServicesSection } from './components/ServicesSection';
import { BrandTickerSection } from './components/BrandTickerSection';
import { AboutSection } from './components/AboutSection';
import { InteractiveConnectSection } from './components/InteractiveConnectSection';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [navTheme, setNavTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Scroll reveal observer with robust MutationObserver to handle React component re-renders
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        obs.observe(el);
      });
    };

    observeAll();

    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Section-aware nav theme tracker using IntersectionObserver
    const sectionThemes: Record<string, 'dark' | 'light'> = {
      reel: 'dark',
      thinking: 'light',
      studio: 'light',
      services: 'light',
      brands: 'dark',
      about: 'dark',
      connect: 'light',
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const theme = sectionThemes[entry.target.id];
            if (theme) {
              setNavTheme(theme);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.3,
        rootMargin: '-10% 0px -60% 0px',
      }
    );

    const sections = ['reel', 'thinking', 'studio', 'services', 'brands', 'about', 'connect'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    const handleScrollTop = () => {
      if (window.scrollY < 200) {
        setNavTheme('dark');
      }
    };
    window.addEventListener('scroll', handleScrollTop, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollTop);
      obs.disconnect();
      mutationObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-bg text-text overflow-x-hidden" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
      <div
        className="fixed top-0 left-0 z-[1001] h-[1px] transition-none"
        style={{ width: `${scrollProgress}%`, backgroundColor: 'var(--accent)' }}
      />
      <CustomCursor />
      <Grain />
      <Navigation scrolled={scrolled} theme={navTheme} />
      <FloatingNav />

      {/* 1. HERO */}
      <Hero />

      {/* 2. SELECTED WORK / REEL */}
      <ReelSection />

      {/* 3. AUTHORED THINKING / DEVELOPMENT LOGIC PREVIEW */}
      <ThinkingPreviewSection />

      {/* 4. SELECTED PROJECTS / STUDIO */}
      <WorkSection />

      {/* 5. WHAT I DO */}
      <ServicesSection />

      {/* 6. BRAND CREDIBILITY */}
      <BrandTickerSection />

      {/* 7. ABOUT */}
      <AboutSection />

      {/* 8. CONTACT */}
      <InteractiveConnectSection />

      <footer className="px-12 py-12 text-center border-t border-border text-text-secondary text-xs flex flex-col items-center justify-center" style={{ fontFamily: 'var(--font-family-mono)' }}>
        <span className="block my-2">Ivan Lewis</span>
        
        <div className="flex gap-6 items-center justify-center my-4 text-[11px]">
          <a
            href="https://www.linkedin.com/in/ivan-lewis/"
            target="_blank"
            rel="noopener"
            className="no-underline transition-colors duration-300 hover:text-[var(--text)]"
            style={{ color: 'var(--text-muted)' }}
          >
            LinkedIn
          </a>
          <a
            href="https://substack.com/@lastgoodtaste"
            target="_blank"
            rel="noopener"
            className="no-underline transition-colors duration-300 hover:text-[var(--text)]"
            style={{ color: 'var(--text-muted)' }}
          >
            Substack
          </a>
          <a
            href="https://letterboxd.com/NomadicLion/"
            target="_blank"
            rel="noopener"
            className="no-underline transition-colors duration-300 hover:text-[var(--text)]"
            style={{ color: 'var(--text-muted)' }}
          >
            Letterboxd
          </a>
          <a
            href="https://www.instagram.com/itzivanl/"
            target="_blank"
            rel="noopener"
            className="no-underline transition-colors duration-300 hover:text-[var(--text)]"
            style={{ color: 'var(--text-muted)' }}
          >
            Instagram
          </a>
        </div>

        <span className="block text-[11px]" style={{ color: 'var(--text-muted)' }}>© 2026</span>
      </footer>
    </div>
  );
}
