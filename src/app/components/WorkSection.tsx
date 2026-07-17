import { useState, useEffect } from 'react';
import lastMessageKV from '../../imports/last_message_kv-1.png';
import lastMessageVideo from '../../imports/20589796-hd_1920_1080_60fps.mp4';
import mkkPosterKV from '../../imports/mkk_ poster_kv.png';
import { ScriptModal } from './ScriptModal';
import { CurrentEngagementsModal } from './CurrentEngagementsModal';
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

interface FeaturedProjectDetails {
  id: string;
  title: string;
  numberLabel: string;
  formatLabel: string;
  question: string;
  pageCount: string;
  detailsLabel: string;
  statusText: string;
  statusStyle: string;
  viewfinderLeft: string;
  viewfinderRight: string;
  mediaType: 'video' | 'image';
  videoSrc?: string;
  imageSrc: string;
}

const featuredProjectsData: Record<string, FeaturedProjectDetails> = {
  e1: {
    id: 'e1',
    title: 'The Last Message',
    numberLabel: '01 // FEATURED',
    formatLabel: 'screenplay',
    question: 'What happens to the words people were saving for later, and never sent?',
    pageCount: '18P',
    detailsLabel: 'SWA INDIA, FEB 2026',
    statusText: 'SEEKING PRODUCTION',
    statusStyle: 'text-emerald-400 bg-emerald-950/30 border border-emerald-500/20',
    viewfinderLeft: 'STILL NO. 01 // SOLACE CORP',
    viewfinderRight: 'KEY VISUAL',
    mediaType: 'video',
    videoSrc: lastMessageVideo,
    imageSrc: lastMessageKV,
  },
  e2: {
    id: 'e2',
    title: 'Maati Kona Chi?',
    numberLabel: '02 // FEATURED',
    formatLabel: 'short film · marathi',
    question: 'Who decides what gets to grow, and what gets cut?',
    pageCount: '9P',
    detailsLabel: 'SWA INDIA, NOV 2025',
    statusText: 'PRE-PRODUCTION 2026',
    statusStyle: 'text-amber-400 bg-amber-950/30 border border-amber-500/20',
    viewfinderLeft: 'POSTER // MAATI KONA CHI?',
    viewfinderRight: 'KEY VISUAL',
    mediaType: 'image',
    imageSrc: mkkPosterKV,
  }
};

export function WorkSection() {
  const [focusedProjectId, setFocusedProjectId] = useState<string>('e1');
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeScriptId, setActiveScriptId] = useState<'e1' | 'e2' | null>(null);
  const [isCurrentEngagementsModalOpen, setIsCurrentEngagementsModalOpen] = useState(false);

  useEffect(() => {
    const activeId = activeScriptId || openId || focusedProjectId;
    const imgUrl = new URL(lastMessageKV, window.location.origin).href;

    if (activeId === 'e1') {
      updateMetaTags({
        title: 'The Last Message — Ivan Lewis',
        description: 'What happens to the words people were saving for later, and never sent? Registered screenplay. SWA India, Feb 2026.',
        canonicalUrl: 'https://ivanlewis.net/#the-last-message',
        imageUrl: imgUrl,
      });
    } else if (activeId === 'e2') {
      updateMetaTags({
        title: 'Maati Kona Chi? — Ivan Lewis',
        description: 'Who decides what gets to grow, and what gets cut? Short film screenplay in Marathi.',
        canonicalUrl: 'https://ivanlewis.net/#maati-kona-chi',
        imageUrl: imgUrl,
      });
    } else if (activeId === 'e3') {
      updateMetaTags({
        title: 'Active Work — Ivan Lewis',
        description: 'What does a brand sound like before it knows what it is? Ongoing creative consulting and story solutions.',
        canonicalUrl: 'https://ivanlewis.net/#active-work',
        imageUrl: imgUrl,
      });
    } else {
      updateMetaTags({
        title: 'Ivan Lewis',
        description: 'Creative director, writer, and filmmaker. Mumbai.',
        canonicalUrl: 'https://ivanlewis.net',
        imageUrl: imgUrl,
      });
    }
  }, [openId, activeScriptId, focusedProjectId]);

  const toggleWork = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const focusedProject = featuredProjectsData[focusedProjectId] || featuredProjectsData['e1'];

  return (
    <>
      <ScriptModal isOpen={activeScriptId !== null} onClose={() => setActiveScriptId(null)} scriptId={activeScriptId || 'e1'} />
      <CurrentEngagementsModal isOpen={isCurrentEngagementsModalOpen} onClose={() => setIsCurrentEngagementsModalOpen(false)} />
      
      <section className="px-5 sm:px-10 lg:px-16 py-12 sm:py-16 md:py-20" id="studio">
        {/* Editorial Section Header */}
        <div className="mb-8 md:mb-12">
          <span
            className="block text-[14px] uppercase font-normal tracking-[0.16em] text-[var(--text-muted)]"
            style={{ fontFamily: 'var(--font-family-mono)' }}
          >
            STUDIO
          </span>
          <p className="text-[17px] sm:text-[18px] italic mt-1.5 text-[var(--text-secondary)]" style={{ fontFamily: 'var(--font-family-serif)' }}>
            made, mostly
          </p>
        </div>

        {/* Primary Layout: Controlled Asymmetry 12-Column Grid with Single Dominant Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 md:mb-20">
          
          {/* Left Side: Single Dominant Visual (Take 7 of 12 columns on desktop) */}
          <div className="lg:col-span-7 relative group w-full">
            <div 
              className="relative overflow-hidden aspect-[16/10] sm:aspect-[16/9] border p-1" 
              style={{ borderColor: 'var(--border)', backgroundColor: 'var(--bg)' }}
            >
              {/* Cinematic corner viewfinder marks */}
              <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/30 pointer-events-none z-20" />
              <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/30 pointer-events-none z-20" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/30 pointer-events-none z-20" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/30 pointer-events-none z-20" />

              {/* High-resolution mesh grain overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.2] mix-blend-overlay z-10"
                style={{
                  backgroundImage: `
                    radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px),
                    linear-gradient(rgba(255,255,255,0.01) 1.5px, transparent 1.5px)
                  `,
                  backgroundSize: '4px 4px, 20px 20px',
                }}
              />

              {focusedProject.mediaType === 'video' ? (
                <video
                  key={focusedProject.id}
                  src={focusedProject.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.015]"
                  poster={focusedProject.imageSrc}
                />
              ) : (
                <img
                  key={focusedProject.id}
                  src={focusedProject.imageSrc}
                  alt={focusedProject.title}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.015]"
                />
              )}

              {/* Vignette */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: 'radial-gradient(circle at center, transparent 50%, rgba(10,10,10,0.4) 100%)',
                }}
              />
            </div>

            {/* Viewfinder labels (Guaranteed at least 14px on mobile) */}
            <div 
              className="mt-3 flex justify-between items-center text-[14px] lg:text-[13px] uppercase tracking-[0.15em] select-none" 
              style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}
            >
              <span className="font-medium" style={{ color: 'var(--text)' }}>{focusedProject.viewfinderLeft}</span>
              <span>{focusedProject.viewfinderRight}</span>
            </div>
          </div>

          {/* Right Side: Editorial Description (Take 5 of 12 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-1">
            <div>
              <div className="flex items-center gap-3 mb-4 select-none" style={{ fontFamily: 'var(--font-family-mono)' }}>
                <span className="text-[14px] lg:text-[13px] uppercase tracking-[0.14em]" style={{ color: 'var(--text-muted)' }}>{focusedProject.numberLabel}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="text-[14px] lg:text-[13px] uppercase tracking-[0.12em]" style={{ color: 'var(--text-muted)' }}>{focusedProject.formatLabel}</span>
              </div>

              <h3
                className="text-[32px] sm:text-[38px] lg:text-[42px] font-normal tracking-[-0.02em] leading-[1.1] mb-4"
                style={{ fontFamily: 'var(--font-family-serif)', color: 'var(--text)' }}
              >
                {focusedProject.title} <span className="text-[14px] font-mono text-[var(--text-muted)] select-none ml-2 align-middle">{focusedProject.pageCount}</span>
              </h3>

              <p
                className="text-[18px] sm:text-[20px] italic leading-[1.6] mb-6 text-[var(--text-secondary)]"
                style={{ fontFamily: 'var(--font-family-serif)' }}
              >
                "{focusedProject.question}"
              </p>

              {/* Status block (Guaranteed >= 14px on mobile) */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6 text-[14px] lg:text-[13px] uppercase tracking-[0.12em]" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                <span>{focusedProject.pageCount === '18P' ? '18 PAGES' : '9 PAGES'}</span>
                <span>•</span>
                <span>{focusedProject.detailsLabel}</span>
                <span>•</span>
                <span className={`${focusedProject.statusStyle} px-2 py-0.5 text-[12px] font-semibold tracking-wider`}>{focusedProject.statusText}</span>
              </div>
            </div>

            {/* Custom Interactive Narrative Actions */}
            <div className="border-t pt-5 flex flex-col gap-4" style={{ borderColor: 'var(--border)' }}>
              <button
                onClick={() => setActiveScriptId(focusedProject.id as 'e1' | 'e2')}
                className="flex items-center justify-between w-full group/btn text-left py-2"
                data-interactive
              >
                <span className="text-[14px] lg:text-[13px] uppercase tracking-[0.15em] font-medium" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text)' }}>
                  READ SCREENPLAY EXCERPT
                </span>
                <span
                  className="text-[15px] font-light inline-flex items-center justify-center w-[32px] h-[32px] border rounded-full transition-transform duration-300 group-hover/btn:translate-x-1"
                  style={{
                    fontFamily: 'var(--font-family-mono)',
                    borderColor: 'var(--border)',
                  }}
                >
                  →
                </span>
              </button>

              <div className="border-t pt-3" style={{ borderColor: 'var(--border)' }}>
                <button
                  onClick={() => toggleWork(focusedProject.id)}
                  className="flex items-center justify-between w-full group/btn text-left py-2"
                  data-interactive
                >
                  <span className="text-[14px] lg:text-[13px] uppercase tracking-[0.15em] font-medium" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text)' }}>
                    {openId === focusedProject.id ? 'CLOSE DEVELOPMENT BACKGROUND' : 'READ DEVELOPMENT BACKGROUND'}
                  </span>
                  <span
                    className="text-[15px] font-light inline-flex items-center justify-center w-[32px] h-[32px] border rounded-full transition-transform duration-300"
                    style={{
                      transform: openId === focusedProject.id ? 'rotate(45deg)' : 'none',
                      fontFamily: 'var(--font-family-mono)',
                      borderColor: 'var(--border)',
                    }}
                  >
                    +
                  </span>
                </button>
              </div>

              {openId === focusedProject.id && (
                <div className="mt-4 space-y-5 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar border-l pl-4" style={{ borderColor: 'var(--border)' }}>
                  {works.find(w => w.id === focusedProject.id)?.trail?.map((point, i) => (
                    <div key={i} className="py-1 animate-fadeIn">
                      <span className="block text-[14px] lg:text-[13px] uppercase tracking-[0.12em] mb-1" style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)' }}>
                        {point.label}
                      </span>
                      {point.type === 'question' ? (
                        <blockquote className="text-[17px] italic leading-relaxed text-[var(--text)]" style={{ fontFamily: 'var(--font-family-serif)' }}>
                          "{point.content}"
                        </blockquote>
                      ) : (
                        <p className="text-[17px] leading-relaxed text-[var(--text-secondary)]" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                          {point.content}
                        </p>
                      )}

                      {point.pullquote && (
                        <div className="mt-2 border-l-2 pl-4 py-1" style={{ borderColor: 'var(--border-solid)', backgroundColor: 'rgba(247, 249, 250, 0.02)' }}>
                          <p className="text-[17px] italic leading-relaxed text-[var(--text)]" style={{ fontFamily: 'var(--font-family-serif)' }}>
                            "{point.pullquote}"
                          </p>
                          {point.pullquoteSource && (
                            <span className="block text-[14px] lg:text-[13px] uppercase tracking-[0.1em] mt-1 text-[var(--text-muted)]" style={{ fontFamily: 'var(--font-family-mono)' }}>
                              — {point.pullquoteSource}
                            </span>
                          )}
                        </div>
                      )}

                      {point.links && (
                        <div className="mt-3 flex flex-wrap gap-4 text-[14px] lg:text-[13px]" style={{ fontFamily: 'var(--font-family-mono)' }}>
                          {point.links.map((link, linkIdx) => (
                            <a
                              key={linkIdx}
                              href={link.href}
                              target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                              rel="noopener noreferrer"
                              className="underline underline-offset-4 hover:opacity-70 transition-opacity uppercase tracking-wider text-[var(--text)] font-normal"
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

        {/* Additional Projects Index: Flat Editorial Typography Listing */}
        <span
          className="block mt-12 mb-4 text-[14px] lg:text-[13px] uppercase tracking-[0.18em] select-none border-b pb-2 text-[var(--text-muted)]"
          style={{ fontFamily: 'var(--font-family-mono)', borderColor: 'var(--border)' }}
        >
          ADDITIONAL PROJECTS
        </span>

        <div className="divide-y divide-[var(--border)]">
          {works.filter(w => w.id !== focusedProjectId).map((work, index) => (
            <div
              key={work.id}
              className="reveal relative py-8 sm:py-10 transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div
                className={`transition-all duration-[350ms] ${
                  work.placeholder ? 'cursor-default pointer-events-none' : 'cursor-pointer hover:pl-2'
                }`}
                onClick={() => {
                  if (!work.placeholder) {
                    if (work.id === 'e1' || work.id === 'e2') {
                      setFocusedProjectId(work.id);
                      setOpenId(null);
                      document.getElementById('studio')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      toggleWork(work.id);
                    }
                  }
                }}
                data-interactive={!work.placeholder || undefined}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h4
                    className="text-[22px] sm:text-[26px] font-normal tracking-tight text-[var(--text)] flex items-center gap-3"
                    style={{ fontFamily: 'var(--font-family-serif)' }}
                  >
                    {work.title}
                    {work.placeholder && (
                      <span className="text-[13px] uppercase tracking-[0.1em] border border-[var(--accent)]/40 px-2 py-[2px] ml-1 align-middle text-[var(--accent)] font-mono">
                        coming 2026
                      </span>
                    )}
                  </h4>

                  <span
                    className="text-[14px] lg:text-[13px] font-normal tracking-[0.1em] text-[var(--text-muted)]"
                    style={{ fontFamily: 'var(--font-family-mono)' }}
                  >
                    {work.date}
                  </span>
                </div>

                <p
                  className="text-[17px] sm:text-[18px] italic leading-relaxed text-[var(--text-secondary)] mb-4 max-w-[700px]"
                  style={{ fontFamily: 'var(--font-family-serif)' }}
                >
                  {work.question}
                </p>

                <div className="flex justify-between items-center">
                  <span
                    className="text-[14px] lg:text-[13px] font-normal tracking-[0.12em] text-[var(--text-muted)]"
                    style={{ fontFamily: 'var(--font-family-mono)' }}
                  >
                    {work.format}
                  </span>

                  {!work.placeholder && (
                    <span
                      className={`text-[15px] font-light inline-flex items-center justify-center w-[36px] h-[36px] border rounded-full transition-all duration-[300ms] ${
                        openId === work.id ? 'rotate-45' : ''
                      }`}
                      style={{
                        borderColor: 'var(--border)',
                        color: openId === work.id ? 'var(--text)' : 'var(--text-muted)',
                      }}
                    >
                      +
                    </span>
                  )}
                </div>
              </div>

              {/* Collapsed Trail Content (Text-only index layout, no secondary videos) */}
              {work.trail && openId === work.id && (
                <div className="mt-6 pt-6 border-t border-[var(--border)] max-w-3xl space-y-6 animate-fadeIn">
                  {work.trail.map((point, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3 sm:gap-6 py-4 border-t first:border-0 border-[var(--border)]"
                    >
                      <span
                        className="text-[14px] lg:text-[13px] font-normal tracking-[0.1em] text-[var(--text-muted)] pt-[2px]"
                        style={{ fontFamily: 'var(--font-family-mono)' }}
                      >
                        {point.label}
                      </span>

                      <div>
                        {point.pullquote && (
                          <div className="mb-3 border-l-2 pl-4 py-1" style={{ borderColor: 'var(--border-solid)' }}>
                            <p className="text-[17px] italic leading-relaxed text-[var(--text)]" style={{ fontFamily: 'var(--font-family-serif)' }}>
                              "{point.pullquote}"
                            </p>
                            {point.pullquoteSource && (
                              <span className="block text-[14px] lg:text-[13px] uppercase tracking-[0.08em] mt-1 text-[var(--text-muted)]" style={{ fontFamily: 'var(--font-family-mono)' }}>
                                — {point.pullquoteSource}
                              </span>
                            )}
                          </div>
                        )}

                        <p
                          className={`text-[17px] leading-relaxed ${
                            point.type === 'question' ? 'italic text-[var(--text)] font-serif' : 'text-[var(--text-secondary)] font-serif'
                          }`}
                        >
                          {point.content}
                        </p>

                        {point.links && (
                          <div className="mt-3 flex flex-wrap gap-4 text-[14px] lg:text-[13px]" style={{ fontFamily: 'var(--font-family-mono)' }}>
                            {point.links.map((link, j) => (
                              <a
                                key={j}
                                href={link.href}
                                target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 hover:opacity-70 transition-opacity uppercase tracking-wider text-[var(--text)] font-normal"
                              >
                                {link.text} →
                              </a>
                            ))}
                          </div>
                        )}

                        {point.status && (
                          <span
                            className="inline-block text-[14px] lg:text-[13px] font-normal tracking-[0.1em] border px-2 py-1 mt-3 cursor-pointer transition-colors bg-[var(--text)] text-[var(--bg)] hover:opacity-90 select-none"
                            style={{ fontFamily: 'var(--font-family-mono)' }}
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
        </div>
      </section>
    </>
  );
}
