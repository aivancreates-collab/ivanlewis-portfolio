import { useState } from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { ScriptModal } from './ScriptModal';

export interface ThinkingPreviewItem {
  tag: string;
  title: string;
  medium: string;
  context: string;
  leadQuestion: string;
  voiceQuote: string;
  developmentLogic: {
    label: string;
    content: string;
    isKeyPivot?: boolean;
  }[];
  scriptId?: 'e1' | 'e2';
  scriptTitle?: string;
}

// Provisionally configured with The Last Message development logic as requested,
// built as a generic, reusable content module ready to support any project/concept.
const defaultPreviewData: ThinkingPreviewItem = {
  tag: 'HOW I THINK',
  title: 'The Last Message',
  medium: 'Screenplay · In Development',
  context: 'A brief or an idea is only as good as the question underneath it.',
  leadQuestion: 'What happens to the words people were saving for later, and never sent?',
  voiceQuote: 'Most briefs tell me what to make. I usually start by asking why we’re making it.',
  developmentLogic: [
    {
      label: 'the seed',
      content:
        "A conversation about grief. Someone mentioned they still texted their dead father's number sometimes. Not expecting a reply. Just because the habit had not stopped.",
    },
    {
      label: 'the question',
      content: 'What if the reply came?',
    },
    {
      label: 'the material',
      content:
        'News stories about grief tech startups. The quiet industry forming around loss and digital presence. None of it felt like the real thing yet.',
    },
    {
      label: 'the pivot',
      content:
        'The first draft made the service the villain. That was too easy. The real question was not whether it was ethical. It was whether the son deserved to know which messages were real. The script got harder once the villain disappeared.',
      isKeyPivot: true,
    },
    {
      label: 'the thing',
      content: 'Registered screenplay. 18 pages. SWA India, Feb 2026.',
    },
  ],
  scriptId: 'e1',
  scriptTitle: 'The Last Message',
};

interface ThinkingPreviewSectionProps {
  data?: ThinkingPreviewItem;
}

export function ThinkingPreviewSection({ data = defaultPreviewData }: ThinkingPreviewSectionProps) {
  const [activeScriptModal, setActiveScriptModal] = useState<'e1' | 'e2' | null>(null);

  return (
    <section 
      className="py-16 sm:py-20 md:py-24" 
      style={{ backgroundColor: 'var(--bg-primary)' }} 
      id="thinking"
    >
      <div className="max-w-[1000px] mx-auto px-5 sm:px-10 lg:px-16">
        
        {/* Supporting Editorial Voice Signal (Restrained, not oversized) */}
        <div className="mb-12 md:mb-14 pb-8 border-b border-[#222222]">
          <p 
            className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.6] text-white/90 font-normal italic max-w-[760px]"
            style={{ fontFamily: 'var(--font-family-serif)' }}
          >
            "{data.voiceQuote}"
          </p>
        </div>

        {/* Section Header */}
        <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
          <div>
            <span
              className="block text-[11px] sm:text-[12px] uppercase font-normal tracking-[0.2em] text-[var(--text-muted)]"
              style={{ fontFamily: 'var(--font-family-mono)' }}
            >
              {data.tag}
            </span>
            <h3 
              className="text-[22px] sm:text-[26px] md:text-[28px] font-normal tracking-tight text-white mt-1"
              style={{ fontFamily: 'var(--font-family-serif)' }}
            >
              {data.title}
            </h3>
          </div>
          <span 
            className="text-[12px] text-[var(--text-muted)] font-mono"
            style={{ fontFamily: 'var(--font-family-mono)' }}
          >
            {data.medium}
          </span>
        </div>

        {/* Lead Question Anchor */}
        <div className="mb-8 p-5 sm:p-6 bg-[#141414] border border-[#222222]">
          <span 
            className="block text-[10px] uppercase tracking-[0.2em] text-[var(--accent-warm)] mb-1.5"
            style={{ fontFamily: 'var(--font-family-mono)' }}
          >
            THE QUESTION UNDERNEATH
          </span>
          <p 
            className="text-[17px] sm:text-[19px] leading-[1.4] text-white/95 font-normal"
            style={{ fontFamily: 'var(--font-family-serif)' }}
          >
            "{data.leadQuestion}"
          </p>
        </div>

        {/* Condensed Development Logic Preview */}
        <div className="border border-[#222222] bg-[#111111] divide-y divide-[#222222]">
          {data.developmentLogic.map((step, idx) => (
            <div 
              key={idx} 
              className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 ${
                step.isKeyPivot ? 'bg-[#161616]' : ''
              }`}
            >
              <span 
                className="w-28 shrink-0 text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)] font-mono"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                {step.label}
              </span>
              <p 
                className={`text-[14px] sm:text-[15px] leading-[1.6] ${
                  step.isKeyPivot ? 'text-white font-normal' : 'text-white/80'
                }`}
                style={{ fontFamily: 'var(--font-family-sans)' }}
              >
                {step.content}
              </p>
            </div>
          ))}
        </div>

        {/* Direct Action to Explore Full Excerpt if script exists */}
        {data.scriptId && (
          <div className="mt-6 flex items-center justify-between pt-2">
            <button
              onClick={() => setActiveScriptModal(data.scriptId || null)}
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-white/90 hover:text-[var(--accent-warm)] transition-colors py-2"
              style={{ fontFamily: 'var(--font-family-mono)' }}
            >
              <BookOpen size={14} className="text-[var(--accent-warm)]" />
              <span>Read Full Screenplay Excerpt</span>
              <ArrowRight size={13} />
            </button>

            <a 
              href="#studio" 
              className="text-[12px] text-[var(--text-muted)] hover:text-white transition-colors font-mono"
              style={{ fontFamily: 'var(--font-family-mono)' }}
            >
              View in Studio ↓
            </a>
          </div>
        )}

      </div>

      {/* Screenplay reader modal */}
      {activeScriptModal && (
        <ScriptModal
          isOpen={true}
          scriptId={activeScriptModal}
          onClose={() => setActiveScriptModal(null)}
        />
      )}
    </section>
  );
}
