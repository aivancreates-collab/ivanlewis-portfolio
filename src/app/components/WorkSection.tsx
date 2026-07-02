import { useState, useEffect } from 'react';
import lastMessageKV from '../../imports/last_message_kv-1.png';
import mkkPoster from '../../imports/mkk_ poster_kv.png';
import lastMessageVideo from '../../imports/20589796-hd_1920_1080_60fps.mp4';
import mkkVideo from '../../imports/20589796-hd_1920_1080_60fps-1.mp4';
import { ScriptModal } from './ScriptModal';
import { CurrentEngagementsModal } from './CurrentEngagementsModal';
import { MurmurationBg } from './MurmurationBg';
import { updateMetaTags } from '../utils/seo';

interface TrailPoint {
  label: string;
  content: string;
  type?: 'question' | 'underneath' | 'pivot' | 'thing';
  pullquote?: string;
  pullquoteSource?: string;
  links?: { text: string; href: string }[];
  status?: string;
}

interface WorkEntry {
  id: string;
  title: string;
  question: string;
  format: string;
  date: string;
  trail?: TrailPoint[];
  placeholder?: boolean;
}

const works: WorkEntry[] = [
  {
    id: 'e1',
    title: 'The Last Message',
    question: 'What happens to the words people were saving for later, and never sent?',
    format: 'screenplay',
    date: 'feb 2026',
    trail: [
      {
        label: 'the seed',
        content:
          "A conversation about grief. Someone mentioned they still texted their dead father's number sometimes. Not expecting a reply. Just because the habit had not stopped.",
      },
      {
        label: 'the question',
        content: 'What if the reply came?',
        type: 'question',
      },
      {
        label: 'the material',
        content:
          'News stories about grief tech startups. The quiet industry forming around loss and digital presence. None of it felt like the real thing yet.',
        pullquote:
          'This technology does not create the emotions people could not express. It just removes the excuse for not finding the words.',
        pullquoteSource: 'observation, 2025',
      },
      {
        label: 'underneath',
        content:
          'A story about the damage done by things left unsaid, and what it means when a service offers to say them for you.',
        type: 'underneath',
      },
      {
        label: 'the pivot',
        content:
          'The first draft made the service the villain. That was too easy. The real question was not whether it was ethical. It was whether the son deserved to know which messages were real. The script got harder once the villain disappeared.',
        type: 'pivot',
      },
      {
        label: 'the thing',
        content: 'Registered screenplay. 18 pages. SWA India, Feb 2026.',
        type: 'thing',
        links: [
          { text: 'connect for script', href: 'mailto:lastgoodtaste@gmail.com' },
          { text: 'the service now exists', href: 'https://www.hereafter.ai' },
        ],
        status: 'seeking production',
      },
    ],
  },
  {
    id: 'e2',
    title: 'Maati Kona Chi?',
    question: 'Who decides what gets to grow, and what gets cut?',
    format: 'short film · marathi',
    date: 'nov 2025',
    trail: [
      {
        label: 'the seed',
        content:
          'Watching a child lie flat on a garden, face inches from the earth, completely absorbed in an earthworm. The adult world moving around her, indifferent.',
      },
      {
        label: 'the question',
        content: "Whose soil is it? And does the grass have a say?",
        type: 'question',
      },
      {
        label: 'the material',
        content:
          'The idea that wildness is not disorder. That something growing beyond its assigned boundary might simply be alive.',
        pullquote:
          'Bichara gavat… vaadhlay ki khush hot asel.\nPoor grass… it must feel happy when it grows.',
        pullquoteSource: 'Chinni, six years old, in the script',
      },
      {
        label: 'underneath',
        content:
          'Belonging. Who inherits a place. What gets preserved and what gets managed out of existence.',
        type: 'underneath',
      },
      {
        label: 'the pivot',
        content:
          'The script kept wanting to be written in English. Resisted it each time. The question only existed properly in Marathi. Some things cannot be translated without losing the argument.',
        type: 'pivot',
      },
      {
        label: 'the thing',
        content: 'Registered screenplay. 9 pages. SWA India, Nov 2025. Ivan Lewis writing and directing.',
        type: 'thing',
        status: 'pre-production 2026',
      },
    ],
  },
  {
    id: 'e3',
    title: 'Active Work',
    question: 'What does a brand sound like before it knows what it is?',
    format: 'consulting',
    date: 'ongoing',
    trail: [
      {
        label: 'the seed',
        content:
          'A communications boutique in Dubai finding its footing. A spice blend learning what it stands for. A food startup deciding what kind of company it wants to become.',
      },
      {
        label: 'the question',
        content: 'What does a brand sound like before it knows what it is?',
        type: 'question',
      },
      {
        label: 'underneath',
        content:
          'Every brand problem is a story problem.',
        type: 'underneath',
      },
      {
        label: 'the thing',
        content: 'Three clients. Three objectives.',
        type: 'thing',
        status: 'active 2026',
      },
    ],
  },
  {
    id: 'e4',
    title: 'Something is forming.',
    question: 'Not ready to be named yet.',
    format: '—',
    date: '—',
    placeholder: true,
  },
];

export function WorkSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeScriptId, setActiveScriptId] = useState<'e1' | 'e2' | null>(null);
  const [isCurrentEngagementsModalOpen, setIsCurrentEngagementsModalOpen] = useState(false);

  useEffect(() => {
    const activeId = activeScriptId || openId;
    
    if (activeId === 'e1') {
      const imgUrl = new URL(lastMessageKV, window.location.origin).href;
      updateMetaTags({
        title: 'The Last Message — Ivan Lewis',
        description: 'What happens to the words people were saving for later, and never sent? Registered screenplay. SWA India, Feb 2026.',
        canonicalUrl: 'https://ivanlewis.net/#the-last-message',
        imageUrl: imgUrl,
      });
    } else if (activeId === 'e2') {
      const imgUrl = new URL(mkkPoster, window.location.origin).href;
      updateMetaTags({
        title: 'Maati Kona Chi? — Ivan Lewis',
        description: 'Who decides what gets to grow, and what gets cut? Short film screenplay in Marathi.',
        canonicalUrl: 'https://ivanlewis.net/#maati-kona-chi',
        imageUrl: imgUrl,
      });
    } else if (activeId === 'e3') {
      const imgUrl = new URL(lastMessageKV, window.location.origin).href;
      updateMetaTags({
        title: 'Active Work — Ivan Lewis',
        description: 'What does a brand sound like before it knows what it is? Ongoing creative consulting and story solutions.',
        canonicalUrl: 'https://ivanlewis.net/#active-work',
        imageUrl: imgUrl,
      });
    } else {
      const imgUrl = new URL(lastMessageKV, window.location.origin).href;
      updateMetaTags({
        title: 'Ivan Lewis',
        description: 'Creative director, writer, and filmmaker. Mumbai.',
        canonicalUrl: 'https://ivanlewis.net',
        imageUrl: imgUrl,
      });
    }
  }, [openId, activeScriptId]);

  const toggleWork = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <ScriptModal isOpen={activeScriptId !== null} onClose={() => setActiveScriptId(null)} scriptId={activeScriptId || 'e1'} />
      <CurrentEngagementsModal isOpen={isCurrentEngagementsModalOpen} onClose={() => setIsCurrentEngagementsModalOpen(false)} />
      <section className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20 lg:py-24" id="studio">
      <span
        className="block text-[13px] uppercase font-light tracking-[0.16em] reveal"
        style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 400, color: 'var(--text-muted)' }}
      >
        STUDIO
      </span>
      <p className="text-[16px] italic mt-2 mb-10 reveal" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text-secondary)' }}>
        made, mostly
      </p>

      {/* Featured Project 1: The Last Message — Always Visible, High-End Film Portfolio Layout */}
      <div className="mb-20 sm:mb-24 lg:mb-28 reveal">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_1fr] gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Atmospheric Movie Still Frame */}
          <div className="relative group w-full">
            <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] border p-1.5" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}>
              {/* Subtle Viewfinder corner brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/40 pointer-events-none z-20" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/40 pointer-events-none z-20" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/40 pointer-events-none z-20" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/40 pointer-events-none z-20" />

              {/* High-resolution micro-mesh grain overlay for cinematic aesthetic */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-overlay z-10"
                style={{
                  backgroundImage: `
                    radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px),
                    linear-gradient(rgba(255,255,255,0.02) 1.5px, transparent 1.5px),
                    linear-gradient(90deg, rgba(255,255,255,0.02) 1.5px, transparent 1.5px)
                  `,
                  backgroundSize: '4px 4px, 24px 24px, 24px 24px',
                }}
              />

              <video
                src={lastMessageVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.025]"
                poster={lastMessageKV}
              />

              {/* Filmic Contrast Vignette */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: 'radial-gradient(circle at center, transparent 45%, rgba(10,10,10,0.45) 100%)',
                }}
              />

              {/* Center reticle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 z-10">
                <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                </div>
              </div>

              {/* Technical slate labels top-right */}
              <div className="absolute top-6 right-6 z-20 text-white/70 select-none text-right text-[9px] tracking-[0.16em] leading-relaxed font-mono hidden sm:block">
                <span className="block font-medium uppercase text-[var(--dark-text-secondary)]">REC ● 24 FPS</span>
                <span className="block opacity-75">SND: DUAL // SHUTTER: 180°</span>
                <span className="block opacity-75">LENS: ANAMORPHIC 50MM</span>
              </div>

              {/* Film Slate Overlay */}
              <div className="absolute bottom-6 left-6 z-20 text-white select-none">
                <span className="block text-[9px] uppercase tracking-[0.22em] text-white/90 mb-1" style={{ fontFamily: 'var(--font-family-mono)', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                  KEY STILL // THE LAST MESSAGE
                </span>
                <span className="block text-[15px] sm:text-[17px] italic leading-tight" style={{ fontFamily: 'var(--font-family-serif)', textShadow: '0 1.5px 3px rgba(0,0,0,0.9)' }}>
                  "What if the reply came?"
                </span>
              </div>
            </div>

            {/* Sub-image technical labels */}
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] uppercase tracking-[0.15em] gap-2 select-none" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
              <div className="flex items-center gap-3">
                <span className="font-semibold" style={{ color: 'var(--text)' }}>STILL NO. 01 // SOLACE CORP RECEPTION</span>
              </div>
              <span>KEY VISUAL</span>
            </div>
          </div>

          {/* Right Column: Editorial Typographic Panel */}
          <div className="flex flex-col justify-between h-full pt-1">
            <div>
              <div className="flex items-center gap-3 mb-4 select-none" style={{ fontFamily: 'var(--font-family-mono)' }}>
                <span className="text-[10px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>01 // FEATURED SCREENPLAY</span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgba(106, 68, 34, 0.2)' }} />
                <span className="text-[10px] uppercase tracking-[0.12em]" style={{ color: 'var(--text-muted)' }}>screenplay</span>
              </div>

              <h2
                className="text-[34px] sm:text-[40px] lg:text-[44px] font-normal tracking-[-0.02em] leading-[1.05] mb-5"
                style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)' }}
              >
                The Last Message <span className="text-[12px] font-mono text-text-muted select-none ml-2 align-middle">18P</span>
              </h2>

              <p
                className="text-[17px] sm:text-[19px] italic leading-[1.55] mb-8"
                style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text-secondary)' }}
              >
                "What happens to the words people were saving for later, and never sent?"
              </p>

              {/* Status details line */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 text-[11px] uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                <span>18 PAGES</span>
                <span>•</span>
                <span>SWA INDIA, FEB 2026</span>
                <span>•</span>
                <span className="text-emerald-700 bg-emerald-50/50 border border-emerald-100/80 px-2 py-0.5 text-[10px] rounded-sm font-semibold">SEEKING PRODUCTION</span>
              </div>
            </div>

            {/* Custom Interactive Narrative Actions embedded into the editorial layout */}
            <div className="border-t pt-6 flex flex-col gap-5" style={{ borderColor: 'var(--border)' }}>
              <button
                onClick={() => setActiveScriptId('e1')}
                className="flex items-center justify-between w-full group/btn text-left"
                data-interactive
              >
                <span className="text-[11px] uppercase tracking-[0.18em] font-medium" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text)' }}>
                  READ SCREENPLAY EXCERPT
                </span>
                <span
                  className="text-[14px] font-light inline-flex items-center justify-center w-[28px] h-[28px] border rounded-full transition-transform duration-300 group-hover/btn:translate-x-1"
                  style={{
                    fontFamily: 'var(--font-family-mono)',
                    borderColor: 'var(--border)',
                  }}
                >
                  →
                </span>
              </button>

              <div className="border-t pt-5" style={{ borderColor: 'var(--border)' }}>
                <button
                  onClick={() => toggleWork('e1')}
                  className="flex items-center justify-between w-full group/btn text-left"
                  data-interactive
                >
                  <span className="text-[11px] uppercase tracking-[0.18em] font-medium" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text)' }}>
                    {openId === 'e1' ? 'CLOSE MOVIE BACKGROUND' : 'READ DEVELOPMENT BACKGROUND'}
                  </span>
                  <span
                    className="text-[14px] font-light inline-flex items-center justify-center w-[28px] h-[28px] border rounded-full transition-transform duration-300"
                    style={{
                      transform: openId === 'e1' ? 'rotate(45deg)' : 'none',
                      fontFamily: 'var(--font-family-mono)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    +
                  </span>
                </button>
              </div>

              {openId === 'e1' && (
                <div className="mt-6 space-y-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar border-l pl-5" style={{ borderColor: 'var(--border)' }}>
                  {works[0].trail?.map((point, i) => (
                    <div
                      key={i}
                      className="py-1"
                      style={{ animation: 'fadeIn 0.4s ease-out forwards' }}
                    >
                      <span className="block text-[9px] uppercase tracking-[0.16em] mb-1.5" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                        {point.label}
                      </span>
                      {point.type === 'question' ? (
                        <blockquote className="text-[16px] italic leading-relaxed" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)' }}>
                          "{point.content}"
                        </blockquote>
                      ) : (
                        <p className="text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {point.content}
                        </p>
                      )}

                      {point.pullquote && (
                        <div className="mt-3 border-l-[1.5px] pl-4 py-1" style={{ borderColor: 'var(--border-solid)', backgroundColor: 'rgba(106, 68, 34, 0.01)' }}>
                          <p className="text-[13px] italic leading-relaxed" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)' }}>
                            "{point.pullquote}"
                          </p>
                          {point.pullquoteSource && (
                            <span className="block text-[9px] uppercase tracking-[0.12em] mt-1.5" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                              — {point.pullquoteSource}
                            </span>
                          )}
                        </div>
                      )}

                      {point.links && (
                        <div className="mt-4 flex flex-wrap gap-4 text-[10px]" style={{ fontFamily: 'var(--font-family-mono)' }}>
                          {point.links.map((link, linkIdx) => (
                            <a
                              key={linkIdx}
                              href={link.href}
                              target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                              rel="noopener noreferrer"
                              className="underline underline-offset-4 hover:opacity-70 transition-opacity uppercase tracking-wider"
                              style={{ color: 'var(--text)' }}
                            >
                              {link.text} →
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* Featured Project 2: Maati Kona Chi? — Same High-End Film Portfolio Layout */}
      <div className="mb-20 sm:mb-24 lg:mb-28 reveal">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_1fr] gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Atmospheric Movie Still Frame */}
          <div className="relative group w-full">
            <div className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] border p-1.5" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}>
              
              {/* High-resolution micro-mesh grain overlay for cinematic aesthetic */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-overlay z-10"
                style={{
                  backgroundImage: `
                    radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px),
                    linear-gradient(rgba(255,255,255,0.02) 1.5px, transparent 1.5px),
                    linear-gradient(90deg, rgba(255,255,255,0.02) 1.5px, transparent 1.5px)
                  `,
                  backgroundSize: '4px 4px, 24px 24px, 24px 24px',
                }}
              />

              <video
                src={mkkVideo}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover scale-[1.07] transition-transform duration-[1200ms] ease-out group-hover:scale-[1.10]"
                poster={mkkPoster}
              />

              {/* Filmic Contrast Vignette */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: 'radial-gradient(circle at center, transparent 45%, rgba(10,10,10,0.45) 100%)',
                }}
              />

              {/* Film Slate Overlay */}
              <div className="absolute bottom-6 left-6 z-20 text-white select-none">
                <span className="block text-[9px] uppercase tracking-[0.22em] text-white/90 mb-1" style={{ fontFamily: 'var(--font-family-mono)', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                  KEY STILL // MAATI KONA CHI?
                </span>
                <span className="block text-[15px] sm:text-[17px] italic leading-tight" style={{ fontFamily: 'var(--font-family-serif)', textShadow: '0 1.5px 3px rgba(0,0,0,0.9)' }}>
                  "Who decides what gets to grow, and what gets cut?"
                </span>
              </div>
            </div>

            {/* Sub-image technical labels */}
            <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] uppercase tracking-[0.15em] gap-2 select-none" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
              <div className="flex items-center gap-3">
                <span className="font-semibold" style={{ color: 'var(--text)' }}>STILL NO. 01 // OVERGROWN COURTYARD</span>
              </div>
              <span>POSTER ART</span>
            </div>
          </div>

          {/* Right Column: Editorial Typographic Panel */}
          <div className="flex flex-col justify-between h-full pt-1">
            <div>
              <div className="flex items-center gap-3 mb-4 select-none" style={{ fontFamily: 'var(--font-family-mono)' }}>
                <span className="text-[10px] uppercase tracking-[0.18em]" style={{ color: 'var(--text-muted)' }}>02 // FEATURED SCREENPLAY</span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgba(106, 68, 34, 0.2)' }} />
                <span className="text-[10px] uppercase tracking-[0.12em]" style={{ color: 'var(--text-muted)' }}>short film · marathi</span>
              </div>

              <h2
                className="text-[34px] sm:text-[40px] lg:text-[44px] font-normal tracking-[-0.02em] leading-[1.05] mb-5"
                style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)' }}
              >
                Maati Kona Chi? <span className="text-[12px] font-mono text-text-muted select-none ml-2 align-middle">9P</span>
              </h2>

              <p
                className="text-[17px] sm:text-[19px] italic leading-[1.55] mb-8"
                style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text-secondary)' }}
              >
                "Who decides what gets to grow, and what gets cut?"
              </p>

              {/* Status details line */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 text-[11px] uppercase tracking-[0.15em]" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                <span>9 PAGES</span>
                <span>•</span>
                <span>SWA INDIA, NOV 2025</span>
                <span>•</span>
                <span className="text-amber-700 bg-amber-50/50 border border-amber-100/80 px-2 py-0.5 text-[10px] rounded-sm font-semibold text-center select-none uppercase tracking-[0.1em]">PRE-PRODUCTION 2026</span>
              </div>
            </div>

            {/* Custom Interactive Narrative Actions embedded into the editorial layout */}
            <div className="border-t pt-6 flex flex-col gap-5" style={{ borderColor: 'var(--border)' }}>
              <button
                onClick={() => setActiveScriptId('e2')}
                className="flex items-center justify-between w-full group/btn text-left"
                data-interactive
              >
                <span className="text-[11px] uppercase tracking-[0.18em] font-medium" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text)' }}>
                  READ SCREENPLAY EXCERPT
                </span>
                <span
                  className="text-[14px] font-light inline-flex items-center justify-center w-[28px] h-[28px] border rounded-full transition-transform duration-300 group-hover/btn:translate-x-1"
                  style={{
                    fontFamily: 'var(--font-family-mono)',
                    borderColor: 'var(--border)',
                  }}
                >
                  →
                </span>
              </button>

              <div className="border-t pt-5" style={{ borderColor: 'var(--border)' }}>
                <button
                  onClick={() => toggleWork('e2')}
                  className="flex items-center justify-between w-full group/btn text-left"
                  data-interactive
                >
                  <span className="text-[11px] uppercase tracking-[0.18em] font-medium" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text)' }}>
                    {openId === 'e2' ? 'CLOSE MOVIE BACKGROUND' : 'READ DEVELOPMENT BACKGROUND'}
                  </span>
                  <span
                    className="text-[14px] font-light inline-flex items-center justify-center w-[28px] h-[28px] border rounded-full transition-transform duration-300"
                    style={{
                      transform: openId === 'e2' ? 'rotate(45deg)' : 'none',
                      fontFamily: 'var(--font-family-mono)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    +
                  </span>
                </button>
              </div>

              {openId === 'e2' && (
                <div className="mt-6 space-y-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar border-l pl-5" style={{ borderColor: 'var(--border)' }}>
                  {works[1].trail?.map((point, i) => (
                    <div
                      key={i}
                      className="py-1"
                      style={{ animation: 'fadeIn 0.4s ease-out forwards' }}
                    >
                      <span className="block text-[9px] uppercase tracking-[0.16em] mb-1.5" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                        {point.label}
                      </span>
                      {point.type === 'question' ? (
                        <blockquote className="text-[16px] italic leading-relaxed" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)' }}>
                          "{point.content}"
                        </blockquote>
                      ) : (
                        <p className="text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                          {point.content}
                        </p>
                      )}

                      {point.pullquote && (
                        <div className="mt-3 border-l-[1.5px] pl-4 py-1" style={{ borderColor: 'var(--border-solid)', backgroundColor: 'rgba(106, 68, 34, 0.01)' }}>
                          <p className="text-[13px] italic leading-relaxed" style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)' }}>
                            "{point.pullquote}"
                          </p>
                          {point.pullquoteSource && (
                            <span className="block text-[9px] uppercase tracking-[0.12em] mt-1.5" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                              — {point.pullquoteSource}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* More Projects Header */}
      <span
        className="block mt-16 mb-4 text-[10px] uppercase tracking-[0.18em] select-none border-b pb-3"
        style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)', borderColor: 'var(--border)' }}
      >
        ADDITIONAL PROJECTS
      </span>

      {works.slice(2).map((work, index) => (
        <div
          key={work.id}
          className={`border-b-[0.5px] last:border-b-[0.5px] reveal relative ${
            work.placeholder ? 'overflow-hidden' : ''
          }`}
          style={{
            borderColor: 'var(--border)',
            transitionDelay: `${index * 80}ms`
          }}
        >
          {work.placeholder && <MurmurationBg />}
          <div
            className={`py-[2.6rem] transition-all duration-[380ms] ${
              work.placeholder ? 'cursor-default pointer-events-none' : 'cursor-pointer hover:pl-3'
            }`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
            onClick={() => !work.placeholder && toggleWork(work.id)}
            data-interactive
          >
            <h2
              className="text-[clamp(22px,2.8vw,34px)] font-normal tracking-[-0.015em] leading-[1.15] mb-2"
              style={{
                fontFamily: 'var(--font-family-serif)',
                color: 'var(--text)'
              }}
            >
              {work.title}
              {work.placeholder && (
                <span className="text-[10px] uppercase tracking-[0.1em] border border-current px-2 py-[3px] ml-3 align-middle" style={{ color: 'var(--text-muted)' }}>
                  coming 2026
                </span>
              )}
            </h2>

            <p
              className="text-[16px] italic leading-[1.7] mb-[1.4rem]"
              style={{
                fontFamily: 'var(--font-family-serif)',
                color: 'var(--text-secondary)'
              }}
            >
              {work.question}
            </p>

            <div className="flex justify-between items-center">
              <span
                className="text-[12px] font-light tracking-[0.12em]"
                style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 400, color: 'var(--text-muted)' }}
              >
                {work.format}
              </span>

              <div className="flex items-center gap-6">
                <span
                  className="text-[12px] font-light tracking-[0.1em]"
                  style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 400, color: 'var(--text-muted)' }}
                >
                  {work.date}
                </span>
                {!work.placeholder && (
                  <span
                    className={`text-[12px] font-light inline-flex items-center justify-center w-[44px] h-[44px] transition-all duration-[420ms] ${
                      openId === work.id ? 'rotate-45' : ''
                    }`}
                    style={{
                      fontFamily: 'var(--font-family-mono)',
                      fontWeight: 400,
                      color: openId === work.id ? 'var(--text)' : 'var(--text-muted)',
                      transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
                    }}
                  >
                    +
                  </span>
                )}
              </div>
            </div>
          </div>

          {work.trail && openId === work.id && (
            <div className="pb-12">
              {work.id === 'e2' && (
                <div className="mb-8 relative group max-w-xl animate-fadeIn">
                  <div className="relative overflow-hidden aspect-[4/3] border p-1.5" style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}>
                    <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/40 pointer-events-none z-20" />
                    <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/40 pointer-events-none z-20" />
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/40 pointer-events-none z-20" />
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/40 pointer-events-none z-20" />
                    
                    <img
                      src={mkkPoster}
                      alt="Maati Kona Chi watercolor art"
                      className="w-full h-full object-cover grayscale-[0.1] contrast-[1.05] brightness-[0.95]"
                      referrerPolicy="no-referrer"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
                  </div>
                  <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.12em]" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                    <span>VISUAL REVELATION // MAATI KONA CHI</span>
                    <span>WATERCOLOR POSTER ART</span>
                  </div>
                </div>
              )}
              {work.trail.map((point, i) => (
                <div
                  key={i}
                  className="grid grid-cols-1 sm:grid-cols-[100px_1fr] md:grid-cols-[130px_1fr] gap-4 sm:gap-8 py-5 sm:py-7 border-t-[0.5px] items-start"
                  style={{
                    borderColor: point.type === 'thing' ? 'var(--border-solid)' : 'var(--border)',
                  }}
                >
                  <span
                    className="text-[13px] font-light tracking-[0.12em] pt-[3px] leading-[1.5]"
                    style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 400, color: 'var(--text-muted)' }}
                  >
                    {point.label}
                  </span>

                  <div>
                    {point.pullquote && (
                      <>
                        <p
                          className="text-[16px] border-l pl-5 mt-2 leading-[1.72] whitespace-pre-line"
                          style={{
                            fontFamily: 'var(--font-family-serif)',
                            color: 'var(--text-secondary)',
                            borderColor: 'var(--border)'
                          }}
                        >
                          {point.pullquote}
                        </p>
                        <span
                          className="text-[12px] font-light tracking-[0.08em] mt-2 block pl-5"
                          style={{ fontFamily: 'var(--font-family-mono)', fontWeight: 400, color: 'var(--text-muted)' }}
                        >
                          {point.pullquoteSource}
                        </span>
                        <br />
                        <br />
                      </>
                    )}

                    <p
                      className={`leading-[1.75] ${
                        point.type === 'question'
                          ? 'text-[20px] italic tracking-[-0.005em]'
                          : point.type === 'underneath'
                          ? 'text-[18px] tracking-[0.04em]'
                          : 'text-[18px]'
                      }`}
                      style={{
                        fontFamily: 'var(--font-family-serif)',
                        fontWeight: 'normal',
                        color: point.type === 'question' ? 'var(--text)' : 'var(--text-secondary)'
                      }}
                    >
                      {point.content}
                    </p>

                    {point.links && (
                      <div className="mt-3">
                        {point.links.map((link, j) => (
                          <a
                            key={j}
                            href={link.href}
                            target={link.href.startsWith('http') ? '_blank' : undefined}
                            rel={link.href.startsWith('http') ? 'noopener' : undefined}
                            className="inline-block text-[10px] font-light tracking-[0.08em] no-underline border-b-[0.5px] pb-[1px] mr-5 mt-3 transition-all duration-200"
                            style={{
                              fontFamily: 'var(--font-family-mono)',
                              fontWeight: 400,
                              color: 'var(--text-muted)',
                              borderColor: 'var(--border)'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = 'var(--text)';
                              e.currentTarget.style.borderColor = 'var(--text)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = 'var(--text-muted)';
                              e.currentTarget.style.borderColor = 'var(--border)';
                            }}
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                    )}

                    {point.status && (
                      <span
                        className="inline-block text-[12px] font-light tracking-[0.1em] border-[0.5px] px-2 py-[3px] mt-4 cursor-pointer transition-colors hover:bg-text hover:text-bg"
                        style={{
                          fontFamily: 'var(--font-family-mono)',
                          fontWeight: 400,
                          color: 'var(--text-muted)',
                          borderColor: 'var(--border)'
                        }}
                        onClick={() => {
                          if (point.status === 'active 2026') {
                            setIsCurrentEngagementsModalOpen(true);
                          }
                        }}
                      >
                        {point.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
    </>
  );
}
